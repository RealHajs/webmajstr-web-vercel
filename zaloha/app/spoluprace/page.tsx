export const dynamic = "force-dynamic"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink, Phone, Mail } from "lucide-react"

import { getPartners } from "@/lib/supabase"

interface Partner {
  id: number
  name: string
  slug: string
  country?: string
  website_url?: string
  bio?: string
  logo_url?: string
  is_active: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

export default async function PartnershipsPage() {
  const partners = (await getPartners()) as Partner[]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="w-full mx-auto px-4 lg:w-[70%] text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Naše spolupráce
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Spolupracujeme s předními streamery, influencery a brandy z celé
            Evropy. Společně tvoříme obsah, který dává smysl.
          </p>
        </div>
      </section>

      {/* PARTNEŘI */}
      <section className="py-16">
        <div className="w-full mx-auto px-4 lg:w-[70%]">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Aktuální spolupráce
            </h2>
            <p className="text-gray-600">
              Přehled značek, tvůrců a projektů, se kterými dlouhodobě
              spolupracujeme.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <Card
                key={partner.id}
                className="hover:shadow-lg transition-shadow bg-white flex flex-col"
              >
                <CardHeader className="flex-row items-center gap-4 p-6 pb-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 overflow-hidden">
                    <img
                      src={partner.logo_url || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-h-14 max-w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    {partner.country && (
                      <CardDescription className="mt-1">
                        {partner.country}
                      </CardDescription>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-6 pt-2">
                  {partner.bio && (
                    <p className="text-sm text-gray-700 text-left leading-relaxed">
                      {partner.bio}
                    </p>
                  )}
                </CardContent>

                <CardContent className="p-6 pt-0 flex flex-wrap gap-3">
                  <Button size="sm" asChild>
                    <Link href={`/${partner.slug}`}>Zobrazit profil</Link>
                  </Button>

                  {partner.website_url && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={partner.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Otevřít web
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT – SPOLUPRÁCE */}
      {/* <section className="py-16 bg-gray-50">
        <div className="w-full mx-auto px-4 lg:w-[70%]">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-5">
              Máte zájem o spolupráci?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hledáme nové partnery a influencery, se kterými budeme moct
              dlouhodobě růst. Ozvěte se nám a připravíme pro vás konkrétní
              návrh spolupráce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader className="text-left">
                <Phone className="h-8 w-8 text-purple-600 mb-3" />
                <CardTitle>Zavolejte nám</CardTitle>
                <CardDescription>
                  Nejrychlejší cesta, jak si říct první nápady.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-2xl font-bold text-purple-600 mb-4">
                  +420 721 020 161
                </p>
                <Button className="w-full" asChild>
                  <a href="tel:+420721020161">Zavolat nyní</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-left">
                <Mail className="h-8 w-8 text-purple-600 mb-3" />
                <CardTitle>Napište nám</CardTitle>
                <CardDescription>
                  Pošlete nám pár vět o sobě a vaší komunitě.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-lg font-semibold text-purple-600 mb-4">
                  info@webmajstr.com
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                >
                  <a href="mailto:info@webmajstr.com">Napsat e-mail</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle>Chcete raději formulář?</CardTitle>
              <CardDescription>
                Stačí pár údajů – ozveme se vám zpět s návrhem spolupráce.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6">
                V případě zájmu o spolupráci nás můžete kontaktovat na
                <span className="font-semibold"> +420 721 020 161</span> nebo na{" "}
                <span className="font-semibold">info@webmajstr.com</span>, nebo
                využijte náš kontaktní formulář.
              </p>
              <Button size="lg">Vyplnit formulář</Button>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  )
}
