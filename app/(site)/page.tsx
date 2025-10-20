import Link from "next/link"
import Image from "next/image"
import PostCard from "@/components/post-card"
import EmailCapture from "@/components/email-capture"
import AffiliateCTA from "@/components/affiliate-cta"
import { getAllPosts } from "@/lib/posts"
import { getTours } from "@/lib/tours"

export default async function Home() {
  const allPosts = await getAllPosts()
  const featuredPosts = allPosts.slice(0, 3)
  const latestPosts = allPosts.slice(0, 6)
  const tours = await getTours()
  const topTours = tours.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Image src="/logo.jpg" alt="BakuFlights" width={64} height={64} className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark text-balance">
              Plan an unforgettable trip to Baku
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Guides, itineraries and day trips—written for first-timers and updated for 2025.
            </p>
            <Link
              href="/guides/baku-first-timer-mistakes"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Read the First-Timer Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark mb-12">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Baku Tours */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark mb-12">Top Baku Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTours.map((tour) => (
              <AffiliateCTA key={tour.key} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/day-trips"
              className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              View All Day Trips
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <EmailCapture />
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/guides"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Browse All Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
