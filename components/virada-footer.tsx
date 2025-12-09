export default function ViradaFooter() {
  return (
    <footer className="relative overflow-hidden bg-virada-text-dark">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-virada-gold blur-3xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-virada-gold blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Logo or Brand Name */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-virada-cream sm:text-3xl">A VIRADA</h3>
            <p className="text-sm text-virada-gold">Evento online e gratuito</p>
          </div>

          {/* Divider */}
          <div className="h-px w-24 bg-virada-gold/30" />

          {/* Copyright and Credits */}
          <div className="space-y-2">
            <p className="text-sm text-virada-cream/70">
              © {new Date().getFullYear()} Elam Lima. Todos os direitos reservados.
            </p>
            <p className="text-xs text-virada-cream/50">Um evento de transformação e autoconhecimento.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
