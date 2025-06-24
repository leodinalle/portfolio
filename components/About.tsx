import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Code, TrendingUp } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    icon: Code,
    number: "21",
    label: "Anos de\nIdade",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    number: "50+",
    label: "Projetos\nEntregues",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    number: "100+",
    label: "Clientes\nAtendidos",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    number: "∞",
    label: "Metas\nAlcançadas",
    color: "from-orange-500 to-red-500",
  },
]

const skills = [
  "Comunicação Persuasiva",
  "Liderança Estratégica",
  "Resiliência",
  "Autodisciplina",
  "Visão Empreendedora",
  "Inteligência Emocional",
  "Aprendizado Contínuo",
  "Foco em Resultados",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Sobre Mim
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Desenvolvedor • Empreendedor • Growth Hacker
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Sou Leonardo Dinale, um desenvolvedor full stack com espírito empreendedor. Desde cedo me destaco pela
            facilidade em aprender sozinho, criar projetos do zero e transformar ideias em soluções reais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-6 opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl">
                <Image
                  src="/images/about.jpg"
                  alt="Leonardo Dinale - Desenvolvedor Full Stack"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Badge Devlyn */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                CEO Devlyn
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Transformando Ideias em Realidade Digital
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Tenho uma base sólida em programação com foco em desenvolvimento web e mobile. Além disso, atuo com
                tráfego pago, automações para empresas e criação de sistemas personalizados pela minha empresa, a{" "}
                <strong>Devlyn</strong>.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Desenvolvi uma combinação rara de habilidades técnicas e comerciais. Já vendi produtos físicos e
                digitais, ofereci mentorias e criei páginas de alta conversão. Entendo não só de código, mas também de
                pessoas, negócios e estratégia.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>Minha meta:</strong> Ser irreconhecível a cada 90 dias — mais forte, mais inteligente e mais
                preparado. Quero marcar a diferença através da tecnologia, da arte e da atitude.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 dark:text-white italic mb-4">
              "Movido por grandes metas, busco evoluir constantemente como profissional e pessoa. A tecnologia é minha
              ferramenta, mas o impacto positivo é meu objetivo."
            </blockquote>
            <cite className="text-gray-600 dark:text-gray-400 font-semibold">— Leonardo Dinale</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
