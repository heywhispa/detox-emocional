import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DetoxSection() {
  return (
    <section className="relative min-h-[600px] bg-background-alt sm:min-h-screen">
      <div className="grid min-h-[600px] sm:min-h-screen lg:grid-cols-[45%_55%]">
        {/* Left Column - Text Content */}
        <div className="flex items-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-16 lg:py-20 xl:px-24">
          <div className="max-w-2xl space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
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

            <Button
              size="lg"
              className="min-h-[44px] w-full rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-brand-hover hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base md:py-5 md:text-base lg:px-8 lg:py-6 lg:text-lg"
            >
              Quero começar meu Detox Emocional agora
            </Button>
          </div>
        </div>

        {/* Right Column - Image with Floating Macarons */}
        <div className="relative hidden items-end justify-end sm:flex">
          <div className="relative w-full h-full flex items-end justify-end">
            {/* Main Portrait */}
            <div className="relative z-10 w-full h-auto lg:w-[110%] xl:w-[120%]">
              <Image
                src="/images/portrait.svg"
                alt="Pessoa sorrindo representando bem-estar emocional"
                width={1000}
                height={1200}
                className="w-full h-auto object-cover object-bottom"
                priority
              />
            </div>

            {/* Floating Macaron Elements */}
            {/* Top Right Macaron */}
            <div className="absolute top-[15%] right-[5%] w-16 h-16 lg:w-20 lg:h-20 animate-float z-20">
              <Image
                src="/images/macaron-1.svg"
                alt=""
                width={80}
                height={80}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>

            {/* Middle Right Macaron */}
            <div className="absolute top-[45%] right-[8%] w-20 h-20 lg:w-24 lg:h-24 animate-float-delayed z-20">
              <Image
                src="/images/macaron-2.svg"
                alt=""
                width={96}
                height={96}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>

            {/* Bottom Right Macaron */}
            <div className="absolute bottom-[15%] right-[10%] w-16 h-16 lg:w-20 lg:h-20 animate-float-slow z-20">
              <Image
                src="/images/macaron-3.svg"
                alt=""
                width={80}
                height={80}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>

            {/* Left Side Macaron */}
            <div className="absolute top-[35%] left-[5%] w-14 h-14 lg:w-16 lg:h-16 animate-float z-20">
              <Image
                src="/images/macaron-1.svg"
                alt=""
                width={64}
                height={64}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>

            {/* Bottom Left Macaron */}
            <div className="absolute bottom-[25%] left-[8%] w-12 h-12 lg:w-14 lg:h-14 animate-float-delayed z-20">
              <Image
                src="/images/macaron-3.svg"
                alt=""
                width={56}
                height={56}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
