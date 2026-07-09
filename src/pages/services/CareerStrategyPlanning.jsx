// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Sparkle,
//   Target,
//   Users,
//   FileText,
//   Clock,
//   CheckCircle,
//   Award,
//   Rocket,
//   Lightbulb,
//   BarChart,
//   Globe,
//   Building,
//   UserCheck,
//   Zap,
//   TrendingUp,
//   Shield,
//   Heart,
//   Star,
//   Quote,
//   ChevronRight,
//   MoveRight,
//   Sparkles
// } from 'lucide-react';

// const RED = "#C81C32";
// const BLACK = "#0B0B0C";

// // Animation variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 32 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.95 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const slideIn = {
//   hidden: { opacity: 0, x: -30 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// function Reveal({ children, className = "", custom = 0, as: Tag = "div" }) {
//   const MotionTag = motion[Tag] || motion.div;
//   return (
//     <MotionTag
//       className={className}
//       variants={fadeUp}
//       custom={custom}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-60px" }}
//     >
//       {children}
//     </MotionTag>
//   );
// }

// function FeatureCard({ icon: Icon, title, description, index }) {
//   return (
//     <Reveal custom={index}>
//       <motion.div
//         whileHover={{ y: -6 }}
//         transition={{ duration: 0.3 }}
//         className="group relative overflow-hidden rounded-2xl border border-black/6 bg-white p-8 transition-all duration-300 hover:shadow-2xl"
//       >
//         <div
//           className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
//           style={{ backgroundColor: RED }}
//           aria-hidden
//         />
        
//         <div className="flex items-start gap-4">
//           <div
//             className="flex-shrink-0 rounded-xl p-3"
//             style={{ backgroundColor: `${RED}08` }}
//           >
//             <Icon className="w-6 h-6" style={{ color: RED }} />
//           </div>
//           <div>
//             <h3
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="text-lg font-medium leading-snug"
//             >
//               {title}
//             </h3>
//             <p className="mt-2 text-sm leading-relaxed text-black/55">{description}</p>
//           </div>
//         </div>
//       </motion.div>
//     </Reveal>
//   );
// }

// export function CareerStrategyPlanningPage() {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const features = [
//     {
//       icon: Target,
//       title: "Skill + Interest Discovery",
//       description: "We begin with deep-dive sessions that decode your experience, passions, and values. You won't fill a boring form. You'll have an expert understand your 'why' and 'what's possible.'"
//     },
//     {
//       icon: BarChart,
//       title: "Market & Role Matching",
//       description: "Next, we map your profile to current and emerging roles in tech; from Data Product Manager to AI Business Analyst, based on hiring trends, growth rate, and your personal fit."
//     },
//     {
//       icon: Clock,
//       title: "30-60-90 Day Action Blueprint",
//       description: "Get a battle-ready plan: what to learn, how to build proof (projects, certs, GitHub, blogs), when to apply, and what to expect. No fluff. Just clear next steps."
//     }
//   ];

//   return (
//     <main
//       style={{ fontFamily: "'Inter', sans-serif", color: BLACK, backgroundColor: "#FFFFFF" }}
//       className="w-full overflow-x-hidden"
//     >
//       {/* -------- HERO -------- */}
//       <section ref={heroRef} className="relative bg-white pt-8 pb-16 md:pb-24 overflow-hidden">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-[0.05] blur-3xl"
//           style={{ backgroundColor: RED }}
//         />
//         <div
//           aria-hidden
//           className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full opacity-[0.04] blur-3xl"
//           style={{ backgroundColor: RED }}
//         />

//         <motion.div
//           style={{ y: heroY, opacity: heroOpacity }}
//           className="relative mx-auto max-w-5xl px-6 text-center md:px-10"
//         >
//           <Reveal>
//             <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/5 px-4 py-1.5 text-xs font-medium text-black/60 backdrop-blur-sm">
//               <Sparkle className="w-3.5 h-3.5" style={{ color: RED }} />
//               <span>Career Strategy</span>
//             </div>
//           </Reveal>

