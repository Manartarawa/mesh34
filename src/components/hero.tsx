import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Briefs, portfolios & Creative Match in one product
          </span>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Where creative work finds the right people.
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
            MESH matches clients with independent designers, developers, and
            studios. Post a structured brief, review relevant portfolios, and
            let Creative Match score fit on skills, style, budget, and
            availability.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Post a brief
            </Link>
            <Link
              href="/creators"
              className="rounded-full border border-border bg-card px-6 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
            >
              Browse creators
            </Link>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8">
            {[
              { value: "7", label: "Match signals scored" },
              { value: "1", label: "Product, end to end" },
              { value: "0", label: "Middlemen taking a cut" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
