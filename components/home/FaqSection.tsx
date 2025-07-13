// components/home/FaqSection.tsx
'use client'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function FaqSection() {
  const router = useRouter()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isContactHovered, setIsContactHovered] = useState(false)
  
  const faqs = [
    {
      question: "How does ProbFixer work?",
      answer: "Simply post your problem with details and photos, receive quotes from verified artisans in your area within hours, compare profiles and reviews, then hire the best fit for your job. It's that easy!",
      icon: "🔧"
    },
    {
      question: "Are the artisans verified?",
      answer: "Yes! All artisans go through a comprehensive verification process including government ID verification, skill assessment tests, background checks, and reference verification. We also monitor their performance through customer reviews.",
      icon: "✅"
    },
    {
      question: "What areas do you cover?",
      answer: "We currently operate in Lagos, Abuja, Port Harcourt, and Ibadan. We're rapidly expanding and plan to cover all major Nigerian cities by the end of 2024.",
      icon: "📍"
    },
    {
      question: "How do I pay for services?",
      answer: "You have flexible payment options: pay artisans directly in cash, use our secure in-app payment system with cards or bank transfers, or opt for our escrow service for added security on larger projects.",
      icon: "💳"
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We have a comprehensive satisfaction guarantee. If you're not happy with the work, contact our support team within 48 hours. We'll mediate between you and the artisan, and if needed, send another artisan to fix the issue at no extra cost.",
      icon: "🛡️"
    },
    {
      question: "How quickly can I get an artisan?",
      answer: "Response times vary by service and location, but typically: Emergency services (plumbing, electrical) - within 30 minutes to 2 hours. Regular services - same day or next day. You'll see estimated response times when posting your problem.",
      icon: "⚡"
    }
  ]

  // Static styles
  const staticStyles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
    },
    container: {
      maxWidth: '48rem',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem'
    },
    iconContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '4rem',
      height: '4rem',
      backgroundColor: '#dbeafe',
      borderRadius: '1rem',
      marginBottom: '1rem'
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
    faqList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem'
    },
    faqButton: {
      width: '100%',
      padding: '1.25rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left' as const,
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    },
    faqHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    faqIcon: {
      fontSize: '1.5rem'
    },
    faqQuestion: {
      fontWeight: '600',
      fontSize: '1.125rem',
      color: '#111827'
    },
    faqAnswer: {
      color: '#6b7280',
      lineHeight: '1.75',
      paddingLeft: '3rem'
    },
    contactSection: {
      marginTop: '3rem',
      textAlign: 'center' as const
    },
    contactText: {
      color: '#6b7280',
      marginBottom: '1rem'
    },
    contactButton: {
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
  const faqCardStyle = (isOpen: boolean, isHovered: boolean) => ({
    backgroundColor: 'white',
    borderRadius: '1rem',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    boxShadow: isHovered || isOpen
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: isOpen ? '2px solid #3b82f6' : '2px solid transparent'
  })

  const chevronStyle = (isOpen: boolean) => ({
    width: '1.25rem',
    height: '1.25rem',
    color: '#6b7280',
    transition: 'transform 0.3s ease',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  })

  const answerStyle = (isOpen: boolean) => ({
    ...staticStyles.faqAnswer,
    padding: isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem',
    maxHeight: isOpen ? '500px' : '0',
    opacity: isOpen ? 1 : 0,
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  })

  const contactButtonStyle = {
    ...staticStyles.contactButton,
    backgroundColor: isContactHovered ? '#3b82f6' : 'transparent',
    color: isContactHovered ? 'white' : '#3b82f6',
    transform: isContactHovered ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isContactHovered ? '0 10px 15px -3px rgba(59, 130, 246, 0.3)' : 'none'
  }

  return (
    <section style={staticStyles.section}>
      <div style={staticStyles.container}>
        <div style={staticStyles.header}>
          <div style={staticStyles.iconContainer}>
            <HelpCircle style={{ width: '2rem', height: '2rem', color: '#3b82f6' }} />
          </div>
          <h2 style={staticStyles.heading}>
            Frequently Asked <span style={staticStyles.gradientText}>Questions</span>
          </h2>
          <p style={staticStyles.subtitle}>
            Everything you need to know about ProbFixer
          </p>
        </div>

        <div style={staticStyles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={faqCardStyle(openIndex === index, hoveredIndex === index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={staticStyles.faqButton}
              >
                <div style={staticStyles.faqHeader}>
                  <span style={staticStyles.faqIcon}>{faq.icon}</span>
                  <h3 style={staticStyles.faqQuestion}>{faq.question}</h3>
                </div>
                <ChevronDown style={chevronStyle(openIndex === index)} />
              </button>
              
              <div style={answerStyle(openIndex === index)}>
                <p>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div style={staticStyles.contactSection}>
          <p style={staticStyles.contactText}>Still have questions?</p>
          <button 
            style={contactButtonStyle}
            onClick={() => router.push('/contact')}
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            <HelpCircle style={{ width: '1.25rem', height: '1.25rem' }} />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}