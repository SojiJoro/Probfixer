'use client'
import { Star, MapPin, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

const FeaturedArtisans = () => {
  const router = useRouter()
  
  // Mock data - replace with API call
  const artisans = [
    {
      id: 1,
      name: 'Chidi Okafor',
      service: 'Plumber',
      rating: 4.8,
      reviews: 124,
      responseTime: '30 mins',
      location: 'Lekki, Lagos',
      image: '/api/placeholder/80/80',
      verified: true
    },
    {
      id: 2,
      name: 'Fatima Abdullahi',
      service: 'Electrician',
      rating: 4.9,
      reviews: 89,
      responseTime: '1 hour',
      location: 'Wuse, Abuja',
      image: '/api/placeholder/80/80',
      verified: true
    },
    {
      id: 3,
      name: 'Emeka Nwosu',
      service: 'AC Technician',
      rating: 4.7,
      reviews: 156,
      responseTime: '45 mins',
      location: 'VI, Lagos',
      image: '/api/placeholder/80/80',
      verified: true
    },
    {
      id: 4,
      name: 'Aisha Mohammed',
      service: 'Carpenter',
      rating: 4.9,
      reviews: 67,
      responseTime: '2 hours',
      location: 'Garki, Abuja',
      image: '/api/placeholder/80/80',
      verified: true
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Artisans
            </h2>
            <p className="text-lg text-gray-600">
              Top-rated professionals ready to help
            </p>
          </div>
          <Button 
            variant="outline"
            onClick={() => router.push('/browse')}
            className="hidden md:flex"
          >
            View All
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artisans.map((artisan) => (
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
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-[3px] h-[3px] ${i < Math.floor(artisan.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {artisan.rating} ({artisan.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {artisan.responseTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {artisan.location}
                  </span>
                </div>
              </div>

              <Button 
                className="w-full mt-4"
                onClick={() => router.push(`/artisans/${artisan.id}`)}
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button 
            variant="outline"
            onClick={() => router.push('/browse')}
          >
            View All Artisans
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedArtisans