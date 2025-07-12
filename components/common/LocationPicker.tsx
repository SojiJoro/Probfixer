import { useState, useEffect, useRef } from 'react'
import { MapPin, ChevronDown, Search, X, Check } from 'lucide-react'

interface LocationPickerProps {
  value?: {
    state: string
    area?: string
  }
  onChange?: (location: { state: string; area?: string }) => void
  placeholder?: string
  required?: boolean
  className?: string
  variant?: 'default' | 'search' | 'compact'
  showIcon?: boolean
  allowAreaSelection?: boolean
}

// Nigerian states and their popular areas
const NIGERIAN_LOCATIONS = {
  'Lagos': [
    'Ikeja', 'Victoria Island', 'Lekki', 'Ikoyi', 'Surulere', 'Yaba', 
    'Mushin', 'Oshodi', 'Alimosho', 'Maryland', 'Ajah', 'Apapa',
    'Festac', 'Egbeda', 'Agege', 'Ojodu', 'Gbagada', 'Magodo',
    'Sangotedo', 'Ikorodu', 'Badagry', 'Epe'
  ],
  'Abuja': [
    'Central Business District', 'Garki', 'Wuse', 'Maitama', 'Asokoro',
    'Gwarinpa', 'Jabi', 'Utako', 'Kubwa', 'Lugbe', 'Life Camp',
    'Katampe', 'Jahi', 'Kado', 'Durumi', 'Galadimawa', 'Lokogoma',
    'Apo', 'Nyanya', 'Karu', 'Mpape'
  ],
  'Port Harcourt': [
    'GRA', 'Trans Amadi', 'Diobu', 'Rumuola', 'Rumuokoro', 'Eliozu',
    'Woji', 'Elelenwo', 'Choba', 'Alakahia', 'Mgbuoba', 'Ada George',
    'Rukpokwu', 'Elimgbu', 'Eneka', 'Ozuoba', 'Rumuodara'
  ],
  'Ibadan': [
    'Bodija', 'Jericho', 'Mokola', 'Dugbe', 'Ring Road', 'Iwo Road',
    'Agodi', 'Alalubosa', 'Apata', 'Akobo', 'Ojoo', 'Sango',
    'Eleyele', 'Ologuneru', 'Moniya', 'Alakia', 'Egbeda'
  ],
  'Kano': [
    'Sabon Gari', 'Nassarawa', 'Tarauni', 'Gwale', 'Kumbotso',
    'Municipal', 'Fagge', 'Dala', 'Ungogo', 'Bompai', 'Sharada',
    'Yankaba', 'Kawaji', 'Yakasai'
  ],
  'Kaduna': [
    'Barnawa', 'Kakuri', 'Nasarawa', 'Sabon Tasha', 'Malali',
    'Ungwan Rimi', 'Kawo', 'Hayin Banki', 'Sabo', 'Tudun Wada',
    'Kabala', 'Gonin Gora', 'Millennium City'
  ],
  'Enugu': [
    'Independence Layout', 'Achara Layout', 'GRA', 'Uwani', 'Asata',
    'Ogui', 'New Haven', 'Abakpa', 'Emene', 'Trans Ekulu', 'Coal Camp',
    'Maryland', 'Agbani Road'
  ],
  'Benin City': [
    'GRA', 'Sapele Road', 'Airport Road', 'Ugbowo', 'Ekenwan',
    'Ikpoba Hill', 'New Benin', 'Aduwawa', 'Evbuotubu', 'Iguosa',
    'Oregbeni', 'Ugbiyoko'
  ],
  'Ogun': [
    'Abeokuta', 'Sagamu', 'Ijebu Ode', 'Ota', 'Ewekoro', 'Ifo',
    'Ilaro', 'Ayetoro', 'Ijebu Igbo', 'Ogere', 'Iperu', 'Ikenne'
  ],
  'Delta': [
    'Warri', 'Asaba', 'Sapele', 'Ughelli', 'Agbor', 'Ozoro',
    'Abraka', 'Oghara', 'Effurun', 'Orerokpe', 'Oleh', 'Okpanam'
  ]
}

