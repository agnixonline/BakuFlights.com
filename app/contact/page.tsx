import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: 'Contact Baku Flights | Get in Touch for Tours & Travel Info',
  description: 'Contact our Baku travel experts for tour bookings, travel advice, and custom itinerary planning. We\'re here to help plan your perfect Azerbaijan adventure.',
  keywords: 'contact Baku Flights, book tours Baku, Azerbaijan travel inquiry, tour booking contact',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/baku-contact-tourism.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">
            Let's Plan Your
            <br />
            <span className="italic">Dream Adventure</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have questions? Ready to book? We're here to help make your Baku journey unforgettable
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-3xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="travelers" className="text-sm font-medium">
                          Number of Travelers
                        </label>
                        <Input id="travelers" type="number" placeholder="2" min="1" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="dates" className="text-sm font-medium">
                        Preferred Travel Dates
                      </label>
                      <Input id="dates" placeholder="e.g., June 15-20, 2025" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your travel plans, interests, or any questions you have..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button size="lg" className="w-full" type="submit">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{info.label}</div>
                        <div className="text-muted-foreground text-sm">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="pt-3 border-t text-sm text-muted-foreground">
                    * Azerbaijan Time (GMT+4)
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold mb-2">Quick Booking?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Browse our tours and book instantly online with immediate confirmation
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="/tours">View All Tours</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="italic">Questions</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@bakuflights.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+994 12 345 6789',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: '123 Nizami Street, Baku, Azerbaijan AZ1000',
  },
]

const faqs = [
  {
    question: 'How far in advance should I book my tour?',
    answer: 'We recommend booking at least 2-3 weeks in advance, especially during peak season (May-October). However, we can often accommodate last-minute bookings if availability allows.',
  },
  {
    question: 'Do you offer private tours?',
    answer: 'Yes! All our tours can be arranged as private experiences. Private tours offer flexible scheduling, personalized itineraries, and exclusive attention from your guide. Contact us for private tour pricing.',
  },
  {
    question: 'What\'s included in the tour price?',
    answer: 'Most tours include hotel pickup/drop-off, professional English-speaking guide, entrance fees, and transportation. Some tours also include lunch. Specific inclusions are listed on each tour page.',
  },
  {
    question: 'What\'s your cancellation policy?',
    answer: 'Free cancellation up to 24 hours before the tour start time. Cancellations within 24 hours are subject to a 50% charge. No-shows are non-refundable.',
  },
  {
    question: 'Do I need a visa to visit Azerbaijan?',
    answer: 'Many nationalities can obtain an e-visa online (takes 3 business days). Some countries have visa-free access. We can provide detailed visa guidance based on your nationality.',
  },
]
