import React from 'react'
import { Star, CheckCircle2 } from 'lucide-react'

export default function WhyUs() {
  const stats = [
    { value: '5K+', label: 'Project Done', isRating: false },
    { value: '50+', label: 'Happy clients', isRating: false },
    { value: '4.78', label: 'Client Review', isRating: true },
    { value: '20+', label: 'Years Experience', isRating: false },
  ]

  const reasons = [
    'Inappropriate alignment of vision, goals and strategy',
    'Concerns with change management and fear of losing key talent',
    'Lack of business agility across process, technology and people',
    'Concerns about the uncertainty of current or future market conditions',
    'And most commonly, people who do not fit into high performing positions'
  ]

  return (
    <section id="why-us" className="w-full bg-white text-slate-800 py-16 sm:py-24 border-t border-b border-slate-100 relative overflow-hidden">
      
      {/* Subtle background ambient wash */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 2 Columns Split by a Vertical Dividing Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 pb-16 border-b border-slate-200 items-start">
          
          {/* Left Column: Extra Large Bold Heading in Clean White Container */}
          <div className="lg:col-span-5 lg:pr-12 space-y-4">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-xs sm:text-[13px] font-extrabold tracking-widest text-[#00A8CC] uppercase border border-cyan-100">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-[62px] xl:text-[72px] font-extrabold text-[#1E2A4A] leading-[1.08] tracking-tight">
              Why The <br />
              <span className="text-[#00A8CC]">Mavericks</span> <br />
              Consulting?
            </h2>
          </div>

          {/* Right Column: Split Separated by a Vertical Line */}
          <div className="lg:col-span-7 lg:border-l lg:border-slate-200 lg:pl-14 space-y-6 text-slate-600 text-base sm:text-[16px] leading-relaxed">
            <p className="font-normal">
              With over 80+ years of collective experience in consulting business, we can help companies at any stage.
              Be it customer retention issues due to lack of understanding of business and customer insights or execution
              issues caused by difficulty in innovating or quickly launching new capabilities, our consultants work with
              your collaboratively to help you mind your business!
            </p>

            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
              <p className="font-bold text-[#1E2A4A] text-lg mb-3">Businesses fail due to -</p>
              <ul className="space-y-2.5">
                {reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                    <span className="w-2 h-2 rounded-full bg-[#00A8CC] mt-2 shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-normal">
              Our experiential approach, passion to drive excellence, analytical thinking and brutally honest feedback
              followed by execution helps organisations save a lot of time and energy in transforming to high
              performance business models.
            </p>
          </div>

        </div>

        {/* Bottom 4-Column Stats Row with Thin Vertical Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-14 text-center">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center p-2 ${
                idx !== stats.length - 1 ? 'md:border-r md:border-slate-200' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#1E2A4A] tracking-tight flex items-center justify-center gap-1.5 mb-1.5">
                <span>{stat.value}</span>
                {stat.isRating && (
                  <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400 -mt-1" />
                )}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule a Free Consultation Today! CTA Banner */}
        <div className="mt-14 sm:mt-16 bg-[#E5F7FB] rounded-2xl sm:rounded-3xl px-6 py-6 sm:px-10 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-5 border border-cyan-100/60 shadow-sm transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#0A2540] tracking-tight text-center sm:text-left">
            Schedule a Free Consultation Today!
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#0A2540] hover:bg-[#06182a] text-white text-sm sm:text-base font-semibold tracking-tight shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#00A8CC] focus:ring-offset-2"
          >
            Get Started
          </a>
        </div>

      </div>
    </section>
  )
}
