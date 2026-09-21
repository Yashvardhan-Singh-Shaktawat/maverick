import React, { useState, useEffect } from 'react'
import { 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  Terminal, 
  Receipt, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  X, 
  Sparkles, 
  FileText, 
  Clock, 
  CheckCheck,
  Building2,
  ExternalLink
} from 'lucide-react'

export default function ComplianceCertifications({ onBackToHome }) {
  const [selectedCert, setSelectedCert] = useState(null)

  // Scroll to top upon opening page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const certifications = [
    {
      id: 'soc-2',
      badge: 'AUDIT & TRUST',
      name: 'SOC 2',
      fullName: 'SOC 2 Type 1 & Type 2 Readiness',
      imageUrl: 'https://themavericksco.com/wp-content/uploads/2022/11/Your-paragraph-text-3.png',
      icon: ShieldCheck,
      color: '#00A8CC',
      description: 'Is your client information and data safe? How will you assure it? Two very important questions for which you should have very clear answers if you offer IT services to your clients.',
      timeline: '4 - 8 Weeks',
      deliverables: [
        'Gap assessment against AICPA Trust Services Criteria (Security, Availability, Confidentiality)',
        'Comprehensive policy pack & standard operating procedures drafting',
        'Continuous evidence collection automation via top GRC platforms',
        'Auditor liaison and end-to-end audit defense until report issuance'
      ],
      suitableFor: 'SaaS companies, Cloud Service Providers, and B2B IT companies handling customer data.'
    },
    {
      id: 'pci-dss',
      badge: 'PAYMENT SECURITY',
      name: 'PCI DSS',
      fullName: 'Payment Card Industry Data Security Standard',
      imageUrl: 'https://themavericksco.com/wp-content/uploads/2022/11/Your-paragraph-text-2.png',
      icon: CreditCard,
      color: '#3B82F6',
      description: 'Are you worried about client data protection and transactional security audit? This clearly affects both large and small companies and results in uncountable fines, detrimental to your business and clients!',
      timeline: '3 - 6 Weeks',
      deliverables: [
        'Cardholder Data Environment (CDE) scope minimization & boundary validation',
        'Quarterly ASV vulnerability scanning and penetration test reports',
        'Self-Assessment Questionnaire (SAQ A, A-EP, D) guidance & Report on Compliance (ROC)',
        'Payment gateway tokenization & point-to-point encryption (P2PE) advisory'
      ],
      suitableFor: 'E-commerce platforms, payment processors, fintech startups, and merchant service providers.'
    },
    {
      id: 'gdpr',
      badge: 'DATA PRIVACY',
      name: 'GDPR',
      fullName: 'General Data Protection Regulation Compliance',
      imageUrl: 'https://themavericksco.com/wp-content/uploads/2022/11/3.png',
      icon: Lock,
      color: '#10B981',
      description: 'Is your client information and data safe? How will you assure it? Two very important questions for which you should have very clear answers if you offer IT services to your clients.',
      timeline: '2 - 5 Weeks',
      deliverables: [
        'Data mapping and Records of Processing Activities (ROPA) documentation',
        'Data Protection Impact Assessment (DPIA) for high-risk operations',
        'Subject Access Request (DSAR) workflows and consent management integration',
        'Cross-border Standard Contractual Clauses (SCCs) and privacy policy updates'
      ],
      suitableFor: 'Any business processing or storing personal data of EU/UK citizens or international customers.'
    },
    {
      id: 'vapt',
      badge: 'CYBERSECURITY',
      name: 'VAPT',
      fullName: 'Vulnerability Assessment & Penetration Testing',
      imageUrl: 'https://themavericksco.com/wp-content/uploads/2022/11/4-1.png',
      icon: Terminal,
      color: '#8B5CF6',
      description: 'Is your website or network secured? Code vulnerability and security holes are often neglected by organizations exposing them to more cyber threats eventually to a failure in achieving compliance certification!',
      timeline: '1 - 3 Weeks',
      deliverables: [
        'OWASP Top 10 web and mobile application penetration testing',
        'Network infrastructure & cloud perimeter vulnerability scanning',
        'Comprehensive executive summary & developer-friendly remediation guide',
        'Free re-testing and verified VAPT Clean Certificate for enterprise clients'
      ],
      suitableFor: 'All tech-enabled organizations with public websites, APIs, or internal corporate networks.'
    },
    {
      id: 'erc',
      badge: 'FINANCIAL ADVISORY',
      name: 'ERC',
      fullName: 'Employee Retention Credit & Advisory',
      imageUrl: 'https://themavericksco.com/wp-content/uploads/2022/11/Untitled-design-59.png',
      icon: Receipt,
      color: '#F59E0B',
      description: 'Did your company experience a reduction in gross receipts as an impact of COVID-19? Were you also subjected to reduce business operations as a government ordered mandate?',
      timeline: '2 - 4 Weeks',
      deliverables: [
        'Comprehensive quarter-by-quarter gross receipts reduction calculation',
        'Government shutdown order impact documentation and eligibility review',
        'Payroll credit calculation ensuring no double-dipping with PPP loans',
        'Complete Form 941-X preparation and IRS submission package with audit defense'
      ],
      suitableFor: 'Eligible employers who retained W-2 staff through operational disruptions and mandates.'
    }
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
            <span className="text-[#00A8CC] font-bold">Compliance Certifications</span>
          </div>

          {/* Service Badge & Main Heading */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-xs font-bold tracking-widest uppercase mb-4">
              SERVICE
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
              Compliance Certifications
            </h1>
            
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Guarantee complete audit readiness and enterprise trust. Our certification specialists and data analytics capabilities guide you through global regulatory compliance seamlessly.
            </p>
          </div>

        </div>
      </div>

      {/* Main Certification Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            return (
              <div
                key={cert.id}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,168,204,0.14)] hover:border-[#00A8CC]/40 group"
              >
                <div>
                  {/* Card Graphic Image Header */}
                  <div className="w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-100 mb-6 p-4 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.name} Compliance`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-700 border border-slate-200/80 shadow-xs">
                        {cert.badge}
                      </span>
                    </div>
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-2xl font-black text-[#1E2A4A] tracking-tight mb-3 group-hover:text-[#00A8CC] transition-colors">
                    {cert.name}
                  </h3>

                  {/* Exact Content Body Provided by User */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                    {cert.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8CC] hover:text-[#008ba8] transition-all group-hover:translate-x-1"
                  >
                    <span>[Learn More]</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {cert.timeline}
                  </span>
                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Bottom CTA Banner (Simple Primary Color Theme) */}
      <div className="bg-[#00A8CC] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white border border-white/20 text-xs sm:text-[13px] font-extrabold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            NEED IMMEDIATE AUDIT READINESS?
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Accelerate Your Compliance Certification Today
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-9 leading-relaxed font-normal">
            Our specialized audit teams eliminate roadblocks and prepare your systems for zero-finding certification.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0A2540] hover:bg-[#071C30] text-white font-bold text-sm shadow-xl shadow-black/10 transition-all hover:scale-105 active:scale-95"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#00A8CC] hover:bg-slate-50 font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Other Services</span>
            </button>
          </div>

        </div>
      </div>

      {/* Interactive Detail Modal for [Learn More] */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-9 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Graphic */}
            <div className="w-full h-44 sm:h-52 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/80 border border-slate-100 p-4 mb-6 flex items-center justify-center overflow-hidden">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.fullName}
                className="max-h-full max-w-full object-contain drop-shadow-md"
              />
            </div>

            {/* Modal Header */}
            <div className="mb-5">
              <span className="text-xs font-bold font-mono text-[#00A8CC] uppercase tracking-wider block mb-1">
                {selectedCert.badge} // {selectedCert.name}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1E2A4A] leading-snug">
                {selectedCert.fullName}
              </h3>
            </div>

            {/* Description */}
            <div className="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {selectedCert.description}
              </p>
            </div>

            {/* Scope / Deliverables List */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#00A8CC]" />
                Deliverables & Scope
              </h4>
              <ul className="space-y-2.5">
                {selectedCert.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who is it for */}
            <div className="mb-8 p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1E2A4A] block mb-0.5">Target Organization:</strong>
                {selectedCert.suitableFor}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              
              <a
                href="#contact"
                onClick={() => {
                  setSelectedCert(null)
                  onBackToHome()
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00A8CC] hover:bg-[#0092B3] shadow-md shadow-[#00A8CC]/20 transition-all hover:scale-105"
              >
                <span>Request {selectedCert.name} Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
