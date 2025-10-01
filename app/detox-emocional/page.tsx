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
  return (
    <main>
      {/* Above the fold - load immediately */}
      <DetoxSection />
      <BenefitsSection />

      {/* Below the fold - lazy load */}
      <Suspense fallback={<SectionFallback />}>
        <CtaCardsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <BenefitsGridSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <MethodSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <GuaranteeSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FaqSection />
      </Suspense>
    </main>
  )
}
