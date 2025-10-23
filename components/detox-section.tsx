"use client"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"

export default function DetoxSection({
  checkoutUrl = "https://pay.hotmart.com/D80370991B?off=xktg7idd&checkoutMode=10",
  fullPrice = "147,00",
  showVideo = false,
  showPricing = true, // Added prop to control pricing visibility
}: {
  checkoutUrl?: string
  fullPrice?: string
  showVideo?: boolean
  showPricing?: boolean // New prop
}) {
  return (
    <section className="relative min-h-[600px] bg-background-alt sm:min-h-screen">
      <div className="flex min-h-[600px] items-center justify-center sm:min-h-screen px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div className="max-w-3xl space-y-4 text-center sm:space-y-5 md:space-y-6 lg:space-y-8">
          <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-text-dark">Em apenas 14 dias, você vai sentir como é </span>
            <span className="text-[#a89bb8]">viver sem carregar a culpa e cobrança </span>
            <span className="text-text-dark">que roubam a sua autoconfiança.</span>
          </h1>

          {/* Subheadline before video */}
          <div className="space-y-3 text-base leading-relaxed text-text-dark sm:space-y-4 sm:text-lg md:text-lg lg:text-xl">
            <p>
              O Detox Emocional é uma reprogramação mental que{" "}
              <span className="font-semibold">apaga as vozes internas</span> que te sabotam e{" "}
              <span className="font-semibold">reativa a mulher forte e autêntica</span> que sempre esteve aí dentro.
            </p>
          </div>

          {showVideo && (
            <div className="py-4 sm:py-6">
              <Script src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js" strategy="lazyOnload" />
              <div id="ifr_68f964f2c376aaf61f78cfc5_wrapper" style={{ margin: "0 auto", width: "100%" }}>
                <div style={{ position: "relative", padding: "56.25% 0 0 0" }} id="ifr_68f964f2c376aaf61f78cfc5_aspect">
                  <iframe
                    frameBorder="0"
                    allowFullScreen
                    src="about:blank"
                    id="ifr_68f964f2c376aaf61f78cfc5"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    referrerPolicy="origin"
                    onLoad={(e) => {
                      const iframe = e.currentTarget
                      iframe.onload = null
                      iframe.src =
                        "https://scripts.converteai.net/8d3d0868-e01b-41a4-a8e9-cd22cc3cd8d6/players/68f964f2c376aaf61f78cfc5/v4/embed.html" +
                        (location.search || "?") +
                        "&vl=" +
                        encodeURIComponent(location.href)
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {showPricing && (
            <>
              <div className="flex justify-center py-4 sm:py-6">
                <div className="inline-flex flex-col items-center gap-1.5 rounded-2xl border-2 border-primary-brand/20 bg-gradient-to-br from-white/50 to-primary-brand/5 px-5 py-3 shadow-lg backdrop-blur-sm sm:gap-2 sm:px-6 sm:py-4">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-xs font-medium text-text-dark/50 line-through sm:text-sm">R$ 2.872,00</span>
                    <span className="text-xl font-bold text-primary-brand sm:text-2xl md:text-3xl">R$ {fullPrice}</span>
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
                  asChild
                  className="min-h-[44px] w-full rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-brand-hover hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base md:py-5 md:text-base lg:px-8 lg:py-6 lg:text-lg"
                >
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    Quero começar meu Detox Emocional agora
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Existing code */}
        <div
          className="absolute top-[15%] right-[10%] w-16 h-16 lg:w-20 lg:h-20 z-20 hidden sm:block"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <Image
            src="/images/macaron-1.svg"
            alt=""
            width={80}
            height={80}
            sizes="80px"
            className="w-full h-auto drop-shadow-lg"
            fetchPriority="high"
          />
        </div>

        <div
          className="absolute bottom-[15%] left-[10%] w-20 h-20 lg:w-24 lg:h-24 z-20 hidden sm:block"
          style={{
            animation: "float-delayed 4s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        >
          <Image
            src="/images/macaron-2.svg"
            alt=""
            width={96}
            height={96}
            sizes="96px"
            className="w-full h-auto drop-shadow-lg"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
