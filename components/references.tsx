"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function References() {
  const partners = [
    {
      name: "StreamerCZ",
      logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/8aef012f-167f-4b9c-b332-f11600c340ce-profile_image-70x70.png",
      country: "CZ",
      website: "https://twitch.tv/streamercz",
    },
    {
      name: "ProGamer",
      logo: "/placeholder.svg?height=80&width=120",
      country: "SK",
      website: "https://youtube.com/progamer",
    },
    {
      name: "TechReviewer",
      logo: "/placeholder.svg?height=80&width=120",
      country: "CZ",
      website: "https://techreviewer.cz",
    },
    {
      name: "GameMaster",
      logo: "/placeholder.svg?height=80&width=120",
      country: "PL",
      website: "https://gamemaster.pl",
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
