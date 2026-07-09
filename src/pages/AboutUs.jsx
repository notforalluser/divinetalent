// import React from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import {
//   Users,
//   Target,
//   Star,
//   Heart,
//   Quote,
//   UserCheck,
//   Zap,
//   Building,
//   Clock,
//   TrendingUp,
//   ArrowRight,
//   ArrowUpRight,
//   MoveRight,
//   CircleCheck,
//   Sparkle,
//   Crown,
//   Rocket,
//   Briefcase,
//   Globe,
//   Shield,
//   Lightbulb,
//   Play,
//   MessageSquare,
//   ChevronRight,
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

// function Counter({ to, suffix = "", duration = 1.8 }) {
//   const ref = React.useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });
//   const [value, setValue] = React.useState(0);

//   React.useEffect(() => {
//     if (!inView) return;
//     let start = null;
//     const step = (ts) => {
//       if (start === null) start = ts;
//       const progress = Math.min((ts - start) / (duration * 1000), 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setValue(Math.floor(eased * to));
//       if (progress < 1) requestAnimationFrame(step);
//       else setValue(to);
//     };
//     requestAnimationFrame(step);
//   }, [inView, to, duration]);

//   return (
//     <span ref={ref} className="tabular-nums">
//       {value.toLocaleString()}
//       {suffix}
//     </span>
//   );
// }

// const stats = [
//   { value: 2200, suffix: "+", label: "Professionals Empowered", icon: Users },
//   { value: 94, suffix: "%", label: "Placement Success Rate", icon: TrendingUp },
//   { value: 60, suffix: "+", label: "Hiring Partners", icon: Building },
//   { value: 12, suffix: " mo", label: "Post-Placement Support", icon: Clock },
// ];

// const milestones = [
//   {
//     year: "2025",
//     title: "Divine Talent is founded",
//     copy: "A small, determined team sets out to change how international talent builds a career in the United States.",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
//   },
//   {
//     year: "Year 1",
//     title: "The one-on-one era",
//     copy: "Late nights spent formatting resumes, running mock interviews, and turning compliance paperwork into a bridge, not a barrier.",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
//   },
//   {
//     year: "1,000+",
//     title: "Candidates placed",
//     copy: "Word spreads. Dozens of success stories become hundreds, then well over a thousand careers launched in the U.S.",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
//   },
//   {
//     year: "2,200+",
//     title: "Professionals empowered",
//     copy: "From first associate roles to senior management, and a handful who rose all the way to CXO — proof that global talent can lead at the top.",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
//   },
// ];

// const philosophy = [
//   {
//     n: "01",
//     title: "Action Over Waiting",
//     copy: "We don't wait for opportunities to knock. Our team actively finds and applies to jobs for you, every single day, with a strategy aligned to your profile and goals.",
//     icon: Zap
//   },
//   {
//     n: "02",
//     title: "Real Preparation, Real People",
//     copy: "You'll be trained and mentored by experienced professionals who understand the market — real feedback, mock sessions, and targeted prep, never generic templates.",
//     icon: UserCheck
//   },
//   {
//     n: "03",
//     title: "Selective, Not Mass Enrollments",
//     copy: "We don't work in bulk. We carefully choose serious candidates and commit to them with full focus and support from start to finish.",
//     icon: Target
//   },
//   {
//     n: "04",
//     title: "Result-Driven Partnership",
//     copy: "We're not just a service, we're your placement partner. We align with your goals and don't stop until you're placed in a job that truly fits.",
//     icon: Heart
//   },
// ];

// export default function AboutUs() {
//   const heroRef = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   return (
//     <main
//       style={{ color: BLACK, backgroundColor: "#FFFFFF" }}
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

//           <Reveal custom={1}>
//             <h1
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-5 text-[2.8rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
//             >
//               We are Divine Talent.
//               <br />
//               <span className="relative inline-block">
//                 No one should struggle alone.
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
//               <span className="italic" style={{ color: RED }}>The right platform.</span>
//             </h1>
//           </Reveal>

//           <Reveal custom={2}>
//             <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
//               A placement partner built by people who watched too many brilliant candidates
//               get lost in paperwork, interviews, and the maze of recruiters. So we built
//               something different.
//             </p>
//           </Reveal>

//           <Reveal custom={3} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
//             <a
//               href="/contact"
//               className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
//               style={{ backgroundColor: BLACK }}
//             >
//               Get In Touch
//               <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </a>
//             <a
//               href="#story"
//               className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
//               style={{ border: `1.5px solid ${BLACK}15`, color: BLACK }}
//             >
//               Read our story
//               <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>
//           </Reveal>
//         </motion.div>
//       </section>

//       {/* -------- STATS -------- */}
//       <section className="bg-white pb-16 md:pb-20 -mt-6 md:-mt-10 relative z-10">
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4"
//           >
//             {stats.map((s, i) => {
//               const Icon = s.icon;
//               return (
//                 <Reveal key={s.label} custom={i}>
//                   <div className="h-full rounded-2xl border border-black/5 bg-white p-5 sm:p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
//                     <div
//                       className="mx-auto mb-3 inline-flex rounded-xl p-2.5"
//                       style={{ backgroundColor: `${RED}08` }}
//                     >
//                       <Icon className="w-5 h-5" style={{ color: RED }} />
//                     </div>
//                     <p
//                       className="text-2xl sm:text-3xl font-medium text-black"
//                     >
//                       <Counter to={s.value} suffix={s.suffix} />
//                     </p>
//                     <p className="mt-1.5 text-[11px] sm:text-xs text-black/50 leading-snug">
//                       {s.label}
//                     </p>
//                   </div>
//                 </Reveal>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* -------- OUR STORY -------- */}
//       <section id="story" className="bg-white py-16 sm:py-20 md:py-28">
//         <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
//           <Reveal>
//             <div className="relative">
//               <div
//                 className="absolute -left-4 -top-4 h-full w-full rounded-2xl md:-left-6 md:-top-6"
//                 style={{ backgroundColor: RED, opacity: 0.06 }}
//                 aria-hidden
//               />
//               <motion.img
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.5 }}
//                 src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=900&fit=crop"
//                 alt="A mentor coaching a candidate ahead of an interview"
//                 className="relative h-80 w-full rounded-2xl object-cover shadow-xl ring-4 ring-white"
//               />
//               <div className="absolute -bottom-3 -right-3 rounded-xl bg-white px-4 py-2 shadow-lg border border-black/5">
//                 <div className="flex items-center gap-2 text-sm font-semibold">
//                   <CircleCheck className="w-4 h-4" style={{ color: RED }} />
//                   <span>Est. 2025</span>
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           <div>
//             <Reveal>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//                 <span className="h-px w-6" style={{ backgroundColor: RED }} />
//                 Our Story
//               </span>
//             </Reveal>
//             <Reveal custom={1}>
//               <h2
//                 style={{ fontFamily: "'Fraunces', serif" }}
//                 className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
//               >
//                 Talent is universal.
//                 <br />
//                 <span className="italic" style={{ color: RED }}>Opportunity</span> was not.
//               </h2>
//             </Reveal>
//             <Reveal custom={2}>
//               <p className="mt-6 leading-relaxed text-black/60 text-base">
//                 In 2025, a small but determined group of visionaries set out to change how
//                 international talent builds a career in the United States. They had watched
//                 skilled professionals get lost in compliance paperwork, lose confidence before
//                 interviews, and struggle to navigate recruiters, clients, and corporate
//                 expectations.
//               </p>
//             </Reveal>
//             <Reveal custom={3}>
//               <p className="mt-4 leading-relaxed text-black/60">
//                 So the team started working late nights, one candidate at a time — formatting
//                 resumes, running mock interviews, and teaching compliance not as a formality but
//                 as a bridge to real career growth. Word spread. Dozens became hundreds. Hundreds
//                 became a movement.
//               </p>
//             </Reveal>
//             <Reveal custom={4}>
//               <div className="mt-6 flex items-center gap-4">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3].map((i) => (
//                     <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-black/30">
//                       {String.fromCharCode(64 + i)}
//                     </div>
//                   ))}
//                 </div>
//                 <span className="text-sm text-black/40">Trusted by 2,200+ professionals</span>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* -------- MILESTONE TIMELINE -------- */}
//       <section className="relative bg-white py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#FAFAFA" }}>
//         <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
//           <Reveal>
//             <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//               <span className="h-px w-6" style={{ backgroundColor: RED }} />
//               The Journey
//             </span>
//           </Reveal>
//           <Reveal custom={1}>
//             <h2
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
//             >
//               From one late night to <br /><span className="italic" style={{ color: RED }}>2,200+ careers</span>
//             </h2>
//           </Reveal>
//         </div>

//         <div className="relative mx-auto mt-16 max-w-4xl px-6 md:px-10">
//           <div
//             className="absolute left-6 top-0 bottom-0 w-0.5 bg-black/5 md:left-1/2 md:-ml-px"
//             aria-hidden
//           />

//           <ol className="space-y-16">
//             {milestones.map((m, i) => (
//               <li key={m.title} className="relative flex flex-col md:flex-row md:items-center">
//                 <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
//                   <Reveal custom={i}>
//                     <div className={`flex items-center gap-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
//                       <div className="hidden md:block w-4 h-4 rounded-full border-2" style={{ borderColor: RED, backgroundColor: 'white' }} />
//                       <div>
//                         <p className="text-sm font-bold uppercase tracking-wider" style={{ color: RED }}>
//                           {m.year}
//                         </p>
//                         <h3
//                           style={{ fontFamily: "'Fraunces', serif" }}
//                           className="mt-1 text-xl font-medium leading-snug"
//                         >
//                           {m.title}
//                         </h3>
//                         <p className="mt-2 text-sm leading-relaxed text-black/50">{m.copy}</p>
//                       </div>
//                     </div>
//                   </Reveal>
//                 </div>
//                 <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 md:hidden" style={{ borderColor: RED, backgroundColor: 'white' }} />
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       {/* -------- PHILOSOPHY -------- */}
//       <section className="bg-white py-16 sm:py-20 md:py-28">
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <div className="mx-auto max-w-2xl text-center">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//                 <span className="h-px w-6" style={{ backgroundColor: RED }} />
//                 Our Philosophy
//               </span>
//             </Reveal>
//             <Reveal custom={1}>
//               <h2
//                 style={{ fontFamily: "'Fraunces', serif" }}
//                 className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
//               >
//                 We help you get placed, <br /><span className="italic" style={{ color: RED }}>not just guided</span>
//               </h2>
//             </Reveal>
//           </div>

//           <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
//             {philosophy.map((p, i) => {
//               const Icon = p.icon;
//               return (
//                 <Reveal key={p.n} custom={i}>
//                   <motion.div
//                     whileHover={{ y: -6 }}
//                     transition={{ duration: 0.2 }}
//                     className="group relative h-full overflow-hidden rounded-2xl border border-black/6 bg-white p-8 transition-all duration-300 hover:shadow-2xl"
//                   >
//                     <div
//                       className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
//                       style={{ backgroundColor: RED }}
//                       aria-hidden
//                     />
//                     <div className="flex items-start justify-between">
//                       <div className="mb-4 inline-flex rounded-xl p-3" style={{ backgroundColor: `${RED}08` }}>
//                         <Icon className="w-6 h-6" style={{ color: RED }} />
//                       </div>
//                       <span
//                         style={{ fontFamily: "'Fraunces', serif", color: BLACK }}
//                         className="text-sm font-semibold opacity-20"
//                       >
//                         {p.n}
//                       </span>
//                     </div>
//                     <h3
//                       style={{ fontFamily: "'Fraunces', serif" }}
//                       className="mt-2 text-xl font-medium leading-snug"
//                     >
//                       {p.title}
//                     </h3>
//                     <p className="mt-3 text-sm leading-relaxed text-black/50">{p.copy}</p>
//                     <div className="mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                       <span className="text-xs font-medium" style={{ color: RED }}>Learn more →</span>
//                     </div>
//                   </motion.div>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* -------- GALLERY -------- */}
//       <section className="bg-white py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#FAFAFA" }}>
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <div className="mx-auto max-w-2xl text-center">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//                 <span className="h-px w-6" style={{ backgroundColor: RED }} />
//                 On The Ground
//               </span>
//             </Reveal>
//             <Reveal custom={1}>
//               <h2
//                 style={{ fontFamily: "'Fraunces', serif" }}
//                 className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
//               >
//                 What the work actually <br /><span className="italic" style={{ color: RED }}>looks like</span>
//               </h2>
//             </Reveal>
//           </div>

//           <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
//             {[
//               {
//                 src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&h=500&fit=crop",
//                 label: "Mock interviews & coaching"
//               },
//               {
//                 src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop",
//                 label: "Direct-to-decision-maker pitching"
//               },
//               {
//                 src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=500&fit=crop",
//                 label: "Offers, sealed with confidence"
//               }
//             ].map((g, i) => (
//               <Reveal key={g.label} custom={i}>
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   transition={{ duration: 0.3 }}
//                   className="group relative overflow-hidden rounded-2xl shadow-lg"
//                 >
//                   <img
//                     src={g.src}
//                     alt={g.label}
//                     className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div
//                     className="absolute inset-0"
//                     style={{ background: `linear-gradient(180deg, ${BLACK}00 50%, ${BLACK}cc 100%)` }}
//                     aria-hidden
//                   />
//                   <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
//                     {g.label}
//                   </p>
//                   <div
//                     className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
//                     style={{ backgroundColor: RED }}
//                     aria-hidden
//                   />
//                 </motion.div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* -------- WHY IT WORKS -------- */}
//       <section className="bg-white py-16 sm:py-20 md:py-28">
//         <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
//           <div className="order-2 md:order-1">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//                 <span className="h-px w-6" style={{ backgroundColor: RED }} />
//                 Why It Works
//               </span>
//             </Reveal>
//             <Reveal custom={1}>
//               <h2
//                 style={{ fontFamily: "'Fraunces', serif" }}
//                 className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
//               >
//                 Precision, <br /><span className="italic" style={{ color: RED }}>not volume</span>
//               </h2>
//             </Reveal>
//             <Reveal custom={2}>
//               <p className="mt-6 leading-relaxed text-black/60">
//                 While most international candidates get lost in the noise of endless career
//                 portals, we work behind the scenes — identifying the right opportunities,
//                 pitching your profile directly to decision-makers, and preparing you to stand out
//                 when it matters most.
//               </p>
//             </Reveal>
//             <Reveal custom={3}>
//               <p className="mt-4 leading-relaxed text-black/60">
//                 When the interview call finally comes, we don't leave you guessing. Personalized
//                 mock interviews, role-specific coaching, and honest feedback build the confidence
//                 to perform, not just rehearse.
//               </p>
//             </Reveal>
//             <Reveal custom={4}>
//               <blockquote
//                 className="mt-8 border-l-2 pl-5 text-base italic text-black/70"
//                 style={{ borderColor: RED, fontFamily: "'Fraunces', serif" }}
//               >
//                 “We don't stop until you're exactly where you're meant to be.”
//               </blockquote>
//             </Reveal>
//             <Reveal custom={5}>
//               <div className="mt-6 flex gap-4">
//                 {['100%', 'Dedicated', 'Support'].map((tag) => (
//                   <span key={tag} className="rounded-full border border-black/5 bg-black/5 px-4 py-1.5 text-xs font-medium text-black/40">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </Reveal>
//           </div>

//           <Reveal className="order-1 md:order-2">
//             <div className="relative">
//               <motion.img
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.5 }}
//                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=900&fit=crop"
//                 alt="A candidate celebrating a successful career milestone"
//                 className="h-80 w-full rounded-2xl object-cover shadow-xl ring-4 ring-white"
//                 style={{ aspectRatio: "4 / 5" }}
//               />
//               <div
//                 className="absolute -left-6 -top-6 h-28 w-28 rounded-2xl opacity-10 md:h-36 md:w-36"
//                 style={{ backgroundColor: RED }}
//                 aria-hidden
//               />
//               <div className="absolute -bottom-4 -right-4 rounded-xl bg-white px-5 py-3 shadow-lg border border-black/5">
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-1">
//                     <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">✓</div>
//                     <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">✓</div>
//                   </div>
//                   <span className="text-sm font-medium">94% success rate</span>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* -------- TESTIMONIAL -------- */}
//       <section className="bg-white py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#FAFAFA" }}>
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
//               “Divine Talent didn't just help me find a job—they helped me find my career. Their team believed in me when I didn't believe in myself.”
//             </motion.p>
//           </Reveal>
//           <Reveal custom={2}>
//             <div className="mt-8">
//               <div className="flex items-center justify-center gap-1 text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-current" />
//                 ))}
//               </div>
//               <p className="mt-4 font-semibold text-black">— Sarah Johnson</p>
//               <p className="text-sm text-black/40">Software Engineer at Google</p>
//               <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-1.5 text-xs text-black/40 shadow-sm">
//                 <CircleCheck className="w-3.5 h-3.5" style={{ color: RED }} />
//                 <span>Verified placement</span>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* -------- CLOSING CTA -------- */}
//       <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
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
//                 Ready to write your own chapter?
//               </h2>
//               <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
//                 Join the thousands of professionals who stopped waiting for the right
//                 opportunity and started building one.
//               </p>
//               <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
//                 <a
//                   href="/contact"
//                   className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5"
//                   style={{ backgroundColor: RED }}
//                 >
//                   Get In Touch
//                   <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </a>
//                 <a
//                   href="/plans"
//                   className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
//                 >
//                   Explore Plans
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </section>
//     </main>
//   );
// }




import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Users,
  Target,
  Star,
  Heart,
  Quote,
  UserCheck,
  Zap,
  Building,
  Clock,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  MoveRight,
  CircleCheck,
  Sparkle,
  Crown,
  Rocket,
  Briefcase,
  Globe,
  Shield,
  Lightbulb,
  Play,
  MessageSquare,
  ChevronRight,
  Sparkles,
  Infinity,
  Award,
  Coffee,
  Code,
  Palette,
  PenTool,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Youtube
} from 'lucide-react';

const RED = "#E61935";
const BLACK = "#0A0A0B";
const DARK_SURFACE = "#151516";
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

function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(to);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums" style={{ color: RED }}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2200, suffix: "+", label: "Professionals Empowered", icon: Users },
  { value: 94, suffix: "%", label: "Placement Success Rate", icon: TrendingUp },
  { value: 60, suffix: "+", label: "Hiring Partners", icon: Building },
  { value: 12, suffix: " mo", label: "Post-Placement Support", icon: Clock },
];

const milestones = [
  {
    year: "2025",
    title: "Divine Talent is founded",
    copy: "A small, determined team sets out to change how international talent builds a career in the United States.",
    icon: Rocket
  },
  {
    year: "Year 1",
    title: "The one-on-one era",
    copy: "Late nights spent formatting resumes, running mock interviews, and turning compliance paperwork into a bridge, not a barrier.",
    icon: Users
  },
  {
    year: "1,000+",
    title: "Candidates placed",
    copy: "Word spreads. Dozens of success stories become hundreds, then well over a thousand careers launched in the U.S.",
    icon: Award
  },
  {
    year: "2,200+",
    title: "Professionals empowered",
    copy: "From first associate roles to senior management, and a handful who rose all the way to CXO — proof that global talent can lead at the top.",
    icon: Crown
  },
];

const philosophy = [
  {
    n: "01",
    title: "Action Over Waiting",
    copy: "We don't wait for opportunities to knock. Our team actively finds and applies to jobs for you, every single day, with a strategy aligned to your profile and goals.",
    icon: Zap
  },
  {
    n: "02",
    title: "Real Preparation, Real People",
    copy: "You'll be trained and mentored by experienced professionals who understand the market — real feedback, mock sessions, and targeted prep, never generic templates.",
    icon: UserCheck
  },
  {
    n: "03",
    title: "Selective, Not Mass Enrollments",
    copy: "We don't work in bulk. We carefully choose serious candidates and commit to them with full focus and support from start to finish.",
    icon: Target
  },
  {
    n: "04",
    title: "Result-Driven Partnership",
    copy: "We're not just a service, we're your placement partner. We align with your goals and don't stop until you're placed in a job that truly fits.",
    icon: Heart
  },
];

const values = [
  { icon: Shield, label: "Integrity First" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Users, label: "Community" },
  { icon: Star, label: "Excellence" },
];

export default function AboutUs() {
  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // Infinite scroll animation for logos
  const logos = ["Google", "Amazon", "Microsoft", "Apple", "Meta", "Netflix", "Oracle", "Salesforce"];

  return (
    <main className="w-full overflow-x-hidden" style={{ background: BLACK }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');
        
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        .infinite-scroll:hover {
          animation-play-state: paused;
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
              className="mt-5 font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="text-white">We are </span>
              <span style={{ color: RED }}>Divine Talent.</span>
              <br />
              <span className="relative inline-block text-white">
                No one should struggle alone.
              </span>
              <span className="italic text-white">The right platform.</span>
            </h1>
          </Reveal>

          <Reveal custom={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: '#e3e3eb' }}>
              A placement partner built by people who watched too many brilliant candidates
              get lost in paperwork, interviews, and the maze of recruiters. So we built
              something different.
            </p>
          </Reveal>

          <Reveal custom={3} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ background: RED }}
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="#story"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300"
              style={{ border: `1.5px solid ${DARK_BORDER}`, color: '#F4F3F1' }}
            >
              Read our story
              <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </Reveal>

          {/* Infinite scrolling logos */}
          <div className="mt-16 overflow-hidden border-t border-b border-[#1A1A1E] py-4">
            <div className="infinite-scroll flex gap-12 whitespace-nowrap">
              {[...logos, ...logos].map((logo, i) => (
                <span key={i} className="text-sm font-medium" style={{ color: '#ffffff' }}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* -------- STATS -------- */}
      <section className="-mt-6 md:-mt-10 relative z-10" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} custom={i}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="h-full rounded-2xl border p-5 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
                    style={{ 
                      background: DARK_SURFACE,
                      borderColor: DARK_BORDER
                    }}
                  >
                    <motion.div
                      variants={pulse}
                      animate="animate"
                      className="mx-auto mb-3 inline-flex rounded-xl p-2.5"
                      style={{ background: 'rgba(230, 25, 53, 0.1)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: RED }} />
                    </motion.div>
                    <p className="text-2xl sm:text-3xl font-medium text-white">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1.5 text-[11px] sm:text-xs leading-snug" style={{ color: '#fff' }}>
                      {s.label}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* -------- OUR STORY -------- */}
      <section id="story" className="py-20" style={{ background: BLACK }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -left-4 -top-4 h-full w-full rounded-2xl md:-left-6 md:-top-6"
                style={{ backgroundColor: RED, opacity: 0.06 }}
                aria-hidden
              />
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=900&fit=crop"
                alt="A mentor coaching a candidate ahead of an interview"
                className="relative h-80 w-full rounded-2xl object-cover shadow-xl"
                style={{ border: '4px solid #1A1A1E' }}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Our Story
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight md:text-5xl text-white"
              >
                Talent is universal.
                <br />
                <span className="italic" style={{ color: RED }}>Opportunity</span> was not.
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="mt-6 leading-relaxed text-base" style={{ color: '#e3e3eb' }}>
                In 2025, a small but determined group of visionaries set out to change how
                international talent builds a career in the United States. They had watched
                skilled professionals get lost in compliance paperwork, lose confidence before
                interviews, and struggle to navigate recruiters, clients, and corporate
                expectations.
              </p>
            </Reveal>
            <Reveal custom={3}>
              <p className="mt-4 leading-relaxed" style={{ color: '#e3e3eb' }}>
                So the team started working late nights, one candidate at a time — formatting
                resumes, running mock interviews, and teaching compliance not as a formality but
                as a bridge to real career growth. Word spread. Dozens became hundreds. Hundreds
                became a movement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- VALUES -------- */}
      <section className="py-6" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" style={{ color: RED }} />
                  <span className="text-sm font-medium text-white">{v.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- MILESTONE TIMELINE -------- */}
      <section className="relative py-16 sm:py-20" style={{ background: BLACK }}>
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
              <span className="h-px w-6" style={{ backgroundColor: RED }} />
              The Journey
            </span>
          </Reveal>
          <Reveal custom={1}>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-4 text-4xl font-medium leading-tight md:text-5xl text-white"
            >
              From one late night to <br /><span className="italic" style={{ color: RED }}>2,200+ careers</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl px-6 md:px-10">
          {/* <div
            className="absolute left-6 top-0 bottom-0 w-0.5 md:left-1/2 md:-ml-px"
            style={{ background: DARK_BORDER }}
            aria-hidden
          /> */}

          <ol className="space-y-10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <li key={m.title} className="relative flex flex-col md:flex-row md:items-center">
                  <div className={`flex-1 ${i % 2 !== 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <Reveal custom={i}>
                      <motion.div 
                        className={`flex items-center gap-4 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}
                        whileHover={{ x: i % 2 === 0 ? -5 : 5 }}
                      >
                        {/* <div className="hidden md:block w-4 h-4 rounded-full border-2 shrink-0" style={{ borderColor: RED, backgroundColor: BLACK }} /> */}
                        <div>
                          <motion.p 
                            className="text-sm font-bold uppercase tracking-wider"
                            style={{ color: RED }}
                          >
                            {m.year}
                          </motion.p>
                          <h3
                            style={{ fontFamily: "'Fraunces', serif" }}
                            className="mt-1 text-xl font-medium leading-snug text-white"
                          >
                            {m.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed" style={{ color: '#f7f1f1' }}>{m.copy}</p>
                        </div>
                      </motion.div>
                    </Reveal>
                  </div>
                  {/* <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 md:hidden" style={{ borderColor: RED, backgroundColor: BLACK }} /> */}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* -------- PHILOSOPHY -------- */}
      <section className="py-10" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Our Philosophy
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight md:text-5xl text-white"
              >
                We help you get placed, <br /><span className="italic" style={{ color: RED }}>not just guided</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {philosophy.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.n} custom={i}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-2xl"
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
                    <div className="flex items-start justify-between">
                      <motion.div 
                        className="mb-4 inline-flex rounded-xl p-3"
                        style={{ background: 'rgba(230, 25, 53, 0.1)' }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-4 h-4" style={{ color: RED }} />
                      </motion.div>
                      <span
                        style={{ fontFamily: "'Fraunces', serif" }}
                        className="text-sm font-semibold"
                        style={{ color: '#f7f1f1' }}
                      >
                        {p.n}
                      </span>
                    </div>
                    <h3
                      style={{ fontFamily: "'Fraunces', serif" }}
                      className="mt-2 text-xl font-medium leading-snug text-white"
                    >
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: '#B0B0B8' }}>{p.copy}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- GALLERY -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                On The Ground
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight md:text-5xl text-white"
              >
                What the work actually <br /><span className="italic" style={{ color: RED }}>looks like</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&h=500&fit=crop",
                label: "Mock interviews & coaching"
              },
              {
                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop",
                label: "Direct-to-decision-maker pitching"
              },
              {
                src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop",
                label: "Offers, sealed with confidence"
              }
            ].map((g, i) => (
              <Reveal key={g.label} custom={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    src={g.src}
                    alt={g.label}
                    className="h-64 w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, ${BLACK}00 50%, ${BLACK}cc 100%)` }}
                    aria-hidden
                  />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                    {g.label}
                  </p>
                  <motion.div
                    className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: RED }}
                    aria-hidden
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- WHY IT WORKS -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
          <div className="order-2 md:order-1">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Why It Works
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight md:text-5xl text-white"
              >
                Precision, <br /><span className="italic" style={{ color: RED }}>not volume</span>
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="mt-6 leading-relaxed" style={{ color: '#efefef' }}>
                While most international candidates get lost in the noise of endless career
                portals, we work behind the scenes — identifying the right opportunities,
                pitching your profile directly to decision-makers, and preparing you to stand out
                when it matters most.
              </p>
            </Reveal>
            <Reveal custom={3}>
              <p className="mt-4 leading-relaxed" style={{ color: '#efefef' }}>
                When the interview call finally comes, we don't leave you guessing. Personalized
                mock interviews, role-specific coaching, and honest feedback build the confidence
                to perform, not just rehearse.
              </p>
            </Reveal>
            <Reveal custom={4}>
              <blockquote
                className="mt-8 border-l-2 pl-5 text-base italic"
                style={{ borderColor: RED, color: '#F4F3F1', fontFamily: "'Fraunces', serif" }}
              >
                “We don't stop until you're exactly where you're meant to be.”
              </blockquote>
            </Reveal>
            <Reveal custom={5}>
              <div className="mt-6 flex gap-4 flex-wrap">
                {['100%', 'Dedicated', 'Support'].map((tag) => (
                  <span key={tag} className="rounded-full border px-4 py-1.5 text-xs font-medium" style={{ 
                    borderColor: DARK_BORDER,
                    background: BLACK,
                    color: '#B0B0B8'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="order-1 md:order-2">
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop"
                alt="A candidate celebrating a successful career milestone"
                className="h-80 w-full rounded-2xl object-cover shadow-xl"
                style={{ border: '4px solid #1A1A1E' }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -left-6 -top-6 h-28 w-28 rounded-2xl opacity-10 md:h-36 md:w-36"
                style={{ backgroundColor: RED }}
                aria-hidden
              />
              <motion.div
                animate={float}
                className="absolute -bottom-4 -right-4 rounded-xl px-5 py-3 shadow-lg border"
                style={{ 
                  background: DARK_SURFACE,
                  borderColor: DARK_BORDER
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(230, 25, 53, 0.2)', color: RED }}>✓</div>
                    <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(230, 25, 53, 0.2)', color: RED }}>✓</div>
                  </div>
                  <span className="text-sm font-medium text-white">94% success rate</span>
                </div>
              </motion.div>
            </div>
          </Reveal>
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
              className="text-2xl font-light leading-relaxed md:text-3xl"
              style={{ fontFamily: "'Fraunces', serif", color: '#F4F3F1' }}
            >
              “Divine Talent didn't just help me find a job—they helped me find my career. Their team believed in me when I didn't believe in myself.”
            </motion.p>
          </Reveal>
          <Reveal custom={2}>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: RED }} />
                ))}
              </div>
              <p className="mt-4 font-semibold text-white">— Sarah Johnson</p>
              <p className="text-sm" style={{ color: '#B0B0B8' }}>Software Engineer at Google</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- CLOSING CTA -------- */}
      <section className="py-10 px-4 sm:px-6" style={{ background: BLACK }}>
        <Reveal>
          <motion.div 
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
                Ready to write your own chapter?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: '#B0B0B8' }}>
                Join the thousands of professionals who stopped waiting for the right
                opportunity and started building one.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
                  style={{ background: RED }}
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="/plans"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                  style={{ borderColor: 'rgba(255,255,255,0.25)' }}
                >
                  Explore Plans
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </section>
    </main>
  );
}