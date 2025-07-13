// components/home/Hero.tsx
'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, MapPin, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Custom hook for window width (SSR safe)
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

// Inject animation styles
function useAnimationStyles() {
  useEffect(() => {
    if (document.getElementById('hero-animations')) return

    const style = document.createElement('style')
    style.id = 'hero-animations'
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        33% {
          transform: translateY(-20px) rotate(1deg);
        }
        66% {
          transform: translateY(20px) rotate(-1deg);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      const existingStyle = document.getElementById('hero-animations')
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [])
}

const Hero = () => {
  const router = useRouter()
  const windowWidth = useWindowWidth()
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('Lagos')
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [isSearchHovered, setIsSearchHovered] = useState(false)

  useAnimationStyles()

  const isMobile = windowWidth ? windowWidth < 768 : false
  const isTablet = windowWidth ? windowWidth < 1024 : false

  const popularServices = [
    { icon: '🔧', name: 'Plumbing', gradient: 'linear-gradient(to right, #3b82f6, #2563eb)' },
    { icon: '⚡', name: 'Electrical', gradient: 'linear-gradient(to right, #eab308, #f97316)' },
    { icon: '❄️', name: 'AC Repair', gradient: 'linear-gradient(to right, #06b6d4, #3b82f6)' },
    { icon: '🔨', name: 'Carpentry', gradient: 'linear-gradient(to right, #f59e0b, #f97316)' },
    { icon: '🎨', name: 'Painting', gradient: 'linear-gradient(to right, #a855f7, #ec4899)' },
    { icon: '🏠', name: 'General Repairs', gradient: 'linear-gradient(to right, #22c55e, #10b981)' }
  ]

  const staticStyles = {
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#eff6ff',
      border: '1px solid #dbeafe',
      borderRadius: '9999px',
      marginBottom: '1.5rem'
    },
    badgeText: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#1d4ed8'
    },
    mainHeading: {
      fontSize: 'clamp(3rem, 5vw, 5.25rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      color: '#111827'
    },
    gradientText: {
      display: 'block',
      background: 'linear-gradient(to right, #2563eb, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
      color: '#6b7280',
      marginBottom: '3rem',
      maxWidth: '48rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    searchBox: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      padding: '0.75rem',
      marginBottom: '3rem',
      maxWidth: '56rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    inputWrapper: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      padding: '1rem 1.25rem',
      border: '1px solid #f3f4f6'
    },
    input: {
      width: '100%',
      outline: 'none',
      border: 'none',
      fontSize: '1rem',
      color: '#374151',
      backgroundColor: 'transparent'
    },
    selectWrapper: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      padding: '1rem 1.25rem',
      border: '1px solid #f3f4f6'
    },
    select: {
      width: '100%',
      outline: 'none',
      border: 'none',
      fontSize: '1rem',
      color: '#374151',
      backgroundColor: 'transparent',
      cursor: 'pointer'
    },
    primaryButton: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      color: 'white',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      border: 'none',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
    },
    popularServicesLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '1rem',
      fontWeight: '500',
      letterSpacing: '0.05em'
    },
    alternativeCTA: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      color: '#6b7280',
      flexWrap: 'wrap' as const
    },
    linkButton: {
      color: '#2563eb',
      fontWeight: '600',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      transition: 'color 0.3s ease',
      padding: '0.25rem'
    }
  }

  const sectionStyle = useMemo(() => ({
    position: 'relative' as const,
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    padding: isMobile ? '3rem 0' : '5rem 0',
    overflow: 'hidden'
  }), [isMobile])

  const containerStyle = useMemo(() => ({
    position: 'relative' as const,
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    width: '100%'
  }), [])

  const searchContainerStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: isTablet ? 'column' as const : 'row' as const,
    gap: '0.75rem'
  }), [isTablet])

  const blobStyle = (delay: number, position: { top?: string; bottom?: string; left?: string; right?: string }) => ({
    position: 'absolute' as const,
    width: isMobile ? '14rem' : '18rem',
    height: isMobile ? '14rem' : '18rem',
    borderRadius: '50%',
    filter: 'blur(48px)',
    opacity: 0.2,
    animation: `float 20s ease-in-out ${delay}s infinite`,
    ...position
  })

  const serviceCardStyle = (isHovered: boolean) => ({
    position: 'relative' as const,
    padding: '0.75rem 1.5rem',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    border: `1px solid ${isHovered ? '#d1d5db' : '#e5e7eb'}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isHovered ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
    overflow: 'hidden'
  })

  const serviceOverlayStyle = (isHovered: boolean, gradient: string) => ({
    position: 'absolute' as const,
    inset: 0,
    background: gradient,
    opacity: isHovered ? 0.1 : 0,
    borderRadius: '0.75rem',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none' as const
  })

  const searchButtonStyle = {
    ...staticStyles.primaryButton,
    transform: isSearchHovered ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isSearchHovered 
      ? '0 20px 25px -5px rgba(59, 130, 246, 0.4)' 
      : '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
    width: isTablet ? '100%' : 'auto'
  }

  const selectWrapperStyle = {
    ...staticStyles.selectWrapper,
    width: isTablet ? '100%' : '16rem'
  }

  return (
<<<<<<< HEAD
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Trusted Artisans in{' '}
            <span className="text-purple-600">Minutes</span>
=======
    <section style={sectionStyle}>
      <div style={{ position: 'absolute', inset: 0, zIndex: -10 }}>
        <div style={{ ...blobStyle(0, { top: '5rem', left: '2.5rem' }), backgroundColor: '#c084fc' }} />
        <div style={{ ...blobStyle(2, { top: '10rem', right: '2.5rem' }), backgroundColor: '#fde047' }} />
        <div style={{ ...blobStyle(4, { bottom: '-2rem', left: '5rem' }), backgroundColor: '#f9a8d4' }} />
      </div>

      <div style={containerStyle}>
        <div style={{ textAlign: 'center' as const, maxWidth: '80rem', margin: '0 auto' }}>
          <div style={staticStyles.badge}>
            <Sparkles style={{ width: '1rem', height: '1rem', color: '#2563eb' }} />
            <span style={staticStyles.badgeText}>Nigeria's #1 Artisan Platform</span>
          </div>

          <h1 style={staticStyles.mainHeading}>
            Find Trusted Artisans
            <span style={staticStyles.gradientText}>In Minutes</span>
>>>>>>> 2f0859f (designs)
          </h1>
          
          <p style={staticStyles.subtitle}>
            Connect with verified professionals for all your home and office repairs across Nigeria
          </p>

          <div style={staticStyles.searchBox}>
            <form onSubmit={(e) => { e.preventDefault(); router.push('/browse') }}>
              <div style={searchContainerStyle}>
                <div style={staticStyles.inputWrapper}>
                  <Search style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem', flexShrink: 0 }} />
                  <input
                    type="text"
                    placeholder="What do you need fixed?"
                                       style={staticStyles.input}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search for services"
                  />
                </div>

                <div style={selectWrapperStyle}>
                  <MapPin style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem', flexShrink: 0 }} />
                  <select
                    style={staticStyles.select}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    aria-label="Select location"
                  >
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Port Harcourt</option>
                    <option>Ibadan</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  style={searchButtonStyle}
                  onMouseEnter={() => setIsSearchHovered(true)}
                  onMouseLeave={() => setIsSearchHovered(false)}
                >
                  Search Artisans
                </button>
              </div>
            </form>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <p style={staticStyles.popularServicesLabel}>POPULAR SERVICES</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center', gap: '0.75rem' }}>
              {popularServices.map((service) => (
                <button
                  key={service.name}
                  onClick={() => router.push(`/browse?service=${service.name}`)}
                  style={serviceCardStyle(hoveredService === service.name)}
                  onMouseEnter={() => setHoveredService(service.name)}
                  onMouseLeave={() => setHoveredService(null)}
                  aria-label={`Browse ${service.name} services`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'relative' as const, zIndex: 1 }}>
                    <span style={{ 
                      fontSize: '1.5rem', 
                      transition: 'transform 0.3s ease',
                      transform: hoveredService === service.name ? 'scale(1.1)' : 'scale(1)'
                    }}>
                      {service.icon}
                    </span>
                    <span style={{ fontWeight: '500', color: '#374151' }}>{service.name}</span>
                  </div>
                  <div style={serviceOverlayStyle(hoveredService === service.name, service.gradient)} />
                </button>
              ))}
            </div>
          </div>

          <div style={staticStyles.alternativeCTA}>
            <span>Looking to post a job instead?</span>
            <button
              onClick={() => router.push('/post-problem')}
              style={staticStyles.linkButton}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#1d4ed8' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#2563eb' }}
            >
              Post Your Problem
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero