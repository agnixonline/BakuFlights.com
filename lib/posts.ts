import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/guides")

export interface Post {
  title: string
  excerpt: string
  slug: string
  category: string
  tags: string[]
  date: string
  updated: string
  coverImage: string
  readingTime: number
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const files = fs.readdirSync(postsDirectory)
    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(postsDirectory, file)
        const fileContents = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          title: data.title || "Untitled",
          excerpt: data.excerpt || "",
          slug: data.slug || file.replace(".mdx", ""),
          category: data.category || "general",
          tags: data.tags || [],
          date: data.date || new Date().toISOString(),
          updated: data.updated || data.date || new Date().toISOString(),
          coverImage: data.coverImage || "/baku-travel.jpg",
          readingTime: data.readingTime || Math.ceil(content.split(" ").length / 200),
          content,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error("Error reading posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error("Error getting post:", error)
    return null
  }
}
