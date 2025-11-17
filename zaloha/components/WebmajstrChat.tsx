"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

type Role = "user" | "assistant"

interface ChatMessage {
  role: Role
  content: string
}

// jednoduché odstranění diakritiky pro lepší matchování
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

// helper – jestli text obsahuje nějaké z daných slov
function includesAny(text: string, words: string[]): boolean {
  return words.some((w) => text.includes(w))
}

// hlavní logika “bota”
function getBotReply(rawMessage: string): string {
  const text = normalize(rawMessage)

  // Obecné dotazy na cenu / ceník / balíčky
  const asksPrice = includesAny(text, [
    "cenik",
    "cena",
    "kolik",
    "za kolik",
    "stoji",
    "stojí",
    "ceny",
    "balicek",
    "balícek",
    "balik",
  ])

  const asksWebsite = includesAny(text, [
    "web",
    "webov",
    "strank",
    "stránk",
    "tvorba webu",
    "webmajstr",
  ])

  const asksSeo = includesAny(text, ["seo", "optimalizace", "vyhledavac", "google"])
  const asksSocial = includesAny(text, [
    "socialni site",
    "sociální sítě",
    "instagram",
    "facebook",
    "tiktok",
    "sprava profilu",
    "sprava socialnich",
  ])
  const asksRally = includesAny(text, ["rally", "rallye", "zavodni auto", "závodn", "auto s logem"])
  const asksEsport = includesAny(text, ["esport", "e-sport", "gaming", "turnaj", "league of legends"])
  const asksCooperation = includesAny(text, [
    "spoluprace",
    "spolupráci",
    "reference",
    "klienti",
    "s kym delate",
    "s kým děláte",
  ])
  const asksContact = includesAny(text, ["kontakt", "email", "telefon", "ozvat", "napisat", "napsat"])

  // Kombinace: cena + web
  if (asksPrice && asksWebsite) {
    return (
      "Tvorbu webových stránek děláme individuálně podle rozsahu – ale orientačně " +
      "začínají jednoduché weby zhruba od 5 000 Kč za stránku. " +
      "Ve většině případů se ale vyplatí spíš balíček, kde je web, SEO i základní propagace.\n\n" +
      "Můžeme ti zdarma připravit kalkulaci na míru – stačí nám napsat přes /kontakt " +
      "nebo na info@webmajstr.com."
    )
  }

  // Cena / balíčky obecně
  if (asksPrice) {
    return (
      "Máme tři hlavní balíčky:\n\n" +
      "• **Standardní balíček (~1 990 Kč/měsíc)** – web, základní SEO, 1 sociální síť, online podpora.\n" +
      "• **Rozšířený balíček (~3 990 Kč/měsíc)** – více sítí, pokročilejší SEO, reklamy a 2D grafika.\n" +
      "• **Balíček pro velké firmy (~6 990 Kč/měsíc)** – neomezeně sítí, kampaně, kompletní identita, rally reklama atd.\n\n" +
      "Přesnou cenu dopočítáme podle toho, co přesně potřebuješ – klidně nám napiš přes formulář na /kontakt."
    )
  }

  // Dotazy na tvorbu webu
  if (asksWebsite) {
    return (
      "Tvoříme moderní, responzivní weby optimalizované pro mobily i vyhledávače. " +
      "Nebereme web jako vizitku do šuplíku, ale jako nástroj na získávání zákazníků – " +
      "řešíme strukturu, obsah, SEO i napojení na analytiku a kampaně.\n\n" +
      "Stačí nám poslat info o tvém projektu (obor, cíl webu, rozpočet) a navrhneme konkrétní řešení i cenovou nabídku."
    )
  }

  // Dotazy na SEO
  if (asksSeo) {
    return (
      "SEO u nás není jen pár klíčových slov – kombinujeme technické SEO, obsah, strukturu webu " +
      "a analytiku. Používáme nástroje s AI, takže umíme hledat reálné příležitosti, ne jen body v nástroji.\n\n" +
      "V rámci balíčků děláme pravidelné vyhodnocování a úpravy. Pokud chceš, můžeme ti zdarma zhodnotit " +
      "aktuální stav webu a navrhnout první kroky."
    )
  }

  // Dotazy na sociální sítě
  if (asksSocial) {
    return (
      "Umíme kompletní správu sociálních sítí – od strategie a obsahu přes plánování až po reporting. " +
      "Řešíme i reklamy, aby profily nebyly jen „hezké“, ale skutečně přiváděly zákazníky.\n\n" +
      "Napiš nám, jaké sítě používáš teď (např. IG, FB, TikTok) a co je pro tebe hlavní cíl – ladění obsahu tomu přizpůsobíme."
    )
  }

  // Dotazy na rally reklamu
  if (asksRally) {
    return (
      "Nabízíme jedinečnou možnost propagace na rally autě – tvoje značka může být vidět na závodech v celé Evropě. " +
      "Zajistíme nalepení loga, fotky, videa a možnost využití záběrů v online kampaních.\n\n" +
      "Když nám napíšeš, jaký máš rozpočet a cílovou skupinu, navrhneme konkrétní formu spolupráce."
    )
  }

  // Dotazy na e-sport / gaming
  if (asksEsport) {
    return (
      "V e-sportu spolupracujeme s týmy, turnaji i streamery. Dokážeme spojit klasický marketing " +
      "s gamingovým světem – ideální, pokud cílíš na mladší publikum.\n\n" +
      "Můžeme ti pomoct s umístěním loga, kampaněmi kolem turnajů nebo dlouhodobou spoluprací s influencery."
    )
  }

  // Spolupráce / reference
  if (asksCooperation) {
    return (
      "Spolupracujeme s různými firmami od lokálních podniků až po větší projekty – na webu máš sekci „Spolupráce“, " +
      "kde najdeš konkrétní značky a projekty.\n\n" +
      "Když nám popíšeš, v jakém oboru podnikáš, můžeme ti říct, s čím podobným už máme zkušenost a jak bychom k tomu přistoupili."
    )
  }

  // Kontakt
  if (asksContact) {
    return (
      "Kontaktovat nás můžeš přes formulář na stránce /kontakt, e-mailem na **info@webmajstr.com** " +
      "nebo telefonicky na **+420 721 020 161**.\n\n" +
      "Napiš klidně stručně, co řešíš, a my se ti ozveme s návrhem postupu nebo nezávaznou konzultací."
    )
  }

  // Obecný dotaz typu „co děláte“
  if (
    includesAny(text, ["co delate", "co děláte", "co umite", "co nabízite", "sluzby", "služby"]) ||
    (!asksPrice && !asksSeo && !asksWebsite && !asksSocial && !asksRally && !asksEsport)
  ) {
    return (
      "Jsme Webmajstr – děláme weby, SEO, správu sociálních sítí, kompletní online propagaci, " +
      "2D grafiku a máme i speciální možnosti jako reklama na rally autě a marketing v e-sportu.\n\n" +
      "Když mi v jedné větě napíšeš, co je tvůj cíl (např. „chci víc poptávek z webu“ nebo „chci rozjet Instagram“), " +
      "navrhnu ti, jaký typ spolupráce nebo balíček by dával smysl."
    )
  }

  // Fallback (kdyby něco úplně mimo)
  return (
    "Nejsem si jistá, že ti dokážu dobře odpovědět na tenhle konkrétní dotaz. " +
    "Jsem trénovaná hlavně na otázky kolem Webmajstr služeb, webů, marketingu a spoluprací.\n\n" +
    "Když mi zkusíš dotaz trochu upřesnit nebo nám napíšeš přímo přes /kontakt, rádi se ti ozveme osobně."
  )
}

