'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User } from 'lucide-react'
import Button from '@/components/ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-600 to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl">ProbFixer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-white hover:text-white/90 transition-colors">
              Find Artisans
            </Link>
            <Link href="/how-it-works" className="text-white hover:text-white/90 transition-colors">
              How it Works
            </Link>
            <Link href="/post-problem" className="text-white hover:text-white/90 transition-colors">
              Post a Job
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:text-white">
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
          <div className="md:hidden py-4 border-t bg-primary-600 text-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/browse" className="text-white hover:text-white/90">
                Find Artisans
              </Link>
              <Link href="/how-it-works" className="text-white hover:text-white/90">
                How it Works
              </Link>
              <Link href="/post-problem" className="text-white hover:text-white/90">
                Post a Job
              </Link>
              <hr className="my-2" />
              <Button variant="outline" className="w-full bg-white text-primary-600">
                Sign In
              </Button>
              <Button className="w-full bg-white text-primary-600">
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