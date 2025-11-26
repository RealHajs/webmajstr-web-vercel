"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function References() {
  const partners = [
    {
      name: "V-Home",
      logo: "https://raw.githubusercontent.com/RealHajs/img-targon-cup/refs/heads/main/logo-v-home-removebg-preview.png",
      country: "Česká republika",
      website: "https://v-home.cz/",
    },
    {
      name: "Motion Roleplay",
      logo: "https://raw.githubusercontent.com/RealHajs/img-targon-cup/refs/heads/main/ezgif-323f7dbeab82f140.gif",
      country: "Česko i Slovensko",
      website: "https://motion-roleplay.com/",
    },
    {
      name: "Marian Teplý",
      logo: "https://raw.githubusercontent.com/RealHajs/img-targon-cup/refs/heads/main/zednik4-logo.png",
      country: "Česká republika",
      website: "https://zednictvi-marian-teply.com/",
    },
    {
      name: "Hospůdka pod Rablinů",
      logo: "https://raw.githubusercontent.com/RealHajs/img-targon-cup/refs/heads/main/hospudka-pod-rablinu-logo%20(1).png",
      country: "Česká republika",
      website: "https://www.hospudkapodrablinu.cz/",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Reference / Spolupráce</h2>
          <p className="text-lg text-gray-600">Důvěřují nám přední streamers, e-sportovci a firmy z celé Evropy</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="h-20 w-auto mx-auto mb-4 object-contain"
              />
              <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
              <p className="text-gray-500 mb-4">{partner.country}</p>
              <Button variant="outline" size="sm" asChild>
                <a href={partner.website} target="_blank" rel="noopener noreferrer">
                  Otevřít web
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="/spoluprace">Zobrazit všechny spolupráce</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
