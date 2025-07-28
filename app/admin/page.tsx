"use client"

export const dynamic = "force-dynamic";


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Settings, BarChart3 } from "lucide-react"
import { PartnersAdmin } from "@/components/admin/partners-admin"
import { NewsAdmin } from "@/components/admin/news-admin"
import { SettingsAdmin } from "@/components/admin/settings-admin"
import { DashboardStats } from "@/components/admin/dashboard-stats"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Panel - Webmajstr</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Přihlášen jako: admin@webmajstr.com</span>
              <Button variant="outline" size="sm">
                Odhlásit se
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Partneři/Streamers</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Aktuality</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Nastavení</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardStats />
          </TabsContent>

          <TabsContent value="partners">
            <PartnersAdmin />
          </TabsContent>

          <TabsContent value="news">
            <NewsAdmin />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsAdmin />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
