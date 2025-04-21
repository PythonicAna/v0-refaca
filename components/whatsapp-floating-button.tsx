import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloatingButton() {
  return (
    <Link href="https://wa.me/5521988401348" target="_blank" rel="noopener noreferrer">
      <Button className="rounded-full w-12 h-12 p-0 bg-green-600 hover:bg-green-700 text-white shadow-lg">
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Falar pelo WhatsApp</span>
      </Button>
    </Link>
  )
}
