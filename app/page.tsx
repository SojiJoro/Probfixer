// app/page.tsx
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import FeaturedArtisans from '@/components/home/FeaturedArtisans'
import PopularServices from '@/components/home/PopularServices'
import TrustSection from '@/components/home/TrustSection'
import CtaSectionfixed from '@/components/home/CtaSectionfixed'
import StatsSection from '@/components/home/StatsSection'
import MobileAppSection from '@/components/home/MobileAppSection'
import Testimonials from '@/components/home/Testimonials'
import FaqSection from '@/components/home/FaqSection'
import ArtisanCtaSection from '@/components/home/ArtisanCtaSection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <Hero />
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative bg-gray-50">
        <HowItWorks />
      </section>

      {/* Featured Artisans */}
      <section id="featured-artisans" className="relative bg-white">
        <FeaturedArtisans />
      </section>

      {/* Popular Services */}
      <section id="popular-services" className="relative bg-gradient-to-b from-gray-50 to-white">
        <PopularServices />
      </section>

      {/* Trust Section */}
      <section id="trust" className="relative bg-white">
        <TrustSection />
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative">
        <CtaSectionfixed />
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative bg-gray-900 text-white">
        <StatsSection />
      </section>

      {/* Mobile App Section */}
      <section id="mobile-app" className="relative bg-gradient-to-br from-blue-50 to-purple-50">
        <MobileAppSection />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative bg-white">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative bg-gray-50">
        <FaqSection />
      </section>

      {/* Artisan CTA Section */}
      <section id="artisan-cta" className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <ArtisanCtaSection />
      </section>
    </main>
  )
}