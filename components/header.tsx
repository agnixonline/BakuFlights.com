"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo.jpg" alt="BakuFlights.com" width={32} height={32} className="w-8 h-8" />
          <span className="font-bold text-lg text-dark hidden sm:inline">BakuFlights</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/guides" className="text-sm font-medium hover:text-primary transition-colors">
            Guides
          </Link>
          <Link href="/day-trips" className="text-sm font-medium hover:text-primary transition-colors">
            Day Trips
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-muted">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/guides" className="text-sm font-medium hover:text-primary transition-colors">
              Guides
            </Link>
            <Link href="/day-trips" className="text-sm font-medium hover:text-primary transition-colors">
              Day Trips
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
