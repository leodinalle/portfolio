import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leonardo Dinale - Portfólio | Desenvolvedor Frontend",
  description:
    "Desenvolvedor Frontend especializado em React, Next.js e TypeScript. Criando experiências digitais modernas e funcionais.",
  keywords: "desenvolvedor frontend, react, nextjs, typescript, portfolio, ui/ux",
  authors: [{ name: "João Silva" }],
  openGraph: {
    title: "Leonardo Dinale - Desenvolvedor Full Stack",
    description: "Portfólio profissional de Leonardo Dinale, desenvolvedor full stack",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
