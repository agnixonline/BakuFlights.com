import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image src="/bakuflights-logo.png" alt="Baku Flights" width={240} height={50} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your guide to discovering the beauty and culture of Baku and Azerbaijan. Book tours, flights, and create
              unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-foreground">
                  Tours & Activities
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-foreground">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/budget-travel" className="text-muted-foreground hover:text-foreground">
                  Budget Travel Tips
                </Link>
              </li>
              <li>
                <Link href="/blog/with-kids" className="text-muted-foreground hover:text-foreground">
                  Family Travel
                </Link>
              </li>
              <li>
                <Link href="/blog/food-guide" className="text-muted-foreground hover:text-foreground">
                  Food Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 font-semibold">Stay Connected</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/share/p/16Pdbq8Fru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@bakuflights.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Affiliate Disclosure:</strong> We earn commissions from qualifying tour bookings through our
              partner Viator.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Baku Flights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
