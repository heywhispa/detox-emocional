"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RedirectNotification } from "./redirect-notification"

export default function ViradaTransformation() {
  const [showNotification, setShowNotification] = useState(false)
  const redirectUrl =
    "https://api.pluglead.com/group-manager/group-manager/d707caa2-e5fa-4d0a-902a-e5477c8babe1/redirect/be4fa6b0-f428-4c41-b131-f4b0bc127a0e"

  const handleRedirect = () => {
    setShowNotification(true)
    window.open(redirectUrl, "_blank")
  }

  const transformationCards = [
    {
      icon: "✨",
      title: "Encerrar emocionalmente 2025",
      description: "Liberando a carga invisível que você carregou sozinha.",
    },
    {
      icon: "🔍",
      title: "Acessar a raiz dos seus padrões",
      description: "Entender por que você repete ciclos que não deseja mais.",
    },
    {
      icon: "💫",
      title: "Liberar dores silenciosas",
      description: "Criar espaço interno para leveza e clareza.",
    },
    {
      icon: "🌟",
      title: "Reprogramar sua identidade",
      description: "Instalar uma nova forma de sentir, pensar e agir.",
    },
    {
      icon: "⚡",
      title: "Elevar sua frequência espiritual",
      description: "Entrar em sintonia com a sua próxima versão.",
    },
    {
      icon: "⭐",
      title: "Instalar sua Identidade Futura",
      description: "Para viver 2026 com coragem, propósito e abundância.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-virada-cream via-virada-light-beige to-virada-warm-beige px-4 py-20 sm:px-6 md:px-8">
      {/* Mystical Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large center glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-virada-gold/20 via-virada-border-light/10 to-transparent blur-3xl" />

        {/* Floating orbs */}
        <div
          className="absolute left-10 top-40 h-48 w-48 rounded-full bg-gradient-to-br from-virada-gold/20 to-transparent blur-2xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute right-20 bottom-60 h-56 w-56 rounded-full bg-gradient-to-tl from-virada-gold-hover/15 to-transparent blur-2xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />

        {/* Sacred geometry patterns */}
        <svg className="absolute left-20 bottom-20 h-32 w-32 opacity-[0.05]" viewBox="0 0 100 100">
          <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="var(--color-virada-gold)" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="var(--color-virada-gold)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <h2
          className="mb-4 text-center font-serif text-3xl font-semibold text-virada-text-dark sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          A mudança real não está na virada do ano. Ela acontece dentro de você.
        </h2>

        {/* Subtitle */}
        <p className="mb-12 text-center text-xl text-virada-text-dark">Na VIRADA, você será guiada a:</p>

        {/* Cards Grid with enhanced styling */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {transformationCards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-virada-border-light bg-gradient-to-br from-background via-virada-warm-beige to-virada-bg-card p-6 shadow-md transition-all hover:shadow-xl hover:border-virada-gold sm:p-8"
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-virada-gold/0 to-virada-gold/0 transition-all group-hover:from-virada-gold/5 group-hover:to-transparent" />

              <div className="relative">
                <div className="mb-4 text-4xl filter drop-shadow-sm">{card.icon}</div>
                <h3
                  className="mb-3 font-serif text-xl font-semibold text-virada-text-dark"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {card.title}
                </h3>
                <p className="leading-relaxed text-virada-text-dark">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Quote with mystical styling */}
        <div className="relative mb-12 space-y-2 text-center">
          {/* Decorative lines */}
          <div className="absolute left-1/2 top-1/2 h-px w-32 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-virada-gold/30 to-transparent" />

          <p
            className="font-serif text-2xl italic text-virada-text-dark sm:text-3xl drop-shadow-sm"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A VIRADA não é uma live.
          </p>
          <p
            className="font-serif text-2xl italic text-virada-text-dark sm:text-3xl drop-shadow-sm"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            É uma passagem.
          </p>
          <p
            className="font-serif text-2xl italic text-virada-text-dark sm:text-3xl drop-shadow-sm"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Um renascimento.
          </p>
        </div>

        {/* CTA Button with enhanced glow */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md px-4 sm:px-0">
            <div className="absolute inset-0 animate-pulse blur-2xl bg-virada-gold/40 rounded-xl" />
            <Button
              onClick={handleRedirect}
              className="relative h-auto w-full rounded-xl bg-gradient-to-r from-virada-gold to-virada-gold-hover px-6 py-4 text-base sm:text-lg font-medium text-virada-text-dark shadow-lg transition-all hover:shadow-xl hover:brightness-110 sm:px-12"
            >
              Sim. Eu estou pronta para A VIRADA.
            </Button>
          </div>
        </div>
      </div>

      {showNotification && <RedirectNotification url={redirectUrl} onClose={() => setShowNotification(false)} />}
    </section>
  )
}
