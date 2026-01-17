export default function ViradaIdentification() {
  const bulletPoints = [
    '"Eu não posso entrar em 2026 desse jeito."',
    '"Eu não aguento viver mais um ano igual."',
    '"Eu sinto que existe algo dentro de mim pedindo para mudar."',
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-virada-cream to-background px-4 py-20 sm:px-6 md:px-8">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-virada-border-light/20 to-transparent blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tl from-virada-gold/15 to-transparent blur-3xl" />

        <svg className="absolute right-10 top-10 h-40 w-40 opacity-[0.07] sm:h-60 sm:w-60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-virada-gold)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-virada-gold)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="var(--color-virada-gold)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="var(--color-virada-gold)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Text */}
          <div className="space-y-6">
            {/* Title */}
            <h2
              className="font-serif text-3xl font-semibold leading-tight text-virada-text-dark sm:text-4xl md:text-[42px]"
              style={{ fontFamily: "var(--font-playfair)", lineHeight: "1.2" }}
            >
              Se você chegou ao fim de 2025 cansada, é porque carregou peso demais sozinha.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-lg leading-relaxed text-virada-text-dark" style={{ lineHeight: "1.6" }}>
              <p>2025 te exigiu força em momentos em que você só queria respirar.</p>
              <p>Te pediu presença quando seu corpo pedia descanso.</p>
              <p>Te chamou para escolhas que você não teve tempo de sentir.</p>
              <p>Você segurou a vida de muita gente...</p>
              <p>e no meio disso tudo, acabou se perdendo um pouco de si.</p>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg font-medium text-virada-text-dark">Talvez, em algum momento, você tenha sentido:</p>

            <div className="space-y-4">
              {bulletPoints.map((text, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-lg border border-virada-border-light bg-gradient-to-br from-virada-bg-card to-background p-5 shadow-sm transition-all hover:shadow-md hover:border-virada-gold"
                >
                  <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-virada-gold to-virada-gold-hover shadow-sm" />
                  <p className="text-base leading-relaxed text-virada-text-dark">{text}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -left-2 top-0 h-full w-1 bg-gradient-to-b from-virada-gold via-virada-gold-hover to-virada-gold rounded-full" />
              <blockquote
                className="border-l-4 border-transparent pl-6 font-serif italic text-virada-text-dark"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A VIRADA é o meu presente para romper esse ciclo com verdade, profundidade e consciência.
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://api.pluglead.com/group-manager/group-manager/d707caa2-e5fa-4d0a-902a-e5477c8babe1/redirect/be4fa6b0-f428-4c41-b131-f4b0bc127a0e"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-virada-gold to-virada-gold-hover px-6 py-4 font-medium text-virada-text-dark shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-auto sm:px-12 sm:text-lg"
          >
            <span className="relative z-10">Eu quero esse presente</span>
            <div className="absolute inset-0 rounded-full bg-virada-gold-hover opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  )
}
