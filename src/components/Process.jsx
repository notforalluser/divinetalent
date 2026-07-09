const steps = [
  {
    n: "01",
    title: "Strategy call",
    copy: "We map your background against the roles you actually want.",
  },
  {
    n: "02",
    title: "Rebuild",
    copy: "Resume, LinkedIn, and portfolio rebuilt around your strongest work.",
  },
  {
    n: "03",
    title: "Prep",
    copy: "Technical and behavioral mock interviews until you feel ready, not rushed.",
  },
  {
    n: "04",
    title: "Apply & interview",
    copy: "Curated applications and interview support until you get offers.",
  },
  {
    n: "05",
    title: "Offer & onboard",
    copy: "We help you evaluate, negotiate, and start strong on day one.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-black leading-tight">
            Five stages to an offer
          </h2>
          <p className="mt-3 text-sm text-black/50 leading-relaxed">
            Every candidate moves through the same five stages, each one
            building directly on the last.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-black/10 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-0">
            {steps.map((step, i) => {
              const isRight = i % 2 === 1;
              const isLast = i === steps.length - 1;

              return (
                <li
                  key={step.n}
                  className={`group relative flex flex-col gap-2 pl-14 md:w-1/2 md:pl-0 md:py-8 ${
                    isRight
                      ? "md:ml-auto md:pl-14 md:pr-0 md:text-left"
                      : "md:pr-14 md:text-right"
                  }`}
                >

                  {/* number badge */}
                  <span
                    className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-bold shadow-md transition-all duration-300 group-hover:scale-110 ${
                      isLast
                        ? "bg-red-600 text-white"
                        : "bg-black text-white group-hover:bg-red-600"
                    } md:top-5 ${isRight ? "md:-left-5" : "md:-right-5 md:left-auto"}`}
                  >
                    {step.n}
                  </span>

                  <div
                    className={`rounded-2xl border border-black/5 bg-black/[0.02] p-5 transition-all duration-300 group-hover:border-red-600/20 group-hover:bg-red-600/5 md:bg-transparent md:border-0 md:p-0 md:group-hover:bg-transparent`}
                  >
                    <div
                      className={`flex items-center gap-2 ${
                        isRight ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* <span className="h-px w-6 bg-red-600/40" /> */}
                      <span className="text-xs font-mono font-semibold tracking-wide text-red-600">
                        Step {step.n}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-black">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-black/55">
                      {step.copy}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}