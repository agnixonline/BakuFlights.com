import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, MapPin, Clock, Users } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/baku-flame-towers-skyline-sunset.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
            Discover Your
            <br />
            <span className="italic">Dream Adventure Today</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pretty">
            Explore the ancient wonders and modern marvels of Baku, Azerbaijan – where fire meets the Caspian Sea and
            history blends with innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/tours">
                Explore Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link href="/destinations">View Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Flight Routes Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Find <span className="italic">Direct Flights</span> to Baku
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Convenient connections from major cities worldwide to Azerbaijan's capital
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>From Pakistan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Direct flights from Karachi, Lahore, and Islamabad</p>
                <p className="text-2xl font-bold text-primary mb-2">3-4h</p>
                <p className="text-xs text-muted-foreground mb-4">Flight duration</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/flights#pakistan">View Flights</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>From India</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Multiple weekly flights from Delhi and Mumbai</p>
                <p className="text-2xl font-bold text-primary mb-2">4-5h</p>
                <p className="text-xs text-muted-foreground mb-4">Flight duration</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/flights#india">View Flights</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>From UAE & Turkey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Daily flights from Dubai, Abu Dhabi, and Istanbul</p>
                <p className="text-2xl font-bold text-primary mb-2">2-3h</p>
                <p className="text-xs text-muted-foreground mb-4">Flight duration</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/flights#middle-east">View Flights</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/flights">
                View All Flight Routes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Your <span className="italic">Travel Guide</span> to
              <br />
              Unforgettable Journeys
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From ancient petroglyphs to eternal flames, discover curated experiences that showcase the best of
              Azerbaijan's "Land of Fire"
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
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
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {tour.groupSize}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
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

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/tours">
                View All Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Discover Your Next
              <br />
              <span className="italic">Dream Destination</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {destinations.map((dest) => (
              <Link key={dest.id} href={dest.href} className="group relative h-96 overflow-hidden rounded-lg">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">{dest.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">{dest.title}</h3>
                  <p className="text-sm text-white/90">{dest.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="italic">Traveler Stories</span> & Journeys
              <br />
              That Inspire
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{post.category}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="italic">Explore?</span> Start
            <br />
            Your Journey Today!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your perfect tour with expert local guides, convenient hotel pickup, and unforgettable experiences in
            the Land of Fire.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/tours">
              Plan Your Trip <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

const featuredTours = [
  {
    id: "baku-city-tour",
    title: "Baku City & Old Town Tour",
    description: "Explore the ancient walled city, Maiden Tower, and modern Flame Towers in one unforgettable day.",
    price: 45,
    duration: "8 hours",
    groupSize: "Small group",
    rating: 4.9,
    reviews: 324,
    image: "/baku-old-city-maiden-tower.jpg",
    viatorUrl:
      "https://www.viator.com/tours/Baku/Baku-Old-Town-Walking-Tour/d22974-13710P4?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE",
  },
  {
    id: "gobustan-mud-volcanoes",
    title: "Gobustan & Mud Volcanoes",
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
]

const destinations = [
  {
    id: "baku",
    title: "Baku Highlights",
    location: "Baku City",
    description: "Ancient walled city, modern skyline, Caspian waterfront",
    image: "/baku-city-flame-towers-night.jpg",
    href: "/destinations/baku",
  },
  {
    id: "gobustan",
    title: "Gobustan National Park",
    location: "70km from Baku",
    description: "Prehistoric rock art and volcanic landscapes",
    image: "/gobustan-rock-art-petroglyphs.jpg",
    href: "/destinations/gobustan",
  },
  {
    id: "absheron",
    title: "Absheron Peninsula",
    location: "Baku Outskirts",
    description: "Fire temples, eternal flames, and seaside villages",
    image: "/ateshgah-fire-temple-azerbaijan.jpg",
    href: "/destinations/absheron",
  },
]

const blogPosts = [
  {
    slug: "bucket-list",
    title: "Baku Bucket List: 10 Must-See Sights",
    category: "Travel Tips",
    excerpt: "From the ancient Old City to eternal flames, discover the top experiences in Azerbaijan's capital.",
    image: "/baku-highland-park-view.jpg",
  },
  {
    slug: "food-guide",
    title: "Where to Eat in Baku",
    category: "Local Food",
    excerpt: "Discover the best restaurants, street food, and traditional cafes serving authentic Azerbaijani cuisine.",
    image: "/azerbaijani-food-plov-kebab.jpg",
  },
  {
    slug: "budget-travel",
    title: "Baku on a Budget",
    category: "Budget Travel",
    excerpt: "Experience the city without breaking the bank with our money-saving tips and cheap eats guide.",
    image: "/baku-boulevard-promenade.jpg",
  },
]

export const metadata = {
  alternates: { canonical: '/' },
}
