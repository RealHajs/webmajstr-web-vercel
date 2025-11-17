// lib/supabase.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

// -------- ENV PROMĚNNÉ --------
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error(
    "supabaseUrl is required. Zkontroluj NEXT_PUBLIC_SUPABASE_URL v .env.local."
  )
}

if (!supabaseKey) {
  throw new Error(
    "supabaseKey is required. Zkontroluj NEXT_PUBLIC_SUPABASE_ANON_KEY v .env.local."
  )
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

// -------- TEST CONNECTION --------
export async function testConnection() {
  try {
    const { error } = await supabase.from("partners").select("count").limit(1)
    if (error) throw error
    console.log("Supabase connected successfully")
    return true
  } catch (error) {
    console.error("Supabase connection failed:", error)
    return false
  }
}

/* ========== PARTNERS ========== */

export async function getPartners() {
  try {
    const { data, error } = await supabase
      .from("partners")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false })

    if (error) {
      console.warn("Supabase getPartners error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      })
      return []
    }

    return data || []
  } catch (err) {
    console.warn("Supabase getPartners fetch failed:", err)
    return []
  }
}

export async function getPartner(id: number) {
  try {
    const { data, error } = await supabase
      .from("partners")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      console.warn("Supabase getPartner error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      })
      return null
    }

    return data
  } catch (err) {
    console.warn("Supabase getPartner fetch failed:", err)
    return null
  }
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
  const { error } = await supabase
    .from("partners")
    .delete()
    .eq("id", id)

  if (error) throw error
  return true
}

/* ========== NEWS ========== */

export async function getNews() {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })

    if (error) {
      console.warn("Supabase getNews error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      })
      return []
    }

    return data || []
  } catch (err) {
    console.warn("Supabase getNews fetch failed:", err)
    return []
  }
}

export async function getLatestNews(limit: number = 3) {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.warn("Supabase getLatestNews error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      })
      return []
    }

    return data || []
  } catch (err) {
    console.warn("Supabase getLatestNews fetch failed:", err)
    return []
  }
}

export async function getNewsArticle(id: number) {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      console.warn("Supabase getNewsArticle error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      })
      return null
    }

    return data
  } catch (err) {
    console.warn("Supabase getNewsArticle fetch failed:", err)
    return null
  }
}


// Získání článku podle slug
export async function getNewsBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("slug", slug)
      .single()

    if (error) {
      console.warn("Supabase getNewsBySlug error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      })
      return null
    }

    return data
  } catch (err) {
    console.warn("Supabase getNewsBySlug fetch failed:", err)
    return null
  }
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
  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id)

  if (error) throw error
  return true
}

/* ========== DASHBOARD ========== */

export async function getDashboardStats() {
  try {
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
  } catch (err) {
    console.warn("Supabase getDashboardStats failed:", err)
    return {
      counts: {
        partners: 0,
        news: 0,
        newContacts: 0,
        services: 0,
      },
      recent: {
        partners: [],
        news: [],
        contacts: [],
      },
    }
  }
}
