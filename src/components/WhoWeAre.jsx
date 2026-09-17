import React from 'react'

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-full bg-[#00A8CC] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden shadow-sm">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#008ba8]/50 blur-3xl pointer-events-none" />

      {/* Full-width responsive content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Eyebrow + White Heading */}
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-[13px] font-extrabold tracking-widest text-white uppercase shadow-sm">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.16]">
              We provide outsourcing <br className="hidden sm:inline" />
              solutions
            </h2>
          </div>

          {/* Right: Crisp White Paragraph */}
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-base sm:text-lg lg:text-[19px] text-white/95 leading-relaxed font-normal">
              Our team of experts help you and your business reach a whole new level of growth,
              success and ease of performing tasks just by outsourcing them to us. We offer a
              variety of services ranging from providing for your organisation's internal management
              to external tasks.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
