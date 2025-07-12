import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import { Search, X, Loader2, Filter, MapPin, Briefcase, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SearchBarProps {
  placeholder?: string
  defaultValue?: string
  onSearch?: (query: string, filters?: SearchFilters) => void
  className?: string
  variant?: 'default' | 'hero' | 'minimal' | 'advanced'
  showFilters?: boolean
  showSuggestions?: boolean
  autoFocus?: boolean
  loading?: boolean
}

interface SearchFilters {
  service?: string
  location?: string
  priceRange?: string
  availability?: string
  rating?: number
}

interface SearchSuggestion {
  type: 'service' | 'artisan' | 'location'
  text: string
  meta?: string
}

// Popular services for suggestions
const POPULAR_SERVICES = [
  'Plumbing', 'Electrical', 'AC Repair', 'Carpentry', 
  'Painting', 'Cleaning', 'Generator Repair', 'Tiling',
  'Roofing', 'Welding', 'Appliance Repair', 'Fumigation'
]

// Recent searches (mock data - in real app, get from localStorage)
const RECENT_SEARCHES = [
  { type: 'service', text: 'Plumber in Lekki' },
  { type: 'service', text: 'AC Repair' },
  { type: 'artisan', text: 'John Doe - Electrician' }
]

const SearchBar = ({
  placeholder = 'Search for services or artisans...',
  defaultValue = '',
  onSearch,
  className = '',
  variant = 'default',
  showFilters = false,
  showSuggestions = true,
  autoFocus = false,
  loading = false
}: SearchBarProps) => {
  const router = useRouter()
  const [query, setQuery] = useState(defaultValue)
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [filters, setFilters] = useState<SearchFilters>({})
  const [showFilterPanel, setShowFilterPanel] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Generate suggestions based on query
  useEffect(() => {
    if (query.length > 0 && showSuggestions) {
      const filtered = POPULAR_SERVICES
        .filter(service => service.toLowerCase().includes(query.toLowerCase()))
        .map(service => ({ type: 'service' as const, text: service }))
        .slice(0, 5)
      
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [query, showSuggestions])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = () => {
    if (query.trim() || Object.keys(filters).length > 0) {
      onSearch?.(query.trim(), filters)
      setIsOpen(false)
      
      // Navigate to search results page
      const params = new URLSearchParams()
      if (query) params.set('q', query)
      if (filters.service) params.set('service', filters.service)
      if (filters.location) params.set('location', filters.location)
      
      router.push(`/browse?${params.toString()}`)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        setQuery(suggestions[selectedIndex].text)
        setSelectedIndex(-1)
      }
      handleSearch()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setSelectedIndex(-1)
    }
  }

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text)
    setIsOpen(false)
    handleSearch()
  }

  const clearSearch = () => {
    setQuery('')
    setFilters({})
    inputRef.current?.focus()
  }

  // Hero variant - Large search bar for landing pages
  if (variant === 'hero') {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-white rounded-2xl shadow-xl p-2">
          <div className="flex flex-col lg:flex-row gap-2">
            {/* Main search input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onKeyDown={handleKeyDown}
                placeholder="What service do you need?"
                className="w-full pl-12 pr-4 py-4 text-lg focus:outline-none"
                autoFocus={autoFocus}
              />
            </div>

            {/* Location selector */}
            <div className="flex items-center border-l border-gray-200 px-4">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <select 
                className="outline-none py-2 bg-transparent min-w-[150px]"
                value={filters.location || ''}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              >
                <option value="">All Locations</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Ibadan">Ibadan</option>
              </select>
            </div>

            {/* Search button */}
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Search
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          <span className="text-sm text-gray-600">Popular:</span>
          {['Plumber', 'Electrician', 'AC Repair', 'Carpenter', 'Cleaner'].map((service) => (
            <button
              key={service}
              onClick={() => {
                setQuery(service)
                handleSearch()
              }}
              className="px-3 py-1 bg-white text-sm text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Advanced variant with filters
  if (variant === 'advanced') {
    return (
      <div className={`w-full ${className}`} ref={searchRef}>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                autoFocus={autoFocus}
              />
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Suggestions dropdown */}
            {isOpen && suggestions.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center gap-3 ${
                      selectedIndex === index ? 'bg-gray-50' : ''
                    }`}
                  >
                    {suggestion.type === 'service' && <Briefcase className="w-4 h-4 text-gray-400" />}
                    {suggestion.type === 'location' && <MapPin className="w-4 h-4 text-gray-400" />}
                    <div className="flex-1">
                      <div className="font-medium">{suggestion.text}</div>
                      {suggestion.meta && (
                        <div className="text-sm text-gray-500">{suggestion.meta}</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter button */}
          {showFilters && (
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
              {Object.keys(filters).length > 0 && (
                <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {Object.keys(filters).length}
                </span>
              )}
            </button>
          )}

          {/* Search button */}
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
            Search
          </button>
        </div>

        {/* Filter panel */}
        {showFilterPanel && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.service || ''}
                  onChange={(e) => setFilters({...filters, service: e.target.value})}
                >
                  <option value="">All Services</option>
                  {POPULAR_SERVICES.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.priceRange || ''}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">Any Price</option>
                  <option value="0-5000">₦0 - ₦5,000</option>
                  <option value="5000-10000">₦5,000 - ₦10,000</option>
                  <option value="10000-20000">₦10,000 - ₦20,000</option>
                  <option value="20000+">₦20,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.availability || ''}
                  onChange={(e) => setFilters({...filters, availability: e.target.value})}
                >
                  <option value="">Any Time</option>
                  <option value="now">Available Now</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.rating || ''}
                  onChange={(e) => setFilters({...filters, rating: Number(e.target.value)})}
                >
                  <option value="">Any Rating</option>
                  <option value="4">4★ & above</option>
                  <option value="3">3★ & above</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
                   className={`w-full pl-10 pr-${query ? '10' : '4'} py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
          autoFocus={autoFocus}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        {loading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
          </div>
        )}
      </div>

      {/* Suggestions dropdown */}
      {isOpen && (suggestions.length > 0 || (showSuggestions && query.length === 0)) && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {/* Recent searches */}
          {query.length === 0 && showSuggestions && (
            <>
              <div className="px-4 py-2 text-sm font-medium text-gray-500">Recent Searches</div>
              {RECENT_SEARCHES.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search as SearchSuggestion)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center gap-3"
                >
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{search.text}</span>
                </button>
              ))}
              <div className="border-t my-2" />
              <div className="px-4 py-2 text-sm font-medium text-gray-500">Popular Services</div>
              {POPULAR_SERVICES.slice(0, 5).map((service) => (
                <button
                  key={service}
                  onClick={() => handleSuggestionClick({ type: 'service', text: service })}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center gap-3"
                >
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span>{service}</span>
                </button>
              ))}
            </>
          )}

          {/* Search suggestions */}
          {query.length > 0 && suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center gap-3 ${
                selectedIndex === index ? 'bg-gray-50' : ''
              }`}
            >
              {suggestion.type === 'service' && <Briefcase className="w-4 h-4 text-gray-400" />}
              {suggestion.type === 'location' && <MapPin className="w-4 h-4 text-gray-400" />}
              <div className="flex-1">
                <div className="font-medium">
                  {suggestion.text}
                  {query && (
                    <span className="text-gray-500 font-normal">
                      {' '}in your area
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}

          {/* Show all results */}
          {query.length > 0 && (
            <button
              onClick={handleSearch}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-green-600 font-medium border-t"
            >
              View all results for "{query}"
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// Minimal search bar for headers/navbars
export const MinimalSearchBar = ({
  placeholder = 'Search...',
  onSearch,
  className = ''
}: Pick<SearchBarProps, 'placeholder' | 'onSearch' | 'className'>) => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch?.(query.trim())
      router.push(`/browse?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-3 pr-8 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  )
}

// Quick search widget for sidebars
export const QuickSearchWidget = ({
  title = 'Quick Search',
  services = POPULAR_SERVICES.slice(0, 8),
  className = ''
}: {
  title?: string
  services?: string[]
  className?: string
}) => {
  const router = useRouter()

  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => router.push(`/browse?service=${encodeURIComponent(service)}`)}
            className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar