"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BenefitsGridSection({
  checkoutUrl = "https://pay.hotmart.com/D80370991B?off=xktg7idd&bid=1759319546432",
}: {
  checkoutUrl?: string
}) {
  const handleCheckout = () => {
    window.location.href = checkoutUrl
  }

  const benefits = [
    {
      icon: "/images/benefit-sleep.svg",
      title: "Dormir em paz",
      description: " sem o peso mental que te acompanha há anos.",
    },
    {
      icon: "/images/benefit-confidence.svg",
      title: "Se sentir dona de si",
      description: " novamente, sem medo de falhar.",
    },
    {
      icon: "/images/benefit-control.svg",
      title: "Controlar emoções e reações",
      description: " que antes explodiam sem aviso.",
    },
    {
      icon: "/images/benefit-energy.svg",
      title: "Viver com mais energia e clareza",
      description: " para o que realmente importa.",
    },
    {
      icon: "/images/benefit-strength.svg",
      title: "Recuperar sua autoconfiança e a força",
      description: " de conduzir a própria vida.",
    },
    {
      icon: "/images/benefit-hope.svg",
      title: "E principalmente voltar a ter esperança para viver uma vida plena e próspera",
      description: "...",
    },
  ]

  return (
    <section className="bg-background-cream px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Decorative Icon */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <Image
            src="/images/benefits-icon.svg"
            alt=""
            width={80}
            height={40}
            sizes="80px"
            className="h-8 w-16 sm:h-10 sm:w-20"
            loading="lazy"
          />
        </div>

        {/* Headline */}
        <h2 className="mb-10 text-center text-2xl font-bold leading-tight text-text-muted sm:mb-12 sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl">
          Com o Detox Emocional você vai
        </h2>

        {/* Benefits Grid */}
        <div className="mb-10 grid gap-4 sm:mb-12 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm sm:rounded-3xl sm:p-8"
            >
              <div className="mb-4 sm:mb-6">
                <Image
                  src={benefit.icon || "/placeholder.svg"}
                  alt=""
                  width={64}
                  height={64}
                  sizes="64px"
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
                  loading="lazy"
                />
              </div>
              <p className="text-pretty text-sm leading-relaxed text-text-muted sm:text-base md:text-base lg:text-lg">
                <span className="font-bold text-[#7D5BA6]">{benefit.title}</span>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleCheckout}
            className="min-h-[44px] w-full rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-brand-hover sm:w-auto sm:px-8 sm:py-4 sm:text-base md:px-10 md:text-base lg:px-12 lg:text-lg"
          >
            Quero recuperar a minha esperança pela vida
          </Button>
        </div>
      </div>
    </section>
  )
}
