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
        <section className="home-cta-section">
          <div className="container">
            <h2 className="home-cta-heading">Ready to Fix Your Problems?</h2>
            <p className="home-cta-subtext">
              Join thousands of Nigerians who trust ProbFixer for their home and office repairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/post-problem" className="btn-home-primary">Post Your Problem</a>
              <a href="/browse" className="btn-home-secondary">Browse Artisans</a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="home-stats-section">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="stat-block">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">500+</div>
                <div className="stat-label">Verified Artisans</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">15K+</div>
                <div className="stat-label">Jobs Completed</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">4.8★</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="home-mobile-section">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get the ProbFixer App
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Book artisans on the go. Get real-time updates, chat with artisans, and manage your bookings from your phone.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Instant Notifications",
                      subtitle: "Get notified when artisans respond",
                      iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
                    },
                    {
                      title: "In-App Chat",
                      subtitle: "Chat with artisans directly",
                      iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    },
                    {
                      title: "Track Jobs",
                      subtitle: "Monitor progress in real-time",
                      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    }
                  ].map((item, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon-wrapper">
                        <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
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
                <div className="app-highlight-box">
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

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="testimonial-heading">What Our Customers Say</h2>
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
                <div key={index} className="home-testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container max-w-3xl">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
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
                <details key={index} className="faq-item">
                  <summary className="faq-summary">
                    <span className="faq-question">{faq.question}</span>
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Join as Artisan Section */}
        <section className="artisan-cta-section">
          <div className="container">
            <h2 className="artisan-cta-heading">Are You a Skilled Artisan?</h2>
            <p className="artisan-cta-subtext">
              Join ProbFixer and connect with thousands of customers looking for your services. Grow your business today!
            </p>
            <a href="/artisan/join" className="btn-join-artisan">Join as an Artisan</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
