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
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
    overlay: "branding",
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
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=80",
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
      "Post-placement Support for 6–12 months (depending on candidate's profile)",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
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

const brandingTags = [
  "Personal Brand Strategy",
  "Executive Presence",
  "Thought Leadership",
];

const chatMessages = [
  { sender: "Career Coach", text: "How's your week so far?", role: "coach" },
  { sender: "Jane", text: "I'm really struggling with my resume", role: "user" },
  {
    sender: "Career Coach",
    text: "You've got this! Let me connect you with our job success coach...",
    role: "coach",
  },
  { sender: "Jane", text: "That would be so helpful, thank you!", role: "user" },
  {
    sender: "Career Coach",
    text: "I've scheduled a session for tomorrow at 10 AM.",
    role: "coach",
  },
];

// How much scroll distance (in viewport heights) is dedicated to each step
const VH_PER_STEP = 1;

/* ---------- Overlays (each loops independently while its step is visible) ---------- */

function BrandingOverlay() {
  const [highlighted, setHighlighted] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % brandingTags.length);
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative md:absolute md:-bottom-8 lg:-bottom-10 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[210px] lg:w-[270px] bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 p-3 sm:p-4 space-y-2 sm:space-y-2.5">
      {brandingTags.map((tag, i) => (
        <span
          key={tag}
          className={`block w-full text-center text-[11px] sm:text-xs lg:text-sm font-medium rounded-full py-1.5 sm:py-2 px-2.5 sm:px-3 transition-all duration-700 ${
            i === highlighted
              ? "bg-[#C81C32] text-white shadow-lg scale-[1.05] rotate-[2deg]"
              : "bg-neutral-800 text-neutral-300 border border-neutral-700 hover:scale-[1.02]"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

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
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative md:absolute md:-bottom-8 lg:-bottom-10 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[210px] lg:w-[270px] bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 p-3 sm:p-4 space-y-2 sm:space-y-2.5">
      {pillTags.map((tag, i) => (
        <span
          key={tag}
          className={`block w-full text-center text-[11px] sm:text-xs lg:text-sm font-medium rounded-full py-1.5 sm:py-2 px-2.5 sm:px-3 transition-all duration-500 ${
            i === highlighted
              ? "bg-[#C81C32] text-white shadow-lg scale-[1.08] -rotate-[1deg]"
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
  const chatContainerRef = useRef(null);

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

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleCount, typing]);

  const nextSender = chatMessages[visibleCount]?.sender;

  return (
    <div className="relative md:absolute md:-bottom-8 lg:-bottom-10 md:left-3 lg:-left-10 mt-3 md:mt-0 w-full md:w-[230px] lg:w-[290px] bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden">
      <div className="bg-[#0B0B0C] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b border-neutral-800">
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C81C32]" />
        <span className="text-white text-xs sm:text-sm font-semibold">Chat</span>
      </div>
      <div
        ref={chatContainerRef}
        className="p-3 sm:p-4 space-y-2 sm:space-y-3 h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
      >
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
      setActiveStep(pillars[index].step);
      return;
    }

    const viewportHeight = window.innerHeight;
    const wrapperTop = window.pageYOffset + wrapper.getBoundingClientRect().top;
    const maxScroll = wrapper.offsetHeight - viewportHeight;
    const segment = maxScroll / pillars.length;

    const target = wrapperTop + index * segment + segment * 0.3;

    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const active = pillars.find((p) => p.step === activeStep);

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

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

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 9999px;
        }

        @media (prefers-reduced-motion: reduce) {
          .pillar-fade, .chat-msg-in, .typing-dot {
            animation: none !important;
          }
        }
      `}</style>

      <section className="sticky top-0 min-h-screen w-full bg-[#0b0b0c] flex flex-col justify-center px-3 sm:px-4 overflow-hidden py-4 sm:py-6 md:py-0">
        <div className="max-w-6xl mx-auto w-full">
          {/* Step navigation - mobile optimized */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-6 md:mb-10 mt-2 sm:mt-4 md:mt-8">
            {pillars.map((p, i) => {
              const isActive = p.step === activeStep;
              return (
                <button
                  key={p.step}
                  onClick={() => scrollToStep(i)}
                  className={`relative overflow-hidden flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-300 border ${
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
                  <span className="whitespace-nowrap hidden xs:inline">
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

          {/* Content - responsive grid */}
          <div
            key={activeStep}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center pillar-fade"
          >
            {/* Left: text - full width on mobile */}
            <div className="order-1 lg:order-none">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-5">
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

              <button
                onClick={handleContactClick}
                className="mt-5 sm:mt-6 md:mt-8 inline-flex items-center gap-2 bg-[#C81C32] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:bg-[#A6152A]"
              >
                Speak To Our Team
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Right: image + overlay - responsive */}
            <div className="order-2 lg:order-none relative flex flex-col justify-end pb-0 md:pb-8 lg:pb-16">
              {active.overlay === "pills" && <DiamondPattern />}

              <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] object-cover rounded-2xl shadow-2xl"
                />

                {active.overlay === "branding" && <BrandingOverlay />}
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