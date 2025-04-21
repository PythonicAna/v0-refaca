import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Blog de Educação Financeira</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Dicas, estratégias e conhecimentos para ajudar você a conquistar sua liberdade financeira.
          </p>
          <div className="relative">
            <Input type="search" placeholder="Pesquisar artigos..." className="w-full max-w-lg mx-auto pl-10" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="mb-16">
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="investimentos">Investimentos</TabsTrigger>
            <TabsTrigger value="economia">Economia</TabsTrigger>
            <TabsTrigger value="planejamento">Planejamento</TabsTrigger>
            <TabsTrigger value="aposentadoria">Aposentadoria</TabsTrigger>
          </TabsList>
          <TabsContent value="todos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Como começar a investir com pouco dinheiro"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">Investimentos</span>
                    <span className="text-sm text-muted-foreground">12 de Maio, 2023</span>
                  </div>
                  <CardTitle className="mb-4">Como começar a investir com pouco dinheiro</CardTitle>
                  <p className="line-clamp-3">
                    Descubra estratégias para iniciar seus investimentos mesmo com poucos recursos e construir um
                    patrimônio sólido ao longo do tempo.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href="/blog/como-comecar-a-investir">
                    <Button variant="ghost">Ler mais</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="5 hábitos para economizar dinheiro todos os meses"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">Economia</span>
                    <span className="text-sm text-muted-foreground">28 de Abril, 2023</span>
                  </div>
                  <CardTitle className="mb-4">5 hábitos para economizar dinheiro todos os meses</CardTitle>
                  <p className="line-clamp-3">
                    Conheça práticas simples que podem ser incorporadas ao seu dia a dia para reduzir gastos e aumentar
                    sua capacidade de poupança.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href="/blog/habitos-para-economizar">
                    <Button variant="ghost">Ler mais</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Planejamento financeiro para diferentes fases da vida"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">Planejamento</span>
                    <span className="text-sm text-muted-foreground">15 de Abril, 2023</span>
                  </div>
                  <CardTitle className="mb-4">Planejamento financeiro para diferentes fases da vida</CardTitle>
                  <p className="line-clamp-3">
                    Cada fase da vida exige estratégias financeiras específicas. Aprenda como adaptar seu planejamento
                    de acordo com seu momento atual.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href="/blog/planejamento-por-fase-da-vida">
                    <Button variant="ghost">Ler mais</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="investimentos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Como começar a investir com pouco dinheiro"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">Investimentos</span>
                    <span className="text-sm text-muted-foreground">12 de Maio, 2023</span>
                  </div>
                  <CardTitle className="mb-4">Como começar a investir com pouco dinheiro</CardTitle>
                  <p className="line-clamp-3">
                    Descubra estratégias para iniciar seus investimentos mesmo com poucos recursos e construir um
                    patrimônio sólido ao longo do tempo.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href="/blog/como-comecar-a-investir">
                    <Button variant="ghost">Ler mais</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="economia" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="5 hábitos para economizar dinheiro todos os meses"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">Economia</span>
                    <span className="text-sm text-muted-foreground">28 de Abril, 2023</span>
                  </div>
                  <CardTitle className="mb-4">5 hábitos para economizar dinheiro todos os meses</CardTitle>
                  <p className="line-clamp-3">
                    Conheça práticas simples que podem ser incorporadas ao seu dia a dia para reduzir gastos e aumentar
                    sua capacidade de poupança.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href="/blog/habitos-para-economizar">
                    <Button variant="ghost">Ler mais</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="planejamento" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Planejamento financeiro para diferentes fases da vida"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">Planejamento</span>
                    <span className="text-sm text-muted-foreground">15 de Abril, 2023</span>
                  </div>
                  <CardTitle className="mb-4">Planejamento financeiro para diferentes fases da vida</CardTitle>
                  <p className="line-clamp-3">
                    Cada fase da vida exige estratégias financeiras específicas. Aprenda como adaptar seu planejamento
                    de acordo com seu momento atual.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href="/blog/planejamento-por-fase-da-vida">
                    <Button variant="ghost">Ler mais</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="aposentadoria" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum artigo encontrado nesta categoria.</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Newsletter Section */}
      <section className="mb-16">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Inscreva-se na nossa newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Receba dicas financeiras, novos artigos e conteúdos exclusivos diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Seu melhor email" className="flex-grow" />
              <Button>Inscrever-se</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Precisa de ajuda personalizada?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Agende uma consultoria financeira e receba orientação específica para suas necessidades.
        </p>
        <Link href="/consultoria">
          <Button size="lg" variant="secondary">
            Agendar Consultoria
          </Button>
        </Link>
      </section>
    </div>
  )
}
