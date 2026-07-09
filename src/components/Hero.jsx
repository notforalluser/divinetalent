import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Updated Dark Theme Design Tokens (Deep Black / Red Accent / Crisp White)
 * --bg           #0a0a0a    deep near-black background
 * --surface      #121212    card / section surfaces
 * --surface-dim  #1a1a1a    subtle dividers / hover layers
 * --ink          #f5f5f7    bright white / primary text
 * --ink-light    #d4d4d8    secondary text / muted
 * --red          #ee1936    signature accent
 * --red-dark     #e61935    hover / active red
 * --red-glow     #ff2a4a    subtle glow / highlight variant
 */

const cards = [
  {
    label: "Service 01",
    title: "Profile Rebranding",
    copy: "A portfolio and profile that reads senior, not scattered.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=80",
        caption: "Portfolio Review",
      },
      {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
        caption: "Profile Strategy Call",
      },
    ],
  },
  {
    label: "Service 02",
    title: "Mentorship",
    copy: "Weekly sessions with engineers who've hired for your target role.",
    featured: true,
    images: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80",
        caption: "1:1 Mentor Sessions",
      },
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=80",
        caption: "Career Roadmap Planning",
      },
    ],
  },
  {
    label: "Service 03",
    title: "Technical Guidance",
    copy: "System design and code review, sharpened for real interviews.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
        caption: "System Design Review",
      },
      {
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80",
        caption: "Mock Interview Practice",
      },
    ],
  },
];

const services = [
  "Profile Rebranding",
  "Mentorship",
  "Technical Guidance",
  "Job Application",
  "Interview Preparation",
];
const marqueeItems = [...services, ...services];

function ImageSlider({ images, intervalMs = 4200 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, total, intervalMs]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.caption}
          className={`slider-img absolute inset-0 w-full h-full object-cover ${
            i === index ? "slider-img-active" : "slider-img-hidden"
          }`}
        />
      ))}

      {/* Dark gradient overlay for better caption legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0) 50%, rgba(10,10,10,0.85) 92%)",
        }}
      />

      {/* caption */}
      <p
        key={`caption-${index}`}
        className="caption-in absolute left-5 right-5 bottom-11 font-body text-[11px] tracking-[0.16em] uppercase"
        style={{ color: "#f5f5f7" }}
      >
        {images[index].caption}
      </p>

      {/* stories-style progress bars - red accent */}
      <div className="absolute left-5 right-5 bottom-5 flex gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className="relative h-[3px] flex-1 rounded-full overflow-hidden"
            style={{ background: "rgba(245,245,247,0.18)" }}
          >
            {i < index && (
              <span
                className="absolute inset-0 rounded-full"
                style={{ background: "#ee1936" }}
              />
            )}
            {i === index && (
              <span
                key={`fill-${index}-${paused}`}
                className="slide-progress absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: "#ee1936",
                  animationDuration: `${intervalMs}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    let frameId;

    const updateColors = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (containerRect) {
        const centerX = containerRect.left + containerRect.width / 2;

        itemRefs.current.forEach((el) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;
          const distance = Math.abs(itemCenter - centerX);
          const t = Math.min(distance / (rect.width * 1.4), 1);

          // Center items glow red, others stay bright white with subtle fade
          el.style.color = t < 0.6 ? "#ee1936" : "#f5f5f7";
          el.style.opacity = String(1 - t * 0.45);
          el.style.transform = `scale(${1 - t * 0.06})`;
        });
      }

      frameId = requestAnimationFrame(updateColors);
    };

    frameId = requestAnimationFrame(updateColors);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      className="w-full py-10 md:py-18 overflow-hidden relative"
      style={{ background: "#0a0a0a" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Manrope', sans-serif; }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 26s linear infinite;
        }
        .marquee-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }

        @keyframes draw-line {
          from { stroke-dashoffset: 1200; }
          to { stroke-dashoffset: 0; }
        }
        .ascend-path {
          stroke-dasharray: 1200;
          animation: draw-line 2.2s ease-out forwards;
        }

        .service-card:focus-visible {
          outline: 2px solid #ee1936;
          outline-offset: 4px;
        }

        /* Image slider — crossfade */
        .slider-img {
          transition: opacity 1.1s ease-in-out;
        }
        .slider-img-active { opacity: 1; }
        .slider-img-hidden { opacity: 0; }

        @keyframes caption-in-anim {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .caption-in { animation: caption-in-anim 0.6s ease-out; }

        @keyframes slide-progress-anim {
          from { width: 0%; }
          to { width: 100%; }
        }
        .slide-progress {
          width: 0%;
          animation-name: slide-progress-anim;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          .ascend-path { animation: none; stroke-dashoffset: 0; }
          .caption-in { animation: none; }
          .slide-progress { animation: none; width: 100%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Heading with signature ascension line */}
        <div className="relative">
          <svg
            className="absolute -left-4 -bottom-16 md:-bottom-24 w-[110%] h-24 md:h-36 pointer-events-none"
            viewBox="0 0 800 200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="ascend-path"
              d="M0 180 C 180 180, 220 60, 400 90 C 560 116, 620 20, 800 10"
              stroke="#ee1936"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <h1
            className="font-display relative text-white text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontWeight: 500, color: "#f5f5f7" }}
          >
            <span style={{ fontStyle: "italic", fontWeight: 500, color: "#ee1936" }}>
              Enhance
            </span>{" "}
            your career
          </h1>
        </div>

        {/* Sliding Services - Dark Marquee */}
        <div
          ref={containerRef}
          className="marquee-wrap marquee-fade relative mt-16 md:mt-20 overflow-hidden"
        >
          <div className="marquee-track flex w-max gap-16 md:gap-24 items-center py-2">
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-16">
                <h2
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="font-display whitespace-nowrap transition-all duration-200"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                    fontWeight: 500,
                    color: "#d4d4d8",
                  }}
                >
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Image Cards - Dark surfaces */}
        <div className="mt-10 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end">
          {cards.map((item, index) => {
            const isFeatured = item.featured;
            const asymmetricRadius =
              index === 0
                ? "rounded-tl-[56px] rounded-br-[56px] rounded-tr-xl rounded-bl-xl"
                : "rounded-tr-[56px] rounded-bl-[56px] rounded-tl-xl rounded-br-xl";

            return (
              <div
                key={index}
                tabIndex={0}
                className={`service-card group relative overflow-hidden transition-all duration-500 border border-white/10 ${
                  isFeatured
                    ? "md:-mt-12 rounded-[32px] shadow-2xl z-10 ring-2 ring-[#ee1936]/70"
                    : `${asymmetricRadius} shadow-xl`
                }`}
                style={{
                  background: "#121212",
                  boxShadow: isFeatured
                    ? "0 30px 70px -15px rgba(238, 25, 54, 0.25), 0 10px 30px -10px rgba(0,0,0,0.6)"
                    : "0 20px 45px -15px rgba(0,0,0,0.5)",
                }}
              >
                <div className={isFeatured ? "h-[280px] md:h-[350px]" : "h-[260px] md:h-[300px]"}>
                  <ImageSlider images={item.images} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;