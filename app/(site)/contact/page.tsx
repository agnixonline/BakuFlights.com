"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Fallback: mailto
    const subject = "Contact from BakuFlights.com"
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    window.location.href = `mailto:hello@bakuflights.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-dark mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">Have a question or suggestion? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {submitted ? "Message sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
