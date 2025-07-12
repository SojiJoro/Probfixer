import { Star } from 'lucide-react'

interface RatingStarsProps {
  rating: number
  maxRating?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showLabel?: boolean
  totalReviews?: number
  interactive?: boolean
  onRatingChange?: (rating: number) => void
  className?: string
}

const RatingStars = ({ 
  rating, 
  maxRating = 5,
  size = 'md', 
  showLabel = false,
  totalReviews,
  interactive = false,
  onRatingChange,
  className = ''
}: RatingStarsProps) => {
  // Size mappings
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }

  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  // Handle click for interactive ratings
  const handleStarClick = (starIndex: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starIndex + 1)
    }
  }

  // Calculate fill percentage for partial stars
  const getStarFill = (starIndex: number) => {
    const fillPercentage = Math.min(Math.max(rating - starIndex, 0), 1) * 100
    return fillPercentage
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Stars */}
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, index) => {
          const fillPercentage = getStarFill(index)
          
          return (
            <div 
              key={index} 
              className="relative"
              onClick={() => handleStarClick(index)}
              style={{ cursor: interactive ? 'pointer' : 'default' }}
            >
              {/* Background star (empty) */}
              <Star 
                className={`${sizes[size]} text-gray-300 ${
                  interactive ? 'hover:text-gray-400 transition-colors' : ''
                }`}
                fill="none"
                strokeWidth={1.5}
              />
              
              {/* Filled star with percentage */}
                            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercentage}%` }}
              >
                <Star 
                  className={`${sizes[size]} text-yellow-400`}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Rating Label */}
      {showLabel && (
        <span className={`${textSizes[size]} font-medium text-gray-700 ml-1`}>
          {rating.toFixed(1)}
        </span>
      )}

      {/* Total Reviews */}
      {totalReviews !== undefined && (
        <span className={`${textSizes[size]} text-gray-500 ml-1`}>
          ({totalReviews.toLocaleString()} {totalReviews === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  )
}

// Simplified version for displaying just the stars
export const SimpleRatingStars = ({ 
  rating, 
  size = 'sm',
  className = '' 
}: Pick<RatingStarsProps, 'rating' | 'size' | 'className'>) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }

  return (
    <div className={`flex ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`${sizes[size]} ${
            i < Math.floor(rating) 
              ? 'text-yellow-400 fill-current' 
              : i < rating 
              ? 'text-yellow-400 fill-current opacity-50' 
              : 'text-gray-300'
          }`} 
        />
      ))}
    </div>
  )
}

// Read-only rating display with custom styling
export const RatingDisplay = ({ 
  rating, 
  totalReviews,
  size = 'md',
  variant = 'default',
  className = ''
}: {
  rating: number
  totalReviews?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact' | 'detailed'
  className?: string
}) => {
  const sizeStyles = {
    sm: { star: 'w-4 h-4', text: 'text-sm' },
    md: { star: 'w-5 h-5', text: 'text-base' },
    lg: { star: 'w-6 h-6', text: 'text-lg' }
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <Star className={`${sizeStyles[size].star} text-yellow-400 fill-current`} />
        <span className={`${sizeStyles[size].text} font-medium text-gray-700`}>
          {rating.toFixed(1)}
        </span>
        {totalReviews !== undefined && (
          <span className={`${sizeStyles[size].text} text-gray-500`}>
            ({totalReviews})
          </span>
        )}
      </div>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={`${className}`}>
        <div className="flex items-center gap-2">
          <RatingStars rating={rating} size={size} />
          <span className={`${sizeStyles[size].text} font-bold text-gray-900`}>
            {rating.toFixed(1)} out of 5
          </span>
        </div>
        {totalReviews !== undefined && (
          <p className="text-sm text-gray-600 mt-1">
            Based on {totalReviews.toLocaleString()} customer reviews
          </p>
        )}
      </div>
    )
  }

  return <RatingStars rating={rating} size={size} showLabel totalReviews={totalReviews} className={className} />
}

// Rating statistics component
export const RatingStats = ({ 
  stats,
  totalReviews 
}: {
  stats: { [key: number]: number }
  totalReviews: number
}) => {
  return (
    <div className="space-y-2">
      {[5, 4, 3, 2, 1].map((stars) => {
        const count = stats[stars] || 0
        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0

        return (
          <div key={stars} className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-16">
              <span className="text-sm text-gray-600">{stars}</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-400 transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 w-12 text-right">
              {count}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default RatingStars