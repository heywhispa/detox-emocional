import { lazy, Suspense } from "react"
import DetoxSection from "@/components/detox-section"
import BenefitsSection from "@/components/benefits-section"

const CtaCardsSection = lazy(() => import("@/components/cta-cards-section"))
const BenefitsGridSection = lazy(() => import("@/components/benefits-grid-section"))
const MethodSection = lazy(() => import("@/components/method-section"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const PricingSection = lazy(() => import("@/components/pricing-section"))
const GuaranteeSection = lazy(() => import("@/components/guarantee-section"))
const FaqSection = lazy(() => import("@/components/faq-section"))

const SectionFallback = () => <div className="min-h-[200px]" />

export default function Home() {
  const checkoutUrl = "https://pay.hotmart.com/D80370991B?off=2qs7fnm8&bid=1759321561837"

  return (
    <main>
      {/* Above the fold - load immediately */}
      <DetoxSection checkoutUrl={checkoutUrl} />
      <BenefitsSection />

      {/* Below the fold - lazy load */}
      <Suspense fallback={<SectionFallback />}>
        <CtaCardsSection checkoutUrl={checkoutUrl} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <BenefitsGridSection checkoutUrl={checkoutUrl} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <MethodSection checkoutUrl={checkoutUrl} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection checkoutUrl={checkoutUrl} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PricingSection checkoutUrl={checkoutUrl} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <GuaranteeSection checkoutUrl={checkoutUrl} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FaqSection checkoutUrl={checkoutUrl} />
      </Suspense>
    </main>
  )
}
