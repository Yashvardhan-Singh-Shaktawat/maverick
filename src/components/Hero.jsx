import React, { useState, useEffect } from 'react'

export default function Hero() {
  const headingLine1 = ['We', 'translate', 'vision', 'into']
  
  const ROTATING_PHRASES = [
    'actionable goals',
    'strategic plans',
    'measurable outcomes',
    'innovative solutions',
    'tangible results',
    'achievable milestones',
    'operational success',
    'effective strategies',
    'successful initiatives',
    'sustainable growth'
  ]

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(90)
  const [hasStarted, setHasStarted] = useState(false)

  // Delay typing start until initial headline entrance completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    const fullText = ROTATING_PHRASES[phraseIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        const nextText = fullText.substring(0, currentText.length + 1)
        setCurrentText(nextText)

        if (nextText === fullText) {
          // Pause at full word before backspacing
          setTypingSpeed(2000)
          setIsDeleting(true)
        } else {
          setTypingSpeed(60 + Math.random() * 25)
        }
      } else {
        const nextText = fullText.substring(0, currentText.length - 1)
        setCurrentText(nextText)

        if (nextText === '') {
          // Finished backspacing, advance to next phrase
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length)
          setTypingSpeed(350)
        } else {
          setTypingSpeed(30)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, phraseIndex, typingSpeed, hasStarted])

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/90 via-sky-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Height-Locked Headline & Typewriter Animation */}
          <div className="lg:col-span-6 space-y-6">

            {/* Main Headline Container with Locked Minimum Height to Eliminate Any Section Sizing Jumps */}
            <div className="min-h-[145px] sm:min-h-[170px] md:min-h-[190px] lg:min-h-[210px] xl:min-h-[225px] flex flex-col justify-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[66px] font-extrabold text-[#1E2A4A] tracking-tight leading-[1.12]">
                
                {/* Line 1: We translate vision into */}
                <span className="block py-1">
                  {headingLine1.map((word, idx) => (
                    <span
                      key={idx}
                      className="inline-block overflow-hidden pt-1 pb-2 sm:pb-3 mr-2.5 sm:mr-3.5 align-bottom"
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

                {/* Line 2: Smooth Interactive Typewriter Animation */}
                <span className="inline-block text-[#00A8CC] min-h-[1.2em] pt-0.5 pb-2">
                  <span className="text-[#00A8CC] selection:bg-[#00A8CC] selection:text-white">
                    {currentText}
                  </span>
                </span>

              </h1>
            </div>

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
                  src="/maverick-hero.webp"
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
