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
  Filter,
  Search,
  MapPin,
  Calendar,
  ThumbsUp,
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

export function CustomJobCampaignsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const features = [
    {
      icon: Search,
      title: "Targeted Job Discovery",
      description: "We don't just search job boards. We identify hidden opportunities, niche roles, and emerging positions that match your unique skill set and career aspirations. Every opportunity is handpicked, not mass-applied."
    },
    {
      icon: Filter,
      title: "Smart Profile Matching",
      description: "Our advanced matching algorithm and human expertise work together to find roles where your skills, experience, and values align perfectly. We consider company culture, team dynamics, and growth potential."
    },
    {
      icon: MapPin,
      title: "Location & Remote Strategy",
      description: "Whether you prefer on-site, hybrid, or fully remote, we optimize your job search based on your location preferences, visa requirements, and work style. We know which companies are truly remote-friendly."
    },
    {
      icon: Calendar,
      title: "Application Timeline Management",
      description: "We track every application, follow-up, and deadline. You'll never miss an opportunity or lose sight of where you stand. Our team handles the logistics while you focus on preparation."
    },
    {
      icon: Users,
      title: "Direct Decision-Maker Access",
      description: "We leverage our network of hiring managers, recruiters, and industry connections to get your profile directly in front of decision-makers. Skip the black hole of online applications."
    },
    {
      icon: ThumbsUp,
      title: "Post-Application Support",
      description: "After each application, we provide feedback, follow-up strategies, and preparation tips. We don't just submit your resume and disappear — we stay engaged until you get a response."
    }
  ];

  const stats = [
    { value: "94%", label: "Success Rate" },
    { value: "2,200+", label: "Professionals" },
    { value: "60+", label: "Hiring Partners" },
    { value: "3 weeks", label: "Avg. to Interview" },
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
              Custom <br />
              <span className="relative inline-block">
                <span className="italic" style={{ color: RED }}>Job Campaigns</span>
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
              Stop applying to hundreds of jobs with no response. Start a <span className="font-semibold text-white">targeted campaign</span> that gets your profile in front of the right people.
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
                Start Your Campaign
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
                    Our Custom Job Campaigns are designed to cut through the noise of traditional job searching. 
                    We don't play the numbers game. Instead, we build a strategic, personalized campaign that 
                    targets the right companies, the right roles, and the right people — maximizing your chances 
                    of landing the perfect opportunity.
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
                How It Works
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight text-white"
              >
                A Strategic Approach <br />
                <span className="italic" style={{ color: RED }}>To Job Hunting</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
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
              “I spent 6 months applying to jobs with no luck. Divine Talent ran a custom campaign for me and 
              I had interviews at 4 companies within 3 weeks. They found opportunities I never would have discovered on my own.”
            </motion.p>
          </Reveal>
          <Reveal custom={2}>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: RED }} />
                ))}
              </div>
              <p className="mt-4 font-semibold text-white">— Emily Rodriguez</p>
              <p className="text-sm" style={{ color: '#efefef' }}>Data Analyst at Salesforce</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- PROCESS STEPS -------- */}
      <section className="py-10" style={{ background: BLACK }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Our Process
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight text-white"
              >
                From Strategy <br />
                <span className="italic" style={{ color: RED }}>To Success</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Search,
                step: "01",
                title: "Discovery",
                desc: "We analyze your profile, goals, and preferences to build a targeted job search strategy."
              },
              {
                icon: Filter,
                step: "02",
                title: "Campaign",
                desc: "We identify and apply to handpicked opportunities on your behalf."
              },
              {
                icon: ThumbsUp,
                step: "03",
                title: "Success",
                desc: "We support you through interviews, offers, and onboarding until you're placed."
              }
            ].map((step, index) => (
              <Reveal key={step.title} custom={index}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative rounded-2xl border p-8 text-center transition-all duration-300 hover:shadow-xl"
                  style={{ 
                    background: DARK_SURFACE,
                    borderColor: DARK_BORDER
                  }}
                >
                  <motion.div
                    variants={pulse}
                    animate="animate"
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: 'rgba(230, 25, 53, 0.1)' }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: RED }} />
                  </motion.div>
                  <p className="text-sm font-bold uppercase tracking-wider" style={{ color: RED }}>
                    {step.step}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm" style={{ color: '#efefef' }}>{step.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
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
                Ready to Launch <br />Your Custom Job Campaign?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: '#efefef' }}>
                Stop applying aimlessly. Start a targeted campaign that gets your profile 
                in front of the right people at the right companies.
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

export default CustomJobCampaignsPage;