import React, { useEffect } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function DemandGeneration({ onBackToHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const crucialServices = [
    'Organisation Reputation Management',
    'SEO/CRO',
    'Campaign Strategy & Execution',
    'Events',
    'Marketing Automation'
  ]

  const strategyItems = [
    {
      id: 1,
      title: 'REVENUE MANAGEMENT AUDIT',
      description: 'In a wider sense, it encompasses also other areas of demand management, for example demand estimation and forecasting',
      image: '/1-3.webp',
      fallbackImage: 'https://themavericksco.com/wp-content/uploads/2022/11/1-3.png',
    },
    {
      id: 2,
      title: 'SWOT',
      description: 'All you need to assess and adapt your marketing strategy so that your business does better over time, is provided by us.',
      image: '/2-4.webp',
      fallbackImage: 'https://themavericksco.com/wp-content/uploads/2022/11/2-4.png',
    },
    {
      id: 3,
      title: 'PRICING',
      description: 'Pricing method that considers fluctuations in customer demand and adjusts prices to fit the changes in perceived value that come with them.',
      image: '/3-2.webp',
      fallbackImage: 'https://themavericksco.com/wp-content/uploads/2022/11/3-2.png',
    },
    {
      id: 4,
      title: 'NPS STRATEGY',
      description: 'Strategy that enables companies to measure customer loyalty, and is often used successfully by many companies who are looking to gain insight on customer satisfaction.',
      image: '/4-5.webp',
      fallbackImage: 'https://themavericksco.com/wp-content/uploads/2022/11/4-5.png',
    },
  ]

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800 animate-in fade-in duration-300">
      
      {/* Top Breadcrumb & Page Banner */}
      <div className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 font-medium">
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
            <span className="text-[#00A8CC] font-bold">Demand Generation</span>
          </div>

          {/* Service Badge & Main Heading */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase mb-4">
              SERVICE
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Demand Generation
            </h1>
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* MAIN SECTION: BRAND REVITALISATION & FREE IMAGE                  */}
      {/* ================================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1E2A4A] tracking-tight leading-[1.2]">
              Revitalise Your Brand & Accelerate Market Reach
            </h2>
            
            <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal pt-2">
              We have a passion for revitalising existing brands and helping new brands become a name that everyone knows. Your brand comes to life in implementation of the tactical phases of creative elements; logo design, campaign development, tag lines and more.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00A8CC] hover:bg-[#0092B3] text-white font-bold text-sm shadow-md shadow-[#00A8CC]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Image (Free, No Box) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <img
              src="/Untitled-design-53.webp"
              alt="Demand Generation & Brand Revitalisation"
              className="w-full max-w-lg h-auto object-contain max-h-[460px] drop-shadow-[0_15px_30px_rgba(0,168,204,0.12)] transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://themavericksco.com/wp-content/uploads/2022/11/Untitled-design-53.png'
              }}
            />
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION 2: WHY DEMAND GENERATION IS CRUCIAL FOR YOUR BUSINESS?   */}
      {/* ================================================================ */}
      <section 
        className="w-full py-20 sm:py-28 relative overflow-hidden bg-slate-50/60 border-t border-b border-slate-200/80"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      >
        {/* Soft Radial Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual Image (Untitled-design-49) */}
            <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
              <img
                src="/Untitled-design-49.webp"
                alt="Why Demand Generation is Crucial"
                className="w-full max-w-lg h-auto object-contain max-h-[460px] drop-shadow-[0_15px_30px_rgba(0,168,204,0.12)] transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://themavericksco.com/wp-content/uploads/2022/11/Untitled-design-49.png'
                }}
              />
            </div>

            {/* Right Column: Heading, Info & List */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase shadow-xs">
                  BUSINESS IMPACT
                </span>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight leading-snug">
                  WHY DEMAND GENERATION IS CRUCIAL FOR YOUR BUSINESS?
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The best executions are based on the strongest foundation of who you are, what you mean to your target audiences and how we can shape that brand creatively through proper messaging and placement.
              </p>

              <div className="pt-2 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-[#1E2A4A] uppercase tracking-wider">
                  Our experts can help you with:
                </h3>

                <div className="space-y-2.5">
                  {crucialServices.map((service, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/95 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs flex items-center justify-between transition-all duration-300 hover:shadow-md hover:border-[#00A8CC]/50 hover:-translate-y-0.5 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white transition-colors duration-200 shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-[#1E2A4A] group-hover:text-[#00A8CC] transition-colors">
                          {service}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: OUR COMPREHENSIVE DEMAND GENERATION STRATEGY INCLUDES */}
      {/* ================================================================ */}
      <section 
        className="w-full py-20 sm:py-28 relative overflow-hidden bg-slate-50/60 border-b border-slate-200/80"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      >
        {/* Soft Radial Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase shadow-xs">
              MAGAZINE EDITORIAL GRID
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight leading-snug">
              OUR COMPREHENSIVE DEMAND GENERATION STRATEGY INCLUDES
            </h2>
          </div>

          {/* 2x2 Editorial Magazine Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {strategyItems.map((item, idx) => {
              const isEven = idx % 2 === 1

              return (
                <div 
                  key={item.id}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,168,204,0.12)] hover:border-[#00A8CC]/50 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 group"
                >
                  {/* Magazine Graphic Column */}
                  <div className={`w-full sm:w-1/2 flex items-center justify-center p-2 shrink-0 ${isEven ? 'sm:order-2' : 'sm:order-1'}`}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto object-contain max-h-[190px] drop-shadow-[0_12px_24px_rgba(0,168,204,0.12)] transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        if (item.fallbackImage && e.target.src !== item.fallbackImage) {
                          e.target.src = item.fallbackImage
                        }
                      }}
                    />
                  </div>

                  {/* Magazine Editorial Content Column */}
                  <div className={`w-full sm:w-1/2 flex flex-col justify-between h-full space-y-4 text-left ${isEven ? 'sm:order-1' : 'sm:order-2'}`}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-extrabold text-[#00A8CC] tracking-widest uppercase bg-cyan-50 border border-cyan-100/80 px-2.5 py-1 rounded-md">
                          PHASE 0{idx + 1}
                        </span>
                        <span className="text-2xl font-black text-slate-200 font-mono group-hover:text-cyan-200 transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-[#1E2A4A] tracking-tight leading-snug group-hover:text-[#00A8CC] transition-colors mb-2.5">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-400">
                      <span>KEY PILLAR</span>
                      <span className="text-[#00A8CC] font-bold">READY</span>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

    </div>
  )
}
