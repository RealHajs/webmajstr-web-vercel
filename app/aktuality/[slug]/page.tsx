export const dynamic = "force-dynamic"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, User } from "lucide-react"

import { getNewsBySlug } from "@/lib/supabase"
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

interface PageProps {
  params: {
    slug: string
  }
}

// Dynamická metadata podle článku
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = (await getNewsBySlug(params.slug)) as NewsArticle | null

  if (!article) {
    return {
      title: "Článek nenalezen - Webmajstr",
      description: "Požadovaný článek nebyl nalezen.",
    }
  }

  return {
    title:
      article.meta_title ||
      `${article.title} – Aktuality – Webmajstr`,
    description:
      article.meta_description || article.excerpt || undefined,
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const article = (await getNewsBySlug(params.slug)) as NewsArticle | null

  if (!article) {
    notFound()
  }

  const articleUrl = `/aktuality/${article.slug}`

  // Připravíme pole odstavců: nejdřív excerpt, pak content
  const paragraphs: string[] = []

  if (article.excerpt && article.excerpt.trim().length > 0) {
    paragraphs.push(article.excerpt.trim())
  }

  if (article.content) {
    article.content
      .split("\n\n")
      .map((p) => p.trim())
      .filter((p) => p.length > 0)
      .forEach((p) => paragraphs.push(p))
  }

  // Kolik odstavců dát doprava vedle obrázku
  const TOP_COUNT = 5
  const rightColumnParagraphs = paragraphs.slice(0, TOP_COUNT)
  const bottomParagraphs = paragraphs.slice(TOP_COUNT)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO / nadpis článku */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="w-full mx-auto px-4 lg:w-[70%]">
          <p className="text-purple-200 text-sm mb-3">Aktuality</p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-purple-100">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {article.published_at
                ? new Date(article.published_at).toLocaleDateString("cs-CZ")
                : "Koncept"}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author || "Webmajstr Team"}
            </div>

            {/* Sdílení */}
            <div className="ml-auto">
              <ShareButton url={articleUrl} title={article.title} />
            </div>
          </div>
        </div>
      </section>

      {/* HLAVNÍ OBSAH */}
      <section className="py-12">
        {/* Vnější wrapper – cca 70 % šířky na desktopu */}
        <div className="w-full mx-auto px-4 lg:w-[70%]">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            {/* Horní část: obrázek vlevo, text vpravo */}
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] lg:items-start">
              {/* Obrázek – max výška 30vh */}
              {article.image_url && (
                <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-auto object-cover h-[40vh]"
                  />
                </div>
              )}

              {/* Pravý sloupec – excerpt + první odstavce contentu */}
              <div className="text-gray-800 text-base leading-relaxed lg:pr-10">
                {rightColumnParagraphs.length > 0 ? (
                  rightColumnParagraphs.map((para, idx) => (
                    <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">
                    Detailní obsah zatím není k dispozici.
                  </p>
                )}
              </div>
            </div>

            {/* Spodní text – zarovnání zleva stejně jako obrázek */}
            {bottomParagraphs.length > 0 && (
              <div className="mt-8 text-gray-800 text-base leading-relaxed space-y-4">
                {bottomParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}

            {/* Spodní meta informace */}
            <div className="mt-10 pt-4 border-t text-xs text-gray-500 flex flex-wrap gap-2 justify-between">
              {article.created_at && (
                <span>
                  Vytvořeno:{" "}
                  {new Date(article.created_at).toLocaleString("cs-CZ")}
                </span>
              )}
              {article.updated_at && (
                <span>
                  Naposledy upraveno:{" "}
                  {new Date(article.updated_at).toLocaleString("cs-CZ")}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
