// components/home/FeaturedArtisans.tsx
'use client'
import { useState } from 'react'
import { Star, MapPin, Clock, Shield, TrendingUp } from 'lucide-react'
import { useRouter } from 'next/navigation'

const FeaturedArtisans = () => {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  
  const artisans = [
    {
      id: 1,
      name: 'Chidi Okafor',
      service: 'Master Plumber',
      rating: 4.8,
      reviews: 124,
      jobs: 340,
      responseTime: '30 mins',
      location: 'Lekki, Lagos',
      image: 'https://i.pravatar.cc/150?img=1',
      verified: true,
      trending: true,
      specialties: ['Pipe Repair', 'Installation']
    },
    {
      id: 2,
      name: 'Fatima Abdullahi',
      service: 'Electrician',
      rating: 4.9,
      reviews: 89,
      jobs: 256,
      responseTime: '1 hour',
      location: 'Wuse, Abuja',
      image: 'https://i.pravatar.cc/150?img=2',
      verified: true,
      specialties: ['Wiring', 'Solar Installation']
    },
    {
      id: 3,
      name: 'Emeka Nwosu',
      service: 'AC Technician',
      rating: 4.7,
      reviews: 156,
      jobs: 412,
      responseTime: '45 mins',
      location: 'VI, Lagos',
      image: 'https://i.pravatar.cc/150?img=3',
      verified: true,
      specialties: ['AC Repair', 'Maintenance']
    },
    {
      id: 4,
      name: 'Aisha Mohammed',
      service: 'Carpenter',
      rating: 4.9,
      reviews: 67,
      jobs: 189,
      responseTime: '2 hours',
      location: 'Garki, Abuja',
      image: 'https://i.pravatar.cc/150?img=4',
      verified: true,
      trending: true,
      specialties: ['Furniture', 'Cabinets']
    }
  ]

  // Static styles
  const staticStyles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
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
    viewAllButton: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#3b82f6',
      backgroundColor: 'transparent',
      border: '2px solid #3b82f6',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    trendingBadge: {
      position: 'absolute' as const,
      top: '1rem',
      right: '1rem',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      padding: '0.25rem 0.75rem',
      backgroundColor: '#f97316',
      color: 'white',
      fontSize: '0.75rem',
      fontWeight: '600',
      borderRadius: '9999px'
    },
    profileImage: {
      width: '4rem',
      height: '4rem',
      borderRadius: '0.75rem',
      objectFit: 'cover' as const
    },
    verifiedBadge: {
      position: 'absolute' as const,
      bottom: '-0.25rem',
      right: '-0.25rem',
      width: '1.5rem',
      height: '1.5rem',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    starIcon: {
      width: '1rem',
      height: '1rem'
    },
    statsIcon: {
      width: '1rem',
      height: '1rem',
      color: '#9ca3af'
    },
    specialtyTag: {
      padding: '0.25rem 0.5rem',
      backgroundColor: '#f3f4f6',
      color: '#6b7280',
      fontSize: '0.75rem',
      borderRadius: '0.5rem',
      fontWeight: '500'
    },
    primaryButton: {
      width: '100%',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      border: 'none',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    mobileViewAll: {
      textAlign: 'center' as const,
      marginTop: '2rem',
      display: 'block'
    }
  }

  // Dynamic styles
  const cardStyle = (isHovered: boolean) => ({
    position: 'relative' as const,
    backgroundColor: 'white',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    transition: 'all 0.3s ease'
  })

  const viewAllButtonStyle = (isHovered: boolean) => ({
    ...staticStyles.viewAllButton,
    backgroundColor: isHovered ? '#3b82f6' : 'transparent',
    color: isHovered ? 'white' : '#3b82f6',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 10px 15px -3px rgba(59, 130, 246, 0.3)' : 'none'
  })

  const primaryButtonStyle = (isHovered: boolean) => ({
    ...staticStyles.primaryButton,
    boxShadow: isHovered 
      ? '0 10px 15px -3px rgba(59, 130, 246, 0.4)'
      : '0 4px 6px -1px rgba(59, 130, 246, 0.2)',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
  })

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        style={{
          ...staticStyles.starIcon,
          fill: i < Math.floor(rating) ? '#facc15' : '#e5e7eb',
          color: i < Math.floor(rating) ? '#facc15' : '#e5e7eb'
        }} 
      />
    ))
  }

  // Responsive grid
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={staticStyles.header}>
          <div>
            <h2 style={staticStyles.heading}>
              Featured <span style={staticStyles.gradientText}>Artisans</span>
            </h2>
            <p style={staticStyles.subtitle}>
              Top-rated professionals ready to help
            </p>
          </div>
          {!isMobile && (
            <button 
              onClick={() => router.push('/browse')}
              style={viewAllButtonStyle(hoveredButton === 'viewAll')}
              onMouseEnter={() => setHoveredButton('viewAll')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              View All Artisans
            </button>
          )}
        </div>

        <div style={gridStyle}>
          {artisans.map((artisan) => (
<<<<<<< HEAD
            <div key={artisan.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{artisan.name}</h3>
                  <p className="text-sm text-gray-600">{artisan.service}</p>
                  {artisan.verified && (
                    <span className="inline-flex items-center text-xs text-purple-600 mt-1">
                      ✓ Verified
                    </span>
                  )}
=======
            <div 
              key={artisan.id} 
              style={cardStyle(hoveredCard === artisan.id)}
              onMouseEnter={() => setHoveredCard(artisan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Trending Badge */}
              {artisan.trending && (
                <div style={staticStyles.trendingBadge}>
                  <TrendingUp style={{ width: '0.75rem', height: '0.75rem' }} />
                  Trending
>>>>>>> 2f0859f (designs)
                </div>
              )}

<<<<<<< HEAD
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-[3px] h-[3px] ${i < Math.floor(artisan.rating) ? 'fill-current' : ''}`} />
                    ))}
=======
              <div style={{ padding: '1.5rem' }}>
                {/* Profile Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ position: 'relative' }}>
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      style={staticStyles.profileImage}
                    />
                    {artisan.verified && (
                      <div style={staticStyles.verifiedBadge}>
                        <Shield style={{ width: '0.75rem', height: '0.75rem', color: 'white' }} />
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem', color: '#111827' }}>{artisan.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>{artisan.service}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                      <div style={{ display: 'flex' }}>
                        {renderStars(artisan.rating)}
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>{artisan.rating}</span>
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>({artisan.reviews})</span>
                    </div>
>>>>>>> 2f0859f (designs)
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <Clock style={staticStyles.statsIcon} />
                    <span style={{ color: '#6b7280' }}>{artisan.responseTime}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <MapPin style={staticStyles.statsIcon} />
                    <span style={{ color: '#6b7280' }}>{artisan.location}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.5rem', marginBottom: '1rem' }}>
                  {artisan.specialties.map((specialty, index) => (
                    <span key={index} style={staticStyles.specialtyTag}>
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Stats Bar */}
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  <span>{artisan.jobs} jobs completed</span>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => router.push(`/artisans/${artisan.id}`)}
                  style={primaryButtonStyle(hoveredButton === `profile-${artisan.id}`)}
                  onMouseEnter={() => setHoveredButton(`profile-${artisan.id}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        {isMobile && (
          <div style={staticStyles.mobileViewAll}>
            <button 
              onClick={() => router.push('/browse')}
              style={viewAllButtonStyle(hoveredButton === 'viewAllMobile')}
              onMouseEnter={() => setHoveredButton('viewAllMobile')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              View All Artisans
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedArtisans