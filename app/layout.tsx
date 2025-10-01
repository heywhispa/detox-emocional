import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Detox Emocional 2.0 | Eu Sou a Mudança",
  description:
    "Transforme sua vida em 21 dias com o Detox Emocional 2.0. Liberte-se de padrões emocionais limitantes e descubra seu verdadeiro potencial.",
  metadataBase: new URL("https://www.eusouamudanca.com"),
  openGraph: {
    title: "Detox Emocional 2.0 | Eu Sou a Mudança",
    description:
      "Transforme sua vida em 21 dias com o Detox Emocional 2.0. Liberte-se de padrões emocionais limitantes e descubra seu verdadeiro potencial.",
    url: "https://www.eusouamudanca.com/detox-emocional",
    siteName: "Eu Sou a Mudança",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detox Emocional 2.0 | Eu Sou a Mudança",
    description:
      "Transforme sua vida em 21 dias com o Detox Emocional 2.0. Liberte-se de padrões emocionais limitantes e descubra seu verdadeiro potencial.",
  },
  icons: {
    icon: "/favicon.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
