// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

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
      <body>
        {children}
      </body>
    </html>
  )
}