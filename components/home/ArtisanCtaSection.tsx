// components/home/ArtisanCtaSection.tsx
'use client'
import { useState } from 'react'
import { ArrowRight, Briefcase, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function ArtisanCtaSection() {
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const benefits = [
    { icon: Briefcase, text: "Get more jobs" },
    { icon: TrendingUp, text: "Grow your income" },
    { icon: Users, text: "Build your reputation" }
  ]

  const features = [
    { emoji: '👷', title: 'Verified Badge', description: 'Stand out with verification' },
    { emoji: '📱', title: 'Mobile App', description: 'Manage jobs on the go' },
    { emoji: '💰', title: 'Instant Payments', description: 'Get paid quickly' },
    { emoji: '⭐', title: 'Build Reviews', description: 'Grow your reputation' }
  ]

  const stats = [
    { number: '500+', label: 'Active Artisans' },
    { number: '₦50K+', label: 'Avg. Monthly Income' },
    { number: '15K+', label: 'Jobs Completed' }
  ]

  // Static styles
  const staticStyles = {
    section: {
      position: 'relative' as const,
      padding: '5rem 0',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    contentWrapper: {
      color: 'white'
    },
    heading: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    benefitsList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      marginBottom: '2rem'
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    iconBox: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    benefitText: {
      fontSize: '1.125rem',
      fontWeight: '500'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginTop: '3rem'
    },
    statItem: {
      textAlign: 'left' as const
    },
    statNumber: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '0.25rem'
    },
    statLabel: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '0.875rem'
    },
    illustrationContainer: {
      position: 'relative' as const
    },
    glassCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      borderRadius: '1.5rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    },
    featureEmoji: {
      fontSize: '2rem',
      marginBottom: '0.75rem'
    },
    featureTitle: {
      fontWeight: '600',
      color: 'white',
      marginBottom: '0.25rem'
    },
    featureDescription: {
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.8)'
    }
  }

  // Dynamic styles
  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 2rem',
    backgroundColor: isButtonHovered ? '#f3f4f6' : 'white',
    color: '#2563eb',
    fontWeight: '600',
    borderRadius: '0.75rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: isButtonHovered 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transform: isButtonHovered ? 'translateY(-4px)' : 'translateY(0)'
  }

  const featureCardStyle = (isHovered: boolean) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    border: isHovered 
      ? '1px solid rgba(255, 255, 255, 0.3)' 
      : '1px solid rgba(255, 255, 255, 0.1)'
  })

  // Responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024

  const responsiveGrid = {
    display: 'grid',
    gridTemplateColumns: isTablet ? '1fr' : 'repeat(2, 1fr)',
    gap: '3rem',
    alignItems: 'center'
  }

  const responsiveStatsGrid = {
    ...staticStyles.statsGrid,
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={responsiveGrid}>
          {/* Content */}
          <div style={staticStyles.contentWrapper}>
            <h2 style={staticStyles.heading}>
              Are You a Skilled Artisan?
            </h2>
            <p style={staticStyles.subtitle}>
              Join ProbFixer and connect with thousands of customers looking for your services. 
              Grow your business and increase your income today!
            </p>

            {/* Benefits */}
            <div style={staticStyles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} style={staticStyles.benefitItem}>
                  <div style={staticStyles.iconBox}>
                    <benefit.icon style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                  </div>
                  <span style={staticStyles.benefitText}>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/artisan/join" 
              style={ctaButtonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Join as an Artisan
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
            </Link>

            {/* Stats */}
            <div style={responsiveStatsGrid}>
              {stats.map((stat, index) => (
                <div key={index} style={staticStyles.statItem}>
                  <div style={staticStyles.statNumber}>{stat.number}</div>
                  <div style={staticStyles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration */}
          <div style={staticStyles.illustrationContainer}>
            <div style={staticStyles.glassCard}>
              <div style={staticStyles.featuresGrid}>
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    style={featureCardStyle(hoveredCard === index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div style={staticStyles.featureEmoji}>{feature.emoji}</div>
                    <h4 style={staticStyles.featureTitle}>{feature.title}</h4>
                    <p style={staticStyles.featureDescription}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}