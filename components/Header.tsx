'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Home, BookOpen, Briefcase, Code2, User, Mail } from 'lucide-react'

const navigation = [
  { name: '首页', href: '/', icon: Home },
  { name: '博客', href: '/blog', icon: BookOpen },
  { name: '项目', href: '/projects', icon: Briefcase },
  { name: '技能', href: '/skills', icon: Code2 },
  { name: '关于', href: '/about', icon: User },
  { name: '联系', href: '/contact', icon: Mail },
]

interface HeaderProps {
  profile: {
    name: string
    englishName: string
  }
}

export default function Header({ profile }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <span className="text-white font-bold text-xl">AL</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">{profile.name}</h1>
              <p className="text-xs text-neutral-600">{profile.englishName}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 animate-slide-down">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}
