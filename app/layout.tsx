// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navbarfixed from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'ProbFixer - Find Trusted Artisans in Nigeria',
  description: 'Connect with verified plumbers, electricians, carpenters, and more in Lagos, Abuja, Port Harcourt, and Ibadan.',
  keywords: 'artisans, handyman, plumber, electrician, carpenter, repairs, Nigeria, Lagos, Abuja',
  openGraph: {
    title: 'ProbFixer - Find Trusted Artisans in Nigeria',
    description: 'Connect with verified professionals for all your home service needs',
    type: 'website',
    locale: 'en_NG',
    url: 'https://probfixer.com',
    siteName: 'ProbFixer',
    images: [
      {
        url: 'https://probfixer.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProbFixer - Find Trusted Artisans',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProbFixer - Find Trusted Artisans in Nigeria',
    description: 'Connect with verified professionals for all your home service needs',
    images: ['https://probfixer.com/twitter-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbarfixed />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}