// components/home/MobileAppSection.tsx
'use client'
import { useState } from 'react'
import { Smartphone, Bell, MessageCircle, MapPin, Star, Download } from 'lucide-react'

export default function MobileAppSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [isPhoneHovered, setIsPhoneHovered] = useState(false)

  const features = [
    {
      icon: Bell,
      title: "Instant Notifications",
      subtitle: "Get notified when artisans respond to your request"
    },
    {
      icon: MessageCircle,
      title: "In-App Chat",
      subtitle: "Chat with artisans directly without sharing your number"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      subtitle: "Track your artisan's location in real-time"
    },
    {
      icon: Star,
      title: "Easy Reviews",
      subtitle: "Rate and review artisans after job completion"
    }
  ]

  // Static styles
  const staticStyles = {
    section: {
      padding: '5rem 0',
      overflow: 'hidden',
      backgroundColor: '#ffffff'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#dbeafe',
      borderRadius: '9999px',
      marginBottom: '1.5rem'
    },
    badgeText: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#1d4ed8'
    },
    heading: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#111827',
      lineHeight: '1.2'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      marginBottom: '2rem'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem'
    },
    featureTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      color: '#111827',
      marginBottom: '0.25rem'
    },
    featureSubtitle: {
      color: '#6b7280'
    },
    downloadButtons: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '1rem'
    },
    phoneContainer: {
      position: 'relative' as const
    },
    phoneWrapper: {
      position: 'relative' as const,
      zIndex: 10
    },
    phoneFrame: {
      backgroundColor: '#111827',
      borderRadius: '2.5rem',
      padding: '1rem'
    },
    phoneScreen: {
      backgroundColor: 'white',
      borderRadius: '2rem',
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    phoneContent: {
      textAlign: 'center' as const,
      padding: '0 2rem'
    },
    phoneTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '0.5rem'
    },
    phoneSubtitle: {
      color: '#6b7280'
    },
    backgroundBlob1: {
      position: 'absolute' as const,
      top: '2.5rem',
      right: '-2.5rem',
      width: '10rem',
      height: '10rem',
      backgroundColor: '#dbeafe',
      borderRadius: '50%',
      filter: 'blur(48px)',
      opacity: 0.5
    },
    backgroundBlob2: {
      position: 'absolute' as const,
      bottom: '2.5rem',
      left: '-2.5rem',
      width: '10rem',
      height: '10rem',
      backgroundColor: '#e9d5ff',
      borderRadius: '50%',
      filter: 'blur(48px)',
      opacity: 0.5
    }
  }

  // Dynamic styles
  const featureIconStyle = (isHovered: boolean) => ({
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease'
  })

  const downloadButtonStyle = (isHovered: boolean) => ({
    backgroundColor: isHovered ? '#1f2937' : '#000000',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  })

  const phoneOuter = {
    background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
    borderRadius: '3rem',
    padding: '2rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transform: isPhoneHovered ? 'rotate(3deg)' : 'rotate(6deg)',
    transition: 'transform 0.5s ease'
  }

  // Responsive adjustments
  const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const responsiveGrid = {
    display: 'grid',
    gridTemplateColumns: isTablet ? '1fr' : 'repeat(2, 1fr)',
    gap: '3rem',
    alignItems: 'center'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={responsiveGrid}>
          {/* Content */}
          <div>
            <div style={staticStyles.badge}>
              <Smartphone style={{ width: '1rem', height: '1rem', color: '#2563eb' }} />
              <span style={staticStyles.badgeText}>Coming Soon</span>
            </div>
            
            <h2 style={staticStyles.heading}>
              Get the ProbFixer <span style={staticStyles.gradientText}>Mobile App</span>
            </h2>
            <p style={staticStyles.subtitle}>
              Book artisans on the go. Get real-time updates, chat with artisans, and manage your bookings from your phone.
            </p>

            {/* Features */}
            <div style={staticStyles.featuresList}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  style={staticStyles.featureItem}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div style={featureIconStyle(hoveredFeature === index)}>
                    <feature.icon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                  </div>
                  <div>
                    <h3 style={staticStyles.featureTitle}>{feature.title}</h3>
                    <p style={staticStyles.featureSubtitle}>{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div style={staticStyles.downloadButtons}>
              <button 
                style={downloadButtonStyle(hoveredButton === 'appstore')}
                onMouseEnter={() => setHoveredButton('appstore')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Download style={{ width: '1.25rem', height: '1.25rem' }} />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Download on the</p>
                  <p style={{ fontWeight: '600' }}>App Store</p>
                </div>
              </button>
              <button 
                style={downloadButtonStyle(hoveredButton === 'playstore')}
                onMouseEnter={() => setHoveredButton('playstore')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Download style={{ width: '1.25rem', height: '1.25rem' }} />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Get it on</p>
                  <p style={{ fontWeight: '600' }}>Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          {!isMobile && (
            <div style={staticStyles.phoneContainer}>
              <div style={staticStyles.phoneWrapper}>
                <div 
                  style={phoneOuter}
                  onMouseEnter={() => setIsPhoneHovered(true)}
                  onMouseLeave={() => setIsPhoneHovered(false)}
                >
                  <div style={staticStyles.phoneFrame}>
                    <div style={staticStyles.phoneScreen}>
                      <div style={staticStyles.phoneContent}>
                        <Smartphone style={{ width: '4rem', height: '4rem', color: '#9ca3af', margin: '0 auto 1rem' }} />
                        <h3 style={staticStyles.phoneTitle}>ProbFixer Mobile</h3>
                        <p style={staticStyles.phoneSubtitle}>Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div style={staticStyles.backgroundBlob1}></div>
              <div style={staticStyles.backgroundBlob2}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}