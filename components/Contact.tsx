"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, Briefcase } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "leodinalle@gmail.com",
    href: "mailto:leodinalle@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "(32) 99991-7069",
    href: "https://wa.me/5532999917069",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Briefcase,
    title: "Devlyn",
    value: "Minha Empresa",
    href: "https://www.instagram.com/imdevlyn_/",
    color: "from-purple-500 to-pink-500",
  },
]

const services = [
  "Desenvolvimento Web & Mobile",
  "Landing Pages de Alta Conversão",
  "Tráfego Pago (Facebook/Google Ads)",
  "Automações e Integrações",
  "Mentoria em Vendas Online",
  "Sistemas Personalizados",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá Leonardo! 

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Serviço de Interesse:* ${formData.service || "Não especificado"}

*Mensagem:*
${formData.message}

Vim através do seu portfólio e gostaria de conversar sobre uma oportunidade!`

    const whatsappUrl = `https://wa.me/5532999917069?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    setFormData({ name: "", email: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Contato
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Vamos Trabalhar Juntos?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos conversar sobre seu projeto!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-6">
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 group"
                        >
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Serviços Oferecidos</h4>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">💡 Dica Rápida</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Para projetos urgentes ou dúvidas rápidas, me chame diretamente no WhatsApp! Respondo mais rápido por
                lá. 🚀
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                      Nome *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-700 dark:text-gray-300">
                    Serviço de Interesse
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Conte-me sobre seu projeto, orçamento estimado e prazo desejado..."
                    className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ou me chame diretamente no{" "}
                  <a
                    href="https://wa.me/5532999917069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
