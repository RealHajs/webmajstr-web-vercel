import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Twitch,
  Music,
  Globe,
} from "lucide-react"

import { getPartners } from "@/lib/supabase"

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
  profile_image_url?: string // zůstává v typu, ale NIKDE ji nevykreslujeme
  is_active: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

// Načtení konkrétního partnera
async function getPartner(slug: string): Promise<Partner | null> {
  const partners = (await getPartners()) as Partner[]
  return partners.find((p) => p.slug === slug && p.is_active) || null
}

// Statické cesty pro všechny aktivní partnery
export async function generateStaticParams() {
  const partners = (await getPartners()) as Partner[]
  return partners
    .filter((partner) => partner.is_active)
    .map((partner) => ({
      slug: partner.slug,
    }))
}

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "instagram":
      return Instagram
    case "youtube":
      return Youtube
    case "twitter":
      return Twitter
    case "facebook":
      return Facebook
    case "twitch":
      return Twitch
    case "tiktok":
      return Music
    default:
      return ExternalLink
  }
}

export default async function PartnerPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const partner = await getPartner(slug)

  if (!partner) notFound()

  // Parsování social_links
  const socialLinks = partner.social_links
    ? typeof partner.social_links === "string"
      ? JSON.parse(partner.social_links)
      : partner.social_links
    : {}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="w-full mx-auto px-4 lg:w-[70%]">
          <p className="text-purple-200 text-sm mb-3">Spolupráce</p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            {partner.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-purple-100">
            {partner.country && (
              <span className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 border border-purple-300/40">
                {partner.country}
              </span>
            )}
            {partner.nick && (
              <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1">
                @{partner.nick}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* OBSAH */}
      <section className="py-12">
        <div className="w-full mx-auto px-4 lg:w-[70%] space-y-8">
          {/* ZÁKLADNÍ INFO */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 overflow-hidden">
                  <img
                    src={partner.logo_url || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1">
                    {partner.name}
                  </h2>
                  {partner.country && (
                    <p className="text-sm text-gray-500">{partner.country}</p>
                  )}
                  {partner.nick && (
                    <p className="text-sm text-gray-500">@{partner.nick}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {partner.website_url && (
                  <Button variant="outline" asChild>
                    <a
                      href={partner.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Web partnera
                    </a>
                  </Button>
                )}
                <Button variant="ghost" asChild>
                  <a href="/spoluprace">← Zpět na přehled spoluprací</a>
                </Button>
              </div>
            </div>

            {partner.bio && (
              <div className="mt-4 text-base text-gray-800 leading-relaxed">
                {partner.bio.split("\n\n").map((para, idx) => (
                  <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-8 pt-4 border-t text-xs text-gray-500 flex flex-wrap gap-2 justify-between">
              {partner.created_at && (
                <span>
                  Spolupráce od:{" "}
                  {new Date(partner.created_at).toLocaleDateString("cs-CZ")}
                </span>
              )}
              {partner.updated_at && (
                <span>
                  Poslední aktualizace:{" "}
                  {new Date(partner.updated_at).toLocaleDateString("cs-CZ")}
                </span>
              )}
            </div>
          </div>

          {/* SOCIÁLNÍ SÍTĚ */}
          {Object.keys(socialLinks).length > 0 && (
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold">
                    Kanály &amp; sociální sítě
                  </h3>
                  <p className="text-sm text-gray-500">
                    Sledujte partnera tam, kde je nejaktivnější.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(socialLinks).map(([platform, url]) => {
                  const Icon = getSocialIcon(platform)
                  return (
                    <Button
                      key={platform}
                      variant="outline"
                      size="lg"
                      className="justify-start h-12"
                      asChild
                    >
                      <a
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        <span className="capitalize">{platform}</span>
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          )}

          {/* SPOLUPRÁCE / KONTAKT */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3">Spolupráce</h3>
            <p className="text-gray-700 mb-6">
              Máte zájem o společnou kampaň nebo dlouhodobější spolupráci?
              Napište nám a připravíme vám konkrétní návrh na míru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="sm:flex-1"
                asChild
              >
                <a href="mailto:info@webmajstr.com">
                  Kontaktovat přes Webmajstr
                </a>
              </Button>
              {partner.website_url && (
                <Button
                  size="lg"
                  variant="outline"
                  className="sm:flex-1"
                  asChild
                >
                  <a
                    href={partner.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Přímý kontakt
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Metadata pro App Router
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const partner = await getPartner(slug)

  if (!partner) {
    return {
      title: "Partner nenalezen",
    }
  }

  return {
    title: `${partner.name}${
      partner.nick ? ` (@${partner.nick})` : ""
    } - Webmajstr Partner`,
    description: partner.bio,
    keywords: `webmajstr ${partner.nick || ""}, ${partner.name}, streamer, ${
      partner.country || ""
    }, gaming`,
  }
}
