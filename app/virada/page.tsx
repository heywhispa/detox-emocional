import { Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import ViradaHero from "@/components/virada-hero"
import ViradaIdentification from "@/components/virada-identification"
import ViradaTransformation from "@/components/virada-transformation"
import ViradaAbout from "@/components/virada-about"
import ViradaFooter from "@/components/virada-footer"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "A Virada | Evento Online e Gratuito",
  description:
    "Um encontro profundo para encerrar tudo o que 2025 deixou em você e iniciar 2026 com a clareza, a leveza e a identidade que sua alma tem pedido.",
}

export default function ViradaPage() {
  return (
    <main className={`${playfair.variable}`}>
      <ViradaHero />
      <ViradaIdentification />
      <ViradaTransformation />
      <ViradaAbout />
      <ViradaFooter />
    </main>
  )
}
