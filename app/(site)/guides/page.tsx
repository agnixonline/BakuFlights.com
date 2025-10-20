"use client"

import { useState, useMemo } from "react"
import PostCard from "@/components/post-card"
import { getAllPosts } from "@/lib/posts"
import { useEffect } from "react"

const CATEGORIES = ["all", "things-to-do", "itinerary", "transport", "day-trips", "visa", "stay"]

export default function GuidesPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return posts
    return posts.filter((post) => post.category === selectedCategory)
  }, [posts, selectedCategory])

  if (loading) {
    return (
      <div className="container py-16">
        <div className="text-center">Loading guides...</div>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-dark mb-4">All Guides</h1>
          <p className="text-lg text-muted-foreground">Explore our collection of travel guides for Baku.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {category === "all" ? "All Guides" : category.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No guides found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
