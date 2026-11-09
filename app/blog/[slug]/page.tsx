import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      publishedTime: new Date((post as any).updated ?? post.date).toISOString(),
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `https://www.bakuflights.com/blog/${slug}`
  const shareText = `${post.title} - Read this amazing guide about Baku on Baku Flights!`

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                image: `https://www.bakuflights.com${post.image}`,
                datePublished: new Date(post.date).toISOString(),
                dateModified: new Date((post as any).updated ?? post.date).toISOString(),
                author: { "@type": "Organization", name: "Baku Flights", url: "https://www.bakuflights.com" },
                publisher: { "@type": "Organization", name: "Baku Flights", logo: { "@type": "ImageObject", url: "https://www.bakuflights.com/bakuflights-logo.png" } },
                mainEntityOfPage: `https://www.bakuflights.com/blog/${post.slug}`,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bakuflights.com" },
                  { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bakuflights.com/blog" },
                  { "@type": "ListItem", position: 3, name: post.title, item: `https://www.bakuflights.com/blog/${post.slug}` },
                ],
              },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white max-w-4xl">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            {post.category}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">{post.title}</h1>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <div className="prose prose-lg max-w-none">
            <post.Content />
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-sm font-semibold">Share this article:</span>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Tours CTA */}
          <div className="mt-12 p-8 bg-primary text-primary-foreground rounded-lg text-center">
            <h3 className="font-serif text-3xl font-bold mb-4">Ready to Experience This in Person?</h3>
            <p className="text-lg mb-6 opacity-90">Book your tour with local experts and discover the magic of Baku</p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/tours">Browse Tours</Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            More Travel <span className="italic">Guides</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                    {relatedPost.category}
                  </div>
                  <h3 className="font-serif text-xl font-bold group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
