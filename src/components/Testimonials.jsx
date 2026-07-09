// import { Star, Quote, Sparkles, Briefcase } from "lucide-react";

// const rowOneTestimonials = [
//   {
//     text: "Divine Talent made my entire career journey smooth and achievable. Their resume sessions, client connections, and interview support helped me secure my placement at The Rawlings Group. I am truly thankful.",
//     name: "Rohan Rao Rairao",
//     placement: "The Rawlings Group",
//     rating: 4.5,
//   },
//   {
//     text: "The unlimited interview practice and technical support at Divine Talent were a game-changer. I felt well-prepared and confident, which helped me get placed at Wells Fargo through TEKSystems.",
//     name: "Aishwarya Baban Raut",
//     placement: "TEKSystems",
//     rating: 4.5,
//   },
//   {
//     text: "From the very first call, the team understood exactly what role I was aiming for. Their mock interviews and honest feedback made all the difference when I finally sat down with Deloitte.",
//     name: "Priya Nair",
//     placement: "Deloitte",
//     rating: 5,
//   },
//   {
//     text: "I had almost given up after months of silence from recruiters. Divine Talent rebuilt my resume from scratch and within three weeks I had an offer from Cognizant.",
//     name: "Arjun Mehta",
//     placement: "Cognizant",
//     rating: 4.5,
//   },
//   {
//     text: "Their salary negotiation coaching alone was worth it. I walked into my final round at Accenture knowing exactly what to ask for and how to ask it.",
//     name: "Sneha Kulkarni",
//     placement: "Accenture",
//     rating: 4,
//   },
// ];

// const rowTwoTestimonials = [
//   {
//     text: "The LinkedIn branding and profile optimization done by Divine Talent brought me visibility in the market. Their soft skills training gave me the edge I needed to secure my role at Pethealth Inc.",
//     name: "Kanishka Shekhar",
//     placement: "Pethealth Inc.",
//     rating: 4,
//   },
//   {
//     text: "I was switching industries with almost no relevant experience on paper. The team helped me reframe my story, and I landed a role at Infosys within six weeks.",
//     name: "Vikram Desai",
//     placement: "Infosys",
//     rating: 4.5,
//   },
//   {
//     text: "Every session felt personal, never templated. My coach remembered details from previous calls and pushed me toward roles I hadn't even considered, one of which was at IBM.",
//     name: "Meera Iyer",
//     placement: "IBM",
//     rating: 5,
//   },
//   {
//     text: "Divine Talent's mentorship program paired me with someone already working in my target field. That single connection led directly to my offer at Capgemini.",
//     name: "Rahul Verma",
//     placement: "Capgemini",
//     rating: 4,
//   },
//   {
//     text: "I came in with zero interview confidence. The mock rounds were tougher than the real thing, which is exactly why I walked into HCLTech calm and ready.",
//     name: "Neha Joshi",
//     placement: "HCLTech",
//     rating: 4.5,
//   },
// ];

// function getInitials(name) {
//   return name
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((n) => n[0])
//     .join("")
//     .toUpperCase();
// }

// function StarRating({ rating }) {
//   const fullStars = Math.floor(rating);
//   const hasHalf = rating % 1 !== 0;

//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => {
//         if (i < fullStars) {
//           return (
//             <Star key={i} className="w-3.5 h-3.5" style={{ fill: '#E61935', color: '#E61935' }} />
//           );
//         }
//         if (i === fullStars && hasHalf) {
//           return (
//             <div key={i} className="relative w-3.5 h-3.5">
//               <Star className="w-3.5 h-3.5" style={{ color: '#2A2A2E' }} />
//               <div className="overflow-hidden w-1/2 absolute">
//                 <Star className="w-3.5 h-3.5" style={{ fill: '#E61935', color: '#E61935' }} />
//               </div>
//             </div>
//           );
//         }
//         return <Star key={i} className="w-3.5 h-3.5" style={{ color: '#2A2A2E' }} />;
//       })}
//     </div>
//   );
// }

// function TestimonialCard({ item }) {
//   return (
//     <div 
//       className="shrink-0 w-[320px] md:w-[350px] rounded-2xl border-2 p-6 flex flex-col transition-all duration-300 relative overflow-hidden group"
//       style={{
//         background: '#1A1A1E',
//         borderColor: '#2A2A2E'
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.borderColor = '#E61935';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.borderColor = '#2A2A2E';
//       }}
//     >
//       {/* Red accent corner */}
//       <div 
//         className="absolute -top-6 -right-6 w-16 h-16 rounded-full transition-colors duration-300"
//         style={{ background: 'rgba(230, 25, 53, 0.08)' }}
//       />
//       <div 
//         className="absolute -top-3 -right-3 w-8 h-8 rounded-full"
//         style={{ background: 'rgba(230, 25, 53, 0.12)' }}
//       />

