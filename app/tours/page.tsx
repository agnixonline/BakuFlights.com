import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, Clock, Users, MapPin } from "lucide-react"

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
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${tour.price}
                  </div>
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
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {tour.groupSize}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-sm text-muted-foreground">({tour.reviews} reviews)</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href={tour.viatorUrl} target="_blank" rel="noopener noreferrer">
                      Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contact us for custom tours and personalized itineraries tailored to your interests.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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
    price: 45,
    duration: "8 hours",
    groupSize: "Small group",
    rating: 4.9,
    reviews: 324,
    badge: "Most Popular",
    image: "/baku-old-city-maiden-tower.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Baku-Old-Town-Walking-Tour/d22974-13710P4?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE",
  },
  {
    id: "gobustan-mud-volcanoes",
    title: "Gobustan & Mud Volcanoes",
    location: "Gobustan National Park",
    description: "Visit ancient rock art and bubbling mud volcanoes in this otherworldly landscape.",
    price: 55,
    duration: "6 hours",
    groupSize: "Small group",
    rating: 4.8,
    reviews: 287,
    image: "/gobustan-petroglyphs-mud-volcanoes.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Day-Trip-Baku/d22974-63022P1?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE",
  },
  {
    id: "fire-temple-yanardag",
    title: "Fire Temple & Burning Mountain",
    location: "Absheron Peninsula",
    description: "Witness the eternal flames at Ateshgah Temple and Yanar Dag burning hillside.",
    price: 40,
    duration: "5 hours",
    groupSize: "Private tour",
    rating: 4.7,
    reviews: 213,
    image: "/yanar-dag-burning-mountain-flames.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Fire-Temple-and-Fire-Mountain-Private-Tour/d22974-75513P3?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE",
  },
  {
    id: "baku-adventure",
    title: "Guba Shahdag Winter Adventure",
    location: "Guba & Shahdag",
    description: "Discover nature's winter wonderland with hiking through mountains and scenic landscapes.",
    price: 75,
    duration: "Full day",
    groupSize: "Small group",
    rating: 4.9,
    reviews: 156,
    badge: "Adventure",
    image: "/baku-cycling-boulevard-adventure.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Guba-Shahdag-Adventure-Discover-Natures-Winter-Wonderland/d22974-441116P7?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE",
  },
  {
    id: "family-friendly-baku",
    title: "Full Day Kids Entertainment Tour",
    location: "Baku City",
    description:
      "Private full-day tour designed for families with children featuring fun activities and entertainment.",
    price: 50,
    duration: "Full day",
    groupSize: "Private tour",
    rating: 4.8,
    reviews: 198,
    image: "/baku-ferris-wheel-family.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/A-Full-Day-Private-Kids-Entertaintment-Tour-in-Baku/d22974-372591P37?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE",
  },
  {
    id: "food-tour-baku",
    title: "Culinary Tour: Best of Baku Food",
    location: "Baku Food Scene",
    description: "Sample kebabs, plov, local sweets, and tea houses. A feast for your senses!",
    price: 60,
    duration: "4 hours",
    groupSize: "Small group",
    rating: 4.9,
    reviews: 241,
    badge: "Foodie Favorite",
    image: "/azerbaijani-food-kebab-plov.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Free-Product/d22974-176027P10?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE",
  },
]
