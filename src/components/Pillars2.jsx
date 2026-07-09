// import { useEffect, useRef, useState } from "react";
// import { ArrowRight, CircleDot, MessageCircle } from "lucide-react";

// const pillars = [
//   {
//     step: 1,
//     title: "Career Branding",
//     shortTitle: "Branding",
//     bullets: [
//       "Expert-led Resume Building & Optimization (ATS-friendly, industry-specific)",
//       "Resume Understanding Session to confidently present experience & skills",
//       "LinkedIn Profile Optimization for professional visibility",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&auto=format&fit=crop&q=80",
//     overlay: "none",
//   },
//   {
//     step: 2,
//     title: "Skill Development & Training",
//     shortTitle: "Skill Training",
//     bullets: [
//       "Soft Skills & Communication Training",
//       "Technical/Domain Training (based on candidate background & industry trends)",
//       "Interview Preparation Bootcamp (behavioral + technical mock interviews)",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900&auto=format&fit=crop&q=80",
//     overlay: "checklist",
//   },
//   {
//     step: 3,
//     title: "Market Exposure & Placement Support",
//     shortTitle: "Market Exposure",
//     bullets: [
//       "Profile Marketing with Subject Matter Experts (SMEs)",
//       "Direct profile sharing with active clients & MSPs across the USA",
//       "Exclusive access to hidden job opportunities in our partner network",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
//     overlay: "pills",
//   },
//   {
//     step: 4,
//     title: "Ongoing Career Support",
//     shortTitle: "Ongoing Support",
//     bullets: [
//       "Unlimited Interview Scheduling & Support until placement",
//       "Unlimited Technical Assessment Support",
//       "Dedicated Career Coach/Recruiter for one-on-one guidance",
//       "Job Coverage for 1 Year (guaranteed placement within coverage)",
//       "Post-placement Support for 6–12 months (depending on candidate's profile)",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=900&auto=format&fit=crop&q=80",
//     overlay: "chat",
//   },
// ];

// const pillTags = [
//   "AI-based Job Market Insights",
//   "Certification Guidance",
//   "Networking Opportunities",
//   "Work Authorization",
//   "Compliance Support",
// ];

// const chatMessages = [
//   { sender: "Career Coach", text: "How's your week so far?", role: "coach" },
//   { sender: "Jane", text: "I'm really struggling with my resume", role: "user" },
//   {
//     sender: "Career Coach",
//     text: "You've got this! Let me connect you with our job success coach...",
//     role: "coach",
//   },
// ];

// const VH_PER_STEP = 1;

// /* ---------- Overlays ---------- */

// function ChecklistOverlay({ activeStep }) {
//   return (
//     <div className="relative md:absolute md:-bottom-6 lg:-bottom-8 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[210px] lg:w-[270px] bg-[#121212] rounded-2xl shadow-2xl border border-white/10 p-4 space-y-3">
//       {pillars.map((p) => (
//         <div key={p.step} className="flex items-start gap-3">
//           <span
//             className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
//               p.step === activeStep
//                 ? "bg-[#ee1936] text-white"
//                 : "bg-white/10 text-white/60"
//             }`}
//           >
//             {p.step}
//           </span>
//           <p className="text-sm font-medium text-white/90 leading-snug">
//             {p.title}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function PillsOverlay() {
//   const [highlighted, setHighlighted] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setHighlighted((prev) => (prev + 1) % pillTags.length);
//     }, 1400);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="relative md:absolute md:-bottom-8 lg:-bottom-10 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[210px] lg:w-[270px] bg-[#121212] rounded-2xl shadow-2xl border border-white/10 p-4 space-y-2.5">
//       {pillTags.map((tag, i) => (
//         <span
//           key={tag}
//           className={`block w-full text-center text-sm font-medium rounded-full py-2.5 px-4 transition-all duration-500 border ${
//             i === highlighted
//               ? "bg-white text-black shadow-lg scale-[1.02]"
//               : "bg-white/5 text-white/80 border-white/10"
//           }`}
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
//   );
// }

// function ChatOverlay() {
//   const [visibleCount, setVisibleCount] = useState(0);
//   const [typing, setTyping] = useState(false);

//   useEffect(() => {
//     let cancelled = false;
//     const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

//     async function loop() {
//       while (!cancelled) {
//         setVisibleCount(0);
//         setTyping(false);
//         await sleep(700);

//         for (let i = 0; i < chatMessages.length; i++) {
//           if (cancelled) return;
//           setTyping(true);
//           await sleep(1100);
//           if (cancelled) return;
//           setTyping(false);
//           setVisibleCount(i + 1);
//           await sleep(1500);
//         }
//         if (cancelled) return;
//         await sleep(2400);
//       }
//     }

//     loop();
//     return () => { cancelled = true; };
//   }, []);

//   const nextSender = chatMessages[visibleCount]?.sender;

//   return (
//     <div className="relative md:absolute md:-bottom-8 lg:-bottom-10 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[230px] lg:w-[290px] bg-[#121212] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
//       <div className="bg-black px-4 py-3 flex items-center gap-2 border-b border-white/10">
//         <MessageCircle className="w-4 h-4 text-[#ee1936]" />
//         <span className="text-white text-sm font-semibold">Live Career Chat</span>
//       </div>
//       <div className="p-4 space-y-3 min-h-[150px]">
//         {chatMessages.slice(0, visibleCount).map((m, i) => (
//           <div key={i} className="chat-msg-in">
//             <p className="text-xs font-medium text-white/60 mb-1">{m.sender}</p>
//             <p
//               className={`inline-block text-sm rounded-2xl rounded-tl-none px-3.5 py-2.5 ${
//                 m.role === "coach"
//                   ? "bg-white text-black"
//                   : "bg-white/10 text-white"
//               }`}
//             >
//               {m.text}
//             </p>
//           </div>
//         ))}

//         {typing && (
//           <div className="chat-msg-in">
//             <p className="text-xs font-medium text-white/60 mb-1">{nextSender}</p>
//             <span className="inline-flex items-center gap-1.5 bg-white/10 rounded-2xl rounded-tl-none px-4 py-2.5">
//               <span className="typing-dot" />
//               <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
//               <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function DiamondPattern() {
//   return (
//     <svg
//       className="pointer-events-none absolute -top-8 -right-8 lg:-top-10 lg:-right-10 w-28 h-28 lg:w-56 lg:h-56 opacity-10 -z-10 hidden sm:block"
//       viewBox="0 0 200 200"
//       fill="none"
//     >
//       {[0, 1, 2].map((row) =>
//         [0, 1, 2].map((col) => (
//           <rect
//             key={`${row}-${col}`}
//             x={col * 45}
//             y={row * 45}
//             width="34"
//             height="34"
//             rx="4"
//             transform={`rotate(45 ${col * 45 + 17} ${row * 45 + 17})`}
//             fill="none"
//             stroke="#ee1936"
//             strokeWidth="1.5"
//             opacity="0.25"
//           />
//         ))
//       )}
//     </svg>
//   );
// }

// /* ---------- Main Component ---------- */

// export default function Pillars2() {
//   const [activeStep, setActiveStep] = useState(1);
//   const [segmentProgress, setSegmentProgress] = useState(0);
//   const [scrollDisabled, setScrollDisabled] = useState(false);
//   const wrapperRef = useRef(null);
//   const tickingRef = useRef(false);

//   useEffect(() => {
//     const computeActiveStep = () => {
//       tickingRef.current = false;
//       const wrapper = wrapperRef.current;
//       if (!wrapper) return;

//       const viewportHeight = window.innerHeight;
//       const rect = wrapper.getBoundingClientRect();
//       const wrapperHeight = rect.height;
//       const maxScroll = wrapperHeight - viewportHeight;

//       if (maxScroll <= 0) {
//         setScrollDisabled(true);
//         return;
//       }
//       setScrollDisabled(false);

//       const scrolledIntoWrapper = Math.min(Math.max(-rect.top, 0), maxScroll);
//       const progress = scrolledIntoWrapper / maxScroll;
//       const index = Math.min(
//         pillars.length - 1,
//         Math.floor(progress * pillars.length)
//       );

//       setActiveStep(pillars[index].step);
//       setSegmentProgress((progress * pillars.length) % 1);
//     };

//     const handleScroll = () => {
//       if (!tickingRef.current) {
//         tickingRef.current = true;
//         requestAnimationFrame(computeActiveStep);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   const scrollToStep = (index) => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;

//     if (scrollDisabled) {
//       setActiveStep(pillars[index].step);
//       return;
//     }

//     const viewportHeight = window.innerHeight;
//     const wrapperTop = window.pageYOffset + wrapper.getBoundingClientRect().top;
//     const maxScroll = wrapper.offsetHeight - viewportHeight;
//     const segment = maxScroll / pillars.length;
//     const target = wrapperTop + index * segment + segment * 0.3;

//     window.scrollTo({ top: target, behavior: "smooth" });
//   };

//   const active = pillars.find((p) => p.step === activeStep);

//   return (
//     <div
//       ref={wrapperRef}
//       style={{ height: `${pillars.length * VH_PER_STEP * 100}vh` }}
//       className="relative bg-[#0a0a0a]"
//     >
//       <style>{`
//         @keyframes pillarFadeIn {
//           from { opacity: 0; transform: translateY(12px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .pillar-fade { animation: pillarFadeIn 0.5s ease forwards; }

//         @keyframes chatMsgIn {
//           from { opacity: 0; transform: translateY(8px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .chat-msg-in { animation: chatMsgIn 0.35s ease forwards; }

//         @keyframes typingBounce {
//           0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
//           30% { transform: translateY(-4px); opacity: 1; }
//         }
//         .typing-dot {
//           width: 5px; height: 5px; border-radius: 9999px;
//           background: #ee1936; display: inline-block;
//           animation: typingBounce 1.2s infinite ease-in-out;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .pillar-fade, .chat-msg-in, .typing-dot { animation: none !important; }
//         }
//       `}</style>

//       <section className="sticky top-0 min-h-screen w-full bg-[#0a0a0a] flex flex-col justify-center px-4 overflow-hidden py-8 md:py-0">
//         <div className="max-w-6xl mx-auto w-full">
//           {/* Step navigation */}
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 mt-6">
//             {pillars.map((p, i) => {
//               const isActive = p.step === activeStep;
//               return (
//                 <button
//                   key={p.step}
//                   onClick={() => scrollToStep(i)}
//                   className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
//                     isActive
//                       ? "bg-red-600 text-white border-red-400 shadow-xl"
//                       : "bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:text-white"
//                   }`}
//                 >
//                   <span
//                     className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
//                       isActive ? "bg-black text-white" : "bg-white/10 text-white/70"
//                     }`}
//                   >
//                     {p.step}
//                   </span>
//                   <span className="whitespace-nowrap">{p.shortTitle}</span>

//                   {/* {isActive && !scrollDisabled && (
//                     <span
//                       className="absolute bottom-0 left-0 h-[3px] bg-[#ee1936] transition-all duration-150"
//                       style={{ width: `${segmentProgress * 100}%` }}
//                     />
//                   )} */}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Content */}
//           <div
//             key={activeStep}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center pillar-fade"
//           >
//             {/* Left: Text Content */}
//             <div>
//               <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
//                 {active.title}
//               </h3>

//               <ul className="space-y-1">
//                 {active.bullets.map((bullet, i) => (
//                   <li
//                     key={i}
//                     className={`flex items-start gap-3 py-3 text-white/80 text-[15px] leading-relaxed border-b border-white/10 last:border-none`}
//                   >
//                     <CircleDot className="w-4 h-4 text-[#ee1936] shrink-0 mt-1" />
//                     <span>{bullet}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-8 inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
//                 Speak To Our Team
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>

//             {/* Right: Image + Overlay */}
//             <div className="relative flex justify-center md:justify-end">
//               {active.overlay === "pills" && <DiamondPattern />}

//               <div className="relative w-full max-w-md md:max-w-lg">
//                 <img
//                   src={active.image}
//                   alt={active.title}
//                   className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
//                 />

//                 {active.overlay === "checklist" && <ChecklistOverlay activeStep={activeStep} />}
//                 {active.overlay === "pills" && <PillsOverlay />}
//                 {active.overlay === "chat" && <ChatOverlay />}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





import { useEffect, useRef, useState } from "react";
import { ArrowRight, CircleDot, MessageCircle } from "lucide-react";

const pillars = [
  {
    step: 1,
    title: "Career Branding",
    shortTitle: "Branding",
    bullets: [
      "Expert-led Resume Building & Optimization (ATS-friendly, industry-specific)",
      "Resume Understanding Session to confidently present experience & skills",
      "LinkedIn Profile Optimization for professional visibility",
    ],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&auto=format&fit=crop&q=80",
    overlay: "none",
  },
  {
    step: 2,
    title: "Skill Development & Training",
    shortTitle: "Skill Training",
    bullets: [
      "Soft Skills & Communication Training",
      "Technical/Domain Training (based on candidate background & industry trends)",
      "Interview Preparation Bootcamp (behavioral + technical mock interviews)",
    ],
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900&auto=format&fit=crop&q=80",
    overlay: "checklist",
  },
  {
    step: 3,
    title: "Market Exposure & Placement Support",
    shortTitle: "Market Exposure",
    bullets: [
      "Profile Marketing with Subject Matter Experts (SMEs)",
      "Direct profile sharing with active clients & MSPs across the USA",
      "Exclusive access to hidden job opportunities in our partner network",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
    overlay: "pills",
  },
  {
    step: 4,
    title: "Ongoing Career Support",
    shortTitle: "Ongoing Support",
    bullets: [
      "Unlimited Interview Scheduling & Support until placement",
      "Unlimited Technical Assessment Support",
      "Dedicated Career Coach/Recruiter for one-on-one guidance",
      "Job Coverage for 1 Year (guaranteed placement within coverage)",
      "Post-placement Support for 6\u201312 months (depending on candidate's profile)",
    ],
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=900&auto=format&fit=crop&q=80",
    overlay: "chat",
  },
];

const pillTags = [
  "AI-based Job Market Insights",
  "Certification Guidance",
  "Networking Opportunities",
  "Work Authorization",
  "Compliance Support",
];

const chatMessages = [
  { sender: "Career Coach", text: "How's your week so far?", role: "coach" },
  { sender: "Jane", text: "I'm really struggling with my resume", role: "user" },
  {
    sender: "Career Coach",
    text: "You've got this! Let me connect you with our job success coach...",
    role: "coach",
  },
];

// How much scroll distance (in viewport heights) is dedicated to each step
const VH_PER_STEP = 1;

/* ---------- Overlays (each loops independently while its step is visible) ---------- */

function ChecklistOverlay({ activeStep }) {
  return (
    <div className="relative md:absolute md:-bottom-6 lg:-bottom-8 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[210px] lg:w-[270px] bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 p-3 sm:p-4 lg:p-5 space-y-2 sm:space-y-3">
      {pillars.map((p) => (
        <div key={p.step} className="flex items-start gap-2.5 sm:gap-3">
          <span
            className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold transition-colors duration-500 ${
              p.step === activeStep
                ? "bg-[#C81C32] text-white"
                : "bg-neutral-700 text-neutral-300"
            }`}
          >
            {p.step}
          </span>
          <p className="text-xs sm:text-sm font-semibold text-neutral-200 leading-snug">
            {p.title}
          </p>
        </div>
      ))}
    </div>
  );
}

function PillsOverlay() {
  const [highlighted, setHighlighted] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % pillTags.length);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative md:absolute md:-bottom-8 lg:-bottom-10 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[210px] lg:w-[270px] bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 p-3 sm:p-4 space-y-2 sm:space-y-2.5">
      {pillTags.map((tag, i) => (
        <span
          key={tag}
          className={`block w-full text-center text-[11px] sm:text-xs lg:text-sm font-medium rounded-full py-1.5 sm:py-2 px-2.5 sm:px-3 transition-all duration-500 ${
            i === highlighted
              ? "bg-[#C81C32] text-white shadow-lg scale-[1.03]"
              : "bg-neutral-800 text-neutral-300 border border-neutral-700"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ChatOverlay() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    async function loop() {
      while (!cancelled) {
        setVisibleCount(0);
        setTyping(false);
        await sleep(700);

        for (let i = 0; i < chatMessages.length; i++) {
          if (cancelled) return;
          setTyping(true);
          await sleep(1100);
          if (cancelled) return;
          setTyping(false);
          setVisibleCount(i + 1);
          await sleep(1500);
        }

        if (cancelled) return;
        await sleep(2400);
      }
    }

    loop();
    return () => {
      cancelled = true;
    };
  }, []);

  const nextSender = chatMessages[visibleCount]?.sender;

  return (
    <div className="relative md:absolute md:-bottom-8 lg:-bottom-10 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[230px] lg:w-[290px] bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden">
      <div className="bg-[#0B0B0C] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C81C32]" />
        <span className="text-white text-xs sm:text-sm font-semibold">Chat</span>
      </div>
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 min-h-[130px] sm:min-h-[150px]">
        {chatMessages.slice(0, visibleCount).map((m, i) => (
          <div key={i} className="chat-msg-in">
            <p className="text-[10px] sm:text-xs font-semibold text-neutral-300 mb-1">
              {m.sender}
            </p>
            <p
              className={`inline-block text-[11px] sm:text-xs lg:text-sm rounded-2xl rounded-tl-none px-2.5 sm:px-3 py-1.5 sm:py-2 ${
                m.role === "coach"
                  ? "bg-[#C81C32] text-white"
                  : "bg-neutral-800 text-neutral-200"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className="chat-msg-in">
            <p className="text-[10px] sm:text-xs font-semibold text-neutral-300 mb-1">
              {nextSender}
            </p>
            <span className="inline-flex items-center gap-1 bg-neutral-800 rounded-2xl rounded-tl-none px-2.5 sm:px-3 py-2 sm:py-2.5">
              <span className="typing-dot" />
              <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
              <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function DiamondPattern() {
  return (
    <svg
      className="pointer-events-none absolute -top-8 -right-8 lg:-top-10 lg:-right-10 w-28 h-28 lg:w-56 lg:h-56 opacity-10 -z-10 hidden sm:block"
      viewBox="0 0 200 200"
      fill="none"
    >
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 45}
            y={row * 45}
            width="34"
            height="34"
            rx="4"
            transform={`rotate(45 ${col * 45 + 17} ${row * 45 + 17})`}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            opacity="0.3"
          />
        ))
      )}
    </svg>
  );
}

/* ---------- Main component ---------- */

export default function Pillars2() {
  const [activeStep, setActiveStep] = useState(1);
  const [segmentProgress, setSegmentProgress] = useState(0); // 0-1 fill within current step's scroll segment
  const [scrollDisabled, setScrollDisabled] = useState(false); // true if wrapper is too short to scroll-drive
  const wrapperRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const computeActiveStep = () => {
      tickingRef.current = false;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const viewportHeight = window.innerHeight;
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = rect.height;
      const maxScroll = wrapperHeight - viewportHeight;

      if (maxScroll <= 0) {
        // Not enough scroll room (very tall viewport / short content) — degrade gracefully
        setScrollDisabled(true);
        return;
      }
      setScrollDisabled(false);

      const scrolledIntoWrapper = Math.min(Math.max(-rect.top, 0), maxScroll);
      const progress = scrolledIntoWrapper / maxScroll;
      const index = Math.min(
        pillars.length - 1,
        Math.floor(progress * pillars.length)
      );

      setActiveStep(pillars[index].step);
      setSegmentProgress((progress * pillars.length) % 1);
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(computeActiveStep);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToStep = (index) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (scrollDisabled) {
      // nothing to scroll to — just switch directly
      setActiveStep(pillars[index].step);
      return;
    }

    const viewportHeight = window.innerHeight;
    const wrapperTop = window.pageYOffset + wrapper.getBoundingClientRect().top;
    const maxScroll = wrapper.offsetHeight - viewportHeight;
    const segment = maxScroll / pillars.length;

    // land a little past the start of the segment so it doesn't sit on the boundary
    const target = wrapperTop + index * segment + segment * 0.3;

    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const active = pillars.find((p) => p.step === activeStep);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${pillars.length * VH_PER_STEP * 100}vh` }}
      className="relative bg-[#0B0B0C]"
    >
      <style>{`
        @keyframes pillarFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pillar-fade {
          animation: pillarFadeIn 0.5s ease forwards;
        }

        @keyframes chatMsgIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chat-msg-in {
          animation: chatMsgIn 0.35s ease forwards;
        }

        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .typing-dot {
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #FFFFFF;
          display: inline-block;
          animation: typingBounce 1s infinite ease-in-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .pillar-fade, .chat-msg-in, .typing-dot {
            animation: none !important;
          }
        }
      `}</style>

      <section className="sticky top-0 min-h-screen w-full bg-[#0B0B0C] flex flex-col justify-center px-3 sm:px-4 overflow-hidden py-6 sm:py-8 md:py-0">
        <div className="max-w-6xl mx-auto w-full">
          {/* Step navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-10 md:mb-14 mt-4 sm:mt-8 md:mt-10">
            {pillars.map((p, i) => {
              const isActive = p.step === activeStep;
              return (
                <button
                  key={p.step}
                  onClick={() => scrollToStep(i)}
                  className={`relative overflow-hidden flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-[#C81C32] border-[#C81C32] text-white shadow-lg"
                      : "bg-neutral-900 border-neutral-700 text-neutral-400 hover:border-neutral-500"
                  }`}
                >
                  <span
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[11px] font-bold shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-black text-white" : "bg-neutral-700 text-neutral-300"
                    }`}
                  >
                    {p.step}
                  </span>
                  <span className="whitespace-nowrap sm:hidden">
                    {p.shortTitle}
                  </span>
                  <span className="whitespace-nowrap hidden sm:inline">
                    {p.title}
                  </span>

                  {isActive && !scrollDisabled && (
                    <span
                      className="absolute bottom-0 left-0 h-[3px] bg-white/40 transition-[width] duration-150 ease-linear"
                      style={{ width: `${segmentProgress * 100}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div
            key={activeStep}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-10 items-center pillar-fade"
          >
            {/* Left: text */}
            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-5 md:mb-6">
                {active.title}
              </h3>
              <ul className="space-y-0">
                {active.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 sm:gap-3 py-2 sm:py-3 ${
                      i !== active.bullets.length - 1
                        ? "border-b border-neutral-800"
                        : ""
                    }`}
                  >
                    <CircleDot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C81C32] shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="mt-5 sm:mt-8 inline-flex items-center gap-2 bg-[#C81C32] text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:bg-[#A6152A]">
                Speak To Our Team
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Right: image + overlay */}
            <div className="relative flex flex-col md:flex md:justify-end pb-0 md:pb-16">
              {active.overlay === "pills" && <DiamondPattern />}

              <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-auto">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-[150px] sm:h-[220px] md:h-[270px] lg:h-[320px] object-cover rounded-2xl shadow-2xl"
                />

                {active.overlay === "checklist" && (
                  <ChecklistOverlay activeStep={activeStep} />
                )}
                {active.overlay === "pills" && <PillsOverlay />}
                {active.overlay === "chat" && <ChatOverlay />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}