import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export default function PricingPage() {
  const services = [
    {
      name: "Tvorba webových stránek",
      price: "od 6 990 Kč",
      description: "Moderní, responzivní webové stránky",
    },
    {
      name: "Správa sociálních sítí",
      price: "od 1 490 Kč/měsíc",
      description: "Komplexní správa všech platforem",
    },
    {
      name: "SEO strategie s AI",
      price: "od 3 990 Kč",
      description: "Nejmodernější optimalizace",
    },
    {
      name: "2D grafika a corporate identity",
      price: "od 2 990 Kč",
      description: "Kompletní vizuální identita",
    },
    {
      name: "Reklama na rally autě",
      price: "od 6 000 Kč/měsíc",
      description: "Unikátní fyzická propagace",
    },
    {
      name: "Reklama v e-sportu",
      price: "od 4 000 Kč/měsíc",
      description: "Marketing v herním světě",
    },
    {
      name: "Webhosting",
      price: "od 150 Kč/měsíc",
      description: "Spolehlivý hosting",
    },
    {
      name: "Doména",
      price: "od 250 Kč/rok",
      description: "Registrace a správa domén",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Ceník služeb</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Transparentní ceny pro všechny naše služby. K balíčkům jsou některé služby zdarma.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Kompletní ceník jednotlivých služeb</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Všechny ceny jsou uvedeny bez DPH. K balíčkům jsou některé služby zdarma dle vybraného balíčku.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-purple-600">{service.price}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Objednat
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Potřebujete cenu na míru?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Pokud chcete znát přesnou cenu na míru, napište nám – kalkulaci připravíme zdarma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Získat kalkulaci zdarma</Button>
              <Button size="lg" variant="outline">
                Kontaktovat nás
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Benefits */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Výhody balíčků</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Při výběru balíčku získáte mnoho služeb zdarma a ušetříte značné částky
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Standardní balíček</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-purple-600">
                  1 990 Kč/měsíc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Zdarma:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>Správa webu</li>
                    <li>Základní SEO optimalizace</li>
                    <li>Online podpora</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Rozšířený balíček</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-purple-600">
                  3 990 Kč/měsíc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Zdarma:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>Vše ze standardního balíčku</li>
                    <li>Rozšířená SEO optimalizace</li>
                    <li>Grafické práce (2D grafika)</li>
                    <li>Rychlá podpora</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Korporátní balíček</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-purple-600">
                  7 990 Kč/měsíc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Zdarma:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>Vše z rozšířeného balíčku</li>
                    <li>AI SEO strategie</li>
                    <li>Kompletní corporate identity</li>
                    <li>Nonstop podpora</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Ceník služeb - Webmajstr",
  description:
    "Transparentní ceník všech našich služeb. Tvorba webů od 6990 Kč, SEO od 3990 Kč, hosting od 150 Kč/měsíc.",
  keywords: "ceník, ceny, tvorba webů, SEO, hosting, domény, webmajstr",
}