const LocationPicker = ({
  value,
  onChange,
  placeholder = 'Select Location',
  required = false,
  className = '',
  variant = 'default',
  showIcon = true,
  allowAreaSelection = true
}: LocationPickerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState(value?.state || '')
  const [selectedArea, setSelectedArea] = useState(value?.area || '')
  const [filteredStates, setFilteredStates] = useState(Object.keys(NIGERIAN_LOCATIONS))
  const [filteredAreas, setFilteredAreas] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Filter states based on search
  useEffect(() => {
    if (searchTerm) {
      const filtered = Object.keys(NIGERIAN_LOCATIONS).filter(state =>
        state.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredStates(filtered)
    } else {
      setFilteredStates(Object.keys(NIGERIAN_LOCATIONS))
    }
  }, [searchTerm])

  // Filter areas when state is selected
  useEffect(() => {
    if (selectedState && allowAreaSelection) {
      const areas = NIGERIAN_LOCATIONS[selectedState as keyof typeof NIGERIAN_LOCATIONS] || []
      if (searchTerm) {
        const filtered = areas.filter(area =>
          area.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredAreas(filtered)
      } else {
        setFilteredAreas(areas)
      }
    }
  }, [selectedState, searchTerm, allowAreaSelection])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleStateSelect = (state: string) => {
    setSelectedState(state)
    setSelectedArea('')
    setSearchTerm('')
    
    if (!allowAreaSelection) {
      onChange?.({ state })
      setIsOpen(false)
    }
  }

  const handleAreaSelect = (area: string) => {
    setSelectedArea(area)
    onChange?.({ state: selectedState, area })
    setIsOpen(false)
    setSearchTerm('')
  }

  const handleClear = () => {
    setSelectedState('')
    setSelectedArea('')
    setSearchTerm('')
    onChange?.({ state: '', area: '' })
  }

  const getDisplayValue = () => {
    if (selectedArea && selectedState) {
      return `${selectedArea}, ${selectedState}`
    }
    if (selectedState && !allowAreaSelection) {
      return selectedState
    }
    return ''
  }

  // Render based on variant
  if (variant === 'search') {
    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          {showIcon && (
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          )}
          <input
            type="text"
            value={searchTerm || getDisplayValue()}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className={`w-full ${showIcon ? 'pl-10' : 'pl-4'} pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
            required={required}
          />
          {(selectedState || searchTerm) && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Search Dropdown */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
            {!selectedState ? (
              <>
                <div className="p-2 text-xs font-medium text-gray-500 uppercase">States</div>
                {filteredStates.map((state) => (
                  <button
                    key={state}
                    type="button"
                    onClick={() => handleStateSelect(state)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                  >
                    {state}
                  </button>
                ))}
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedState('')
                    setSelectedArea('')
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-600 border-b"
                >
                  ← Back to states
                </button>
                <div className="p-2 text-xs font-medium text-gray-500 uppercase">
                  Areas in {selectedState}
                </div>
                {filteredAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => handleAreaSelect(area)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                  >
                    {area}
                  </button>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    )
  }

  // Default dropdown variant
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
          variant === 'compact' ? 'text-sm' : ''
        }`}
      >
        <div className="flex items-center gap-2">
          {showIcon && <MapPin className="w-5 h-5 text-gray-400" />}
          <span className={getDisplayValue() ? 'text-gray-900' : 'text-gray-500'}>
            {getDisplayValue() || placeholder}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {/* Search input */}
          <div className="p-2 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search location..."
                className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Location list */}
          {!selectedState || !allowAreaSelection ? (
            <>
              <div className="p-2 text-xs font-medium text-gray-500 uppercase">States</div>
              {filteredStates.map((state) => (
                <button
                  key={state}
                  type="button"
                  onClick={() => handleStateSelect(state)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center justify-between ${
                    selectedState === state ? 'bg-green-50 text-green-700' : ''
                  }`}
                >
                  <span>{state}</span>
                  {selectedState === state && <Check className="w-4 h-4" />}
                </button>
              ))}
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  setSelectedState('')
                  setSelectedArea('')
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-600 border-b flex items-center gap-2"
              >
                <ChevronDown className="w-4 h-4 rotate-90" />
                Back to states
              </button>
              <div className="p-2 text-xs font-medium text-gray-500 uppercase">
                Select area in {selectedState}
              </div>
              {filteredAreas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => handleAreaSelect(area)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center justify-between ${
                    selectedArea === area ? 'bg-green-50 text-green-700' : ''
                  }`}
                >
                  <span>{area}</span>
                  {selectedArea === area && <Check className="w-4 h-4" />}
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default LocationPicker