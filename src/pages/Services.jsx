import { Link, useParams } from 'react-router-dom'
import { CareerStrategyPlanningPage } from './services/CareerStrategyPlanning'
import { ResumeProfileRebrandingPage } from './services/ResumeProfileRebranding'
import { SkillPrepMentorshipPage } from './services/SkillPrepMentorship'
import { CustomJobCampaignsPage } from './services/CustomJobCampaigns'
import { InterviewAssistancePage } from './services/InterviewAssistance'
import { OfferReviewOnboardingPage } from './services/OfferReviewOnboarding'

import React, { useRef } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MoveRight,
  CircleCheck,
  Sparkle,
  Target,
  Users,
  FileText,
  GraduationCap,
  Briefcase,
  Handshake,
  Star,
  Rocket,
  Shield,
  Clock,
  TrendingUp,
  Award,
  Zap,
  Lightbulb,
  BarChart,
  Globe,
  Building,
  UserCheck,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const services = [
  {
    slug: 'career-strategy-planning',
    title: 'Career Strategy & Planning',
    summary: 'Create a focused career roadmap aligned with your goals, strengths, and target industries.',
    tag: 'Strategic guidance',
  },
  {
    slug: 'resume-profile-rebranding',
    title: 'Resume & Profile Rebranding',
    summary: 'Turn your resume and LinkedIn into a polished story that attracts the right opportunities.',
    tag: 'Brand positioning',
  },
  {
    slug: 'skill-prep-mentorship',
    title: 'Skill Prep & Mentorship',
    summary: 'Build confidence with practical coaching, feedback, and skill development tailored to your next step.',
    tag: 'Hands-on coaching',
  },
  {
    slug: 'custom-job-campaigns',
    title: 'Custom Job Campaigns',
    summary: 'Launch a targeted outreach plan that helps you stand out in competitive job markets.',
    tag: 'Targeted outreach',
  },
  {
    slug: 'interview-assistance',
    title: 'Interview Assistance',
    summary: 'Practice strong answers, sharpen delivery, and walk into interviews with calm confidence.',
    tag: 'Mock interviews',
  },
  {
    slug: 'offer-review-onboarding',
    title: 'Offer Review & Onboarding',
    summary: 'Evaluate offers thoughtfully and make a confident transition into your next role.',
    tag: 'Offer support',
  },
]

const serviceComponents = {
  'career-strategy-planning': CareerStrategyPlanningPage,
  'resume-profile-rebranding': ResumeProfileRebrandingPage,
  'skill-prep-mentorship': SkillPrepMentorshipPage,
  'custom-job-campaigns': CustomJobCampaignsPage,
  'interview-assistance': InterviewAssistancePage,
  'offer-review-onboarding': OfferReviewOnboardingPage,
}

