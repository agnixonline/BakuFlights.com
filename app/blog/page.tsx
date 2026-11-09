import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Baku Travel Blog | Tips, Guides & Stories from Azerbaijan",
  description:
    "Discover expert travel guides, budget tips, family activities, adventure sports, and authentic food recommendations for visiting Baku and Azerbaijan.",
  keywords:
    "Baku travel blog, Azerbaijan travel guide, Baku tips, things to do Baku, Baku with kids, budget travel Baku",
}

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/baku-travel-blog-header.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">
            <span className="italic">Travel Stories</span> & Guides
            <br />
            From the Land of Fire
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Expert tips, hidden gems, and unforgettable experiences in Baku
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
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
    </main>
  )
}
