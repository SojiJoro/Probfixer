'use client'
import { useRouter } from 'next/navigation'

const PopularServices = () => {
  const router = useRouter()
  
  const services = [
    { id: 1, name: 'Plumbing', icon: '🔧', jobs: 1234 },
    { id: 2, name: 'Electrical', icon: '💡', jobs: 987 },
    { id: 3, name: 'AC Repair', icon: '❄️', jobs: 756 },
    { id: 4, name: 'Carpentry', icon: '🔨', jobs: 543 },
    { id: 5, name: 'Painting', icon: '🎨', jobs: 432 },
    { id: 6, name: 'Cleaning', icon: '🧹', jobs: 876 },
    { id: 7, name: 'Generator Repair', icon: '⚡', jobs: 234 },
    { id: 8, name: 'Appliance Repair', icon: '🔌', jobs: 345 }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Services
          </h2>
          <p className="text-lg text-gray-600">
            Browse artisans by service category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => router.push(`/browse?service=${service.name}`)}
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {service.jobs.toLocaleString()} jobs
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularServices