"use client"

export default function FaqSection({
  checkoutUrl = "https://pay.hotmart.com/D80370991B?off=xktg7idd&bid=1759319546432",
}: {
  checkoutUrl?: string
}) {
  const handleCheckout = () => {
    window.location.href = checkoutUrl
  }

  const faqs = [
    {
      question: "É curso ou terapia?",
      answer:
        "É um protocolo guiado com práticas de autoconhecimento, como meditação, reflexões, respiração e afirmações que liberam o seu poder pessoal. Você aplica no seu ritmo, com suporte da comunidade.",
    },
    {
      question: "Posso repetir o protocolo?",
      answer: "Sim, quantas vezes quiser durante o período de 1 ano.",
    },
    {
      question: "Funciona para qualquer idade?",
      answer: "Sim! De jovens a mulheres maduras, com ou sem histórico de terapia.",
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem garantia total de 30 dias. Se não gostar, pode solicitar o reembolso, sem burocracias.",
    },
    {
      question: "E se eu não tiver tempo todos os dias?",
      answer: "As práticas levam apenas 15 minutos. Você pode adaptar e até repetir quando quiser.",
    },
    {
      question: "Quando começo a sentir resultados?",
      answer: (
        <>
          Muitas alunas já percebem mudanças na <strong>primeira semana.</strong>
        </>
      ),
    },
  ]

  return (
    <section className="bg-background-cream px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-8 text-3xl font-bold text-text-dark sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl lg:mb-16 lg:text-6xl">
          Dúvidas?
        </h2>

        {/* FAQ Grid */}
        <div className="mb-10 grid gap-6 sm:mb-12 sm:gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-x-16 lg:gap-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <h3 className="text-base font-bold text-text-dark sm:text-lg md:text-xl">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-text-muted sm:text-base md:text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mb-12 flex justify-center sm:mb-14 md:mb-16">
          <button
            onClick={handleCheckout}
            className="min-h-[44px] w-full rounded-full bg-gradient-to-r from-primary-brand to-primary-brand-hover px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg lg:text-xl"
          >
            Acesse agora o Detox Emocional
          </button>
        </div>

        {/* Footer */}
        <div className="space-y-4 sm:space-y-6">
          <hr className="border-t border-[#D4C5B9]" />
          <p className="text-center text-xs text-text-muted sm:text-sm md:text-base">
            DetoxEmocional® — Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  )
}
