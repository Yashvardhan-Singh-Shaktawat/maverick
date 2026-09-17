import React, { useState, useEffect, useRef } from 'react'
import { FileCheck, Lightbulb, Megaphone, Users2, X, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Services({ onNavigate = () => {} }) {
  const [selectedService, setSelectedService] = useState(null)
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
      label: 'STEP 01 // AUDIT & TRUST',
      icon: FileCheck,
      desktopTop: '0px',
      desktopLeft: '54%',
      rotationDeg: 'rotate-[3deg]',
      hoverRotation: 'hover:rotate-0',
      zIndexClass: 'z-40',
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
      label: 'STEP 02 // STRATEGY',
      icon: Lightbulb,
      desktopTop: '220px',
      desktopLeft: '8%',
      rotationDeg: '-rotate-[3deg]',
      hoverRotation: 'hover:rotate-0',
      zIndexClass: 'z-30',
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
      label: 'STEP 03 // ACQUISITION',
      icon: Megaphone,
      desktopTop: '440px',
      desktopLeft: '48%',
      rotationDeg: 'rotate-[2.5deg]',
      hoverRotation: 'hover:rotate-0',
      zIndexClass: 'z-20',
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
      label: 'STEP 04 // RETENTION & OPS',
      icon: Users2,
      desktopTop: '660px',
      desktopLeft: '6%',
      rotationDeg: '-rotate-[4deg]',
      hoverRotation: 'hover:rotate-0',
      zIndexClass: 'z-10',
      title: 'CRM Implementation',
      description: 'Specialising in providing end-to-end support for the architectural implementation and team onboarding of your CRM ecosystem.',
      details: [
        'HubSpot, Salesforce, and Zoho custom setup & onboarding',
        'Data migration, pipeline structuring, and cleanup',
        'Automated workflows and sales team training',
        'Custom integration with billing, email, and analytics tools'
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
            Modular consulting milestones scattered across a high-impact growth staircase.
          </p>
        </div>

        {/* Pinned Cards Descending Staircase Canvas */}
        <div className="relative max-w-5xl mx-auto lg:h-[950px]">

          {/* SVG Connector Curved Dashed Path Following the Staircase Zigzag */}
          <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 900"
              fill="none"
              className={`w-full h-full transition-opacity duration-1000 ${hasEntered ? 'opacity-100 animate-path-draw' : 'opacity-0'}`}
              preserveAspectRatio="none"
            >
              <path
                d="M 720 20 C 520 80, 250 140, 270 240 C 290 340, 670 360, 660 460 C 650 560, 230 580, 250 680"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6,6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Cards: Descending Staircase Zigzag with Overlapping Corners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:block relative z-10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  style={{
                    top: service.desktopTop,
                    left: service.desktopLeft,
                    animationDelay: `${index * 180 + 100}ms`
                  }}
                  className={`lg:absolute w-full lg:w-[350px] transition-all duration-300 ease-out group ${service.zIndexClass} hover:z-50 ${hasEntered ? 'animate-card-enter' : 'opacity-0'
                    }`}
                >
                  {/* Pinned Card Box */}
                  <div
                    className={`bg-white rounded-2xl p-6 sm:p-7 shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-black/[0.05] flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_25px_50px_rgba(0,168,204,0.16)] hover:border-cyan-200/80 ${service.rotationDeg}`}
                  >
                    {/* Top Solid Pin Element (Overlapping top edge) */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2A2A2A] shadow-md flex items-center justify-center z-30 pointer-events-none">
                      {/* Inner Glossy Highlight Dot */}
                      <span className="w-1.5 h-1.5 rounded-full bg-white/45 absolute top-0.5 left-0.5" />
                    </div>

                    <div>
                      {/* Label / Step Slot */}
                      <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                        <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400">
                          {service.label}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#00A8CC] group-hover:bg-cyan-50 group-hover:scale-105 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title Slot */}
                      <h3 className="text-lg font-bold text-[#1A1A2E] leading-snug mb-2.5 group-hover:text-[#00A8CC] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description Slot */}
                      <p className="text-sm text-slate-500 leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Button Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8CC] hover:text-[#008ba8] transition-colors focus:outline-none"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                      <span className="text-[10px] font-mono text-slate-300">0{index + 1}</span>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

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
                <span className="text-xs text-[#00A8CC] font-bold font-mono">{selectedService.label}</span>
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
