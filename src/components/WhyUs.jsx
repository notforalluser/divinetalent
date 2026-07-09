import { useEffect, useRef, useState } from "react";
import { Check, TrendingUp, ShieldCheck } from "lucide-react";

const points = [
  {
    text: "No four-year degree required — we hire for skill and potential.",
  },
  {
    text: "Personalized coaching, not a generic script everyone gets.",
  },
  {
    text: "Direct lines into partner companies, from startups to enterprise.",
  },
  {
    text: "Transparent process — you know what happens at every stage.",
  },
  {
    text: "Support continues after you're placed, not just up to the offer.",
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function GrowthChart() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-32 sm:h-36" fill="none">
      <defs>
        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E61935" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E61935" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* baseline grid */}
      {[35, 70, 105].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="300"
          y2={y}
          stroke="#2A2A2E"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      ))}

      {/* area under the curve */}
      <path
        d="M0,120 C40,110 60,90 90,85 C130,78 150,55 190,45 C220,38 260,25 300,10 L300,140 L0,140 Z"
        fill="url(#growthFill)"
      />

      {/* the line itself */}
      <path
        d="M0,120 C40,110 60,90 90,85 C130,78 150,55 190,45 C220,38 260,25 300,10"
        stroke="#E61935"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* endpoint marker */}
      <circle cx="300" cy="10" r="5" fill="#E61935" />
      <circle cx="300" cy="10" r="9" fill="#E61935" fillOpacity="0.2" />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-10 px-5 sm:px-8 lg:px-12 border-t border-[#1A1A1E] border-b border-[#1A1A1E]"
      style={{ background: '#0A0A0B' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');
      `}</style>
      
      <div className="max-w-6xl mx-auto grid gap-12 md:gap-14 lg:gap-16 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
              style={{ 
                color: '#FFFFFF',
                fontFamily: "'Fraunces', serif"
              }}
            >
              The foundation of a good hire is a person who's set up to
              succeed.
            </h2>
          </Reveal>

          <ul className="mt-8 sm:mt-9 space-y-4 sm:space-y-5">
            {points.map((point, i) => (
              <Reveal key={point.text} delay={i * 90}>
                <li className="flex items-start gap-3 group">
                  <span 
                    className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300"
                    style={{ 
                      background: 'rgba(230, 25, 53, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#E61935';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(230, 25, 53, 0.15)';
                    }}
                  >
                    <Check
                      size={14}
                      className="transition-colors duration-300"
                      style={{ 
                        color: '#E61935',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#E61935';
                      }}
                    />
                  </span>
                  <span 
                    className="text-[14px] sm:text-[15px] leading-relaxed"
                    style={{ 
                      color: '#F4F3F1',
                      fontFamily: "'Manrope', sans-serif"
                    }}
                  >
                    {point.text}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={150}>
          <div 
            className="rounded-3xl border p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ 
              background: '#1A1A1E',
              borderColor: '#2A2A2E'
            }}
          >
            <div className="flex items-center justify-between mb-2 gap-2">
              <p 
                className="text-sm font-semibold"
                style={{ 
                  color: '#FFFFFF',
                  fontFamily: "'Manrope', sans-serif"
                }}
              >
                Candidate confidence over time
              </p>
              <span 
                className="shrink-0 flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 py-1 rounded-full"
                style={{ 
                  color: '#E61935',
                  background: 'rgba(230, 25, 53, 0.15)'
                }}
              >
                <TrendingUp size={12} style={{ color: '#E61935' }} />
                Trending up
              </span>
            </div>

            <GrowthChart />

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div 
                className="rounded-2xl border p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  background: '#1A1A1E',
                  borderColor: '#2A2A2E'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E61935';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2A2A2E';
                }}
              >
                <p 
                  className="text-xl sm:text-2xl font-bold"
                  style={{ 
                    color: '#E61935',
                    fontFamily: "'Fraunces', serif"
                  }}
                >
                  92%
                </p>
                <p 
                  className="mt-1 text-[11px] sm:text-xs leading-relaxed"
                  style={{ 
                    color: '#B0B0B8',
                    fontFamily: "'Manrope', sans-serif"
                  }}
                >
                  Say coaching changed how they interview
                </p>
              </div>
              <div 
                className="rounded-2xl border p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  background: '#1A1A1E',
                  borderColor: '#2A2A2E'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E61935';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2A2A2E';
                }}
              >
                <p 
                  className="text-xl sm:text-2xl font-bold"
                  style={{ 
                    color: '#E61935',
                    fontFamily: "'Fraunces', serif"
                  }}
                >
                  6–12 mo
                </p>
                <p 
                  className="mt-1 text-[11px] sm:text-xs leading-relaxed"
                  style={{ 
                    color: '#B0B0B8',
                    fontFamily: "'Manrope', sans-serif"
                  }}
                >
                  Post-placement support window
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}