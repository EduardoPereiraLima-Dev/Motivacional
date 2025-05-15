"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  how_you_feel_currently: z.string().min(5, { message: "Por favor, descreva como você se sente" }),
  main_challenges: z.string().min(5, { message: "Por favor, descreva seus desafios" }),
  goals_dreams: z.string().min(5, { message: "Por favor, descreva seus objetivos" }),
  how_you_handle_emotions: z.string().min(5, { message: "Por favor, descreva como lida com emoções" }),
  support_sources: z.string().min(5, { message: "Por favor, descreva suas fontes de apoio" }),
  personal_care: z.string().min(5, { message: "Por favor, descreva seus cuidados pessoais" }),
})

type FormValues = z.infer<typeof formSchema>

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<{ nome: string; mensagem: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      how_you_feel_currently: "",
      main_challenges: "",
      goals_dreams: "",
      how_you_handle_emotions: "",
      support_sources: "",
      personal_care: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/motivational-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        throw new Error("Falha ao enviar o formulário")
      }

      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro ao processar sua solicitação")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedGradientText className="text-5xl font-bold mb-4">motivacional.ia</AnimatedGradientText>
          <p className="text-gray-600 text-lg">Receba mensagens motivacionais personalizadas baseadas em sua jornada</p>
        </div>

        {response ? (
          <Card className="w-full mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Sua Mensagem Motivacional</CardTitle>
              <CardDescription>Especialmente para você, {response.nome}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="whitespace-pre-line text-lg">{response.mensagem}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setResponse(null)} className="w-full">
                Criar Nova Mensagem
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-full shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Conte-nos Sobre Você</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo para receber uma mensagem motivacional personalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="how_you_feel_currently"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Como você se sente atualmente?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva como você está se sentindo..."
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="main_challenges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Principais desafios</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Quais são seus principais desafios?"
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goals_dreams"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objetivos e sonhos</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Quais são seus objetivos e sonhos?"
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="how_you_handle_emotions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Como você lida com emoções?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Como você costuma lidar com suas emoções?"
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="support_sources"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fontes de apoio</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Quais são suas fontes de apoio?" className="min-h-[80px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="personal_care"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cuidados pessoais</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Como você cuida de si mesmo(a)?" className="min-h-[80px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && <div className="bg-red-50 text-red-600 p-4 rounded-md border border-red-200">{error}</div>}

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      "Receber Mensagem Motivacional"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
