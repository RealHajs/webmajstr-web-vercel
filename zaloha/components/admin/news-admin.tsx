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
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, Calendar, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface NewsArticle {
  id: number
  title: string
  slug: string
  excerpt?: string
  content?: string
  image_url?: string
  author?: string
  published_at?: string
  is_published: boolean
  meta_title?: string
  meta_description?: string
  created_at?: string
  updated_at?: string
}

export function NewsAdmin() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Load articles from database
  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/news')
      const result = await response.json()
      
      if (result.success) {
        setArticles(result.data)
      } else {
        toast({
          title: "Chyba",
          description: "Nepodařilo se načíst články",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error fetching articles:', error)
      toast({
        title: "Chyba",
        description: "Nepodařilo se načíst články",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (article: NewsArticle) => {
    setEditingArticle(article)
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (confirm("Opravdu chcete smazat tento článek?")) {
      try {
        const response = await fetch(`/api/news/${id}`, {
          method: 'DELETE',
        })
        const result = await response.json()
        
        if (result.success) {
          setArticles(articles.filter((a) => a.id !== id))
          toast({
            title: "Úspěch",
            description: "Článek byl úspěšně smazán",
          })
        } else {
          toast({
            title: "Chyba",
            description: result.error || "Nepodařilo se smazat článek",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error('Error deleting article:', error)
        toast({
          title: "Chyba",
          description: "Nepodařilo se smazat článek",
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
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt || null,
        content: formData.content || null,
        image_url: formData.image_url || null,
        author: formData.author || null,
        published_at: formData.is_published ? new Date().toISOString() : null,
        is_published: formData.is_published,
        meta_title: formData.meta_title || null,
        meta_description: formData.meta_description || null,
      }
      
      const url = editingArticle ? `/api/news/${editingArticle.id}` : '/api/news'
      const method = editingArticle ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanFormData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        if (editingArticle) {
          setArticles(articles.map((a) => a.id === editingArticle.id ? result.data : a))
        } else {
          setArticles([...articles, result.data])
        }
        
        setIsDialogOpen(false)
        setEditingArticle(null)
        
        toast({
          title: "Úspěch",
          description: editingArticle ? "Článek byl úspěšně upraven" : "Článek byl úspěšně vytvořen",
        })
      } else {
        toast({
          title: "Chyba",
          description: result.error || "Nepodařilo se uložit článek",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error saving article:', error)
      toast({
        title: "Chyba",
        description: "Nepodařilo se uložit článek",
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
          <h2 className="text-2xl font-bold mb-2">Správa aktualit</h2>
          <p className="text-gray-600">Spravujte články a novinky na webu</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingArticle(null)}>
              <Plus className="h-4 w-4 mr-2" />
              Nový článek
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingArticle ? "Upravit článek" : "Nový článek"}</DialogTitle>
              <DialogDescription>Vytvořte nebo upravte článek pro sekci aktualit</DialogDescription>
            </DialogHeader>
            <ArticleForm 
              article={editingArticle} 
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
          <span className="ml-2">Načítání článků...</span>
        </div>
      ) : (
        <div className="grid gap-6">
          {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <Badge variant={article.is_published ? "default" : "secondary"}>
                      {article.is_published ? "Publikováno" : "Koncept"}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center space-x-4">
                    <span>/{article.slug}</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.published_at ? new Date(article.published_at).toLocaleDateString('cs-CZ') : 'Koncept'}
                    </span>
                    <span>Autor: {article.author || 'Webmajstr Team'}</span>
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/aktuality/${article.slug}`} target="_blank" rel="noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      Zobrazit
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleEdit(article)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Upravit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(article.id)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Smazat
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600 mb-2">Excerpt:</p>
                  <p className="text-sm">{article.excerpt}</p>
                </div>
                <div>
                  {article.image_url && (
                    <img
                      src={article.image_url || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-24 object-cover rounded border"
                    />
                  )}
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

function ArticleForm({ 
  article, 
  onSave, 
  onCancel,
  saving 
}: { 
  article: NewsArticle | null
  onSave: (data: any) => void
  onCancel: () => void
  saving: boolean
}) {
  const [formData, setFormData] = useState({
    title: article?.title || "",
    slug: article?.slug || "",
    excerpt: article?.excerpt || "",
    content: article?.content || "",
    author: article?.author || "Webmajstr Team",
    image_url: article?.image_url || "",
    is_published: article?.is_published || false,
    meta_title: article?.meta_title || "",
    meta_description: article?.meta_description || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
      meta_title: title,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">Titulek *</Label>
        <Input id="title" value={formData.title} onChange={(e) => handleTitleChange(e.target.value)} required />
      </div>

      <div>
        <Label htmlFor="slug">URL slug</Label>
        <Input
          id="slug"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          placeholder="url-slug"
        />
        <p className="text-xs text-gray-500 mt-1">Článek bude dostupný na: /aktuality/{formData.slug}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="author">Autor</Label>
          <Input
            id="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="image_url">URL obrázku</Label>
          <Input
            id="image_url"
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt (krátký popis)</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="content">Obsah článku *</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={10}
          required
        />
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">SEO nastavení</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="meta_title">Meta titulek</Label>
            <Input
              id="meta_title"
              value={formData.meta_title}
              onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
              maxLength={60}
            />
            <p className="text-xs text-gray-500 mt-1">{formData.meta_title.length}/60 znaků</p>
          </div>
          <div>
            <Label htmlFor="meta_description">Meta popis</Label>
            <Textarea
              id="meta_description"
              value={formData.meta_description}
              onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
              rows={3}
              maxLength={160}
            />
            <p className="text-xs text-gray-500 mt-1">{formData.meta_description.length}/160 znaků</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.is_published}
            onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
          />
          <span>Publikovat článek</span>
        </label>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Zrušit
        </Button>
        <Button type="submit">{article ? "Uložit změny" : "Vytvořit článek"}</Button>
      </div>
    </form>
  )
}
