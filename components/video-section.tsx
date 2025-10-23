"use client"
import Script from "next/script"

export default function VideoSection() {
  return (
    <section className="bg-background py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Script src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js" strategy="lazyOnload" />

          <div id="ifr_68f964f2c376aaf61f78cfc5_wrapper" style={{ margin: "0 auto", width: "100%" }}>
            <div style={{ position: "relative", padding: "56.25% 0 0 0" }} id="ifr_68f964f2c376aaf61f78cfc5_aspect">
              <iframe
                frameBorder="0"
                allowFullScreen
                src="about:blank"
                id="ifr_68f964f2c376aaf61f78cfc5"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                referrerPolicy="origin"
                onLoad={(e) => {
                  const iframe = e.currentTarget
                  iframe.onload = null
                  iframe.src =
                    "https://scripts.converteai.net/8d3d0868-e01b-41a4-a8e9-cd22cc3cd8d6/players/68f964f2c376aaf61f78cfc5/v4/embed.html" +
                    (location.search || "?") +
                    "&vl=" +
                    encodeURIComponent(location.href)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
