import { lazy, Suspense } from "react"
import DetoxSection from "@/components/detox-section"
import BenefitsSection from "@/components/benefits-section"
import PricingCTASection from "@/components/pricing-cta-section"
import TimedContentReveal from "@/components/timed-content-reveal"

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
      {/* Section 1 - Always visible */}
      <DetoxSection
        fullPrice="247,00"
        showVideo={true}
        showPricing={false}
        subheadline="Assista ao vídeo e descubra como reprogramar sua mente, silenciar as vozes internas que te sabotam e despertar a mulher forte e autêntica que sempre existiu em você."
      />

      <TimedContentReveal delaySeconds={1080}>
        <PricingCTASection fullPrice="247,00" />

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
          <PricingSection fullPrice="247,00" />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <GuaranteeSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>
      </TimedContentReveal>
    </main>
  )
}
