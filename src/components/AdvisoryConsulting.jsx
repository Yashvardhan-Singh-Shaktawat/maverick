import React, { useEffect } from 'react'
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  CheckCheck, 
  TrendingUp, 
  Linkedin, 
  Share2 
} from 'lucide-react'
import ConsultationForm from './ConsultationForm'
import CtaBanner from './CtaBanner'

export default function AdvisoryConsulting({ onBackToHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const commonAreas = [
    { title: 'Corporate and M&A', id: 'm-and-a' },
    { title: 'Branding', id: 'branding' },
    { title: 'Growth & Innovation', id: 'growth-innovation' },
    { title: 'Organizational Effectiveness', id: 'org-effectiveness' },
    { title: 'Functional', id: 'functional' },
    { title: 'Digital & Technology', id: 'digital-tech' },
  ]

  const subscriptionValues = [
    {
      id: 1,
      title: 'PRAGMATIC SOLUTIONS',
      description: 'Grow your business from local to global with our expertise',
      image: '/5-1-e1756122890608.webp',
      fallbackImage: 'https://themavericksco.com/wp-content/uploads/2022/11/5-1-e1756122890608.png',
    },
    {
      id: 2,
      title: 'MANAGED BUSINESS TRANSFORMATION',
      description: 'We make sure that your business process focuses on most critical issues and opportunities to lead transformational changes',
      image: '/5-2.webp',
      fallbackImage: 'https://themavericksco.com/wp-content/uploads/2022/11/5-2.png',
    },
    {
      id: 3,
      title: 'OPERATIONAL EFFICIENCY',
      description: 'We know when your business needs an overhaul. So you don’t have to re-engineer',
      image: '/1-2.webp',
      fallbackImage: 'https://themavericksco.com/wp-content/uploads/2022/11/1-2.png',
    },
  ]

  const whyChoosePoints = [
    {
      id: 1,
      title: 'Certification granted by highly experienced CPA, CISA, GDPR experts',
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: 'Clearly structured report',
      icon: FileText,
    },
    {
      id: 3,
      title: 'Tested Methodology',
      icon: CheckCheck,
    },
    {
      id: 4,
      title: 'Constant upgradation of your sector',
      icon: TrendingUp,
    },
  ]

  const shareLinks = {
    linkedin: "https://www.linkedin.com/feed?mini=true&url=https%3A%2F%2Fthemavericksco.com%2Fservice%2Fadvisory-and-consulting%2F&title=Advisory%20and%20Consulting%20%E2%80%93%20The%20Mavericks%20Consulting&summary=%27%27&source=https%3A%2F%2Fthemavericksco.com%2Fservice%2Fadvisory-and-consulting%2F&shareUrl=https%3A%2F%2Fthemavericksco.com%2Fservice%2Fadvisory-and-consulting%2F&shareActive=true&linkOrigin=LI_BADGE&skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_inshare-redirect%3Bf095f589-df74-458b-8baa-76f1bd4aefc6",
    x: "https://x.com/intent/post?text=%20https%3A%2F%2Fthemavericksco.com%2Fservice%2Fadvisory-and-consulting%2F",
  }

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
            <span className="text-[#00A8CC] font-bold">Advisory & Consulting</span>
          </div>

          {/* Service Badge & Main Heading */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase mb-4">
              SERVICE
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Advisory & Consulting
            </h1>
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION 1: SCALING OVERVIEW & IMAGE (TWO COLUMN LAYOUT)          */}
      {/* ================================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E2A4A] tracking-tight leading-[1.18]">
              Are you looking forward to scale your organization?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal pt-2">
              Sometimes it’s finding the right person for a full time employee position. Other times, it’s a consultant for specific expertise or a project that needs additional resource.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
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
              src="/4-4.webp"
              alt="Scale your organization"
              className="w-full max-w-lg h-auto object-contain max-h-[440px] drop-shadow-[0_15px_30px_rgba(0,168,204,0.10)] transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://themavericksco.com/wp-content/uploads/2022/11/4-4.png'
              }}
            />
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION 2: GRID BG - COMMON AREAS ASKED TO HELP IN               */}
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
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase shadow-xs">
              AREAS OF EXPERTISE
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight leading-snug">
              SOME OF THE MOST COMMON AREAS WHERE WE ARE ASKED TO HELP IN
            </h2>
          </div>

          {/* Grid Split: List of Areas on Left, Image 3-1 on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: 6 Common Areas Cards */}
            <div className="lg:col-span-6 space-y-3.5">
              {commonAreas.map((area, idx) => (
                <div 
                  key={area.id}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-md hover:border-[#00A8CC]/50 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white transition-colors duration-200">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#1E2A4A] group-hover:text-[#00A8CC] transition-colors">
                      {area.title}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column: Image 3-1 (Free, No Box) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <img
                src="/3-1.webp"
                alt="Common Areas We Help In"
                className="w-full max-w-lg h-auto object-contain max-h-[460px] drop-shadow-[0_15px_30px_rgba(0,168,204,0.12)] transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://themavericksco.com/wp-content/uploads/2022/11/3-1.png'
                }}
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: WHAT SHOULD YOU EXPECT AFTER SUBSCRIBING TO ACS?      */}
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
              ACS VALUE
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight leading-snug">
              WHAT SHOULD YOU EXPECT AFTER SUBSCRIBING TO ACS?
            </h2>
          </div>

          {/* 3-Column Image & Text Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-9">
            {subscriptionValues.map((item) => (
              <div 
                key={item.id}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#00A8CC]/50 hover:bg-white group"
              >
                <div>
                  {/* Card Graphic Image Frame */}
                  <div className="w-full h-48 sm:h-52 rounded-2xl bg-slate-50/70 border border-slate-100 p-4 mb-6 flex items-center justify-center overflow-hidden group-hover:bg-white group-hover:shadow-xs transition-all">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        if (item.fallbackImage && e.target.src !== item.fallbackImage) {
                          e.target.src = item.fallbackImage
                        }
                      }}
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1E2A4A] tracking-tight mb-3 group-hover:text-[#00A8CC] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: WHY CHOOSE THE MAVERICKS CONSULTING?                  */}
      {/* ================================================================ */}
      <section className="w-full py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase shadow-xs">
              WHY CHOOSE US
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] tracking-tight leading-snug">
              Why choose The Mavericks Consulting?
            </h2>
          </div>

          {/* 4 Feature Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {whyChoosePoints.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.id}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#00A8CC]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-base sm:text-[17px] font-bold text-[#1E2A4A] group-hover:text-[#00A8CC] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-5 border-t border-slate-200/60 mt-4 flex items-center justify-between text-xs font-mono font-semibold text-slate-400">
                    <span>ADVANTAGE</span>
                    <span>0{idx + 1}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Bar: Contact Us Button & Social Share */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
            
            {/* Contact Us Button */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A8CC] hover:bg-[#0092B3] text-white font-bold text-sm shadow-md shadow-[#00A8CC]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Share Badges */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-slate-500 mr-1 flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-[#00A8CC]" />
                Share this service:
              </span>

              {/* LinkedIn Share */}
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                title="Share on LinkedIn"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 hover:bg-[#0077B5] hover:border-[#0077B5] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>

              {/* X (formerly Twitter) Share */}
              <a
                href={shareLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                title="Share on X"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 hover:bg-black hover:border-black text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* FREE CONSULTATION FORM & CTA BANNER                              */}
      {/* ================================================================ */}
      <ConsultationForm />
      <CtaBanner />

    </div>
  )
}
