import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BakuFlights</h3>
            <p className="text-sm text-white/70">Expert travel guides and itineraries for Baku, Azerbaijan.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides" className="hover:text-accent transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/day-trips" className="hover:text-accent transition-colors">
                  Day Trips
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclosure" className="hover:text-accent transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:hello@bakuflights.com" className="hover:text-accent transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; {currentYear} BakuFlights.com. All rights reserved.</p>
          <p>Made with care for travelers to Baku.</p>
        </div>
      </div>
    </footer>
  )
}
