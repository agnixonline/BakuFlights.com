import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface PostCardProps {
  title: string
  excerpt: string
  slug: string
  category: string
  tags: string[]
  coverImage: string
  readingTime: number
  date: string
}

export default function PostCard({
  title,
  excerpt,
  slug,
  category,
  tags,
  coverImage,
  readingTime,
  date,
}: PostCardProps) {
  return (
    <Link href={`/guides/${slug}`}>
      <article className="group cursor-pointer h-full">
        <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-muted">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="capitalize text-xs">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">{readingTime} min read</span>
          </div>
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
          <div className="flex flex-wrap gap-1 pt-2">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
