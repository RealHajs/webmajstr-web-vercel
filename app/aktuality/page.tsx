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
import { Calendar, User, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

import { getNews } from "@/lib/supabase"
import { ShareButton } from "@/components/ShareButton"

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
          <div className="grid lg:grid-cols-2 gap-8">
            {news.map((article: NewsArticle, index: number) => {
              const articleUrl = `/aktuality/${article.slug}`

              return (
                <Card
                  key={article.id}
                  className={`hover:shadow-lg transition-shadow ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <Link href={articleUrl}>
                    <div
                      className={`aspect-video overflow-hidden rounded-t-lg ${
                        index === 0 ? "aspect-[2/1]" : ""
                      }`}
                    >
                      <img
                        src={article.image_url || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {article.published_at
                            ? new Date(
                                article.published_at
                              ).toLocaleDateString("cs-CZ")
                            : "Koncept"}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {article.author || "Webmajstr Team"}
                        </div>
                      </div>

                      {/* Sdílení */}
                      <ShareButton url={articleUrl} title={article.title} />
                    </div>

                    <CardTitle
                      className={index === 0 ? "text-2xl" : "text-xl"}
                    >
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {article.excerpt}
                    </CardDescription>

                    {/* Číst více → odkaz na detail článku */}
                    <Button variant="outline" size="sm" asChild>
                      <Link href={articleUrl}>
                        Číst více
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Load More – zatím jen statické tlačítko */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Načíst další aktuality
            </Button>
          </div>
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
              <Button size="lg">Přihlásit se</Button>
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
