"use client"

import Script from "next/script"

export function ComunidadeHero() {
  const redirectUrl = "https://pay.hotmart.com/G103916158I" // Updated redirect URL to Hotmart checkout

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF4EE]">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left gradient orb */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#F7C9D8]/30 blur-3xl" />
        {/* Top right gradient orb */}
        <div className="absolute -right-32 -top-20 h-80 w-80 rounded-full bg-[#B6E2C9]/30 blur-3xl" />
        {/* Bottom left gradient orb */}
        <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-[#7FA6C8]/20 blur-3xl" />
        {/* Bottom right gradient orb */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#F7C9D8]/25 blur-3xl" />
        {/* Center subtle gradient */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#B6E2C9]/10 to-transparent blur-2xl" />
      </div>

      {/* Mandala decorative element - subtle in background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <svg width="800" height="800" viewBox="0 0 200 200" className="text-[#7FA6C8]">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              stroke="currentColor"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <Script
        src="https://scripts.converteai.net/8d3d0868-e01b-41a4-a8e9-cd22cc3cd8d6/players/696be1e410d72bdc9f339f8b/v4/player.js"
        strategy="afterInteractive"
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          {/* Headline */}
          <h1 className="text-balance text-2xl font-bold leading-tight text-[#4E4E4E] sm:text-3xl md:text-4xl lg:text-5xl">
            Você já está cansada de começar o ano prometendo que{" "}
            <span className="bg-gradient-to-r from-[#7FA6C8] to-[#B6E2C9] bg-clip-text text-transparent">
              vai ser diferente?
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#4E4E4E]/80 sm:text-lg md:text-xl">
            Assista esse vídeo e entenda por que você sempre volta pro mesmo lugar — e como{" "}
            <span className="font-semibold text-[#4E4E4E]">interromper esse padrão</span> de uma vez por todas.
          </p>

          {/* Video Container */}
          <div className="mx-auto w-full max-w-3xl py-4">
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#F7C9D8]/30 bg-white/50 shadow-xl shadow-[#7FA6C8]/10 backdrop-blur-sm">
              <div className="aspect-video w-full">
                {/* @ts-ignore - vturb-smartplayer is a custom web component */}
                <vturb-smartplayer
                  id="vid-696be1e410d72bdc9f339f8b"
                  style={{ display: "block", margin: "0 auto", width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7FA6C8] to-[#B6E2C9] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#7FA6C8]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7FA6C8]/40 sm:px-10 sm:py-5 sm:text-lg"
            >
              <span>Eu quero a mudança agora</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
