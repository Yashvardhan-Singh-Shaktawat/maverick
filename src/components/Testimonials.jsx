import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote, Globe, Boxes, ShieldCheck } from 'lucide-react'

/**
 * TestimonialQuoteCard (Standalone Component)
 * 
 * Strict implementation of the Testimonial Quote Card UI:
 * - Speech-bubble quote card (rounded-3xl, soft drop shadow, oversized teal quotation mark)
 * - Bottom-left classic speech-bubble notch/tail
 * - 40-50% bottom-right overlapping circular open-source brand emblem (120-140px diameter, white ring)
 * - Dark pill name/role chip layered behind emblem, peeking out from under it
 * - Layering: Card (z-10) -> Chip (z-20) -> Brand Emblem (z-30)
 * - 100% open-source vector client logos (no person photos)
 */
export function TestimonialQuoteCard({
  quote,
  name,
  role,
  gradient,
  icon: Icon,
  tag,
  className = ""
}) {
  return (
    <div className={`relative inline-block w-full max-w-full sm:max-w-[640px] md:max-w-[720px] lg:max-w-[820px] select-none text-left ${className}`}>
      
      {/* 1. Speech-Bubble Quote Card (Layer: z-10, bottom layer) */}
      <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_15px_45px_rgba(0,0,0,0.07)] border border-slate-100/90 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]">
        
        {/* Large Decorative Opening Quotation Mark at Top-Left (~48-56px, brand teal #00A8CC) */}
        <span 
          className="text-5xl sm:text-6xl font-black text-[#00A8CC] absolute -top-4 sm:-top-5 left-6 sm:left-8 leading-none select-none font-serif opacity-95"
          aria-hidden="true"
        >
          “
        </span>

        {/* Body Text: Horizontal wide layout allows longer text to flow in fewer lines, keeping height compact */}
        <p className="text-[#1E2A4A]/85 text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-normal pt-2 pb-6 sm:pb-7 pr-16 sm:pr-24 lg:pr-32">
          {quote}
        </p>

        {/* Speech-Bubble Tail: Small triangular notch at bottom-left pointing downward-left */}
        <div 
          className="absolute -bottom-2.5 left-10 sm:left-12 w-5 h-5 bg-white transform rotate-45 border-r border-b border-slate-100 shadow-[2px_2px_4px_rgba(0,0,0,0.04)] z-10"
          aria-hidden="true"
        />
      </div>

      {/* 2. Name Label Chip (Layer: z-20, behind logo badge, peeking out from under/behind it) */}
      <div className="absolute -bottom-3.5 sm:-bottom-4.5 right-14 sm:right-20 lg:right-24 z-20 bg-[#0A2540] text-white py-1.5 sm:py-2 px-4 sm:px-5 pr-14 sm:pr-18 rounded-full shadow-lg border border-white/15 flex flex-col items-start pointer-events-none max-w-[220px] sm:max-w-[280px] transition-all">
        <span className="font-bold text-xs sm:text-sm text-white tracking-tight leading-tight truncate w-full text-left">
          {name}
        </span>
        {role && (
          <span className="text-[10px] sm:text-xs text-[#2DD4BF] font-medium leading-tight truncate w-full text-left mt-0.5">
            {role}
          </span>
        )}
      </div>

      {/* 3. Circular Open-Source Vector Brand Logo Badge (Layer: z-30, topmost, overlapping bottom-right corner 40-50%) */}
      <div className="absolute -bottom-7 -right-2 sm:-bottom-9 sm:-right-4 lg:-bottom-10 lg:-right-5 z-30 group">
        <div 
          className={`w-20 h-20 sm:w-28 sm:h-28 lg:w-30 lg:h-30 rounded-full bg-gradient-to-tr ${gradient} ring-4 ring-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] flex flex-col items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 select-none relative overflow-hidden`}
        >
          {/* Subtle inner geometric backdrop grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:8px_8px] opacity-25 pointer-events-none" />
          
          {/* Open-Source Vector Brand Icon */}
          <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-white drop-shadow-md mb-0.5 relative z-10" />
          
          {/* Clean Monogram Tag */}
          <span className="text-[9px] sm:text-[11px] font-black tracking-widest uppercase text-white/90 font-mono relative z-10">
            {tag}
          </span>
        </div>
      </div>

    </div>
  )
}

