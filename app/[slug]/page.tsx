import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ExternalLink, Instagram, Youtube, Twitter, Facebook, Twitch, Music } from "lucide-react"

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

// Funkce pro načtení konkrétního partnera
async function getPartner(slug: string): Promise<Partner | null> {
  const partners = await getPartners()
  return partners.find((p) => p.slug === slug && p.is_active) || null
}

// Generování statických cest pro všechny aktivní partnery
export async function generateStaticParams() {
  const partners = await getPartners()
  return partners
    .filter(partner => partner.is_active)
    .map((partner) => ({
      slug: partner.slug,
    }))
}

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const partner = await getPartner(slug)
  
  if (!partner) notFound()

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

  // Výchozí barvy pro partnery
  const defaultColors = {
    backgroundColor: "#7c3aed",
    textColor: "#ffffff"
  }

  // Parsování social links
  const socialLinks = partner.social_links ? 
    (typeof partner.social_links === 'string' ? JSON.parse(partner.social_links) : partner.social_links) 
    : {}

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: defaultColors.backgroundColor,
        color: defaultColors.textColor,
      }}
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src={partner.logo_url || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="h-24 w-auto mx-auto mb-6 object-contain"
              />
              <img
                src={partner.profile_image_url || "/placeholder.svg"}
                alt={`${partner.name} profile`}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20"
              />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{partner.name}</h1>
            <p className="text-xl opacity-90 mb-2">@{partner.nick}</p>
            <p className="text-lg opacity-75 mb-8">{partner.country}</p>

            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">{partner.bio}</p>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              asChild
            >
              <a href={partner.website_url || "#"} target="_blank" rel="noopener noreferrer">
                Navštívit hlavní kanál
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Sledujte mě na</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(socialLinks).map(([platform, url]) => {
                const Icon = getSocialIcon(platform)
                return (
                  <Button
                    key={platform}
                    variant="outline"
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border-white/30 text-white h-16"
                    asChild
                  >
                    <a href={url as string} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-6 w-6 mr-3" />
                      <span className="capitalize">{platform}</span>
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Collaboration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Spolupráce</h2>
            <p className="text-lg opacity-90 mb-8">
              Máte zájem o spolupráci nebo reklamu? Kontaktujte mě přes mé sociální sítě nebo přímo přes Webmajstr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                asChild
              >
                <a href="mailto:info@webmajstr.com">Kontaktovat přes Webmajstr</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 border-white/30 text-white"
                asChild
              >
                <a href={partner.website_url || "#"} target="_blank" rel="noopener noreferrer">
                  Přímý kontakt
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Webmajstr branding */}
      <section className="py-8 bg-black/20 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-75">
            Stránka vytvořena a spravována společností{" "}
            <a href="/" className="font-semibold hover:underline">
              Webmajstr s.r.o.
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

// Pro Next.js App router – generateMetadata musí být async
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const partner = await getPartner(slug)

  if (!partner) {
    return {
      title: "Partner nenalezen",
    }
  }

  return {
    title: `${partner.name} (@${partner.nick}) - Webmajstr Partner`,
    description: partner.bio,
    keywords: `webmajstr ${partner.nick}, ${partner.name}, streamer, ${partner.country}, gaming`,
  }
}
