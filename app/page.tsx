export const dynamic = "force-dynamic";

import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { UniqueAdvantages } from "@/components/unique-advantages"
import { Packages } from "@/components/packages"
import { References } from "@/components/references"
import News from "@/components/news"
import { CTABlocks } from "@/components/cta-blocks"

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <UniqueAdvantages />
      <Packages />
      <References />
      <News />
      <CTABlocks />
    </main>
  )
}

export const metadata = {
  title: "Webmajstr - Váš partner pro digitální růst",
  description:
    "Komplexní webové řešení, SEO s AI, reklama na rally autě a v e-sportu. Tvorba webů, správa sociálních sítí a unikátní marketingové kanály.",
  keywords: "webmajstr, tvorba webů, SEO, AI, rally reklama, e-sport marketing, sociální sítě",
}
