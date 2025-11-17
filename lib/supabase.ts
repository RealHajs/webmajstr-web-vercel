// lib/supabase.ts
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey)

// Test připojení
export async function testConnection() {
  try {
    const { error } = await supabase.from("partners").select("id").limit(1)
    if (error) throw error
    console.log("Supabase connected successfully")
    return true
  } catch (error) {
    console.error("Supabase connection failed:", error)
    return false
  }
}

/* -------- PARTNERS -------- */

export async function getPartners() {
  const { data, error } = await supabase
    .from("partners")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })

  if (error) throw error
  return data || []
}

export async function getPartner(id: number) {
  const { data, error } = await supabase
    .from("partners")
    .select("*")
    .eq("id", id)
    .single()

  if (error) throw error
  return data
}

export async function createPartner(partner: any) {
  const { data, error } = await supabase
    .from("partners")
    .insert([partner])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updatePartner(id: number, updates: any) {
  const { data, error } = await supabase
    .from("partners")
    .update(updates)
    .eq("id", id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deletePartner(id: number) {
  const { error } = await supabase.from("partners").delete().eq("id", id)

  if (error) throw error
  return true
}

/* -------- NEWS -------- */

export async function getNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("published_at", { ascending: false })
    .order("created_at", { ascending: false })

  if (error) throw error
  return data || []
}

export async function getLatestNews(limit: number = 3) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) throw error
  return data || []
}

export async function getNewsArticle(id: number) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single()

  if (error) throw error
  return data
}

/** NOVÁ FUNKCE – podle slug pro /aktuality/[slug] */
export async function getNewsBySlug(slug: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) throw error
  return data
}

export async function createNewsArticle(article: any) {
  const { data, error } = await supabase
    .from("news")
    .insert([article])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateNewsArticle(id: number, updates: any) {
  const { data, error } = await supabase
    .from("news")
    .update(updates)
    .eq("id", id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteNewsArticle(id: number) {
  const { error } = await supabase.from("news").delete().eq("id", id)

  if (error) throw error
  return true
}

/* -------- DASHBOARD STATS -------- */

export async function getDashboardStats() {
  const [partnersResult, newsResult, contactsResult, servicesResult] =
    await Promise.all([
      supabase.from("partners").select("id", { count: "exact" }),
      supabase.from("news").select("id", { count: "exact" }),
      supabase
        .from("contacts")
        .select("id", { count: "exact" })
        .eq("status", "new"),
      supabase.from("services").select("id", { count: "exact" }),
    ])

  const [recentPartners, recentNews, recentContacts] = await Promise.all([
    supabase
      .from("partners")
      .select("id, name, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase
      .from("news")
      .select("id, title, published_at")
      .order("published_at", { ascending: false })
      .limit(5),
    supabase
      .from("contacts")
      .select("id, name, email, subject, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ])

  return {
    counts: {
      partners: partnersResult.count || 0,
      news: newsResult.count || 0,
      newContacts: contactsResult.count || 0,
      services: servicesResult.count || 0,
    },
    recent: {
      partners: recentPartners.data || [],
      news: recentNews.data || [],
      contacts: recentContacts.data || [],
    },
  }
}
