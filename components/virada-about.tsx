import Image from "next/image"

export default function ViradaAbout() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-virada-cream to-virada-bg-card px-4 py-20 sm:px-6 md:px-8">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-gradient-to-bl from-virada-border-light/15 to-transparent blur-3xl" />
        <div className="absolute left-1/3 bottom-40 h-64 w-64 rounded-full bg-gradient-to-tr from-virada-gold/10 to-transparent blur-3xl" />

        <svg className="absolute left-10 top-20 h-48 w-48 opacity-[0.04]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-virada-gold)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="var(--color-virada-gold)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="var(--color-virada-gold)" strokeWidth="0.5" />
          <path d="M50 5 L50 95 M5 50 L95 50" stroke="var(--color-virada-gold)" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className="mb-12 text-center font-serif text-3xl font-semibold text-virada-text-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Quem será seu guia em A VIRADA
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Image with mystical frame */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-virada-gold/20 via-virada-border-light/10 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-virada-gold/20">
                <Image
                  src="/images/elam-lima.jpg"
                  alt="Elam Lima em posição de meditação"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-virada-text-dark">Elam Lima</h3>

            <p className="text-lg leading-relaxed text-virada-text-dark" style={{ lineHeight: "1.6" }}>
              Gosto de me apresentar como um aprendiz da vida. Acredito que, antes de qualquer título - e até mesmo
              antes do próprio nome - existe um ser humano contendo uma essência divina, e é esse reencontro interno que
              conduz qualquer transformação real.
            </p>

            <p className="text-lg leading-relaxed text-virada-text-dark" style={{ lineHeight: "1.6" }}>
              Hoje, atuo como mentor de autoconhecimento e mudança de vida para mais de 2.000 alunos, em 16 países,
              através dos meus treinamentos online.
            </p>

            <p className="text-lg leading-relaxed text-virada-text-dark" style={{ lineHeight: "1.6" }}>
              Ajudo pessoas a se conhecerem profundamente, observando seus padrões mentais e emocionais para
              reconstruírem sua própria história por dentro.
            </p>

            <p className="text-lg leading-relaxed text-virada-text-dark" style={{ lineHeight: "1.6" }}>
              Sou terapeuta com base no ThetaHealing, praticante de meditação há mais de 10 anos, estudioso de
              neurociência, física quântica e dos mecanismos que sustentam a mudança interna duradoura. Antes disso,
              atuei como ator no teatro, na TV, em campanhas publicitárias e como apresentador.
            </p>

            <div className="relative overflow-hidden rounded-xl border-2 border-virada-border-light bg-gradient-to-br from-virada-bg-card via-background to-virada-bg-card p-6 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-virada-gold/5 to-transparent" />

              <p
                className="relative font-serif text-xl italic leading-relaxed text-virada-text-dark"
                style={{ fontFamily: "var(--font-playfair)", lineHeight: "1.6" }}
              >
                A minha missão é simples: Guiar pessoas para voltarem ao que sempre foram - inteiras, presentes,
                verdadeiras e livres.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://api.pluglead.com/group-manager/group-manager/d707caa2-e5fa-4d0a-902a-e5477c8babe1/redirect/be4fa6b0-f428-4c41-b131-f4b0bc127a0e"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-virada-gold to-virada-border-light px-8 py-4 font-semibold text-virada-text-dark shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-12 sm:text-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-virada-border-light to-virada-gold opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-50" />
            <span className="relative">Eu quero participar</span>
          </a>
        </div>
      </div>
    </section>
  )
}
