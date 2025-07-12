import { Star, MapPin, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface ArtisanCardProps {
  artisan: {
    id: number
    name: string
    businessName?: string
    service: string
    rating: number
    reviews: number
    responseTime: string
    location: string
    area: string
    image: string
    verified: boolean
    completedJobs: number
    hourlyRate: number
    badges?: string[]
    phone?: string
  }
}

const ArtisanCard = ({ artisan }: ArtisanCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-4">
        {/* Profile Image */}
        <div className="relative">
          <img 
            src={artisan.image || 'https://via.placeholder.com/80'} 
            alt={artisan.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
          />
          {artisan.verified && (
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
              <CheckCircle className="w-4 h-4 text-white fill-white" />
            </div>
          )}
        </div>

        {/* Basic Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 hover:text-green-600 transition-colors">
            <Link href={`/artisans/${artisan.id}`}>
              {artisan.name}
            </Link>
          </h3>
          <p className="text-sm text-gray-600">{artisan.service}</p>
          {artisan.businessName && (
            <p className="text-xs text-gray-500 mt-0.5">{artisan.businessName}</p>
          )}
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-bold text-gray-900">₦{artisan.hourlyRate.toLocaleString()}</p>
          <p className="text-xs text-gray-500">per hour</p>
        </div>
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(artisan.rating) 
                    ? 'fill-current' 
                    : i < artisan.rating 
                    ? 'fill-current opacity-50' 
                    : 'fill-none'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700 ml-1">
            {artisan.rating.toFixed(1)}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          ({artisan.reviews} reviews)
        </span>
        <span className="text-sm text-gray-500">
          • {artisan.completedJobs} jobs done
        </span>
      </div>

      {/* Location and Response Time */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          {artisan.area}, {artisan.location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-gray-400" />
          Responds in ~{artisan.responseTime}
        </span>
      </div>

      {/* Badges */}
      {artisan.badges && artisan.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {artisan.badges.slice(0, 3).map((badge, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full"
            >
              {badge}
            </span>
          ))}
          {artisan.badges.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-500">
              +{artisan.badges.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Link 
          href={`/artisans/${artisan.id}`}
          className="flex-1 text-center py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          View Profile
        </Link>
        <button 
          className="flex-1 text-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          onClick={() => {
            // WhatsApp integration logic here
            const message = `Hi ${artisan.name}, I found you on ProbFixer and need help with ${artisan.service}.`;
            const whatsappUrl = `https://wa.me/234${artisan.phone || ''}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
        >
          Chat on WhatsApp
        </button>
      </div>
    </div>
  )
}

export default ArtisanCard