import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Download, FileSpreadsheet, ShieldCheck } from "lucide-react"

export default function PlanilhaPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">Planilha Financeira Completa</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Organize suas finanças, controle seus gastos e planeje seu futuro financeiro com nossa planilha exclusiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#comprar">
                <Button size="lg" className="w-full sm:w-auto">
                  Comprar Agora
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Planilha Financeira"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Recursos da Planilha</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <FileSpreadsheet className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Controle de Gastos</CardTitle>
              <CardDescription>Monitore todas as suas despesas</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Categorize e acompanhe todos os seus gastos mensais. Visualize relatórios detalhados e identifique onde
                seu dinheiro está sendo gasto.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Planejamento de Orçamento</CardTitle>
              <CardDescription>Defina metas e limites de gastos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Crie orçamentos personalizados para cada categoria de despesa e receba alertas quando estiver próximo de
                atingir seus limites.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Download className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Acompanhamento de Investimentos</CardTitle>
              <CardDescription>Gerencie sua carteira de investimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Registre todos os seus investimentos, acompanhe o desempenho e visualize a distribuição de seus ativos
                em gráficos intuitivos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mb-16" id="demonstracao">
        <h2 className="text-3xl font-bold mb-8 text-center">Como a Planilha Funciona</h2>
        <Tabs defaultValue="visao-geral" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
            <TabsTrigger value="controle-gastos">Controle de Gastos</TabsTrigger>
            <TabsTrigger value="investimentos">Investimentos</TabsTrigger>
          </TabsList>
          <TabsContent value="visao-geral" className="mt-6">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Dashboard Principal</h3>
                <p className="mb-4">
                  O dashboard principal oferece uma visão completa da sua situação financeira atual, com gráficos e
                  indicadores que mostram:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Balanço mensal de receitas e despesas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Evolução do patrimônio ao longo do tempo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Distribuição de gastos por categoria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Metas financeiras e progresso</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="controle-gastos" className="mt-6">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Controle Detalhado de Gastos</h3>
                <p className="mb-4">
                  Registre e categorize todas as suas despesas de forma simples e rápida. A planilha oferece:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Categorização automática de despesas recorrentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Comparativo de gastos mês a mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Alertas de gastos acima do orçamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Relatórios personalizados por período</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="investimentos" className="mt-6">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Gestão de Investimentos</h3>
                <p className="mb-4">
                  Acompanhe todos os seus investimentos em um só lugar, com recursos avançados como:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Registro de aportes e resgates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cálculo de rentabilidade por ativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Distribuição da carteira por classe de ativos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Projeções de crescimento do patrimônio</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Pricing Section */}
      <section className="mb-16" id="comprar">
        <h2 className="text-3xl font-bold mb-8 text-center">Invista no seu Futuro Financeiro</h2>
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Planilha Financeira Completa</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">R$ 19,90</span>
                <span className="text-muted-foreground"> / acesso vitalício</span>
              </div>
              <CardDescription>Pagamento único, sem mensalidades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Acesso imediato após a compra</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Atualizações gratuitas por 1 ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suporte por email por 30 dias</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vídeos tutoriais de uso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Compatível com Excel e Google Sheets</span>
                </li>
              </ul>
              <Button className="w-full mt-6" size="lg">
                Comprar Agora
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Pagamento seguro via PIX, cartão de crédito ou boleto
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
            <CardContent className="pt-6">
              <p className="italic mb-4">
                "Depois de usar várias planilhas financeiras, finalmente encontrei uma que atende todas as minhas
                necessidades. Consegui organizar minhas finanças e já economizei mais de R$ 500 por mês identificando
                gastos desnecessários."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">RP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ricardo Pereira</h4>
                  <p className="text-sm text-muted-foreground">Engenheiro de Software</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 dark:bg-slate-900 border-0 shadow-md">
            <CardContent className="pt-6">
              <p className="italic mb-4">
                "A planilha me ajudou a ter uma visão clara dos meus investimentos. O módulo de projeção financeira é
                incrível e me permitiu traçar um plano realista para minha aposentadoria."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Carla Mendes</h4>
                  <p className="text-sm text-muted-foreground">Administradora</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como recebo a planilha após a compra?</AccordionTrigger>
              <AccordionContent>
                Após a confirmação do pagamento, você receberá um email com o link para download da planilha. O acesso é
                imediato para pagamentos via cartão de crédito e PIX, e em até 1 dia útil para pagamentos via boleto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Preciso ter conhecimentos avançados em Excel?</AccordionTrigger>
              <AccordionContent>
                Não, a planilha foi desenvolvida para ser intuitiva e fácil de usar. Você só precisa inserir seus dados
                e a planilha fará todos os cálculos automaticamente. Além disso, disponibilizamos vídeos tutoriais
                detalhados para ajudar no uso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>A planilha funciona no Google Sheets?</AccordionTrigger>
              <AccordionContent>
                Sim, a planilha é compatível com o Google Sheets. Você receberá tanto a versão para Excel quanto
                instruções para importá-la para o Google Sheets, mantendo todas as funcionalidades.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Posso usar a planilha em mais de um computador?</AccordionTrigger>
              <AccordionContent>
                Sim, você pode usar a planilha em quantos dispositivos quiser, desde que seja para uso pessoal. O acesso
                é vitalício e você pode fazer o download quantas vezes precisar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Como funciona a política de reembolso?</AccordionTrigger>
              <AccordionContent>
                Oferecemos garantia de satisfação de 7 dias. Se você não ficar satisfeito com a planilha, basta enviar
                um email para suporte@anacortes.com.br solicitando o reembolso, sem necessidade de justificativa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Comece a transformar suas finanças hoje</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Invista em você mesmo e dê o primeiro passo para conquistar sua liberdade financeira.
        </p>
        <Link href="#comprar">
          <Button size="lg" variant="secondary">
            Comprar Planilha Financeira
          </Button>
        </Link>
      </section>
    </div>
  )
}
