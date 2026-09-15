import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Categories } from "@/components/categories";
import { CtaFooter } from "@/components/cta-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
      </main>
      <CtaFooter />
    </>
  );
}
