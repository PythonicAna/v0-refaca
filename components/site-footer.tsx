import Link from "next/link"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ana Côrtes</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Planejamento financeiro personalizado para ajudar você a alcançar seus objetivos.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/anacôrtes/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="mailto:contato@anacortes.com.br">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/planilha" className="text-muted-foreground hover:text-primary">
                  Planilha Financeira
                </Link>
              </li>
              <li>
                <Link href="/consultoria" className="text-muted-foreground hover:text-primary">
                  Consultoria Personalizada
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-primary">
                  Cursos Online
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">(21) 98840-1348</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">contato@anacortes.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ana Côrtes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
