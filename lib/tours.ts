import fs from "fs"
import path from "path"

export interface Tour {
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

export async function getTours(): Promise<Tour[]> {
  try {
    const toursPath = path.join(process.cwd(), "data/tours.json")
    if (!fs.existsSync(toursPath)) {
      return getDefaultTours()
    }
    const fileContents = fs.readFileSync(toursPath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error reading tours:", error)
    return getDefaultTours()
  }
}

function getDefaultTours(): Tour[] {
  return [
    {
      key: "gobustan_combo",
      title: "Gobustan, Mud Volcanoes & Absheron Day Trip",
      rating: 4.9,
      reviews: 1400,
      priceFrom: 50,
      duration: "Full day",
      highlights: ["Petroglyphs", "Mud Volcanoes", "Ateshgah & Yanar Dag"],
      viatorUrl: "https://www.viator.com/tours/Baku/Gobustan-Mud-Volcanoes-and-Absheron-Day-Trip/d20-2640GOBUSTAN",
      cta: "Book Now — Free Cancellation",
    },
    {
      key: "city_highlights",
      title: "Baku City Highlights Tour (Old & New Baku)",
      rating: 4.9,
      reviews: 449,
      priceFrom: 45,
      duration: "4 hours",
      highlights: ["Old City", "Flame Towers", "Boulevard"],
      viatorUrl: "https://www.viator.com/tours/Baku/Baku-City-Tour/d20-2640CITYTOUR",
      cta: "Check Availability",
    },
    {
      key: "night_tour",
      title: "Baku Night Tour",
      rating: 5.0,
      reviews: 60,
      priceFrom: 30,
      duration: "2–3 hours",
      highlights: ["City lights", "Panoramic views", "Local cuisine"],
      viatorUrl: "https://www.viator.com/tours/Baku/Baku-Night-Tour/d20-2640NIGHTTOUR",
      cta: "See Night Tour Options",
    },
    {
      key: "absheron_peninsula",
      title: "Absheron Peninsula & Fire Mountain Tour",
      rating: 4.8,
      reviews: 320,
      priceFrom: 55,
      duration: "Full day",
      highlights: ["Yanar Dag", "Ateshgah Temple", "Baku Boulevard"],
      viatorUrl: "https://www.viator.com/tours/Baku/Absheron-Peninsula-Tour/d20-2640ABSHERON",
      cta: "Book Now",
    },
  ]
}
