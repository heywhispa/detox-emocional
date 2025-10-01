"use client"

export default function GuaranteeSection({
  checkoutUrl = "https://pay.hotmart.com/D80370991B?off=xktg7idd&bid=1759319546432",
}: {
  checkoutUrl?: string
}) {
  const handleCheckout = () => {
    window.location.href = checkoutUrl
  }

  return (
    <section className="bg-background-cream px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center">
          {/* Icon Badge */}
          <div className="mb-6 flex h-24 w-24 items-center justify-center sm:mb-8 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40">
            <svg className="h-full w-full" viewBox="0 0 168 169" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_29_1935)">
                <g filter="url(#filter0_ii_29_1935)">
                  <path
                    d="M168 84.2568C168 37.8649 130.392 0.256836 84 0.256836C37.6081 0.256836 0 37.8649 0 84.2568C0 130.649 37.6081 168.257 84 168.257C130.392 168.257 168 130.649 168 84.2568Z"
                    fill="url(#paint0_linear_29_1935)"
                  />
                  <path
                    d="M78.9509 52.2407C81.66 49.2661 86.3401 49.2661 89.0493 52.2407L92.5329 56.0659C93.9019 57.5692 95.8697 58.3843 97.9011 58.2894L103.069 58.0479C107.088 57.86 110.398 61.1696 110.21 65.1885L109.968 70.3566C109.873 72.3877 110.688 74.3555 112.192 75.7246L116.017 79.2082C118.992 81.9174 118.992 86.5975 116.017 89.3066L112.192 92.7903C110.688 94.1592 109.873 96.127 109.968 98.1584L110.21 103.326C110.398 107.345 107.088 110.655 103.069 110.467L97.9011 110.225C95.8697 110.13 93.9019 110.946 92.5329 112.449L89.0493 116.274C86.3401 119.249 81.66 119.249 78.9509 116.274L75.4673 112.449C74.0982 110.946 72.1304 110.13 70.0993 110.225L64.9312 110.467C60.9123 110.655 57.6027 107.345 57.7906 103.326L58.0321 98.1584C58.127 96.127 57.3119 94.1592 55.8086 92.7903L51.9834 89.3066C49.0088 86.5975 49.0088 81.9174 51.9834 79.2082L55.8086 75.7246C57.3119 74.3555 58.127 72.3877 58.0321 70.3566L57.7906 65.1885C57.6027 61.1696 60.9123 57.86 64.9312 58.0479L70.0993 58.2894C72.1304 58.3843 74.0982 57.5692 75.4673 56.0659L78.9509 52.2407Z"
                    stroke="white"
                    strokeWidth="3.27805"
                  />
                  <path
                    d="M73.7559 84.258L80.5852 91.0872L94.2437 77.4287"
                    stroke="white"
                    strokeWidth="3.27805"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_ii_29_1935"
                  x="0"
                  y="-4.99316"
                  width="168"
                  height="178.5"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-7.875" />
                  <feGaussianBlur stdDeviation="2.625" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_29_1935" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="7.875" />
                  <feGaussianBlur stdDeviation="2.625" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.960784 0 0 0 0 0.968627 0 0 0 0 0.980392 0 0 0 0.2 0"
                  />
                  <feBlend mode="normal" in2="effect1_innerShadow_29_1935" result="effect2_innerShadow_29_1935" />
                </filter>
                <linearGradient
                  id="paint0_linear_29_1935"
                  x1="0"
                  y1="0.256836"
                  x2="183.482"
                  y2="6.88181"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C6A665" />
                  <stop offset="1" stopColor="#FDF2CE" />
                </linearGradient>
                <clipPath id="clip0_29_1935">
                  <rect width="168" height="169" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Headline */}
          <h2 className="mb-4 text-2xl font-bold leading-tight text-text-dark sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Experimente o Detox Emocional por 14 dias.
          </h2>

          {/* Body Text */}
          <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
            <p className="text-base leading-relaxed text-text-muted sm:text-lg md:text-lg lg:text-xl">
              Se você não sentir nenhuma mudança real na sua vida, devolvemos 100% do seu investimento.
            </p>
            <p className="text-base leading-relaxed text-text-muted sm:text-lg md:text-lg lg:text-xl">
              Essa é a nossa forma de mostrar confiança no que entregamos e dar a você total segurança para dar o
              próximo passo.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] w-full rounded-full bg-gradient-to-r from-primary-brand to-primary-brand-hover px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg lg:text-xl inline-block text-center"
          >
            Quero dar o primeiro passo agora
          </a>
        </div>
      </div>
    </section>
  )
}
