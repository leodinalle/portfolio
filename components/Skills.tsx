"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Code, Server, Smartphone, Database, Zap, TrendingUp } from "lucide-react"

const skillsData = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Interfaces modernas e responsivas",
    icon: Code,
    skills: [
      { name: "React.js", percentage: 95 },
      { name: "Next.js", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "Tailwind CSS", percentage: 95 },
      { name: "HTML/CSS", percentage: 98 },
      { name: "JavaScript", percentage: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "APIs robustas e escaláveis",
    icon: Server,
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 80 },
      { name: "Firebase", percentage: 90 },
      { name: "REST APIs", percentage: 85 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "Apps nativos multiplataforma",
    icon: Smartphone,
    skills: [
      { name: "Flutter", percentage: 85 },
      { name: "Dart", percentage: 80 },
      { name: "React Native", percentage: 75 },
    ],
  },
  {
    id: "database",
    title: "Database & Tools",
    subtitle: "Gerenciamento de dados",
    icon: Database,
    skills: [
      { name: "MySQL", percentage: 85 },
      { name: "Firestore", percentage: 90 },
      { name: "Git/GitHub", percentage: 95 },
      { name: "Figma", percentage: 80 },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    subtitle: "Tráfego pago e conversão",
    icon: TrendingUp,
    skills: [
      { name: "Facebook Ads", percentage: 90 },
      { name: "Google Ads", percentage: 85 },
      { name: "Landing Pages", percentage: 95 },
      { name: "Copywriting", percentage: 85 },
    ],
  },
  {
    id: "automation",
    title: "Automação & Integrações",
    subtitle: "Processos automatizados",
    icon: Zap,
    skills: [
      { name: "Zapier", percentage: 85 },
      { name: "APIs Integration", percentage: 90 },
      { name: "Chatbots", percentage: 80 },
      { name: "WordPress", percentage: 85 },
    ],
  },
]

export default function Skills() {
  const [openSkills, setOpenSkills] = useState<string[]>(["frontend", "marketing"])

  const toggleSkill = (skillId: string) => {
    setOpenSkills((prev) => (prev.includes(skillId) ? prev.filter((id) => id !== skillId) : [...prev, skillId]))
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Habilidades
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Tecnologias & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Combinação única de habilidades técnicas e comerciais para entregar soluções completas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillsData.map((category) => {
            const Icon = category.icon
            const isOpen = openSkills.includes(category.id)

            return (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleSkill(category.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{category.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 space-y-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Experiências */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Experiências & Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Devlyn - Microempresa",
                description: "Landing pages, automações, tráfego pago e sistemas personalizados",
                color: "from-purple-500 to-blue-500",
              },
              {
                title: "Desenvolvedor Freelancer",
                description: "Sites, sistemas internos e apps para pequenas empresas",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Mentorias em Vendas",
                description: "Ajudando iniciantes no Mercado Livre e canais digitais",
                color: "from-green-500 to-emerald-500",
              },
            ].map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className={`w-full h-2 bg-gradient-to-r ${exp.color} rounded-full mb-4`}></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
