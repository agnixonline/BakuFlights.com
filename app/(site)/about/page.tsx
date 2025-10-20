import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-dark mb-4">About BakuFlights</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              BakuFlights.com is your go-to resource for planning an unforgettable trip to Baku, Azerbaijan. We create
              detailed, practical guides for first-time visitors and seasoned travelers alike.
            </p>

            <h2 className="text-2xl font-bold text-dark">Our Mission</h2>
            <p className="text-muted-foreground">
              We believe travel should be accessible, well-informed, and inspiring. Our guides are written by travelers
              who have explored Baku thoroughly, tested recommendations, and gathered insider tips to help you make the
              most of your visit.
            </p>

            <h2 className="text-2xl font-bold text-dark">What We Cover</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Detailed itineraries (3-day, 5-day, and longer)</li>
              <li>Top attractions and hidden gems</li>
              <li>Day trips and excursions</li>
              <li>Practical travel tips (visas, transport, accommodation)</li>
              <li>Curated tours and experiences</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark">Affiliate Disclosure</h2>
            <p className="text-muted-foreground">
              BakuFlights.com participates in affiliate programs, including Viator. When you book a tour through our
              links, we may earn a small commission at no extra cost to you. This helps us maintain and improve our
              guides. Read our full{" "}
              <Link href="/disclosure" className="text-primary hover:underline">
                affiliate disclosure
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-dark">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions or suggestions? We'd love to hear from you.{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
