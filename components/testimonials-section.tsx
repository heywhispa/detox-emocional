"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleCheckout = () => {
    window.location.href = "https://pay.hotmart.com/D80370991B?off=xktg7idd"
  }

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Bom dia, pessoal! Bom dia, Elam! Acabei de fazer o meu primeiro Detox Emocional. Foi incrível! Achei o sentimento bloqueador que jamais enxerguei. Chorei, chorei, muito. Lavei espírito, corpo e mente. Foi lindo. Senti tudo o que era falado por esse Mestre maravilhoso que é o Elam. Elam, te abraço e te agradeço (e agradeço!) imensamente por realizar esse trabalho Divino, que salva vidas, que acolhe, que orienta, que conecta cada um à sua essência, ao seu ímago, ao seu próprio Divino. Gratidão, gratidão, gratidão! Está feito! Está feito!",
    },
    {
      name: "Ana Costa",
      text: "Elam, muito obrigado por esta calma e sorriso iluminado cheio de paz que você transmite e traz consigo. Já quase dois anos tenho tentado a acalmar esta mente para meditar. Um grande progresso já tem sido concluído em minha vida. Muita coisa já mudou, mas tem muito mais para mudar e melhorar no meu 'Ser humano'. A meditação é um challenge para quem sofre de mente agitada ou melhor dizendo ADHD. E ontem quando assisti sua primeira class a sua maneira de guiar, de elevar o pensamento para dentro de nós mesmos e meditar voltando a si para dentro e nos avaliar, fez toda a diferença em minha mente. Só tenho a te agradecer que esta sua paz que traz consigo possa transformar para melhor todos que te acompanha.",
    },
    {
      name: "Juliana Mendes",
      text: "Estou no treinamento! Acabando o Detox emocional e já está ajudando muito! Processão super pouco agora. Antes era muito mais. Ansiedade, emocional, crenças de insegurança, não mereço ser incapacidade. Mas já está limpando tão tudo nas práticas! Obrigada",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-background-cream px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Headline */}
          <div className="flex flex-col justify-center">
            {/* Decorative Icon */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 sm:mb-8 sm:px-4 sm:py-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:h-6 sm:w-6"
              >
                <path
                  d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
                  stroke="#8B7BA8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Headline */}
            <h2 className="mb-6 text-balance text-2xl font-bold leading-tight sm:mb-8 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="bg-gradient-to-r from-[#8B7BA8] to-[#B8A088] bg-clip-text text-transparent">
                Veja a transformação que o Detox Emocional gera na vida das pessoas
              </span>
            </h2>
          </div>

          {/* Right Column - Testimonials Carousel */}
          <div className="flex flex-col">
            {/* Navigation Arrows */}
            <div className="mb-4 flex justify-end gap-2 sm:mb-6 sm:gap-3">
              <button
                onClick={prevTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background-accent text-[#8B7BA8] transition-colors hover:bg-background-accent/80 sm:h-12 sm:w-12"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background-accent text-[#8B7BA8] transition-colors hover:bg-background-accent/80 sm:h-12 sm:w-12"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] p-6 shadow-lg sm:p-8">
              <div className="flex h-full flex-col">
                {/* Profile Section */}
                <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B7BA8] text-base font-semibold text-white sm:h-12 sm:w-12 sm:text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white sm:text-base">{testimonials[currentIndex].name}</p>
                    <p className="text-xs text-gray-400 sm:text-sm">Aluna do Detox Emocional</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="max-h-[300px] flex-1 overflow-y-auto sm:max-h-[400px]">
                  <p className="text-pretty text-sm leading-relaxed text-gray-200 sm:text-base">
                    {testimonials[currentIndex].text}
                  </p>
                </div>

                {/* Timestamp */}
                <div className="mt-4 text-right sm:mt-6">
                  <span className="text-xs text-gray-500 sm:text-sm">10:35</span>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-[#8B7BA8]/5" />
            </div>

            {/* Carousel Indicators */}
            <div className="mt-4 flex justify-center gap-2 sm:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all sm:h-2 ${
                    index === currentIndex ? "w-8 bg-[#8B7BA8]" : "w-2.5 bg-gray-300 sm:w-2"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center sm:mt-14 md:mt-16">
          <Button
            onClick={handleCheckout}
            className="min-h-[44px] w-full rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-brand-hover hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base md:h-14 md:px-10 md:text-base lg:px-12 lg:text-lg"
          >
            Sim, estou pronta para meu Detox Emocional
          </Button>
        </div>
      </div>
    </section>
  )
}
