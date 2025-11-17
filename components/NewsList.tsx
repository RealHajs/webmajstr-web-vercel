"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { ShareButton } from "@/components/ShareButton"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

interface NewsListProps {
  news: NewsArticle[]
}

export function NewsList({ news }: NewsListProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleArticle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  if (!news || news.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Zatím tu nejsou žádné publikované aktuality.
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {news.map((article, index) => {
        const articleUrl = `/aktuality/${article.slug}`
        const isOpen = openId === article.id

        return (
          <Card
            key={article.id}
            className={`hover:shadow-lg transition-shadow ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            {/* Obrázek */}
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

                <ShareButton url={articleUrl} title={article.title} />
              </div>

              <CardTitle className={index === 0 ? "text-2xl" : "text-xl"}>
                {article.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                {article.excerpt}
              </CardDescription>

              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => toggleArticle(article.id)}
                >
                  {isOpen ? "Skrýt" : "Číst více"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Link
                  href={articleUrl}
                  className="text-sm text-purple-600 hover:underline"
                >
                  Otevřít jako samostatnou stránku
                </Link>
              </div>

              {isOpen && (
                <div className="mt-4 border-t pt-4 text-sm text-gray-700 space-y-3">
                  {article.content ? (
                    <p className="whitespace-pre-line leading-relaxed">
                      {article.content}
                    </p>
                  ) : (
                    <p>Detailní obsah zatím není vyplněn.</p>
                  )}

                  <div className="grid gap-2 text-xs text-gray-500 sm:grid-cols-2">
                    <div>
                      <span className="font-semibold">Vytvořeno:</span>{" "}
                      {article.created_at
                        ? new Date(article.created_at).toLocaleString("cs-CZ")
                        : "—"}
                    </div>
                    <div>
                      <span className="font-semibold">Naposledy upraveno:</span>{" "}
                      {article.updated_at
                        ? new Date(article.updated_at).toLocaleString("cs-CZ")
                        : "—"}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
