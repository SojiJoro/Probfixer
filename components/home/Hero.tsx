'use client'
import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('Lagos')

  const popularServices = [
    { icon: '🔧', name: 'Plumbing' },
    { icon: '💡', name: 'Electrical' },
    { icon: '❄️', name: 'AC Repair' },
    { icon: '🔨', name: 'Carpentry' },
    { icon: '🎨', name: 'Painting' },
    { icon: '🏠', name: 'General Repairs' },
  ]

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Trusted Artisans in{' '}
            <span className="text-primary-600">Minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with verified professionals for all your home and office repairs
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-lg p-2 mb-8">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="What do you need fixed?"
                  className="w-full py-3 outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex items-center border-l px-4">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <select 
                  className="outline-none py-3 bg-transparent"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Ibadan</option>
                </select>
              </div>
              <Button 
                size="lg"
                onClick={() => router.push('/browse')}
                className="md:w-auto w-full"
              >
                Search Artisans
              </Button>
            </div>
          </div>

          {/* Popular Services */}
          <div className="flex flex-wrap justify-center gap-3">
            {popularServices.map((service) => (
              <button
                key={service.name}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full 
                         shadow-sm hover:shadow-md transition-shadow"
                onClick={() => router.push(`/browse?service=${service.name}`)}
              >
                <span className="text-xl">{service.icon}</span>
                <span className="text-sm font-medium">{service.name}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => router.push('/post-problem')}
            >
              Post Your Problem Instead →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero