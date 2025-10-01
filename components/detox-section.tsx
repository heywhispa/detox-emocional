"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DetoxSection() {
  const handleCheckout = () => {
    window.location.href = "https://pay.hotmart.com/D80370991B?off=xktg7idd"
  }

  return (
    <section className="relative min-h-[600px] bg-background-alt sm:min-h-screen">
      <div className="flex min-h-[600px] items-center justify-center sm:min-h-screen px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div className="max-w-3xl space-y-4 text-center sm:space-y-5 md:space-y-6 lg:space-y-8">
          <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-text-dark">Em apenas 14 dias, você vai sentir como é </span>
            <span className="text-[#a89bb8]">viver sem carregar a culpa e cobrança </span>
            <span className="text-text-dark">que roubam a sua autoconfiança.</span>
          </h1>

          <div className="space-y-3 text-base leading-relaxed text-text-dark sm:space-y-4 sm:text-lg md:text-lg lg:text-xl">
            <p>
              O Detox Emocional é uma reprogramação mental que{" "}
              <span className="font-semibold">apaga as vozes internas</span> que te sabotam e{" "}
              <span className="font-semibold">reativa a mulher forte e autêntica</span> que sempre esteve aí dentro.
            </p>
          </div>

          <div className="flex justify-center py-4 sm:py-6">
            <div className="inline-flex flex-col items-center gap-1.5 rounded-2xl border-2 border-primary-brand/20 bg-gradient-to-br from-white/50 to-primary-brand/5 px-5 py-3 shadow-lg backdrop-blur-sm sm:gap-2 sm:px-6 sm:py-4">
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="text-xs font-medium text-text-dark/50 line-through sm:text-sm">R$ 2.872,00</span>
                <span className="text-xl font-bold text-primary-brand sm:text-2xl md:text-3xl">R$ 77,00</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px w-6 bg-primary-brand/30 sm:w-8"></div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-text-dark/70 sm:text-xs">
                  Apenas 50 vagas disponíveis
                </p>
                <div className="h-px w-6 bg-primary-brand/30 sm:w-8"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleCheckout}
              className="min-h-[44px] w-full rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-brand-hover hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base md:py-5 md:text-base lg:px-8 lg:py-6 lg:text-lg"
            >
              Quero começar meu Detox Emocional agora
            </Button>
          </div>
        </div>

        <div
          className="absolute top-[15%] right-[10%] w-16 h-16 lg:w-20 lg:h-20 z-20 hidden sm:block"
          style={{
            transform: "translate3d(0, 0, 0)",
            animation: "float 3s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          <Image
            src="/images/macaron-1.svg"
            alt=""
            width={80}
            height={80}
            sizes="80px"
            className="w-full h-auto drop-shadow-lg"
            loading="lazy"
          />
        </div>

        <div
          className="absolute bottom-[15%] left-[10%] w-20 h-20 lg:w-24 lg:h-24 z-20 hidden sm:block"
          style={{
            transform: "translate3d(0, 0, 0)",
            animation: "float-delayed 4s ease-in-out infinite",
            animationDelay: "0.5s",
            willChange: "transform",
          }}
        >
          <Image
            src="/images/macaron-2.svg"
            alt=""
            width={96}
            height={96}
            sizes="96px"
            className="w-full h-auto drop-shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
