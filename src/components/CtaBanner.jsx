import React from 'react'

export default function CtaBanner() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Thin light-blue full-width strip */}
        <div className="bg-[#E6F8FB] border border-cyan-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          
          <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#1E2A4A] tracking-tight text-center sm:text-left">
            Schedule a Free Consultation Today!
          </h3>

          <a
            href="#contact"
            className="shrink-0 px-8 py-3 rounded-full text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#071C30] shadow-md hover:shadow-lg transition-all duration-200"
          >
            Get Started
          </a>

        </div>
      </div>
    </section>
  )
}
