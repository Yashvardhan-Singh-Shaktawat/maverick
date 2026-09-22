import React from 'react'

/**
 * PinnedProcessCards
 * 
 * Reusable "pinned card" process layout component.
 * Features:
 * - Content-agnostic (accepts any items array with { label, title, description, badge })
 * - Dot-grid canvas background with radial gradient
 * - Staggered / scattered descending staircase zigzag layout on desktop
 * - Individual card rotation (-4deg to +4deg) that straightens and lifts on hover
 * - Realistic 3D pin element with glossy highlight
 * - Smooth dynamic dashed SVG bezier connector arcs between pins
 * - Clean responsive mobile fallback with vertical dashed timeline
 */
export default function PinnedProcessCards({
  heading = 'Our Approach',
  subheading = 'OUR PROCESS',
  description = 'A systematic, data-backed approach to transforming university market presence into sustainable enrollment growth.',
  items = []
}) {
  // Predefined scattered offsets without rotation tilt
  const layoutConfigs = [
    { top: '3%', left: '55%', zIndex: 40, pinX: 710, pinY: 45 },
    { top: '26%', left: '10%', zIndex: 30, pinX: 260, pinY: 215 },
    { top: '49%', left: '48%', zIndex: 20, pinX: 640, pinY: 385 },
    { top: '72%', left: '8%', zIndex: 10, pinX: 240, pinY: 555 },
  ]

  return (
    <section 
      className="w-full py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#FAFAFA] border-t border-b border-slate-200/80"
      style={{
        backgroundImage: 'radial-gradient(#d1d5db 1.2px, transparent 1.2px)',
        backgroundSize: '22px 22px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {subheading && (
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/90 text-xs font-bold tracking-widest text-[#00A8CC] uppercase shadow-xs mb-3">
              {subheading}
            </span>
          )}
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
            {heading}
          </h2>

          {description && (
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* ================================================================ */}
        {/* DESKTOP: STAGGERED DESCENDING ZIGZAG PINNED CARDS (md and up)     */}
        {/* ================================================================ */}
        <div className="hidden md:block relative w-full h-[760px] max-w-5xl mx-auto">
          
          {/* Dynamic Dashed Curved Bezier SVG Connector Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 780"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Arc 1: Card 0 Pin (710, 50) -> Card 1 Pin (260, 230) */}
            <path 
              d="M 710 50 C 480 70, 380 150, 260 230" 
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
              strokeLinecap="round"
              className="opacity-70"
            />
            
            {/* Arc 2: Card 1 Pin (260, 230) -> Card 2 Pin (640, 410) */}
            <path 
              d="M 260 230 C 420 260, 560 320, 640 410" 
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
              strokeLinecap="round"
              className="opacity-70"
            />

            {/* Arc 3: Card 2 Pin (640, 410) -> Card 3 Pin (240, 590) */}
            <path 
              d="M 640 410 C 490 440, 360 510, 240 590" 
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
              strokeLinecap="round"
              className="opacity-70"
            />
          </svg>

          {/* Render Scattered Pinned Cards */}
          {items.map((item, idx) => {
            const config = layoutConfigs[idx % layoutConfigs.length]

            return (
              <div
                key={idx}
                style={{
                  top: config.top,
                  left: config.left,
                  zIndex: config.zIndex,
                }}
                className="absolute w-[320px] transition-all duration-300 ease-out hover:!z-50 hover:scale-110 hover:-translate-y-2 group cursor-pointer"
              >
                {/* Pinned Card Container */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.07)] group-hover:shadow-[0_25px_50px_rgba(0,168,204,0.22)] group-hover:border-[#00A8CC]/60 transition-all duration-300">
                  
                  {/* Solid Top Pin with Glossy Inner Highlight */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2A2A2A] shadow-md flex items-center justify-center z-30 pointer-events-none transition-transform duration-300 group-hover:scale-125">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/45 absolute top-0.5 left-0.5" />
                  </div>

                  {/* Card Header / Label Slot */}
                  <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                      {item.label || `0${idx + 1}`}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-100 group-hover:bg-[#00A8CC] transition-colors" />
                  </div>

                  {/* Title Slot */}
                  <h3 className="text-xl font-extrabold text-[#1A1A2E] tracking-tight leading-snug mb-2 group-hover:text-[#00A8CC] transition-colors">
                    {item.title}
                  </h3>

                  {/* Body / Description Slot */}
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ================================================================ */}
        {/* MOBILE: CLEAN VERTICAL STACK WITH TIMELINE CONNECTOR (below md)  */}
        {/* ================================================================ */}
        <div className="md:hidden relative max-w-md mx-auto space-y-8">
          
          {/* Vertical Connecting Dashed Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px border-l-2 border-dashed border-slate-300 pointer-events-none z-0" />

          {items.map((item, idx) => (
            <div 
              key={idx}
              className="relative z-10 group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,168,204,0.18)] hover:border-[#00A8CC]/50 transition-all duration-300">
                
                {/* Pin Element */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2A2A2A] shadow-md flex items-center justify-center z-30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/45 absolute top-0.5 left-0.5" />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2 pt-1">
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                    {item.label || `0${idx + 1}`}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-200" />
                </div>

                <h3 className="text-lg font-extrabold text-[#1A1A2E] tracking-tight leading-snug mb-1.5 text-left">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-normal text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
