import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, Clock, Users, MapPin } from "lucide-react"
import { ViatorWidget } from "@/components/viator-widget"
import { VIATOR_WIDGETS } from "@/lib/viator"

export const metadata = {
  alternates: { canonical: "/tours" },
  title: "Baku Tours & Activities | Book Your Azerbaijan Adventure",
  description:
    "Discover the best tours in Baku and Azerbaijan. From Old City walks to Gobustan excursions, find your perfect experience.",
}

export default function ToursPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-muted">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/baku-tours-tourist-group.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Tours & <span className="italic">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Curated adventures showcasing the best of Baku and Azerbaijan
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Live Prices &amp; Real Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our top Baku tours with today&apos;s prices, traveller ratings and availability, straight from Viator.
            </p>
          </div>
          <ViatorWidget widgetRef={VIATOR_WIDGETS.topTours} />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {tour.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {tour.badge}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {tour.location}
                  </div>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                  <p className="text-sm font-medium text-primary">See prices, reviews and free cancellation options on Viator</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href={tour.viatorUrl} target="_blank" rel="noopener noreferrer sponsored">
                      Check Availability <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">More Things to Do in Baku</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Browse more top-rated tours and activities across Baku.</p>
          </div>
          <ViatorWidget widgetRef={VIATOR_WIDGETS.allBaku} />
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Not Sure Which Tour to Book?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Compare the best Baku tours and day trips, and find the right one for your trip.
          </p>
          <Button size="lg" asChild>
            <Link href="/blog/best-baku-tours">
              See the Best Baku Tours <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

const allTours = [
  {
    id: "baku-city-tour",
    title: "Baku City & Old Town Tour",
    location: "Baku City Center",
    description: "Explore the ancient walled city, Maiden Tower, and modern Flame Towers in one unforgettable day.",
    badge: "Most Popular",
    image: "/baku-old-city-maiden-tower.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Baku-Old-Town-Walking-Tour/d22974-13710P4?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE&campaign=tours-page",
  },
  {
    id: "gobustan-mud-volcanoes",
    title: "Gobustan & Mud Volcanoes",
    location: "Gobustan National Park",
    description: "Visit ancient rock art and bubbling mud volcanoes in this otherworldly landscape.",
    image: "/gobustan-petroglyphs-mud-volcanoes.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Day-Trip-Baku/d22974-63022P1?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE&campaign=tours-page",
  },
  {
    id: "fire-temple-yanardag",
    title: "Fire Temple & Burning Mountain",
    location: "Absheron Peninsula",
    description: "Witness the eternal flames at Ateshgah Temple and Yanar Dag burning hillside.",
    image: "/yanar-dag-burning-mountain-flames.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Fire-Temple-and-Fire-Mountain-Private-Tour/d22974-75513P3?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE&campaign=tours-page",
  },
  {
    id: "baku-adventure",
    title: "Shahdag, Quba & Candy Cane Mountains",
    location: "Guba & Shahdag",
    description: "Day trip into the Caucasus to Quba, the striped Candy Cane mountains and the Shahdag mountain resort.",
    badge: "Adventure",
    image: "/baku-cycling-boulevard-adventure.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Azerbaijans-Alpine-Odyssey-Shahdag-and-Qusar-Exploration/d22974-90200P39?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE&campaign=tours-page",
  },
  {
    id: "private-city-baku",
    title: "Private Baku City Tour",
    location: "Baku City",
    description:
      "See the Old City, Flame Towers, Boulevard and Heydar Aliyev Center at your own pace with a private guide. Great for families.",
    image: "/baku-city-flame-towers-night.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Baku-Private-City-Tour/d22974-75534P3?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE&campaign=tours-page",
  },
  {
    id: "food-tour-baku",
    title: "Culinary Tour: Best of Baku Food",
    location: "Baku Food Scene",
    description: "Sample kebabs, plov, local sweets, and tea houses. A feast for your senses!",
    badge: "Foodie Favorite",
    image: "/azerbaijani-food-kebab-plov.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Free-Product/d22974-176027P10?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE&campaign=tours-page",
  },
]
