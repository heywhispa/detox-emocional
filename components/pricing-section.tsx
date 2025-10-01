"use client"

import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const handleCheckout = () => {
    window.location.href = "https://pay.hotmart.com/D80370991B?off=xktg7idd"
  }

  const items = [
    {
      title: "Acesso ao Programa Detox Emocional",
      price: "R$890,00",
    },
    {
      title: "Bônus 1: 17 Aprendizados Para Mudar Sua Vida",
      subtitle: "2h de conteúdo",
      price: "R$ 297,00",
    },
    {
      title: "Bônus 2: Sua Jornada e o Poder da Gratidão",
      subtitle: "1h45 de conteúdo",
      price: "R$ 297,00",
    },
    {
      title: "Bônus 3: O Poder do Coração",
      subtitle: "1h40 de conteúdo",
      price: "R$ 297,00",
    },
    {
      title: "Bônus 4: Ciclos de Dor e Cura",
      subtitle: "3h de conteúdo",
      price: "R$ 897,00",
    },
    {
      title: "Bônus 5: MasterClass: Como Superar as Dificuldades Financeiras",
      price: "R$ 97,00",
    },
    {
      title: "Bônus 6: MasterClass: Como Vencer a Procrastinação",
      price: "R$ 97,00",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-background-dark px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24 xl:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-5 sm:opacity-10">
        <svg
          className="absolute left-0 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="400" cy="400" r="300" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="250" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="150" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="100" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="50" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Headline and Description */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Chegou a hora de tomar a decisão.
            </h2>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg md:text-lg lg:text-xl">
              Em apenas 14 dias, você experimenta um processo de reprogramação mental simples de aplicar e com
              resultados reais no seu dia a dia.
            </p>
          </div>

          {/* Right Column - Premium Pricing Card */}
          <div className="flex flex-col">
            <div className="relative">
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 sm:-top-4">
                <div className="rounded-full bg-gradient-to-r from-[#7B5BA1] to-[#9B7BC1] px-4 py-1.5 shadow-lg sm:px-6 sm:py-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-white sm:text-sm">✨ Melhor Oferta</p>
                </div>
              </div>

              {/* Card with Glow Effect */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl">
                {/* Subtle Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9B7BC1]/30 via-transparent to-[#4CAF50]/20 p-[2px] sm:rounded-3xl">
                  <div className="h-full w-full rounded-2xl bg-background-cream sm:rounded-3xl" />
                </div>

                {/* Card Content */}
                <div className="relative">
                  {/* Header - Purple Gradient Background */}
                  <div className="bg-gradient-to-br from-background-accent to-background-accent/80 px-6 py-8 text-center sm:px-8 sm:py-10 md:px-10 md:py-12">
                    <h3 className="text-3xl font-bold leading-tight text-text-dark sm:text-4xl md:text-5xl">
                      Compre 1<br />
                      <span className="text-4xl sm:text-5xl md:text-6xl">e leve 7</span>
                    </h3>
                  </div>

                  {/* Content Area - White Background with Better Spacing */}
                  <div className="bg-background-cream px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                    {/* Items List with Enhanced Styling */}
                    <div className="mb-8 space-y-3.5 sm:mb-10 sm:space-y-4 md:space-y-5">
                      {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4">
                          {/* Enhanced Checkmark Icon */}
                          <div className="mt-0.5 flex-shrink-0">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="sm:h-7 sm:w-7"
                            >
                              <circle cx="14" cy="14" r="13" fill="#4CAF50" opacity="0.15" />
                              <circle cx="14" cy="14" r="11" fill="#4CAF50" />
                              <path
                                d="M8 14L12 18L20 10"
                                stroke="white"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          {/* Text Content with Better Typography */}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed text-text-dark sm:text-base">
                              <span className={index === 0 ? "text-base font-bold sm:text-lg" : "font-semibold"}>
                                {item.title}
                              </span>
                              {item.subtitle && <span className="text-text-dark/70"> – {item.subtitle}</span>}{" "}
                              <span className="font-semibold text-text-dark/50 line-through">{item.price}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="mb-8 h-px bg-gradient-to-r from-transparent via-[#7B5BA1]/20 to-transparent sm:mb-10" />

                    {/* Enhanced Pricing Display */}
                    <div className="mb-8 text-center sm:mb-10">
                      <p className="mb-3 text-base text-text-dark/80 sm:mb-4 sm:text-lg">
                        De{" "}
                        <span className="text-lg font-bold text-red-600 line-through decoration-2 sm:text-xl">
                          R$ 2.872,00
                        </span>{" "}
                        por apenas:
                      </p>

                      {/* Installment Price - Large and Bold */}
                      <div className="mb-1 flex items-start justify-center gap-0.5 sm:gap-1">
                        <span className="mt-2 text-xl font-bold text-text-dark sm:mt-3 sm:text-2xl md:mt-4 md:text-3xl">
                          R$
                        </span>
                        <span className="bg-gradient-to-br from-text-dark to-text-dark/80 bg-clip-text text-[80px] font-bold leading-none text-transparent sm:text-[100px] md:text-[120px] lg:text-[140px]">
                          {"9"}
                        </span>
                        <span className="mt-2 text-xl font-bold text-text-dark sm:mt-3 sm:text-2xl md:mt-4 md:text-3xl">
                          ,02
                        </span>
                      </div>
                      <p className="mb-2 text-xs text-text-dark/70 sm:text-sm">por mês no cartão</p>

                      {/* Cash Price with Highlight */}
                      <div className="inline-block rounded-full bg-[#4CAF50]/10 px-4 py-2 sm:px-6 sm:py-3">
                        <p className="text-xl font-bold text-[#4CAF50] sm:text-2xl">R$ 77,00 à vista</p>
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <Button
                      onClick={handleCheckout}
                      className="mb-6 min-h-[44px] w-full rounded-full bg-gradient-to-r from-[#4CAF50] to-[#45a049] py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl sm:mb-8 sm:py-4 sm:text-base md:py-5 md:text-base lg:py-7 lg:text-lg"
                    >
                      DÊ O PRÓXIMO PASSO AGORA
                    </Button>

                    {/* Footer Text with Icons */}
                    <div className="space-y-1.5 text-center sm:space-y-2">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#7B5BA1] sm:gap-2 sm:text-sm">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:h-5 sm:w-5"
                        >
                          <path
                            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                            stroke="#7B5BA1"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6V10L13 13"
                            stroke="#7B5BA1"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>80% de desconto | Garantia incondicional de 14 dias</span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 text-xs text-[#7B5BA1] sm:gap-2 sm:text-sm">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:h-5 sm:w-5"
                        >
                          <path
                            d="M10 2L12.5 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7L10 2Z"
                            fill="#7B5BA1"
                            stroke="#7B5BA1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Pagamento 100% seguro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