//       {/* Red quote icon with background */}
//       <div className="relative z-10">
//         <div 
//           className="inline-flex p-2 rounded-lg transition-colors duration-300"
//           style={{ 
//             background: 'rgba(230, 25, 53, 0.15)',
//           }}
//         >
//           <Quote className="w-5 h-5" style={{ color: '#E61935' }} />
//         </div>
//       </div>

//       <p 
//         className="text-[14.5px] leading-relaxed mt-4 relative z-10 line-clamp-4"
//         style={{ 
//           color: '#F4F3F1',
//           fontFamily: "'Manrope', sans-serif"
//         }}
//       >
//         {item.text}
//       </p>

//       <div className="mt-6 pt-5 border-t flex items-center gap-3 relative z-10" style={{ borderColor: '#2A2A2E' }}>
//         <div 
//           className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg"
//           style={{
//             background: 'linear-gradient(135deg, #E61935, #B31024)',
//             fontFamily: "'Manrope', sans-serif"
//           }}
//         >
//           {getInitials(item.name)}
//         </div>
//         <div className="min-w-0 flex-1">
//           <p 
//             className="font-semibold text-sm truncate"
//             style={{ 
//               color: '#FFFFFF',
//               fontFamily: "'Manrope', sans-serif"
//             }}
//           >
//             {item.name}
//           </p>
//           <div className="flex items-center gap-1.5 mt-1">
//             <Briefcase className="w-3 h-3" style={{ color: '#B0B0B8' }} />
//             <span 
//               className="font-medium text-xs px-2 py-0.5 rounded-full"
//               style={{ 
//                 color: '#B0B0B8',
//                 background: 'rgba(255,255,255,0.05)'
//               }}
//             >
//               {item.placement}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="mt-3 relative z-10 flex items-center justify-between">
//         <StarRating rating={item.rating} />
//         <Sparkles 
//           className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           style={{ color: '#E61935' }}
//         />
//       </div>
//     </div>
//   );
// }

// function MarqueeRow({ items, direction, speedSeconds }) {
//   const doubled = [...items, ...items];

//   return (
//     <div className="relative overflow-hidden py-2">
//       <div
//         className="flex gap-6 w-max"
//         style={{
//           animation: `${
//             direction === "rtl" ? "marquee-rtl" : "marquee-ltr"
//           } ${speedSeconds}s linear infinite`,
//         }}
//       >
//         {doubled.map((item, index) => (
//           <TestimonialCard key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Testimonial() {
//   return (
//     <section className="w-full py-16 overflow-hidden relative border-t border-[#1A1A1E] border-b border-[#1A1A1E]" style={{ background: '#0A0A0B' }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');

//         @keyframes marquee-rtl {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes marquee-ltr {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         {/* Header with red accent */}
//         <div className="text-center mb-12">
//           <div className="inline-block relative">
//             <h2 
//               className="text-3xl md:text-4xl font-extrabold pt-4"
//               style={{
//                 color: '#FFFFFF',
//                 fontFamily: "'Fraunces', serif"
//               }}
//             >
//               What Our <span style={{ color: '#E61935' }}>Professionals</span> Say
//             </h2>
//           </div>
//           <p 
//             className="mt-3 max-w-2xl mx-auto text-sm md:text-base"
//             style={{
//               color: '#B0B0B8',
//               fontFamily: "'Manrope', sans-serif"
//             }}
//           >
//             Connecting thousands of skilled professionals to rewarding careers
//           </p>
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <div className="w-12 h-0.5 rounded-full" style={{ background: '#2A2A2E' }}></div>
//             <div className="w-2 h-2 rounded-full" style={{ background: '#E61935' }}></div>
//             <div className="w-12 h-0.5 rounded-full" style={{ background: '#2A2A2E' }}></div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-6 relative z-10">
//         <MarqueeRow items={rowOneTestimonials} direction="rtl" speedSeconds={38} />
//         <MarqueeRow items={rowTwoTestimonials} direction="ltr" speedSeconds={38} />
//       </div>
//     </section>
//   );
// }

// export default Testimonial;



import { Star, Quote, Sparkles, Briefcase } from "lucide-react";

const rowOneTestimonials = [
  {
    text: "Divine Talent made my entire career journey smooth and achievable. Their resume sessions, client connections, and interview support helped me secure my placement at The Rawlings Group. I am truly thankful.",
    name: "Rohan Rao Rairao",
    placement: "The Rawlings Group",
    rating: 4.5,
  },
  {
    text: "The unlimited interview practice and technical support at Divine Talent were a game-changer. I felt well-prepared and confident, which helped me get placed at Wells Fargo through TEKSystems.",
    name: "Aishwarya Baban Raut",
    placement: "TEKSystems",
    rating: 4.5,
  },
  {
    text: "From the very first call, the team understood exactly what role I was aiming for. Their mock interviews and honest feedback made all the difference when I finally sat down with Deloitte.",
    name: "Priya Nair",
    placement: "Deloitte",
    rating: 5,
  },
  {
    text: "I had almost given up after months of silence from recruiters. Divine Talent rebuilt my resume from scratch and within three weeks I had an offer from Cognizant.",
    name: "Arjun Mehta",
    placement: "Cognizant",
    rating: 4.5,
  },
  {
    text: "Their salary negotiation coaching alone was worth it. I walked into my final round at Accenture knowing exactly what to ask for and how to ask it.",
    name: "Sneha Kulkarni",
    placement: "Accenture",
    rating: 4,
  },
];

