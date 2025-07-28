import { Users, Award, Zap, Heart } from "lucide-react"

export function AboutUs() {
  const benefits = [
    {
      icon: Users,
      title: "Zkušený tým",
      description: "Profesionálové s dlouholetými zkušenostmi v digitálním marketingu",
    },
    {
      icon: Award,
      title: "Unikátní přístup",
      description: "Kombinujeme tradiční marketing s inovativními kanály jako rally a e-sport",
    },
    {
      icon: Zap,
      title: "AI technologie",
      description: "Využíváme nejmodernější AI nástroje pro SEO a optimalizaci",
    },
    {
      icon: Heart,
      title: "Osobní přístup",
      description: "Každý klient je pro nás jedinečný, poskytujeme individuální řešení",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Od prvního kliknutí po výsledky</h2>
          <p className="text-lg text-gray-600">
            Tvoříme webové stránky a digitální marketing, co vám skutečně vydělává - bez zbytečných řečí, abyste se mohli věnovat růstu svému podnikání.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
