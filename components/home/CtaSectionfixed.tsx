// components/home/CtaSectionfixed.tsx
'use client'
import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CtaSectionfixed() {
  const [primaryHovered, setPrimaryHovered] = useState(false)
  const [secondaryHovered, setSecondaryHovered] = useState(false)

  // Static styles
  const staticStyles = {
    section: {
      position: 'relative' as const,
      padding: '5rem 0',
      overflow: 'hidden'
    },
    backgroundGradient: {
      position: 'absolute' as const,
      inset: 0,
      background: 'linear-gradient(135deg, #2563eb, #9333ea, #ec4899)'
    },
    patternOverlay: {
      position: 'absolute' as const,
      inset: 0,
      opacity: 0.1
    },
    patternInner: {
      position: 'absolute' as const,
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      position: 'relative' as const,
      zIndex: 10
    },
    contentWrapper: {
      textAlign: 'center' as const,
      maxWidth: '48rem',
      margin: '0 auto'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      borderRadius: '9999px',
      marginBottom: '1.5rem'
    },
    badgeText: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'white'
    },
    heading: {
      fontSize: 'clamp(2rem, 5vw, 3.75rem)',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2.5rem',
      lineHeight: '1.6'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center'
    },
    trustIndicators: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '3rem',
      color: 'rgba(255, 255, 255, 0.8)',
      flexWrap: 'wrap' as const
    },
    trustItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    trustText: {
      fontWeight: '500'
    },
    icon: {
      width: '1.25rem',
      height: '1.25rem'
    }
  }

  // Dynamic styles
  const primaryButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 2rem',
    backgroundColor: primaryHovered ? '#f3f4f6' : 'white',
    color: '#2563eb',
    fontWeight: '600',
    borderRadius: '0.75rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: primaryHovered 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transform: primaryHovered ? 'translateY(-4px)' : 'translateY(0)'
  }

  const secondaryButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 2rem',
    backgroundColor: secondaryHovered ? 'white' : 'transparent',
    color: secondaryHovered ? '#2563eb' : 'white',
    fontWeight: '600',
    borderRadius: '0.75rem',
    border: '2px solid white',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  }

  // Responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const responsiveButtonContainer = {
    ...staticStyles.buttonContainer,
    flexDirection: isMobile ? 'column' as const : 'row' as const
  }

  return (
    <section style={staticStyles.section}>
      {/* Background Gradient */}
      <div style={staticStyles.backgroundGradient}></div>
      
      {/* Pattern Overlay */}
      <div style={staticStyles.patternOverlay}>
        <div style={staticStyles.patternInner}></div>
      </div>

      <div style={staticStyles.container}>
        <div style={staticStyles.contentWrapper}>
          <div style={staticStyles.badge}>
            <Sparkles style={{ width: '1rem', height: '1rem', color: 'white' }} />
            <span style={staticStyles.badgeText}>Limited Time Offer</span>
          </div>
          
          <h2 style={staticStyles.heading}>
            Ready to Fix Your Problems?
          </h2>
          <p style={staticStyles.subtitle}>
            Join thousands of Nigerians who trust ProbFixer for their home and office repairs. 
            Get 20% off your first booking!
          </p>
          
          <div style={responsiveButtonContainer}>
            <Link 
              href="/post-problem" 
              style={primaryButtonStyle}
              onMouseEnter={() => setPrimaryHovered(true)}
              onMouseLeave={() => setPrimaryHovered(false)}
            >
              Post Your Problem
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
            </Link>
            <Link 
              href="/browse" 
              style={secondaryButtonStyle}
              onMouseEnter={() => setSecondaryHovered(true)}
              onMouseLeave={() => setSecondaryHovered(false)}
            >
              Browse Artisans
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div style={staticStyles.trustIndicators}>
            <div style={staticStyles.trustItem}>
              <svg style={staticStyles.icon} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span style={staticStyles.trustText}>4.8/5 Rating</span>
            </div>
            <div style={staticStyles.trustItem}>
              <svg style={staticStyles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span style={staticStyles.trustText}>24/7 Support</span>
            </div>
            <div style={staticStyles.trustItem}>
              <svg style={staticStyles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span style={staticStyles.trustText}>100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}