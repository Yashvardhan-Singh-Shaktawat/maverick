import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function AboutUs({ onBackToHome }) {
  const [animated, setAnimated] = useState(false)
  const [activeMetric, setActiveMetric] = useState(null)
  
  // Team Carousel State
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const carouselRef = useRef(null)

  // Trigger entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true)
    }, 120)
    return () => clearTimeout(timer)
  }, [])

  // Check carousel scroll boundaries
  const updateScrollState = () => {
    if (!carouselRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  useEffect(() => {
    updateScrollState()
    const currentRef = carouselRef.current
    if (currentRef) {
      currentRef.addEventListener('scroll', updateScrollState)
      window.addEventListener('resize', updateScrollState)
    }
    return () => {
      if (currentRef) currentRef.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return
    const cardWidth = 280 + 16 // card width + gap
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }

  // Stat list data (Overview section)
  const statList = [
    {
      id: 'support',
      value: '95%',
      label: 'Seamless Support',
      toneClass: 'text-[#00A8CC]',
    },
    {
      id: 'engagement',
      value: '97%',
      label: 'Client Engagement',
      toneClass: 'text-[#00A8CC]/85',
    },
    {
      id: 'compliance',
      value: '92%',
      label: 'Compliance Expertise',
      toneClass: 'text-[#00A8CC]/70',
    },
    {
      id: 'creative',
      value: '94%',
      label: 'Creative Ability',
      toneClass: 'text-[#00A8CC]/55',
    },
  ]

  // Bars sorted in ascending order of value, scaled between 44% and 100% of track height
  const barData = [
    {
      id: 'compliance',
      metric: 'Compliance Expertise',
      percentage: '92%',
      fillHeight: '44%',
      fillGradient: 'bg-gradient-to-t from-[#00A8CC]/40 via-[#00A8CC]/55 to-cyan-300/70 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_4px_16px_rgba(0,168,204,0.2)]',
      fillActiveGradient: 'bg-gradient-to-t from-[#00A8CC]/50 via-[#00A8CC]/65 to-cyan-300/80 shadow-[inset_0_2px_5px_rgba(255,255,255,0.85),0_6px_20px_rgba(0,168,204,0.3)]',
      delay: '100ms',
    },
    {
      id: 'creative',
      metric: 'Creative Ability',
      percentage: '94%',
      fillHeight: '62%',
      fillGradient: 'bg-gradient-to-t from-[#00A8CC]/60 via-[#00A8CC]/75 to-cyan-300/85 shadow-[inset_0_2px_4px_rgba(255,255,255,0.75),0_6px_20px_rgba(0,168,204,0.25)]',
      fillActiveGradient: 'bg-gradient-to-t from-[#00A8CC]/70 via-[#00A8CC]/85 to-cyan-300/95 shadow-[inset_0_2px_5px_rgba(255,255,255,0.9),0_8px_24px_rgba(0,168,204,0.35)]',
      delay: '200ms',
    },
    {
      id: 'support',
      metric: 'Seamless Support',
      percentage: '95%',
      fillHeight: '80%',
      fillGradient: 'bg-gradient-to-t from-[#00A8CC]/80 via-[#00A8CC]/95 to-cyan-200 shadow-[inset_0_2px_5px_rgba(255,255,255,0.85),0_8px_24px_rgba(0,168,204,0.3)]',
      fillActiveGradient: 'bg-gradient-to-t from-[#008ba8] via-[#00A8CC] to-cyan-200 shadow-[inset_0_2px_6px_rgba(255,255,255,0.95),0_10px_28px_rgba(0,168,204,0.4)]',
      delay: '300ms',
    },
    {
      id: 'engagement',
      metric: 'Client Engagement',
      percentage: '97%',
      fillHeight: '100%',
      fillGradient: 'bg-gradient-to-t from-[#007f9c] via-[#00A8CC] to-[#38e1ff] shadow-[inset_0_2px_6px_rgba(255,255,255,0.95),0_10px_28px_rgba(0,168,204,0.4)]',
      fillActiveGradient: 'bg-gradient-to-t from-[#006e87] via-[#0092B3] to-[#2bd6f7] shadow-[inset_0_2px_7px_rgba(255,255,255,1),0_14px_34px_rgba(0,168,204,0.5)]',
      delay: '400ms',
    },
  ]

  // Team & Expertise Members Array
  const teamMembers = [
    {
      id: 1,
      name: 'Sumit Narang',
      role: 'Managing Partner, Advisory and Consulting',
      bio: 'Sumit leads strategic advisory and enterprise consulting, driving sustainable operational excellence, tech modernization, and milestone execution for global clients.',
      image: '/2-1-768x768.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 2,
      name: 'Upasana Goel',
      role: 'Managing Partner, Demand Generation',
      bio: 'Upasana spearheads high-velocity go-to-market strategies, demand generation engines, and revenue pipeline architectures across high-growth organizations.',
      image: '/Upasana-Goel.png',
      fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 3,
      name: 'Sanyam Goel',
      role: 'Managing Consultant, Compliance and Certification',
      bio: 'Sanyam directs end-to-end SOC 2, ISO 27001, HIPAA, and cyber compliance audits, delivering frictionless certifications in record turnaround times.',
      image: '/1-1.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 4,
      name: 'Chloe White',
      role: 'Partnerships Specialist',
      bio: 'Chloe cultivates global strategic partner ecosystems and client relationships, facilitating collaborative synergy and long-term enterprise value.',
      image: '/Chloe.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
  ]

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* ================================================================ */}
      {/* SECTION 1: OVERVIEW PRESENTATION SLIDE                           */}
      {/* ================================================================ */}
      <section className="w-full py-16 sm:py-24 lg:py-28 relative overflow-hidden flex items-center border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (about 40% width) */}
            <div className="lg:col-span-5 flex flex-col justify-start text-left">
              
              <div 
                className={`transition-all duration-700 ease-out ${
                  animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  Overview
                </span>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[72px] font-extrabold text-[#1E2A4A] tracking-tight leading-[1.06] mt-4 sm:mt-5 transition-all duration-700 delay-100 ease-out ${
                  animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Where business meets efficiency
              </h1>

              <div 
                className={`mt-8 sm:mt-10 lg:mt-12 transition-all duration-700 delay-200 ease-out ${
                  animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-slate-500 text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-[380px] font-normal">
                  We believe in working with the most important topics with the most important clients. Attain positive and sustainable goals with our expertise.
                </p>
              </div>

            </div>

            {/* Right Column (about 60% width) */}
            <div className="lg:col-span-7 flex flex-row items-end justify-between sm:justify-end gap-6 sm:gap-12 lg:gap-16 pt-6 lg:pt-0">
              
              {/* Part A: Stat List */}
              <div className="flex flex-col justify-between h-[340px] sm:h-[400px] lg:h-[440px] text-left py-1">
                {statList.map((stat, idx) => {
                  const isHovered = activeMetric === stat.id
                  return (
                    <div 
                      key={stat.id}
                      onMouseEnter={() => setActiveMetric(stat.id)}
                      onMouseLeave={() => setActiveMetric(null)}
                      className={`transition-all duration-700 ease-out cursor-default transform ${
                        animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      } ${isHovered ? 'scale-105' : ''}`}
                      style={{ transitionDelay: `${idx * 100 + 150}ms` }}
                    >
                      <div className={`text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight font-sans transition-colors duration-200 ${stat.toneClass}`}>
                        {stat.value}
                      </div>

                      <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 tracking-normal">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Part B: Glassmorphism Vertical Pill Bar Chart */}
              <div className="flex items-end gap-3 sm:gap-5 lg:gap-6 h-[340px] sm:h-[400px] lg:h-[440px]">
                {barData.map((bar) => {
                  const isHovered = activeMetric === bar.id
                  return (
                    <div
                      key={bar.id}
                      onMouseEnter={() => setActiveMetric(bar.id)}
                      onMouseLeave={() => setActiveMetric(null)}
                      className="flex flex-col items-center justify-end h-full group relative cursor-pointer"
                    >
                      {/* Tooltip on Hover */}
                      <div 
                        className={`absolute -top-12 px-3 py-1.5 rounded-lg bg-[#0A2540]/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/20 transition-all duration-200 pointer-events-none z-30 ${
                          isHovered ? 'opacity-100 -translate-y-1 scale-100' : 'opacity-0 translate-y-1 scale-95'
                        }`}
                      >
                        {bar.percentage} — {bar.metric}
                      </div>

                      {/* Glass Capsule Track */}
                      <div className="w-10 sm:w-12 lg:w-14 h-full rounded-full relative overflow-hidden flex items-end p-1.5 transition-all duration-300 backdrop-blur-md bg-slate-100/90 border border-slate-200/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03),inset_0_-2px_4px_rgba(0,168,204,0.05),0_4px_16px_rgba(0,0,0,0.03)] group-hover:bg-slate-200/60 group-hover:border-slate-300/80 group-hover:shadow-[0_8px_24px_rgba(0,168,204,0.12)]">
                        
                        {/* Vertical Glass Specular Streak */}
                        <div className="absolute left-1.5 top-3 bottom-3 w-[3px] bg-gradient-to-b from-white/95 via-white/40 to-transparent rounded-full pointer-events-none z-20 opacity-90 group-hover:opacity-100 transition-opacity" />

                        {/* Right Edge Glass Reflection */}
                        <div className="absolute right-1 top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-white/70 via-white/20 to-transparent rounded-full pointer-events-none z-20" />

                        {/* Pill Glass Fluid Fill */}
                        <div
                          className={`w-full rounded-full relative overflow-hidden transition-all duration-700 ease-out ${
                            isHovered ? bar.fillActiveGradient : bar.fillGradient
                          }`}
                          style={{
                            height: animated ? bar.fillHeight : '0%',
                            transitionDelay: bar.delay,
                          }}
                        >
                          <div className="absolute top-0.5 inset-x-1 h-2 bg-gradient-to-b from-white/90 via-white/40 to-transparent rounded-full pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/10 pointer-events-none" />
                        </div>

                      </div>
                    </div>
                  )
                })}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================================================================ */}
      {/* SECTION 2: TEAMWORK MAKES THE DREAM WORK                         */}
      {/* ================================================================ */}
      <section className="w-full py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          
          {/* HEADER ROW */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-12">
            
            {/* Left Side: Pill Tag + 2-Line Heading */}
            <div className="space-y-4 max-w-xl text-left">
              
              {/* Pill Tag with 1px neutral outline */}
              <div>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-slate-300 text-xs font-semibold tracking-wider text-slate-500 uppercase bg-transparent">
                  EXPERTISE
                </span>
              </div>

              {/* 2-Line Heading, Regular-to-Medium/Bold Weight, Dark Neutral */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E2A4A] tracking-tight leading-[1.15]">
                Teamwork makes <br className="hidden sm:inline" />
                the dream work
              </h2>

            </div>

            {/* Right Side: Two Circular Primary Icon Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                aria-label="Previous Team Member"
                className={`w-11 h-11 rounded-full bg-[#00A8CC] text-white flex items-center justify-center transition-all duration-200 shadow-sm ${
                  canScrollLeft 
                    ? 'hover:bg-[#0092B3] hover:scale-105 active:scale-95 cursor-pointer' 
                    : 'opacity-40 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                aria-label="Next Team Member"
                className={`w-11 h-11 rounded-full bg-[#00A8CC] text-white flex items-center justify-center transition-all duration-200 shadow-sm ${
                  canScrollRight 
                    ? 'hover:bg-[#0092B3] hover:scale-105 active:scale-95 cursor-pointer' 
                    : 'opacity-40 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

          </div>

          {/* CARD CAROUSEL */}
          <div 
            ref={carouselRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-6 pt-2 -mr-6 sm:-mr-10 lg:-mr-16 pr-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="snap-start shrink-0 w-[260px] sm:w-[280px] aspect-[3/4] rounded-[20px] relative overflow-hidden transition-all duration-300 ease-out select-none group transform hover:-translate-y-1.5 shadow-sm hover:shadow-xl bg-slate-100"
              >
                {/* BASE LAYER: Full Bleed Portrait Photo Card */}
                <div className="w-full h-full relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      if (member.fallbackImage && e.target.src !== member.fallbackImage) {
                        e.target.src = member.fallbackImage
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Bottom Dark Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Bottom Base Text */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white z-10 transition-opacity duration-200 group-hover:opacity-0">
                    <h4 className="text-sm sm:text-[15px] font-semibold text-white tracking-tight leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-xs text-slate-300 font-normal mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* HOVER LAYER: Solid Primary Teal Info Overlay */}
                <div className="absolute inset-0 bg-[#00A8CC] p-6 sm:p-7 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20 pointer-events-none group-hover:pointer-events-auto">
                  
                  {/* Top Info */}
                  <div className="text-left space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-medium">
                      {member.role}
                    </p>

                    <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed pt-3 sm:pt-4 font-normal">
                      {member.bio}
                    </p>
                  </div>

                  {/* Bottom-left Social Buttons Row */}
                  <div className="flex items-center gap-2.5 pt-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  )
}
