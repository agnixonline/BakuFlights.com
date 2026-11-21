"use client"

import { useEffect } from "react"

/** Official Viator partner widget: live prices, ratings and availability. */
export function ViatorWidget({ widgetRef }: { widgetRef: string }) {
  useEffect(() => {
    const src = "https://www.viator.com/orion/partner/widget.js"
    const old = document.querySelector(`script[src="${src}"]`)
    if (old) old.remove()
    const s = document.createElement("script")
    s.src = src
    s.async = true
    document.body.appendChild(s)
  }, [widgetRef])
  return <div className="not-prose my-8 min-h-[300px]" data-vi-partner-id="P00220435" data-vi-widget-ref={widgetRef} />
}
