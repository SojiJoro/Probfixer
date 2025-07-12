import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl">ProbFixer</span>
            </div>
            <p className="text-gray-400 mb-4">
              Nigeria&apos;s trusted marketplace for home and office repairs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="font-semibold text-lg mb-4">For Customers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/browse" className="text-gray-400 hover:text-white transition-colors">
                  Browse Artisans
                </Link>
              </li>
              <li>
                <Link href="/post-problem" className="text-gray-400 hover:text-white transition-colors">
                  Post a Problem
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* For Artisans */}
          <div>
            <h4 className="font-semibold text-lg mb-4">For Artisans</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/artisan/join" className="text-gray-400 hover:text-white transition-colors">
                  Join as Pro
                </Link>
              </li>
              <li>
                <Link href="/artisan/benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/artisan/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/artisan/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ProbFixer. All rights reserved. Made with ❤️ in Nigeria</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer