"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { ThemeProvider } from "next-themes"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leonardo Dinale
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Carregando portfólio...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Leonardo Dinale
                </h3>
                <p className="text-gray-400">Desenvolvedor Full Stack & Empreendedor</p>
                <p className="text-gray-400 text-sm mt-2">CEO da Devlyn</p>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-semibold mb-4">Serviços</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Desenvolvimento Web
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Apps Mobile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Tráfego Pago
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Mentoria
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <div className="space-y-2 text-gray-400">
                  <p>leodinalle@gmail.com</p>
                  <p>(32) 99991-7069</p>
                  <p className="text-sm">Resposta rápida via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2024 Leonardo Dinale. Feito com 💜 e muito ☕</p>
              <p className="text-gray-500 text-sm mt-2">
                "Ser irreconhecível a cada 90 dias — mais forte, mais inteligente e mais preparado."
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
