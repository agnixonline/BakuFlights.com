import { getAllPosts } from "@/lib/posts"

export async function GET() {
  const baseUrl = "https://bakuflights.com"

  // Static routes
  const staticRoutes = ["", "/guides", "/day-trips", "/about", "/disclosure", "/privacy", "/contact"]

  // Dynamic post routes
  const posts = await getAllPosts()
  const postRoutes = posts.map((post) => `/guides/${post.slug}`)

  // Combine all routes
  const allRoutes = [...staticRoutes, ...postRoutes]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route === "" ? "weekly" : route.includes("/guides/") ? "monthly" : "monthly"}</changefreq>
    <priority>${route === "" ? "1.0" : route === "/guides" ? "0.9" : "0.8"}</priority>
  </url>
  `,
    )
    .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
