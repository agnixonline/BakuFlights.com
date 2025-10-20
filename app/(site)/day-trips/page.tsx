import AffiliateCTA from "@/components/affiliate-cta"
import { getTours } from "@/lib/tours"

export default async function DayTripsPage() {
  const tours = await getTours()

  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-dark mb-4">Day Trips from Baku</h1>
          <p className="text-lg text-muted-foreground">Discover the best guided tours and day trips around Baku.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <AffiliateCTA key={tour.key} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
