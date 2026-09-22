import React, { useState, useEffect } from 'react'
import { 
  Code2, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  X, 
  FileText, 
  Clock, 
  Building2,
  TrendingUp,
  ShieldCheck,
  Target
} from 'lucide-react'

export default function StaffAugmentation({ onBackToHome }) {
  const [selectedPillar, setSelectedPillar] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Core Specialized Squads aligning directly with Mavericks core solutions
  const squads = [
    {
      id: 'growth-acquisition',
      badge: 'ACQUISITION & MEDIA',
      serviceLink: 'Demand Generation',
      name: 'Demand & Growth Specialists',
      fullName: 'Performance Marketers, Media Buyers & Campaign Leads',
      icon: TrendingUp,
      accentColor: '#00A8CC',
      description: 'Scale your student recruitment and lead generation pipeline with battle-tested media buyers, SEO strategists, and performance marketers embedded into your team.',
      timeline: '1 - 2 Weeks Onboarding',
      skills: ['Meta & Google Ads', 'LinkedIn B2B', 'SEO / CRO', 'Campaign Analytics'],
      deliverables: [
        'Dedicated paid media execution across Meta, Google Ads, and LinkedIn',
        'End-to-end campaign architecture, ad creative iterations, and A/B testing',
        'Conversion rate optimization (CRO) for landing pages and inquiry funnels',
        'Weekly CAC, CPL, ROAS, and multi-touch attribution reporting'
      ],
      suitableFor: 'Universities and enterprises seeking rapid lead generation scale without agency bloat.'
    },
    {
      id: 'enrollment-conversion',
      badge: 'ENROLLMENT & FUNNELS',
      serviceLink: 'Enrollment Growth Engine',
      name: 'Enrollment & Conversion Specialists',
      fullName: 'CRO Strategists, Funnel Designers & CRM Specialists',
      icon: Target,
      accentColor: '#0A2540',
      description: 'Optimize every stage of the student admission and customer journey. Our specialists design high-converting funnels, automated follow-ups, and applicant nurture flows.',
      timeline: '1 - 2 Weeks Onboarding',
      skills: ['HubSpot / Salesforce', 'Landing Page CRO', 'Email Sequences', 'Funnel Analytics'],
      deliverables: [
        'High-converting landing page creation and UI/UX optimization',
        'Automated email/SMS inquiry nurture workflows and drip campaigns',
        'CRM pipeline setup, lead scoring, and admission funnel synchronization',
        'Applicant retention and cohort yield optimization strategies'
      ],
      suitableFor: 'Institutions looking to turn web inquiries into enrolled students and qualified leads.'
    },
    {
      id: 'fullstack-engineering',
      badge: 'TECH & PLATFORMS',
      serviceLink: 'Digital & Software Solutions',
      name: 'Full-Stack & DevOps Engineers',
      fullName: 'Frontend, Backend, Cloud & Integration Engineers',
      icon: Code2,
      accentColor: '#00A8CC',
      description: 'Accelerate product roadmaps and digital platform builds with senior developers proficient in modern web architectures, API integrations, and cloud infrastructure.',
      timeline: '1 - 2 Weeks Onboarding',
      skills: ['React / Next.js', 'Node.js / Python', 'AWS / Cloud DevOps', 'REST / GraphQL APIs'],
      deliverables: [
        'Senior Full-Stack Engineers integrated into your Jira, GitHub, and agile sprints',
        'Custom portal development, CRM/LMS API integrations, and webhook pipelines',
        'Cloud infrastructure setup (AWS/GCP), CI/CD pipelines, and DevOps automation',
        'Strict code quality standards, automated unit testing, and sprint documentation'
      ],
      suitableFor: 'Tech-enabled companies and university digital teams needing immediate dev bandwidth.'
    },
    {
      id: 'advisory-compliance',
      badge: 'OPERATIONS & SECURITY',
      serviceLink: 'Compliance & Advisory',
      name: 'Data, Operations & SOC 2 Specialists',
      fullName: 'BI Analysts, Systems Architects & Compliance Experts',
      icon: ShieldCheck,
      accentColor: '#0A2540',
      description: 'Strengthen data infrastructure, business intelligence dashboards, and regulatory compliance. Our experts assist with SOC 2 readiness, data hygiene, and process automation.',
      timeline: '1 - 2 Weeks Onboarding',
      skills: ['SOC 2 / ISO 27001', 'Power BI / Tableau', 'SQL Data Pipelines', 'Process Automation'],
      deliverables: [
        'SOC 2 compliance gap analysis, policy documentation, and auditor readiness',
        'Executive BI dashboards (Tableau, Power BI) and real-time revenue analytics',
        'Data pipeline maintenance, ETL scripts, and database hygiene audits',
        'Operational workflow optimization and cross-system automation'
      ],
      suitableFor: 'Organizations preparing for security audits or needing advanced data analytics capacity.'
    }
  ]

  // Business Advantages
  const businessBenefits = [
    {
      title: '1–2 Week Deployment',
      description: 'Skip months of recruitment, vetting, and interviewing. Deploy pre-vetted specialists in days.',
      stat: '10x Faster',
      statLabel: 'than traditional hiring'
    },
    {
      title: 'Pre-Vetted Domain Talent',
      description: 'Hand-picked specialists with proven experience across Higher Ed, SaaS, and Digital Growth.',
      stat: 'Top 3%',
      statLabel: 'accepted talent pool'
    },
    {
      title: 'Seamless Sprint Integration',
      description: 'Specialists embed directly into your Slack, Jira, GitHub, and daily standups as your own team.',
      stat: '100%',
      statLabel: 'workflow alignment'
    },
    {
      title: 'Elastic & Cost-Efficient',
      description: 'Scale squad size up or down per project cycle with zero long-term payroll or severance liabilities.',
      stat: '40–60%',
      statLabel: 'cost savings vs full-time'
    }
  ]

  // 3-Step Process
  const steps = [
    {
      num: '01',
      title: 'Scope & Talent Matching',
      text: 'We analyze your roadmap, tech stack, and exact skill gaps to shortlist the ideal specialists within 48 hours.'
    },
    {
      num: '02',
      title: 'Rapid Onboarding',
      text: 'Seamless integration into your communication channels, sprint rituals, and development/marketing repositories.'
    },
    {
      num: '03',
      title: 'Sprint Execution & Velocity',
      text: 'Immediate contribution to your deliverables with transparent weekly velocity reports and full output ownership.'
    }
  ]

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800 animate-in fade-in duration-300">
      
      {/* ================================================================ */}
      {/* 1. HERO & BREADCRUMB                                             */}
      {/* ================================================================ */}
      <div className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-8 pb-12 sm:pb-16">
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

          {/* Service Badge, Heading & Subtitle */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold tracking-widest uppercase mb-3.5">
              SERVICE
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Staff Augmentation
            </h1>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Plug-and-play specialized squads and domain experts that power your execution. Whether scaling demand generation, building digital platforms, or optimizing conversion funnels, our pre-vetted specialists embed directly into your workflows.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#00A8CC] hover:bg-[#0092B3] text-white font-bold text-sm shadow-md shadow-[#00A8CC]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Request Talent Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#squads"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#1E2A4A] border border-slate-200 font-semibold text-sm transition-all shadow-xs"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. HOW STAFF AUGMENTATION POWERS OUR SERVICES (4 SQUADS)         */}
      {/* ================================================================ */}
      <section 
        id="squads" 
        className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#FAFAFA]"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.25px, transparent 1.25px)',
          backgroundSize: '24px 24px'
        }}
      >
        {/* Subtle Ambient Vignette / Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/90 text-slate-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
              EXECUTION ENGINE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight">
              Specialized Talent for Every Pillar of Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2.5 leading-relaxed">
              We provide pre-vetted specialists aligned with each of The Mavericks' core service areas to accelerate delivery and ensure tangible results.
            </p>
          </div>

          {/* 4 Capability Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {squads.map((squad) => {
              const Icon = squad.icon

              return (
                <div
                  key={squad.id}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,168,204,0.12)] hover:border-[#00A8CC]/40 group"
                >
                  <div>
                    {/* Card Header with Icon & Category */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                        {squad.badge}
                      </span>
                    </div>

                    {/* Title & Related Service Tag */}
                    <div className="mb-2.5">
                      <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wide block">
                        Powers: {squad.serviceLink}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#1E2A4A] tracking-tight group-hover:text-[#00A8CC] transition-colors mt-0.5">
                        {squad.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {squad.description}
                    </p>

                    {/* Key Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {squad.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Explore Scope Button & Timeline */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedPillar(squad)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00A8CC] hover:text-[#008ba8] transition-all group-hover:translate-x-1"
                    >
                      <span>[Explore Scope]</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {squad.timeline}
                    </span>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. BUSINESS PERSPECTIVE / ADVANTAGES                            */}
      {/* ================================================================ */}
      <div className="bg-white border-y border-slate-200/80 py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-[#00A8CC] text-xs font-bold tracking-wider uppercase mb-2.5">
              BUSINESS VALUE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight">
              Why Companies Scale With Our Talent
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2.5 leading-relaxed">
              Eliminate recruitment drag, reduce fixed overheads, and maintain high delivery velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((b, i) => (
              <div 
                key={i}
                className="bg-[#FAFAFA] rounded-2xl p-6 border border-slate-200/70 flex flex-col justify-between hover:border-[#00A8CC]/40 transition-all hover:shadow-sm"
              >
                <div>
                  <div className="text-2xl font-black text-[#00A8CC] tracking-tight">
                    {b.stat}
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                    {b.statLabel}
                  </div>
                  <h4 className="text-base font-bold text-[#1E2A4A] mb-2">
                    {b.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* 4. ENGAGEMENT PROCESS (3 QUICK STEPS)                            */}
      {/* ================================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wider uppercase mb-2.5">
            HOW IT WORKS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2A4A] tracking-tight">
            How We Augment Your Team in 3 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs relative"
            >
              <div className="text-3xl font-black text-[#00A8CC]/30 font-mono mb-3">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-[#1E2A4A] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ================================================================ */}
      {/* 5. BOTTOM CTA SECTION                                            */}
      {/* ================================================================ */}
      <div className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:px-10 lg:py-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-200 hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)]">
            
            {/* Left Text Content */}
            <div className="text-center md:text-left space-y-1.5 max-w-2xl">
              <span className="text-xs font-bold text-[#00A8CC] tracking-widest uppercase block">
                SCALE YOUR TEAM SEAMLESSLY
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#1E2A4A] tracking-tight leading-snug">
                Supercharge Your Roadmap With Pre-Vetted Talent
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Tell us about your project or skill requirements. We'll match and onboard the right specialists in days.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full sm:w-auto flex justify-center">
              <a
                href="#contact"
                onClick={onBackToHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0A2540] hover:bg-[#00A8CC] shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Request Talent Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </div>


      {/* ================================================================ */}
      {/* 6. INTERACTIVE SCOPE DETAIL MODAL                                 */}
      {/* ================================================================ */}
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

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A8CC] shrink-0">
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

            <div className="bg-slate-50 rounded-2xl p-4.5 mb-5 border border-slate-100">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedPillar.description}
              </p>
            </div>

            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#00A8CC]" />
                Deliverables & Scope
              </h4>
              <ul className="space-y-2.5">
                {selectedPillar.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1E2A4A] block mb-0.5">Ideal For:</strong>
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
