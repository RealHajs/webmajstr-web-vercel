export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

import type { Metadata } from "next"

export default function PricingPage() {

    const packages = [
    {
      name: "Standardní balíček",
      price: "1 990 Kč/měsíc",
      features: ["VYTVOŘENÍ WEBOVÉ STRÁNKY NA MÍRU", "Základní SEO optimalizace", "Správa jedné sociální sítě", "Online podpora"],
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
      price: "6 990 Kč/měsíc",
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Kompletní ceník jednotlivých služeb
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Všechny ceny jsou uvedeny bez DPH. K balíčkům jsou některé služby zdarma dle vybraného balíčku.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-[1.2rem] font-bold text-purple-600">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    asChild
                  >
                    <a href="/kontakt">Objednat</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
                    <a href="/kontakt">Vybrat balíček</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Potřebujete cenu na míru? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
    </div>
  )
}

export const metadata: Metadata = {
  title: "Ceník služeb - Webmajstr",
  description:
    "Transparentní ceník všech našich služeb. Tvorba webů od 6990 Kč, SEO od 3990 Kč, hosting od 150 Kč/měsíc.",
  keywords: "ceník, ceny, tvorba webů, SEO, hosting, domény, webmajstr",
}
