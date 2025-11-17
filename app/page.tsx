// app/page.tsx
//"use client"

export const dynamic = "force-dynamic"

import { Hero } from "@/components/Hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { UniqueAdvantages } from "@/components/unique-advantages"
import { Packages } from "@/components/packages"
import News from "@/components/news"
import { CTABlocks } from "@/components/cta-blocks"

export const metadata = {
  title: "Webmajstr – váš partner pro digitální růst",
  description:
    "Komplexní webové řešení, SEO, AI, reklama na rally autě a v e-sportu. Tvorba webu, správa sociálních sítí a online marketing na míru.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <UniqueAdvantages />
      <Packages />
      <News />
      <CTABlocks />
    </main>
  )
}
