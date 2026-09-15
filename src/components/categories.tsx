const categories = [
  "Brand & Identity",
  "Web Design",
  "Product & UX",
  "Development",
  "Motion & 3D",
  "Illustration",
  "Photography",
  "Creative Studios",
];

const signals = [
  "Skills",
  "Category",
  "Style",
  "Budget",
  "Availability",
  "Experience",
  "Portfolio relevance",
];

export function Categories() {
  return (
    <section id="categories" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Every kind of creative discipline.
            </h2>
            <p className="mt-4 text-muted">
              Find independent talent and studios across the work clients
              actually brief for.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {categories.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div id="match" className="rounded-2xl border border-border bg-ink p-8 text-white">
            <h3 className="text-xl font-semibold">Creative Match</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A transparent score built from seven signals — so both sides
              understand why a match was made.
            </p>
            <ul className="mt-8 space-y-3">
              {signals.map((s, i) => (
                <li key={s} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/90">{s}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-accent"
                      style={{ width: `${70 + ((i * 4) % 30)}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
