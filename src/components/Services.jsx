import React, { useState, useEffect, useRef } from 'react'
import { FileCheck, Lightbulb, Megaphone, Users2, GraduationCap, X, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Services({ onNavigate = () => {} }) {
  const [selectedService, setSelectedService] = useState(null)
  const [hasEntered, setHasEntered] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
        }
      },
      { threshold: 0.12 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      
      // Calculate closest active index
      const cardWidth = 360 + 24 // approximate card width + gap
      const index = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(Math.max(index, 0), services.length - 1))
    }
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) {
      checkScroll()
      el.addEventListener('scroll', checkScroll, { passive: true })
      window.addEventListener('resize', checkScroll)
      return () => {
        el.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const services = [
    {
      id: 'compliance',
      page: 'compliance-certifications',
      icon: FileCheck,
      badge: 'GOVERNANCE & TRUST',
      title: 'Compliance Certifications',
      description: 'Powerful combination of the expertise of certification specialists with our data analytics capabilities to guarantee seamless audits.',
      details: [
        'SOC 2 (Type 1 & Type 2) report readiness & audit management',
        'ISO 27001, HIPAA, and GDPR compliance advisory',
        'Continuous compliance monitoring & internal audit automation',
        'Vendor risk assessment & security policy drafting'
      ]
    },
    {
      id: 'advisory',
      page: 'advisory-consulting',
      icon: Lightbulb,
      badge: 'EXECUTIVE STRATEGY',
      title: 'Advisory Consulting',
      description: 'Support for CXOs with strategic decision making, development of executive strategy, and rigorous execution of strategic plans.',
      details: [
        'C-Suite strategic roadmap design & goal calibration (OKRs / KPIs)',
        'Business transformation and change management support',
        'Operational efficiency & cost optimization audits',
        'Technology stack evaluation and modernization guidance'
      ]
    },
    {
      id: 'demand-gen',
      page: 'demand-generation',
      icon: Megaphone,
      badge: 'MARKET ACQUISITION',
      title: 'Demand Generation',
      description: 'Revitalising existing brands and helping new brands become a dominant market name that customers and enterprises trust.',
      details: [
        'Inbound & outbound multi-channel campaign architectures',
        'Brand repositioning and market penetration strategies',
        'B2B Account-Based Marketing (ABM) execution',
        'High-converting content and performance analytics'
      ]
    },
    {
      id: 'staff-augmentation',
      page: 'staff-augmentation',
      icon: Users2,
      badge: 'ON-DEMAND TALENT',
      title: 'Staff Augmentation',
      description: 'On-demand specialized talent, dedicated engineering teams, and domain experts to scale your development, marketing, and operational capacity.',
      details: [
        'Pre-vetted Senior Full-Stack & DevOps engineers',
        'Performance marketing & growth acquisition specialists',
        'UI/UX design system architects and product managers',
        'Seamless integration with agile sprint cycles and workflows'
      ]
    },
    {
      id: 'enrollment-growth',
      page: 'enrollment-growth-engine',
      icon: GraduationCap,
      badge: 'HIGHER ED PIPELINES',
      title: 'Online Enrollment Engine Support',
      description: 'Strategic enrollment acceleration architectures, student acquisition pipelines, and retention systems to scale institutional growth.',
      details: [
        'Omnichannel enrollment funnel architecture & lead capture',
        'Predictive student & member acquisition analytics',
        'Automated admissions nurturing & qualification workflows',
        'Retention strategy and continuous growth engine optimization'
      ]
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#FAFAFA]"
      style={{
        backgroundImage: 'radial-gradient(#d1d5db 1.2px, transparent 1.2px)',
        backgroundSize: '22px 22px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header & Navigation Controls */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 transition-all duration-700 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 text-xs sm:text-[13px] font-extrabold tracking-widest text-[#00A8CC] uppercase shadow-sm mb-3">
              HOW WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1A1A2E] tracking-tight leading-tight">
              Our Services
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2.5">
              Modular consulting milestones structured across a high-impact growth roadmap. Scroll horizontally to explore our service pillars.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 shadow-sm ${
                canScrollLeft
                  ? 'bg-white border-slate-200 text-[#1E2A4A] hover:bg-[#00A8CC] hover:text-white hover:border-[#00A8CC] hover:scale-105 active:scale-95'
                  : 'bg-white/60 border-slate-100 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Scroll services left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 shadow-sm ${
                canScrollRight
                  ? 'bg-white border-slate-200 text-[#1E2A4A] hover:bg-[#00A8CC] hover:text-white hover:border-[#00A8CC] hover:scale-105 active:scale-95'
                  : 'bg-white/60 border-slate-100 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Scroll services right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track with Square-Shaped Cards */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={service.id}
                onClick={() => onNavigate(service.page)}
                style={{
                  animationDelay: `${index * 100 + 100}ms`
                }}
                className={`snap-start shrink-0 w-[290px] sm:w-[330px] md:w-[350px] aspect-square rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between relative cursor-pointer border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,168,204,0.16)] hover:border-[#00A8CC]/50 group select-none ${
                  hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Top Pinned Dot */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2A2A2A] shadow-md flex items-center justify-center z-20 pointer-events-none transition-transform duration-300 group-hover:scale-110">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 absolute top-0.5 left-0.5" />
                </div>

                {/* Top Content (Icon + Index Tag) */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 pt-1">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A8CC] transition-all duration-300 group-hover:bg-[#00A8CC] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#00A8CC]/25">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00A8CC] transition-colors bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold leading-snug text-[#1A1A2E] mb-2.5 transition-colors duration-300 group-hover:text-[#00A8CC] line-clamp-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Footer Area */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto transition-colors duration-300 group-hover:border-cyan-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onNavigate(service.page)
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8CC] group-hover:text-[#008ba8] transition-colors focus:outline-none"
                  >
                    <span>Explore Page</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#00A8CC]/80 font-medium">
                    {service.badge}
                  </span>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Pagination Dots / Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = 360
                  scrollContainerRef.current.scrollTo({
                    left: i * cardWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-[#00A8CC]' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to service card ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A8CC]">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A2E]">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Capabilities</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {selectedService.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              
              <button
                onClick={() => {
                  setSelectedService(null)
                  onNavigate(selectedService.page)
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-[#00A8CC] bg-cyan-50 hover:bg-cyan-100 border border-cyan-200"
              >
                <span>Explore Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full text-xs font-semibold text-white bg-[#00A8CC] hover:bg-[#0092B3]"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

