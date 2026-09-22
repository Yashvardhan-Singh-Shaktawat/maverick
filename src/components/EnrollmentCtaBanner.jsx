import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function EnrollmentCtaBanner({
  badgeText = 'NEXT-GEN ENROLLMENT ENGINE',
  heading = 'Build your enrollment engine stronger with us',
  subtext = 'Scale student acquisition, streamline admission pipelines, and maximize cohort yield with our data-driven growth framework.',
  buttonText = 'Schedule a Consultation',
  href = '#contact',
  onButtonClick = null
}) {
  const [hasEntered, setHasEntered] = useState(false)
  const bannerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
        }
      },
      { threshold: 0.12 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleClick = (e) => {
    if (onButtonClick) {
      e.preventDefault()
      onButtonClick()
    } else if (href && href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section 
      ref={bannerRef}
      className="w-full pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 bg-[#FAFAFA] relative overflow-hidden text-slate-800"
    >
      {/* ================================================================ */}
      {/* FREE-FLOATING DECORATIVE ARCS (Full-Window Edges, No Box)       */}
      {/* ================================================================ */}
      
      {/* Top-Right Decorative Arc Bleeding Off Screen */}
      <div className="absolute -top-20 -right-20 sm:-top-28 sm:-right-28 lg:-top-32 lg:-right-32 w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] pointer-events-none select-none opacity-80 transition-opacity duration-1000">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="freeArcGradTop" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00A8CC" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#00A8CC" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00A8CC" stopOpacity="0" />
            </linearGradient>
            <filter id="freeGlowTop" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 200,35 A 165 165 0 0 0 35,200"
            fill="none"
            stroke="url(#freeArcGradTop)"
            strokeWidth="30"
            strokeLinecap="round"
            filter="url(#freeGlowTop)"
          />
        </svg>
      </div>

      {/* Bottom-Left Decorative Arc Bleeding Off Screen */}
      <div className="absolute -bottom-20 -left-20 sm:-bottom-28 sm:-left-28 lg:-bottom-32 lg:-left-32 w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] pointer-events-none select-none opacity-80 transition-opacity duration-1000">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="freeArcGradBottom" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#00A8CC" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#00A8CC" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00A8CC" stopOpacity="0" />
            </linearGradient>
            <filter id="freeGlowBottom" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 0,165 A 165 165 0 0 0 165,0"
            fill="none"
            stroke="url(#freeArcGradBottom)"
            strokeWidth="30"
            strokeLinecap="round"
            filter="url(#freeGlowBottom)"
          />
        </svg>
      </div>

      {/* ================================================================ */}
      {/* FREE-FLOATING CONTENT CONTAINER                                  */}
      {/* Left Info & Right Button UI Layout                               */}
      {/* ================================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side: Badge + Big Heading + Subtext */}
          <div className="max-w-3xl space-y-4 text-left">
            
            {/* Pill Badge */}
            <span 
              className={`inline-flex items-center px-3.5 py-1 rounded-full border border-cyan-200/90 bg-cyan-50/60 text-[#00A8CC] text-xs sm:text-[13px] font-extrabold tracking-widest uppercase shadow-xs transition-all duration-700 ${
                hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              {badgeText}
            </span>

            {/* Large Bold Heading */}
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-[1.15] transition-all duration-700 ${
                hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '160ms' }}
            >
              {heading}
            </h2>

            {/* Subtext */}
            <p 
              className={`text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal pt-1 transition-all duration-700 ${
                hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              {subtext}
            </p>

          </div>

          {/* Right Side: Primary Button */}
          <div 
            className={`shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3 pt-2 lg:pt-0 transition-all duration-700 ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '320ms' }}
          >
            <a
              href={href}
              onClick={handleClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-[#00A8CC] hover:bg-[#0092B3] text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(0,168,204,0.32)] hover:shadow-[0_16px_36px_rgba(0,168,204,0.45)] hover:-translate-y-1 active:scale-[0.97] transition-all duration-200 group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <span className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-1.5 pl-2 lg:pl-0">
              No upfront commitment • Strategy First
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