const RED = "#C81C32";
const BLACK = "#0B0B0C";

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

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <Reveal custom={index}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-black/6 bg-white p-8 transition-all duration-300 hover:shadow-2xl"
      >
        <div
          className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: RED }}
          aria-hidden
        />
        
        <div className="flex items-start justify-between">
          <div
            className="mb-4 inline-flex rounded-xl p-3"
            style={{ backgroundColor: `${RED}08` }}
          >
            <Icon className="w-6 h-6" style={{ color: RED }} />
          </div>
          <span className="text-sm font-semibold opacity-10" style={{ fontFamily: "'Fraunces', serif" }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3
          style={{ fontFamily: "'Fraunces', serif" }}
          className="text-xl font-medium leading-snug"
        >
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-black/55">{service.description}</p>
        
        <Link
          to={`/services/${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
          style={{ color: RED }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </Reveal>
  );
}

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const services = [
    {
      slug: "career-strategy-planning",
      icon: Target,
      title: "Career Strategy And Planning",
      description: "We start with a one-on-one discussion to understand your goals, skills, and career vision. Then, we create a clear roadmap tailored just for you."
    },
    {
      slug: "resume-profile-rebranding",
      icon: FileText,
      title: "Resume And Profile Rebranding",
      description: "We rebuild your resume, LinkedIn, and digital footprint from the ground up, making sure it reflects your strengths, achievements, and career focus."
    },
    {
      slug: "skill-prep-mentorship",
      icon: GraduationCap,
      title: "Skill Preparation And Personal Mentorship",
      description: "You'll get access to personalized training plans, mentorship sessions, and mock interviews designed specifically around your target roles."
    },
    {
      slug: "custom-job-campaigns",
      icon: Briefcase,
      title: "Custom Job Campaigns",
      description: "We shortlist and apply to jobs on your behalf based on your strengths and preferences, every opportunity is handpicked, not mass-applied."
    },
    {
      slug: "interview-assistance",
      icon: MessageSquare,
      title: "Pre-Interview Assistance",
      description: "From pre-interview pep talks to mock sessions and feedback, our team ensures you walk into interviews prepared and confident."
    },
    {
      slug: "offer-review-onboarding",
      icon: Handshake,
      title: "Offer Review And Smooth Onboarding",
      description: "We help you evaluate offers, negotiate better terms, and guide you through documentation, joining formalities, and background checks."
    }
  ];

  const stats = [
    { value: 94, suffix: "%", label: "Placement Success Rate" },
    { value: 2200, suffix: "+", label: "Professionals Placed" },
    { value: 60, suffix: "+", label: "Hiring Partners" },
    { value: 4.9, suffix: "★", label: "Average Rating" },
  ];

  const benefits = [
    { icon: Rocket, text: "Direct access to Fortune 500 clients" },
    { icon: TrendingUp, text: "Highest pay rates in the market" },
    { icon: Users, text: "Dedicated recruiter for every candidate" },
    { icon: Shield, text: "Post-placement project support" },
    { icon: Globe, text: "Visa consultation support" },
    { icon: Clock, text: "30-day offer guarantee" },
  ];

  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif", color: BLACK, backgroundColor: "#FFFFFF" }}
      className="w-full overflow-x-hidden"
    >
      {/* -------- HERO -------- */}
      <section ref={heroRef} className="relative bg-white pt-8 pb-16 md:pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-[0.05] blur-3xl"
          style={{ backgroundColor: RED }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full opacity-[0.04] blur-3xl"
          style={{ backgroundColor: RED }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative mx-auto max-w-5xl px-6 text-center md:px-10"
        >
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/5 px-4 py-1.5 text-xs font-medium text-black/60 backdrop-blur-sm">
              <Sparkle className="w-3.5 h-3.5" style={{ color: RED }} />
              <span>IT Placement Agency</span>
            </div>
          </Reveal>

          <Reveal custom={1}>
            <h1
              style={{ fontFamily: "'Fraunces', serif" }}
              className="mt-5 text-[2.8rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              Launch Your Tech Career with<br />
              <span className="relative inline-block">
                <span className="italic" style={{ color: RED }}>The Best</span>
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
              <span className="italic" style={{ color: RED }}>IT Placement Agency</span>
              <br />
              in the USA
            </h1>
          </Reveal>

          <Reveal custom={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
              Step confidently into the future of technology with a trusted partner by your side. 
              As a top-tier IT staffing agency, we specialize in connecting skilled professionals 
              with Fortune 500 IT companies across the USA.
            </p>
          </Reveal>

          <Reveal custom={3} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: BLACK }}
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ border: `1.5px solid ${BLACK}15`, color: BLACK }}
            >
              Explore Services
              <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </motion.div>
      </section>

      {/* -------- STATS -------- */}
      <section className="bg-white pb-16 md:pb-20 -mt-6 md:-mt-10 relative z-10">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <Reveal key={s.label} custom={i}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-5 sm:p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p
                    style={{ fontFamily: "'Fraunces', serif" }}
                    className="text-2xl sm:text-3xl font-medium text-black"
                  >
                    <span className="tabular-nums">{s.value}</span>
                    {s.suffix}
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs text-black/50 leading-snug">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -------- SERVICES GRID -------- */}
      <section id="services" className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                <span className="h-px w-6" style={{ backgroundColor: RED }} />
                Our Services
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
              >
                Your Complete <br /><span className="italic" style={{ color: RED }}>Career Launchpad</span>
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="mt-4 text-sm text-black/50">
                From first consultation to final placement, we're with you at every step, 
                empowering your growth and making your career aspirations a reality.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* -------- WHY CHOOSE US -------- */}
      <section className="bg-white py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: RED }}>
                  <span className="h-px w-6" style={{ backgroundColor: RED }} />
                  Why Choose Us
                </span>
              </Reveal>
              <Reveal custom={1}>
                <h2
                  style={{ fontFamily: "'Fraunces', serif" }}
                  className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
                >
                  A Trusted Partner <br />
                  <span className="italic" style={{ color: RED }}>For Your Success</span>
                </h2>
              </Reveal>
              <Reveal custom={2}>
                <p className="mt-5 leading-relaxed text-black/60">
                  Either you're starting fresh or aiming higher, our expert team evaluates your 
                  profile, aligns it with current industry demands, and helps you upskill for success.
                </p>
              </Reveal>

              <div className="mt-8 space-y-3">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Reveal key={index} custom={index}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                      >
                        <div className="mt-0.5 rounded-full p-1.5" style={{ backgroundColor: `${RED}08` }}>
                          <Icon className="w-4 h-4" style={{ color: RED }} />
                        </div>
                        <p className="text-sm text-black/70">{benefit.text}</p>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <Reveal>
              <div className="relative">
                <div
                  className="absolute -left-4 -top-4 h-full w-full rounded-2xl"
                  style={{ backgroundColor: RED, opacity: 0.06 }}
                  aria-hidden
                />
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=900&fit=crop"
                  alt="Team collaboration"
                  className="relative h-80 w-full rounded-2xl object-cover shadow-xl ring-4 ring-white"
                />
                <div className="absolute -bottom-3 -right-3 rounded-xl bg-white px-4 py-2 shadow-lg border border-black/5">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Award className="w-4 h-4" style={{ color: RED }} />
                    <span>Top Rated Agency</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- PROCESS -------- */}
      <section className="bg-white py-16 sm:py-20 md:py-28">
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
                className="mt-4 text-4xl font-medium leading-tight md:text-5xl"
              >
                Your Journey to <br /><span className="italic" style={{ color: RED }}>Success</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 relative">
            <div
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/5 md:left-1/2 md:-ml-px"
              aria-hidden
            />

            <div className="space-y-12">
              {[
                { icon: Target, label: "Discovery Call", desc: "We understand your goals, skills, and career vision in a one-on-one session." },
                { icon: FileText, label: "Profile Rebranding", desc: "Your resume, LinkedIn, and digital presence are rebuilt to showcase your strengths." },
                { icon: GraduationCap, label: "Skill Preparation", desc: "Personalized training and mock interviews prepare you for your target roles." },
                { icon: Briefcase, label: "Job Campaign", desc: "We handpick and apply to opportunities that match your profile and preferences." },
                { icon: MessageSquare, label: "Interview Support", desc: "Pre-interview coaching and feedback ensure you walk in with confidence." },
                { icon: Handshake, label: "Offer & Onboarding", desc: "We help you evaluate offers, negotiate terms, and guide you through joining." },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex flex-col md:flex-row md:items-center">
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                      <Reveal custom={index}>
                        <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className="hidden md:block w-4 h-4 rounded-full border-2 flex-shrink-0" style={{ borderColor: RED, backgroundColor: 'white' }} />
                          <div>
                            <div className="flex items-center gap-3">
                              <div
                                className="inline-flex rounded-full p-2"
                                style={{ backgroundColor: `${RED}08` }}
                              >
                                <Icon className="w-4 h-4" style={{ color: RED }} />
                              </div>
                              <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: RED }}>
                                Step {index + 1}
                              </p>
                            </div>
                            <h3
                              style={{ fontFamily: "'Fraunces', serif" }}
                              className="mt-1 text-xl font-medium leading-snug"
                            >
                              {step.label}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-black/50">{step.desc}</p>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 md:hidden" style={{ borderColor: RED, backgroundColor: 'white' }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------- TESTIMONIAL -------- */}
      <section className="bg-white py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: `${RED}08` }}>
              <Star className="w-7 h-7" style={{ color: RED }} />
            </div>
          </Reveal>
          <Reveal custom={1}>
            <motion.p
              whileHover={{ scale: 1.01 }}
              className="text-2xl font-light leading-relaxed text-black/70 md:text-3xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              “Divine Talent transformed my career. They didn't just find me a job—they found me the right job at a Fortune 500 company with the perfect culture fit.”
            </motion.p>
          </Reveal>
          <Reveal custom={2}>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 font-semibold text-black">— Michael Chen</p>
              <p className="text-sm text-black/40">Senior Software Engineer at Microsoft</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-1.5 text-xs text-black/40 shadow-sm">
                <CheckCircle className="w-3.5 h-3.5" style={{ color: RED }} />
                <span>Verified placement</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl sm:px-10">
            <div className="absolute inset-0" style={{ backgroundColor: BLACK }} aria-hidden />
            <div
              className="pointer-events-none absolute -top-20 -right-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `${RED}40` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `${RED}20` }}
              aria-hidden
            />

            <div className="relative z-10">
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mx-auto max-w-2xl text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
              >
                Ready to Launch <br />Your Tech Career?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
                Join 2,200+ professionals who found their dream career with Divine Talent.
                Your journey starts here.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: RED }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/plans"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const Component = serviceComponents[serviceSlug]

  if (!Component) {
    return (
      <section className="section py-20">
        <div className="rounded-[2rem] border border-line bg-paper p-8 text-center">
          <h1 className="text-3xl font-semibold text-ink">Service not found</h1>
          <p className="mt-3 text-ink/70">Please return to the services overview and choose a service.</p>
          <Link to="/services" className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper">
            Back to services
          </Link>
        </div>
      </section>
    )
  }

  return <Component />
}
