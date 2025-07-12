import { Star, MapPin, Clock, CheckCircle, Phone, Mail, Calendar, Award, Shield, Briefcase } from 'lucide-react'
import Link from 'next/link'

interface ArtisanProfileProps {
  artisan: {
    id: number
    name: string
    businessName?: string
    services: string[]
    bio: string
    rating: number
    reviews: number
    responseTime: string
    location: string
    area: string
    address?: string
    image: string
    coverImage?: string
    verified: boolean
    completedJobs: number
    hourlyRate: number
    phone?: string
    email?: string
    whatsapp?: string
    memberSince: string
    badges: string[]
    portfolio: {
      id: number
      title: string
      image: string
      description?: string
    }[]
    customerReviews: {
      id: number
      customerName: string
      customerImage?: string
      rating: number
      comment: string
      date: string
      jobType: string
    }[]
    availability: {
      days: string[]
      hours: string
    }
    documents: {
      type: string
      verified: boolean
    }[]
  }
}

const ArtisanProfile = ({ artisan }: ArtisanProfileProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-t-xl overflow-hidden">
        {artisan.coverImage && (
          <img 
            src={artisan.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-b-xl shadow-sm px-6 pb-6">
        <div className="flex flex-col md:flex-row gap-6 -mt-16 md:-mt-20">
          {/* Profile Image */}
          <div className="relative">
            <img 
              src={artisan.image || 'https://via.placeholder.com/150'} 
              alt={artisan.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-lg"
            />
            {artisan.verified && (
              <div className="absolute bottom-2 right-2 bg-green-500 rounded-full p-1.5">
                <CheckCircle className="w-6 h-6 text-white fill-white" />
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div className="flex-1 pt-4 md:pt-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{artisan.name}</h1>
                {artisan.businessName && (
                  <p className="text-lg text-gray-600">{artisan.businessName}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {artisan.services.map((service, index) => (
                    <span key={index} className="text-sm text-green-600 font-medium">
                      {service}
                      {index < artisan.services.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-xl font-bold text-gray-900">{artisan.rating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-gray-600">{artisan.reviews} reviews</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-xl font-bold text-gray-900">{artisan.completedJobs}</p>
                <p className="text-sm text-gray-600">Jobs done</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-xl font-bold text-gray-900">₦{artisan.hourlyRate.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Per hour</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-xl font-bold text-gray-900">{artisan.responseTime}</p>
                <p className="text-sm text-gray-600">Response time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
          <p className="text-gray-600 leading-relaxed">{artisan.bio}</p>
        </div>

        {/* Badges and Verifications */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Badges & Verifications</h2>
          <div className="flex flex-wrap gap-3">
            {artisan.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
            {artisan.documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{doc.type}</span>
                {doc.verified && <CheckCircle className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Location Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>{artisan.area}, {artisan.location}</span>
              </div>
              {artisan.phone && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a href={`tel:${artisan.phone}`} className="hover:text-green-600">
                    {artisan.phone}
                  </a>
                </div>
              )}
              {artisan.email && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a href={`mailto:${artisan.email}`} className="hover:text-green-600">
                    {artisan.email}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Member since {artisan.memberSince}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Availability</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Working Days:</span> {artisan.availability.days.join(', ')}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Working Hours:</span> {artisan.availability.hours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      {artisan.portfolio.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artisan.portfolio.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {artisan.customerReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <div className="flex items-start gap-4">
                <img 
                  src={review.customerImage || 'https://via.placeholder.com/40'} 
                  alt={review.customerName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-900">{review.customerName}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'fill-none'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">• {review.jobType}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtisanProfile