import { Shield, Clock, Award, Users } from 'lucide-react'

const TrustSection = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Verified Artisans' },
    { number: '4.8', label: 'Average Rating' },
    { number: '24/7', label: 'Support Available' }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All artisans go through background checks and skill verification'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Get quotes within hours, not days'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Satisfaction guaranteed or your money back'
    },
    {
      icon: Users,
      title: 'Real Reviews',
      description: 'Read genuine reviews from verified customers'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-white to-primary-50">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Features */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Trust ProbFixer?
          </h2>
          <p className="text-lg text-gray-600">
            We ensure quality and reliability at every step
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
                             </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection