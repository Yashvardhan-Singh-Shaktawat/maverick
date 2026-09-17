import React, { useState, useEffect, useRef } from 'react'
import { Mail, Check } from 'lucide-react'

export default function Footer({ onNavigate = () => {} }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLink = (e, page, anchor = '') => {
    e.preventDefault()
    if (page === 'compliance-certifications') {
      onNavigate('compliance-certifications')
    } else {
      onNavigate('home')
      if (anchor) {
        setTimeout(() => {
          const el = document.querySelector(anchor)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      console.log('Newsletter subscription:', email)
      setTimeout(() => {
        setEmail('')
        setSubscribed(false)
      }, 4000)
    }
  }

  return (
    <footer 
      ref={footerRef}
      className="bg-[#00A8CC] text-white pt-16 pb-10 relative overflow-hidden"
    >
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/20">
          
          {/* Column 1: Brand Image Logo & Tagline */}
          <div 
            className={`lg:col-span-4 space-y-4 transition-all duration-700 ease-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <button 
              onClick={(e) => handleLink(e, 'home')} 
              className="inline-block text-left focus:outline-none group transform transition-transform hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="The Mavericks Consulting Logo"
                className="h-10 sm:h-12 w-auto object-contain bg-white/10 rounded-lg p-1 transition-all group-hover:brightness-105"
              />
            </button>
            <p className="text-sm text-white/90 leading-relaxed max-w-sm">
              We create IT solutions that are easy to use, easy to manage, and easy to trust.
            </p>
          </div>

          {/* Column 2: Company */}
          <div 
            className={`lg:col-span-2 space-y-3 transition-all duration-700 ease-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-base font-bold text-white mb-2">Company</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <button 
                  onClick={(e) => handleLink(e, 'home', '#who-we-are')} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  About us
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleLink(e, 'compliance-certifications')} 
                  className="hover:text-white hover:underline transition-all text-left font-semibold text-white"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleLink(e, 'home', '#why-us')} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  Resource
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div 
            className={`lg:col-span-2 space-y-3 transition-all duration-700 ease-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h4 className="text-base font-bold text-white mb-2">Support</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-all">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-all">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div 
            className={`lg:col-span-4 space-y-3 transition-all duration-700 ease-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h4 className="text-base font-bold text-white mb-1">Newsletter</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Sign up our newsletter to get update news and article about company.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2.5 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-full bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A2540] shadow-sm transition-all"
              />

              <button
                type="submit"
                className="w-full py-2.5 px-6 rounded-full bg-[#0A2540] hover:bg-[#071C30] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-200 active:scale-95"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Sign Up</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Sub Footer Bar with Fade-In Animation */}
        <div 
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/85 transition-all duration-800 ease-out ${
            hasEntered 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <p>
            Copyright © 2026 The Mavericks Consulting. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <span className="font-bold text-[11px]">in</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
