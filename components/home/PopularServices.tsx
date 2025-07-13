// components/home/PopularServices.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

const PopularServices = () => {
  const router = useRouter()
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [isViewAllHovered, setIsViewAllHovered] = useState(false)
  
  const services = [
    { 
      id: 1, 
      name: 'Plumbing', 
      icon: '🔧', 
      jobs: 1234,
      description: 'Pipe repairs, installations',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    { 
      id: 2, 
      name: 'Electrical', 
      icon: '⚡', 
      jobs: 987,
      description: 'Wiring, installations',
      gradient: 'linear-gradient(135deg, #eab308, #f97316)'
    },
    { 
      id: 3, 
      name: 'AC Repair', 
      icon: '❄️', 
      jobs: 756,
      description: 'Servicing, repairs',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    { 
      id: 4, 
      name: 'Carpentry', 
      icon: '🔨', 
      jobs: 543,
      description: 'Furniture, woodwork',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)'
    },
    { 
      id: 5, 
      name: 'Painting', 
      icon: '🎨', 
      jobs: 432,
      description: 'Interior, exterior',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)'
    },
    { 
      id: 6, 
      name: 'Cleaning', 
      icon: '🧹', 
      jobs: 876,
      description: 'Deep cleaning, fumigation',
      gradient: 'linear-gradient(135deg, #22c55e, #10b981)'
    },
    { 
      id: 7, 
      name: 'Generator', 
      icon: '⚡', 
      jobs: 234,
      description: 'Repairs, servicing',
      gradient: 'linear-gradient(135deg, #ef4444, #f97316)'
    },
    { 
      id: 8, 
      name: 'Appliances', 
      icon: '🔌', 
      jobs: 345,
      description: 'All appliance repairs',
      gradient: 'linear-gradient(135deg, #6366f1, #a855f7)'
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
      marginBottom: '3rem'
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
      color: '#6b7280'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      maxWidth: '72rem',
      margin: '0 auto'
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      transition: 'transform 0.3s ease'
    },
    serviceName: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      color: '#111827',
      marginBottom: '0.25rem'
    },
    serviceDescription: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.75rem'
    },
    serviceStats: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    jobCount: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#6b7280'
    },
    viewAllContainer: {
      textAlign: 'center' as const,
      marginTop: '3rem'
    },
    viewAllButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#3b82f6',
      backgroundColor: 'transparent',
      border: '2px solid #3b82f6',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  }

  // Dynamic styles
  const serviceCardStyle = (isHovered: boolean) => ({
    position: 'relative' as const,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  })

  const backgroundGradientStyle = (gradient: string, isHovered: boolean) => ({
    position: 'absolute' as const,
    inset: 0,
    background: gradient,
    opacity: isHovered ? 0.1 : 0,
    transition: 'opacity 0.3s ease'
  })

  const serviceIconStyle = (isHovered: boolean) => ({
    ...staticStyles.serviceIcon,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  })

  const arrowStyle = (isHovered: boolean) => ({
    width: '1rem',
    height: '1rem',
    color: isHovered ? '#3b82f6' : '#9ca3af',
    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
    transition: 'all 0.3s ease'
  })

  const viewAllButtonStyle = {
    ...staticStyles.viewAllButton,
    backgroundColor: isViewAllHovered ? '#3b82f6' : 'transparent',
    color: isViewAllHovered ? 'white' : '#3b82f6',
    transform: isViewAllHovered ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isViewAllHovered ? '0 10px 15px -3px rgba(59, 130, 246, 0.3)' : 'none'
  }

  // Responsive grid
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const responsiveGrid = {
    ...staticStyles.grid,
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={staticStyles.textCenter}>
          <h2 style={staticStyles.heading}>
            Popular <span style={staticStyles.gradientText}>Services</span>
          </h2>
          <p style={staticStyles.subtitle}>
            Browse artisans by service category
          </p>
        </div>

        <div style={responsiveGrid}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => router.push(`/browse?service=${service.name}`)}
              style={serviceCardStyle(hoveredService === service.id)}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {service.jobs.toLocaleString()} jobs
              </p>
            </button>
          ))}
        </div>

        {/* View All Services */}
        <div style={staticStyles.viewAllContainer}>
          <button 
            onClick={() => router.push('/services')}
            style={viewAllButtonStyle}
            onMouseEnter={() => setIsViewAllHovered(true)}
            onMouseLeave={() => setIsViewAllHovered(false)}
          >
            View All Services
            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularServices