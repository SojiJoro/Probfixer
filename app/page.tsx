import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import FeaturedArtisans from '@/components/home/FeaturedArtisans'
import PopularServices from '@/components/home/PopularServices'
import TrustSection from '@/components/home/TrustSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedArtisans />
        <PopularServices />
        <TrustSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Fix Your Problems?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Join thousands of Nigerians who trust ProbFixer for their home and office repairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/post-problem"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Post Your Problem
              </a>
              <a
                href="/browse"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Browse Artisans
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Verified Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">15K+</div>
                <div className="text-gray-600">Jobs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get the ProbFixer App
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Book artisans on the go. Get real-time updates, chat with artisans, and manage your bookings from your phone.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Instant Notifications</h3>
                      <p className="text-sm text-gray-600">Get notified when artisans respond</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">In-App Chat</h3>
                      <p className="text-sm text-gray-600">Chat with artisans directly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Track Jobs</h3>
                      <p className="text-sm text-gray-600">Monitor progress in real-time</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="#" className="inline-block">
                    <img src="https://via.placeholder.com/150x50" alt="Download on Google Play" className="h-12" />
                  </a>
                  <a href="#" className="inline-block">
                    <img src="https://via.placeholder.com/150x50" alt="Download on App Store" className="h-12" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8">
                  <img 
                    src="https://via.placeholder.com/400x600" 
                    alt="ProbFixer Mobile App" 
                    className="mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Adebayo Johnson",
                  location: "Lekki, Lagos",
                  text: "Found an excellent plumber within 30 minutes. He fixed my burst pipe professionally. Highly recommend ProbFixer!",
                  rating: 5
                },
                {
                  name: "Fatima Abdullahi",
                  location: "Wuse, Abuja",
                  text: "The electrician was punctual and solved my power issues quickly. The platform is very easy to use.",
                  rating: 5
                },
                {
                  name: "Chioma Okafor",
                  location: "GRA, Port Harcourt",
                  text: "I've used ProbFixer multiple times for different repairs. Always reliable artisans. This is a game-changer!",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How does ProbFixer work?",
                  answer: "Simply post your problem, receive quotes from verified artisans in your area, compare profiles and reviews, then hire the best fit for your job."
                },
                {
                  question: "Are the artisans verified?",
                  answer: "Yes! All artisans go through a verification process including ID verification, skill assessment, and background checks."
                },
                {
                  question: "What areas do you cover?",
                  answer: "We currently operate in Lagos, Abuja, Port Harcourt, and Ibadan, with plans to expand to other major cities soon."
                },
                {
                  question: "How do I pay for services?",
                  answer: "You can pay artisans directly in cash or through our secure in-app payment system using cards or bank transfers."
                },
                {
                  question: "What if I'm not satisfied with the work?",
                  answer: "We have a satisfaction guarantee. If you're not happy with the work, contact our support team and we'll help resolve the issue."
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors rounded-lg">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Join as Artisan CTA */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Are You a Skilled Artisan?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join ProbFixer and connect with thousands of customers looking for your services. Grow your business today!
            </p>
            <a
              href="/artisan/join"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Join as an Artisan
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}