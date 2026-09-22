import React, { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar({ currentPage = 'home', onNavigate = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [resourcesDropdown, setResourcesDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (page, anchor = '') => {
    setMobileMenuOpen(false)
    setServicesDropdown(false)
    setResourcesDropdown(false)

    if (['compliance-certifications', 'advisory-consulting', 'demand-generation', 'staff-augmentation', 'crm-implementation', 'enrollment-growth-engine', 'about-us'].includes(page)) {
      onNavigate(page)
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

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 animate-nav-slide ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,168,204,0.06)] border-b border-slate-100/80 py-1' 
          : 'bg-white py-2'
      }`}
    >
      {/* Dynamic Animated Ambient Shimmer Line on Load */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent overflow-hidden pointer-events-none opacity-80">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#00A8CC] to-transparent animate-beam-sweep" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Image Logo with Spring Dynamic Entrance */}
          <div className="animate-logo-pop">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center group relative transform transition-transform duration-300 hover:scale-105 active:scale-95 text-left focus:outline-none"
            >
              <img
                src="/logo.png"
                alt="The Mavericks Consulting Logo"
                className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:brightness-105 drop-shadow-[0_2px_8px_rgba(0,168,204,0.15)]"
                onError={(e) => {
                  e.target.style.display = 'none'
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div 
                style={{ display: 'none' }}
                className="px-4 py-2 bg-[#00A8CC] rounded-lg shadow-sm items-center gap-1 group-hover:bg-[#0092B3] transition-colors duration-200"
              >
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center font-sans">
                  Maver
                  <span className="relative inline-flex items-center justify-center mx-[1px]">
                    ı
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-xs font-black">^</span>
                  </span>
                  cks
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links with Staggered Entrance */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700">
            
            {/* Item 1: Home */}
            <div className="animate-nav-item" style={{ animationDelay: '0.12s' }}>
              <button 
                onClick={() => handleNavClick('home')}
                className={`relative py-2 transition-colors duration-200 group font-medium ${
                  currentPage === 'home' ? 'text-[#00A8CC] font-bold' : 'hover:text-[#00A8CC]'
                }`}
              >
                <span>Home</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#00A8CC] rounded-full transition-transform duration-300 origin-left ${
                  currentPage === 'home' ? 'scale-x-100 shadow-[0_0_8px_rgba(0,168,204,0.6)]' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            </div>
            
            {/* Item 2: About Us */}
            <div className="animate-nav-item" style={{ animationDelay: '0.18s' }}>
              <button 
                onClick={() => handleNavClick('about-us')}
                className={`relative py-2 transition-colors duration-200 group font-medium ${
                  currentPage === 'about-us' ? 'text-[#00A8CC] font-bold' : 'hover:text-[#00A8CC]'
                }`}
              >
                <span>About Us</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#00A8CC] rounded-full transition-transform duration-300 origin-left ${
                  currentPage === 'about-us' ? 'scale-x-100 shadow-[0_0_8px_rgba(0,168,204,0.6)]' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            </div>

            {/* Item 3: Services Dropdown */}
            <div 
              className="relative animate-nav-item" 
              style={{ animationDelay: '0.24s' }}
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`relative flex items-center gap-1 hover:text-[#00A8CC] transition-colors duration-200 py-2 focus:outline-none group ${
                  ['compliance-certifications', 'advisory-consulting', 'demand-generation', 'staff-augmentation', 'crm-implementation', 'enrollment-growth-engine'].includes(currentPage) ? 'text-[#00A8CC] font-bold' : ''
                }`}
                onClick={() => setServicesDropdown(!servicesDropdown)}
                aria-expanded={servicesDropdown}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdown ? 'rotate-180 text-[#00A8CC]' : 'text-slate-400 group-hover:text-[#00A8CC]'}`} />
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#00A8CC] rounded-full transition-transform duration-300 origin-left ${
                  ['compliance-certifications', 'advisory-consulting', 'demand-generation', 'staff-augmentation', 'crm-implementation', 'enrollment-growth-engine'].includes(currentPage) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 transition-all duration-200 animate-dropdown-zoom">
                  <div className="space-y-1">
                    {[
                      { name: 'Compliance Certifications', page: 'compliance-certifications' },
                      { name: 'Advisory Consulting', page: 'advisory-consulting' },
                      { name: 'Demand Generation', page: 'demand-generation' },
                      { name: 'Staff Augmentation', page: 'staff-augmentation' },
                      { name: 'Online Enrollment Engine Support', page: 'enrollment-growth-engine' },
                    ].map((item, i) => {
                      const isItemActive = currentPage === item.page
                      return (
                        <button 
                          key={i}
                          onClick={() => handleNavClick(item.page)}
                          className={`w-full text-left group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            isItemActive
                              ? 'text-[#00A8CC] bg-cyan-50/80 shadow-xs'
                              : 'text-slate-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-indigo-50/30 hover:text-[#00A8CC]'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className={`w-3.5 h-3.5 transition-all duration-200 ${
                            isItemActive ? 'text-[#00A8CC] opacity-100' : 'text-[#00A8CC] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0'
                          }`} />
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Item 4: Resources Dropdown */}
            <div 
              className="relative animate-nav-item" 
              style={{ animationDelay: '0.30s' }}
              onMouseEnter={() => setResourcesDropdown(true)}
              onMouseLeave={() => setResourcesDropdown(false)}
            >
              <button 
                className="relative flex items-center gap-1 hover:text-[#00A8CC] transition-colors duration-200 py-2 focus:outline-none group font-medium"
                onClick={() => setResourcesDropdown(!resourcesDropdown)}
                aria-expanded={resourcesDropdown}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${resourcesDropdown ? 'rotate-180 text-[#00A8CC]' : 'text-slate-400 group-hover:text-[#00A8CC]'}`} />
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00A8CC] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              {resourcesDropdown && (
                <div className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 transition-all duration-200 animate-dropdown-zoom">
                  <div className="space-y-1">
                    {[
                      { name: 'Case Studies', anchor: '#why-us' },
                      { name: 'Client Reviews', anchor: '#testimonials' },
                      { name: 'Consulting Insights', anchor: '#why-us' },
                    ].map((item, i) => (
                      <button 
                        key={i}
                        onClick={() => handleNavClick('home', item.anchor)}
                        className="w-full text-left group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-indigo-50/30 hover:text-[#00A8CC] transition-all duration-200"
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#00A8CC] transition-all duration-200" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Item 5: Contact us */}
            <div className="animate-nav-item" style={{ animationDelay: '0.36s' }}>
              <button 
                onClick={() => handleNavClick('home', '#contact')}
                className="relative py-2 hover:text-[#00A8CC] transition-colors duration-200 group font-medium"
              >
                <span>Contact us</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00A8CC] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </nav>

          {/* Social Badges Right */}
          <div className="hidden md:flex items-center gap-3">
            {/* LinkedIn Badge */}
            <div className="animate-social-pop" style={{ animationDelay: '0.42s' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0077B5] flex items-center justify-center text-white shadow-sm hover:scale-110 hover:-rotate-6 hover:shadow-[0_4px_12px_rgba(0,119,181,0.35)] active:scale-95 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs tracking-tight">in</span>
              </a>
            </div>

            {/* Instagram Badge */}
            <div className="animate-social-pop" style={{ animationDelay: '0.48s' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shadow-sm hover:scale-110 hover:rotate-6 hover:shadow-[0_4px_12px_rgba(221,42,123,0.35)] active:scale-95 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center animate-social-pop">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#00A8CC] rounded-xl hover:bg-slate-50 transition-all duration-200 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 rotate-90 transition-transform duration-300" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 space-y-3 shadow-2xl animate-dropdown-zoom">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left text-base font-semibold transition-colors ${
              currentPage === 'home' ? 'text-[#00A8CC]' : 'text-slate-700'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('about-us')}
            className={`block w-full text-left text-base font-semibold transition-colors ${
              currentPage === 'about-us' ? 'text-[#00A8CC]' : 'text-slate-700 hover:text-[#00A8CC]'
            }`}
          >
            About Us
          </button>

          {/* Mobile Services Sub-items */}
          <div className="py-2 border-y border-slate-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
              Services
            </span>
            {[
              { name: 'Compliance Certifications', page: 'compliance-certifications' },
              { name: 'Advisory Consulting', page: 'advisory-consulting' },
              { name: 'Demand Generation', page: 'demand-generation' },
              { name: 'Staff Augmentation', page: 'staff-augmentation' },
              { name: 'Online Enrollment Engine Support', page: 'enrollment-growth-engine' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left text-sm font-semibold pl-2 py-1.5 rounded-lg transition-colors ${
                  currentPage === item.page ? 'text-[#00A8CC] bg-cyan-50' : 'text-slate-600 hover:text-[#00A8CC]'
                }`}
              >
                👉 {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('home', '#why-us')}
            className="block w-full text-left text-base font-medium text-slate-700 hover:text-[#00A8CC]"
          >
            Resources
          </button>
          
          <button
            onClick={() => handleNavClick('home', '#contact')}
            className="block w-full text-left text-base font-medium text-slate-700 hover:text-[#00A8CC]"
          >
            Contact us
          </button>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <span className="font-bold text-xs">in</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
