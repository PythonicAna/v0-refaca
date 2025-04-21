import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Calendar, CheckCircle, Clock, Users } from "lucide-react"

export default function ConsultoriaPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">Consultoria Financeira Personalizada</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Receba orientação financeira adaptada às suas necessidades e objetivos específicos, com um plano de ação
              claro e prático.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#agendar">
                <Button size="lg" className="w-full sm:w-auto">
                  Agendar Consultoria
                </Button>
              </Link>
              <Link href="#planos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Planos
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/profile.jpg"
              alt="Ana Côrtes - Consultoria Financeira"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <CardTitle>Diagnóstico Inicial</CardTitle>
              <CardDescription>Análise completa da sua situação financeira atual</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Realizamos uma avaliação detalhada das suas finanças, incluindo receitas, despesas, dívidas,
                investimentos e objetivos de curto, médio e longo prazo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <CardTitle>Plano Personalizado</CardTitle>
              <CardDescription>Estratégias específicas para seus objetivos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Desenvolvemos um plano financeiro detalhado com estratégias práticas para organização financeira,
                redução de dívidas, otimização de investimentos e proteção patrimonial.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <CardTitle>Acompanhamento</CardTitle>
              <CardDescription>Suporte contínuo para implementação</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Oferecemos sessões de acompanhamento para ajudar na implementação do plano, ajustar estratégias quando
                necessário e responder a dúvidas que surgirem durante o processo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16" id="planos">
        <h2 className="text-3xl font-bold mb-8 text-center">Planos de Consultoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Consultoria Pontual</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">R$ 397</span>
                <span className="text-muted-foreground"> / sessão</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1 sessão de consultoria (2 horas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Análise da situação financeira atual</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Recomendações personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suporte por email por 15 dias</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="#agendar" className="w-full">
                <Button variant="outline" className="w-full">
                  Selecionar
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-2 border-primary relative">
            <div className="absolute top-0 right-0 left-0 bg-primary text-white text-center py-1 text-sm font-medium">
              Mais Popular
            </div>
            <CardHeader className="pt-8">
              <CardTitle>Plano Trimestral</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">R$ 997</span>
                <span className="text-muted-foreground"> / trimestre</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sessão inicial de 2 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>2 sessões de acompanhamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Plano financeiro detalhado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suporte por email ilimitado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Planilha financeira básica inclusa</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="#agendar" className="w-full">
                <Button className="w-full">Selecionar</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plano Anual</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">R$ 2.997</span>
                <span className="text-muted-foreground"> / ano</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sessão inicial de 2 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sessões bimestrais de acompanhamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Plano financeiro completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suporte prioritário por WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Planilha financeira completa inclusa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Revisão anual de investimentos</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="#agendar" className="w-full">
                <Button variant="outline" className="w-full">
                  Selecionar
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Booking Section */}
      <section className="mb-16" id="agendar">
        <h2 className="text-3xl font-bold mb-8 text-center">Agende sua Consultoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Preencha o formulário para agendar sua consultoria</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome completo
                      </label>
                      <input
                        id="name"
                        className="w-full p-2 border rounded-md"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefone
                      </label>
                      <input
                        id="phone"
                        className="w-full p-2 border rounded-md"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="plan" className="text-sm font-medium">
                        Plano de interesse
                      </label>
                      <select id="plan" className="w-full p-2 border rounded-md" required>
                        <option value="">Selecione um plano</option>
                        <option value="pontual">Consultoria Pontual</option>
                        <option value="trimestral">Plano Trimestral</option>
                        <option value="anual">Plano Anual</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem (opcional)
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 border rounded-md min-h-[100px]"
                        placeholder="Conte-me um pouco sobre seus objetivos financeiros"
                      ></textarea>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Por que agendar uma consultoria?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Atendimento Personalizado</h4>
                  <p className="text-muted-foreground">
                    Cada consultoria é adaptada às suas necessidades específicas e objetivos financeiros.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Economia de Tempo</h4>
                  <p className="text-muted-foreground">
                    Evite anos de tentativa e erro com orientação profissional baseada em experiência comprovada.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Flexibilidade</h4>
                  <p className="text-muted-foreground">
                    Consultorias online ou presenciais, em horários que se adequem à sua agenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Horários disponíveis:</h4>
              <p className="text-muted-foreground">
                Segunda a sexta: 9h às 18h
                <br />
                Sábados: 9h às 12h (mediante agendamento prévio)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar suas finanças?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Agende sua consultoria hoje e dê o primeiro passo para conquistar sua liberdade financeira.
        </p>
        <Link href="#agendar">
          <Button size="lg" variant="secondary">
            Agendar Consultoria
          </Button>
        </Link>
      </section>
    </div>
  )
}
