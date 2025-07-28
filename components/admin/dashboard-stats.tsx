"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Mail, TrendingUp, Loader2 } from "lucide-react"

interface DashboardData {
  counts: {
    partners: number
    news: number
    newContacts: number
    services: number
  }
  recent: {
    partners: any[]
    news: any[]
    contacts: any[]
  }
}

export function DashboardStats() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/dashboard/stats')
      const result = await response.json()
      
      if (result.success) {
        setData(result.data)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    {
      title: "Celkem partnerů",
      value: data?.counts.partners || "0",
      description: "Aktivní spolupráce",
      icon: Users,
      trend: "Načítání...",
    },
    {
      title: "Publikované články",
      value: data?.counts.news || "0",
      description: "Celkem aktualit",
      icon: FileText,
      trend: "Načítání...",
    },
    {
      title: "Kontaktní zprávy",
      value: data?.counts.newContacts || "0",
      description: "Nové zprávy",
      icon: Mail,
      trend: "Načítání...",
    },
    {
      title: "Služby",
      value: data?.counts.services || "0",
      description: "Dostupné služby",
      icon: TrendingUp,
      trend: "Načítání...",
    },
  ]

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
          <p className="text-gray-600">Přehled klíčových metrik a aktivit</p>
        </div>
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Načítání dat...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
        <p className="text-gray-600">Přehled klíčových metrik a aktivit</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Poslední aktivity</CardTitle>
            <CardDescription>Nejnovější změny v systému</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data?.recent.partners.slice(0, 3).map((partner: any) => (
                <div key={partner.id} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Partner: {partner.name}</p>
                    <p className="text-xs text-gray-500">
                      Vytvořen: {new Date(partner.created_at).toLocaleDateString('cs-CZ')}
                    </p>
                  </div>
                </div>
              ))}
              {data?.recent.news.slice(0, 2).map((news: any) => (
                <div key={news.id} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Článek: {news.title}</p>
                    <p className="text-xs text-gray-500">
                      {news.published_at ? new Date(news.published_at).toLocaleDateString('cs-CZ') : 'Koncept'}
                    </p>
                  </div>
                </div>
              ))}
              {data?.recent.contacts.slice(0, 2).map((contact: any) => (
                <div key={contact.id} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Kontakt: {contact.name}</p>
                    <p className="text-xs text-gray-500">
                      {contact.subject} - {new Date(contact.created_at).toLocaleDateString('cs-CZ')}
                    </p>
                  </div>
                </div>
              ))}
              {(!data?.recent.partners.length && !data?.recent.news.length && !data?.recent.contacts.length) && (
                <div className="text-center text-gray-500 py-4">
                  <p className="text-sm">Zatím žádné aktivity</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rychlé akce</CardTitle>
            <CardDescription>Nejčastější úkoly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Přidat nového partnera</div>
              <div className="text-sm text-gray-500">Vytvořit novou stránku pro streamera</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Napsat nový článek</div>
              <div className="text-sm text-gray-500">Publikovat aktualitu</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Zkontrolovat zprávy</div>
              <div className="text-sm text-gray-500">Odpovědět na kontakty</div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
