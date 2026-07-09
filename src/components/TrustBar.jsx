// export default function TrustBar() {
//   const companies = [
//     "Amazon",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "Meta",
//     "Netflix",
//     "Oracle",
//     "Salesforce",
//     "Adobe",
//     "Intel",
//     "NVIDIA",
//     "Cisco",
//     "IBM",
//     "Tesla",
//     "PayPal",
//     "Walmart",
//     "JPMorgan Chase",
//     "Goldman Sachs",
//     "Accenture",
//     "Deloitte",
//     "EY",
//     "PwC",
//     "KPMG",
//     "Cognizant",
//     "Infosys",
//     "Capgemini",
//     "ServiceNow",
//     "Snowflake",
//     "Uber",
//     "Airbnb",
//   ];

//   return (
//     <section className="overflow-hidden py-7 border-t border-[#1A1A1E] border-b border-[#1A1A1E]" style={{ background: '#0A0A0B' }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

//         @keyframes trustbar-marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .trustbar-track {
//           animation: trustbar-marquee 42s linear infinite;
//         }
//         .trustbar-mask:hover .trustbar-track {
//           animation-play-state: paused;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .trustbar-track {
//             animation: none !important;
//           }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-5 sm:px-6">
//         <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
//           <div className="shrink-0 flex items-center gap-3">
//             <span className="hidden sm:block w-6 h-[2px] rounded-full" style={{ background: '#E61935' }} />
//             <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em]" style={{ 
//               color: '#B0B0B8',
//               fontFamily: "'Manrope', sans-serif"
//             }}>
//               Trusted by candidates placed at
//             </p>
//           </div>

//           <div className="trustbar-mask relative flex-1 overflow-hidden">
//             <div className="trustbar-track flex w-max gap-10 sm:gap-16">
//               {[...companies, ...companies].map((company, index) => (
//                 <span
//                   key={index}
//                   className="whitespace-nowrap text-base sm:text-lg font-semibold transition-colors duration-300"
//                   style={{ 
//                     color: '#B0B0B8',
//                     fontFamily: "'Manrope', sans-serif"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = '#FFFFFF';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = '#B0B0B8';
//                   }}
//                 >
//                   {company}
//                 </span>
//               ))}
//             </div>

//             {/* Left Fade */}
//             <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24" style={{
//               background: 'linear-gradient(to right, #0A0A0B, transparent)'
//             }} />

//             {/* Right Fade */}
//             <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24" style={{
//               background: 'linear-gradient(to left, #0A0A0B, transparent)'
//             }} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





export default function TrustBar() {
  const companies = [
    "Amazon", "Google", "Microsoft", "Apple", "Meta", "Netflix", 
    "Oracle", "Salesforce", "Adobe", "Intel", "NVIDIA", "Cisco", 
    "IBM", "Tesla", "PayPal", "Walmart", "JPMorgan Chase", 
    "Goldman Sachs", "Accenture", "Deloitte", "EY", "PwC", "KPMG", 
    "Cognizant", "Infosys", "Capgemini", "ServiceNow", "Snowflake", 
    "Uber", "Airbnb"
  ];

  return (
    <section className="overflow-hidden bg-[#0a0a0a] py-8 border-t border-white/10 border-b border-white/10">
      <style>{`
        @keyframes trustbar-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trustbar-track {
          animation: trustbar-marquee 45s linear infinite;
        }
        .trustbar-mask:hover .trustbar-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .trustbar-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
          {/* Heading - Consistent with other sections */}
          <div className="shrink-0 flex items-center gap-3">
            <span className="hidden sm:block w-8 h-[2px] bg-[#ee1936] rounded-full" />
            <p className="font-medium text-sm sm:text-base tracking-[0.08em] uppercase text-white/70">
              Trusted by candidates placed at
            </p>
          </div>

          {/* Marquee */}
          <div className="trustbar-mask relative flex-1 overflow-hidden py-1">
            <div className="trustbar-track flex w-max gap-12 sm:gap-16 md:gap-20 items-center">
              {[...companies, ...companies].map((company, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap text-base sm:text-lg md:text-xl font-semibold text-white/60 hover:text-white transition-colors duration-300"
                >
                  {company}
                </span>
              ))}
            </div>

            {/* Fade Gradients */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}