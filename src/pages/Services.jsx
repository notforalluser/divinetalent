import { Link, useParams } from 'react-router-dom'
import { CareerStrategyPlanningPage } from './services/CareerStrategyPlanning'
import { ResumeProfileRebrandingPage } from './services/ResumeProfileRebranding'
import { SkillPrepMentorshipPage } from './services/SkillPrepMentorship'
import { CustomJobCampaignsPage } from './services/CustomJobCampaigns'
import { InterviewAssistancePage } from './services/InterviewAssistance'
import { OfferReviewOnboardingPage } from './services/OfferReviewOnboarding'

import React, { useRef } from 'react';
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

const WHITE = "#FFFFFF";
const BLACK = "#0B0B0C";
const GRAY = "#6A6A6E";

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
        className="group relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-white/5 p-8 transition-all duration-300 hover:shadow-2xl"
      >
        <div
          className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: '#E61935' }}
          aria-hidden
        />
        
        <div className="flex items-start justify-between">
          <div
            className="mb-4 inline-flex rounded-xl p-3"
            style={{ backgroundColor: `${WHITE}08` }}
          >
            <Icon className="w-6 h-6" style={{ color: WHITE }} />
          </div>
          <span className="text-sm font-semibold opacity-10 text-white" style={{ fontFamily: "'Fraunces', serif" }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3
          style={{ fontFamily: "'Fraunces', serif" }}
          className="text-xl font-medium leading-snug text-white"
        >
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{service.description}</p>
        
        <Link
          to={`/services/${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3 text-white"
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
      style={{ fontFamily: "'Inter', sans-serif", color: WHITE, backgroundColor: BLACK }}
      className="w-full overflow-x-hidden"
    >
      {/* -------- HERO -------- */}
      <section ref={heroRef} className="relative bg-black pt-8 pb-16 md:pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-[0.05] blur-3xl"
          style={{ backgroundColor: WHITE }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full opacity-[0.04] blur-3xl"
          style={{ backgroundColor: WHITE }}
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
              Launch Your Tech Career with<br />
              <span className="relative inline-block">
                <span className="italic text-white">The Best</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    d="M2 8 C 80 2, 220 2, 298 8"
                    stroke={WHITE}
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
              <span className="italic text-white">IT Placement Agency</span>
              <br />
              in the USA
            </h1>
          </Reveal>

          <Reveal custom={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              Step confidently into the future of technology with a trusted partner by your side. 
              As a top-tier IT staffing agency, we specialize in connecting skilled professionals 
              with Fortune 500 IT companies across the USA.
            </p>
          </Reveal>

          <Reveal custom={3} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl bg-white hover:bg-gray-200"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
            >
              Explore Services
              <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </motion.div>
      </section>

      {/* -------- SERVICES GRID -------- */}
      <section id="services" className="bg-black py-10">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                <span className="h-px w-6 bg-white" />
                Our Services
              </span>
            </Reveal>
            <Reveal custom={1}>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mt-4 text-4xl font-medium leading-tight text-white"
              >
                Your Complete <br /><span className="italic text-white">Career Launchpad</span>
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="mt-4 text-sm text-gray-400">
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
      <section className="bg-black py-10" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  <span className="h-px w-6 bg-white" />
                  Why Choose Us
                </span>
              </Reveal>
              <Reveal custom={1}>
                <h2
                  style={{ fontFamily: "'Fraunces', serif" }}
                  className="mt-4 text-4xl font-medium leading-tight text-white"
                >
                  A Trusted Partner <br />
                  <span className="italic text-white">For Your Success</span>
                </h2>
              </Reveal>
              <Reveal custom={2}>
                <p className="mt-5 leading-relaxed text-gray-400">
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
                        className="flex items-start gap-3 rounded-xl border border-gray-800 bg-white/5 p-2 shadow-lg transition-all duration-300 hover:shadow-2xl"
                      >
                        <div className="mt-0.5 rounded-full p-1 bg-white/10">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-sm text-gray-300">{benefit.text}</p>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <Reveal>
              <div className="relative">
                <div
                  className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-white/5"
                  aria-hidden
                />
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=900&fit=crop"
                  alt="Team collaboration"
                  className="relative h-80 w-full rounded-2xl object-cover shadow-2xl ring-4 ring-gray-900"
                />
                <div className="absolute -bottom-3 -right-3 rounded-xl bg-gray-900 px-4 py-2 shadow-2xl border border-gray-800">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Award className="w-4 h-4 text-white" />
                    <span>Top Rated Agency</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- TESTIMONIAL -------- */}
      <section className="bg-black py-16" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <Star className="w-7 h-7 text-white" />
            </div>
          </Reveal>
          <Reveal custom={1}>
            <motion.p
              whileHover={{ scale: 1.01 }}
              className="text-2xl font-light leading-relaxed text-gray-300 md:text-3xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              “Divine Talent transformed my career. They didn't just find me a job—they found me the right job at a Fortune 500 company with the perfect culture fit.”
            </motion.p>
          </Reveal>
          <Reveal custom={2}>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-1 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 font-semibold text-white">— Michael Chen</p>
              <p className="text-sm text-gray-400">Senior Software Engineer at Microsoft</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="bg-black py-10 px-4 sm:px-6">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl sm:px-10 bg-white/5">
            <div
              className="pointer-events-none absolute -top-20 -right-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `#121213` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `#121213` }}
              aria-hidden
            />

            <div className="relative z-10">
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="mx-auto max-w-2xl text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
              >
                Ready to Launch <br />Your Tech Career?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
                Join 2,200+ professionals who found their dream career with Divine Talent.
                Your journey starts here.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white hover:bg-gray-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/plans"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-7 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
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
      <section className="section py-20 bg-black">
        <div className="rounded-[2rem] border border-gray-800 bg-gray-900 p-8 text-center">
          <h1 className="text-3xl font-semibold text-white">Service not found</h1>
          <p className="mt-3 text-gray-400">Please return to the services overview and choose a service.</p>
          <Link to="/services" className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-200">
            Back to services
          </Link>
        </div>
      </section>
    )
  }

  return <Component />
}