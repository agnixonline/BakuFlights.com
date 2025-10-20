export const defaultSEOConfig = {
  titleTemplate: "%s | BakuFlights.com",
  defaultTitle: "BakuFlights.com | Travel Guides & Itineraries for Baku, Azerbaijan",
  description: "Discover Baku with expert guides, 3-day itineraries, and day trips. Updated for 2025.",
  canonical: "https://bakuflights.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bakuflights.com",
    siteName: "BakuFlights.com",
    images: [
      {
        url: "https://bakuflights.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BakuFlights.com - Travel Guides for Baku",
      },
    ],
  },
  twitter: {
    handle: "@bakuflights",
    site: "@bakuflights",
    cardType: "summary_large_image",
  },
}

export function getPostSEO(post: {
  title: string
  excerpt: string
  slug: string
  date: string
  coverImage: string
}) {
  return {
    title: post.title,
    description: post.excerpt,
    canonical: `https://bakuflights.com/guides/${post.slug}`,
    openGraph: {
      type: "article",
      url: `https://bakuflights.com/guides/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage || "https://bakuflights.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      article: {
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: ["BakuFlights.com"],
        tags: ["baku", "travel", "azerbaijan"],
      },
    },
  }
}
