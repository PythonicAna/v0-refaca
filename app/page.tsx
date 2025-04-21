import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, FileSpreadsheet, Users } from "lucide-react"
import { WhatsAppButton } from "@/components/social-buttons"
import { StarRating } from "@/components/star-rating"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Conquiste sua liberdade financeira</h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Planejamento financeiro personalizado para ajudar você a alcançar seus objetivos e construir um futuro
                próspero.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/planilha">
                  <Button size="lg" className="w-full sm:w-auto">
                    Comprar Planilha Financeira
                  </Button>
                </Link>
                <Link href="/consultoria">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Agendar Consultoria
                  </Button>
                </Link>
              </div>
              <div className="mt-4">
                <WhatsAppButton />
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/profile.jpg"
                alt="Ana Côrtes - Planejamento Financeiro"
                className="rounded-lg shadow-lg max-w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Como posso ajudar você</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofereço soluções completas para todas as etapas da sua jornada financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileSpreadsheet className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Planilha Financeira</CardTitle>
                <CardDescription>Ferramenta completa para organizar suas finanças pessoais</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Minha planilha exclusiva permite controlar gastos, planejar orçamentos e acompanhar investimentos de
                  forma simples e eficaz.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/planilha" className="w-full">
                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Consultoria Personalizada</CardTitle>
                <CardDescription>Orientação financeira adaptada às suas necessidades</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Sessões individuais para analisar sua situação atual e criar estratégias para alcançar seus objetivos.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/consultoria" className="w-full">
                  <Button variant="outline" className="w-full">
                    Agendar Sessão
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Cursos Online</CardTitle>
                <CardDescription>Aprenda a investir e gerenciar seu dinheiro</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Conteúdo educacional para todos os níveis, desde iniciantes até investidores experientes que desejam
                  aprimorar suas estratégias.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/cursos" className="w-full">
                  <Button variant="outline" className="w-full">
                    Ver Cursos
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que escolher meus serviços</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Benefícios que transformarão sua relação com o dinheiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Metodologia comprovada</h3>
                <p className="text-muted-foreground">
                  Meu método já ajudou mais de 10.000 pessoas a organizarem suas finanças e conquistarem independência
                  financeira.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Profissional certificada</h3>
                <p className="text-muted-foreground">
                  Sou especialista certificada com anos de experiência no mercado financeiro.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Atendimento personalizado</h3>
                <p className="text-muted-foreground">
                  Cada cliente recebe um plano único, desenvolvido de acordo com seus objetivos, perfil e momento de
                  vida.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Independência de produtos</h3>
                <p className="text-muted-foreground">
                  Não vendo produtos financeiros, garantindo recomendações imparciais e alinhadas exclusivamente aos
                  seus interesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">O que meus clientes dizem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram suas finanças
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <StarRating rating={5} />
                  <h3 className="font-semibold mt-3">Carlos Silva</h3>
                  <p className="text-sm text-muted-foreground">Empresário</p>
                </div>
                <p className="italic text-center">
                  "A consultoria financeira me ajudou a organizar as finanças da minha empresa e pessoais. Em 6 meses,
                  consegui quitar todas as minhas dívidas e comecei a investir."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <StarRating rating={5} />
                  <h3 className="font-semibold mt-3">Ana Oliveira</h3>
                  <p className="text-sm text-muted-foreground">Professora</p>
                </div>
                <p className="italic text-center">
                  "A planilha financeira mudou minha vida! Finalmente consegui visualizar para onde ia meu dinheiro e
                  criar um plano para realizar o sonho da casa própria."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <StarRating rating={5} />
                  <h3 className="font-semibold mt-3">Marcos Santos</h3>
                  <p className="text-sm text-muted-foreground">Engenheiro</p>
                </div>
                <p className="italic text-center">
                  "Os cursos online me deram conhecimento para começar a investir com segurança. Hoje tenho uma carteira
                  diversificada e estou no caminho da independência financeira."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Comece sua jornada financeira hoje</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dê o primeiro passo para transformar sua relação com o dinheiro e conquistar seus objetivos financeiros.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/planilha">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Comprar Planilha Financeira
              </Button>
            </Link>
            <Link href="/consultoria">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-primary"
              >
                Agendar Consultoria
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Artigos Recentes</h2>
            <Link href="/blog">
              <Button variant="ghost">Ver todos</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Como começar a investir com pouco dinheiro</CardTitle>
                <CardDescription>12 de Maio, 2023</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3">
                  Descubra estratégias para iniciar seus investimentos mesmo com poucos recursos e construir um
                  patrimônio sólido ao longo do tempo.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/como-comecar-a-investir">
                  <Button variant="ghost">Ler mais</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>5 hábitos para economizar dinheiro todos os meses</CardTitle>
                <CardDescription>28 de Abril, 2023</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3">
                  Conheça práticas simples que podem ser incorporadas ao seu dia a dia para reduzir gastos e aumentar
                  sua capacidade de poupança.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/habitos-para-economizar">
                  <Button variant="ghost">Ler mais</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Planejamento financeiro para diferentes fases da vida</CardTitle>
                <CardDescription>15 de Abril, 2023</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3">
                  Cada fase da vida exige estratégias financeiras específicas. Aprenda como adaptar seu planejamento de
                  acordo com seu momento atual.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/planejamento-por-fase-da-vida">
                  <Button variant="ghost">Ler mais</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
