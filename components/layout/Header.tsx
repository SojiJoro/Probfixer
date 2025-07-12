'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User } from 'lucide-react'
import Button from '@/components/ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl">ProbFixer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-gray-700 hover:text-purple-600 transition-colors">
              Find Artisans
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">
              How it Works
            </Link>
            <Link href="/post-problem" className="text-gray-700 hover:text-purple-600 transition-colors">
              Post a Job
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button>
              Join as Artisan
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/browse" className="text-gray-700 hover:text-purple-600">
                Find Artisans
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-purple-600">
                How it Works
              </Link>
              <Link href="/post-problem" className="text-gray-700 hover:text-purple-600">
                Post a Job
              </Link>
              <hr className="my-2" />
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">
                Join as Artisan
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header