// components/Hero.tsx
"use client"

export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import { WebmajstrChat } from "@/components/WebmajstrChat"

export function Hero() {
  const [titleText, setTitleText] = useState("")
  const [subtitleText, setSubtitleText] = useState("")
  const [isTypingTitle, setIsTypingTitle] = useState(true)
  const [isTypingSubtitle, setIsTypingSubtitle] = useState(false)

  useEffect(() => {
    const title = "Váš digitální růst začíná u nás"
    const subtitle =
      "Tvorba a propagace webových stránek, reklama v rally a mnoho dalšího pouze u nás!"

    let titleIndex = 0
    let subtitleIndex = 0

    const typeSubtitle = () => {
      if (subtitleIndex <= subtitle.length) {
        setSubtitleText(subtitle.slice(0, subtitleIndex))
        subtitleIndex++
        setTimeout(typeSubtitle, 25) // rychlejší animace pro podtitul
      } else {
        setIsTypingSubtitle(false)
      }
    }

    const typeTitle = () => {
      if (titleIndex <= title.length) {
        setTitleText(title.slice(0, titleIndex))
        titleIndex++
        setTimeout(typeTitle, 70)
      } else {
        setIsTypingTitle(false)
        setIsTypingSubtitle(true)
        setTimeout(typeSubtitle, 300)
      }
    }

    typeTitle()
  }, [])

  // výška hero sekce ≈ 45 % výšky okna – můžeš změnit např. na "min-h-[40vh]" nebo "min-h-[60vh]"
  const heroHeightClass = "min-h-[55vh]"

  return (
    <section
      className={`relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 lg:py-24 ${heroHeightClass} overflow-hidden`}
    >
      {/* Video na pozadí */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          className="
            absolute
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            min-w-full min-h-full
            object-cover
            opacity-35
          "
          src="/video/bacgkround_webmajstr.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Fialový překryv – lehce ztmavený */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
            {titleText}
            {(isTypingTitle || isTypingSubtitle) && (
              <span className="ml-1 inline-block h-[1em] w-[1px] animate-pulse bg-white align-middle" />
            )}
          </h1>

          <p className="mb-8 min-h-[3rem] text-xl text-gray-300 lg:text-2xl">
            {subtitleText}
          </p>

          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-purple-600 px-8 py-4 text-lg hover:bg-purple-700"
              asChild
            >
              <a href="/kontakt">
                Kontaktujte nás
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/60 px-8 py-4 text-lg text-black hover:bg-white/10"
              asChild
            >
              <a href="/spoluprace">
                Naši klienti
                <Users className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Chat widget – fixed vpravo dole */}
      <WebmajstrChat />
    </section>
  )
}
