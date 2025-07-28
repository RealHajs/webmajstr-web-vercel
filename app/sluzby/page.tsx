import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Globe, Share2, Search, Megaphone, Palette, Car, Gamepad2, Server, LinkIcon } from "lucide-react"
import type { Metadata } from "next"

export default function ServicesPage() {
  const packages = [
    {
      name: "Standardní balíček",
      price: "1 990 Kč/měsíc",
      features: ["Správa webu", "Základní SEO optimalizace", "Správa jedné sociální sítě", "Online podpora"],
      popular: false,
    },
    {
      name: "Rozšířený balíček",
      price: "3 990 Kč/měsíc",
      features: [
        "Vše ze standardního balíčku",
        "Správa až tří sociálních sítí",
        "Rozšířená SEO optimalizace",
        "Nastavení a správa reklam na sociálních sítích (do 500 Kč/měsíc za reklamu)",
        "Grafické práce (2D grafika pro web, bannery)",
        "Rychlá podpora (preferovaný kontakt)",
      ],
      popular: true,
    },
    {
      name: "Pro velké firmy / korporáty",
      price: "7 990 Kč/měsíc",
      features: [
        "Vše z rozšířeného balíčku",
        "Správa neomezeného počtu sociálních sítí",
        "Individuální SEO strategie s využitím AI",
        "Reklamní kampaně na sociálních sítích (do 2 000 Kč/měsíc za reklamu)",
        "2D grafika, tvorba kompletní firemní identity",
        "Fyzická reklama na rally autě",
        "Online propagace v e-sportu a přes globální influencery",
        "Nonstop podpora",
      ],
      popular: false,
    },
  ]

  const services = [
    {
      icon: Globe,
      title: "Tvorba webových stránek",
      description: "Moderní, responzivní webové stránky optimalizované pro všechna zařízení a vyhledávače.",
    },
    {
      icon: Share2,
      title: "Správa sociálních sítí",
      description: "Komplexní správa všech sociálních platforem včetně tvorby obsahu a komunitního managementu.",
    },
    {
      icon: Megaphone,
      title: "Kompletní propagace na internetu",
      description: "360° digitální marketingová strategie pro maximální online viditelnost.",
    },
    {
      icon: Search,
      title: "SEO strategie s využitím AI",
      description: "Nejmodernější SEO optimalizace využívající umělou inteligenci pro lepší výsledky.",
    },
    {
      icon: Palette,
      title: "2D grafika (corporate identity)",
      description: "Tvorba kompletní vizuální identity včetně loga, barevné palety a grafických materiálů.",
    },
    {
      icon: Car,
      title: "Reklama na rally autě",
      description: "Unikátní možnost propagace na závodních autech při rally soutěžích po celé Evropě.",
    },
    {
      icon: Gamepad2,
      title: "Propagace v e-sportu",
      description: "Marketing přes profesionální e-sportové týmy a turnaje s globálním dosahem.",
    },
    {
      icon: Server,
      title: "Webhosting",
      description: "Spolehlivý a rychlý webhosting s 99.9% dostupností a technickou podporou.",
    },
    {
      icon: LinkIcon,
      title: "Správa domény",
      description: "Kompletní správa domén včetně registrace, prodloužení a DNS nastavení.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Naše služby a balíčky</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Kompletní spektrum digitálních služeb od tvorby webů po unikátní marketingové kanály
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Balíčky služeb</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vyberte si balíček, který nejlépe odpovídá potřebám vaší firmy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-purple-500 shadow-lg scale-105" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Nejpopulárnější
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-purple-600">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Vybrat balíček
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Jednotlivé služby</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Můžete si také objednat jednotlivé služby podle vašich potřeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-transparent">
                    Zjistit více
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Potřebujete poradit?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Kontaktujte nás pro nezávaznou konzultaci a doporučení nejvhodnějšího řešení
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Zavolat: +420 721 020 161
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Napsat e-mail
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Služby a balíčky - Webmajstr",
  description:
    "Kompletní spektrum digitálních služeb od tvorby webů po unikátní marketingové kanály. Balíčky služeb pro každou firmu.",
  keywords: "služby, balíčky, tvorba webů, SEO, sociální sítě, rally reklama, webmajstr",
}
