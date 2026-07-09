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
  GraduationCap,
  MessageSquare,
  Video,
  FileSearch,
  ClipboardList,
  PenTool,
  Handshake,
  Briefcase,
  DollarSign,
  ScrollText,
  UserPlus,
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

function FeatureCard({ icon: Icon, title, description, index }) {
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

export function OfferReviewOnboardingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const features = [
    {
      icon: ScrollText,
      title: "Offer Review + Benchmarking",
      description: "We break down every element of your offer: fixed, variable, stock, joining bonus, perks – and compare it with market data."
    },
    {
      icon: MessageSquare,
      title: "Negotiation Scripts + Scenarios",
      description: "You'll get suggested counter offers, alternative asks (e.g., joining bonus, role title), and messaging templates for tricky conversations."
    },
    {
      icon: UserPlus,
      title: "Onboarding Support",
      description: "From pre-joining documentation to culture tips and early wins – we help you walk into Day 1 ready to impress."
    }
  ];

  const stats = [
    { value: "$20K+", label: "Avg. Negotiation Increase" },
    { value: "2,200+", label: "Professionals" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "12 mo", label: "Support" },
  ];

  const negotiationTips = [
    { icon: DollarSign, label: "Know your worth" },
    { icon: Handshake, label: "Build rapport" },
    { icon: Target, label: "Be specific" },
    { icon: Award, label: "Highlight value" },
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
              Offer Review <br />
              <span className="relative inline-block">
                <span className="italic" style={{ color: RED }}>And Smooth Onboarding</span>
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
              The job offer is not the end – it's the beginning of <span className="font-semibold text-white">real negotiation.</span>
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
                    We help you decode offer letters, handle HR convos, and smoothly transition 
                    into your next role with full clarity and confidence. No more signing 
                    documents you don't fully understand or leaving money on the table.
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
                How We Help
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight text-white"
              >
                Maximize Your <br />
                <span className="italic" style={{ color: RED }}>Offer & Onboarding</span>
              </h2>
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

      {/* -------- NEGOTIATION TIPS -------- */}
      <section className="py-10" style={{ background: DARK_SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Negotiation Tips
              </span>
            </div>
          </Reveal>
          <Reveal custom={1}>
            <h3
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-4 text-center text-2xl font-medium text-white md:text-3xl"
            >
              Master the <span className="italic" style={{ color: RED }}>Art of Negotiation</span>
            </h3>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {negotiationTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Reveal key={tip.label} custom={index}>
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
                    <p className="text-xs font-medium text-white">{tip.label}</p>
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
              “Divine Talent helped me negotiate an additional $20,000 in my offer and 
              guided me through the entire onboarding process. I started my new role 
              with confidence and clarity.”
            </motion.p>
          </Reveal>
          <Reveal custom={2}>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: RED }} />
                ))}
              </div>
              <p className="mt-4 font-semibold text-white">— James Wilson</p>
              <p className="text-sm" style={{ color: '#efefef' }}>Senior Engineer at Amazon</p>
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
                Ready to Maximize <br />Your Next Offer?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: '#efefef' }}>
                Don't leave money on the table. Get expert guidance on offer negotiation 
                and smooth onboarding support from Divine Talent.
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

export default OfferReviewOnboardingPage;