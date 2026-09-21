import React, { useState, useEffect, useRef } from 'react'
import { FileCheck, Lightbulb, Megaphone, Users2, GraduationCap, X, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Services({ onNavigate = () => {} }) {
  const [selectedService, setSelectedService] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [hasEntered, setHasEntered] = useState(false)
  const sectionRef = useRef(null)

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

  const services = [
    {
      id: 'compliance',
      page: 'compliance-certifications',
      icon: FileCheck,
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
      id: 'crm',
      page: 'crm-implementation',
      icon: Users2,
      title: 'CRM Implementation',
      description: 'Specialising in providing end-to-end support for the architectural implementation and team onboarding of your CRM ecosystem.',
      details: [
        'HubSpot, Salesforce, and Zoho custom setup & onboarding',
        'Data migration, pipeline structuring, and cleanup',
        'Automated workflows and sales team training',
        'Custom integration with billing, email, and analytics tools'
      ]
    },
    {
      id: 'enrollment-growth',
      page: 'enrollment-growth-engine',
      icon: GraduationCap,
      title: 'Enrollment Growth Engine Support',
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
      className="py-24 sm:py-32 relative overflow-hidden bg-[#FAFAFA]"
      style={{
        backgroundImage: 'radial-gradient(#d1d5db 1.2px, transparent 1.2px)',
        backgroundSize: '22px 22px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 sm:mb-20 transition-all duration-700 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 text-xs sm:text-[13px] font-extrabold tracking-widest text-[#00A8CC] uppercase shadow-sm mb-4">
            HOW WE DELIVER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1A1A2E] tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3">
            Modular consulting milestones structured across a high-impact growth roadmap. Click any card to explore its full page.
          </p>
        </div>

        {/* Horizontal Series Grid with Dynamic Surrounding Gap Expansion on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 relative z-10 max-w-7xl mx-auto items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            const isLeft = hoveredIndex !== null && index < hoveredIndex
            const isRight = hoveredIndex !== null && index > hoveredIndex

            // Calculate precise pixel displacement for smooth, guaranteed gap expansion
            let cardTransform = 'translateX(0px) translateY(0px) scale(1)'
            let cardOpacity = 1
            let cardZIndex = 10

            if (isHovered) {
              cardTransform = 'translateX(0px) translateY(-16px) scale(1.12)'
              cardOpacity = 1
              cardZIndex = 30
            } else if (isLeft) {
              const dist = hoveredIndex - index
              const shiftPx = dist === 1 ? -30 : -16
              cardTransform = `translateX(${shiftPx}px) translateY(0px) scale(0.95)`
              cardOpacity = 0.75
              cardZIndex = 10
            } else if (isRight) {
              const dist = index - hoveredIndex
              const shiftPx = dist === 1 ? 30 : 16
              cardTransform = `translateX(${shiftPx}px) translateY(0px) scale(0.95)`
              cardOpacity = 0.75
              cardZIndex = 10
            }

            return (
              <div
                key={service.id}
                style={{
                  animationDelay: `${index * 120 + 100}ms`
                }}
                className={`flex ${hasEntered ? 'animate-card-enter' : 'opacity-0'}`}
              >
                {/* Pinned Card Box (Direct Transform & Scale on Hover + Direct Page Redirect) */}
                <div
                  onClick={() => onNavigate(service.page)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transform: cardTransform,
                    opacity: cardOpacity,
                    zIndex: cardZIndex,
                    transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between w-full relative cursor-pointer group ${
                    isHovered
                      ? 'shadow-[0_30px_60px_rgba(0,168,204,0.25)] border-2 border-[#00A8CC] ring-4 ring-[#00A8CC]/15'
                      : 'shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/[0.06]'
                  }`}
                >
                  {/* Top Solid Pin Element (Overlapping top edge) */}
                  <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2A2A2A] shadow-md flex items-center justify-center z-30 pointer-events-none transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}>
                    {/* Inner Glossy Highlight Dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-white/45 absolute top-0.5 left-0.5" />
                  </div>

                  <div>
                    {/* Top Icon Slot */}
                    <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered 
                          ? 'bg-[#00A8CC] text-white scale-110 shadow-md shadow-[#00A8CC]/30' 
                          : 'bg-cyan-50/80 border border-cyan-100 text-[#00A8CC]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title Slot */}
                    <h3 className={`text-lg font-bold leading-snug mb-2.5 transition-colors duration-300 ${isHovered ? 'text-[#00A8CC]' : 'text-[#1A1A2E]'}`}>
                      {service.title}
                    </h3>

                    {/* Description Slot */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Button Action */}
                  <div className={`pt-3 border-t flex items-center justify-between mt-auto transition-colors duration-300 ${isHovered ? 'border-cyan-100' : 'border-slate-100'}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onNavigate(service.page)
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8CC] hover:text-[#008ba8] transition-colors focus:outline-none"
                    >
                      <span>Explore Page</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </button>
                    <span className={`text-[10px] font-mono transition-colors duration-300 ${isHovered ? 'text-[#00A8CC]/60 font-semibold' : 'text-slate-300'}`}>0{index + 1}</span>
                  </div>

                </div>
              </div>
            )
          })}
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
              
              {selectedService.id === 'compliance' && (
                <button
                  onClick={() => {
                    setSelectedService(null)
                    onNavigate('compliance-certifications')
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-[#00A8CC] bg-cyan-50 hover:bg-cyan-100 border border-cyan-200"
                >
                  <span>Explore All Certifications Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

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
