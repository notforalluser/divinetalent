import { Compass, FileEdit, Users, Send, MessagesSquare, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Career Strategy & Planning',
    copy: 'A one-on-one session to map your goals, skills, and target roles into a clear plan.',
  },
  {
    icon: FileEdit,
    title: 'Resume & Profile Rebranding',
    copy: 'Your resume, LinkedIn, and digital footprint rebuilt to lead with your strongest work.',
  },
  {
    icon: Users,
    title: 'Skill Prep & Mentorship',
    copy: 'Personalized training plans, mentor sessions, and mock interviews for your target roles.',
  },
  {
    icon: Send,
    title: 'Custom Job Campaigns',
    copy: 'Hand-picked applications sent on your behalf, matched to your strengths, not mass-applied.',
  },
  {
    icon: MessagesSquare,
    title: 'Interview Assistance',
    copy: 'Pep talks, mock sessions, and direct feedback before every interview that matters.',
  },
  {
    icon: CheckCircle2,
    title: 'Offer Review & Onboarding',
    copy: 'Help evaluating offers, negotiating terms, and getting through paperwork and day one.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-white py-20">
      <div className="section">
        <div className="max-w-xl">
          <span className="eyebrow">End to end</span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">Services along the way</h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="group bg-white p-7 transition hover:bg-paper">
              <Icon className="text-gold" size={22} />
              <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-bridge group-hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
