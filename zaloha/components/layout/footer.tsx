import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">Webmajstr</span>
            </div>
            <p className="text-gray-400 mb-4">
              Váš partner pro digitální růst. Komplexní webové řešení, SEO s AI a unikátní marketingové kanály.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +420 721 020 161
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                info@webmajstr.com
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Služby</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/sluzby" className="hover:text-white transition-colors">
                  Tvorba webů
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="hover:text-white transition-colors">
                  SEO s AI
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="hover:text-white transition-colors">
                  Sociální sítě
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="hover:text-white transition-colors">
                  Rally reklama
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="hover:text-white transition-colors">
                  E-sport marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Společnost</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/spoluprace" className="hover:text-white transition-colors">
                  Spolupráce
                </Link>
              </li>
              <li>
                <Link href="/aktuality" className="hover:text-white transition-colors">
                  Aktuality
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/cenik" className="hover:text-white transition-colors">
                  Ceník
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Právní informace</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/gdpr" className="hover:text-white transition-colors">
                  GDPR
                </Link>
              </li>
              <li>
                <Link href="/obchodni-podminky" className="hover:text-white transition-colors">
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link href="/ochrana-osobnich-udaju" className="hover:text-white transition-colors">
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors text-purple-400">
                  Admin panel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>©2023-2025 Webmajstr s.r.o., chráněno autorskými právy!</p>
        </div>
      </div>
    </footer>
  )
}
