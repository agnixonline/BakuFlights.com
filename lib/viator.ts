// Viator affiliate tours used across the site. `campaign` tags each link so the
// Viator Partner dashboard shows which page and placement produced the click.
const BASE_PARAMS = "pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE"

export type ViatorTour = {
  id: string
  title: string
  blurb: string
  image: string
  path: string
  tags: string[]
}

export const viatorTours: ViatorTour[] = [
  {
    id: "old-town",
    title: "Baku Old Town Walking Tour",
    blurb: "The UNESCO Old City, Maiden Tower and Shirvanshahs' Palace with a local guide.",
    image: "/baku-old-city-maiden-tower.jpg",
    path: "/tours/Baku/Baku-Old-Town-Walking-Tour/d22974-13710P4",
    tags: ["old", "city", "itinerary", "first", "walk", "48", "bucket", "weather", "expensive", "budget", "visa", "train"],
  },
  {
    id: "gobustan",
    title: "Gobustan Rock Art & Mud Volcanoes Day Trip",
    blurb: "Ancient petroglyphs and bubbling mud volcanoes, about an hour from Baku.",
    image: "/gobustan-petroglyphs-mud-volcanoes.jpg",
    path: "/tours/Baku/Day-Trip-Baku/d22974-63022P1",
    tags: ["gobustan", "mud", "day-trip", "itinerary", "adventure", "bucket", "things", "weather", "expensive", "train"],
  },
  {
    id: "fire",
    title: "Fire Temple & Burning Mountain Tour",
    blurb: "Ateshgah Fire Temple and Yanar Dag, the hillside that has burned for centuries.",
    image: "/yanar-dag-burning-mountain-flames.jpg",
    path: "/tours/Baku/Fire-Temple-and-Fire-Mountain-Private-Tour/d22974-75513P3",
    tags: ["fire", "yanar", "ateshgah", "absheron", "itinerary", "bucket", "things", "visa", "expensive"],
  },
  {
    id: "guba",
    title: "Shahdag, Quba & Candy Cane Mountains Day Trip",
    blurb: "Mountain villages, forests and snow in winter, in the Caucasus north of Baku.",
    image: "/gobustan-adventure-hiking.jpg",
    path: "/tours/Baku/Azerbaijans-Alpine-Odyssey-Shahdag-and-Qusar-Exploration/d22974-90200P39",
    tags: ["guba", "quba", "shahdag", "mountain", "sheki", "gabala", "adventure", "winter", "weather", "sports"],
  },
  {
    id: "city",
    title: "Private Baku City Tour",
    blurb: "Old City, Flame Towers, the Boulevard and Heydar Aliyev Center at your own pace with a private guide.",
    image: "/baku-city-flame-towers-night.jpg",
    path: "/tours/Baku/Baku-Private-City-Tour/d22974-75534P3",
    tags: ["kids", "family", "children", "private", "layover", "city", "first"],
  },
  {
    id: "food",
    title: "Baku Street Food Tour",
    blurb: "Plov, qutab, kebabs and tea-house sweets with a local food guide.",
    image: "/azerbaijani-food-kebab-plov.jpg",
    path: "/tours/Baku/Free-Product/d22974-176027P10",
    tags: ["food", "eat", "restaurant", "cuisine", "expensive", "budget"],
  },
]

export function viatorLink(path: string, campaign: string) {
  const c = campaign.toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 60)
  return `https://www.viator.com${path}?${BASE_PARAMS}&campaign=${c}`
}

/** Picks the most relevant tours for a page from its slug, title and category. */
export function toursFor(text: string, count = 3): ViatorTour[] {
  const t = text.toLowerCase()
  const scored = viatorTours
    .map((tour, i) => ({ tour, i, score: tour.tags.filter((tag) => t.includes(tag)).length }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
  return scored.slice(0, count).map((s) => s.tour)
}

/** Official Viator widgets created in the partner dashboard. */
export const VIATOR_WIDGETS = {
  topTours: "W-23e687ae-e0f8-44e3-b993-97fd0a3b4c86",
  allBaku: "W-637a2665-56e4-49ec-8dc8-0250b17466f2",
}
