import { ExternalLink } from "lucide-react"
import { toursFor, viatorLink } from "@/lib/viator"

/** Booking cards shown at the end of every guide. */
export function TourCta({ slug, context }: { slug: string; context: string }) {
  const tours = toursFor(`${slug} ${context}`)
  return (
    <section className="not-prose mt-14 rounded-2xl border bg-muted/40 p-6 md:p-8" aria-labelledby="tour-cta-h">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Book your Baku tours</p>
      <h2 id="tour-cta-h" className="font-serif text-3xl font-bold mt-2 mb-2">
        Top tours for this trip
      </h2>
      <p className="text-muted-foreground mb-6">
        Hand-picked tours with free cancellation on most bookings. Check prices and dates on Viator.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {tours.map((tour) => (
          <a
            key={tour.id}
            href={viatorLink(tour.path, `blog-${slug}-end-${tour.id}`)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col overflow-hidden rounded-xl border bg-background shadow-sm transition hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-semibold leading-snug">{tour.title}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{tour.blurb}</p>
              <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Check availability <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        We may earn a small commission if you book through these links, at no extra cost to you.
      </p>
    </section>
  )
}

/** Slim banner shown near the top of every guide. */
export function TourBanner({ slug, context }: { slug: string; context: string }) {
  const [tour] = toursFor(`${slug} ${context}`, 1)
  return (
    <a
      href={viatorLink(tour.path, `blog-${slug}-top-${tour.id}`)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="not-prose mb-10 flex items-center gap-4 rounded-xl border bg-primary/5 p-4 transition hover:bg-primary/10"
    >
      <img src={tour.image} alt="" loading="lazy" className="h-16 w-20 flex-none rounded-lg object-cover" />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Popular with readers</p>
        <p className="font-semibold leading-snug">{tour.title}</p>
      </div>
      <span className="hidden sm:inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
        See tour <ExternalLink className="h-4 w-4" />
      </span>
    </a>
  )
}
