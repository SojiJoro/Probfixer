// app/layout.tsx
import type { Metadata } from 'next'
<<<<<<< HEAD
=======
import { Inter, Playfair_Display } from 'next/font/google'
>>>>>>> 2f0859f (designs)
import './globals.css'
import Navbar from '@/components/layout/Navbar' // Updated import path
import Footer from '@/components/layout/Footer'

<<<<<<< HEAD
=======
// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

>>>>>>> 2f0859f (designs)
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProbFixer - Find Trusted Artisans in Nigeria',
    description: 'Connect with verified professionals for all your home service needs',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0066FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body>
        {children}
=======
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-400/20 blur-3xl" />
        </div>

        {/* Main Layout */}
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          
          {/* Main content with proper spacing for fixed navbar */}
          <main className="flex-1 pt-20">
            {children}
          </main>
          
          <Footer />
        </div>

        {/* Toast Container - for notifications */}
        <div id="toast-container" className="fixed bottom-4 right-4 z-50 space-y-2" />
>>>>>>> 2f0859f (designs)
      </body>
    </html>
  )
}