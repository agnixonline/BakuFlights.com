"use client"

import { useEffect } from "react"

export const VIATOR_WIDGETS = {
  topTours: "W-23e687ae-e0f8-44e3-b993-97fd0a3b4c86",
  allBaku: "W-637a2665-56e4-49ec-8dc8-0250b17466f2",
}

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
