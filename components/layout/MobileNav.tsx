'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Home, 
  Search, 
  Briefcase, 
  User, 
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Shield,
  HelpCircle,
  FileText,
  Star,
  PlusCircle
} from 'lucide-react'

interface MobileNavProps {
  user?: {
    name: string
    email: string
    role: 'customer' | 'artisan' | 'admin'
    image?: string
  }
}

const MobileNav = ({ user }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  // Navigation items based on user role
  type NavItem = {
    icon: React.ElementType
    label: string
    href?: string
    submenu?: { label: string; href: string }[]
    badge?: string
    highlight?: boolean
  }

  const getNavItems = (): NavItem[] => {
    const commonItems: NavItem[] = [
      {
        icon: Home,
        label: 'Home',
        href: '/',
      },
      {
        icon: Search,
        label: 'Find Artisans',
        href: '/browse',
      },
      {
        icon: Briefcase,
        label: 'Services',
        submenu: [
          { label: 'Plumbing', href: '/browse?service=Plumbing' },
          { label: 'Electrical', href: '/browse?service=Electrical' },
          { label: 'AC Repair', href: '/browse?service=AC%20Repair' },
          { label: 'Carpentry', href: '/browse?service=Carpentry' },
          { label: 'All Services', href: '/services' },
        ]
      },
    ]

    if (!user) {
      return [
        ...commonItems,
        {
          icon: User,
          label: 'Sign In',
          href: '/login',
        },
        {
          icon: PlusCircle,
          label: 'Join as Artisan',
          href: '/artisan/join',
          highlight: true
        }
      ]
    }

    if (user.role === 'customer') {
      return [
        ...commonItems,
        {
          icon: MessageSquare,
          label: 'My Requests',
          href: '/dashboard/requests',
        },
        {
          icon: User,
          label: 'Profile',
          href: '/dashboard/profile',
        }
      ]
    }

    if (user.role === 'artisan') {
      return [
        {
          icon: Home,
          label: 'Dashboard',
          href: '/artisan/dashboard',
        },
        {
          icon: Briefcase,
          label: 'Jobs',
          href: '/artisan/jobs',
          badge: '3', // Example badge
        },
        {
          icon: MessageSquare,
          label: 'Messages',
          href: '/artisan/messages',
          badge: '5',
        },
        {
          icon: Star,
          label: 'Reviews',
          href: '/artisan/reviews',
        },
        {
          icon: User,
          label: 'Profile',
          href: '/artisan/profile',
        }
      ]
    }

    return commonItems
  }

  const navItems = getNavItems()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl">ProbFixer</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User info (if logged in) */}
        {user && (
          <div className="p-4 border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  user.name.charAt(0).toUpperCase()
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-gray-600" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${
                        activeSubmenu === item.label ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {activeSubmenu === item.label && (
                      <div className="ml-12 mt-1 space-y-1">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            href={subitem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href ?? '#'}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                      pathname === item.href 
                        ? 'bg-green-50 text-green-700' 
                        : 'hover:bg-gray-100'
                    } ${item.highlight ? 'bg-green-600 text-white hover:bg-green-700' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${
                        item.highlight ? 'text-white' : 'text-gray-600'
                      }`} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Additional menu sections */}
          <div className="border-t my-4" />
          
          <div className="p-4 space-y-1">
            <p className="text-xs font-medium text-gray-500 uppercase mb-2">Support</p>
            <Link
              href="/help"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Help Center</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Contact Us</span>
            </Link>
          </div>

          {user && (
            <>
              <div className="border-t my-4" />
              <div className="p-4 space-y-1">
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Settings</span>
                </Link>
                <button
                  onClick={() => {
                    // Handle logout
                    console.log('Logout')
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </>
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gray-900">Terms</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-gray-900">About</Link>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            © 2024 ProbFixer
          </p>
        </div>
      </div>

      {/* Bottom navigation bar for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-30">
        <div className="grid grid-cols-4 gap-1">
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              pathname === '/' ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            href="/browse"
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              pathname === '/browse' ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <Search className="w-5 h-5" />
            <span className="text-xs">Search</span>
          </Link>
          <Link
            href={user ? '/dashboard/requests' : '/post-problem'}
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              pathname === '/dashboard/requests' || pathname === '/post-problem' 
                ? 'text-green-600' 
                : 'text-gray-600'
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span className="text-xs">Post Job</span>
          </Link>
          <Link
            href={user ? '/dashboard' : '/login'}
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              pathname === '/dashboard' || pathname === '/login' 
                ? 'text-green-600' 
                : 'text-gray-600'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">{user ? 'Account' : 'Sign In'}</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default MobileNav