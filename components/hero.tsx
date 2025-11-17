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

  return (
    <>
      {/*
        Výška hero sekce:
        - min-h-[45vh] = cca 45 % výšky okna.
        - Když chceš víc/míň, změň např. na min-h-[40vh], min-h-[60vh], ...
      */}
      <section className="relative text-white py-20 lg:py-40 overflow-hidden min-h-[45vh]">
        {/* Background video přes celou šířku/výšku sekce */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-30"
            // Opacity videa:
            // - aktuálně 30 % (opacity-30)
            // - zvýšíš/snížíš změnou na opacity-20, opacity-40, ...
            src="/video/bacgkround_webmajstr.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Fialový tmavší overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {titleText}
              {(isTypingTitle || isTypingSubtitle) && (
                <span className="inline-block w-[1px] bg-white ml-1 animate-pulse h-[1em] align-middle" />
              )}
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 min-h-[3rem]">
              {subtitleText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
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
                className="border-white/60 text-black hover:bg-white/10 text-lg px-8 py-4"
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
    </>
  )
}
