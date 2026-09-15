import Link from "next/link";

export function CtaFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-ink px-8 py-16 text-center text-white md:px-16">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Post your first brief and meet the right creators.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            No middlemen, no noise. Structured briefs and honest matching from
            day one.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/creators"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Browse creators
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-ink text-xs font-bold text-white">
              M
            </span>
            <span className="font-medium text-foreground">MESH</span>
          </div>
          <p>Creative marketplace · {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
