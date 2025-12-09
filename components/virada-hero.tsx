"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { RedirectNotification } from "./redirect-notification"

export default function ViradaHero() {
  const [showNotification, setShowNotification] = useState(false)
  const redirectUrl =
    "https://api.pluglead.com/group-manager/group-manager/d707caa2-e5fa-4d0a-902a-e5477c8babe1/redirect/be4fa6b0-f428-4c41-b131-f4b0bc127a0e"

  const handleRedirect = () => {
    setShowNotification(true)
    window.open(redirectUrl, "_blank")
  }

  return (
    <section className="relative overflow-hidden px-4 pb-4 pt-12 sm:px-6 md:px-8">
      <div className="absolute inset-0">
        <Image
          src="/images/445.jpg"
          alt="Ethereal bokeh background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-virada-cream/40" />
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-virada-gold/30 via-virada-border-light/20 to-transparent blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-virada-gold/20 via-virada-border-light/15 to-transparent blur-3xl" />

        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full border border-virada-gold/20 opacity-50" />
        <div className="absolute right-1/3 top-2/3 h-24 w-24 rounded-full border border-virada-gold/20 opacity-40" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-virada-text-dark) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Logo with glow effect */}
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-xl bg-virada-gold/30 rounded-full" />
            <Image
              src="/images/a-virada-logo.svg"
              alt="A VIRADA"
              width={210}
              height={84}
              className="relative mx-auto"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1
          className="mb-6 font-serif text-4xl font-semibold leading-tight text-virada-text-dark sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-playfair)", lineHeight: "1.2" }}
        >
          A mudança começa dentro de você.
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-virada-text-dark sm:text-xl"
          style={{ lineHeight: "1.6" }}
        >
          Um encontro profundo para encerrar tudo o que 2025 deixou em você e iniciar 2026 com a clareza, a leveza e a
          identidade que sua alma tem pedido.
        </p>

        {/* CTA Button with enhanced glow */}
        <p className="mb-3 text-sm text-virada-text-muted">
          Clique no botão para entrar no grupo de whatsapp do evento.
        </p>

        <div className="relative inline-block">
          <div className="absolute inset-0 animate-pulse blur-2xl bg-virada-gold/40 rounded-xl" />
          <Button
            onClick={handleRedirect}
            className="relative mb-3 h-auto rounded-xl bg-gradient-to-r from-virada-gold to-virada-gold-hover px-12 py-4 text-lg font-medium text-virada-text-dark shadow-lg transition-all hover:shadow-xl hover:brightness-110"
            style={{ minWidth: "280px" }}
          >
            Eu estou pronta para a Virada
          </Button>
        </div>

        {/* Badge */}
        <div className="flex items-center justify-center gap-2">
          <svg
            className="h-4 w-4 text-virada-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm text-virada-text-muted">Evento online e gratuito | Não ficará gravado</p>
        </div>
      </div>

      {showNotification && <RedirectNotification url={redirectUrl} onClose={() => setShowNotification(false)} />}
    </section>
  )
}
