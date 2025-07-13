// components/layout/Navbarfixed.tsx
'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

// Static styles moved outside component
const staticStyles = {
  logoText: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    letterSpacing: '-0.025em'
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    transition: 'all 0.3s ease'
  },
  primaryButton: {
    textDecoration: 'none',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontWeight: '500',
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
    border: 'none',
    cursor: 'pointer'
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    gap: '4px'
  },
  mobileLink: {
    display: 'block',
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '1.125rem',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    marginBottom: '0.5rem',
    transition: 'all 0.3s ease'
  },
  mobilePrimaryButton: {
    display: 'block',
    textDecoration: 'none',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    fontWeight: '500',
    fontSize: '1.125rem',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    marginBottom: '0.5rem',
    transition: 'all 0.3s ease',
    textAlign: 'center' as const
  }
}

// Custom hook for window width
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth)
      
      // Set initial width
      handleResize()
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

export default function Navbarfixed() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth ? windowWidth < 768 : false

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Memoized dynamic styles
  const headerStyle = useMemo(() => ({
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem 0',
    transition: 'all 0.3s ease',
    boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none'
  }), [scrolled])

  const containerStyle = useMemo(() => ({
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1.5rem'
  }), [])

  const navStyle = useMemo(() => ({
    display: isMobile ? 'none' : 'flex',
    gap: '2rem',
    alignItems: 'center'
  }), [isMobile])

  const linkStyle = (isHovered: boolean) => ({
    textDecoration: 'none',
    color: isHovered ? '#3b82f6' : '#374151',
    fontWeight: '500',
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    padding: '0.5rem 0'
  })

  const mobileButtonStyle = useMemo(() => ({
    display: isMobile ? 'block' : 'none',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }), [isMobile])

  const hamburgerLineStyle = (index: number) => ({
    display: 'block',
    width: '24px',
    height: '2px',
    backgroundColor: '#374151',
    transition: 'all 0.3s ease',
    transformOrigin: 'center',
    ...(menuOpen && index === 0 && {
      transform: 'rotate(45deg) translate(6px, 6px)'
    }),
    ...(menuOpen && index === 1 && {
      opacity: 0
    }),
    ...(menuOpen && index === 2 && {
      transform: 'rotate(-45deg) translate(6px, -6px)'
    })
  })

  const mobileMenuStyle = useMemo(() => ({
    display: isMobile ? 'block' : 'none',
    position: 'fixed' as const,
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
    opacity: menuOpen ? 1 : 0,
    visibility: (menuOpen ? 'visible' : 'hidden') as React.CSSProperties['visibility'],
    transition: 'all 0.3s ease'
  }), [isMobile, menuOpen])

  const backdropStyle = useMemo(() => ({
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    zIndex: 40,
    display: menuOpen && isMobile ? 'block' : 'none'
  }), [menuOpen, isMobile])

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <Link href="/" style={staticStyles.logoText}>
            ProbFixer
            <div style={staticStyles.dot}></div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={navStyle} role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              style={linkStyle(hoveredLink === 'home')}
              onMouseEnter={() => setHoveredLink('home')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Home
            </Link>
            <Link 
              href="/browse" 
              style={linkStyle(hoveredLink === 'browse')}
              onMouseEnter={() => setHoveredLink('browse')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Browse
            </Link>
            <Link 
              href="/post" 
              style={staticStyles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.2)'
              }}
            >
              Post Problem
            </Link>
            <Link 
              href="/about" 
              style={linkStyle(hoveredLink === 'about')}
              onMouseEnter={() => setHoveredLink('about')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              style={linkStyle(hoveredLink === 'contact')}
              onMouseEnter={() => setHoveredLink('contact')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={mobileButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div style={staticStyles.hamburger}>
              <span style={hamburgerLineStyle(0)} aria-hidden="true"></span>
              <span style={hamburgerLineStyle(1)} aria-hidden="true"></span>
              <span style={hamburgerLineStyle(2)} aria-hidden="true"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          style={mobileMenuStyle}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            <Link 
              href="/" 
              style={staticStyles.mobileLink}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.color = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#374151'
              }}
            >
              Home
            </Link>
            <Link 
              href="/browse" 
              style={staticStyles.mobileLink}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.color = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#374151'
              }}
            >
              Browse
            </Link>
            <Link 
              href="/post" 
              style={staticStyles.mobilePrimaryButton}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb, #7c3aed)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
              }}
            >
              Post Problem
            </Link>
            <Link 
              href="/about" 
              style={staticStyles.mobileLink}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.color = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#374151'
              }}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              style={staticStyles.mobileLink}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.color = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#374151'
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        style={backdropStyle}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}