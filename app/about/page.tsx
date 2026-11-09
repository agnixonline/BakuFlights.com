import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Heart, Users, Award, Globe } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: 'About Baku Flights | Your Trusted Travel Partner in Azerbaijan',
  description: 'Learn about Baku Flights - your expert local tour operator offering authentic, unforgettable experiences in Baku and across Azerbaijan since 2018.',
  keywords: 'about Baku Flights, Azerbaijan tour operator, travel company Baku, local tours Azerbaijan',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/baku-travel-team.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
            Your <span className="italic">Journey</span> Starts
            <br />With Local Experts
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We're passionate locals dedicated to sharing the magic of Azerbaijan with travelers from around the world
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Our <span className="italic">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2018, Baku Flights was born from a simple dream: to show the world the incredible 
                  beauty and rich culture of Azerbaijan through the eyes of locals who truly know and love this land.
                </p>
                <p>
                  What started as a small team of three passionate guides has grown into Azerbaijan's most trusted 
                  travel partner, serving thousands of happy travelers from over 50 countries. But we've never lost 
                  sight of what matters most - creating authentic, personal experiences that connect you with the 
                  heart and soul of the Land of Fire.
                </p>
                <p>
                  Every tour we design, every destination we recommend, and every guide we work with reflects our 
                  commitment to showcasing the real Azerbaijan - from ancient petroglyphs to eternal flames, from 
                  bustling bazaars to serene mountain villages.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/baku-old-city-tour-group.jpg"
                alt="Baku Flights tour group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose <span className="italic">Baku Flights</span>
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

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our <span className="italic">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide everything we do, from planning itineraries to welcoming guests
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="font-serif text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="italic">Explore</span> Azerbaijan?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert local guides show you the magic of Baku and beyond. Your adventure awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/tours">
                Browse Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: Users,
    title: 'Local Experts',
    description: 'All our guides are born and raised in Azerbaijan, offering authentic insider knowledge and stories.',
  },
  {
    icon: Award,
    title: 'Top Rated',
    description: '4.9/5 stars from 2,500+ reviews. We\'re consistently ranked as Baku\'s #1 tour operator.',
  },
  {
    icon: Heart,
    title: 'Small Groups',
    description: 'Maximum 12 people per tour ensures personalized attention and an intimate experience.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Served travelers from 50+ countries with multilingual guides (English, Russian, Turkish).',
  },
]

const values = [
  {
    title: 'Authenticity',
    description: 'We showcase the real Azerbaijan - not just tourist hotspots, but hidden gems, local traditions, and genuine cultural experiences that reveal the true spirit of our homeland.',
  },
  {
    title: 'Sustainability',
    description: 'We\'re committed to responsible tourism that protects Azerbaijan\'s natural beauty and cultural heritage while supporting local communities and artisans.',
  },
  {
    title: 'Excellence',
    description: 'From the moment you book to the final goodbye, we\'re dedicated to exceeding your expectations with meticulous planning, expert guidance, and warm Azerbaijani hospitality.',
  },
]

const stats = [
  { value: '6+', label: 'Years Operating' },
  { value: '5,000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Countries Served' },
  { value: '4.9★', label: 'Average Rating' },
]
