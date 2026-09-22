import React, { useState, useEffect } from 'react'
import { 
  Users2, 
  Code2, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  X, 
  FileText, 
  Clock, 
  Building2,
  Briefcase,
  UserCheck,
  TrendingUp,
  Cpu
} from 'lucide-react'

export default function StaffAugmentation({ onBackToHome }) {
  const [selectedPillar, setSelectedPillar] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const pillars = [
    {
      id: 'dedicated-engineering',
      badge: 'TECH & ENGINEERING',
      name: 'Dedicated Engineering Teams',
      fullName: 'Full-Stack, Backend, Frontend & DevOps Engineers',
      icon: Code2,
      color: '#00A8CC',
      description: 'Scale your product roadmap with elite software engineers, cloud architects, and full-stack developers fully integrated into your sprint cycles.',
      timeline: '1 - 2 Weeks Onboarding',
      deliverables: [
        'Pre-vetted Senior & Lead Full-Stack Developers (React, Node, Python, Java)',
        'Cloud architecture, Kubernetes, CI/CD pipeline, and DevOps specialists',
        'Direct integration with Jira, GitHub, Slack, and agile sprint workflows',
        'Transparent weekly sprint velocity reports and code quality oversight'
      ],
      suitableFor: 'High-growth startups and enterprises needing immediate development bandwidth.'
    },
    {
      id: 'growth-marketing',
      badge: 'MARKETING & GROWTH',
      name: 'Marketing & Growth Specialists',
      fullName: 'Performance Marketers, Content Strategists & Media Buyers',
      icon: TrendingUp,
      color: '#3B82F6',
      description: 'Deploy battle-tested performance marketers, paid media buyers, and growth strategists to execute multi-channel customer acquisition campaigns.',
      timeline: '1 - 2 Weeks Onboarding',
      deliverables: [
        'Dedicated Meta, Google Ads, and LinkedIn performance media buyers',
        'SEO strategists, technical copywriters, and content lifecycle managers',
        'Conversion rate optimization (CRO) and A/B testing specialists',
        'Weekly CAC, ROAS, and cohort attribution reporting'
      ],
      suitableFor: 'Brands looking to scale lead generation and paid acquisition without full-time agency overhead.'
    },
    {
      id: 'product-design',
      badge: 'PRODUCT & DESIGN',
      name: 'Product & UI/UX Talent',
      fullName: 'Product Managers, UI/UX Designers & Design System Architects',
      icon: Layers,
      color: '#10B981',
      description: 'Elevate your user experience and product execution with experienced UI/UX designers, design system engineers, and technical product managers.',
      timeline: '1 - 2 Weeks Onboarding',
      deliverables: [
        'High-fidelity Figma prototypes, wireframes, and interactive user flows',
        'Scalable enterprise design system libraries and token architectures',
        'User research, usability testing, and customer journey mapping',
        'Product backlog grooming, sprint planning, and roadmap management'
      ],
      suitableFor: 'Companies redesigning complex digital applications or launching new digital products.'
    },
    {
      id: 'operational-analysts',
      badge: 'OPERATIONS & DATA',
      name: 'Operational & Data Analysts',
      fullName: 'Data Engineers, CRM Specialists & Business Analysts',
      icon: Users2,
      color: '#8B5CF6',
      description: 'Strengthen business operations with domain experts in CRM management, business intelligence dashboards, and revenue operations.',
      timeline: '1 - 2 Weeks Onboarding',
      deliverables: [
        'HubSpot, Salesforce, and Zoho CRM administrators and revenue ops experts',
        'Power BI, Tableau, and SQL business intelligence dashboard builders',
        'Process automation, API webhook, and workflow orchestration engineers',
        'Ad-hoc financial modeling and operational capacity planning'
      ],
      suitableFor: 'Organizations looking to streamline operational bottlenecks and eliminate administrative drag.'
    }
  ]

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800 animate-in fade-in duration-300">
      
      {/* Top Breadcrumb & Page Banner */}
      <div className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-8 pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 font-medium">
            <button 
              onClick={onBackToHome}
              className="hover:text-[#00A8CC] transition-colors flex items-center gap-1 font-semibold text-slate-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </button>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-[#00A8CC] font-bold">Staff Augmentation</span>
          </div>

          {/* Service Badge, Main Heading & Subtitle */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase mb-3">
              SERVICE
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Staff Augmentation
            </h1>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              On-demand specialized talent, dedicated engineering squads, and domain experts. We empower growing organizations to rapidly scale execution capacity with pre-vetted global professionals.
            </p>
          </div>

        </div>
      </div>

      {/* Main Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,168,204,0.14)] hover:border-[#00A8CC]/40 group"
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-[#1E2A4A] tracking-tight mb-3 group-hover:text-[#00A8CC] transition-colors">
                    {pillar.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPillar(pillar)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8CC] hover:text-[#008ba8] transition-all group-hover:translate-x-1"
                  >
                    <span>[Explore Scope]</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {pillar.timeline}
                  </span>
                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-[#00A8CC] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/15 text-white border border-white/20 text-xs sm:text-[13px] font-extrabold tracking-widest uppercase mb-4 shadow-sm">
            SCALE YOUR TEAM SEAMLESSLY
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Supercharge Your Capacity with Elite Global Talent
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Eliminate hiring bottlenecks and accelerate roadmap execution with pre-vetted domain experts integrated directly into your workflows.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0A2540] hover:bg-[#071C30] text-white font-bold text-sm shadow-xl shadow-black/10 transition-all hover:scale-105 active:scale-95"
            >
              <span>Request Talent Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#00A8CC] hover:bg-slate-50 font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Other Services</span>
            </button>
          </div>

        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-9 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A8CC]">
                <selectedPillar.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold font-mono text-[#00A8CC] uppercase tracking-wider block">
                  {selectedPillar.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1E2A4A] leading-snug">
                  {selectedPillar.fullName}
                </h3>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {selectedPillar.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#00A8CC]" />
                Deliverables & Scope
              </h4>
              <ul className="space-y-2.5">
                {selectedPillar.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1E2A4A] block mb-0.5">Target Organization:</strong>
                {selectedPillar.suitableFor}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              
              <a
                href="#contact"
                onClick={() => {
                  setSelectedPillar(null)
                  onBackToHome()
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00A8CC] hover:bg-[#0092B3] shadow-md shadow-[#00A8CC]/20 transition-all hover:scale-105"
              >
                <span>Request Talent Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
