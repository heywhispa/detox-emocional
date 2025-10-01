"use client"

import { Button } from "@/components/ui/button"

export default function MethodSection({
  checkoutUrl = "https://pay.hotmart.com/D80370991B?off=xktg7idd&bid=1759319546432",
}: {
  checkoutUrl?: string
}) {
  const handleCheckout = () => {
    window.location.href = checkoutUrl
  }

  const features = [
    {
      title: "Aulas imersivas e práticas",
      description: "que cabem no seu dia sem sobrecarregar.",
    },
    {
      title: "Exercícios de reprogramação mental",
      description: "para substituir culpa e insegurança por confiança real.",
    },
    {
      title: "Ferramentas de emergência",
      description: "para usar em momentos de ansiedade ou impulsos.",
    },
    {
      title: "Protocolos semanais",
      description: "que guiam você passo a passo até sentir a diferença em 14 dias.",
    },
    {
      title: "Suporte direcionado",
      description: "para que você não faça essa jornada sozinha.",
    },
  ]

  return (
    <section className="bg-background-alt px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Headline */}
          <div className="flex flex-col justify-center">
            {/* Decorative Icon */}
            <div className="mb-4 inline-flex sm:mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8B7355] bg-white sm:h-12 sm:w-12">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:h-6 sm:w-6"
                >
                  <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="#8B7355" />
                  <path
                    d="M19 15L20.18 18.5L23 19.82L20.18 21.14L19 24.5L17.82 21.14L15 19.82L17.82 18.5L19 15Z"
                    fill="#8B7355"
                  />
                </svg>
              </div>
            </div>

            {/* Headline with Gradient */}
            <h2 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-r from-[#7B5E9D] to-[#A89080] bg-clip-text text-transparent">
                O único método
              </span>
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-text-muted sm:text-lg md:text-lg lg:text-xl">
              que vai te ajudar a <span className="font-semibold text-text-muted">atrair o sucesso duradouro</span> e{" "}
              <span className="font-semibold text-text-muted">alcançar a sua verdadeira essência</span> em apenas 14
              dias com 6 práticas oriundas da Física Quântica, EFT (Emotional Freedom Techniques) e ho'oponopono.
            </p>
          </div>

          {/* Right Column - Features List */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex gap-3 sm:gap-4">
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#7B5E9D] sm:h-8 sm:w-8">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:h-4 sm:w-4"
                        >
                          <path
                            d="M13.3334 4L6.00002 11.3333L2.66669 8"
                            stroke="#7B5E9D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Feature Text */}
                    <div className="flex-1">
                      <p className="text-base leading-relaxed text-text-muted sm:text-lg">
                        <span className="font-semibold text-text-muted">{feature.title}</span> {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider (except for last item) */}
                  {index < features.length - 1 && <div className="mt-4 border-t border-[#D4C4B0] sm:mt-5 md:mt-6" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Button
            size="lg"
            asChild
            className="min-h-[44px] w-full rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-brand-hover hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base md:h-14 md:px-10 md:text-base lg:px-12 lg:text-lg"
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Quero recuperar minha confiança
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
