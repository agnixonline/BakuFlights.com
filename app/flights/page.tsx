import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Clock, Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  alternates: { canonical: "/flights" },
  title: "Flight Schedules to Baku | Direct Flights from Major Cities",
  description:
    "Find direct flights to Baku from Pakistan, India, UAE, Turkey, and other major cities. View flight times, airlines, and book your trip to Azerbaijan.",
}

export default function FlightsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="h-4 w-4" />
              Live Flight Schedules
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Direct Flights to
              <br />
              <span className="italic text-primary">Baku, Azerbaijan</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover convenient flight options from major cities worldwide. Find the best routes, airlines, and
              schedules for your journey to the Land of Fire.
            </p>
          </div>
        </div>
      </section>

      {/* Flight Routes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Popular Flight Routes to <span className="italic">Baku</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple daily flights from major international hubs make reaching Baku easier than ever
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {flightRoutes.map((route) => (
              <Card key={route.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{route.city}</CardTitle>
                        <p className="text-sm text-muted-foreground">{route.country}</p>
                      </div>
                    </div>
                    {route.direct && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Direct
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Flight Duration */}
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Flight Duration</p>
                        <p className="text-sm text-muted-foreground">{route.duration}</p>
                      </div>
                    </div>

                    {/* Frequency */}
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Frequency</p>
                        <p className="text-sm text-muted-foreground">{route.frequency}</p>
                      </div>
                    </div>

                    {/* Airlines */}
                    <div className="flex items-center gap-3">
                      <Plane className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Airlines</p>
                        <p className="text-sm text-muted-foreground">{route.airlines.join(", ")}</p>
                      </div>
                    </div>

                    {/* Estimated Price */}
                    <div className="pt-4 border-t">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-muted-foreground">From</span>
                        <span className="text-2xl font-bold text-primary">${route.priceFrom}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Round trip estimate</p>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={route.searchLink} target="_blank" rel="noopener noreferrer">
                        Search Flights <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Hubs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Connect Through <span className="italic">Major Hubs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Many cities connect to Baku via convenient one-stop routes through these major airports
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {connectingHubs.map((hub) => (
              <Card key={hub.city} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{hub.city}</CardTitle>
                  <p className="text-sm text-muted-foreground">{hub.airport}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{hub.connections}</p>
                  <Badge variant="outline">{hub.airlines}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="italic">Booking Tips</span> for Your Flight
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {bookingTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                        {index + 1}
                      </span>
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="italic">Book</span> Your Trip?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Combine your flights with our curated tours for the ultimate Baku experience
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/tours">
              Explore Tour Packages <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

// Flight routes data
const flightRoutes = [
  {
    id: "dubai-baku",
    city: "Dubai",
    country: "United Arab Emirates",
    duration: "2h 45m",
    frequency: "Multiple daily flights",
    airlines: ["Azerbaijan Airlines", "FlyDubai", "Emirates"],
    direct: true,
    priceFrom: 250,
    searchLink: "https://www.skyscanner.com/transport/flights/dxb/gyd/",
  },
  {
    id: "istanbul-baku",
    city: "Istanbul",
    country: "Turkey",
    duration: "2h 30m",
    frequency: "Daily flights",
    airlines: ["Turkish Airlines", "Azerbaijan Airlines", "Pegasus"],
    direct: true,
    priceFrom: 180,
    searchLink: "https://www.skyscanner.com/transport/flights/ista/gyd/",
  },
  {
    id: "moscow-baku",
    city: "Moscow",
    country: "Russia",
    duration: "3h",
    frequency: "Multiple daily flights",
    airlines: ["Azerbaijan Airlines", "Aeroflot", "S7 Airlines"],
    direct: true,
    priceFrom: 220,
    searchLink: "https://www.skyscanner.com/transport/flights/mosc/gyd/",
  },
  {
    id: "karachi-baku",
    city: "Karachi",
    country: "Pakistan",
    duration: "3h 30m",
    frequency: "3-4 flights per week",
    airlines: ["Azerbaijan Airlines", "Pakistan International"],
    direct: true,
    priceFrom: 320,
    searchLink: "https://www.skyscanner.com/transport/flights/khi/gyd/",
  },
  {
    id: "lahore-baku",
    city: "Lahore",
    country: "Pakistan",
    duration: "4h",
    frequency: "2-3 flights per week",
    airlines: ["Azerbaijan Airlines"],
    direct: true,
    priceFrom: 340,
    searchLink: "https://www.skyscanner.com/transport/flights/lhe/gyd/",
  },
  {
    id: "islamabad-baku",
    city: "Islamabad",
    country: "Pakistan",
    duration: "3h 45m",
    frequency: "2-3 flights per week",
    airlines: ["Azerbaijan Airlines"],
    direct: true,
    priceFrom: 330,
    searchLink: "https://www.skyscanner.com/transport/flights/isb/gyd/",
  },
  {
    id: "delhi-baku",
    city: "Delhi",
    country: "India",
    duration: "4h 30m",
    frequency: "4-5 flights per week",
    airlines: ["Azerbaijan Airlines", "IndiGo (via Dubai)"],
    direct: true,
    priceFrom: 380,
    searchLink: "https://www.skyscanner.com/transport/flights/del/gyd/",
  },
  {
    id: "mumbai-baku",
    city: "Mumbai",
    country: "India",
    duration: "5h",
    frequency: "3-4 flights per week",
    airlines: ["Azerbaijan Airlines", "connecting flights"],
    direct: true,
    priceFrom: 400,
    searchLink: "https://www.skyscanner.com/transport/flights/bom/gyd/",
  },
  {
    id: "tbilisi-baku",
    city: "Tbilisi",
    country: "Georgia",
    duration: "45m",
    frequency: "Multiple daily flights",
    airlines: ["Azerbaijan Airlines", "Georgian Airways"],
    direct: true,
    priceFrom: 80,
    searchLink: "https://www.skyscanner.com/transport/flights/tbs/gyd/",
  },
]

const connectingHubs = [
  {
    city: "Dubai",
    airport: "DXB",
    connections: "Major hub for Asia, Africa, Australia",
    airlines: "50+ airlines",
  },
  {
    city: "Istanbul",
    airport: "IST",
    connections: "Gateway to Europe and Middle East",
    airlines: "40+ airlines",
  },
  {
    city: "Moscow",
    airport: "SVO/DME",
    connections: "Connections across Russia and Asia",
    airlines: "30+ airlines",
  },
  {
    city: "Doha",
    airport: "DOH",
    connections: "Asia-Pacific and Americas",
    airlines: "Qatar Airways hub",
  },
]

const bookingTips = [
  {
    title: "Book in Advance",
    description:
      "Flights to Baku are often cheaper when booked 2-3 months ahead. Mid-week departures typically offer better rates than weekends.",
  },
  {
    title: "Best Travel Seasons",
    description:
      "Spring (April-May) and Fall (September-October) offer pleasant weather and moderate prices. Summer is peak season with higher fares.",
  },
  {
    title: "Visa on Arrival",
    description:
      "Many nationalities can get e-visas for Azerbaijan online in 3 days. Check requirements before booking your flight.",
  },
  {
    title: "Airport Transport",
    description:
      "Heydar Aliyev International Airport is 25km from downtown. Airport buses, taxis, and transfers are readily available.",
  },
]
