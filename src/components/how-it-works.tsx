const steps = [
  {
    step: "01",
    title: "Post a structured brief",
    body: "Clients describe the work with category, budget, timeline, and style. AI helps shape the brief — it never replaces the match.",
  },
  {
    step: "02",
    title: "Creators apply with relevant work",
    body: "Independent designers, developers, and studios respond with portfolio pieces that fit the brief, not generic pitches.",
  },
  {
    step: "03",
    title: "Creative Match scores fit",
    body: "Skills, category, style, budget, availability, experience, and portfolio relevance combine into a transparent match score.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            From brief to the right collaborator.
          </h2>
          <p className="mt-4 text-muted">
            A single flow that keeps matching honest and keeps creative people
            in control of their work.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <span className="font-mono text-sm text-accent">{item.step}</span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
