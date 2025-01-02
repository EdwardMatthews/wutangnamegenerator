'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-900/95 backdrop-blur-sm shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt="Wu Tang Name Generator"
              width={40}
              height={40}
              className="transition-transform duration-300 hover:rotate-180"
            />
            <span className="text-xl font-bold text-yellow-500">
              Wu Tang Name Generator
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="text-zinc-300 hover:text-yellow-500 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-zinc-300 hover:text-yellow-500 transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="#faq" 
              className="text-zinc-300 hover:text-yellow-500 transition-colors"
            >
              FAQs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
