// components/Hero.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import { WebmajstrChat } from "@/components/WebmajstrChat"

export default function Hero() {
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
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "45vh" }} // 👉 tady si můžeš měnit výšku (např. 0.6 * vh = 60 %, 0.8 = 80 %)
    >
      {/* Fialový gradient – trochu ztmavený */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900" />

      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" // průhlednost videa
          src="/video/bacgkround_webmajstr.mp4" // musí sedět přesně na název souboru v /public/video
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Tmavý overlay, aby byl text čitelný */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Obsah */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {titleText}
            {(isTypingTitle || isTypingSubtitle) && (
              <span className="inline-block w-[1px] bg-white ml-1 animate-pulse h-[1em] align-middle" />
            )}
          </h1>

          <p className="text-xl lg:text-2xl mb-8 text-gray-300 min-h-[3rem]">
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

      {/* Chat widget – fixní vpravo dole */}
      <WebmajstrChat />
    </section>
  )
}
