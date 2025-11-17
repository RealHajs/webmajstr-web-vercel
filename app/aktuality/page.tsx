export const dynamic = "force-dynamic"

import type { Metadata } from "next"
import { getNews } from "@/lib/supabase"
import { NewsList } from "../../components/NewsList"

interface NewsArticle {
  id: number
  title: string
  slug: string
  excerpt?: string
  content?: string
  image_url?: string
  author?: string
  published_at?: string
  is_published: boolean
  meta_title?: string
  meta_description?: string
  created_at?: string
  updated_at?: string
}

export default async function NewsPage() {
  const news = await getNews()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Aktuality</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Sledujte nejnovější novinky ze světa Webmajstr a digitálního
            marketingu
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <NewsList news={news as NewsArticle[]} />

          {news.length > 0 && (
            <div className="text-center mt-12">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Načíst další aktuality
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Nezmeškejte žádnou novinku
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Přihlaste se k odběru našeho newsletteru a buďte první, kdo se
              dozví o novinkách a aktualizacích
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
              >
                Přihlásit se
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Aktuality - Webmajstr",
  description:
    "Sledujte nejnovější novinky ze světa Webmajstr a digitálního marketingu",
  keywords:
    "aktuality, novinky, webmajstr, digitální marketing, AI SEO, rally reklama",
}
