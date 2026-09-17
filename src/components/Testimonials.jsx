import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

/**
 * TestimonialQuoteCard (Standalone Component)
 * 
 * Strict implementation of the Testimonial Quote Card UI:
 * - Speech-bubble quote card (rounded-3xl, soft drop shadow, oversized teal quotation mark)
 * - Bottom-left classic speech-bubble notch/tail
 * - 40-50% bottom-right overlapping circular-cropped headshot photo (120-140px diameter, white ring)
 * - Dark pill name/role chip layered behind photo, peeking out from under it
 * - Layering: Card (z-10) -> Chip (z-20) -> Photo (z-30)
 * - Standalone reusable component with zero page background baked in
 */
export function TestimonialQuoteCard({
  quote,
  name,
  role,
  photoUrl,
  className = ""
}) {
  return (
    <div className={`relative inline-block w-full max-w-[460px] sm:max-w-[540px] md:max-w-[580px] select-none text-left ${className}`}>
      
      {/* 1. Speech-Bubble Quote Card (Layer: z-10, bottom layer) */}
      <div className="relative z-10 bg-white rounded-3xl p-7 sm:p-9 shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-slate-100/90 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        
        {/* Large Decorative Opening Quotation Mark at Top-Left (~48-56px, brand teal #00A8CC) */}
        <span 
          className="text-5xl sm:text-6xl font-black text-[#00A8CC] absolute -top-4 sm:-top-5 left-6 sm:left-8 leading-none select-none font-serif opacity-95"
          aria-hidden="true"
        >
          “
        </span>

        {/* Body Text: Quote copy, dark gray/navy, regular weight, comfortable line-height */}
        <p className="text-[#1E2A4A]/85 text-sm sm:text-base leading-relaxed font-normal pt-2 sm:pt-3 pb-6 sm:pb-8 pr-16 sm:pr-24">
          {quote}
        </p>

        {/* Speech-Bubble Tail: Small triangular notch at bottom-left pointing downward-left */}
        <div 
          className="absolute -bottom-2.5 left-10 sm:left-12 w-5 h-5 bg-white transform rotate-45 border-r border-b border-slate-100 shadow-[2px_2px_4px_rgba(0,0,0,0.04)] z-10"
          aria-hidden="true"
        />
      </div>

      {/* 2. Name Label Chip (Layer: z-20, behind photo, peeking out from under/behind it) */}
      <div className="absolute -bottom-3.5 sm:-bottom-5 right-14 sm:right-20 z-20 bg-[#0A2540] text-white py-1.5 sm:py-2 px-4 sm:px-5 pr-16 sm:pr-20 rounded-full shadow-lg border border-white/15 flex flex-col items-start pointer-events-none max-w-[220px] sm:max-w-[260px] transition-all">
        <span className="font-bold text-xs sm:text-sm text-white tracking-tight leading-tight truncate w-full text-left">
          {name}
        </span>
        {role && (
          <span className="text-[10px] sm:text-xs text-[#2DD4BF] font-medium leading-tight truncate w-full text-left mt-0.5">
            {role}
          </span>
        )}
      </div>

      {/* 3. Circular-Cropped Headshot Photo (Layer: z-30, topmost, overlapping bottom-right corner 40-50%) */}
      <div className="absolute -bottom-8 -right-3 sm:-bottom-11 sm:-right-5 z-30 group">
        <img
          src={photoUrl}
          alt={name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

    </div>
  )
}

// Curated pool of high-resolution avatar portraits
const RANDOM_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80"
]

