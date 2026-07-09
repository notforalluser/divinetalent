import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How long does it take to get placed?',
    a: 'Most candidates get an offer within 2 to 4 months, depending on background, responsiveness, and interview performance.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free consultation. We\u2019ll review your goals and background, then recommend the best path forward.',
  },
  {
    q: 'Do I need a four-year degree?',
    a: 'No. We evaluate skills, experience, and potential, and work with candidates from a wide range of backgrounds.',
  },
  {
    q: 'Will I get mock interviews and feedback?',
    a: 'Yes, unlimited mock interviews with direct feedback are part of the program until you feel ready.',
  },
  {
    q: 'Does support continue after I\u2019m placed?',
    a: 'Yes. Coaching continues for 6 to 12 months after placement, covering onboarding and early career growth.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="border-t border-line bg-white py-20">
      <div className="section grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">Before you book a call</h2>
          <p className="mt-4 text-sm text-muted">Can't find your answer? Reach out directly and we'll respond within a day.</p>
        </div>

        <div className="divide-y divide-line border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base text-ink md:text-lg">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-gold transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                {isOpen && <p className="pb-5 text-sm leading-relaxed text-muted">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
