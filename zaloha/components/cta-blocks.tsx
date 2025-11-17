import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Calculator } from "lucide-react"

export function CTABlocks() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Začněte ještě dnes</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Kontaktujte nás pro nezávaznou konzultaci a kalkulaci na míru
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-purple-200" />
              <CardTitle>Zavolejte nám</CardTitle>
              <CardDescription className="text-purple-100">Okamžitá konzultace zdarma</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" size="lg" className="w-full">
                +420 721 020 161
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-purple-200" />
              <CardTitle>Napište nám</CardTitle>
              <CardDescription className="text-purple-100">Odpovíme do 24 hodin</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" size="lg" className="w-full">
                info@webmajstr.com
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Calculator className="h-12 w-12 mx-auto mb-4 text-purple-200" />
              <CardTitle>Kalkulace zdarma</CardTitle>
              <CardDescription className="text-purple-100">Přesná cena na míru</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" size="lg" className="w-full">
                Získat kalkulaci
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
