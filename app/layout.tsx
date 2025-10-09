import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Detox Emocional 2.0 | Eu Sou a Mudança",
  description:
    "Transforme sua vida em 21 dias com o Detox Emocional 2.0. Liberte-se de padrões emocionais limitantes e descubra seu verdadeiro potencial.",
  metadataBase: new URL("https://www.eusouamudanca.com"),
  openGraph: {
    title: "Detox Emocional 2.0 | Eu Sou a Mudança",
    description:
      "Transforme sua vida em 21 dias com o Detox Emocional 2.0. Liberte-se de padrões emocionais limitantes e descubra seu verdadeiro potencial.",
    url: "https://www.eusouamudanca.com/detox-emocional",
    siteName: "Eu Sou a Mudança",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detox Emocional 2.0 | Eu Sou a Mudança",
    description:
      "Transforme sua vida em 21 dias com o Detox Emocional 2.0. Liberte-se de padrões emocionais limitantes e descubra seu verdadeiro potencial.",
  },
  icons: {
    icon: "/favicon.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5364LNX');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5364LNX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

        <Script id="utm-tracking" strategy="lazyOnload">
          {`
            (function () {
              let parametros = ["utm_source"];
              const url = new URL(window.location.href);
              const params = new URLSearchParams(url.search);
              for (const [key] of params) {
                if (!parametros.includes(key)) {
                  parametros.push(key);
                }
              }
              const urlParamsCapt = new URLSearchParams(window.location.search);
              const urlParamsCaptReferrer = new URLSearchParams(document.referrer.split('?')[1] || '');
              let utms = {};
              parametros.forEach(el => {
                if (el === "utm_source") {
                  utms[el] = urlParamsCapt.get(el) ?? (document.referrer ? (urlParamsCaptReferrer.get(el) ?? new URL(document.referrer).hostname) : "direto");
                } else {
                  utms[el] = urlParamsCapt.get(el) ?? (urlParamsCaptReferrer.get(el) ?? "");
                }
              });
              let scks = Object.values(utms).filter(value => value !== "");
              let currentSckValues = [];
              if (urlParamsCapt.get('sck')) {
                currentSckValues = urlParamsCapt.get('sck').split('|');
              }
              scks = scks.filter(value => !currentSckValues.includes(value));
              const updateLinks = (el, elURL) => {
                const elSearchParams = new URLSearchParams(elURL.search);
                let modified = false;
                for (let key in utms) {
                  if (!elSearchParams.has(key)) {
                    elSearchParams.append(key, utms[key]);
                    modified = true;
                  }
                }
                if (!elSearchParams.has('sck') && scks.length > 0) {
                  elSearchParams.append('sck', scks.join('|'));
                  modified = true;
                }
                if (modified) {
                  return elURL.origin + elURL.pathname + "?" + elSearchParams.toString();
                }
                return el.href;
              };
              document.querySelectorAll('a').forEach(el => {
                const elURL = new URL(el.href);
                if (!elURL.hash) {
                  el.href = updateLinks(el, elURL);
                }
              });
              document.querySelectorAll('iframe').forEach(iframe => {
                let actualSrc = iframe.hasAttribute('data-src') ? iframe.getAttribute('data-src') : iframe.src;
                if (actualSrc) {
                  const iframeURL = new URL(actualSrc);
                  if (iframe.hasAttribute('data-src')) {
                    iframe.setAttribute('data-src', updateLinks(iframe, iframeURL));
                  } else {
                    iframe.src = updateLinks(iframe, iframeURL);
                  }
                }
              });
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
