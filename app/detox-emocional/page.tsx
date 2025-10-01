import DetoxSection from "@/components/detox-section"
import BenefitsSection from "@/components/benefits-section"
import CtaCardsSection from "@/components/cta-cards-section"
import BenefitsGridSection from "@/components/benefits-grid-section"
import MethodSection from "@/components/method-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import GuaranteeSection from "@/components/guarantee-section"
import FaqSection from "@/components/faq-section"

export default function Home() {
  return (
    <main>
      <DetoxSection />
      <BenefitsSection />
      <CtaCardsSection />
      <BenefitsGridSection />
      <MethodSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
    </main>
  )
}
