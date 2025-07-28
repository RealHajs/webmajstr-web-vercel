"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save } from "lucide-react"

export function SettingsAdmin() {
  const [settings, setSettings] = useState({
    siteTitle: "Webmajstr - Váš partner pro digitální růst",
    siteDescription: "Komplexní webové řešení, SEO s AI, reklama na rally autě a v e-sportu",
    contactEmail: "info@webmajstr.com",
    contactPhone: "+420 721 020 161",
    primaryColor: "#7c3aed",
    secondaryColor: "#a855f7",
    defaultLanguage: "cs",
    smtpHost: "",
    smtpUsername: "",
    smtpPassword: "",
    googleAnalytics: "",
    facebookPixel: "",
  })

  const handleSave = (section) => {
    alert(`Nastavení sekce "${section}" bylo uloženo!`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Nastavení webu</h2>
        <p className="text-gray-600">Spravujte globální nastavení webu, barvy, jazyky a integrace</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">Obecné</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="email">E-mail</TabsTrigger>
          <TabsTrigger value="integrations">Integrace</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Obecné nastavení</CardTitle>
              <CardDescription>Základní informace o webu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteTitle">Název webu</Label>
                <Input
                  id="siteTitle"
                  value={settings.siteTitle}
                  onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="siteDescription">Popis webu</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactEmail">Kontaktní e-mail</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Kontaktní telefon</Label>
                  <Input
                    id="contactPhone"
                    value={settings.contactPhone}
                    onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="defaultLanguage">Výchozí jazyk</Label>
                <select
                  id="defaultLanguage"
                  value={settings.defaultLanguage}
                  onChange={(e) => setSettings({ ...settings, defaultLanguage: e.target.value })}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="cs">Čeština</option>
                  <option value="sk">Slovenština</option>
                  <option value="en">English</option>
                </select>
              </div>
              <Button onClick={() => handleSave("obecné")}>
                <Save className="h-4 w-4 mr-2" />
                Uložit obecné nastavení
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design">
          <Card>
            <CardHeader>
              <CardTitle>Design a barvy</CardTitle>
              <CardDescription>Přizpůsobte vzhled webu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primaryColor">Primární barva</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                      className="w-16 h-10"
                    />
                    <Input
                      value={settings.primaryColor}
                      onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                      placeholder="#7c3aed"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="secondaryColor">Sekundární barva</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={settings.secondaryColor}
                      onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                      className="w-16 h-10"
                    />
                    <Input
                      value={settings.secondaryColor}
                      onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                      placeholder="#a855f7"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Náhled barev:</h4>
                <div className="flex space-x-4">
                  <div
                    className="w-20 h-20 rounded-lg flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: settings.primaryColor }}
                  >
                    Primární
                  </div>
                  <div
                    className="w-20 h-20 rounded-lg flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: settings.secondaryColor }}
                  >
                    Sekundární
                  </div>
                </div>
              </div>
              <Button onClick={() => handleSave("design")}>
                <Save className="h-4 w-4 mr-2" />
                Uložit design
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>E-mailové nastavení</CardTitle>
              <CardDescription>Konfigurace SMTP pro odesílání e-mailů</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="smtpHost">SMTP server</Label>
                <Input
                  id="smtpHost"
                  value={settings.smtpHost}
                  onChange={(e) => setSettings({ ...settings, smtpHost: e.target.value })}
                  placeholder="smtp.gmail.com"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtpUsername">SMTP uživatel</Label>
                  <Input
                    id="smtpUsername"
                    value={settings.smtpUsername}
                    onChange={(e) => setSettings({ ...settings, smtpUsername: e.target.value })}
                    placeholder="user@gmail.com"
                  />
                </div>
                <div>
                  <Label htmlFor="smtpPassword">SMTP heslo</Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={settings.smtpPassword}
                    onChange={(e) => setSettings({ ...settings, smtpPassword: e.target.value })}
                    placeholder="########"
                  />
                </div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Poznámka:</strong> Všechny kontaktní formuláře budou odesílány na {settings.contactEmail}
                </p>
              </div>
              <Button onClick={() => handleSave("e-mail")}>
                <Save className="h-4 w-4 mr-2" />
                Uložit e-mail nastavení
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrace</CardTitle>
              <CardDescription>Google Analytics, Facebook Pixel a další</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                <Input
                  id="googleAnalytics"
                  value={settings.googleAnalytics}
                  onChange={(e) => setSettings({ ...settings, googleAnalytics: e.target.value })}
                  placeholder="G-XXXXXXXXXX"
                />
              </div>
              <div>
                <Label htmlFor="facebookPixel">Facebook Pixel ID</Label>
                <Input
                  id="facebookPixel"
                  value={settings.facebookPixel}
                  onChange={(e) => setSettings({ ...settings, facebookPixel: e.target.value })}
                  placeholder="123456789012345"
                />
              </div>
              <Button onClick={() => handleSave("integrace")}>
                <Save className="h-4 w-4 mr-2" />
                Uložit integrace
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
