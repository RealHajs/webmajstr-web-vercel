import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Webmajstr - Váš partner pro digitální růst",
  description:
    "Komplexní webové řešení, SEO s AI, reklama na rally autě a v e-sportu. Tvorba webů, správa sociálních sítí a unikátní marketingové kanály.",
  keywords: "webmajstr, tvorba webů, SEO, AI, rally reklama, e-sport marketing, sociální sítě",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
