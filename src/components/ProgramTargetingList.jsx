import React, { useState } from 'react'
import { 
  Landmark,
  Target,
  Filter,
  TrendingUp,
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react'

export default function ProgramTargetingList() {
  const [activeTab, setActiveTab] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const stagesData = [
    {
      id: 'strategy',
      stageNumber: '01',
      stageEyebrow: '01 — STRATEGY',
      tabTitle: 'Strategy',
      tabSubtitle: 'Positioning · Intelligence · Growth',
      tabIcon: Landmark,
      title: 'Institutional Strategy',
      tagline: 'Position your university for what’s next.',
      description: 'Define your market position, institutional story, target audiences, and growth priorities with a strategy built around where your university wants to go.',
      imageUrl: '/Institutional Strategy.webp',
      focusAreas: [
        'Institutional Positioning',
        'Market Intelligence',
        'Audience Strategy',
        'Growth Planning'
      ],
      ctaLabel: 'Explore Strategy',
    },
    {
      id: 'acquisition',
      stageNumber: '02',
      stageEyebrow: '02 — ACQUISITION',
      tabTitle: 'Acquisition',
      tabSubtitle: 'Demand · Media · Reach',
      tabIcon: Target,
      title: 'Student Acquisition',
      tagline: 'Reach the students who matter.',
      description: 'Build meaningful demand across the channels where prospective students discover, evaluate, and engage with universities.',
      imageUrl: '/Student Acquisition.webp',
      focusAreas: [
        'Demand Generation',
        'Paid Media',
        'Digital Campaigns',
        'Audience Development'
      ],
      ctaLabel: 'Explore Acquisition',
    },
    {
      id: 'conversion',
      stageNumber: '03',
      stageEyebrow: '03 — CONVERSION',
      tabTitle: 'Conversion',
      tabSubtitle: 'Inquiry · Experience · Action',
      tabIcon: Filter,
      title: 'Enrollment Conversion',
      tagline: 'Turn interest into action.',
      description: 'Create a connected journey that moves prospective students from initial engagement to inquiry, application, and the next step.',
      imageUrl: '/Enrollment Conversion.webp',
      focusAreas: [
        'Inquiry Generation',
        'Landing Experiences',
        'Conversion Strategy',
        'Applicant Journey'
      ],
      ctaLabel: 'Explore Conversion',
    },
    {
      id: 'enrollment',
      stageNumber: '04',
      stageEyebrow: '04 — ENROLLMENT',
      tabTitle: 'Enrollment',
      tabSubtitle: 'Funnel · Optimization · Yield',
      tabIcon: TrendingUp,
      title: 'Enrollment Growth',
      tagline: 'Build a stronger path to enrollment.',
      description: 'Connect marketing, engagement, and enrollment efforts to create a more measurable and effective student journey.',
      imageUrl: '/Enrollment Growth.webp',
      focusAreas: [
        'Enrollment Strategy',
        'Funnel Optimization',
        'Application Growth',
        'Performance Analytics'
      ],
      ctaLabel: 'Explore Enrollment',
    }
  ]

  const handleTabChange = (index) => {
    if (index === activeTab) return
    setIsTransitioning(true)
    setActiveTab(index)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 200)
  }

  const handlePrev = () => {
    const nextIndex = activeTab === 0 ? stagesData.length - 1 : activeTab - 1
    handleTabChange(nextIndex)
  }

  const handleNext = () => {
    const nextIndex = activeTab === stagesData.length - 1 ? 0 : activeTab + 1
    handleTabChange(nextIndex)
  }

  const currentData = stagesData[activeTab]

  return (
    <section className="w-full py-14 sm:py-20 lg:py-24 bg-[#FAFAFA] text-slate-800 relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================ */}
        {/* TOP SECTION HEADER + RIGHT-CORNER ARROW CONTROLS                 */}
        {/* ================================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 pb-6 border-b border-slate-200/70">
          
          {/* Left: Eyebrow + Main Heading + Supporting Line */}
          <div className="max-w-3xl space-y-3 text-left">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#00A8CC] text-xs sm:text-[13px] font-extrabold tracking-widest uppercase shadow-xs">
              UNIVERSITY GROWTH STRATEGY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Build a Stronger University Growth Strategy.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every institution needs a strategy built around its goals, market, and students.
            </p>
          </div>

          {/* Right Top Corner: Arrow Navigation & Segment Counter */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <span className="text-xs font-mono font-bold text-slate-400 mr-2">
              0{activeTab + 1} / 0{stagesData.length}
            </span>

            <button
              onClick={handlePrev}
              aria-label="Previous Strategy Stage"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#1E2A4A] hover:bg-[#00A8CC] hover:text-white hover:border-[#00A8CC] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Strategy Stage"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#1E2A4A] hover:bg-[#00A8CC] hover:text-white hover:border-[#00A8CC] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* ================================================================ */}
        {/* FREE-WIDTH 4 TABS (STRATEGY → ACQUISITION → CONVERSION → ENROLLMENT) */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-3 sm:gap-4 lg:gap-2.5 mb-10 select-none">
          {stagesData.map((tab, index) => {
            const Icon = tab.tabIcon
            const isActive = activeTab === index

            return (
              <React.Fragment key={tab.id}>
                <button
                  onClick={() => handleTabChange(index)}
                  className={`py-4 px-4 sm:px-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-3.5 focus:outline-none lg:flex-1 ${
                    isActive
                      ? 'bg-[#00A8CC] text-white shadow-[0_12px_28px_rgba(0,168,204,0.28)] -translate-y-1'
                      : 'bg-white border border-slate-200/80 hover:border-cyan-200 hover:shadow-md text-slate-700'
                  }`}
                >
                  {/* Icon in Badge */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-cyan-50/80 border border-cyan-100/80 text-[#00A8CC]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title + Subtitle */}
                  <div className="min-w-0 flex-1">
                    <div className={`text-sm sm:text-[15px] font-bold leading-snug ${
                      isActive ? 'text-white' : 'text-[#1E2A4A]'
                    }`}>
                      {tab.tabTitle}
                    </div>
                    <div className={`text-xs truncate mt-0.5 ${
                      isActive ? 'text-white/85' : 'text-slate-400'
                    }`}>
                      {tab.tabSubtitle}
                    </div>
                  </div>
                </button>

                {/* Flow Connector Arrow between tabs (Desktop/Large screens) */}
                {index < stagesData.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center shrink-0 px-1">
                    <ArrowRight className={`w-4 h-4 transition-colors duration-300 ${
                      index < activeTab ? 'text-[#00A8CC]' : 'text-slate-300'
                    }`} strokeWidth={2.5} />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* ================================================================ */}
        {/* ACTIVE STAGE CONTENT CARD                                        */}
        {/* ================================================================ */}
        <div className={`transition-opacity duration-200 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-10 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.04)] relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Heading, Subtitle, Description, Focus Areas & CTA */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Stage Eyebrow & Title */}
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-[#00A8CC] text-xs font-mono font-bold tracking-wider uppercase mb-3">
                    {currentData.stageEyebrow}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
                    {currentData.title}
                  </h3>

                  <p className="text-base sm:text-lg font-bold text-[#00A8CC] mt-1.5">
                    {currentData.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal max-w-xl">
                    {currentData.description}
                  </p>
                </div>

                {/* Focus Areas 2x2 Grid */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Focus Areas:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentData.focusAreas.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 hover:border-cyan-200 hover:bg-cyan-50/40 transition-all duration-200 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A8CC] shrink-0 group-hover:bg-[#00A8CC] group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-[#1E2A4A]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A8CC] hover:bg-[#0092B3] text-white font-bold text-sm shadow-[0_8px_22px_rgba(0,168,204,0.28)] hover:shadow-[0_12px_28px_rgba(0,168,204,0.38)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group"
                  >
                    <span>{currentData.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>

              {/* Right Column: Visual Image Graphic */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                {/* Ambient background glow behind illustration */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/15 via-sky-300/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />
                
                <img 
                  src={currentData.imageUrl}
                  alt={currentData.title}
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain max-h-[320px] sm:max-h-[360px] lg:max-h-[400px] drop-shadow-[0_15px_35px_rgba(0,168,204,0.18)] rounded-2xl transition-all duration-500 hover:scale-[1.04] select-none"
                />
              </div>

            </div>

          </div>
        </div>

        {/* ================================================================ */}
        {/* BOTTOM PAGINATION DOTS                                           */}
        {/* ================================================================ */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {stagesData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              aria-label={`Switch to stage ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                activeTab === i 
                  ? 'w-8 bg-[#00A8CC]' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
