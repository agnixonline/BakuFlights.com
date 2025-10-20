export default function DisclosurePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-dark mb-4">Affiliate Disclosure</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last Updated: October 2025</strong>
            </p>

            <h2 className="text-2xl font-bold text-dark">Transparency & Affiliate Relationships</h2>
            <p className="text-muted-foreground">
              BakuFlights.com is a participant in the Viator affiliate program. As an Amazon Associate and affiliate of
              other travel platforms, we earn commissions from qualifying purchases made through our links.
            </p>

            <h2 className="text-2xl font-bold text-dark">What This Means</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>When you click an affiliate link and make a purchase, we may earn a commission.</li>
              <li>This does not affect the price you pay—you pay the same amount whether you use our link or not.</li>
              <li>We only recommend products and services we genuinely believe in.</li>
              <li>Our recommendations are based on personal experience and traveler feedback.</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark">Our Commitment</h2>
            <p className="text-muted-foreground">
              We are committed to transparency and honesty. All affiliate links are clearly marked with "Affiliate link"
              or similar language. Our primary goal is to provide you with accurate, helpful travel information.
              Affiliate commissions help us maintain and improve our guides.
            </p>

            <h2 className="text-2xl font-bold text-dark">Questions?</h2>
            <p className="text-muted-foreground">
              If you have any questions about our affiliate relationships or this disclosure, please{" "}
              <a href="mailto:hello@bakuflights.com" className="text-primary hover:underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
