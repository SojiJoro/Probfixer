// components/home/HowItWorks.tsx
'use client'

import { useState } from 'react'
import { Search, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const HowItWorks = () => {
  const router = useRouter()
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const steps = [
    {
      icon: Search,
      title: 'Post Your Problem',
      description: 'Describe what needs fixing and add photos if needed',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      icon: MessageSquare,
      title: 'Get Quotes',
      description: 'Receive quotes from verified artisans in your area',
      gradient: 'linear-gradient(135deg, #a855f7, #9333ea)'
    },
    {
      icon: CheckCircle,
      title: 'Hire & Relax',
      description: 'Choose your artisan and get your problem fixed',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
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
    textCenter: {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: '64rem',
      margin: '0 auto'
    },
    stepCard: {
      position: 'relative' as const,
      textAlign: 'center' as const
    },
    iconContainer: {
      position: 'relative' as const,
      display: 'inline-block',
      marginBottom: '1.5rem'
    },
    stepNumber: {
      position: 'absolute' as const,
      top: '-0.5rem',
      right: '-0.5rem',
      width: '2rem',
      height: '2rem',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    stepNumberText: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: '#374151'
    },
    stepTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.75rem',
      color: '#111827'
    },
    stepDescription: {
      color: '#6b7280',
      lineHeight: '1.75'
    },
    arrow: {
      position: 'absolute' as const,
      top: '2.5rem',
      right: '-1rem',
      transform: 'translateX(50%)'
    },
    ctaContainer: {
      textAlign: 'center' as const,
      marginTop: '4rem'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      border: 'none',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
    }
  }


  const buttonStyle = {
    ...staticStyles.button,
    transform: isButtonHovered ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isButtonHovered 
      ? '0 20px 25px -5px rgba(59, 130, 246, 0.4)' 
      : '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
  }

  // Responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const responsiveGrid = {
    ...staticStyles.grid,
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={staticStyles.textCenter}>
          <h2 style={staticStyles.heading}>
            How <span style={staticStyles.gradientText}>ProbFixer</span> Works
          </h2>
          <p style={staticStyles.subtitle}>
            Get your problems fixed in 3 simple steps
          </p>
        </div>

        <div style={responsiveGrid}>
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && !isMobile && (
                <div style={staticStyles.arrow}>
                  <ArrowRight style={{ width: '2rem', height: '2rem', color: '#d1d5db' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={staticStyles.ctaContainer}>
          <button 
            style={buttonStyle}
            onClick={() => router.push('/post')}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Get Started Now
            <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks