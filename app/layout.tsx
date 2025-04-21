import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ana Côrtes - Planejamento Financeiro",
  description:
    "Conquiste sua liberdade financeira com serviços de planejamento financeiro personalizado. Consultoria, planilhas e cursos para organizar suas finanças.",
  generator: "v0.dev",
  keywords: [
    "planejamento financeiro",
    "consultoria financeira",
    "planilha financeira",
    "finanças pessoais",
    "investimentos",
    "Ana Côrtes",
  ],
  authors: [{ name: "Ana Côrtes" }],
  creator: "Ana Côrtes",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://anacortes.com.br",
    title: "Ana Côrtes - Planejamento Financeiro",
    description: "Conquiste sua liberdade financeira com serviços de planejamento financeiro personalizado.",
    siteName: "Ana Côrtes - Planejamento Financeiro",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 600,
        alt: "Ana Côrtes - Planejamento Financeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Côrtes - Planejamento Financeiro",
    description: "Conquiste sua liberdade financeira com serviços de planejamento financeiro personalizado.",
    images: ["/images/profile.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <div className="fixed bottom-4 right-4 z-50">
              <WhatsAppFloatingButton />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
