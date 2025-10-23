"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface TimedContentRevealProps {
  children: React.ReactNode
  delaySeconds?: number
}

export default function TimedContentReveal({ children, delaySeconds = 1080 }: TimedContentRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    // Set timeout to reveal content after specified delay
    const timer = setTimeout(() => {
      setIsRevealed(true)
    }, delaySeconds * 1000)

    // Cleanup timeout on unmount
    return () => clearTimeout(timer)
  }, [delaySeconds])

  return (
    <div
      className={`transition-opacity duration-1000 ${isRevealed ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{
        height: isRevealed ? "auto" : "0",
        overflow: isRevealed ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  )
}
