import { FileText, GraduationCap, Radar, LifeBuoy } from 'lucide-react'

const pillars = [
  {
    icon: FileText,
    title: 'Career Branding',
    copy: 'ATS-friendly resume builds, a resume-understanding session, and LinkedIn optimization that gets you found.',
  },
  {
    icon: GraduationCap,
    title: 'Skill Development',
    copy: 'Communication coaching, domain-specific technical prep, and a behavioral + technical interview bootcamp.',
  },
  {
    icon: Radar,
    title: 'Market Exposure',
    copy: 'Direct submissions to active clients and staffing partners, plus access to roles that never get posted publicly.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    copy: 'Unlimited interview scheduling, a dedicated coach, and post-placement support once you start the job.',
  },
]

export default function Pillars() {
  return (
    <section id="plans" className="section py-20">
      <div className="max-w-xl">
        <span className="eyebrow">What's included</span>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">Four pillars, one program</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, copy }) => (
          <div key={title} className="rounded-2xl border border-line bg-white p-6 transition hover:border-ink/20">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bridge-soft text-bridge">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-lg text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
