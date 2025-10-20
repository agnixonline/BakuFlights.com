"use client"

import { Star } from "lucide-react"
import { trackAffiliateClick } from "@/lib/analytics"

interface AffiliateCTAProps {
  tour: {
    key: string
    title: string
    rating: number
    reviews: number
    priceFrom: number
    duration: string
    highlights: string[]
    viatorUrl: string
    cta: string
  }
}

export default function AffiliateCTA({ tour }: AffiliateCTAProps) {
  const affiliateId = process.env.NEXT_PUBLIC_VIATOR_AFFILIATE_ID || "default"
  const affiliateUrl = `${tour.viatorUrl}${tour.viatorUrl.includes("?") ? "&" : "?"}aid=${affiliateId}`

  const handleClick = () => {
    trackAffiliateClick(tour.key, tour.title)
  }

  return (
    <div className="border border-border rounded-lg p-6 bg-muted/50 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-dark flex-1">{tour.title}</h3>
        <div className="flex items-center gap-1 ml-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(tour.rating) ? "fill-accent text-accent" : "text-border"}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({tour.reviews})</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-muted-foreground">From</span>
          <span className="text-2xl font-bold text-primary">${tour.priceFrom}</span>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">Duration: {tour.duration}</p>
          <p className="text-xs">Includes:</p>
          <ul className="list-disc list-inside space-y-0.5 mt-1">
            {tour.highlights.map((highlight) => (
              <li key={highlight} className="text-xs">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="affiliate-cta w-full text-center block mt-4"
          onClick={handleClick}
        >
          {tour.cta}
        </a>
      </div>

      <p className="text-xs text-muted-foreground mt-3 text-center">Affiliate link • Free cancellation</p>
    </div>
  )
}
