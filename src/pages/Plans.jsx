// import React, { useRef, useState } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import {
//   CheckCircle,
//   Star,
//   Sparkles,
//   Award,
//   Target,
//   Rocket,
//   Crown,
//   Gem,
//   Users,
//   Briefcase,
//   GraduationCap,
//   Clock,
//   Calendar,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   ArrowUpRight,
//   MoveRight,
//   CircleCheck,
//   Zap,
//   Shield,
//   Heart,
//   Lightbulb,
//   TrendingUp,
//   BarChart,
//   Globe,
//   Building,
//   UserCheck,
//   Play,
//   MessageSquare,
//   ChevronRight,
//   Sparkle,
//   ThumbsUp,
//   Flame,
//   Layers,
//   Eye
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

// function PlanCard({ plan, isPopular = false, index }) {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -8 }}
//       className={`relative rounded-2xl border transition-all duration-300 ${
//         isPopular
//           ? 'border-red-200 shadow-2xl shadow-red-100/50'
//           : 'border-black/5 shadow-lg hover:shadow-xl'
//       } bg-white overflow-hidden`}
//     >
//       {isPopular && (
//         <div
//           className="absolute right-0 top-0 rounded-bl-xl px-4 py-1.5 text-xs font-bold text-white"
//           style={{ backgroundColor: RED }}
//         >
//           POPULAR
//         </div>
//       )}

//       <div className="p-6 md:p-8">
//         <div className="flex items-start justify-between">
//           <div>
//             <h3
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="text-xl font-medium"
//             >
//               {plan.name}
//             </h3>
//             {plan.subtitle && (
//               <p className="mt-1 text-xs text-black/40">{plan.subtitle}</p>
//             )}
//           </div>
//           <div
//             className="rounded-full p-2"
//             style={{ backgroundColor: `${RED}08` }}
//           >
//             {plan.icon}
//           </div>
//         </div>

//         {plan.badge && (
//           <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold" style={{ color: RED }}>
//             <Sparkle className="w-3 h-3" />
//             {plan.badge}
//           </div>
//         )}

//         <div className="mt-5">
//           <div className="flex items-baseline gap-1">
//             <span className="text-3xl font-bold tracking-tight" style={{ color: RED }}>
//               ${plan.price}
//             </span>
//             {plan.priceNote && (
//               <span className="text-xs text-black/30">{plan.priceNote}</span>
//             )}
//           </div>
//           {plan.payment && (
//             <p className="mt-1 text-xs text-black/40">{plan.payment}</p>
//           )}
//           {plan.emi && (
//             <p className="mt-1 text-xs font-medium text-black/50">{plan.emi}</p>
//           )}
//         </div>

//         <div className="mt-6 space-y-2.5">
//           {plan.features.slice(0, expanded ? undefined : 4).map((feature, i) => (
//             <div key={i} className="flex items-start gap-2.5">
//               <CircleCheck className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
//               <span className="text-sm text-black/60">{feature}</span>
//             </div>
//           ))}
//           {plan.features.length > 4 && (
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="text-xs font-medium transition-colors hover:opacity-70"
//               style={{ color: RED }}
//             >
//               {expanded ? 'Show less' : `+ ${plan.features.length - 4} more`}
//             </button>
//           )}
//         </div>

//         <div className="mt-8">
//           <a
//             href="#"
//             className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
//             style={{ backgroundColor: BLACK }}
//           >
//             Get Started
//             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </a>
//           <button className="mt-3 w-full text-center text-xs font-medium text-black/30 transition-colors hover:text-black/50">
//             Read More →
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Plans() {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const plans = [
//     {
//       name: "Ultimate",
//       subtitle: "150 Days Job Guarantee",
//       price: "5000",
//       priceNote: "$10000 after placement",
//       payment: "Pay after placement",
//       emi: "5 EMI available",
//       badge: "Best Value",
//       icon: <Crown className="w-5 h-5" style={{ color: RED }} />,
//       features: [
//         "Resume Preparation From Specialist",
//         "RUC Included",
//         "Live Training",
//         "Interview Training",
//         "Complete Assessment Support",
//         "Complete Interview Support",
//         "Resume Marketing",
//         "SME (5+ year experience) (Personal)",
//         "Interview Scheduling",
//         "Email Support",
//         "LinkedIn Chat Support",
//         "1 Year Service Support",
//         "5 Years Coverage"
//       ]
//     },
//     {
//       name: "Premium",
//       subtitle: "200 Days Job Guarantee",
//       price: "4500",
//       priceNote: "10% after placement",
//       payment: "10% after placement",
//       emi: "4 EMI available",
//       icon: <Gem className="w-5 h-5" style={{ color: RED }} />,
//       features: [
//         "Resume Preparation From Specialist",
//         "RUC Included",
//         "Live Training",
//         "Interview Training",
//         "15 Assessment Support",
//         "20 Interview Support",
//         "Resume Marketing",
//         "SME (3+ year experience) (Personal)",
//         "Interview Scheduling",
//         "Email Support",
//         "LinkedIn Chat Support",
//         "1 Year Service Support",
//         "3 Years Coverage"
//       ]
//     },
//     {
//       name: "Standard",
//       subtitle: "Basic",
//       price: "3000",
//       priceNote: "14% after placement",
//       payment: "14% after placement",
//       emi: "4 EMI available",
//       icon: <Target className="w-5 h-5" style={{ color: RED }} />,
//       features: [
//         "Resume Preparation From Specialist",
//         "RUC Included",
//         "Live Training",
//         "Interview Training",
//         "5 Assessment Support",
//         "10 Interview Support",
//         "Resume Marketing",
//         "SME (3+ year experience) (Shared)",
//         "Interview Scheduling",
//         "Email Support",
//         "LinkedIn Chat Support",
//         "1 Year Service Support",
//         "2 Years Coverage"
//       ]
//     },
//     {
//       name: "Tailored",
//       subtitle: "Customized",
//       price: "1500",
//       priceNote: "DOSR",
//       payment: "DOSR",
//       emi: "4 EMI available",
//       icon: <Zap className="w-5 h-5" style={{ color: RED }} />,
//       features: [
//         "Resume Preparation From Specialist",
//         "RUC Included",
//         "DOSR Live Training",
//         "DOSR Interview Training",
//         "DOSR Assessment Support",
//         "DOSR Interview Support",
//         "Resume Marketing",
//         "Depends on Upfront Amount",
//         "Interview Scheduling",
//         "Email Support",
//         "LinkedIn Chat Support",
//         "Depends on Upfront Amount",
//         "2 Years Coverage"
//       ]
//     }
//   ];

//   const planSpecs = [
//     { service: "Resume Preparation", ultimate: "From Specialist", premium: "From Specialist", standard: "From Specialist", tailored: "From Specialist" },
//     { service: "RUC", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
//     { service: "Live Training", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "DOSR" },
//     { service: "Interview Training", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "DOSR" },
//     { service: "Assessment Support", ultimate: "Complete", premium: "15", standard: "5", tailored: "DOSR" },
//     { service: "Interview Support", ultimate: "Complete", premium: "20", standard: "10", tailored: "DOSR" },
//     { service: "Resume Marketing", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
//     { service: "Associate Recruiter", ultimate: "SME (5+ year experience) (Personal)", premium: "SME (3+ year experience) (Personal)", standard: "SME (3+ year experience) (Shared)", tailored: "Depends on Upfront Amount" },
//     { service: "Interview Scheduling", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
//     { service: "Email Support", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
//     { service: "LinkedIn Chat Support", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
//     { service: "Service Support", ultimate: "1 Year", premium: "1 Year", standard: "1 Year", tailored: "Depends on Upfront Amount" },
//     { service: "Coverage", ultimate: "5 Years", premium: "3 Years", standard: "2 Years", tailored: "2 Years" },
//   ];

//   const perks = [
//     { icon: Building, text: "Full Time Jobs with direct fortune 500 clients (As per your Priority)" },
//     { icon: TrendingUp, text: "Perfect opportunity with the highest pay rates in the market across the USA" },
//     { icon: Rocket, text: "Expert marketing strategies that help the candidate to get the offer within 30 days" },
//     { icon: Users, text: "Real Time Practical Trainings in live sessions by industry experts" },
//     { icon: Briefcase, text: "Extraordinary resume mapping along with cover letter making through professionals" },
//     { icon: UserCheck, text: "Exclusive and dedicated recruiter for every candidate" },
//     { icon: Shield, text: "After-placement support (Post-Placement Project oriented training)" },
//     { icon: Globe, text: "Divine Talent exclusive visa consultation support" },
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
//           className="relative mx-auto max-w-4xl px-6 text-center md:px-10"
//         >

//           <Reveal custom={1}>
//             <h1
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-5 text-[2.8rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
//             >
//               Choose Your <span className="italic" style={{ color: RED }}>Path</span> to Success
//             </h1>
//           </Reveal>

//           <Reveal custom={2}>
//             <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
//               Following are the best plans for getting a Job in specific time
//             </p>
//           </Reveal>
//         </motion.div>
//       </section>

//       {/* -------- PLANS GRID -------- */}
//       <section className="bg-white pb-16 md:pb-24">
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {plans.map((plan, index) => (
//               <PlanCard
//                 key={plan.name}
//                 plan={plan}
//                 isPopular={plan.name === "Ultimate"}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* -------- PLAN SPECIFICATION TABLE -------- */}
//       <section className="bg-white py-16 md:py-24" style={{ backgroundColor: "#FAFAFA" }}>
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <Reveal>
//             <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//               <span className="h-px w-6" style={{ backgroundColor: RED }} />
//               Plan Specification
//             </span>
//           </Reveal>
//           <Reveal custom={1}>
//             <h2
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-3 text-3xl font-medium leading-tight md:text-4xl"
//             >
//               Compare <span className="italic" style={{ color: RED }}>Our Plans</span>
//             </h2>
//           </Reveal>

//           <div className="mt-8 overflow-x-auto">
//             <table className="w-full min-w-[700px] border-collapse">
//               <thead>
//                 <tr className="border-b-2" style={{ borderColor: RED }}>
//                   <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.08em] text-black/40">
//                     Services
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: RED }}>
//                     Ultimate
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-black/60">
//                     Premium
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-black/60">
//                     Standard
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-black/60">
//                     Tailored
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {planSpecs.map((row, index) => (
//                   <motion.tr
//                     key={row.service}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.03 }}
//                     viewport={{ once: true }}
//                     className={`border-b border-black/5 transition-colors ${
//                       index % 2 === 0 ? 'bg-white' : 'bg-black/5'
//                     } hover:bg-black/10`}
//                   >
//                     <td className="px-4 py-3 text-sm font-medium text-black/70">
//                       {row.service}
//                     </td>
//                     <td className="px-4 py-3 text-center text-sm font-semibold" style={{ color: RED }}>
//                       {row.ultimate}
//                     </td>
//                     <td className="px-4 py-3 text-center text-sm text-black/60">
//                       {row.premium}
//                     </td>
//                     <td className="px-4 py-3 text-center text-sm text-black/60">
//                       {row.standard}
//                     </td>
//                     <td className="px-4 py-3 text-center text-sm text-black/60">
//                       {row.tailored}
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* -------- BOOT CAMP TRAINING -------- */}
//       <section className="bg-white py-16 md:py-24">
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <Reveal>
//             <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//               <span className="h-px w-6" style={{ backgroundColor: RED }} />
//               Boot Camp Training Plans
//             </span>
//           </Reveal>
//           <Reveal custom={1}>
//             <h2
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-3 text-3xl font-medium leading-tight md:text-4xl"
//             >
//               Intensive <span className="italic" style={{ color: RED }}>Training</span> Programs
//             </h2>
//           </Reveal>

//           <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
//             <Reveal>
//               <motion.div
//                 whileHover={{ y: -4 }}
//                 className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <h4 className="text-lg font-semibold" style={{ fontFamily: "'Fraunces', serif" }}>
//                       Training Module 1
//                     </h4>
//                     <p className="mt-1 text-sm text-black/40">Time: 50 Hours</p>
//                   </div>
//                   <div className="text-xl font-bold" style={{ color: RED }}>
//                     $1999
//                   </div>
//                 </div>
//                 <div className="mt-4 h-px w-full bg-black/5" />
//                 <div className="mt-4 flex items-center gap-2 text-sm">
//                   <Clock className="w-4 h-4 text-black/30" />
//                   <span className="text-black/50">Comprehensive foundational training</span>
//                 </div>
//               </motion.div>
//             </Reveal>

//             <Reveal custom={1}>
//               <motion.div
//                 whileHover={{ y: -4 }}
//                 className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <h4 className="text-lg font-semibold" style={{ fontFamily: "'Fraunces', serif" }}>
//                       Training Module 2
//                     </h4>
//                     <p className="mt-1 text-sm text-black/40">Time: 100 Hours</p>
//                   </div>
//                   <div className="text-xl font-bold" style={{ color: RED }}>
//                     $3599
//                   </div>
//                 </div>
//                 <div className="mt-4 h-px w-full bg-black/5" />
//                 <div className="mt-4 flex items-center gap-2 text-sm">
//                   <Clock className="w-4 h-4 text-black/30" />
//                   <span className="text-black/50">Advanced hands-on training</span>
//                 </div>
//               </motion.div>
//             </Reveal>
//           </div>

//           <div className="mt-8 rounded-2xl border border-black/5 bg-gradient-to-br from-white to-black/5 p-6 shadow-lg">
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 rounded-full p-1" style={{ backgroundColor: `${RED}10` }}>
//                   <CheckCircle className="w-4 h-4" style={{ color: RED }} />
//                 </div>
//                 <p className="text-black/60">
//                   If Boot Camp is taken along with any plan, straight <strong style={{ color: RED }}>10% discount</strong> will be provided on total cost.
//                 </p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 rounded-full p-1" style={{ backgroundColor: `${RED}10` }}>
//                   <Users className="w-4 h-4" style={{ color: RED }} />
//                 </div>
//                 <p className="text-black/60">
//                   Boot Camp Training will be provided in Batches of <strong>Minimum 2 candidates &amp; Maximum 10 Candidates</strong>.
//                 </p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 rounded-full p-1" style={{ backgroundColor: `${RED}10` }}>
//                   <Lightbulb className="w-4 h-4" style={{ color: RED }} />
//                 </div>
//                 <p className="text-black/60">
//                   Live Training provided in the plans mentioned above is fundamental training and is not a part of Bootcamp.
//                   Fundamental training will cover basic details and are for brush-up purpose only.
//                 </p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 rounded-full p-1" style={{ backgroundColor: `${RED}10` }}>
//                   <Mail className="w-4 h-4" style={{ color: RED }} />
//                 </div>
//                 <p className="text-black/60">
//                   For Module details, <a href="#" className="font-semibold underline" style={{ color: RED }}>Contact Us</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* -------- OTHER PERKS -------- */}
//       <section className="bg-white py-16 md:py-24" style={{ backgroundColor: "#FAFAFA" }}>
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <Reveal>
//             <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//               <span className="h-px w-6" style={{ backgroundColor: RED }} />
//               Other Perks of Association
//             </span>
//           </Reveal>
//           <Reveal custom={1}>
//             <h2
//               style={{ fontFamily: "'Fraunces', serif" }}
//               className="mt-3 text-3xl font-medium leading-tight md:text-4xl"
//             >
//               What <span className="italic" style={{ color: RED }}>Sets Us Apart</span>
//             </h2>
//           </Reveal>

//           <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
//             {perks.map((perk, index) => {
//               const Icon = perk.icon;
//               return (
//                 <Reveal key={index} custom={index}>
//                   <motion.div
//                     whileHover={{ x: 4 }}
//                     className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
//                   >
//                     <div className="mt-0.5 rounded-full p-1.5" style={{ backgroundColor: `${RED}08` }}>
//                       <Icon className="w-4 h-4" style={{ color: RED }} />
//                     </div>
//                     <p className="text-sm text-black/70">{perk.text}</p>
//                   </motion.div>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* -------- STANDARD PROCEDURE -------- */}
//       <section className="bg-white py-16 md:py-24">
//         <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
//           <Reveal>
//             <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//               <span className="h-px w-6" style={{ backgroundColor: RED }} />
//               Standard Procedure
//             </span>
//           </Reveal>
//           <Reveal custom={1}>
//             <div className="mt-6 rounded-3xl border border-black/5 bg-gradient-to-br from-white to-black/5 p-8 md:p-12 shadow-lg">
//               <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
//                 {[
//                   { icon: UserCheck, label: "Apply" },
//                   { icon: Clock, label: "Review" },
//                   { icon: Users, label: "Interview" },
//                   { icon: Award, label: "Offer" },
//                   { icon: Rocket, label: "Start" },
//                 ].map((step, i) => (
//                   <div key={i} className="flex flex-col items-center gap-1.5">
//                     <div
//                       className="flex h-12 w-12 items-center justify-center rounded-full text-white"
//                       style={{ backgroundColor: RED }}
//                     >
//                       <step.icon className="w-5 h-5" />
//                     </div>
//                     <span className="text-xs font-medium text-black/40 uppercase tracking-wider">
//                       {step.label}
//                     </span>
//                     {i < 4 && (
//                       <ChevronRight className="absolute hidden md:block -right-6 w-4 h-4 text-black/20" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }










import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  CheckCircle,
  Star,
  Sparkles,
  Award,
  Target,
  Rocket,
  Crown,
  Gem,
  Users,
  Briefcase,
  GraduationCap,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  MoveRight,
  CircleCheck,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  TrendingUp,
  BarChart,
  Globe,
  Building,
  UserCheck,
  Play,
  MessageSquare,
  ChevronRight,
  Sparkle,
  ThumbsUp,
  Flame,
  Layers,
  Eye,
  Infinity,
  Check
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

function PlanCard({ plan, isPopular = false, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
        isPopular
          ? 'shadow-2xl'
          : 'shadow-lg hover:shadow-xl'
      }`}
      style={{ 
        background: DARK_SURFACE,
        borderColor: isPopular ? RED : DARK_BORDER
      }}
    >
      {isPopular && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute right-0 top-0 rounded-bl-xl px-4 py-1.5 text-xs font-bold text-white"
          style={{ backgroundColor: RED }}
        >
          POPULAR
        </motion.div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between">
          <div>
            <h3
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-xl font-medium text-white"
            >
              {plan.name}
            </h3>
            {plan.subtitle && (
              <p className="mt-1 text-xs" style={{ color: '#efefef' }}>{plan.subtitle}</p>
            )}
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="rounded-full p-2"
            style={{ background: 'rgba(230, 25, 53, 0.1)' }}
          >
            {plan.icon}
          </motion.div>
        </div>

        {plan.badge && (
          <motion.div 
            variants={pulse}
            animate="animate"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: 'rgba(230, 25, 53, 0.15)', color: RED }}
          >
            <Sparkle className="w-3 h-3" />
            {plan.badge}
          </motion.div>
        )}

        <div className="mt-5">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight" style={{ color: RED }}>
              ${plan.price}
            </span>
            {plan.priceNote && (
              <span className="text-xs" style={{ color: '#efefef' }}>{plan.priceNote}</span>
            )}
          </div>
          {plan.payment && (
            <p className="mt-1 text-xs" style={{ color: '#efefef' }}>{plan.payment}</p>
          )}
          {plan.emi && (
            <p className="mt-1 text-xs font-medium" style={{ color: '#F4F3F1' }}>{plan.emi}</p>
          )}
        </div>

        <div className="mt-6 space-y-2.5">
          {plan.features.slice(0, expanded ? undefined : 4).map((feature, i) => (
            <motion.div 
              key={i} 
              className="flex items-start gap-2.5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <CircleCheck className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
              <span className="text-sm" style={{ color: '#F4F3F1' }}>{feature}</span>
            </motion.div>
          ))}
          {plan.features.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-medium transition-colors hover:opacity-70"
              style={{ color: RED }}
            >
              {expanded ? 'Show less' : `+ ${plan.features.length - 4} more`}
            </button>
          )}
        </div>

        <div className="mt-8">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            style={{ background: RED }}
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <button className="mt-3 w-full text-center text-xs font-medium transition-colors" style={{ color: '#efefef' }}>
            Read More →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Plans() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const plans = [
    {
      name: "Ultimate",
      subtitle: "150 Days Job Guarantee",
      price: "5000",
      priceNote: "$10000 after placement",
      payment: "Pay after placement",
      emi: "5 EMI available",
      badge: "Best Value",
      icon: <Crown className="w-5 h-5" style={{ color: RED }} />,
      features: [
        "Resume Preparation From Specialist",
        "RUC Included",
        "Live Training",
        "Interview Training",
        "Complete Assessment Support",
        "Complete Interview Support",
        "Resume Marketing",
        "SME (5+ year experience) (Personal)",
        "Interview Scheduling",
        "Email Support",
        "LinkedIn Chat Support",
        "1 Year Service Support",
        "5 Years Coverage"
      ]
    },
    {
      name: "Premium",
      subtitle: "200 Days Job Guarantee",
      price: "4500",
      priceNote: "10% after placement",
      payment: "10% after placement",
      emi: "4 EMI available",
      icon: <Gem className="w-5 h-5" style={{ color: RED }} />,
      features: [
        "Resume Preparation From Specialist",
        "RUC Included",
        "Live Training",
        "Interview Training",
        "15 Assessment Support",
        "20 Interview Support",
        "Resume Marketing",
        "SME (3+ year experience) (Personal)",
        "Interview Scheduling",
        "Email Support",
        "LinkedIn Chat Support",
        "1 Year Service Support",
        "3 Years Coverage"
      ]
    },
    {
      name: "Standard",
      subtitle: "Basic",
      price: "3000",
      priceNote: "14% after placement",
      payment: "14% after placement",
      emi: "4 EMI available",
      icon: <Target className="w-5 h-5" style={{ color: RED }} />,
      features: [
        "Resume Preparation From Specialist",
        "RUC Included",
        "Live Training",
        "Interview Training",
        "5 Assessment Support",
        "10 Interview Support",
        "Resume Marketing",
        "SME (3+ year experience) (Shared)",
        "Interview Scheduling",
        "Email Support",
        "LinkedIn Chat Support",
        "1 Year Service Support",
        "2 Years Coverage"
      ]
    },
    {
      name: "Tailored",
      subtitle: "Customized",
      price: "1500",
      priceNote: "DOSR",
      payment: "DOSR",
      emi: "4 EMI available",
      icon: <Zap className="w-5 h-5" style={{ color: RED }} />,
      features: [
        "Resume Preparation From Specialist",
        "RUC Included",
        "DOSR Live Training",
        "DOSR Interview Training",
        "DOSR Assessment Support",
        "DOSR Interview Support",
        "Resume Marketing",
        "Depends on Upfront Amount",
        "Interview Scheduling",
        "Email Support",
        "LinkedIn Chat Support",
        "Depends on Upfront Amount",
        "2 Years Coverage"
      ]
    }
  ];

  const planSpecs = [
    { service: "Resume Preparation", ultimate: "From Specialist", premium: "From Specialist", standard: "From Specialist", tailored: "From Specialist" },
    { service: "RUC", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
    { service: "Live Training", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "DOSR" },
    { service: "Interview Training", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "DOSR" },
    { service: "Assessment Support", ultimate: "Complete", premium: "15", standard: "5", tailored: "DOSR" },
    { service: "Interview Support", ultimate: "Complete", premium: "20", standard: "10", tailored: "DOSR" },
    { service: "Resume Marketing", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
    { service: "Associate Recruiter", ultimate: "SME (5+ year experience) (Personal)", premium: "SME (3+ year experience) (Personal)", standard: "SME (3+ year experience) (Shared)", tailored: "Depends on Upfront Amount" },
    { service: "Interview Scheduling", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
    { service: "Email Support", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
    { service: "LinkedIn Chat Support", ultimate: "Yes", premium: "Yes", standard: "Yes", tailored: "Yes" },
    { service: "Service Support", ultimate: "1 Year", premium: "1 Year", standard: "1 Year", tailored: "Depends on Upfront Amount" },
    { service: "Coverage", ultimate: "5 Years", premium: "3 Years", standard: "2 Years", tailored: "2 Years" },
  ];

  const perks = [
    { icon: Building, text: "Full Time Jobs with direct fortune 500 clients (As per your Priority)" },
    { icon: TrendingUp, text: "Perfect opportunity with the highest pay rates in the market across the USA" },
    { icon: Rocket, text: "Expert marketing strategies that help the candidate to get the offer within 30 days" },
    { icon: Users, text: "Real Time Practical Trainings in live sessions by industry experts" },
    { icon: Briefcase, text: "Extraordinary resume mapping along with cover letter making through professionals" },
    { icon: UserCheck, text: "Exclusive and dedicated recruiter for every candidate" },
    { icon: Shield, text: "After-placement support (Post-Placement Project oriented training)" },
    { icon: Globe, text: "Divine Talent exclusive visa consultation support" },
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
          className="relative mx-auto max-w-4xl px-6 text-center md:px-10"
        >

          <Reveal custom={1}>
            <h1
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-5 text-[2.8rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl text-white"
            >
              Choose Your <span className="italic" style={{ color: RED }}>Path</span> to Success
            </h1>
          </Reveal>

          <Reveal custom={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: '#efefef' }}>
              Following are the best plans for getting a Job in specific time
            </p>
          </Reveal>
        </motion.div>
      </section>

      {/* -------- PLANS GRID -------- */}
      <section className="pb-16 md:pb-24" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                isPopular={plan.name === "Ultimate"}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -------- PLAN SPECIFICATION TABLE -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
              <span className="h-px w-6" style={{ backgroundColor: RED }} />
              Plan Specification
            </span>
          </Reveal>
          <Reveal custom={1}>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-3 text-3xl font-medium leading-tight md:text-4xl text-white"
            >
              Compare <span className="italic" style={{ color: RED }}>Our Plans</span>
            </h2>
          </Reveal>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b-2" style={{ borderColor: RED }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                    Services
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: RED }}>
                    Ultimate
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                    Premium
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                    Standard
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                    Tailored
                  </th>
                </tr>
              </thead>
              <tbody>
                {planSpecs.map((row, index) => (
                  <motion.tr
                    key={row.service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className={`border-b transition-colors ${
                      index % 2 === 0 ? 'bg-transparent' : 'bg-black/20'
                    } hover:bg-black/30`}
                    style={{ borderColor: DARK_BORDER }}
                  >
                    <td className="px-4 py-3 text-sm font-medium" style={{ color: '#F4F3F1' }}>
                      {row.service}
                    </td>
                    <td className="px-4 py-3 text-center text-sm font-semibold" style={{ color: RED }}>
                      {row.ultimate}
                    </td>
                    <td className="px-4 py-3 text-center text-sm" style={{ color: '#efefef' }}>
                      {row.premium}
                    </td>
                    <td className="px-4 py-3 text-center text-sm" style={{ color: '#efefef' }}>
                      {row.standard}
                    </td>
                    <td className="px-4 py-3 text-center text-sm" style={{ color: '#efefef' }}>
                      {row.tailored}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -------- BOOT CAMP TRAINING -------- */}
      <section className="py-16" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
              <span className="h-px w-6" style={{ backgroundColor: RED }} />
              Boot Camp Training Plans
            </span>
          </Reveal>
          <Reveal custom={1}>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-3 text-3xl font-medium leading-tight md:text-4xl text-white"
            >
              Intensive <span className="italic" style={{ color: RED }}>Training</span> Programs
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl"
                style={{ 
                  background: DARK_SURFACE,
                  borderColor: DARK_BORDER
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                      Training Module 1
                    </h4>
                    <p className="mt-1 text-sm" style={{ color: '#efefef' }}>Time: 50 Hours</p>
                  </div>
                  <div className="text-xl font-bold" style={{ color: RED }}>
                    $1999
                  </div>
                </div>
                <div className="mt-4 h-px w-full" style={{ background: DARK_BORDER }} />
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" style={{ color: '#efefef' }} />
                  <span style={{ color: '#efefef' }}>Comprehensive foundational training</span>
                </div>
              </motion.div>
            </Reveal>

            <Reveal custom={1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl"
                style={{ 
                  background: DARK_SURFACE,
                  borderColor: DARK_BORDER
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                      Training Module 2
                    </h4>
                    <p className="mt-1 text-sm" style={{ color: '#efefef' }}>Time: 100 Hours</p>
                  </div>
                  <div className="text-xl font-bold" style={{ color: RED }}>
                    $3599
                  </div>
                </div>
                <div className="mt-4 h-px w-full" style={{ background: DARK_BORDER }} />
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" style={{ color: '#efefef' }} />
                  <span style={{ color: '#efefef' }}>Advanced hands-on training</span>
                </div>
              </motion.div>
            </Reveal>
          </div>

          <motion.div 
            className="mt-8 rounded-2xl border p-6 shadow-lg"
            style={{ 
              background: DARK_SURFACE,
              borderColor: DARK_BORDER
            }}
            whileHover={{ y: -4 }}
          >
            <div className="space-y-3 text-sm">
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mt-0.5 rounded-full p-1" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                  <CheckCircle className="w-4 h-4" style={{ color: RED }} />
                </div>
                <p style={{ color: '#efefef' }}>
                  If Boot Camp is taken along with any plan, straight <strong style={{ color: RED }}>10% discount</strong> will be provided on total cost.
                </p>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mt-0.5 rounded-full p-1" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                  <Users className="w-4 h-4" style={{ color: RED }} />
                </div>
                <p style={{ color: '#efefef' }}>
                  Boot Camp Training will be provided in Batches of <strong style={{ color: RED }}>Minimum 2 candidates &amp; Maximum 10 Candidates</strong>.
                </p>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="mt-0.5 rounded-full p-1" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                  <Lightbulb className="w-4 h-4" style={{ color: RED }} />
                </div>
                <p style={{ color: '#efefef' }}>
                  Live Training provided in the plans mentioned above is fundamental training and is not a part of Bootcamp.
                  Fundamental training will cover basic details and are for brush-up purpose only.
                </p>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mt-0.5 rounded-full p-1" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                  <Mail className="w-4 h-4" style={{ color: RED }} />
                </div>
                <p style={{ color: '#efefef' }}>
                  For Module details, <a href="/contact" className="font-semibold underline" style={{ color: RED }}>Contact Us</a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------- OTHER PERKS -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
              <span className="h-px w-6" style={{ backgroundColor: RED }} />
              Other Perks of Association
            </span>
          </Reveal>
          <Reveal custom={1}>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-3 text-3xl font-medium leading-tight md:text-4xl text-white"
            >
              What <span className="italic" style={{ color: RED }}>Sets Us Apart</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <Reveal key={index} custom={index}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 hover:shadow-md"
                    style={{ 
                      background: BLACK,
                      borderColor: DARK_BORDER
                    }}
                  >
                    <div className="mt-0.5 rounded-full p-1.5" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                      <Icon className="w-4 h-4" style={{ color: RED }} />
                    </div>
                    <p className="text-sm" style={{ color: '#F4F3F1' }}>{perk.text}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- STANDARD PROCEDURE -------- */}
      <section className="py-16" style={{ background: BLACK }}>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
              <span className="h-px w-6" style={{ backgroundColor: RED }} />
              Standard Procedure
            </span>
          </Reveal>
          <Reveal custom={1}>
            <motion.div 
              className="mt-6 rounded-3xl border p-8 md:p-12 shadow-lg"
              style={{ 
                background: DARK_SURFACE,
                borderColor: DARK_BORDER
              }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 relative">
                {[
                  { icon: UserCheck, label: "Apply" },
                  { icon: Clock, label: "Review" },
                  { icon: Users, label: "Interview" },
                  { icon: Award, label: "Offer" },
                  { icon: Rocket, label: "Start" },
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center gap-1.5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
                      style={{ background: RED }}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#efefef' }}>
                      {step.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}