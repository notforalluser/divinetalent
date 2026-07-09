import { Link } from 'react-router-dom'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Stats from '../components/Stats'
import Pillars from '../components/Pillars'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

const pageCard = 'rounded-3xl border border-line bg-white p-8 shadow-sm shadow-ink/5'

function PageShell({ eyebrow, title, description, children }) {
  return (
    <section className="section py-20">
      <div className={`${pageCard} space-y-6`}>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h1>
          <p className="max-w-2xl text-lg text-ink/70">{description}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <Pillars />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}

export function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Tailored support for every career milestone"
      description="From your first strategy session to your first offer, we help you shape a confident, focused job search."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          'Career Strategy & Planning',
          'Resume & Profile Rebranding',
          'Skill Prep & Mentorship',
          'Interview Assistance',
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-line bg-paper p-4 text-ink/80">
            {item}
          </div>
        ))}
      </div>
      <div className="pt-4">
        <Link to="/contact" className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink-soft">
          Book a consult
        </Link>
      </div>
    </PageShell>
  )
}

export function PlanPage() {
  return (
    <PageShell
      eyebrow="Plans"
      title="Choose the path that fits your stage"
      description="Whether you are launching from campus or transitioning into a new industry, we have a plan built around your goals."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ['Starter', 'Perfect for early-career professionals who need clarity and structure.'],
          ['Growth', 'Best for ambitious candidates preparing for a focused search.'],
          ['Launch', 'A premium experience for those preparing for high-stakes applications.'],
        ].map(([name, text]) => (
          <div key={name} className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="text-xl font-semibold text-ink">{name}</h2>
            <p className="mt-3 text-ink/70">{text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

export function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="We blend strategy, storytelling, and support"
      description="Career Launch helps professionals turn ambition into a clear, confident action plan that gets real results."
    >
      <div className="rounded-2xl border border-line bg-paper p-6 text-ink/80">
        Our team works with candidates to sharpen their positioning, improve their materials, and navigate interviews with confidence.
      </div>
    </PageShell>
  )
}

export function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let’s talk about your next move"
      description="Share a few details and we will reach out with the best next step for your career goals."
    >
      <div className="rounded-2xl border border-line bg-paper p-6 text-ink/80">
        <p>Email: hello@careerlaunch.com</p>
        <p className="mt-2">Phone: +1 (555) 012-3456</p>
      </div>
    </PageShell>
  )
}
