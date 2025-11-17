export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export default function PricingPage() {
  const services = [
    {
      name: "Tvorba webových stránek",
      price: "od 5 000 Kč/stránka",
      description: "Moderní, responzivní webové stránky",
    },
    {
      name: "Celková propagace na internetu",
      price: "od 1490 Kč/měsíc",
      description: "Zabezpečený a šifrovaný hosting",
    },
    {
      name: "Nejmodernější SEO a reklama",
      price: "od 1 490 Kč/stránka",
      description: "Nejmodernější optimalizace díky AI",
    },
    {
      name: "2D grafika & corporate identity",
      price: "od 2 990 Kč",
      description: "Kompletní vizuální identita",
    },
    {
      name: "Reklama na rally autě",
      price: "ZDARMA v ceně balíčku",
      description: "Vaše logo na RALLY autě !",
    },
    {
      name: "Reklama v e-sportu",
      price: "ZDARMA v ceně balíčku",
      description: "Marketing v herním světě sportu",
    },
    {
      name: "Správa sociálních sítí",
      price: "od 1 490 Kč/měsíc",
      description: "Komplexní správa všech platforem",
    },
    {
      name: "Webhosting & doména",
      price: "od 750 Kč/rok",
      description: "Webhosting, doména, e-maily i SSL",
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
              <a href="/kontakt">
                <Button size="lg">Získat kalkulaci zdarma</Button>
              </a>
              <a href="/kontakt">
                <Button size="lg" variant="outline">
                  Kontaktovat nás
                </Button>
              </a>
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
                    <li>VYTVOŘENÍ WEBOVÉ STRÁNKY NA MÍRU</li>
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
                    <li>VYTVOŘENÍ WEBOVÉ STRÁNKY NA MÍRU</li>
                    <li>Webhosting a doména</li>
                    <li>Rozšířená SEO optimalizace</li>
                    <li>Grafické práce (2D grafika)</li>
                    <li>Vše ze standardního balíčku</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Korporátní balíček</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-purple-600">
                  6 990 Kč/měsíc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Zdarma:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>VYTVOŘENÍ WEBOVÉ STRÁNKY NA MÍRU</li>
                    <li>Nejmodernější SEO strategie s AI</li>
                    <li>Placená reklama</li>
                    <li>Vše z rozšířeného balíčku</li>
                    <li>Kompletní corporate identity</li>
                    <li>Správa sociálních sítí</li>
                    <li>Nonstop podpora (24/7)</li>
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
