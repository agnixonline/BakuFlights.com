import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import Breadcrumbs from "@/components/breadcrumbs"
import Notice from "@/components/notice"
import AffiliateCTA from "@/components/affiliate-cta"
import { getTours } from "@/lib/tours"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: ["BakuFlights.com"],
      images: [
        {
          url: post.coverImage || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://bakuflights.com/guides/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)
  const tours = await getTours()

  if (!post) {
    notFound()
  }

  // Extract headings for TOC
  const headings = post.content
    .split("\n")
    .filter((line) => line.startsWith("##"))
    .map((line) => ({
      text: line.replace(/^##\s+/, ""),
      id: line
        .replace(/^##\s+/, "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, ""),
    }))

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-muted overflow-hidden">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Guides", href: "/guides" },
              { label: post.title, href: `/guides/${post.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{post.readingTime} min read</span>
                <span className="text-sm text-muted-foreground">•</span>
                <Link
                  href={`/guides?category=${post.category}`}
                  className="text-sm font-medium text-primary hover:underline capitalize"
                >
                  {post.category.replace("-", " ")}
                </Link>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none mb-12 space-y-6">
                {post.content.split("\n\n").map((paragraph, idx) => {
                  if (paragraph.startsWith("##")) {
                    const heading = paragraph.replace(/^##\s+/, "")
                    return (
                      <h2
                        key={idx}
                        id={heading.toLowerCase().replace(/\s+/g, "-")}
                        className="text-2xl font-bold text-dark mt-8 mb-4"
                      >
                        {heading}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("###")) {
                    const heading = paragraph.replace(/^###\s+/, "")
                    return (
                      <h3 key={idx} className="text-xl font-semibold text-dark mt-6 mb-3">
                        {heading}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("-")) {
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-2 text-muted-foreground">
                        {paragraph.split("\n").map((item, i) => (
                          <li key={i}>{item.replace(/^-\s+/, "")}</li>
                        ))}
                      </ul>
                    )
                  }
                  if (paragraph.startsWith("**Pro tip:**")) {
                    return (
                      <Notice key={idx} type="info" title="Pro Tip">
                        {paragraph.replace(/^\*\*Pro tip:\*\*\s+/, "")}
                      </Notice>
                    )
                  }
                  return (
                    <p key={idx} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </article>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Related Affiliate CTAs */}
              {post.viatorMap && post.viatorMap.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-dark mb-6">Recommended Tours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {post.viatorMap.map((tourRef: { key: string }) => {
                      const tour = tours.find((t) => t.key === tourRef.key)
                      return tour ? <AffiliateCTA key={tour.key} tour={tour} /> : null
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - TOC */}
            {headings.length > 0 && (
              <aside className="lg:col-span-1">
                <div className="toc">
                  <h4 className="font-semibold text-sm text-dark mb-4">Table of Contents</h4>
                  <ul className="space-y-2">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark mb-8">More Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for related posts */}
            <p className="text-muted-foreground">
              Explore more guides on the{" "}
              <Link href="/guides" className="text-primary hover:underline">
                guides page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
