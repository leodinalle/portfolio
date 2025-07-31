"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Code, Database, Palette } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "ArtFer - Loja do Vavá",
    description:
      "Site institucional e e-commerce para loja de móveis com mais de 20 anos de tradição. Design elegante focado na experiência do usuário e conversão de vendas.",
    image: "/images/projects/projetoartfer.JPG",
    demoUrl: "https://artfermg.com.br/",
    technologies: ["WordPress", "PHP", "MySQL", "Hostinger"],
    category: "E-commerce",
    features: ["Design Responsivo", "SEO Otimizado", "Catálogo de Produtos", "Formulários de Contato"],
  },
  {
    id: 2,
    title: "Minas Rústico",
    description:
      "Sistema integrado de e-commerce com gestão automatizada. Conectado via APIs ao sistema Bling para sincronização de estoque, pedidos e relatórios em tempo real.",
    image: "/images/projects/minasrustico.JPG",
    demoUrl: "https://www.minasrustico.com.br/",
    technologies: ["APIs REST", "Bling ERP", "JavaScript", "PHP"],
    category: "Sistema Integrado",
    features: ["Integração Bling", "Sync Automático", "Gestão de Estoque", "Relatórios Dinâmicos"],
  },
  {
    id: 3,
    title: "Devlyn - Soluções Digitais",
    description:
      "Minha empresa de desenvolvimento web e marketing digital. Especializada em landing pages de alta conversão, automações e tráfego pago para pequenas empresas.",
    image: "/images/projects/devlyn.jpeg",
    demoUrl: "https://www.instagram.com/imdevlyn_/",
    technologies: ["React", "Next.js", "Node.js", "Firebase"],
    category: "Empresa Própria",
    features: ["Landing Pages", "Automações", "Tráfego Pago", "Consultoria Digital"],
  },
   {
    id: 4,
    title: "Meu Portfolio Animado",
    description:
      "Uma apresentação interativa onde um personagem caminha pela tela conforme o usuário faz scroll, apresentando minhas habilidades de forma dinâmica.",
    image: "/images/projects/portfolioanimado.jpg",
    demoUrl: "https://portfolio-animado-pied.vercel.app/",
    technologies: ["Vue.js", "Vite", "JavaScript ES6+", "CSS3"],
    category: "Portfolio Interativo",
    features: [" Sistema de detecção de scroll", "Efeito parallax ", "Animações sincronizadas" , "Design Responsivo"],
  },
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "E-commerce":
        return <Palette className="w-4 h-4" />
      case "Sistema Integrado":
        return <Database className="w-4 h-4" />
      case "Empresa Própria":
        return <Code className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "E-commerce":
        return "from-blue-500 to-cyan-500"
      case "Sistema Integrado":
        return "from-purple-500 to-pink-500"
      case "Empresa Própria":
        return "from-green-500 to-emerald-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Projetos
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Trabalhos Realizados</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projetos reais desenvolvidos para clientes, desde e-commerce até sistemas integrados com APIs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white dark:bg-gray-900">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

                  {/* Overlay com informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} mb-2`}
                      >
                        {project.category}
                      </div>
                      <div className="text-sm opacity-90">Projeto {String(project.id).padStart(2, "0")}</div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Principais Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full w-12 h-12 border-2 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full w-12 h-12 border-2 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Entregues</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clientes Satisfeitos</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologias Dominadas</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
