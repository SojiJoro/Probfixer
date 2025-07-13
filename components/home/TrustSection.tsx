// components/home/TrustSection.tsx
'use client'
import { useState } from 'react'
import { Shield, Clock, Award, Users, Star } from 'lucide-react'

const TrustSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All artisans go through background checks and skill verification',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Get quotes within hours, not days',
      gradient: 'linear-gradient(135deg, #a855f7, #9333ea)'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Satisfaction guaranteed or your money back',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
    },
    {
      icon: Users,
      title: 'Real Reviews',
      description: 'Read genuine reviews from verified customers',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)'
    }
  ]

  // Static styles
  const staticStyles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#ffffff'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '4rem'
    },
    heading: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#111827'
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
      maxWidth: '32rem',
      margin: '0 auto'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem'
    },
    featureCard: {
      textAlign: 'center' as const
    },
    iconContainer: {
      position: 'relative' as const,
      display: 'inline-block',
      marginBottom: '1.5rem'
    },
    featureTitle: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      marginBottom: '0.75rem',
      color: '#111827'
    },
    featureDescription: {
      color: '#6b7280',
      lineHeight: '1.6'
    },
    trustBadges: {
      background: 'linear-gradient(to right, #eff6ff, #f3e8ff)',
      borderRadius: '1.5rem',
      padding: '3rem'
    },
    badgesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '2rem',
      textAlign: 'center' as const
    },
    badgeNumber: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    badgeLabel: {
      color: '#6b7280',
      fontWeight: '500'
    },
    starContainer: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }

  // Dynamic styles
  const iconBoxStyle = (isHovered: boolean, gradient: string) => ({
    width: '4rem',
    height: '4rem',
    background: gradient,
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'all 0.3s ease',
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.2)' 
      : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  })

  // Trust badges data
  const trustBadges = [
    { number: '10K+', label: 'Happy Customers', color: '#3b82f6' },
    { number: '500+', label: 'Verified Artisans', color: '#a855f7' },
    { number: '4.8', label: 'Average Rating', color: '#22c55e', hasStar: true },
    { number: '24/7', label: 'Support Available', color: '#f97316' }
  ]

  // Responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const responsiveFeaturesGrid = {
    ...staticStyles.featuresGrid,
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)'
  }
  const responsiveBadgesGrid = {
    ...staticStyles.badgesGrid,
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
  }
  const responsiveTrustBadges = {
    ...staticStyles.trustBadges,
    padding: isMobile ? '2rem' : '3rem'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        {/* Header */}
        <div style={staticStyles.header}>
          <h2 style={staticStyles.heading}>
            Why Trust <span style={staticStyles.gradientText}>ProbFixer?</span>
          </h2>
          <p style={staticStyles.subtitle}>
            We ensure quality and reliability at every step
          </p>
        </div>

        {/* Features Grid */}
        <div style={responsiveFeaturesGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={staticStyles.featureCard}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div style={staticStyles.iconContainer}>
                <div style={iconBoxStyle(hoveredFeature === index, feature.gradient)}>
                  <feature.icon style={{ width: '2rem', height: '2rem', color: 'white' }} />
                </div>
              </div>
              <h3 style={staticStyles.featureTitle}>{feature.title}</h3>
              <p style={staticStyles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div style={responsiveTrustBadges}>
          <div style={responsiveBadgesGrid}>
            {trustBadges.map((badge, index) => (
              <div key={index}>
                <div style={{ ...staticStyles.badgeNumber, color: badge.color }}>
                  {badge.hasStar ? (
                    <span style={staticStyles.starContainer}>
                      {badge.number} <Star style={{ width: '2rem', height: '2rem', marginLeft: '0.25rem', fill: 'currentColor' }} />
                    </span>
                  ) : (
                    badge.number
                  )}
                </div>
                <div style={staticStyles.badgeLabel}>{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection