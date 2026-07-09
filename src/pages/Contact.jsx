// import React, { useRef, useState } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Send,
//   CheckCircle,
//   ArrowRight,
//   MessageSquare,
//   User,
//   Building,
//   Globe,
//   Clock,
//   Sparkles,
//   ChevronRight,
//   Star,
//   Shield,
//   Users,
//   Award,
//   Zap,
//   Heart,
//   Target,
//   Quote,
//   ArrowUpRight,
//   MoveRight,
//   CircleCheck,
//   Sparkle
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

// function InputField({ label, placeholder, type = "text", icon: Icon, required = false }) {
//   const [isFocused, setIsFocused] = useState(false);
//   const [value, setValue] = useState("");

//   return (
//     <div className="relative">
//       <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-black/40 mb-1.5">
//         {label}
//         {required && <span className="ml-1" style={{ color: RED }}>*</span>}
//       </label>
//       <div className="relative">
//         {Icon && (
//           <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40">
//             <Icon className="w-4 h-4" />
//           </div>
//         )}
//         <input
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className={`w-full rounded-xl border bg-white/50 px-4 py-3.5 text-sm transition-all duration-300 outline-none ${
//             Icon ? 'pl-10' : 'pl-4'
//           } ${
//             isFocused
//               ? 'border-black/30 shadow-lg shadow-black/5'
//               : 'border-black/10 hover:border-black/20'
//           }`}
//           style={{
//             borderColor: isFocused ? RED : undefined,
//             boxShadow: isFocused ? `0 0 0 3px ${RED}15` : undefined,
//           }}
//         />
//         {isFocused && (
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             className="absolute -bottom-0.5 left-0 h-0.5 w-full"
//             style={{ backgroundColor: RED }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// function TextAreaField({ label, placeholder, icon: Icon, required = false }) {
//   const [isFocused, setIsFocused] = useState(false);
//   const [value, setValue] = useState("");

//   return (
//     <div className="relative">
//       <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-black/40 mb-1.5">
//         {label}
//         {required && <span className="ml-1" style={{ color: RED }}>*</span>}
//       </label>
//       <div className="relative">
//         {Icon && (
//           <div className="absolute left-3 top-3.5 opacity-40">
//             <Icon className="w-4 h-4" />
//           </div>
//         )}
//         <textarea
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           rows={4}
//           className={`w-full rounded-xl border bg-white/50 px-4 py-3.5 text-sm transition-all duration-300 outline-none resize-none ${
//             Icon ? 'pl-10' : 'pl-4'
//           } ${
//             isFocused
//               ? 'border-black/30 shadow-lg shadow-black/5'
//               : 'border-black/10 hover:border-black/20'
//           }`}
//           style={{
//             borderColor: isFocused ? RED : undefined,
//             boxShadow: isFocused ? `0 0 0 3px ${RED}15` : undefined,
//           }}
//         />
//         {isFocused && (
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             className="absolute -bottom-0.5 left-0 h-0.5 w-full"
//             style={{ backgroundColor: RED }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default function Contact() {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [agreeToTerms, setAgreeToTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//     setTimeout(() => setFormSubmitted(false), 4000);
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "113 Fraser St., Coleman MI 48618",
//       color: "#3B82F6"
//     },
//     {
//       icon: Mail,
//       label: "Email Address",
//       value: "info@divinetalent.in",
//       color: "#EF4444"
//     },
//     {
//       icon: Phone,
//       label: "Phone No.",
//       value: "+1 (201) 772-2853",
//       color: "#8B5CF6"
//     },
//   ];

//   const features = [
//     { icon: Clock, label: "24/7 Support", desc: "Always here to help" },
//     { icon: Shield, label: "Secure & Private", desc: "Your data is safe" },
//     { icon: Zap, label: "Fast Response", desc: "Within 24 hours" },
//     { icon: Users, label: "Expert Team", desc: "Dedicated professionals" },
//   ];

//   return (
//     <main
//       style={{ fontFamily: "'Inter', sans-serif", color: BLACK, backgroundColor: "#FFFFFF" }}
//       className="w-full overflow-x-hidden"
//     >
//       {/* -------- HERO -------- */}
//       <section ref={heroRef} className="relative bg-white pt-8 pb-20 md:pb-28 overflow-hidden">
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
//               Let's <span className="italic" style={{ color: RED }}>connect</span> and
//               <br />
//               build something great
//             </h1>
//           </Reveal>

//           <Reveal custom={2}>
//             <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
//               Discover our new and improved ways to get in touch with us.
//               Explore our updated contact options today!
//             </p>
//           </Reveal>
//         </motion.div>
//       </section>

//       {/* -------- CONTACT INFO CARDS -------- */}
//       <section className="bg-white -mt-8 relative z-10 pb-16">
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 gap-4 md:grid-cols-3"
//           >
//             {contactInfo.map((info, i) => {
//               const Icon = info.icon;
//               return (
//                 <motion.div
//                   key={info.label}
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.2 }}
//                   className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
//                 >
//                   <div
//                     className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
//                     style={{ backgroundColor: RED }}
//                     aria-hidden
//                   />
//                   <div
//                     className="mb-3 inline-flex rounded-xl p-2.5"
//                     style={{ backgroundColor: `${RED}08` }}
//                   >
//                     <Icon className="w-5 h-5" style={{ color: RED }} />
//                   </div>
//                   <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/30">
//                     {info.label}
//                   </p>
//                   <p className="mt-1 text-sm font-medium text-black/80">{info.value}</p>
//                   <div className="mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                     <span className="text-xs font-medium" style={{ color: RED }}>
//                       Copy →
//                     </span>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* -------- FORM + LOCATION -------- */}
//       <section className="bg-white py-16 md:py-24" style={{ backgroundColor: "#FAFAFA" }}>
//         <div className="mx-auto max-w-6xl px-6 md:px-10">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
//             {/* Form Column */}
//             <div className="lg:col-span-3">
//               <Reveal>
//                 <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
//                   <span className="h-px w-6" style={{ backgroundColor: RED }} />
//                   Get In Touch
//                 </span>
//               </Reveal>
//               <Reveal custom={1}>
//                 <h2
//                   style={{ fontFamily: "'Fraunces', serif" }}
//                   className="mt-3 text-3xl font-medium leading-tight md:text-4xl"
//                 >
//                   Ready to <span className="italic" style={{ color: RED }}>Get Started</span>
//                 </h2>
//               </Reveal>
//               <Reveal custom={2}>
//                 <p className="mt-3 text-sm text-black/50">
//                   Feel free to reach out if you have any questions or need more information.
//                 </p>
//               </Reveal>

//               <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <InputField
//                     label="First Name"
//                     placeholder="First Name"
//                     icon={User}
//                     required
//                   />
//                   <InputField
//                     label="Last Name"
//                     placeholder="Last Name"
//                     icon={User}
//                     required
//                   />
//                 </div>

//                 <InputField
//                   label="Email"
//                   placeholder="Email"
//                   type="email"
//                   icon={Mail}
//                   required
//                 />

//                 <InputField
//                   label="Phone Number"
//                   placeholder="Phone Number"
//                   type="tel"
//                   icon={Phone}
//                   required
//                 />

//                 <TextAreaField
//                   label="Message"
//                   placeholder="Message"
//                   icon={MessageSquare}
//                   required
//                 />

//                 <Reveal>
//                   <label className="flex items-start gap-3 cursor-pointer group">
//                     <input
//                       type="checkbox"
//                       checked={agreeToTerms}
//                       onChange={(e) => setAgreeToTerms(e.target.checked)}
//                       className="mt-0.5 w-4 h-4 rounded border-black/20 accent-red-500 transition-all"
//                       style={{ accentColor: RED }}
//                     />
//                     <span className="text-xs leading-relaxed text-black/50">
//                       By checking this box, You agree to receive SMS text messages from Divine Talent
//                       for customer care updates and account notifications. Reply STOP to opt out at
//                       any time. Reply HELP for help. Message and data rates may apply. Message
//                       frequency may vary. Carriers are not liable for delayed or undelivered messages.
//                       Read our Privacy Policy
//                     </span>
//                   </label>
//                 </Reveal>

//                 <Reveal>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.97 }}
//                     type="submit"
//                     disabled={!agreeToTerms}
//                     className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ${
//                       agreeToTerms
//                         ? 'hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
//                         : 'opacity-50 cursor-not-allowed'
//                     }`}
//                     style={{ backgroundColor: agreeToTerms ? BLACK : '#999' }}
//                   >
//                     {formSubmitted ? (
//                       <>
//                         <CheckCircle className="w-4 h-4" />
//                         <span>Message Sent!</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                         <span>Send Message</span>
//                       </>
//                     )}
//                   </motion.button>
//                 </Reveal>
//               </form>
//             </div>

//             {/* Right Column - Location & Features */}
//             <div className="lg:col-span-2 space-y-8">
//               <Reveal>
//                 <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-lg">
//                   <div
//                     className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-[0.04]"
//                     style={{ backgroundColor: RED }}
//                     aria-hidden
//                   />
//                   <div className="flex items-start gap-4">
//                     <div className="rounded-xl p-2.5" style={{ backgroundColor: `${RED}08` }}>
//                       <MapPin className="w-5 h-5" style={{ color: RED }} />
//                     </div>
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/30">
//                         Location
//                       </p>
//                       <p className="mt-1 text-sm font-medium text-black/80">112 Fraser St., Coleman MI 48618</p>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>

//               <Reveal custom={1}>
//                 <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg">
//                   <h4 className="text-sm font-semibold text-black/40 uppercase tracking-[0.08em]">
//                     Why reach out?
//                   </h4>
//                   <div className="mt-4 grid grid-cols-2 gap-3">
//                     {features.map((f, i) => {
//                       const Icon = f.icon;
//                       return (
//                         <div key={f.label} className="flex items-start gap-2.5">
//                           <div className="mt-0.5 rounded-full p-1.5" style={{ backgroundColor: `${RED}06` }}>
//                             <Icon className="w-3.5 h-3.5" style={{ color: RED }} />
//                           </div>
//                           <div>
//                             <p className="text-xs font-semibold text-black/80">{f.label}</p>
//                             <p className="text-[10px] text-black/30">{f.desc}</p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </Reveal>

//               <Reveal custom={2}>
//                 <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-white to-black/5 p-6 shadow-lg">
//                   <div className="flex items-center gap-3">
//                     <div className="flex -space-x-1.5">
//                       {[1, 2, 3, 4].map((i) => (
//                         <div
//                           key={i}
//                           className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-black/30"
//                         >
//                           {String.fromCharCode(64 + i)}
//                         </div>
//                       ))}
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">Join our community</p>
//                       <p className="text-xs text-black/30">2,200+ professionals</p>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }













import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  User,
  Building,
  Globe,
  Clock,
  Sparkles,
  ChevronRight,
  Star,
  Shield,
  Users,
  Award,
  Zap,
  Heart,
  Target,
  Quote,
  ArrowUpRight,
  MoveRight,
  CircleCheck,
  Sparkle,
  Linkedin,
  Twitter,
  Youtube,
  Instagram
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

function InputField({ label, placeholder, type = "text", icon: Icon, required = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <label className="block text-xs font-semibold uppercase tracking-[0.08em] mb-1.5" style={{ color: '#efefef' }}>
        {label}
        {required && <span className="ml-1" style={{ color: RED }}>*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#efefef' }}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-300 outline-none ${
            Icon ? 'pl-10' : 'pl-4'
          }`}
          style={{
            background: BLACK,
            borderColor: isFocused ? RED : DARK_BORDER,
            color: '#FFFFFF',
            boxShadow: isFocused ? `0 0 0 3px ${RED}20` : 'none',
          }}
          placeholderStyle={{ color: '#efefef' }}
        />
        {isFocused && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute -bottom-0.5 left-0 h-0.5 w-full"
            style={{ backgroundColor: RED }}
          />
        )}
      </div>
    </div>
  );
}

function TextAreaField({ label, placeholder, icon: Icon, required = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <label className="block text-xs font-semibold uppercase tracking-[0.08em] mb-1.5" style={{ color: '#efefef' }}>
        {label}
        {required && <span className="ml-1" style={{ color: RED }}>*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-3.5" style={{ color: '#efefef' }}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
          className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-300 outline-none resize-none ${
            Icon ? 'pl-10' : 'pl-4'
          }`}
          style={{
            background: BLACK,
            borderColor: isFocused ? RED : DARK_BORDER,
            color: '#FFFFFF',
            boxShadow: isFocused ? `0 0 0 3px ${RED}20` : 'none',
          }}
        />
        {isFocused && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute -bottom-0.5 left-0 h-0.5 w-full"
            style={{ backgroundColor: RED }}
          />
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "113 Fraser St., Coleman MI 48618",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "info@divinetalent.in",
    },
    {
      icon: Phone,
      label: "Phone No.",
      value: "+1 (201) 772-2853",
    },
  ];

  const features = [
    { icon: Clock, label: "24/7 Support", desc: "Always here to help" },
    { icon: Shield, label: "Secure & Private", desc: "Your data is safe" },
    { icon: Zap, label: "Fast Response", desc: "Within 24 hours" },
    { icon: Users, label: "Expert Team", desc: "Dedicated professionals" },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
    { icon: Twitter, label: "Twitter", color: "#1DA1F2" },
    { icon: Youtube, label: "YouTube", color: "#FF0000" },
    { icon: Instagram, label: "Instagram", color: "#E4405F" },
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
      <section ref={heroRef} className="relative pt-8 pb-20 md:pb-28 overflow-hidden" style={{ background: BLACK }}>
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
              Let's <span className="italic" style={{ color: RED }}>connect</span> and
              <br />
              build something great
            </h1>
          </Reveal>

          <Reveal custom={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: '#efefef' }}>
              Discover our new and improved ways to get in touch with us.
              Explore our updated contact options today!
            </p>
          </Reveal>
        </motion.div>
      </section>

      {/* -------- CONTACT INFO CARDS -------- */}
      <section className="-mt-8 relative z-10 pb-16" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl"
                  style={{ 
                    background: DARK_SURFACE,
                    borderColor: DARK_BORDER
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: RED }}
                    aria-hidden
                  />
                  <motion.div
                    variants={pulse}
                    animate="animate"
                    className="mb-3 inline-flex rounded-xl p-2.5"
                    style={{ background: 'rgba(230, 25, 53, 0.1)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: RED }} />
                  </motion.div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                    {info.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{info.value}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* -------- FORM + LOCATION -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                  <span className="h-px w-6" style={{ backgroundColor: RED }} />
                  Get In Touch
                </span>
              </Reveal>
              <Reveal custom={1}>
                <h2
                  style={{ fontFamily: "'Fraunces', serif" }}
                  className="mt-3 text-3xl font-medium leading-tight md:text-4xl text-white"
                >
                  Ready to <span className="italic" style={{ color: RED }}>Get Started</span>
                </h2>
              </Reveal>
              <Reveal custom={2}>
                <p className="mt-3 text-sm" style={{ color: '#efefef' }}>
                  Feel free to reach out if you have any questions or need more information.
                </p>
              </Reveal>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <InputField
                    label="First Name"
                    placeholder="First Name"
                    icon={User}
                    required
                  />
                  <InputField
                    label="Last Name"
                    placeholder="Last Name"
                    icon={User}
                    required
                  />
                </div>

                <InputField
                  label="Email"
                  placeholder="Email"
                  type="email"
                  icon={Mail}
                  required
                />

                <InputField
                  label="Phone Number"
                  placeholder="Phone Number"
                  type="tel"
                  icon={Phone}
                  required
                />

                <TextAreaField
                  label="Message"
                  placeholder="Message"
                  icon={MessageSquare}
                  required
                />

                <Reveal>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border transition-all"
                      style={{ 
                        accentColor: RED,
                        borderColor: DARK_BORDER,
                        background: BLACK
                      }}
                    />
                    <span className="text-xs leading-relaxed" style={{ color: '#efefef' }}>
                      By checking this box, You agree to receive SMS text messages from Divine Talent
                      for customer care updates and account notifications. Reply STOP to opt out at
                      any time. Reply HELP for help. Message and data rates may apply. Message
                      frequency may vary. Carriers are not liable for delayed or undelivered messages.
                      Read our Privacy Policy
                    </span>
                  </label>
                </Reveal>

                <Reveal>
                  <motion.button
                    whileHover={{ scale: agreeToTerms ? 1.02 : 1 }}
                    whileTap={{ scale: agreeToTerms ? 0.97 : 1 }}
                    type="submit"
                    disabled={!agreeToTerms}
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ${
                      agreeToTerms
                        ? 'hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    style={{ backgroundColor: agreeToTerms ? RED : '#3A3A3E' }}
                  >
                    {formSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </Reveal>
              </form>
            </div>

            {/* Right Column - Location & Features */}
            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl border p-6 shadow-lg"
                  style={{ 
                    background: BLACK,
                    borderColor: DARK_BORDER
                  }}
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
                    className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-[0.04]"
                    style={{ backgroundColor: RED }}
                    aria-hidden
                  />
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl p-2.5" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                      <MapPin className="w-5 h-5" style={{ color: RED }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                        Location
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">112 Fraser St., Coleman MI 48618</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>

              <Reveal custom={1}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border p-6 shadow-lg"
                  style={{ 
                    background: BLACK,
                    borderColor: DARK_BORDER
                  }}
                >
                  <h4 className="text-sm font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                    Why reach out?
                  </h4>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {features.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <motion.div 
                          key={f.label} 
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="mt-0.5 rounded-full p-1.5" style={{ background: 'rgba(230, 25, 53, 0.1)' }}>
                            <Icon className="w-3.5 h-3.5" style={{ color: RED }} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white">{f.label}</p>
                            <p className="text-[10px]" style={{ color: '#efefef' }}>{f.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </Reveal>

              <Reveal custom={2}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border p-6 shadow-lg"
                  style={{ 
                    background: BLACK,
                    borderColor: DARK_BORDER
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                          style={{ 
                            borderColor: DARK_BORDER,
                            background: DARK_SURFACE,
                            color: '#FFFFFF'
                          }}
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Join our community</p>
                      <p className="text-xs" style={{ color: '#efefef' }}>2,200+ professionals</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>

              {/* Social Links */}
              <Reveal custom={3}>
                <div className="rounded-2xl border p-6 shadow-lg" style={{ 
                  background: BLACK,
                  borderColor: DARK_BORDER
                }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: '#efefef' }}>
                    Connect With Us
                  </p>
                  <div className="mt-3 flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="rounded-full p-2 transition-colors duration-300"
                        style={{ 
                          background: DARK_SURFACE,
                          border: `1px solid ${DARK_BORDER}`
                        }}
                      >
                        <social.icon className="w-4 h-4" style={{ color: '#efefef' }} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}