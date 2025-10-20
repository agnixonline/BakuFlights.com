"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function EmailCapture() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Fallback: mailto for MVP
    const subject = "Get the 3-Day Baku PDF Itinerary"
    const body = `Name: ${name}\nEmail: ${email}\n\nI'd like to receive the 3-Day Baku PDF itinerary.`
    window.location.href = `mailto:hello@bakuflights.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setName("")
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
      <div className="flex items-start gap-4 mb-4">
        <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-lg text-dark mb-1">Get the 3-Day Baku PDF Itinerary</h3>
          <p className="text-sm text-muted-foreground">
            Free guide delivered to your inbox. No spam, just travel tips.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="w-full affiliate-cta">
          {submitted ? "Check your email!" : "Send me the guide"}
        </button>
      </form>
    </div>
  )
}
