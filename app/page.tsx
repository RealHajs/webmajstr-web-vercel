// app/page.tsx
export const dynamic = "force-dynamic"

// ❗ Všechno přes relativní cesty a správné názvy souborů
import { Hero } from "../components/Hero"
import { AboutUs } from "../components/about-us"
import { Services } from "../components/services"
import { UniqueAdvantages } from "../components/unique-advantages"
import { Packages } from "../components/packages"
import News from "../components/news"
import { CTABlocks } from "../components/cta-blocks"
// Chat je už uvnitř <Hero />, takže ho tady znovu NEimportujeme

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
      {/* Pokud ještě nechceš tahat novinky ze Supabase, tenhle řádek můžeš dočasně vykomentovat */}
      <News />
      <CTABlocks />
    </main>
  )
}
