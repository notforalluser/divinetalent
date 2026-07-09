import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-[#1A1A1E]" style={{ background: '#0A0A0B' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');
      `}</style>
      
      <div className="relative max-w-5xl mx-auto text-center py-8 px-6 sm:px-10 rounded-3xl shadow-2xl overflow-hidden" style={{ 
        background: '#1A1A1E'
      }}>
        {/* decorative glow accents - red/white subtle */}
        <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full blur-3xl" style={{ 
          background: 'rgba(90, 13, 23, 0.08)'
        }} />
        <div className="pointer-events-none absolute -bottom-24 -left-16 w-72 h-72 rounded-full blur-3xl" style={{ 
          background: 'rgba(107, 14, 26, 0.08)'
        }} />
        <div className="pointer-events-none absolute inset-0 rounded-3xl border" style={{ borderColor: '#2A2A2E' }} />

        {/* Small Heading */}
        <p className="relative z-10 inline-flex items-center gap-2 text-[#B0B0B8] text-xs sm:text-sm font-medium mb-2 px-4 py-1.5 rounded-full border" style={{ 
          background: 'rgba(230, 25, 53, 0.10)',
          borderColor: 'rgba(230, 25, 53, 0.20)',
          fontFamily: "'Manrope', sans-serif"
        }}>
          Not sure where to begin?
        </p>

        {/* Main Heading */}
        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto" style={{ 
          color: '#FFFFFF',
          fontFamily: "'Fraunces', serif"
        }}>
          Learn more about
          <br />
          how you can break into a
          <br />
          new career
        </h2>

        {/* Buttons */}
        <div className="relative z-10 mt-5 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            to="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 transition-all duration-300 font-semibold px-7 py-2 rounded-full shadow-md hover:-translate-y-0.5"
            style={{ 
              background: '#E61935',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FF1A3A';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(230, 25, 53, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#E61935';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Contact Us
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/services"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 border transition-all duration-300 font-semibold px-7 py-2 rounded-full"
            style={{ 
              background: 'transparent',
              borderColor: '#2A2A2E',
              color: '#F4F3F1'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E61935';
              e.currentTarget.style.borderColor = '#E61935';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#2A2A2E';
              e.currentTarget.style.color = '#F4F3F1';
            }}
          >
            Find Your Career Track
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;