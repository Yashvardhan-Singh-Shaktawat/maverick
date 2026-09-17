import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ConsultationForm from './components/ConsultationForm'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ComplianceCertifications from './components/ComplianceCertifications'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Hash-based route listener
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#/compliance-certifications' || hash === '#compliance-certifications') {
        setCurrentPage('compliance-certifications')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#/' || hash === '' || hash === '#home') {
        setCurrentPage('home')
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    if (page === 'compliance-certifications') {
      window.location.hash = '/compliance-certifications'
    } else {
      window.location.hash = ''
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col antialiased selection:bg-[#00a8cc] selection:text-white">
      {/* Top Navigation */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentPage === 'compliance-certifications' ? (
          <ComplianceCertifications 
            onBackToHome={() => navigateTo('home')}
          />
        ) : (
          <>
            <Hero />
            <WhoWeAre />
            <WhyUs />
            <Services onNavigate={navigateTo} />
            <Testimonials />
            <ConsultationForm />
            <CtaBanner />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  )
}
