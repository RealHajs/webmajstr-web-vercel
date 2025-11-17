// lib/webmajstr-knowledge.ts

export interface WebmajstrDoc {
  id: string
  tags: string[]
  text: string
}

// Základní znalostní báze – můžeš libovolně rozšiřovat
export const webmajstrDocs: WebmajstrDoc[] = [
  {
    id: "services-web",
    tags: ["web", "tvorba webu", "webové stránky", "stránky"],
    text: `
Tvoříme moderní, responzivní webové stránky optimalizované pro všechna zařízení a vyhledávače.
Web nebereme jako vizitku do šuplíku, ale jako nástroj na získávání zákazníků.
Děláme technické SEO, rychlé načítání, napojení na analytiku (GA4, Meta Pixel) a připravujeme web tak,
aby byl připravený na placené kampaně i další marketing.
Ceny: tvorba webu typicky od 5 000 Kč / stránka, u balíčků bývá web často ZDARMA.
    `.trim(),
  },
  {
    id: "services-social",
    tags: ["sociální sítě", "instagram", "facebook", "tiktok", "správa sítí"],
    text: `
Správa sociálních sítí od obsahu po analýzy – strategie, tvorba příspěvků i komunikace s komunitou.
Zaměřujeme se na to, aby obsah skutečně přiváděl zakázky a budoval značku, ne aby bylo „jen něco ve feedu“.
Součástí může být i nastavení a správa reklam na sociálních sítích.
Typicky v rámci balíčků, samostatně od cca 1 490 Kč / měsíc.
    `.trim(),
  },
  {
    id: "services-seo-ai",
    tags: ["seo", "optimalizace", "ai", "google"],
    text: `
Nejmodernější SEO strategie s využitím AI – analýza klíčových slov, obsahový plán, úprava textů,
technické SEO (rychlost, struktura, indexace, metadata). Důraz na výsledky, ne jen na skóre v nástroji.
SEO nabízíme samostatně nebo jako součást balíčků.
    `.trim(),
  },
  {
    id: "services-rally",
    tags: ["rally", "auto", "reklama na autě", "auto reklama"],
    text: `
Nabízíme jedinečnou možnost propagace na rally autě – vaše logo na závodním voze před tisíci fanoušky.
Reklama na rally autě je součást vybraných balíčků ZDARMA – branding není jen samolepka,
ale součást celé komunikace (web, sociální sítě, PR).
    `.trim(),
  },
  {
    id: "services-esport",
    tags: ["e-sport", "esport", "gaming", "streamer", "turnaje"],
    text: `
Propagace v e-sportu – marketing přes profesionální e-sportové týmy, turnaje a streamery.
Umíme spojit klasický digitální marketing (web, SEO, reklamy) s marketingem v herním světě.
Máme zkušenosti s projekty jako Targon Cup a spolupráce se streamery.
    `.trim(),
  },
  {
    id: "pricing-packages",
    tags: ["balíčky", "ceny", "ceník", "měsíčně", "paušál"],
    text: `
Nabízíme tři hlavní balíčky služeb:

Standardní balíček – 1 990 Kč / měsíc:
- správa webu
- základní SEO optimalizace
- správa jedné sociální sítě
- online podpora

Rozšířený balíček – 3 990 Kč / měsíc:
- vše ze standardního balíčku
- správa až tří sociálních sítí
- rozšířená SEO optimalizace
- nastavení a správa reklam na sociálních sítích (do 500 Kč/měsíc za reklamu)
- 2D grafika (bannery, grafika pro web)
- rychlá podpora (preferovaný kontakt)

Korporátní balíček – 6 990 Kč / měsíc:
- vše z rozšířeného balíčku
- správa neomezeného počtu sociálních sítí
- individuální SEO strategie s využitím AI
- kampaně na sociálních sítích (do 2 000 Kč/měsíc za reklamu)
- kompletní corporate identity
- reklama na rally autě
- propagace v e-sportu a přes globální influencery
- nonstop podpora
    `.trim(),
  },
  {
    id: "contact",
    tags: ["kontakt", "email", "telefon", "podpora", "zavolat", "napsat"],
    text: `
Kontakt na Webmajstr:
E-mail: info@webmajstr.com
Telefon: +420 721 020 161

Standardně reagujeme do 24 hodin, u vyšších balíčků rychleji nebo nonstop.
Sídlíme v Praze, ale pracujeme pro klienty z celé ČR i ze zahraničí.
    `.trim(),
  },
  {
    id: "company",
    tags: ["o nás", "firma", "webmajstr", "kdo jste"],
    text: `
Webmajstr je partner pro digitální růst – tvorba webů, SEO s AI, správa sociálních sítí
a unikátní marketingové kanály (rally auto, e-sport, influenceři).
Zaměřujeme se hlavně na malé a střední firmy a chceme přinášet výsledky, ne jen „hezké obrázky“.
    `.trim(),
  },
]
