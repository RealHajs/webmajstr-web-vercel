export default function GDPRPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">GDPR</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">Ochrana osobních údajů podle nařízení GDPR</p>
        </div>
      </section>

      {/* GDPR Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Ochrana osobních údajů</h2>

            <h3>1. Správce osobních údajů</h3>
            <p>
              Správcem vašich osobních údajů je společnost Webmajstr s.r.o., se sídlem Hlavní 123, 110 00 Praha 1, IČO:
              ########, zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka ########.
            </p>

            <h3>2. Kontaktní údaje</h3>
            <p>V případě jakýchkoliv dotazů týkajících se zpracování osobních údajů nás můžete kontaktovat:</p>
            <ul>
              <li>E-mail: info@webmajstr.com</li>
              <li>Telefon: +420 721 020 161</li>
              <li>Poštovní adresa: Webmajstr s.r.o., Hlavní 123, 110 00 Praha 1</li>
            </ul>

            <h3>3. Účel zpracování osobních údajů</h3>
            <p>Vaše osobní údaje zpracováváme za následujícími účely:</p>
            <ul>
              <li>Poskytování našich služeb (tvorba webů, SEO, marketing)</li>
              <li>Komunikace s klienty a potenciálními klienty</li>
              <li>Zpracování objednávek a fakturace</li>
              <li>Zasílání newsletteru (pouze se souhlasem)</li>
              <li>Plnění zákonných povinností</li>
            </ul>

            <h3>4. Právní základ zpracování</h3>
            <p>Osobní údaje zpracováváme na základě:</p>
            <ul>
              <li>Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)</li>
              <li>Oprávněného zájmu (čl. 6 odst. 1 písm. f) GDPR)</li>
              <li>Souhlasu subjektu údajů (čl. 6 odst. 1 písm. a) GDPR)</li>
              <li>Plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR)</li>
            </ul>

            <h3>5. Kategorie zpracovávaných údajů</h3>
            <p>Zpracováváme následující kategorie osobních údajů:</p>
            <ul>
              <li>Identifikační údaje (jméno, příjmení)</li>
              <li>Kontaktní údaje (e-mail, telefon, adresa)</li>
              <li>Údaje o společnosti (název, IČO, DIČ)</li>
              <li>Údaje o službách a objednávkách</li>
              <li>Komunikační údaje</li>
            </ul>

            <h3>6. Doba zpracování</h3>
            <p>Osobní údaje zpracováváme po dobu:</p>
            <ul>
              <li>Trvání smluvního vztahu</li>
              <li>10 let od ukončení smlouvy (archivační účely)</li>
              <li>Do odvolání souhlasu (u newsletteru)</li>
              <li>Po dobu stanovenou právními předpisy</li>
            </ul>

            <h3>7. Předávání údajů třetím stranám</h3>
            <p>
              Vaše osobní údaje můžeme předávat pouze v nezbytném rozsahu našim smluvním partnerům za účelem poskytování
              služeb (hosting, platební brána, účetní služby).
            </p>

            <h3>8. Vaše práva</h3>
            <p>V souvislosti se zpracováním osobních údajů máte následující práva:</p>
            <ul>
              <li>Právo na přístup k osobním údajům</li>
              <li>Právo na opravu osobních údajů</li>
              <li>Právo na výmaz osobních údajů</li>
              <li>Právo na omezení zpracování</li>
              <li>Právo na přenositelnost údajů</li>
              <li>Právo vznést námitku proti zpracování</li>
              <li>Právo odvolat souhlas</li>
              <li>Právo podat stížnost u dozorového úřadu</li>
            </ul>

            <h3>9. Zabezpečení údajů</h3>
            <p>
              Přijali jsme vhodná technická a organizační opatření k ochraně vašich osobních údajů před neoprávněným
              přístupem, ztrátou, zničením nebo pozměněním.
            </p>

            <h3>10. Cookies</h3>
            <p>
              Naše webové stránky používají cookies pro zlepšení uživatelského zážitku a analýzu návštěvnosti. Podrobné
              informace o používání cookies najdete v našich zásadách používání cookies.
            </p>

            <h3>11. Kontakt</h3>
            <p>
              V případě jakýchkoliv dotazů nebo žádostí týkajících se zpracování osobních údajů nás kontaktujte na
              e-mailu info@webmajstr.com nebo na telefonu +420 721 020 161.
            </p>

            <p className="text-sm text-gray-600 mt-8">Tato zásada ochrany osobních údajů je platná od 1. ledna 2025.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
