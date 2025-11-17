export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Globe,
  Share2,
  Search,
  Megaphone,
  Palette,
  Car,
  Gamepad2,
  Server,
  LinkIcon,
} from "lucide-react"
import type { Metadata } from "next"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Tvorba webových stránek",
      description:
        "Moderní, responzivní webové stránky optimalizované pro všechna zařízení a vyhledávače.",
      details: {
        intro:
          "Web nebereme jako vizitku do šuplíku, ale jako nástroj na získávání zákazníků.",
        bullets: [
          "Struktura a UX navržené tak, aby uživatelé došli od první návštěvy až k odeslání poptávky.",
          "Rychlé načítání, technické SEO a čistý kód připravený pro Google i placené kampaně.",
          "Napojení na analytiku (GA4, Meta Pixel apod.), abyste přesně viděli, co na webu funguje.",
        ],
      },
    },
    {
      icon: Share2,
      title: "Správa sociálních sítí",
      description:
        "Komplexní správa všech sociálních platforem včetně tvorby obsahu a komunitního managementu.",
      details: {
        intro:
          "Sítě neděláme jen proto, aby tam „něco bylo“, ale aby vám reálně přiváděly zakázky a budovaly značku.",
        bullets: [
          "Strategie obsahu podle typu vašeho byznysu (edukace, zábava, prodej).",
          "Pravidelné reporty a návrhy, co upravit pro lepší dosah a zapojení publika.",
          "Reakce na komentáře a zprávy tak, aby komunikace působila lidsky, ne jako robot.",
        ],
      },
    },
    {
      icon: Megaphone,
      title: "Kompletní propagace na internetu",
      description:
        "360° digitální marketingová strategie pro maximální online viditelnost.",
      details: {
        intro:
          "Spojujeme web, sociální sítě, reklamu a SEO do jednoho funkčního systému.",
        bullets: [
          "Návrh kompletního funnelu – od prvního kontaktu až po opakovaný nákup.",
          "Propojení kampaní napříč platformami, aby se vaši zákazníci s vaší značkou potkávali opakovaně.",
          "Průběžná optimalizace podle dat – nejedeme podle pocitu, ale podle čísel.",
        ],
      },
    },
    {
      icon: Search,
      title: "SEO strategie s využitím AI",
      description:
        "Nejmodernější SEO optimalizace využívající umělou inteligenci pro lepší výsledky.",
      details: {
        intro:
          "SEO děláme tak, aby mělo reálný dopad na návštěvnost a poptávky, ne jen lepší skóre v nástroji.",
        bullets: [
          "Analýza klíčových slov s využitím AI a tvorba obsahového plánu na míru vašemu oboru.",
          "Technické SEO (rychlost, struktura, indexace, metadata) + on-page úpravy textů.",
          "Pravidelné vyhodnocení pozic a návštěvnosti, včetně konkrétních doporučení co dál.",
        ],
      },
    },
    {
      icon: Palette,
      title: "2D grafika (corporate identity)",
      description:
        "Tvorba kompletní vizuální identity včetně loga, barevné palety a grafických materiálů.",
      details: {
        intro:
          "Vizuál značky navrhujeme tak, aby byl zapamatovatelný, ale zároveň funkční v online i offline světě.",
        bullets: [
          "Logo, barvy, typografie a základní pravidla použití v jednom brand manuálu.",
          "Grafika pro web, sociální sítě, bannery, vizitky i tištěné materiály.",
          "Dlouhodobá konzistence – aby vaše značka vypadala profesionálně na každém kanálu.",
        ],
      },
    },
    {
      icon: Car,
      title: "Reklama na rally autě",
      description:
        "Unikátní možnost propagace na závodních autech při rally soutěžích po celé Evropě.",
      details: {
        intro:
          "Reklama na rally autě není jen samolepka – je to silný branding v prostředí, kde lidé očekávají emoce a výkon.",
        bullets: [
          "Vaše logo na závodním voze, který se objevuje na soutěžích, fotkách i videích.",
          "Využití fotek a videí z rally v online kampaních (sítě, web, PR).",
          "Možnost individuální domluvy na rozsahu, umístění a společné komunikaci spolupráce.",
        ],
      },
    },
    {
      icon: Gamepad2,
      title: "Propagace v e-sportu",
      description:
        "Marketing přes profesionální e-sportové týmy a turnaje s globálním dosahem.",
      details: {
        intro:
          "E-sport a gaming jsou prostředí, kde se pohybuje mladé a loajální publikum – ideální pro budování značky.",
        bullets: [
          "Umístění loga v rámci streamů, turnajů nebo týmových materiálů.",
          "Spolupráce s influencery a hráči, kteří mají relevantní publikum pro váš produkt.",
          "Možnost kombinace s klasickým digitálním marketingem pro maximální efekt.",
        ],
      },
    },
    {
      icon: Server,
      title: "Webhosting",
      description:
        "Spolehlivý a rychlý webhosting s 99.9% dostupností a technickou podporou.",
      details: {
        intro:
          "Hosting řešíme tak, abyste se o něj nemuseli vůbec starat – jen aby vše běželo.",
        bullets: [
          "Pravidelné aktualizace, zálohy a monitoring dostupnosti.",
          "Optimalizace výkonu pro rychlé načítání stránek i při vyšší návštěvnosti.",
          "Technická podpora, když se cokoliv pokazí (nebo máte jen dotaz).",
        ],
      },
    },
    {
      icon: LinkIcon,
      title: "Správa domény",
      description:
        "Kompletní správa domén včetně registrace, prodloužení a DNS nastavení.",
      details: {
        intro:
          "Doména je základ značky – zařídíme, aby byla bezpečně registrovaná a správně nastavená.",
        bullets: [
          "Registrace domén na vás, ne na anonymního poskytovatele.",
          "DNS nastavení pro web, e-maily, externí služby a ověřování (např. pro mailing).",
          "Hlídání expirace domén, abyste o ně nikdy nepřišli.",
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Naše služby a balíčky
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Kompletní spektrum digitálních služeb od tvorby webů po unikátní
            marketingové kanály
          </p>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Jednotlivé služby
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Můžete si také objednat jednotlivé služby podle vašich potřeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow flex flex-col"
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex flex-col items-stretch">
                  <details className="w-full">
                    <summary className="list-none">
                      <div className="w-full">
                        {/* Vzhled podobný outline Buttonu */}
                        <div className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                          Zjistit více
                        </div>
                      </div>
                    </summary>

                    <div className="mt-4 text-left text-sm text-gray-700 space-y-2">
                      <p className="font-semibold">
                        {service.details.intro}
                      </p>
                      <div className="space-y-1">
                        {service.details.bullets.map((item, i) => (
                          <p key={i}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </details>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Potřebujete poradit?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Kontaktujte nás pro nezávaznou konzultaci a doporučení
            nejvhodnějšího řešení
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+420721020161">Zavolat: +420 721 020 161</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              asChild
            >
              <a href="mailto:info@webmajstr.com">Napsat e-mail</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Služby a balíčky - Webmajstr",
  description:
    "Kompletní spektrum digitálních služeb od tvorby webů po unikátní marketingové kanály. Služby pro každou firmu.",
  keywords:
    "služby, balíčky, tvorba webů, SEO, sociální sítě, rally reklama, webmajstr",
}