const rowTwoTestimonials = [
  {
    text: "The LinkedIn branding and profile optimization done by Divine Talent brought me visibility in the market. Their soft skills training gave me the edge I needed to secure my role at Pethealth Inc.",
    name: "Kanishka Shekhar",
    placement: "Pethealth Inc.",
    rating: 4,
  },
  {
    text: "I was switching industries with almost no relevant experience on paper. The team helped me reframe my story, and I landed a role at Infosys within six weeks.",
    name: "Vikram Desai",
    placement: "Infosys",
    rating: 4.5,
  },
  {
    text: "Every session felt personal, never templated. My coach remembered details from previous calls and pushed me toward roles I hadn't even considered, one of which was at IBM.",
    name: "Meera Iyer",
    placement: "IBM",
    rating: 5,
  },
  {
    text: "Divine Talent's mentorship program paired me with someone already working in my target field. That single connection led directly to my offer at Capgemini.",
    name: "Rahul Verma",
    placement: "Capgemini",
    rating: 4,
  },
  {
    text: "I came in with zero interview confidence. The mock rounds were tougher than the real thing, which is exactly why I walked into HCLTech calm and ready.",
    name: "Neha Joshi",
    placement: "HCLTech",
    rating: 4.5,
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          return (
            <Star key={i} className="w-3.5 h-3.5 fill-[#C81C32] text-[#C81C32]" />
          );
        }
        if (i === fullStars && hasHalf) {
          return (
            <div key={i} className="relative w-3.5 h-3.5">
              <Star className="w-3.5 h-3.5 text-neutral-600 absolute" />
              <div className="overflow-hidden w-1/2 absolute">
                <Star className="w-3.5 h-3.5 fill-[#C81C32] text-[#C81C32]" />
              </div>
            </div>
          );
        }
        return <Star key={i} className="w-3.5 h-3.5 text-neutral-600" />;
      })}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="shrink-0 w-[320px] md:w-[350px] bg-neutral-900 rounded-2xl border-2 border-neutral-800 p-6 flex flex-col transition-all duration-300 relative overflow-hidden group hover:border-[#C81C32]/50">
      {/* Red accent corner */}
      <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#C81C32]/5 rounded-full group-hover:bg-[#C81C32]/10 transition-colors duration-300" />
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#C81C32]/5 rounded-full" />

      {/* Red quote icon with background */}
      <div className="relative z-10">
        <div className="inline-flex p-2 bg-[#C81C32]/10 rounded-lg group-hover:bg-[#C81C32]/20 transition-colors duration-300">
          <Quote className="w-5 h-5 text-[#C81C32]" />
        </div>
      </div>

      <p className="font-body text-neutral-100 text-[14.5px] leading-relaxed mt-4 relative z-10 line-clamp-4">
        {item.text}
      </p>

      <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center gap-3 relative z-10">
        <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#C81C32]/30 to-neutral-900 flex items-center justify-center text-white text-sm font-semibold shadow-lg">
          {getInitials(item.name)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-white font-semibold text-sm truncate">
            {item.name}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <Briefcase className="w-3 h-3 text-neutral-400" />
            <span className="font-body text-neutral-400 font-medium text-xs bg-neutral-800 px-2 py-0.5 rounded-full">
              {item.placement}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 relative z-10 flex items-center justify-between">
        <StarRating rating={item.rating} />
        <Sparkles className="w-3.5 h-3.5 text-[#C81C32] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction, speedSeconds }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="flex gap-6 w-max"
        style={{
          animation: `${
            direction === "rtl" ? "marquee-rtl" : "marquee-ltr"
          } ${speedSeconds}s linear infinite`,
        }}
      >
        {doubled.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <section className="w-full bg-[#0B0B0C] py-16 overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Manrope', sans-serif; }

        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header with red accent */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="font-display text-white text-3xl md:text-4xl font-semibold pt-4">
              What Our <span style={{ fontStyle: "italic", color: "#eb1834" }}>Professionals</span> Say
            </h2>
          </div>
          <p className="font-body text-neutral-200 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Connecting thousands of skilled professionals to rewarding careers
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-12 h-0.5 bg-neutral-800"></div>
            <div className="w-2 h-2 rounded-full" style={{ background: "#C81C32" }}></div>
            <div className="w-12 h-0.5 bg-neutral-800"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <MarqueeRow items={rowOneTestimonials} direction="rtl" speedSeconds={38} />
        <MarqueeRow items={rowTwoTestimonials} direction="ltr" speedSeconds={38} />
      </div>
    </section>
  );
}

export default Testimonial;