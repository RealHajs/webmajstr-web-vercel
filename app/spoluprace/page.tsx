export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Phone, Mail } from "lucide-react"

interface Partner {
  id: number
  name: string
  nick?: string
  slug: string
  country?: string
  website_url?: string
  bio?: string
  social_links?: any
  logo_url?: string
  profile_image_url?: string
  is_active: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

import { getPartners } from '@/lib/supabase'

export default async function PartnershipsPage() {
  const partners = await getPartners()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Naše spolupráce</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Spolupracujeme s předními streamery, influencery a content creatorsry z celé Evropy
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Aktuální spolupráce</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Přehled všech našich partnerů a spolupracovníků</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={partner.logo_url || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{partner.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    @{partner.nick} • {partner.country}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <img
                      src={partner.profile_image_url || "/placeholder.svg"}
                      alt={`${partner.name} profile`}
                      className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                    <p className="text-gray-600 text-sm">{partner.bio}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/${partner.slug}`}>
                        Zobrazit profil
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={partner.website_url || "#"} target="_blank" rel="noopener noreferrer">
                        Otevřít web
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Máte zájem o spolupráci?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Hledáme nové partnery a influencery pro vzájemně výhodnou spolupráci. Kontaktujte nás a promluvme si o
              možnostech.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Zavolejte nám</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-purple-600 mb-4">+420 721 020 161</p>
                  <Button className="w-full">Zavolat nyní</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Napište nám</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-purple-600 mb-4">info@webmajstr.com</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Napsat e-mail
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Nebo vyplňte kontaktní formulář</h3>
              <p className="text-gray-600 mb-6">
                V případě zájmu o spolupráci nás kontaktujte na +420 721 020 161 nebo na info@webmajstr.com, případně
                vyplňte náš kontaktní formulář.
              </p>
              <Button size="lg">Vyplnit formulář</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
