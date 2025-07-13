// components/home/StatsSection.tsx
'use client'
import { useState } from 'react'
import { TrendingUp } from 'lucide-react'

export default function StatsSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const stats = [
    { 
      number: '10K+', 
      label: 'Happy Customers',
      growth: '+25%',
      icon: '😊'
    },
    { 
      number: '500+', 
      label: 'Verified Artisans',
      growth: '+40%',
      icon: '👷'
    },
    { 
      number: '15K+', 
      label: 'Jobs Completed',
      growth: '+60%',
      icon: '✅'
    },
    { 
      number: '4.8★', 
      label: 'Average Rating',
      growth: '+0.3',
      icon: '⭐'
    }
  ]

  // Static styles
  const staticStyles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#1f2937'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem'
    },
    heading: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem'
    },
    highlightText: {
      color: '#60a5fa'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db'
    },
    statIcon: {
      fontSize: '2rem',
      marginBottom: '0.75rem'
    },
    statNumber: {
      fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.5rem',
      lineHeight: '1'
    },
    statLabel: {
      color: '#d1d5db',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    growthContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      color: '#4ade80',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  }

  // Dynamic styles
  const statCardStyle = (isHovered: boolean) => ({
    backgroundColor: isHovered ? 'rgba(31, 41, 55, 0.7)' : 'rgba(31, 41, 55, 0.5)',
    backdropFilter: 'blur(4px)',
    borderRadius: '1rem',
    padding: '1.5rem',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.3)' 
      : '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
  })

  // Responsive grid
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: '2rem'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={staticStyles.header}>
          <h2 style={staticStyles.heading}>
            Growing <span style={staticStyles.highlightText}>Every Day</span>
          </h2>
          <p style={staticStyles.subtitle}>
            Join thousands who trust ProbFixer
          </p>
        </div>

        <div style={gridStyle}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              style={{ textAlign: 'center' }}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div style={statCardStyle(hoveredStat === index)}>
                <div style={staticStyles.statIcon}>{stat.icon}</div>
                <div style={staticStyles.statNumber}>
                  {stat.number}
                </div>
                <div style={staticStyles.statLabel}>{stat.label}</div>
                <div style={staticStyles.growthContainer}>
                  <TrendingUp style={{ width: '1rem', height: '1rem' }} />
                  {stat.growth}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}