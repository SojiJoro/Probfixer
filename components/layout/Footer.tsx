// components/layout/Footer.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  // Static styles
  const staticStyles = {
    footer: {
      backgroundColor: '#111827',
      color: 'white'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    logoBox: {
      width: '2rem',
      height: '2rem',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText: {
      fontWeight: 'bold',
      fontSize: '1.25rem'
    },
    description: {
      color: '#9ca3af',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem'
    },
    sectionTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '1rem'
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.5rem'
    },
    link: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    bottomSection: {
      borderTop: '1px solid #1f2937',
      marginTop: '2rem',
      paddingTop: '2rem',
      textAlign: 'center' as const,
      color: '#9ca3af'
    }
  }

  // Dynamic styles
  const linkStyle = (isHovered: boolean) => ({
    ...staticStyles.link,
    color: isHovered ? 'white' : '#9ca3af'
  })

  const socialLinkStyle = (isHovered: boolean) => ({
    color: isHovered ? 'white' : '#9ca3af',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  })

  // Link sections data
  const linkSections = [
    {
      title: 'For Customers',
      links: [
        { href: '/how-it-works', text: 'How it Works' },
        { href: '/browse', text: 'Browse Artisans' },
        { href: '/post-problem', text: 'Post a Problem' },
        { href: '/pricing', text: 'Pricing' }
      ]
    },
    {
      title: 'For Artisans',
      links: [
        { href: '/artisan/join', text: 'Join as Pro' },
        { href: '/artisan/benefits', text: 'Benefits' },
        { href: '/artisan/resources', text: 'Resources' },
        { href: '/artisan/success-stories', text: 'Success Stories' }
      ]
    },
    {
      title: 'Support',
      links: [
        { href: '/help', text: 'Help Center' },
        { href: '/contact', text: 'Contact Us' },
        { href: '/privacy', text: 'Privacy Policy' },
        { href: '/terms', text: 'Terms of Service' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'facebook', icon: Facebook, href: '#' },
    { name: 'twitter', icon: Twitter, href: '#' },
    { name: 'instagram', icon: Instagram, href: '#' },
    { name: 'linkedin', icon: Linkedin, href: '#' }
  ]

  // Responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const responsiveGrid = {
    ...staticStyles.grid,
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)'
  }

  return (
    <footer style={staticStyles.footer}>
      <div style={staticStyles.container}>
        <div style={responsiveGrid}>
          {/* Company Info */}
          <div>
            <div style={staticStyles.logoSection}>
              <div style={staticStyles.logoBox}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>P</span>
              </div>
              <span style={staticStyles.logoText}>ProbFixer</span>
            </div>
            <p style={staticStyles.description}>
              Nigeria&apos;s trusted marketplace for home and office repairs.
            </p>
            <div style={staticStyles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  style={socialLinkStyle(hoveredSocial === social.name)}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {linkSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 style={staticStyles.sectionTitle}>{section.title}</h4>
              <ul style={staticStyles.linkList}>
                {section.links.map((link, linkIndex) => {
                  const linkId = `${sectionIndex}-${linkIndex}`
                  return (
                    <li key={linkIndex} style={{ listStyle: 'none' }}>
                      <Link
                        href={link.href}
                        style={linkStyle(hoveredLink === linkId)}
                        onMouseEnter={() => setHoveredLink(linkId)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {link.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div style={staticStyles.bottomSection}>
          <p>&copy; 2024 ProbFixer. All rights reserved. Made with ❤️ in Nigeria</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer