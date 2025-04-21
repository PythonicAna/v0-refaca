import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { LinkedInButton, WhatsAppButton } from "@/components/social-buttons"

export default function ContatoPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Entre em Contato</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Estou à disposição para ajudar você a conquistar seus objetivos financeiros. Entre em contato para tirar
            dúvidas ou agendar uma consultoria.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-muted-foreground">(21) 98840-1348</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Segunda a sexta: 9h às 18h
                    <br />
                    Sábados: 9h às 12h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">contato@anacortes.com.br</p>
                  <p className="text-sm text-muted-foreground mt-1">Respondo em até 24 horas úteis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Localização</h3>
                  <p className="text-muted-foreground">Rio de Janeiro, RJ</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Atendimento online para todo o Brasil
                    <br />
                    Atendimento presencial mediante agendamento
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-lg">Redes Sociais</h3>
              <div className="flex gap-4">
                <WhatsAppButton />
                <LinkedInButton />
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome completo
                      </label>
                      <Input id="name" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input id="subject" placeholder="Assunto da mensagem" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem aqui..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira algumas das perguntas mais comuns sobre meus serviços.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Como funciona a consultoria financeira?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A consultoria financeira é um serviço personalizado onde analiso sua situação atual, objetivos e
                necessidades para criar um plano financeiro sob medida. O processo inclui uma sessão inicial de
                diagnóstico, seguida pela elaboração do plano e sessões de acompanhamento.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Qual o valor da planilha financeira?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A planilha financeira completa tem o valor de R$ 97,00, com pagamento único e acesso vitalício. Ela
                inclui módulos de controle de gastos, orçamento, investimentos e planejamento de metas financeiras.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Você atende apenas no Rio de Janeiro?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Não, realizo atendimentos online para clientes de todo o Brasil. Para moradores do Rio de Janeiro,
                também ofereço a opção de consultoria presencial mediante agendamento prévio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Como posso agendar uma consultoria?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Você pode agendar uma consultoria através da página de{" "}
                <Link href="/consultoria" className="text-primary hover:underline">
                  Consultoria
                </Link>
                , pelo WhatsApp ou preenchendo o formulário de contato nesta página. Após o contato inicial, enviarei as
                opções de horários disponíveis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar suas finanças?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">Dê o primeiro passo para conquistar sua liberdade financeira.</p>
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
      </section>
    </div>
  )
}
