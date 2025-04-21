import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link href="https://wa.me/5521988401348" target="_blank" rel="noopener noreferrer">
      <Button className="bg-green-600 hover:bg-green-700 text-white">
        <MessageCircle className="mr-2 h-4 w-4" />
        Falar pelo WhatsApp
      </Button>
    </Link>
  )
}

export function LinkedInButton() {
  return (
    <Link href="https://www.linkedin.com/in/anacôrtes/" target="_blank" rel="noopener noreferrer">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
        <Linkedin className="mr-2 h-4 w-4" />
        Conectar no LinkedIn
      </Button>
    </Link>
  )
}
