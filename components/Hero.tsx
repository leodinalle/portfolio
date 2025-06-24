"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Send, Mouse, ArrowDown, Download, Music } from "lucide-react"
import Image from "next/image"

const roles = [
  "Desenvolvedor Full Stack",
  "Empreendedor Digital",
  "Especialista em Tráfego Pago",
  "Mentor de Vendas Online",
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < roles[roleIndex].length) {
        setCurrentRole(roles[roleIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(roles[roleIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === roles[roleIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-medium">
                  👋 Olá, eu sou
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Leonardo{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dinale
                </span>
              </h1>

              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  {currentRole}
                  <span className="animate-pulse text-blue-600">|</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Desenvolvedor full stack com espírito empreendedor. Transformo ideias em soluções reais através da
                tecnologia, vendas e marketing digital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                Vamos Conversar
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-3 rounded-full transition-all duration-300"
              >
                <a href="/cv_leo.pdf" download="Leonardo-Dinale-CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/leonardo-alves-melo-dinale-254a23281/",
                  color: "hover:text-blue-600",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/leodinalle",
                  color: "hover:text-gray-900 dark:hover:text-white",
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/leodinalle/",
                  color: "hover:text-pink-600",
                  label: "Instagram",
                },
                {
                  icon: Music,
                  href: "https://www.youtube.com/watch?v=eYO1-gGWJyo&list=RDeYO1-gGWJyo&start_radio=1",
                  color: "hover:text-green-600",
                  label: "Música",
                },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping opacity-10 scale-125"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
                <Image
                  src="/images/hero_ola.jpg"
                  alt="Leonardo Dinale - Desenvolvedor Full Stack"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-30 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce shadow-lg">
                CEO Devlyn
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-bounce delay-300 shadow-lg">
                21 Anos
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex flex-col items-center mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <Mouse className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm mb-2">Conheça minha história</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
