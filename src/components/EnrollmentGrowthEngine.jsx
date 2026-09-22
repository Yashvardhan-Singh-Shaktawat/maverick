import React, { useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PinnedProcessCards from './PinnedProcessCards'
import ProgramTargetingList from './ProgramTargetingList'
import HierarchicalFunnelTree from './HierarchicalFunnelTree'
import WhatWeCanBuild from './WhatWeCanBuild'
import EnrollmentCtaBanner from './EnrollmentCtaBanner'

export default function EnrollmentGrowthEngine({ onBackToHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const higherEdCards = [
    {
      id: 'strategy',
      title: 'Strategy',
      description: 'Identify the right markets, programs, audiences, and opportunities.',
      imageUrl: '/Strategy.png',
      href: '#contact',
    },
    {
      id: 'intent-driven-campaigns',
      title: 'Intent-Driven Campaigns',
      description: 'We deploy hyper-targeted email and social media campaigns engineered around prospective student behavior and search intent.',
      imageUrl: '/Creative.png',
      href: '#contact',
    },
    {
      id: 'acquisition',
      title: 'Acquisition',
      description: 'Reach high-intent students through Meta, Google, LinkedIn, YouTube, and more.',
      imageUrl: '/Acquisition.png',
      href: '#contact',
    },
    {
      id: 'conversion',
      title: 'Conversion',
      description: 'Move prospects from Lead → Application → Enrollment.',
      imageUrl: '/Conversion.png',
      href: '#contact',
    },
  ]

  const approachItems = [
    {
      label: '01 | Discover',
      title: 'Discover',
      description: 'Markets. Programs. Audiences.',
    },
    {
      label: '02 | Position',
      title: 'Position',
      description: 'Clear messaging that differentiates stealth apps from intent bound serious prospects.',
    },
    {
      label: '03 | Launch',
      title: 'Launch',
      description: 'Creative campaigns across the right channels.',
    },
    {
      label: '04 | Optimize',
      title: 'Optimize',
      description: 'Measure what moves students toward enrollment.',
    },
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
            <span className="text-[#00A8CC] font-bold">Online Enrollment Engine Support</span>
          </div>

          {/* Service Badge, Main Heading & Subtitle */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase mb-3">
              SERVICE
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Online Enrollment Engine Support
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#00A8CC] tracking-tight mt-2">
              Turn Attention Into Enrollment.
            </p>
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION 1: ONLINE ENROLLMENT ENGINE SUPPORT & IMAGE              */}
      {/* ================================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Heading, Info & Button */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#1E2A4A] tracking-tight leading-[1.2]">
              Online Enrollment Engine Support
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
              We empower educational institutions and learning providers to scale their reach, attract high-intent prospective students, and maximize enrollment through comprehensive growth strategies, compelling creative campaigns, and data-driven performance marketing.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A8CC] hover:bg-[#0092B3] text-white font-bold text-sm shadow-md shadow-[#00A8CC]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Let’s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Image (Free, No Box, Scaled Up) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative">
            {/* Subtle soft ambient glow behind the university graphic */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/15 via-sky-300/10 to-transparent rounded-full blur-2xl -z-10 pointer-events-none" />

            <img
              src="/university.webp"
              alt="Online Enrollment Engine Support"
              className="w-full max-w-xl lg:max-w-2xl h-auto object-contain max-h-[500px] lg:max-h-[560px] scale-100 sm:scale-105 lg:scale-110 drop-shadow-[0_20px_40px_rgba(0,168,204,0.18)] transition-all duration-500 hover:scale-[1.14] select-none"
              onError={(e) => {
                e.target.src = '/Untitled-design-53.webp'
              }}
            />
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION 2: BUILT FOR HIGHER EDUCATION (PENCIL GRID & SCALE UI)   */}
      {/* ================================================================ */}
      <section
        className="w-full py-12 sm:py-16 lg:py-20 border-t border-b border-slate-200/90 relative overflow-hidden"
        style={{
          backgroundColor: '#F8FAFC',
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.26) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.26) 1px, transparent 1px),
            linear-gradient(to right, rgba(203, 213, 225, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 8px 8px, 8px 8px',
        }}
      >
        {/* Top Architectural Drafting Scale Ruler Strip */}
        <div className="absolute top-0 inset-x-0 h-6 bg-white/70 backdrop-blur-sm border-b border-slate-200/80 flex items-center justify-between px-4 text-[9px] font-mono text-slate-400 select-none pointer-events-none z-10 overflow-hidden">
          <div className="flex items-center gap-8 w-full justify-between">
            {['00', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200'].map((mark, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <span className="w-px h-3 bg-slate-300" />
                <span>{mark}mm</span>
                <span className="w-px h-1.5 bg-slate-200" />
                <span className="w-px h-1.5 bg-slate-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Corner Registration Crosshairs */}
        <div className="absolute top-8 left-6 font-mono text-[10px] text-slate-400 select-none pointer-events-none hidden sm:flex items-center gap-1">
          <span className="text-[#00A8CC] font-bold">+</span> [ SCALE 1:1 // 00.00° ]
        </div>
        <div className="absolute top-8 right-6 font-mono text-[10px] text-slate-400 select-none pointer-events-none hidden sm:flex items-center gap-1">
          <span className="text-[#00A8CC] font-bold">+</span> [ ARCH-DRAFT: HE-2026 ]
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase shadow-xs">
              HIGHER EDUCATION PILLARS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Built for Higher Education
            </h2>

            <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl mx-auto leading-relaxed">
              Modular enrollment solutions tailored to address critical institution bottlenecks and scale cohort yield.
            </p>
          </div>

          {/* 2x2 Grid of Landscape Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {higherEdCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#00A8CC] rounded-[24px] p-7 sm:p-8 lg:p-9 min-h-[260px] sm:min-h-[290px] relative overflow-hidden shadow-lg hover:shadow-[0_20px_45px_rgba(0,168,204,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col sm:flex-row items-center justify-between gap-6 group cursor-pointer"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {/* Subtle Radial Highlight in Top-Right Corner */}
                <div className="absolute -right-8 -top-8 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none group-hover:bg-white/30 transition-all" />

                {/* Left Zone: Text (~56% for generous copy room) */}
                <div className="w-full sm:w-[56%] flex flex-col justify-between h-full z-10 text-left space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-[23px] lg:text-[25px] font-extrabold text-white tracking-tight leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mt-2.5">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold font-mono tracking-widest text-white/75 group-hover:text-white uppercase transition-all duration-200">
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Right Zone: Product Image (~44%) */}
                <div className="w-full sm:w-[44%] flex items-center justify-center sm:justify-end z-10 shrink-0">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full max-h-[170px] sm:max-h-[210px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.30)] transition-all duration-300 ease-out group-hover:scale-105 select-none"
                  />
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: OUR APPROACH (PINNED CARDS PROCESS UI)                */}
      {/* ================================================================ */}
      <PinnedProcessCards
        heading="Our Approach"
        subheading="PROVEN METHODOLOGY"
        description="A four-stage growth framework designed specifically for higher education institutions."
        items={approachItems}
      />

      {/* ================================================================ */}
      {/* SECTION 4: MARKET THE RIGHT PROGRAM TO THE RIGHT STUDENT (TASK UI) */}
      {/* ================================================================ */}
      <ProgramTargetingList />

      {/* ================================================================ */}
      {/* SECTION 5: MORE HQL. (HIERARCHICAL FUNNEL TREE NODE UI)          */}
      {/* ================================================================ */}
      <HierarchicalFunnelTree />

      {/* ================================================================ */}
      {/* SECTION 6: WHAT WE CAN BUILD FOR YOU (6 CAPABILITIES GRID)       */}
      {/* ================================================================ */}
      <WhatWeCanBuild />

      {/* ================================================================ */}
      {/* SECTION 7: ENROLLMENT ENGINE CTA BANNER                          */}
      {/* ================================================================ */}
      <EnrollmentCtaBanner 
        badgeText="NEXT-GEN ENROLLMENT ENGINE"
        heading="Build your enrollment engine stronger with us"
        subtext="Scale student acquisition, streamline admission pipelines, and maximize cohort yield with our data-driven growth framework."
        buttonText="Schedule a Consultation"
        href="#contact"
        onButtonClick={() => {
          onBackToHome()
          setTimeout(() => {
            const el = document.getElementById('contact')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 150)
        }}
      />

    </div>
  )
}
