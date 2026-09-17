import React from 'react'

export default function Hero() {
  const headingLine1 = ['We', 'translate', 'vision', 'into']
  const headingLine2 = ['actionable', 'goals']

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/90 via-sky-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Staggered Word-by-Word Text Entrance */}
          <div className="lg:col-span-6 space-y-6">

            {/* Main Headline with Word-by-Word Arrival */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[76px] font-extrabold text-[#1E2A4A] tracking-tight leading-[1.08]">
              {/* Line 1: We translate vision into */}
              <span className="block overflow-hidden py-1">
                {headingLine1.map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block overflow-hidden mr-3 sm:mr-4 align-bottom"
                  >
                    <span
                      className="inline-block animate-word-reveal"
                      style={{ animationDelay: `${0.12 + idx * 0.09}s` }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </span>

              {/* Line 2: actionable goals (in cyan) */}
              <span className="block overflow-hidden py-1 text-[#00A8CC]">
                {headingLine2.map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block overflow-hidden mr-3 sm:mr-4 align-bottom"
                  >
                    <span
                      className="inline-block animate-word-reveal"
                      style={{ animationDelay: `${0.48 + idx * 0.1}s` }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Paragraph with Delayed Fade-Up */}
            <p
              className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl font-normal animate-hero-fadeup"
              style={{ animationDelay: '0.72s' }}
            >
              We are a boutique consulting group enabling businesses to succeed. Whether you're
              experiencing challenges with company culture, internal processes or need a new
              business strategy to reflect your envisioned future, we're here to help.
            </p>

            {/* CTA Button with Spring Pop-In */}
            <div
              className="pt-2 animate-button-pop"
              style={{ animationDelay: '0.9s' }}
            >
              <a
                href="#who-we-are"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#00A8CC] hover:bg-[#0092B3] shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Discover more
              </a>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image with Smooth Entrance & Decoupled Sway */}
          <div className="lg:col-span-6 flex justify-center items-center relative pt-4 lg:pt-8">
            {/* Outer Wrapper: Smooth Initial Slide-Up & Fade Entrance (Zero Shake) */}
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl relative flex justify-center items-center translate-y-4 sm:translate-y-8 lg:translate-y-12 animate-smooth-enter">
              
              {/* Ambient Glowing Aura Background */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/30 via-sky-300/20 to-indigo-500/30 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Inner Wrapper: Smooth Dribbble Floating & Swaying Motion */}
              <div className="w-full flex justify-center items-center animate-dribbble-float">
                <img
                  src="/maverick-hero.png"
                  alt="The Mavericks Consulting App Mockup"
                  className="w-full max-h-[600px] xl:max-h-[660px] scale-105 sm:scale-110 lg:scale-115 object-contain drop-shadow-[0_25px_50px_rgba(0,168,204,0.22)] hover:scale-[1.18] transition-transform duration-500 select-none"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
