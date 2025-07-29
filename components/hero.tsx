export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 lg:py-40">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Váš digitální růst začíná u nás</h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300">
            Tvorba a propagace webových stránek, reklama v rally a mnoho dalšího pouze u nás !
          </p>
          <br /><br /><br /><br />
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4" asChild>
            <a href="/kontakt">
              Kontaktujte nás
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-whitesmoke to-transparent"></div>
    </section>
  )
}