// Extended client testimonials with realistic quotes & designations
const TESTIMONIALS_DATA = [
  {
    id: 0,
    name: "Charlie Vance",
    role: "CEO, Community Funded",
    photoUrl: RANDOM_AVATARS[0],
    quote: "The Mavericks has been a wonderful consultant to our team. They helped us get certified and also did a SOC 2 report for us very quickly and professionally. They know what they do and I recommend them wholeheartedly."
  },
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "VP Operations, TechVentures",
    photoUrl: RANDOM_AVATARS[1],
    quote: "Working with Mavericks Consulting completely revitalized our go-to-market pipeline. Their advisory team identified key operational bottlenecks in weeks, delivering 3x improvement across pipeline velocity."
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO, GlobalReach Cloud",
    photoUrl: RANDOM_AVATARS[2],
    quote: "Their CRM implementation and continuous compliance framework enabled our engineering and sales teams to operate with 100% confidence across international borders. Seamless execution from start to finish."
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Head of Compliance, FinScale",
    photoUrl: RANDOM_AVATARS[3],
    quote: "The speed, accuracy, and depth of technical understanding Mavericks brought to our audit readiness was extraordinary. We passed our ISO 27001 evaluation ahead of schedule with zero non-conformances."
  },
  {
    id: 4,
    name: "Marcus Sterling",
    role: "Managing Partner, Apex Capital",
    photoUrl: RANDOM_AVATARS[4],
    quote: "Mavericks transformed our risk assessment model into a high-speed decision engine. Their strategic clarity and hands-on execution saved our portfolio companies months of trial and error."
  },
  {
    id: 5,
    name: "Amara Okonjo",
    role: "Director of Product, MedTech AI",
    photoUrl: RANDOM_AVATARS[5],
    quote: "Navigating HIPAA and FDA cybersecurity compliance felt daunting until Mavericks stepped in. Their dedicated roadmap and weekly sprint reviews made every milestone completely frictionless."
  },
  {
    id: 6,
    name: "Alexandre Dubois",
    role: "CISO, NexaPay Global",
    photoUrl: RANDOM_AVATARS[6],
    quote: "From penetration testing to enterprise policy drafting, the Mavericks team exceeded our highest expectations. They are our trusted long-term cybersecurity partners."
  },
  {
    id: 7,
    name: "Priya Sharma",
    role: "CRO, CloudSphere",
    photoUrl: RANDOM_AVATARS[7],
    quote: "The ROI we achieved working with Mavericks was evident in Q1. Our enterprise deals close 40% faster with their certified security trust packets and verified frameworks."
  }
]

export default function Testimonials() {
  const testimonials = TESTIMONIALS_DATA
  const [currentIndex, setCurrentIndex] = useState(0)
  const thumbnailContainerRef = useRef(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs sm:text-[13px] font-extrabold tracking-widest uppercase mb-4">
            <Quote className="w-3.5 h-3.5" />
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
            Here's what our clients & partners say
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            Over the years we have built strong rapport with high-growth enterprises and founders across 7+ countries.
            Click any client below to read their review.
          </p>
        </div>

        {/* --- TOP: ACTIVE TESTIMONIAL CARD DISPLAY --- */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-10 pt-2 pb-20 sm:pb-24">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#00A8CC] hover:border-[#00A8CC] hover:shadow-lg items-center justify-center transition-all duration-200 z-40 focus:outline-none shadow-sm"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#00A8CC] hover:border-[#00A8CC] hover:shadow-lg items-center justify-center transition-all duration-200 z-40 focus:outline-none shadow-sm"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Standalone Speech-Bubble Quote Card for the Active Testimonial */}
          <div className="flex justify-center transition-all duration-300">
            <TestimonialQuoteCard
              key={current.id}
              quote={current.quote}
              name={current.name}
              role={current.role}
              photoUrl={current.photoUrl}
            />
          </div>

          {/* Mobile Arrow Controls */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-16">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 font-semibold">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* --- BOTTOM: SUGGESTION / SELECTOR STRIP (Image + Name Only) --- */}
        <div className="mt-6 pt-8 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select a Client to View Testimonial
            </p>
          </div>

          {/* Suggestions List / Grid (Clicking any person changes testimonial at top) */}
          <div 
            ref={thumbnailContainerRef}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            {testimonials.map((item, idx) => {
              const isActive = currentIndex === idx

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative flex items-center gap-3 px-3.5 py-2 rounded-full transition-all duration-200 text-left focus:outline-none ${
                    isActive
                      ? 'bg-white ring-2 ring-[#00A8CC] shadow-md -translate-y-0.5 scale-105'
                      : 'bg-white/80 hover:bg-white border border-slate-200/90 text-slate-600 hover:text-[#1E2A4A] hover:border-[#00A8CC]/40 hover:shadow-sm'
                  }`}
                  aria-label={`View testimonial from ${item.name}`}
                >
                  {/* Thumbnail Avatar Image */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.photoUrl}
                      alt={item.name}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover transition-transform duration-200 ${
                        isActive 
                          ? 'ring-2 ring-[#00A8CC]' 
                          : 'ring-1 ring-slate-200 group-hover:ring-[#00A8CC]/50'
                      }`}
                    />
                    {isActive && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00A8CC] rounded-full border-2 border-white flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      </span>
                    )}
                  </div>

                  {/* Name (and subtle company name) */}
                  <div className="flex flex-col pr-1">
                    <span className={`text-xs sm:text-sm font-bold tracking-tight leading-tight ${
                      isActive ? 'text-[#1E2A4A]' : 'text-slate-700 group-hover:text-[#1E2A4A]'
                    }`}>
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium leading-tight truncate max-w-[110px]">
                      {item.role.split(',')[0]}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
