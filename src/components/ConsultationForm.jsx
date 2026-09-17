import React, { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('Consultation Form Submission:', formData)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4 lg:pt-4">
            <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#00A8CC] uppercase block">
              NEED HELP?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E2A4A] tracking-tight leading-[1.15]">
              Let's start with a FREE <br />
              Consultation
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-md pt-2">
              Fill this form and someone from our team will get back to you to discuss your requirements.
            </p>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-50 border border-cyan-200 text-[#00A8CC] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E2A4A]">Thank You!</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">
                    We have received your consultation request. A Mavericks consultant will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', phone: '', email: '', message: '' })
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-[#00A8CC] bg-cyan-50 hover:bg-cyan-100 transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Phone (2-col) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A8CC] focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A8CC] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A8CC] focus:bg-white transition"
                    />
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A8CC] focus:bg-white transition resize-none"
                    />
                  </div>

                  {/* Submit Button (Pill shaped teal fill with mail icon) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-full bg-[#00A8CC] hover:bg-[#0092B3] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 disabled:opacity-75"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{loading ? 'Sending Request...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
