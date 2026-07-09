// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Sparkle,
//   FileText,
//   Linkedin,
//   Globe,
//   CheckCircle,
//   Award,
//   Rocket,
//   TrendingUp,
//   Users,
//   Shield,
//   Star,
//   Quote,
//   MoveRight,
//   ChevronRight,
//   Lightbulb,
//   Target,
//   Zap
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

// function TransformCard({ icon: Icon, title, description, index }) {
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

// export function ResumeProfileRebrandingPage() {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const transforms = [
//     {
//       icon: FileText,
//       title: "Resume That Converts",
//       description: "We rebuild your resume from scratch, focusing on impact-driven storytelling, measurable outcomes, and domain-relevant keywords. ATS optimized? Obviously. But more importantly, human-attractive."
//     },
//     {
//       icon: Linkedin,
//       title: "LinkedIn That Lands Views",
//       description: "We rewrite your headline, summary, and work history with recruiter psychology in mind. Think visibility, relevance, and hook-worthy intros that get you clicks, follows, and messages."
//     },
//     {
//       icon: Globe,
//       title: "Digital Footprint That Feels Aligned",
//       description: "Have GitHub, Behance, Medium, or a portfolio site? We align your content with the story your resume and LinkedIn tell. Consistency = credibility."
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
//               <span>Profile Rebranding</span>
//             </div>
//           </Reveal>

//           <Reveal custom={1}>
//             <h1
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-5 text-[2.8rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
//             >
//               Resume & Profile <br />
//               <span className="relative inline-block">
//                 <span className="italic" style={{ color: RED }}>Rebranding</span>
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
//               Build a Profile That <span className="font-semibold text-black/80">Speaks Before You Do</span>
//             </p>
//           </Reveal>

//           <Reveal custom={3} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
//               style={{ backgroundColor: BLACK }}
//             >
//               Get In Touch
//               <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//             <a
//               href="#transforms"
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
//                     Your resume isn't a history sheet. Your LinkedIn isn't just a digital presence. 
//                     Together, they form your first handshake with recruiters, hiring managers, and even 
//                     algorithms. If they don't speak your value, they're holding you back.
//                   </p>
//                   <p className="mt-3 text-sm leading-relaxed text-black/60">
//                     At Divine Talent, we turn your profile into a personal brand that positions you for 
//                     the roles you want; not the ones you've already done.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* -------- WHAT WE TRANSFORM -------- */}
//       <section id="transforms" className="bg-white py-16 sm:py-20 md:py-28">
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <div className="mx-auto max-w-2xl text-center">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//                 <span className="h-px w-6" style={{ backgroundColor: RED }} />
//                 What We Transform
//               </span>
//             </Reveal>
//             <Reveal custom={1}>
//               <h2
//                 style={{ fontFamily: "'Fraunces', serif" }}
//                 className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
//               >
//                 <span className="italic" style={{ color: RED }}>And How</span>
//               </h2>
//             </Reveal>
//           </div>

//           <div className="mt-14 grid grid-cols-1 gap-6">
//             {transforms.map((item, index) => (
//               <TransformCard
//                 key={item.title}
//                 icon={item.icon}
//                 title={item.title}
//                 description={item.description}
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
//               “Within two weeks of my profile rebrand, I had 5 recruiters reaching out. 
//               My LinkedIn views went up 300%. Divine Talent completely transformed how I'm perceived.”
//             </motion.p>
//           </Reveal>
//           <Reveal custom={2}>
//             <div className="mt-8">
//               <div className="flex items-center justify-center gap-1 text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-current" />
//                 ))}
//               </div>
//               <p className="mt-4 font-semibold text-black">— David Park</p>
//               <p className="text-sm text-black/40">Senior Data Scientist at Google</p>
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
//                 Ready to Rebrand <br />Your Professional Identity?
//               </h2>
//               <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
//                 Stop blending in. Start standing out with a profile that truly represents 
//                 your value and opens doors to the opportunities you deserve.
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

// export default ResumeProfileRebrandingPage;






import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkle,
  FileText,
  Linkedin,
  Globe,
  CheckCircle,
  Award,
  Rocket,
  TrendingUp,
  Users,
  Shield,
  Star,
  Quote,
  MoveRight,
  ChevronRight,
  Lightbulb,
  Target,
  Zap,
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

function TransformCard({ icon: Icon, title, description, index }) {
  return (
    <Reveal custom={index}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl"
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
        
        <div className="flex items-start gap-4">
          <motion.div
            variants={pulse}
            animate="animate"
            className="flex-shrink-0 rounded-xl p-3"
            style={{ background: 'rgba(230, 25, 53, 0.1)' }}
          >
            <Icon className="w-6 h-6" style={{ color: RED }} />
          </motion.div>
          <div>
            <h3
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-lg font-medium leading-snug text-white"
            >
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: '#efefef' }}>{description}</p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function ResumeProfileRebrandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const transforms = [
    {
      icon: FileText,
      title: "Resume That Converts",
      description: "We rebuild your resume from scratch, focusing on impact-driven storytelling, measurable outcomes, and domain-relevant keywords. ATS optimized? Obviously. But more importantly, human-attractive."
    },
    {
      icon: Linkedin,
      title: "LinkedIn That Lands Views",
      description: "We rewrite your headline, summary, and work history with recruiter psychology in mind. Think visibility, relevance, and hook-worthy intros that get you clicks, follows, and messages."
    },
    {
      icon: Globe,
      title: "Digital Footprint That Feels Aligned",
      description: "Have GitHub, Behance, Medium, or a portfolio site? We align your content with the story your resume and LinkedIn tell. Consistency = credibility."
    }
  ];

  const stats = [
    { value: "94%", label: "Profile Success Rate" },
    { value: "2,200+", label: "Professionals Rebranded" },
    { value: "300%", label: "Avg. Profile Views" },
    { value: "4.9/5", label: "Rating" },
  ];

  const benefits = [
    { icon: Target, label: "ATS Optimized" },
    { icon: Users, label: "Recruiter Attractive" },
    { icon: Shield, label: "Consistent Brand" },
    { icon: Zap, label: "Impact-Driven" },
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
              Resume & Profile <br />
              <span className="relative inline-block">
                <span className="italic" style={{ color: RED }}>Rebranding</span>
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
              Build a Profile That <span className="font-semibold text-white">Speaks Before You Do</span>
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
                Get In Touch
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#transforms"
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

      {/* -------- STATS -------- */}
      {/* <section className="pb-16 md:pb-20 -mt-6 md:-mt-10 relative z-10" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <Reveal key={stat.label} custom={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border p-6 text-center transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    background: DARK_SURFACE,
                    borderColor: DARK_BORDER
                  }}
                >
                  <p className="text-2xl font-bold md:text-3xl" style={{ color: RED }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs" style={{ color: '#efefef' }}>{stat.label}</p>
                </motion.div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section> */}

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
                    Your resume isn't a history sheet. Your LinkedIn isn't just a digital presence. 
                    Together, they form your first handshake with recruiters, hiring managers, and even 
                    algorithms. If they don't speak your value, they're holding you back.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: '#efefef' }}>
                    At Divine Talent, we turn your profile into a personal brand that positions you for 
                    the roles you want; not the ones you've already done.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* -------- WHAT WE TRANSFORM -------- */}
      <section id="transforms" className="py-10" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                What We Transform
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight text-white"
              >
                <span className="italic">And How</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {transforms.map((item, index) => (
              <TransformCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -------- BENEFITS -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Key Benefits
              </span>
            </div>
          </Reveal>
          <Reveal custom={1}>
            <h3
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-4 text-center text-2xl font-medium text-white md:text-3xl"
            >
              Why <span className="italic" style={{ color: RED }}>Rebrand</span> With Us
            </h3>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.label} custom={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl border p-4 text-center transition-all duration-300"
                    style={{ 
                      background: BLACK,
                      borderColor: DARK_BORDER
                    }}
                  >
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                      <Icon className="w-5 h-5" style={{ color: RED }} />
                    </div>
                    <p className="text-xs font-medium text-white">{benefit.label}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- TESTIMONIAL -------- */}
      <section className="py-10" style={{ background: BLACK }}>
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
              “Within two weeks of my profile rebrand, I had 5 recruiters reaching out. 
              My LinkedIn views went up 300%. Divine Talent completely transformed how I'm perceived.”
            </motion.p>
          </Reveal>
          <Reveal custom={2}>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: RED }} />
                ))}
              </div>
              <p className="mt-4 font-semibold text-white">— David Park</p>
              <p className="text-sm" style={{ color: '#efefef' }}>Senior Data Scientist at Google</p>
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
                Ready to Rebrand <br />Your Professional Identity?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: '#efefef' }}>
                Stop blending in. Start standing out with a profile that truly represents 
                your value and opens doors to the opportunities you deserve.
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

export default ResumeProfileRebrandingPage;