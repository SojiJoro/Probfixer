// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProbFixer - Find Trusted Artisans in Nigeria',
  description: 'Connect with verified plumbers, electricians, carpenters, and more in Lagos, Abuja, Port Harcourt, and Ibadan.',
  keywords: 'artisans, handyman, plumber, electrician, carpenter, repairs, Nigeria, Lagos, Abuja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}