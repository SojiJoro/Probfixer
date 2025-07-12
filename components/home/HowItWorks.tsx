import { Search, MessageSquare, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Post Your Problem',
      description: 'Describe what needs fixing and add photos if needed'
    },
    {
      icon: MessageSquare,
      title: 'Get Quotes',
      description: 'Receive quotes from verified artisans in your area'
    },
    {
      icon: CheckCircle,
      title: 'Hire & Relax',
      description: 'Choose your artisan and get your problem fixed'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How ProbFixer Works
          </h2>
          <p className="text-lg text-gray-600">
            Get your problems fixed in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks