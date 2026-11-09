import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/destinations" },
  title: 'Destinations in Baku & Azerbaijan | Best Places to Visit',
  description: 'Explore the top destinations in Baku and Azerbaijan - from the ancient Old City to Gobustan\'s prehistoric petroglyphs, eternal flames at Yanar Dag, and the stunning Absheron Peninsula.',
  keywords: 'Baku destinations, Azerbaijan travel, places to visit Baku, Gobustan, Yanar Dag, Absheron Peninsula, Old City Baku',
}

export default function DestinationsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/baku-panorama-destinations.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">
            Discover <span className="italic">Enchanting</span>
            <br />Destinations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            From ancient wonders to natural marvels across the Land of Fire
          </p>
        </div>
      </section>

      {/* Main Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`grid gap-8 md:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative h-96 rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    {destination.location}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    {destination.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {destination.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/tours?destination=${destination.id}`}>
                      View Tours <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Quick <span className="italic">Travel Tips</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {travelTips.map((tip) => (
              <Card key={tip.title}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore These <span className="italic">Amazing</span> Places?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your guided tour today and experience the magic of Azerbaijan with expert local guides
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/tours">
              Browse All Tours <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

const destinations = [
  {
    id: 'baku-old-city',
    title: 'Baku Old City (Icherisheher)',
    location: 'Baku City Center',
    description: 'Step into a living museum at Baku\'s UNESCO-listed Old City, where narrow cobbled streets wind through 12th-century fortress walls. Discover the mysterious Maiden Tower, explore the Palace of the Shirvanshahs, and browse colorful carpet shops in ancient caravanserais.',
    highlights: [
      'Maiden Tower - iconic 12th-century monument with panoramic city views',
      'Palace of Shirvanshahs - stunning medieval royal complex',
      'Miniature Book Museum and artisan workshops',
    ],
    image: '/baku-old-city-maiden-tower.jpg',
  },
  {
    id: 'gobustan',
    title: 'Gobustan National Park',
    location: '60km Southwest of Baku',
    description: 'Journey to an otherworldly landscape where prehistoric humans left their mark 40,000 years ago. Gobustan\'s 6,000+ ancient rock carvings depict hunting scenes, ritual dances, and mysterious symbols. Nearby, bubbling mud volcanoes create a lunar-like terrain you won\'t forget.',
    highlights: [
      'Ancient petroglyphs dating back thousands of years',
      'Bubbling mud volcanoes - Azerbaijan has half the world\'s total!',
      'Modern interactive museum explaining the archaeological significance',
    ],
    image: '/gobustan-petroglyphs-mud-volcanoes.jpg',
  },
  {
    id: 'yanar-dag',
    title: 'Yanar Dag & Fire Temple',
    location: 'Absheron Peninsula',
    description: 'Witness the eternal flames that gave Azerbaijan its nickname "Land of Fire." At Yanar Dag, natural gas blazes continuously from the hillside, while the Ateshgah Fire Temple showcases centuries of fire-worshipping history. These natural phenomena have burned for thousands of years.',
    highlights: [
      'Yanar Dag burning mountain - flames that never go out',
      'Ateshgah Fire Temple - ancient Zoroastrian worship site',
      'Best viewed at sunset when flames shine brightest',
    ],
    image: '/yanar-dag-burning-mountain-flames.jpg',
  },
  {
    id: 'baku-boulevard',
    title: 'Baku Seaside Boulevard',
    location: 'Caspian Sea Waterfront',
    description: 'Stroll along one of the world\'s longest promenades, stretching over 3km along the Caspian Sea. With parks, fountains, the Baku Eye Ferris wheel, and stunning views of the Flame Towers, the Boulevard is where modern Baku comes alive.',
    highlights: [
      'Little Venice canal with gondola rides',
      'Baku Eye Ferris wheel with 360° city views',
      'Carpet Museum and waterfront cafes',
    ],
    image: '/baku-boulevard-promenade.jpg',
  },
  {
    id: 'flame-towers',
    title: 'Flame Towers & Highland Park',
    location: 'Baku Skyline',
    description: 'Baku\'s iconic trio of glass skyscrapers dominate the skyline, illuminating nightly with dazzling LED displays of dancing flames. For the best views, head to Highland Park where you can see the entire city, bay, and towers in one breathtaking panorama.',
    highlights: [
      'Nightly LED light shows on the Flame Towers',
      'Highland Park panoramic viewpoint',
      'Funicular railway ride to the hilltop',
    ],
    image: '/baku-city-flame-towers-night.jpg',
  },
]

const travelTips = [
  {
    title: 'Best Time to Visit',
    description: 'April-June and September-October offer mild weather perfect for sightseeing. Summer (July-Aug) is hot but great for water activities.',
  },
  {
    title: 'Getting Around',
    description: 'Baku has an efficient metro system (0.30 AZN per ride), affordable taxis via Yandex Go app, and most attractions are within walking distance.',
  },
  {
    title: 'Local Currency',
    description: 'Azerbaijan uses the Manat (AZN). Credit cards are widely accepted, but keep cash for markets, street food, and rural destinations.',
  },
]
