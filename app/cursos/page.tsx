import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { BadgeCheck, BookOpen, Clock, Star } from "lucide-react"

export default function CursosPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Cursos de Educação Financeira</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Aprenda a gerenciar seu dinheiro, investir e construir um futuro financeiro sólido com nossos cursos online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#cursos">
              <Button size="lg" className="w-full sm:w-auto">
                Ver Cursos
              </Button>
            </Link>
            <Link href="#pacotes">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Pacotes Especiais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="mb-16" id="cursos">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="mb-4 h-48 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary/40" />
              </div>
              <CardTitle>Finanças Pessoais do Zero</CardTitle>
              <CardDescription>Para iniciantes em educação financeira</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-muted-foreground ml-2">(127 avaliações)</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">8 horas de conteúdo</span>
              </div>
              <p className="mb-4">
                Aprenda os fundamentos para organizar suas finanças, criar um orçamento eficiente e começar a poupar.
                Ideal para quem está dando os primeiros passos na educação financeira.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Organização financeira básica</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Controle de gastos</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Planejamento de metas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4 border-t">
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">R$ 197</span>
                    <span className="text-muted-foreground line-through ml-2">R$ 297</span>
                  </div>
                  <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded">33% OFF</span>
                </div>
                <Button className="w-full">Comprar Curso</Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-2 border-primary">
            <CardHeader>
              <div className="mb-4 h-48 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary/40" />
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                MAIS VENDIDO
              </div>
              <CardTitle>Investimentos para Iniciantes</CardTitle>
              <CardDescription>Aprenda a fazer seu dinheiro trabalhar para você</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-muted-foreground ml-2">(215 avaliações)</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">12 horas de conteúdo</span>
              </div>
              <p className="mb-4">
                Descubra os principais tipos de investimentos disponíveis no mercado e aprenda a montar uma carteira
                diversificada de acordo com seu perfil e objetivos.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Renda fixa e variável</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Análise de riscos</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Diversificação de carteira</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4 border-t">
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">R$ 297</span>
                    <span className="text-muted-foreground line-through ml-2">R$ 497</span>
                  </div>
                  <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded">40% OFF</span>
                </div>
                <Button className="w-full">Comprar Curso</Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="mb-4 h-48 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary/40" />
              </div>
              <CardTitle>Independência Financeira</CardTitle>
              <CardDescription>Estratégias avançadas para liberdade financeira</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-muted-foreground ml-2">(98 avaliações)</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">15 horas de conteúdo</span>
              </div>
              <p className="mb-4">
                Curso avançado para quem já possui conhecimentos básicos e deseja acelerar o caminho para a
                independência financeira com estratégias comprovadas.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Investimentos avançados</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Planejamento de aposentadoria</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Estratégias fiscais</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4 border-t">
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">R$ 397</span>
                    <span className="text-muted-foreground line-through ml-2">R$ 597</span>
                  </div>
                  <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded">33% OFF</span>
                </div>
                <Button className="w-full">Comprar Curso</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Packages Section */}
      <section className="mb-16" id="pacotes">
        <h2 className="text-3xl font-bold mb-8 text-center">Pacotes Especiais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Pacote Iniciante</CardTitle>
              <CardDescription>Ideal para quem está começando</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Combine os cursos de Finanças Pessoais do Zero e Investimentos para Iniciantes com um desconto especial.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Finanças Pessoais do Zero (R$ 197)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Investimentos para Iniciantes (R$ 297)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Bônus: Planilha de Orçamento Básico</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Acesso vitalício a todos os materiais</span>
                </li>
              </ul>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-3xl font-bold">R$ 397</span>
                  <span className="text-muted-foreground line-through ml-2">R$ 494</span>
                </div>
                <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded">
                  Economize R$ 97
                </span>
              </div>
              <Button className="w-full">Comprar Pacote</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pacote Completo</CardTitle>
              <CardDescription>Todos os cursos com desconto máximo</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Acesso a todos os nossos cursos com o maior desconto disponível, além de bônus exclusivos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Finanças Pessoais do Zero (R$ 197)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Investimentos para Iniciantes (R$ 297)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Independência Financeira (R$ 397)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Bônus: Planilha Financeira Completa</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Bônus: 1 Sessão de Consultoria (30 min)</span>
                </li>
              </ul>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-3xl font-bold">R$ 697</span>
                  <span className="text-muted-foreground line-through ml-2">R$ 891</span>
                </div>
                <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded">
                  Economize R$ 194
                </span>
              </div>
              <Button className="w-full">Comprar Pacote</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">O que nossos alunos dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
            <CardContent className="pt-6">
              <p className="italic mb-4">
                "Os cursos são extremamente práticos e didáticos. Consegui organizar minhas finanças e comecei a
                investir com segurança após concluir o pacote iniciante."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold">João Mendes</h4>
                  <p className="text-sm text-muted-foreground">Estudante de Engenharia</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
            <CardContent className="pt-6">
              <p className="italic mb-4">
                "O curso de Investimentos para Iniciantes é sensacional! Explicações claras e objetivas que me ajudaram
                a entender conceitos que antes pareciam complexos."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">LS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Luiza Santos</h4>
                  <p className="text-sm text-muted-foreground">Médica</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
            <CardContent className="pt-6">
              <p className="italic mb-4">
                "Comprei o Pacote Completo e foi o melhor investimento que fiz. Em menos de um ano, o retorno que obtive
                aplicando os conhecimentos pagou o curso várias vezes."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">PL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Pedro Lima</h4>
                  <p className="text-sm text-muted-foreground">Empresário</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Invista em seu conhecimento financeiro</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          O conhecimento é o melhor investimento que você pode fazer. Comece hoje sua jornada para a liberdade
          financeira.
        </p>
        <Link href="#cursos">
          <Button size="lg" variant="secondary">
            Ver Todos os Cursos
          </Button>
        </Link>
      </section>
    </div>
  )
}