//           <Reveal custom={1}>
//             <h1
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-5 text-[2.8rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
//             >
//               Career Strategy <br />
//               <span className="relative inline-block">
//                 <span className="italic" style={{ color: RED }}>And Planning</span>
//                 <svg
//                   className="absolute -bottom-2 left-0 w-full"
//                   height="12"
//                   viewBox="0 0 300 12"
//                   preserveAspectRatio="none"
//                   aria-hidden
//                 >
//                   <motion.path
//                     d="M2 8 C 80 2, 220 2, 298 8"
//                     stroke={RED}
//                     strokeWidth="3.5"
//                     fill="none"
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0 }}
//                     whileInView={{ pathLength: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
//                   />
//                 </svg>
//               </span>
//             </h1>
//           </Reveal>

//           <Reveal custom={2}>
//             <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
//               Every tech journey starts with a question: <span className="font-semibold text-black/80">"What's next?"</span>
//               <br />
//               At Divine Talent, we bring clarity where there's chaos.
//             </p>
//           </Reveal>

//           <Reveal custom={3} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
//               style={{ backgroundColor: BLACK }}
//             >
//               Start Now
//               <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//             <a
//               href="#features"
//               className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
//               style={{ border: `1.5px solid ${BLACK}15`, color: BLACK }}
//             >
//               Explore More
//               <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>
//           </Reveal>
//         </motion.div>
//       </section>

//       {/* -------- INTRODUCTION -------- */}
//       <section className="bg-white pb-16 md:pb-20 -mt-6 md:-mt-10 relative z-10">
//         <div className="mx-auto max-w-4xl px-6 md:px-10">
//           <Reveal>
//             <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg md:p-10">
//               <div className="flex items-start gap-4">
//                 <div
//                   className="flex-shrink-0 rounded-xl p-3"
//                   style={{ backgroundColor: `${RED}08` }}
//                 >
//                   <Lightbulb className="w-6 h-6" style={{ color: RED }} />
//                 </div>
//                 <div>
//                   <p className="text-sm leading-relaxed text-black/60">
//                     Our strategic career planning is built for tech professionals, career switchers, 
//                     and early-stage talent who want a <span className="font-semibold text-black/80">real plan</span>, 
//                     and not vague advice. We combine human expertise with market-driven data to build 
//                     a career roadmap tailored to you: your strengths, interests, work history, and ambition.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* -------- FEATURES -------- */}
//       <section id="features" className="bg-white py-16 sm:py-20 md:py-28">
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <div className="mx-auto max-w-2xl text-center">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//                 <span className="h-px w-6" style={{ backgroundColor: RED }} />
//                 Our Approach
//               </span>
//             </Reveal>
//             <Reveal custom={1}>
//               <h2
//                 style={{ fontFamily: "'Fraunces', serif" }}
//                 className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
//               >
//                 A Personalized Game Plan <br />
//                 <span className="italic" style={{ color: RED }}>That Works Like Product Strategy</span>
//               </h2>
//             </Reveal>
//             <Reveal custom={2}>
//               <p className="mt-4 text-sm text-black/50">
//                 Your career deserves product-level planning. Here's how we deliver it:
//               </p>
//             </Reveal>
//           </div>

//           <div className="mt-14 grid grid-cols-1 gap-6">
//             {features.map((feature, index) => (
//               <FeatureCard
//                 key={feature.title}
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* -------- TESTIMONIAL -------- */}
//       <section className="bg-white py-16 sm:py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
//           <Reveal>
//             <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: `${RED}08` }}>
//               <Quote className="w-7 h-7" style={{ color: RED }} />
//             </div>
//           </Reveal>
//           <Reveal custom={1}>
//             <motion.p
//               whileHover={{ scale: 1.01 }}
//               className="text-2xl font-light leading-relaxed text-black/70 md:text-3xl"
//               style={{ fontFamily: "'Fraunces', serif" }}
//             >
//               “The career strategy session gave me a clear direction I never had before. 
//               Within 90 days, I had a roadmap, a mentor, and a job offer at a top tech company.”
//             </motion.p>
//           </Reveal>
//           <Reveal custom={2}>
//             <div className="mt-8">
//               <div className="flex items-center justify-center gap-1 text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-current" />
//                 ))}
//               </div>
//               <p className="mt-4 font-semibold text-black">— Priya Sharma</p>
//               <p className="text-sm text-black/40">Product Manager at Amazon</p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* -------- CTA -------- */}
//       <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "#FAFAFA" }}>
//         <Reveal>
//           <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl sm:px-10">
//             <div className="absolute inset-0" style={{ backgroundColor: BLACK }} aria-hidden />
//             <div
//               className="pointer-events-none absolute -top-20 -right-10 h-64 w-64 rounded-full blur-3xl"
//               style={{ backgroundColor: `${RED}40` }}
//               aria-hidden
//             />
//             <div
//               className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
//               style={{ backgroundColor: `${RED}20` }}
//               aria-hidden
//             />

//             <div className="relative z-10">
//               <h2
//                 style={{ fontFamily: "'Fraunces', serif" }}
//                 className="mx-auto max-w-2xl text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
//               >
//                 Ready to Build <br />Your Career Roadmap?
//               </h2>
//               <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
//                 Stop wondering what's next. Start building your path to success with a 
//                 personalized career strategy from Divine Talent.
//               </p>
//               <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
//                 <Link
//                   to="/contact"
//                   className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5"
//                   style={{ backgroundColor: RED }}
//                 >
//                   Get Started
//                   <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
//                 >
//                   Back to all services
//                   <ChevronRight className="w-4 h-4" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </section>
//     </main>
//   );
// }

// export default CareerStrategyPlanningPage;





import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkle,
  Target,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Award,
  Rocket,
  Lightbulb,
  BarChart,
  Globe,
  Building,
  UserCheck,
  Zap,
  TrendingUp,
  Shield,
  Heart,
  Star,
  Quote,
  ChevronRight,
  MoveRight,
  Sparkles,
  Infinity
} from 'lucide-react';

const RED = "#E61935";
const BLACK = "#0A0A0B";
const DARK_SURFACE = "#121213";
const DARK_BORDER = "#2A2A2E";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function Reveal({ children, className = "", custom = 0, as: Tag = "div" }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      custom={custom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <Reveal custom={index}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl"
        style={{ 
          background: DARK_SURFACE,
          borderColor: DARK_BORDER
        }}
      >
        <motion.div
          className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: RED }}
          aria-hidden
        />
        
        <div className="flex items-start gap-2">
          <motion.div
            variants={pulse}
            animate="animate"
            className="flex-shrink-0 rounded-xl p-2"
            style={{ background: 'rgba(230, 25, 53, 0.1)' }}
          >
            <Icon className="w-4 h-4" style={{ color: RED }} />
          </motion.div>
          <div>
            <h3
              className="text-lg font-medium leading-snug text-white"
            >
              {title}
            </h3>
            <p className="mt-2 text-sm" style={{ color: '#d3d0d0' }}>{description}</p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function CareerStrategyPlanningPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const features = [
    {
      icon: Target,
      title: "Skill + Interest Discovery",
      description: "We begin with deep-dive sessions that decode your experience, passions, and values. You won't fill a boring form. You'll have an expert understand your 'why' and 'what's possible.'"
    },
    {
      icon: BarChart,
      title: "Market & Role Matching",
      description: "Next, we map your profile to current and emerging roles in tech; from Data Product Manager to AI Business Analyst, based on hiring trends, growth rate, and your personal fit."
    },
    {
      icon: Clock,
      title: "30-60-90 Day Action Blueprint",
      description: "Get a battle-ready plan: what to learn, how to build proof (projects, certs, GitHub, blogs), when to apply, and what to expect. No fluff. Just clear next steps."
    }
  ];

  const stats = [
    { value: "94%", label: "Success Rate" },
    { value: "2,200+", label: "Professionals" },
    { value: "60+", label: "Hiring Partners" },
    { value: "12 mo", label: "Support" },
  ];

  return (
    <main className="w-full overflow-x-hidden" style={{ background: BLACK }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* -------- HERO -------- */}
      <section ref={heroRef} className="relative pt-8 pb-16 md:pb-24 overflow-hidden" style={{ background: BLACK }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-[0.03] blur-3xl"
          style={{ backgroundColor: RED }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full opacity-[0.02] blur-3xl"
          style={{ backgroundColor: RED }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative mx-auto max-w-5xl px-6 text-center md:px-10"
        >
          <Reveal custom={1}>
            <h1
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-5 text-[2.8rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl text-white"
            >
              Career Strategy <br />
              <span className="relative inline-block">
                <span className="italic" style={{ color: RED }}>And Planning</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    d="M2 8 C 80 2, 220 2, 298 8"
                    stroke={RED}
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal custom={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: '#efefef' }}>
              Every tech journey starts with a question: <span className="font-semibold text-white">"What's next?"</span>
              <br />
              At Divine Talent, we bring clarity where there's chaos.
            </p>
          </Reveal>

          <Reveal custom={3} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                style={{ background: RED }}
              >
                Start Now
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#features"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: `1.5px solid ${DARK_BORDER}`, color: '#F4F3F1' }}
              >
                Explore More
                <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </Reveal>
        </motion.div>
      </section>

      {/* -------- INTRODUCTION -------- */}
      <section className="pb-5 -mt-6 md:-mt-10 relative z-10" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <motion.div 
              whileHover={{ y: -4 }}
              className="rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              style={{ 
                background: DARK_SURFACE,
                borderColor: DARK_BORDER
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  variants={pulse}
                  animate="animate"
                  className="flex-shrink-0 rounded-xl p-3"
                  style={{ background: 'rgba(230, 25, 53, 0.1)' }}
                >
                  <Lightbulb className="w-6 h-6" style={{ color: RED }} />
                </motion.div>
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: '#efefef' }}>
                    Our strategic career planning is built for tech professionals, career switchers, 
                    and early-stage talent who want a <span className="font-semibold text-white">real plan</span>, 
                    and not vague advice. We combine human expertise with market-driven data to build 
                    a career roadmap tailored to you: your strengths, interests, work history, and ambition.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* -------- FEATURES -------- */}
      <section id="features" className="py-10" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Our Approach
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight text-white"
              >
                A Personalized Game Plan <br />
                <span className="italic" style={{ color: RED }}>That Works Like Product Strategy</span>
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="mt-4 text-sm" style={{ color: '#efefef' }}>
                Your career deserves product-level planning. Here's how we deliver it:
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -------- TESTIMONIAL -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <motion.div
              variants={pulse}
              animate="animate"
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: 'rgba(230, 25, 53, 0.1)' }}
            >
              <Quote className="w-7 h-7" style={{ color: RED }} />
            </motion.div>
          </Reveal>
          <Reveal custom={1}>
            <motion.p
              whileHover={{ scale: 1.01 }}
              className="text-2xl font-light leading-relaxed"
              style={{ fontFamily: "'Fraunces', serif", color: '#F4F3F1' }}
            >
              “The career strategy session gave me a clear direction I never had before. 
              Within 90 days, I had a roadmap, a mentor, and a job offer at a top tech company.”
            </motion.p>
          </Reveal>
          <Reveal custom={2}>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: RED }} />
                ))}
              </div>
              <p className="mt-4 font-semibold text-white">— Priya Sharma</p>
              <p className="text-sm" style={{ color: '#efefef' }}>Product Manager at Amazon</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="py-10 px-4 sm:px-6" style={{ background: BLACK }}>
        <Reveal>
          <motion.div 
            whileHover={{ y: -4 }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl sm:px-10"
            style={{ background: DARK_SURFACE }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="pointer-events-none absolute -top-20 -right-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `${RED}30` }}
              aria-hidden
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `${RED}20` }}
              aria-hidden
            />

            <div className="relative z-10">
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mx-auto max-w-2xl text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
              >
                Ready to Build <br />Your Career Roadmap?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: '#efefef' }}>
                Stop wondering what's next. Start building your path to success with a 
                personalized career strategy from Divine Talent.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: RED }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                    style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF' }}
                  >
                    Back to all services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </section>
    </main>
  );
}

export default CareerStrategyPlanningPage;