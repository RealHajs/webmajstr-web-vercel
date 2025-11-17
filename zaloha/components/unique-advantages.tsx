export const dynamic = "force-dynamic";

import { Car, Trophy, Users, Brain } from "lucide-react"

export function UniqueAdvantages() {
  const advantages = [
    {
      icon: Car,
      title: "Reklama na RALLY autě",
      description: "Jedinečná možnost propagace na závodních autech při rally soutěžích po celé Evropě",
    },
    {
      icon: Trophy,
      title: "Marketing v e-sportu",
      description: "Vaše značka vidět v e-sportu – spolupracujeme s týmy, turnaji i streamery po celém světě",
    },
    {
      icon: Users,
      title: "Spolupráce s influencery",
      description: "Síť ověřených influencerů a streamerů pro autentickou propagaci vaší značky",
    },
    {
      icon: Brain,
      title: "AI SEO optimalizace",
      description: "Využíváme nejmodernější AI nástroje pro maximální efektivitu SEO strategie",
    },
  ]

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Unikátní výhody</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Co nás odlišuje od konkurence? Inovativní přístupy a kanály, které nikdo jiný nenabízí
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <advantage.icon className="h-12 w-12 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
