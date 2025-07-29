export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function Packages() {
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Balíčky</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vyberte si balíček, který nejlépe odpovídá potřebám vaší firmy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/sluzby">Zobrazit podrobnosti všech balíčků</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
