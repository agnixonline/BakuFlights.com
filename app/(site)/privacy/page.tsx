export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-dark mb-4">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last Updated: October 2025</strong>
            </p>

            <h2 className="text-2xl font-bold text-dark">Introduction</h2>
            <p className="text-muted-foreground">
              BakuFlights.com ("we," "us," or "our") operates the website. This page informs you of our policies
              regarding the collection, use, and disclosure of personal data when you use our service and the choices
              you have associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-dark">Information Collection and Use</h2>
            <p className="text-muted-foreground">
              We collect several different types of information for various purposes to provide and improve our service
              to you.
            </p>

            <h3 className="text-xl font-semibold text-dark">Types of Data Collected:</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>
                <strong>Personal Data:</strong> Email address, name (when you subscribe to our newsletter)
              </li>
              <li>
                <strong>Usage Data:</strong> Browser type, IP address, pages visited, time and date of visits (via
                analytics)
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your experience
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark">Use of Data</h2>
            <p className="text-muted-foreground">BakuFlights.com uses the collected data for various purposes:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so we can improve our service</li>
              <li>To monitor the usage of our service</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark">Security of Data</h2>
            <p className="text-muted-foreground">
              The security of your data is important to us but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your personal data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-dark">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@bakuflights.com" className="text-primary hover:underline">
                hello@bakuflights.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
