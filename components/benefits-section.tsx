import Image from "next/image"

export default function BenefitsSection() {
  return (
    <section className="bg-background-cream px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Decorative Icon */}
        <div className="mb-8 flex justify-start md:mb-12">
          <Image
            src="/images/decorative-icon.svg"
            alt=""
            width={80}
            height={48}
            sizes="80px"
            className="h-8 sm:h-10 md:h-12"
            loading="lazy"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-balance text-2xl font-bold leading-tight text-text-dark sm:text-3xl md:text-4xl lg:text-5xl">
              Limpe traumas, ansiedades e bloqueios emocionais
            </h2>
            <p className="text-pretty text-base leading-relaxed text-text-muted sm:text-lg md:text-lg lg:text-xl">
              Assim como o corpo acumula toxinas, sua mente acumula culpas antigas, cobranças internas e pensamentos que
              roubam sua paz todos os dias.
            </p>
          </div>

          {/* Right Column - List Items */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/list-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  loading="lazy"
                />
              </div>
              <p className="text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
                Culpa guardada que insiste em te lembrar de erros do passado.
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/list-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  loading="lazy"
                />
              </div>
              <p className="text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
                Autocobrança sem fim que nunca te deixa sentir orgulho do que faz.
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/list-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  loading="lazy"
                />
              </div>
              <p className="text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
                Explosões e travas emocionais que tomam conta da sua mente antes que você perceba.
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/list-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  loading="lazy"
                />
              </div>
              <p className="text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
                Pensamentos repetitivos que drenam sua confiança e clareza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
