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
    title: "João Silva - Desenvolvedor Frontend",
    description: "Portfólio profissional de João Silva, desenvolvedor especializado em React e Next.js",
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
