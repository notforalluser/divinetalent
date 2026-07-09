// import { useEffect, useRef, useState } from "react";
// import { ArrowRight, Sparkles } from "lucide-react";

// const services = [
//   {
//     title: "Career Strategy And Planning",
//     description:
//       "We start with a one-on-one discussion to understand your goals, skills, and career vision. Then, we create a clear roadmap tailored just for you.",
//     image:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80",
//     slug: "career-strategy-planning",
//   },
//   {
//     title: "Resume And Profile Rebranding",
//     description:
//       "We rebuild your resume, LinkedIn, and digital footprint from the ground up, making sure it reflects your strengths, achievements, and career focus.",
//     image:
//       "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80",
//     slug: "resume-profile-rebranding",
//   },
//   {
//     title: "Skill Preparation And Personal Mentorship",
//     description:
//       "You'll get access to personalized training plans, mentorship sessions, and mock interviews designed specifically around your target roles.",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
//     slug: "skill-prep-mentorship",
//   },
//   {
//     title: "Custom Job Campaigns",
//     description:
//       "We shortlist and apply to jobs on your behalf based on your strengths and preferences, every opportunity is handpicked, not mass-applied.",
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
//     slug: "custom-job-campaigns",
//   },
//   {
//     title: "Pre-Interview Assistance",
//     description:
//       "From pre-interview pep talks to mock sessions and feedback, our team ensures you walk into interviews prepared and confident.",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
//     slug: "interview-assistance",
//   },
//   {
//     title: "Offer Review And Smooth Onboarding",
//     description:
//       "We help you evaluate offers, negotiate better terms, and guide you through documentation, joining formalities, and background checks.",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80",
//     slug: "offer-review-onboarding",
//   },
// ];

// function Reveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReduced) {
//       setVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.15 }
//     );
//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
//       className={`transition-all duration-700 ease-out ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//     >
//       {children}
//     </div>
//   );
// }

// function ServiceCard({ service, index }) {
//   return (
//     <div className="group relative flex flex-col sm:flex-row gap-6 bg-[#121212] rounded-3xl border border-white/10 shadow-xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-[#ee1936]/30 hover:shadow-2xl hover:-translate-y-1">
//       {/* Decorative numeral */}
//       <span className="pointer-events-none select-none absolute right-6 bottom-6 text-[52px] font-black leading-none text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-300">
//         {String(index + 1).padStart(2, "0")}
//       </span>

//       <div className="relative shrink-0 w-full sm:w-48 h-52 sm:h-44 rounded-2xl overflow-hidden">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
//       </div>

//       <div className="relative z-10 flex flex-col flex-1">
//         <h3 className="font-display text-white text-xl md:text-2xl font-semibold leading-tight tracking-tight group-hover:text-[#f5f5f7] transition-colors">
//           {service.title}
//         </h3>

//         <p className="mt-4 text-white/70 text-[15px] leading-relaxed flex-1">
//           {service.description}
//         </p>

//         <a
//           href={`/services/${service.slug}`}
//           className="mt-6 self-start inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-3 group-hover:ring-2 group-hover:ring-offset-4 group-hover:ring-offset-[#121212] group-hover:ring-[#ee1936]/40"
//         >
//           Learn More
//           <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function Services2() {
//   return (
//     <section className="w-full bg-[#0a0a0a] py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-t border-white/10">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-14 max-w-2xl">
//           <div className="flex items-center gap-3 mb-4">
//             <Sparkles className="w-5 h-5 text-[#ee1936]" />
//             <span className="uppercase tracking-[0.125em] text-sm font-medium text-white/70">
//               Our Process
//             </span>
//           </div>

//           <h2 className="font-display text-white text-4xl sm:text-5xl tracking-tighter font-semibold leading-none">
//             How We Empower <span className="text-[#ee1936]">Your Career</span>
//           </h2>

//           <p className="mt-6 text-white/70 text-[15px] sm:text-base leading-relaxed max-w-xl">
//             Your dream deserves more than generic support. We tailor every step to your unique story — 
//             giving you clarity, confidence, and a clear path to a secure job in the United States.
//           </p>

//           <div className="mt-6 w-20 h-0.5 bg-gradient-to-r from-[#ee1936] to-transparent rounded-full" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
//           {services.map((service, index) => (
//             <Reveal key={service.slug} delay={(index % 2) * 100}>
//               <ServiceCard service={service} index={index} />
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Career Strategy And Planning",
    description:
      "We start with a one-on-one discussion to understand your goals, skills, and career vision. Then, we create a clear roadmap tailored just for you.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80",
    slug: "career-strategy-planning",
  },
  {
    title: "Resume And Profile Rebranding",
    description:
      "We rebuild your resume, LinkedIn, and digital footprint from the ground up, making sure it reflects your strengths, achievements, and career focus.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80",
    slug: "resume-profile-rebranding",
  },
  {
    title: "Skill Preparation And Personal Mentorship",
    description:
      "You'll get access to personalized training plans, mentorship sessions, and mock interviews designed specifically around your target roles.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    slug: "skill-prep-mentorship",
  },
  {
    title: "Custom Job Campaigns",
    description:
      "We shortlist and apply to jobs on your behalf based on your strengths and preferences, every opportunity is handpicked, not mass-applied.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
    slug: "custom-job-campaigns",
  },
  {
    title: "Pre-Interview Assistance",
    description:
      "From pre-interview pep talks to mock sessions and feedback, our team ensures you walk into interviews prepared and confident.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    slug: "interview-assistance",
  },
  {
    title: "Offer Review And Smooth Onboarding",
    description:
      "We help you evaluate offers, negotiate better terms, and guide you through documentation, joining formalities, and background checks.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80",
    slug: "offer-review-onboarding",
  },
];

function Reveal({ children, delay = 0 }) {
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
      }`}
    >
      {children}
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <div className="group relative flex flex-col sm:flex-row gap-5 bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-[#C81C32]/50 hover:shadow-[0_18px_36px_rgba(0,0,0,0.6)] hover:-translate-y-1">
      {/* faint decorative numeral */}
      <span className="pointer-events-none select-none absolute right-2 bottom-2 text-[40px] font-black leading-none text-white/[0.05] group-hover:text-white/[0.08] transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative shrink-0 w-full sm:w-40 h-44 sm:h-40 rounded-xl overflow-hidden z-10">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 flex flex-col">
        <h3 className="font-display text-white font-semibold text-lg md:text-xl leading-snug group-hover:text-[#E63950] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="font-body mt-2.5 text-sm text-neutral-400 leading-relaxed flex-1">
          {service.description}
        </p>
        <a
          href={`/services/${service.slug}`}
          className="font-body mt-4 self-start inline-flex items-center gap-1.5 bg-[#C81C32] text-white font-semibold text-xs px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#A6152A] hover:gap-2.5"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export default function Services2() {
  return (
    <section className="w-full bg-[#0B0B0C] py-10 px-5 sm:px-8 lg:px-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Manrope', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-14 md:mb-16 max-w-2xl">
          <h2 className="font-display text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            How We Empower Your Career
          </h2>
          <p className="font-body mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Your dream deserves more than generic support, so we tailor every
            step to your story! Because every candidate is unique, we craft a
            personalized journey; designed to give you clarity, confidence,
            and a secure job in the States.
          </p>
          <div className="mt-5 w-16 h-1 rounded-full" style={{ background: "#C81C32" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 2) * 120}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}