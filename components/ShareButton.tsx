"use client"

import { Share2 } from "lucide-react"
import { useCallback } from "react"

interface ShareButtonProps {
  url: string
  title: string
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const handleShare = useCallback(async () => {
    try {
      const shareUrl =
        typeof window !== "undefined"
          ? new URL(url, window.location.origin).toString()
          : url

      if (navigator.share) {
        await navigator.share({
          title,
          url: shareUrl,
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl)
        alert("Odkaz na příspěvek byl zkopírován do schránky.")
      } else {
        alert("Sdílení není v tomto prohlížeči podporováno.")
      }
    } catch (err) {
      // uživatel jen zavřel share dialog → v pohodě, neřešíme
      console.error("Share failed:", err)
    }
  }, [url, title])

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center text-sm text-gray-500 hover:text-purple-600 transition-colors"
      aria-label="Sdílet příspěvek"
    >
      <Share2 className="h-4 w-4" />
    </button>
  )
}
