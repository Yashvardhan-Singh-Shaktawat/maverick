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
import AdvisoryConsulting from './components/AdvisoryConsulting'
import DemandGeneration from './components/DemandGeneration'
import CrmImplementation from './components/CrmImplementation'
import EnrollmentGrowthEngine from './components/EnrollmentGrowthEngine'
import AboutUs from './components/AboutUs'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Hash-based route listener
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '')
      
      if (hash === 'about-us' || hash === 'about') {
        setCurrentPage('about-us')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === 'compliance-certifications') {
        setCurrentPage('compliance-certifications')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === 'advisory-consulting') {
        setCurrentPage('advisory-consulting')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === 'demand-generation') {
        setCurrentPage('demand-generation')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === 'crm-implementation') {
        setCurrentPage('crm-implementation')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === 'enrollment-growth-engine') {
        setCurrentPage('enrollment-growth-engine')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home')
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    if (page === 'home') {
      window.location.hash = ''
    } else {
      window.location.hash = `/${page}`
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
        {currentPage === 'about-us' ? (
          <AboutUs 
            onBackToHome={() => navigateTo('home')}
          />
        ) : currentPage === 'compliance-certifications' ? (
          <ComplianceCertifications 
            onBackToHome={() => navigateTo('home')}
          />
        ) : currentPage === 'advisory-consulting' ? (
          <AdvisoryConsulting 
            onBackToHome={() => navigateTo('home')}
          />
        ) : currentPage === 'demand-generation' ? (
          <DemandGeneration 
            onBackToHome={() => navigateTo('home')}
          />
        ) : currentPage === 'crm-implementation' ? (
          <CrmImplementation 
            onBackToHome={() => navigateTo('home')}
          />
        ) : currentPage === 'enrollment-growth-engine' ? (
          <EnrollmentGrowthEngine 
            onBackToHome={() => navigateTo('home')}
          />
        ) : (
          <>
            <Hero />
            <WhoWeAre />
            <WhyUs />
            <Testimonials />
            <Services onNavigate={navigateTo} />
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
