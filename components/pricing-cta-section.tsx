"use client"
import { Button } from "@/components/ui/button"

export default function PricingCTASection({
  checkoutUrl = "https://pay.hotmart.com/D80370991B?off=xktg7idd&checkoutMode=10",
  fullPrice = "147,00",
}: {
  checkoutUrl?: string
  fullPrice?: string
}) {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-center sm:space-y-8">
          <div className="flex justify-center">
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
        </div>
      </div>
    </section>
  )
}
