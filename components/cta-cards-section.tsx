import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CtaCardsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-center">
          {/* Dark Card with Content */}
          <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-text-dark px-6 py-10 shadow-2xl sm:rounded-[40px] sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            {/* Mandala Icon */}
            <div className="mb-6 flex justify-start sm:mb-8">
              <Image
                src="/images/mandala.svg"
                alt=""
                width={80}
                height={80}
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, (max-width: 1024px) 64px, 80px"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
              <p className="text-pretty text-lg leading-relaxed text-white sm:text-xl md:text-2xl lg:text-3xl">
                O <span className="font-bold">Detox Emocional</span> é o método de{" "}
                <span className="font-bold">limpeza interna</span> que quebra esse ciclo e elimina esses{" "}
                <span className="font-bold">padrões negativos,</span>{" "}
                <span className="font-bold">devolvendo leveza, clareza e a força</span> de conduzir a própria vida.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="min-h-[44px] w-full rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-brand-hover sm:w-auto sm:px-8 sm:py-4 sm:text-base md:px-8 md:py-5 md:text-base lg:text-lg"
            >
              Quero iniciar meu Detox agora
            </Button>
          </div>

          {/* Photo Card - Overlapping on the right */}
          <div className="relative w-full max-w-md lg:-ml-24">
            <div className="overflow-hidden rounded-3xl shadow-2xl sm:rounded-[40px]">
              <Image
                src="/images/woman-photo.svg"
                alt="Mulher sorrindo representando bem-estar"
                width={500}
                height={600}
                sizes="(max-width: 1024px) 100vw, 500px"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