export function WebmajstrChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Ahoj, jsem AI asistentka Webmajstr. Zeptej se na cokoliv ohledně našich služeb, balíčků nebo spolupráce.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: ChatMessage = { role: "user", content: trimmed }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // “přemýšlení” bota – jen malá pauza a synchronní odpověď
    setTimeout(() => {
      const reply = getBotReply(trimmed)
      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
      setIsLoading(false)
    }, 400)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating ikona chatu */}
      <button
        type="button"
        onClick={toggleOpen}
        className="fixed z-50 md:z-40 bottom-4 right-4 md:bottom-6 md:right-6 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg flex items-center justify-center transition-transform md:hover:scale-105 w-12 h-12 md:w-14 md:h-14"
        aria-label="Otevřít chat s Webmajstr AI"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Chat okno */}
      {isOpen && (
        <div className="fixed z-[999] inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-[380px] flex items-end justify-center md:justify-end bg-black/40 md:bg-transparent">
          <Card className="w-full md:w-[380px] max-h-[80vh] flex flex-col shadow-2xl rounded-2xl overflow-hidden bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-purple-600 text-white">
              <div>
                <h3 className="font-semibold text-sm">Webmajstr AI</h3>
                <p className="text-xs opacity-80">
                  Ptej se na cokoliv ohledně našich služeb
                </p>
              </div>
              <button
                type="button"
                onClick={toggleOpen}
                className="p-1 rounded-full hover:bg-white/10"
                aria-label="Zavřít chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Zprávy */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm bg-gray-50">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-3 py-2 max-w-[80%] ${
                      m.role === "user"
                        ? "bg-purple-600 text-white rounded-br-sm"
                        : "bg-white text-gray-900 border rounded-bl-sm whitespace-pre-line"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-xs text-gray-500 italic">
                  Webmajstr AI píše…
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t bg-white px-3 py-2">
              <Textarea
                rows={2}
                className="w-full text-sm resize-none"
                placeholder="Napište dotaz..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <div className="mt-2 flex justify-end">
                <Button
                  size="sm"
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                >
                  Poslat
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
