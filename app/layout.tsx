import React from "react"
import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bakuflights.com'),
  title: {
    default: 'Baku Flights | Discover Tours & Adventures in Azerbaijan',
    template: '%s | Baku Flights'
  },
  description: 'Explore Baku and Azerbaijan with curated tours, travel guides, and local experiences. Book flights and discover the Land of Fire.',
  keywords: 'Baku tours, Azerbaijan travel, Baku flights, Gobustan, Old City, travel guide',
  authors: [{ name: 'Baku Flights' }],
  creator: 'Baku Flights',
  publisher: 'Baku Flights',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bakuflights.com',
    title: 'Baku Flights | Discover Tours & Adventures in Azerbaijan',
    description: 'Explore Baku and Azerbaijan with curated tours, travel guides, and local experiences. Book flights and discover the Land of Fire.',
    siteName: 'Baku Flights',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baku Flights | Discover Tours & Adventures in Azerbaijan',
    description: 'Explore Baku and Azerbaijan with curated tours, travel guides, and local experiences.',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
