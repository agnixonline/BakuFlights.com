// Google Analytics helper
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, eventParams)
  }
}

export function trackPageView(path: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: path,
    })
  }
}

export function trackAffiliateClick(tourKey: string, tourTitle: string) {
  trackEvent("affiliate_click", {
    tour_key: tourKey,
    tour_title: tourTitle,
    timestamp: new Date().toISOString(),
  })
}
