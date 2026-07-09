import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Phone, Globe, MessageCircle, Check } from 'lucide-react'
import logo from '../assets/logo.png'

const services = [
  { label: 'Career Strategy & Planning', slug: 'career-strategy-planning' },
  { label: 'Resume & Profile Rebranding', slug: 'resume-profile-rebranding' },
  { label: 'Skill Prep & Mentorship', slug: 'skill-prep-mentorship' },
  { label: 'Custom Job Campaigns', slug: 'custom-job-campaigns' },
  { label: 'Interview Assistance', slug: 'interview-assistance' },
  { label: 'Offer Review & Onboarding', slug: 'offer-review-onboarding' },
]

const languages = [
  { code: 'en', label: 'English', active: true },
  { code: 'fr', label: 'French', active: false },
  { code: 'de', label: 'German', active: false },
  { code: 'es', label: 'Spanish', active: false },
  { code: 'zh', label: 'Chinese', active: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [languageModalOpen, setLanguageModalOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide top bar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopBar(false)
      } else if (currentScrollY < lastScrollY) {
        setShowTopBar(true)
      }
      
      // Check if scrolled past top bar
      if (currentScrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close language modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && languageModalOpen) {
        setLanguageModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [languageModalOpen])

  const handleLanguageSelect = (lang) => {
    if (lang.active) {
      setSelectedLanguage(lang.label)
      setLanguageModalOpen(false)
    }
    // If inactive, do nothing (disabled)
  }

  return (
    <>
      {/* Language Selection Modal */}
      {languageModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setLanguageModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal */}
          <div 
            className="relative w-full max-w-md rounded-2xl border p-6 shadow-2xl"
            style={{ 
              background: '#1A1A1E',
              borderColor: '#2A2A2E'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLanguageModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 transition-colors duration-200"
              style={{ 
                color: '#B0B0B8',
                background: 'rgba(255,255,255,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.color = '#B0B0B8'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal content */}
            <div className="mt-2">
              <h3 
                className="text-xl font-bold"
                style={{ 
                  color: '#FFFFFF',
                  fontFamily: "'Fraunces', serif"
                }}
              >
                Select Language
              </h3>
              <p 
                className="mt-1 text-sm"
                style={{ 
                  color: '#B0B0B8',
                  fontFamily: "'Manrope', sans-serif"
                }}
              >
                Choose your preferred language
              </p>
            </div>

            <div className="mt-6 space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang)}
                  disabled={!lang.active}
                  className={`w-full flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                    lang.active 
                      ? 'hover:bg-[#2A2A2E] cursor-pointer' 
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  style={{
                    background: selectedLanguage === lang.label ? 'rgba(230, 25, 53, 0.1)' : 'transparent',
                    border: selectedLanguage === lang.label ? '1px solid rgba(230, 25, 53, 0.3)' : '1px solid transparent'
                  }}
                >
                  <span 
                    className="text-sm font-medium"
                    style={{ 
                      color: selectedLanguage === lang.label ? '#FFFFFF' : '#F4F3F1',
                      fontFamily: "'Manrope', sans-serif"
                    }}
                  >
                    {lang.label}
                  </span>
                  {selectedLanguage === lang.label && lang.active && (
                    <Check size={18} style={{ color: '#E61935' }} />
                  )}
                  {!lang.active && (
                    <span 
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        color: '#B0B0B8',
                        background: 'rgba(255,255,255,0.05)'
                      }}
                    >
                      
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Top Bar - Dark Mode */}
      <div 
        className={`bg-gradient-to-r from-gray-900 to-black text-gray-300 transition-all duration-300 ease-in-out ${
          showTopBar ? 'max-h-12 py-2 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <Phone size={14} className="text-gray-400" />
                <a href="tel:9667266578" className="font-medium text-gray-300 hover:text-white transition-colors">
                  9667266578
                </a>
              </div>
              
              <button
                onClick={() => setLanguageModalOpen(true)}
                className="flex items-center gap-1.5 font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Globe size={14} className="text-gray-400" />
                <span>{selectedLanguage}</span>
              </button>
              
              <Link
                to="/contact"
                className="flex items-center gap-1.5 font-medium text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-gray-400" />
                <span>Help center</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Initially rounded, becomes full width when scrolled */}
      <header 
        className={`sticky top-0 z-50 border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-black/90 backdrop-blur py-2'
        }`}
      >
        <div className={`transition-all duration-300 ${
          isScrolled ? 'w-full px-4 sm:px-6 lg:px-8' : 'max-w-7xl mx-auto lg:px-8'
        }`}>
          <nav className={`flex h-16 items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/50 w-full rounded-none' 
              : 'bg-white/10 md:rounded-xl w-full p-3'
          }`}>
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold shrink-0">
              <img src={logo} alt="Career Launchpad" className={`w-auto rounded-md ${
            isScrolled 
              ? 'h-12' 
              : 'h-12 md:h-15'
          }`} />
            </Link>

            <div className="hidden items-center gap-6 lg:gap-8 md:flex">
              <Link 
                to="/" 
                className="relative py-2 text-md font-medium text-gray-300 transition-all duration-200 hover:text-white rounded-lg"
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="relative py-2 text-md font-medium text-gray-300 transition-all duration-200 hover:text-white rounded-lg"
              >
                About Us
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-md font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Services <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                    <div 
                      className="rounded-xl border p-2 shadow-2xl shadow-black/50"
                      style={{ 
                        background: '#1A1A1E',
                        borderColor: '#2A2A2E'
                      }}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-3 py-2 text-md font-medium transition-colors"
                          style={{ 
                            color: '#F4F3F1',
                            fontFamily: "'Manrope', sans-serif"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(230, 25, 53, 0.1)'
                            e.currentTarget.style.color = '#FFFFFF'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = '#F4F3F1'
                          }}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/plans" 
                className="relative py-2 text-md font-medium text-gray-300 transition-all duration-200 hover:text-white rounded-lg"
              >
                Plans
              </Link>

              <Link 
                to="/contact" 
                className="relative py-2 text-md font-medium text-gray-300 transition-all duration-200 hover:text-white rounded-lg"
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className={`rounded-full px-5 text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'py-2' : 'py-2.5 mr-10'
                }`}
                style={{
                  background: '#E61935',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FF1A3A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#E61935'
                }}
              >
                Apply Now
              </Link>
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-white"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu - Dark Mode */}
        {open && (
          <div className="border-t border-gray-800 bg-black px-6 pb-6 md:hidden">
            <div className="flex flex-col gap-1 pt-4">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                to="/plans"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
              >
                Plans
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full px-5 py-3 text-center font-medium transition-colors"
                style={{
                  background: '#E61935',
                  color: '#FFFFFF'
                }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}