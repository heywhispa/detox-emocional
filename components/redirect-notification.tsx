"use client"

import { useEffect } from "react"

interface RedirectNotificationProps {
  url: string
  onClose: () => void
}

export function RedirectNotification({ url, onClose }: RedirectNotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="overflow-hidden rounded-lg bg-virada-text-dark/95 px-4 py-3 shadow-xl backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-virada-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="mb-1 text-sm font-medium text-white">Redirecionando...</p>
            <p className="break-all text-xs text-gray-300">{url}</p>
          </div>
          <button onClick={onClose} className="flex-shrink-0 text-gray-400 hover:text-white transition-colors">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
