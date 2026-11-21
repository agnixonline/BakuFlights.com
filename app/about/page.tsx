import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen, ShieldCheck, Compass, RefreshCw } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: 'About Baku Flights | Independent Baku & Azerbaijan Travel Guide',
  description: 'Baku Flights is an independent travel guide to Baku and Azerbaijan: practical guides, itineraries and hand-picked tours you can book with trusted partners.',
  keywords: 'about Baku Flights, Baku travel guide, Azerbaijan travel guide, Baku tours',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[460px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/baku-flame-towers-skyline-sunset.jpg')" }}>
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
            Plan a Better Trip to <span className="italic">Baku</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Honest, practical travel guides to Baku and Azerbaijan, and the best tours to book when you get there.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                What is <span className="italic">Baku Flights?</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Baku Flights is an independent travel guide to Baku and Azerbaijan. We write clear, up-to-date guides
                  on everything you need to plan a trip: visas, getting from the airport, the weather, costs, where to
                  stay and what to see.
                </p>
                <p>
                  We don&apos;t run tours ourselves. Instead, we pick the best-reviewed tours for Baku&apos;s top sights
                  and link to them on Viator, a trusted booking platform where you can read real traveller reviews,
                  compare prices and choose tours with free cancellation.
                </p>
                <p>
                  If you book through our links, we may earn a small commission at no extra cost to you. It helps us
                  keep the guides free and up to date.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/baku-old-city-maiden-tower.jpg" alt="Maiden Tower in Baku's Old City" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            How We <span className="italic">Help</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="italic">Explore</span> Baku?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with our guides, then book the tours that fit your trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/tours">
                Browse Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">Travel Guides</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: BookOpen,
    title: 'Practical Guides',
    description: 'Step-by-step guides to visas, transport, costs and the best time to visit, written for first-time visitors.',
  },
  {
    icon: Compass,
    title: 'Hand-Picked Tours',
    description: 'We highlight the tours that cover Baku\'s best sights, from the Old City to Gobustan and the fire mountains.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Booking',
    description: 'Tours are booked on Viator, with real traveller reviews, secure payment and free cancellation on most tours.',
  },
  {
    icon: RefreshCw,
    title: 'Kept Up to Date',
    description: 'We update our guides when rules and prices change, such as the Azerbaijan e-visa and the Baku to Tbilisi train.',
  },
]
