// components/home/Testimonials.tsx
'use client'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const testimonials = [
    {
      name: "Adebayo Johnson",
      location: "Lekki, Lagos",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Found an excellent plumber within 30 minutes. He fixed my burst pipe professionally. The app made everything so easy!",
      rating: 5,
      service: "Plumbing",
      date: "2 weeks ago"
    },
    {
      name: "Fatima Abdullahi",
      location: "Wuse, Abuja",
      image: "https://i.pravatar.cc/150?img=6",
      text: "The electrician was punctual and solved my power issues quickly. Very professional and fair pricing.",
      rating: 5,
      service: "Electrical",
      date: "1 month ago"
    },
    {
      name: "Chioma Okafor",
      location: "GRA, Port Harcourt",
      image: "https://i.pravatar.cc/150?img=7",
      text: "I've used ProbFixer multiple times for different repairs. Always reliable artisans. This is a game-changer!",
      rating: 5,
      service: "Multiple Services",
      date: "3 weeks ago"
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
    maxWidth: {
      maxWidth: '72rem',
      margin: '0 auto'
    },
    mainTestimonialContainer: {
      marginBottom: '3rem'
    },
    mainTestimonial: {
      background: 'linear-gradient(135deg, #eff6ff, #f3e8ff)',
      borderRadius: '1.5rem',
      padding: '3rem',
      position: 'relative' as const,
      overflow: 'hidden'
    },
    quoteIcon: {
      position: 'absolute' as const,
      top: '2rem',
      right: '2rem',
      width: '6rem',
      height: '6rem',
      color: '#dbeafe'
    },
    testimonialContent: {
      position: 'relative' as const,
      zIndex: 10
    },
    testimonialHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    mainAvatar: {
      width: '5rem',
      height: '5rem',
      borderRadius: '1rem',
      objectFit: 'cover' as const
    },
    name: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#111827'
    },
    location: {
      color: '#6b7280'
    },
    metaInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginTop: '0.5rem'
    },
    stars: {
      display: 'flex',
      color: '#facc15'
    },
    metaText: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    testimonialText: {
      fontSize: '1.125rem',
      color: '#374151',
      lineHeight: '1.75'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    },
    smallAvatar: {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.75rem',
      objectFit: 'cover' as const
    },
    smallName: {
      fontWeight: '600',
      color: '#111827'
    },
    smallLocation: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    smallStars: {
      display: 'flex',
      color: '#facc15',
      marginBottom: '0.75rem'
    },
    excerptText: {
      color: '#374151',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical' as const,
      lineHeight: '1.5'
    },
    serviceTag: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginTop: '0.75rem'
    }
  }

  // Dynamic styles
  const testimonialCardStyle = (isActive: boolean, isHovered: boolean) => ({
    textAlign: 'left' as const,
    padding: '1.5rem',
    borderRadius: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    backgroundColor: 'white',
    border: isActive ? '2px solid #3b82f6' : '1px solid #e5e7eb',
    boxShadow: isActive 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : isHovered 
        ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: isActive ? 'scale(1.05)' : isHovered ? 'scale(1.02)' : 'scale(1)'
  })

  const renderStars = (rating: number, size: 'large' | 'small' = 'large') => {
    const starSize = size === 'large' ? { width: '1.25rem', height: '1.25rem' } : { width: '1rem', height: '1rem' }
    return [...Array(rating)].map((_, i) => (
      <Star key={i} style={{ ...starSize, fill: 'currentColor' }} />
    ))
  }

  // Responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const mainTestimonialStyle = {
    ...staticStyles.mainTestimonial,
    padding: isMobile ? '2rem' : '3rem'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={staticStyles.textCenter}>
          <h2 style={staticStyles.heading}>
            What Our <span style={staticStyles.gradientText}>Customers Say</span>
          </h2>
          <p style={staticStyles.subtitle}>
            Real reviews from satisfied customers
          </p>
        </div>

        <div style={staticStyles.maxWidth}>
          {/* Main Testimonial */}
          <div style={staticStyles.mainTestimonialContainer}>
            <div style={mainTestimonialStyle}>
              <Quote style={staticStyles.quoteIcon} />
              
              <div style={staticStyles.testimonialContent}>
                <div style={staticStyles.testimonialHeader}>
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    style={staticStyles.mainAvatar}
                  />
                  <div>
                    <h3 style={staticStyles.name}>{testimonials[activeIndex].name}</h3>
                    <p style={staticStyles.location}>{testimonials[activeIndex].location}</p>
                    <div style={staticStyles.metaInfo}>
                      <div style={staticStyles.stars}>
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                      <span style={staticStyles.metaText}>• {testimonials[activeIndex].service}</span>
                      <span style={staticStyles.metaText}>• {testimonials[activeIndex].date}</span>
                    </div>
                  </div>
                </div>
                
                <p style={staticStyles.testimonialText}>
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div style={staticStyles.grid}>
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={testimonialCardStyle(activeIndex === index, hoveredIndex === index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={staticStyles.smallAvatar}
                  />
                  <div>
                    <h4 style={staticStyles.smallName}>{testimonial.name}</h4>
                    <p style={staticStyles.smallLocation}>{testimonial.location}</p>
                  </div>
                </div>
                
                <div style={staticStyles.smallStars}>
                  {renderStars(testimonial.rating, 'small')}
                </div>
                
                <p style={staticStyles.excerptText}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <p style={staticStyles.serviceTag}>{testimonial.service}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}