import { Globe, Share2, Search, Megaphone, Palette, Car, Gamepad2, Server, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
  const services = [
    { icon: Globe, title: "Tvorba webových stránek", description: "Moderní, responzivní weby" },
    { icon: Share2, title: "Správa sociálních sítí", description: "Komplexní správa všech platforem" },
    { icon: Megaphone, title: "Kompletní propagace na internetu", description: "360° digitální marketing" },
    { icon: Search, title: "SEO strategie s využitím AI", description: "Nejmodernější optimalizace" },
    { icon: Palette, title: "2D grafika", description: "Corporate identity a design" },
    { icon: Car, title: "Reklama na rally autě", description: "Unikátní fyzická propagace" },
    { icon: Gamepad2, title: "Propagace v e-sportu", description: "Marketing v herním světě" },
    { icon: Server, title: "Webhosting", description: "Spolehlivý hosting" },
    { icon: LinkIcon, title: "Správa domény", description: "Kompletní doménové služby" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Naše služby</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poskytujeme kompletní spektrum digitálních služeb od tvorby webů po unikátní marketingové kanály
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
