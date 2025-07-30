"use client"

export const dynamic = "force-dynamic";

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("https://formspree.io/f/mrbllzpn", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Děkujeme za vaši zprávu! Odpovíme vám do 24 hodin.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Došlo k chybě při odesílání. Zkuste to prosím znovu.");
    }
  } catch (error) {
    alert("Něco se pokazilo při odesílání formuláře.");
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Máte otázky nebo potřebujete poradit? Jsme tu pro vás!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Kontaktní údaje</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Telefon</h3>
                    <p className="text-gray-600">+420 721 020 161</p>
                    <p className="text-sm text-gray-500">Pondělí - Pátek: 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-gray-600">info@webmajstr.com</p>
                    <p className="text-sm text-gray-500">Odpovídáme do 24 hodin</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Adresa</h3>
                    <p className="text-gray-600">
                      Webmajstr s.r.o.
                      <br />
                      Hlavní 123
                      <br />
                      110 00 Praha 1
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Levels */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-purple-600 mr-2" />
                  Úrovně podpory
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Standardní balíček</span>
                    <span className="text-sm text-gray-600">Online podpora</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rozšířený balíček</span>
                    <span className="text-sm text-gray-600">Rychlá podpora</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Korporátní balíček</span>
                    <span className="text-sm text-purple-600 font-semibold">Nonstop podpora</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktní formulář</CardTitle>
                  <CardDescription>Napište nám a my se vám ozveme do 24 hodin</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Jméno a příjmení *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jan Novák"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Telefon
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+420 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jan@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Předmět
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Poptávka na nový web"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Zpráva *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Popište nám vaše požadavky..."
                      />
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>
                        Odesláním formuláře souhlasíte se zpracováním osobních údajů podle{" "}
                        <a href="/gdpr" className="text-purple-600 hover:underline">
                          GDPR
                        </a>
                        .
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Odeslat zprávu
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Rychlé akce</h2>
            <p className="text-lg text-gray-600">Potřebujete rychlou pomoc? Vyberte si nejrychlejší způsob kontaktu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Okamžitá konzultace</CardTitle>
                <CardDescription>Zavolejte nám pro rychlou radu</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:+420721020161">Zavolat: +420 721 020 161</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>E-mailová podpora</CardTitle>
                <CardDescription>Napište nám detailní poptávku</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                  <a href="mailto:info@webmajstr.com">info@webmajstr.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Kalkulace zdarma</CardTitle>
                <CardDescription>Získejte cenovou nabídku na míru</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  Získat kalkulaci
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
