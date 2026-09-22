import React from 'react'
import { 
  Megaphone, 
  Palette, 
  Layout, 
  Mail, 
  Calendar, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react'

export default function WhatWeCanBuild() {
  const capabilities = [
    {
      id: 'paid-ads',
      number: '01',
      title: 'Paid Advertising',
      subtitle: 'Meta • Google • LinkedIn • YouTube',
      tags: ['Meta', 'Google', 'LinkedIn', 'YouTube'],
      icon: Megaphone,
      accentColor: '#00A8CC',
      bgGlow: 'from-cyan-500/10 to-transparent',
    },
    {
      id: 'creative-content',
      number: '02',
      title: 'Creative & Content',
      subtitle: 'Ads • Videos • Social • Program Content',
      tags: ['Ads', 'Videos', 'Social', 'Program Content'],
      icon: Palette,
      accentColor: '#00A8CC',
      bgGlow: 'from-sky-500/10 to-transparent',
    },
    {
      id: 'landing-pages',
      number: '03',
      title: 'Landing Pages',
      subtitle: 'Program Pages • Campaign Pages • Conversion Funnels',
      tags: ['Program Pages', 'Campaign Pages', 'Conversion Funnels'],
      icon: Layout,
      accentColor: '#00A8CC',
      bgGlow: 'from-indigo-500/10 to-transparent',
    },
    {
      id: 'email-marketing',
      number: '04',
      title: 'Email Marketing',
      subtitle: 'Nurturing • Events • Applications • Enrollment',
      tags: ['Nurturing', 'Events', 'Applications', 'Enrollment'],
      icon: Mail,
      accentColor: '#00A8CC',
      bgGlow: 'from-teal-500/10 to-transparent',
    },
    {
      id: 'webinars-events',
      number: '05',
      title: 'Webinars & Events',
      subtitle: 'Promotion • Registration • Follow-up',
      tags: ['Promotion', 'Registration', 'Follow-up'],
      icon: Calendar,
      accentColor: '#00A8CC',
      bgGlow: 'from-blue-500/10 to-transparent',
    },
    {
      id: 'performance-analytics',
      number: '06',
      title: 'Performance Analytics',
      subtitle: 'Campaigns • Funnel • Conversion • ROI',
      tags: ['Campaigns', 'Funnel', 'Conversion', 'ROI'],
      icon: BarChart3,
      accentColor: '#00A8CC',
      bgGlow: 'from-cyan-500/10 to-transparent',
    },
  ]

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#FAFAFA] text-slate-800 relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#00A8CC] text-xs sm:text-[13px] font-extrabold tracking-widest uppercase shadow-xs">
            FULL-STACK ENROLLMENT SOLUTIONS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
            What We Can Build for You
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Modular growth capabilities deployed to accelerate applicant yield and brand prestige.
          </p>
        </div>

        {/* 3x2 Grid of Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {capabilities.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                onClick={() => {
                  const contactEl = document.getElementById('contact')
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00A8CC]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                {/* Subtle top ambient glow */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.bgGlow} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Top Row: Icon Container & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-cyan-50/80 border border-cyan-100/80 flex items-center justify-center text-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#00A8CC] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-[#1E2A4A] group-hover:text-[#00A8CC] transition-colors tracking-tight leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Plain Text Subtitle Description */}
                  <p className="text-sm sm:text-[14.5px] font-semibold text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Bullet Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-[11px] font-semibold font-mono px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200/70 group-hover:border-cyan-200 group-hover:bg-cyan-50/50 group-hover:text-slate-800 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold font-mono text-slate-400 group-hover:text-[#00A8CC] transition-colors">
                  <span className="tracking-wider uppercase">BUILD WITH US</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
