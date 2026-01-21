import type { Metadata } from "next"
import Script from "next/script"
import { VSLHero } from "@/components/vsl-hero"

export const metadata: Metadata = {
  title: "Eu Sou a Mudança",
  description:
    "Assista esse vídeo e entenda por que você sempre volta pro mesmo lugar — e como interromper esse padrão de uma vez por todas.",
  openGraph: {
    title: "Eu Sou a Mudança",
    description:
      "Assista esse vídeo e entenda por que você sempre volta pro mesmo lugar — e como interromper esse padrão de uma vez por todas.",
    siteName: "Eu Sou a Mudança",
  },
}

export default function VSLPage() {
  return (
    <>
      <Script id="vturb-plt" strategy="beforeInteractive">
        {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
      </Script>
      <link
        rel="preload"
        href="https://scripts.converteai.net/8d3d0868-e01b-41a4-a8e9-cd22cc3cd8d6/players/696be1e410d72bdc9f339f8b/v4/player.js"
        as="script"
      />
      <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
      <link
        rel="preload"
        href="https://cdn.converteai.net/8d3d0868-e01b-41a4-a8e9-cd22cc3cd8d6/696bdfcda4304f1d77774eaa/main.m3u8"
        as="fetch"
      />
      <link rel="dns-prefetch" href="https://cdn.converteai.net" />
      <link rel="dns-prefetch" href="https://scripts.converteai.net" />
      <link rel="dns-prefetch" href="https://images.converteai.net" />
      <link rel="dns-prefetch" href="https://api.vturb.com.br" />

      <main>
        <VSLHero />
      </main>
    </>
  )
}
