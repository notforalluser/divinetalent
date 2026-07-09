import { useEffect, useState } from "react";
import { Plus, HelpCircle, Users } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to get placed?",
    answer:
      "Most of our candidates get placed within 2 to 4 months, depending on their background, responsiveness, and interview performance.",
  },
  {
    question: "How can I get started with Divine Talent?",
    answer:
      "Simply schedule a free consultation with us through our website. We'll understand your goals and recommend the best path forward.",
  },
  {
    question: "How is Divine Talent different from other career consultants?",
    answer:
      "We specialize in helping international professionals break into the US job market with tailored strategies, cultural insights, and proven frameworks.",
  },
  {
    question: "Will I get mock interviews and feedback sessions?",
    answer:
      "Definitely. We conduct mock interviews and give actionable feedback so you're fully confident before the real ones.",
  },
  {
    question: "Do you provide support after I land my first job?",
    answer:
      "Yes. Our coaching continues with career growth strategies, workplace success tips, and guidance for long-term advancement.",
  },
  {
    question: "Do you assist with networking and referrals?",
    answer:
      "Yes. We train you in professional networking and help you tap into referral pipelines for better job opportunities.",
  },
];

// The three fixed "slots" images rotate through, expressed as % of the collage box
const slots = [
  { top: "0%", left: "0%", width: "42%", height: "38%", z: 5 }, // top-left
  { top: "26%", left: "32%", width: "55%", height: "54%", z: 10 }, // center, large
  { top: "62%", left: "0%", width: "46%", height: "38%", z: 5 }, // bottom-left
];

const collageImages = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
    alt: "Team celebrating a career win",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&auto=format&fit=crop&q=80",
    alt: "Career coaching session",
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80",
    alt: "Handshake after job offer",
  },
];

const ROTATE_MS = 3600;

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`border-b transition-colors duration-300 ${
        isOpen ? "border-[#E61935]" : "border-[#1A1A1E]"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 text-left py-2 group"
      >
        <span
          className={`font-semibold text-[14.5px] md:text-base leading-snug transition-colors duration-300 ${
            isOpen ? "text-white" : "text-[#F4F3F1] group-hover:text-white"
          }`}
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {item.question}
        </span>
        <span
          className={`shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-[#E61935] rotate-45"
              : "border-[#2A2A2E] group-hover:border-[#E61935]"
          }`}
          style={isOpen ? {
            background: '#E61935'
          } : {
            background: 'transparent'
          }}
        >
          <Plus
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300 ${
              isOpen ? "text-white" : "text-[#B0B0B8]"
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p 
            className="text-sm leading-relaxed pr-8 pb-5 sm:pb-6"
            style={{ 
              color: '#B0B0B8',
              fontFamily: "'Manrope', sans-serif"
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function RotatingCollage() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setRotation((r) => (r + 1) % collageImages.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-[440px] lg:h-[500px]">
      <div 
        className="absolute left-0 top-10 w-[55%] h-[65%] rounded-[40px]"
        style={{ background: '#1A1A1E' }}
      />
      <div 
        className="absolute left-[6%] top-[15%] w-[45%] h-[52%] border-2 rounded-[40px] -z-10"
        style={{ borderColor: 'rgba(230, 25, 53, 0.2)' }}
      />

      {collageImages.map((img, i) => {
        const slot = slots[(i + rotation) % slots.length];
        return (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            style={{
              top: slot.top,
              left: slot.left,
              width: slot.width,
              height: slot.height,
              zIndex: slot.z,
            }}
            className="absolute object-cover rounded-3xl shadow-2xl transition-all duration-[1400ms] ease-in-out"
          />
        );
      })}
    </div>
  );
}

function MobileCollage() {
  return (
    <div className="grid md:hidden grid-cols-2 gap-3">
      <img
        src={collageImages[0].src}
        alt={collageImages[0].alt}
        className="w-full h-36 sm:h-40 object-cover rounded-2xl shadow-2xl"
      />
      <img
        src={collageImages[2].src}
        alt={collageImages[2].alt}
        className="w-full h-36 sm:h-40 object-cover rounded-2xl shadow-2xl"
      />
      <div className="col-span-2 relative">
        <img
          src={collageImages[1].src}
          alt={collageImages[1].alt}
          className="w-full h-44 sm:h-48 object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}

export default function FAQs() {
  // -1 means every FAQ starts collapsed
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="w-full py-10 mb-20 px-5 sm:px-8 lg:px-12 border-t border-[#1A1A1E] border-b border-[#1A1A1E]" style={{ background: '#0A0A0B' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
        {/* Left column: sticks in place on desktop while the FAQ list scrolls,
            then releases naturally once the FAQ column finishes */}
        <div className="md:sticky md:top-16 self-start w-full">
          <div className="hidden md:block">
            <RotatingCollage />
          </div>
          <MobileCollage />
        </div>

        <div className="pb-4">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-snug"
            style={{ 
              color: '#FFFFFF',
              fontFamily: "'Fraunces', serif"
            }}
          >
            Don't Just Get A Job In The US,
          </h2>
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-snug"
            style={{ 
              color: '#FFFFFF',
              fontFamily: "'Fraunces', serif"
            }}
          >
            Build Your <span style={{ color: '#E61935' }}>International</span> Career
          </h2>

          <p 
            className="mt-5 text-sm md:text-[15px] leading-relaxed"
            style={{ 
              color: '#B0B0B8',
              fontFamily: "'Manrope', sans-serif"
            }}
          >
            At Divine Talent, we specialize in helping global talent break
            into the US job market with confidence. From optimizing your
            career strategy to preparing you for international opportunities,
            we're here as your expert partner every step of the way.
          </p>

          <div className="mt-4">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}