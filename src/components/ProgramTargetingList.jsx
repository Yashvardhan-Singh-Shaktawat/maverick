import React from 'react'
import { CheckSquare, Sparkles } from 'lucide-react'

// Inverse fillet SVG component for creating seamless concave joints on tabs
function InverseCorner({ className = '', fill = 'currentColor' }) {
  return (
    <svg 
      className={`w-5 h-5 pointer-events-none ${className}`} 
      viewBox="0 0 20 20" 
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0 A 20 20 0 0 0 20 20 L 0 20 Z" />
    </svg>
  )
}

export default function ProgramTargetingList() {
  const programsData = [
    {
      id: 'mba',
      title: 'MBA',
      subtitle: 'Leadership • Career Growth • Global Business',
      status: 'Executive Cohort',
      color: '#67E8F9', // Soft cyan / bright teal
      hexBg: '#67E8F9',
    },
    {
      id: 'data-tech',
      title: 'Data & Technology',
      subtitle: 'AI • Data Science • Cybersecurity • Emerging Tech',
      status: 'High Demand',
      color: '#86EFAC', // Soft mint / spring green
      hexBg: '#86EFAC',
    },
    {
      id: 'design-education',
      title: 'Design & Education',
      subtitle: 'Learning • Innovation • Professional Development',
      status: 'Active Enrollment',
      color: '#C4B5FD', // Soft lavender / violet tint
      hexBg: '#C4B5FD',
    },
    {
      id: 'undergraduate',
      title: 'Undergraduate',
      subtitle: 'Education • Experience • Career Pathways',
      status: 'Foundational Yield',
      color: '#FDE68A', // Warm amber / sunlight
      hexBg: '#FDE68A',
    },
  ]

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAFA] text-slate-800 relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Left Heading & Right Target Image */}
        <div className="max-w-6xl mx-auto mb-14 sm:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Main Heading & Subtitle */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#00A8CC] text-xs font-bold tracking-widest uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>PROGRAM TARGETING & STRATEGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Market the Right Program to the Right Student.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal pt-1">
              Every program needs a different strategy.
            </p>
          </div>

          {/* Right Column: Visual Target Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <img 
              src="/target.webp" 
              alt="Program Targeting & Strategy"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-[360px] h-auto object-contain max-h-[240px] drop-shadow-[0_15px_30px_rgba(0,168,204,0.12)] transition-transform duration-500 hover:scale-105 select-none"
              onError={(e) => {
                e.target.src = '/Strategy.png'
              }}
            />
          </div>

        </div>

        {/* 2-Row Grid Layout: 2 cards per row on desktop (4 cards total across 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {programsData.map((item) => {
            return (
              <div key={item.id} className="relative group flex flex-col justify-end">
                
                {/* Upper Level: Integrated Attached Status Tab (Left) */}
                <div className="flex items-end justify-start relative z-10 select-none px-1">
                  
                  {/* Status Tab with inverse smooth fillet */}
                  <div 
                    className="relative inline-flex items-center rounded-t-[20px] px-5 sm:px-6 pt-2.5 pb-2.5 transition-transform duration-300 shadow-xs"
                    style={{ backgroundColor: item.hexBg }}
                  >
                    {/* Status Pill Badge inside Tab */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A] text-white text-[11px] sm:text-xs font-bold tracking-wide shadow-xs uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{item.status}</span>
                    </div>

                    {/* Inverse Concave Fillet Arc on the right side connecting tab to card body */}
                    <div 
                      className="absolute bottom-0 -right-5 w-5 h-5 overflow-hidden pointer-events-none"
                      style={{ color: item.hexBg }}
                    >
                      <InverseCorner fill={item.hexBg} />
                    </div>
                  </div>

                </div>

                {/* Card Body (Main Area) */}
                <div 
                  className="rounded-b-[24px] rounded-tr-[24px] p-6 sm:p-7 md:p-8 relative shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer min-h-[140px] flex flex-col justify-center"
                  style={{ backgroundColor: item.hexBg }}
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    
                    {/* Left: Rounded-Square Icon Container: 54px, rounded-2xl in dark neutral #0F172A */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F172A] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <CheckSquare 
                        className="w-6 h-6 sm:w-7 sm:h-7" 
                        style={{ color: item.hexBg }} 
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Text Stack */}
                    <div className="min-w-0 text-left">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#0F172A]/80 tracking-normal mt-1.5 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
