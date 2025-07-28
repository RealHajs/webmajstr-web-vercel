"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Partner {
  id: number
  name: string
  nick?: string
  slug: string
  country?: string
  website_url?: string
  bio?: string
  social_links?: any
  logo_url?: string
  profile_image_url?: string
  is_active: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

export function PartnersAdmin() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  const [editingPartner, setEditingPartner] = useState<Partner | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Load partners from database
  useEffect(() => {
    fetchPartners()
  }, [])

  const fetchPartners = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/partners')
      const result = await response.json()
      
      if (result.success) {
        setPartners(result.data)
      } else {
        toast({
          title: "Chyba",
          description: "Nepodařilo se načíst partnery",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error fetching partners:', error)
      toast({
        title: "Chyba",
        description: "Nepodařilo se načíst partnery",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner)
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (confirm("Opravdu chcete smazat tohoto partnera?")) {
      try {
        const response = await fetch(`/api/partners/${id}`, {
          method: 'DELETE',
        })
        const result = await response.json()
        
        if (result.success) {
          setPartners(partners.filter((p) => p.id !== id))
          toast({
            title: "Úspěch",
            description: "Partner byl úspěšně smazán",
          })
        } else {
          toast({
            title: "Chyba",
            description: result.error || "Nepodařilo se smazat partnera",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error('Error deleting partner:', error)
        toast({
          title: "Chyba",
          description: "Nepodařilo se smazat partnera",
          variant: "destructive",
        })
      }
    }
  }

  const handleSave = async (formData: any) => {
    try {
      setSaving(true)
      
      // Clean up form data - remove empty strings and convert to proper format
      const cleanFormData = {
        name: formData.name,
        nick: formData.nick || null,
        slug: formData.slug,
        country: formData.country || null,
        website_url: formData.website_url || null,
        bio: formData.bio || null,
        logo_url: formData.logo_url || null,
        profile_image_url: formData.profile_image_url || null,
        social_links: formData.social_links || null,
        is_active: formData.is_active,
        sort_order: formData.sort_order || 0,
      }
      
      const url = editingPartner ? `/api/partners/${editingPartner.id}` : '/api/partners'
      const method = editingPartner ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanFormData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        if (editingPartner) {
          setPartners(partners.map((p) => p.id === editingPartner.id ? result.data : p))
        } else {
          setPartners([...partners, result.data])
        }
        
        setIsDialogOpen(false)
        setEditingPartner(null)
        
        toast({
          title: "Úspěch",
          description: editingPartner ? "Partner byl úspěšně upraven" : "Partner byl úspěšně vytvořen",
        })
      } else {
        toast({
          title: "Chyba",
          description: result.error || "Nepodařilo se uložit partnera",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error saving partner:', error)
      toast({
        title: "Chyba",
        description: "Nepodařilo se uložit partnera",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Správa partnerů a streamerů</h2>
          <p className="text-gray-600">Spravujte stránky všech vašich partnerů a spolupracovníků</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingPartner(null)}>
              <Plus className="h-4 w-4 mr-2" />
              Přidat partnera
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingPartner ? "Upravit partnera" : "Přidat nového partnera"}</DialogTitle>
              <DialogDescription>
                Vyplňte informace o partnerovi. Automaticky se vytvoří stránka na URL /{editingPartner?.slug || "slug"}
              </DialogDescription>
            </DialogHeader>
            <PartnerForm 
              partner={editingPartner} 
              onSave={handleSave} 
              onCancel={() => setIsDialogOpen(false)}
              saving={saving}
            />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Načítání partnerů...</span>
        </div>
      ) : (
        <div className="grid gap-6">
          {partners.map((partner) => (
            <Card key={partner.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={partner.logo_url || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="w-16 h-16 object-contain rounded-lg border"
                    />
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>{partner.name}</span>
                        <Badge variant={partner.is_active ? "default" : "secondary"}>
                          {partner.is_active ? "Aktivní" : "Neaktivní"}
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        @{partner.nick} • {partner.country} • /{partner.slug}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/${partner.slug}`} target="_blank" rel="noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        Zobrazit stránku
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(partner)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Upravit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(partner.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Smazat
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Bio:</p>
                    <p className="text-sm">{partner.bio}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Web:</p>
                    <p className="text-sm">
                      <a href={partner.website_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                        {partner.website_url}
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

function PartnerForm({ 
  partner, 
  onSave, 
  onCancel,
  saving 
}: { 
  partner: Partner | null
  onSave: (data: any) => void
  onCancel: () => void
  saving: boolean
}) {
  const [formData, setFormData] = useState({
    name: partner?.name || "",
    nick: partner?.nick || "",
    slug: partner?.slug || "",
    country: partner?.country || "CZ",
    website_url: partner?.website_url || "",
    bio: partner?.bio || "",
    logo_url: partner?.logo_url || "",
    profile_image_url: partner?.profile_image_url || "",
    social_links: partner?.social_links || {
      twitch: "",
      youtube: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      facebook: "",
    },
    is_active: partner?.is_active ?? true,
    sort_order: partner?.sort_order || 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleSocialLinkChange = (platform: string, value: string) => {
    setFormData({
      ...formData,
      social_links: {
        ...formData.social_links,
        [platform]: value,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Jméno/Název *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="nick">Přezdívka/Nick</Label>
          <Input
            id="nick"
            value={formData.nick}
            onChange={(e) => setFormData({ ...formData, nick: e.target.value })}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="slug">URL slug *</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) =>
              setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })
            }
            placeholder="streamercz"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Stránka bude dostupná na: /{formData.slug}</p>
        </div>
        <div>
          <Label htmlFor="country">Země</Label>
          <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CZ">Česká republika</SelectItem>
              <SelectItem value="SK">Slovensko</SelectItem>
              <SelectItem value="PL">Polsko</SelectItem>
              <SelectItem value="DE">Německo</SelectItem>
              <SelectItem value="AT">Rakousko</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="bio">Bio/Popis</Label>
        <Textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="website_url">Hlavní web/kanál</Label>
        <Input
          id="website_url"
          type="url"
          value={formData.website_url}
          onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
          placeholder="https://twitch.tv/username"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="logo_url">URL loga</Label>
          <Input
            id="logo_url"
            type="url"
            value={formData.logo_url}
            onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
            placeholder="https://example.com/logo.png"
          />
        </div>
        <div>
          <Label htmlFor="profile_image_url">URL profilové fotky</Label>
          <Input
            id="profile_image_url"
            type="url"
            value={formData.profile_image_url}
            onChange={(e) => setFormData({ ...formData, profile_image_url: e.target.value })}
            placeholder="https://example.com/profile.jpg"
          />
        </div>
      </div>

      <div>
        <Label>Sociální sítě</Label>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          {Object.entries(formData.social_links).map(([platform, url]) => (
            <div key={platform}>
              <Label htmlFor={platform} className="capitalize">
                {platform}
              </Label>
              <Input
                id={platform}
                type="url"
                value={url as string}
                onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                placeholder={`https://${platform}.com/username`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel} disabled={saving}>
          Zrušit
        </Button>
        <Button type="submit" disabled={saving}>
          {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
          {partner ? "Uložit změny" : "Vytvořit partnera"}
        </Button>
      </div>
    </form>
  )
}
