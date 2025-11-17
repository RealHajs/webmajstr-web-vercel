export const dynamic = "force-dynamic";

import { Globe, Share2, Search, Megaphone, Palette, Car, Gamepad2, Server, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
  const services = [
    { icon: Globe, title: "Tvorba webových stránek", description: "ZDARMA v rámci balíčku" },
    { icon: Share2, title: "Správa sociálních sítí", description: "Od obsahu po analýzy – vše pro vaše sociální sítě" },
    { icon: Megaphone, title: "Kompletní propagace na internetu", description: "360° digitální marketing" },
    { icon: Search, title: "SEO strategie s využitím AI", description: "Nejmodernější optimalizace, nejsme 100 let za opicemi" },
    { icon: Palette, title: "2D grafika", description: "Corporate identity & design (loga, bannery atd..)" },
    { icon: Car, title: "Reklama na RALLY autě", description: "Vaše značka před tisíci fanoušky, ZDARMA v rámci balíčku" },
    { icon: Gamepad2, title: "Propagace v e-sportu", description: "Jsme vidět tam, kde se hraje – na turnajích i online" },
    { icon: Server, title: "Webhosting", description: "Spolehlivý prostor pro váš web, ZDARMA v rámci balíčku" },
    { icon: LinkIcon, title: "Správa domény", description: "Nejen doména, ale i e-maily na míru jako součást služby" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Od prvního kliknutí po výsledky</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poskytujeme kompletní spektrum digitálních služeb od tvorby webů po unikátní marketingové kampaně
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <service.icon className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/sluzby">Zobrazit všechny služby</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