// Authentic client testimonials with open-source vector brand emblems
const TESTIMONIALS_DATA = [
  {
    id: 0,
    name: "Charlie",
    role: "CEO, Community Funded",
    quote: "The Mavericks has been a wonderful consultant to our team. They helped us get certified and also did a SOC 2 report for us very quickly and professionally. They know what they do and I would recommend them to anyone looking for a seamless support in Compliance Certification at the most competitive cost.",
    gradient: "from-[#00A8CC] via-[#0284C7] to-[#0F766E]",
    icon: Globe,
    tag: "CF"
  },
  {
    id: 1,
    name: "Ryan",
    role: "Founder, Modular 11 LLC",
    quote: "When we thought about cyber security, we realized the need of a third-party SOC2 support. After a thorough research, we came across The Mavericks Consulting and are really glad that we did. We found their team to be cooperative, responsive and gave us detailed guidance on SOC2 compliance within our company in less than 24 hours. The team is not just professional but also very knowledgeable about cyber security in general.",
    gradient: "from-[#1E2A4A] via-[#3B82F6] to-[#6366F1]",
    icon: Boxes,
    tag: "M11"
  },
  {
    id: 2,
    name: "Sanyam",
    role: "Managing Consultant, Compliance & Certification",
    quote: "We are so happy to have partnered with The Mavericks Consulting. As a local business, we get to work with them on a day-to-day basis and they are always cheerful, always willing to help, and their knowledge on cyber security is unmatched. We've been working together for over 2 years now and the collaboration has been nothing but supportive. We are so lucky to have found this team!",
    gradient: "from-[#0A2540] via-[#00A8CC] to-[#14B8A6]",
    icon: ShieldCheck,
    tag: "MC"
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
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs sm:text-[13px] font-extrabold tracking-widest uppercase mb-3.5">
            <Quote className="w-3.5 h-3.5" />
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
            Here's what our clients & partners say
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed font-normal max-w-2xl mx-auto">
            Over the years we have built strong rapport with high-growth enterprises and founders across 7+ countries.
            Click any client below to read their review.
          </p>
        </div>

        {/* --- TOP: ACTIVE TESTIMONIAL CARD DISPLAY (Wider container keeps vertical height compact) --- */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-12 pt-2 pb-14 sm:pb-16">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#00A8CC] hover:border-[#00A8CC] hover:shadow-lg items-center justify-center transition-all duration-200 z-40 focus:outline-none shadow-sm"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#00A8CC] hover:border-[#00A8CC] hover:shadow-lg items-center justify-center transition-all duration-200 z-40 focus:outline-none shadow-sm"
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
              gradient={current.gradient}
              icon={current.icon}
              tag={current.tag}
            />
          </div>

          {/* Mobile Arrow Controls */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-12">
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

        {/* --- BOTTOM: SUGGESTION / SELECTOR STRIP (Logo + Name Only) --- */}
        <div className="mt-4 pt-6 border-t border-slate-200/80">
          <div className="text-center mb-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select a Client to View Testimonial
            </p>
          </div>

          {/* Suggestions List (Clicking any brand changes testimonial at top) */}
          <div 
            ref={thumbnailContainerRef}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            {testimonials.map((item, idx) => {
              const isActive = currentIndex === idx
              const ItemIcon = item.icon

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
                  {/* Thumbnail Open-Source Brand Logo Badge */}
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-white shrink-0 shadow-sm relative ${
                    isActive 
                      ? 'ring-2 ring-[#00A8CC]' 
                      : 'ring-1 ring-slate-200 group-hover:ring-[#00A8CC]/50'
                  }`}>
                    <ItemIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    {isActive && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00A8CC] rounded-full border-2 border-white flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      </span>
                    )}
                  </div>

                  {/* Name (and company designation) */}
                  <div className="flex flex-col pr-1">
                    <span className={`text-xs sm:text-sm font-bold tracking-tight leading-tight ${
                      isActive ? 'text-[#1E2A4A]' : 'text-slate-700 group-hover:text-[#1E2A4A]'
                    }`}>
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium leading-tight truncate max-w-[130px]">
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

