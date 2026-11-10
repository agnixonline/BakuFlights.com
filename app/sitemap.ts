import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

const baseUrl = 'https://www.bakuflights.com'
const SITE_UPDATED = new Date('2026-11-10')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tours`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/flights`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/destinations`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/contact`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.4 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
