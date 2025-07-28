import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"

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

import { getLatestNews } from '@/lib/supabase'

export default async function News() {
  const news = await getLatestNews()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Aktuality</h2>
          <p className="text-lg text-gray-600">Sledujte nejnovější novinky ze světa Webmajstr</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={article.image_url || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.published_at ? new Date(article.published_at).toLocaleDateString('cs-CZ') : 'Koncept'}
                </div>
                <CardTitle className="text-lg">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{article.excerpt}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/aktuality">Zobrazit všechny aktuality</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
