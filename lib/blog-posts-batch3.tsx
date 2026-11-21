import Link from "next/link"
import type { ReactNode } from "react"
import { ExternalLink } from "lucide-react"
import { viatorTours, viatorLink } from "./viator"
import { ViatorWidget } from "@/components/viator-widget"
import { VIATOR_WIDGETS } from "@/lib/viator"

function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-primary underline">
      {children}
    </Link>
  )
}

function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2">{children}</ul>
}

function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-12">
      <h2>Frequently asked questions</h2>
      <div className="space-y-6">
        {items.map((i) => (
          <div key={i.q}>
            <h3 className="font-semibold text-lg">{i.q}</h3>
            <p className="text-muted-foreground">{i.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/** A full-width tour pick with image, why-we-like-it notes and a booking button. */
function TourPick({ id, rank, page, best, children }: { id: string; rank: number; page: string; best: string; children: ReactNode }) {
  const t = viatorTours.find((x) => x.id === id)!
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border bg-background shadow-sm md:flex">
      <img src={t.image} alt={t.title} loading="lazy" className="h-56 w-full object-cover md:h-auto md:w-2/5" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          #{rank} &middot; Best for {best}
        </p>
        <h3 className="mt-1 font-serif text-2xl font-bold">{t.title}</h3>
        <div className="mt-3 flex-1 space-y-2 text-muted-foreground">{children}</div>
        <a
          href={viatorLink(t.path, `${page}-pick-${t.id}`)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-5 inline-flex items-center justify-center gap-2 self-start rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90"
        >
          Check price &amp; availability <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function Book({ id, page, children }: { id: string; page: string; children: ReactNode }) {
  const t = viatorTours.find((x) => x.id === id)!
  return (
    <a href={viatorLink(t.path, `${page}-inline-${t.id}`)} target="_blank" rel="noopener noreferrer sponsored" className="text-primary font-semibold underline">
      {children}
    </a>
  )
}

function Note({ children }: { children: ReactNode }) {
  return <div className="bg-muted/50 p-6 rounded-lg text-sm">{children}</div>
}

/* ------------------------------------------------------------------ */
/* Best Baku tours                                                     */
/* ------------------------------------------------------------------ */
function BestToursContent() {
  const P = "best-baku-tours"
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Baku is easy to explore on your own, but a few of its best sights are spread out across the Absheron Peninsula
        and the desert south of the city. A good tour saves you hours of taxis and haggling, and gives you a guide who
        can explain what you&apos;re looking at. These are the Baku tours we recommend, and who each one suits.
      </p>

      <Note>
        <strong>How we choose:</strong> we pick tours that cover Baku&apos;s most-visited sights, run regularly and have
        strong traveller reviews on Viator. Prices, times and reviews change, so always check the latest details on the
        tour page before booking. Most tours on Viator offer free cancellation up to 24 hours before the start.
      </Note>

      <h2>Quick picks</h2>
      <Ul>
        <li><strong>First day in Baku:</strong> <Book id="old-town" page={P}>Old Town walking tour</Book></li>
        <li><strong>Best day trip:</strong> <Book id="gobustan" page={P}>Gobustan rock art and mud volcanoes</Book></li>
        <li><strong>Half-day or evening:</strong> <Book id="fire" page={P}>Fire Temple and Burning Mountain</Book></li>
        <li><strong>Mountains and snow:</strong> <Book id="guba" page={P}>Guba and Shahdag day trip</Book></li>
        <li><strong>Private or with kids:</strong> <Book id="city" page={P}>private Baku city tour</Book></li>
      </Ul>

      <h2>Live prices and reviews</h2>
      <p>Today&apos;s prices and traveller ratings for our top picks, straight from Viator:</p>
      <ViatorWidget widgetRef={VIATOR_WIDGETS.topTours} />

      <h2>The best tours in Baku</h2>

      <TourPick id="old-town" rank={1} page={P} best="your first day">
        <p>
          Start here. Baku&apos;s walled Old City (Icherisheher) is a UNESCO World Heritage Site packed with stories that
          are easy to miss on your own: the Maiden Tower, the Palace of the Shirvanshahs, old caravanserais and hidden
          mosques. A local guide brings the lanes to life and gives you your bearings for the rest of the trip.
        </p>
        <p>
          <strong>Good to know:</strong> wear comfortable shoes for the stone streets and hills. Read our{" "}
          <In href="/blog/baku-old-city-guide">Old City guide</In> for what to see afterwards.
        </p>
      </TourPick>

      <TourPick id="gobustan" rank={2} page={P} best="a full day out">
        <p>
          The classic Baku day trip. Gobustan National Park, about an hour south-west of the city, protects thousands of
          ancient rock carvings, and nearby you&apos;ll find the strange, bubbling mud volcanoes. The volcano site is
          reached on rough tracks, so a tour with transport is by far the easiest way to see both.
        </p>
        <p>
          <strong>Good to know:</strong> the mud volcanoes can be closed after heavy rain. Our{" "}
          <In href="/blog/gobustan-mud-volcanoes-day-trip">Gobustan guide</In> has more tips.
        </p>
      </TourPick>

      <TourPick id="fire" rank={3} page={P} best="Azerbaijan's 'Land of Fire' sights">
        <p>
          Azerbaijan is called the Land of Fire, and this tour shows you why. Yanar Dag is a hillside where natural gas
          has burned for centuries, and the Ateshgah Fire Temple in Surakhani was used by fire-worshipping pilgrims and
          traders. Both are on the Absheron Peninsula, outside the city centre.
        </p>
        <p>
          <strong>Good to know:</strong> Yanar Dag looks best at dusk. See our{" "}
          <In href="/blog/yanar-dag-ateshgah-fire-temple">fire sights guide</In>.
        </p>
      </TourPick>

      <TourPick id="guba" rank={4} page={P} best="mountains and nature">
        <p>
          Head north to the foothills of the Caucasus for forests, mountain villages and fresh air. In winter, Shahdag
          becomes Azerbaijan&apos;s main ski resort; in summer it&apos;s green and great for walking. It&apos;s a long day,
          about three hours each way, so a tour with a driver is the relaxed way to do it.
        </p>
        <p>
          <strong>Good to know:</strong> bring warm layers, even in spring and autumn. See our{" "}
          <In href="/blog/quba-shahdag-day-trip">Quba and Shahdag guide</In>.
        </p>
      </TourPick>

      <TourPick id="city" rank={5} page={P} best="families and private groups">
        <p>
          A private guide and driver take you around old and new Baku at your own pace: the Old City, the Flame Towers,
          the seafront Boulevard and the Heydar Aliyev Center. It&apos;s ideal with children, if you have limited
          mobility, or if you&apos;d simply rather not join a group.
        </p>
      </TourPick>

      <h2>Group tour or private tour?</h2>
      <p>
        <strong>Small-group tours</strong> are the cheapest way to see the sights and a good way to meet other
        travellers. <strong>Private tours</strong> cost more per person but are flexible, which suits families, couples
        and anyone short on time. For two or more people, a private tour can be good value, so compare both on the tour
        page.
      </p>

      <h2>How many tours do you need?</h2>
      <p>
        With three days in Baku, most visitors spend one day on the Old City and modern Baku on foot, one day on a{" "}
        <Book id="gobustan" page={P}>Gobustan day trip</Book>, and an afternoon or evening at the{" "}
        <Book id="fire" page={P}>fire sights</Book>. With more time, add the{" "}
        <Book id="guba" page={P}>mountains</Book>. Our <In href="/blog/baku-itinerary">Baku itinerary</In> lays it out day
        by day.
      </p>

      <h2>Before you book</h2>
      <Ul>
        <li>Get your <In href="/blog/azerbaijan-e-visa-guide">Azerbaijan e-visa</In> first. Most visitors need one.</li>
        <li>Check what&apos;s included: hotel pickup, entrance fees and lunch vary from tour to tour.</li>
        <li>Book day trips early in your stay, so bad weather doesn&apos;t leave you without a backup day.</li>
        <li>Budget with our <In href="/blog/is-baku-expensive">Baku trip cost guide</In>.</li>
      </Ul>

      <Faq
        items={[
          { q: "What is the best tour in Baku?", a: "For a first visit, an Old Town walking tour is the best introduction. The most popular day trip is Gobustan's rock art and mud volcanoes." },
          { q: "Do I need a tour to visit Gobustan?", a: "Not strictly, but the mud volcanoes are reached on rough tracks that ordinary taxis often refuse, so a tour with transport is the easiest way to see both sites in a day." },
          { q: "How far in advance should I book Baku tours?", a: "A few days ahead is usually fine, but book earlier for weekends, the Formula 1 race weekend and public holidays. Most Viator tours allow free cancellation up to 24 hours before." },
          { q: "Are Baku tours in English?", a: "Yes. Most tours aimed at international visitors are guided in English. Check the language listed on the tour page before booking." },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Day trips from Baku                                                 */
/* ------------------------------------------------------------------ */
function DayTripsContent() {
  const P = "day-trips-from-baku"
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Some of Azerbaijan&apos;s most unforgettable sights are a short drive from Baku: ancient rock art, mud volcanoes,
        hills that burn day and night, and snowy Caucasus mountains. Here are the best day trips from Baku, how long
        each takes and the easiest way to do them.
      </p>

      <div className="overflow-x-auto not-prose">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4">Day trip</th>
              <th className="py-3 pr-4">Travel time each way</th>
              <th className="py-3">Best for</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Gobustan & mud volcanoes", "About 1 hour", "History and strange landscapes"],
              ["Yanar Dag & Ateshgah", "About 30–45 minutes", "A half day or evening"],
              ["Absheron Peninsula beaches", "About 30–45 minutes", "Summer swimming"],
              ["Quba & Shahdag", "About 3 hours", "Mountains, villages, skiing"],
              ["Sheki", "About 4–5 hours", "Silk Road history (better overnight)"],
            ].map(([a, b, c]) => (
              <tr key={a} className="border-b border-border">
                <td className="py-3 pr-4 font-semibold">{a}</td>
                <td className="py-3 pr-4 text-muted-foreground">{b}</td>
                <td className="py-3 text-muted-foreground">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted-foreground">Travel times are approximate and depend on traffic.</p>

      <h2>1. Gobustan rock art and mud volcanoes</h2>
      <p>
        The number one day trip from Baku. Gobustan National Park, a UNESCO site, protects thousands of prehistoric
        carvings of hunters, boats and animals. A short drive away, small mud volcanoes gurgle and bubble in a bare,
        moon-like landscape. Many tours also add the Fire Temple and Yanar Dag on the way back.
      </p>
      <TourPick id="gobustan" rank={1} page={P} best="your first day trip">
        <p>A tour with transport covers both Gobustan and the mud volcanoes, which are hard to reach by taxi.</p>
      </TourPick>

      <h2>2. Yanar Dag and the Ateshgah Fire Temple</h2>
      <p>
        Close to the city on the Absheron Peninsula, these two sights explain Azerbaijan&apos;s &quot;Land of Fire&quot;
        nickname. Yanar Dag is a hillside where flames burn out of the ground, and the Ateshgah is a fire temple once
        used by pilgrims and traders. It&apos;s an easy half day, and at its best around sunset.
      </p>
      <TourPick id="fire" rank={2} page={P} best="a half day">
        <p>Combine both fire sights in one trip, with transport there and back.</p>
      </TourPick>

      <h2>3. Quba and Shahdag in the Caucasus</h2>
      <p>
        For mountains, go north. Quba is known for its orchards and carpets, and the nearby village of Qechresh and the
        Shahdag resort are surrounded by forest and peaks. In winter it&apos;s Azerbaijan&apos;s ski region; the rest of
        the year it&apos;s cool, green walking country. Read our{" "}
        <In href="/blog/quba-shahdag-day-trip">Quba and Shahdag guide</In>.
      </p>
      <TourPick id="guba" rank={3} page={P} best="mountains and snow">
        <p>A long but rewarding day with a driver, so you can relax on the mountain roads.</p>
      </TourPick>

      <h2>4. Sheki and Gabala</h2>
      <p>
        Sheki, with its painted Khan&apos;s Palace and old caravanserai, is one of Azerbaijan&apos;s most beautiful towns,
        but it&apos;s a long way for a single day. If you have time, stay a night. Our{" "}
        <In href="/blog/baku-to-sheki-gabala">Baku to Sheki and Gabala guide</In> explains how to get there.
      </p>

      <h2>More day trips and tours from Baku</h2>
      <ViatorWidget widgetRef={VIATOR_WIDGETS.allBaku} />

      <h2>Tips for day trips from Baku</h2>
      <Ul>
        <li>Start early: traffic leaving Baku builds quickly in the morning.</li>
        <li>Carry cash in manat for snacks and small entrance fees outside the city.</li>
        <li>Check the weather: rain can close the mud volcano tracks, and mountain roads get snow in winter. See <In href="/blog/baku-weather-by-month">Baku weather by month</In>.</li>
        <li>Wear closed shoes for Gobustan and the volcanoes: the ground is rocky and muddy.</li>
      </Ul>

      <Faq
        items={[
          { q: "What is the best day trip from Baku?", a: "Gobustan and the mud volcanoes is the most popular day trip from Baku, and many tours add the Fire Temple and Yanar Dag in the same day." },
          { q: "Can you visit Gobustan without a tour?", a: "You can reach the Gobustan rock art museum by taxi, but the mud volcanoes are on rough tracks that many drivers won't take, which is why most visitors book a tour." },
          { q: "Is Sheki a good day trip from Baku?", a: "It's possible, but at around 4 to 5 hours each way it makes a very long day. Staying one night in Sheki is much more relaxed." },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Baku layover                                                        */
/* ------------------------------------------------------------------ */
function LayoverContent() {
  const P = "baku-layover"
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Flying through Baku with a long connection? Heydar Aliyev International Airport is only about 25 km from the
        city centre, so a layover of 7 hours or more can turn into a mini city break. Here&apos;s what you can do with
        your time, and what to check before you leave the airport.
      </p>

      <Note>
        <strong>Before you leave the airport:</strong> you&apos;ll go through immigration, so you need to be able to enter
        Azerbaijan. Most nationalities need an <In href="/blog/azerbaijan-e-visa-guide">e-visa</In>, which you must get
        online before you fly. Also check that your bags are checked through to your final destination.
      </Note>

      <h2>How long do you need?</h2>
      <Ul>
        <li><strong>Under 6 hours:</strong> stay at the airport. Allowing for immigration, transport and security, there isn&apos;t enough time to enjoy the city.</li>
        <li><strong>7–10 hours:</strong> enough for the Old City, the seafront Boulevard and the Flame Towers view.</li>
        <li><strong>10–24 hours:</strong> add the fire sights (Yanar Dag and the Fire Temple), which are close to the airport side of the city.</li>
        <li><strong>Overnight:</strong> see the Flame Towers lit up at night and do a morning <Book id="gobustan" page={P}>Gobustan trip</Book>.</li>
      </Ul>

      <h2>Getting into the city</h2>
      <p>
        The Aeroexpress bus runs between the airport and the city centre and is paid with a BakıKart transport card,
        sold at machines in the arrivals hall. A Bolt or Uber is quicker and still good value. Our{" "}
        <In href="/blog/baku-airport-to-city-centre">airport to city centre guide</In> has the details.
      </p>

      <h2>The best layover plan: Old City and the seafront</h2>
      <p>
        Head straight to the Old City (Icherisheher), walk through the lanes to the Maiden Tower, then down to the
        seafront Boulevard. If you&apos;re short on time, a guided walk is the most efficient way to see the highlights
        without getting lost.
      </p>
      <TourPick id="old-town" rank={1} page={P} best="a short layover">
        <p>See the Old City&apos;s main sights with a guide, then you&apos;re free to grab a meal before heading back.</p>
      </TourPick>

      <h2>Longer layover: add the fire sights</h2>
      <p>
        Yanar Dag and the Ateshgah Fire Temple are on the Absheron Peninsula, on the same side of the city as the
        airport, so they fit well into a longer stop.
      </p>
      <TourPick id="fire" rank={2} page={P} best="a 10+ hour layover">
        <p>A private tour can often pick you up and drop you back, which takes the stress out of timing.</p>
      </TourPick>

      <h2>Layover checklist</h2>
      <Ul>
        <li>E-visa approved and printed or saved on your phone.</li>
        <li>Bags checked through, or stored at the airport.</li>
        <li>Some manat or a card for the BakıKart and food.</li>
        <li>Be back at the airport at least 2–3 hours before your next flight.</li>
      </Ul>

      <Faq
        items={[
          { q: "Can I leave Baku airport during a layover?", a: "Yes, if you can enter Azerbaijan. Most visitors need an e-visa, applied for online before travelling." },
          { q: "How far is Baku airport from the city centre?", a: "About 25 km, which usually takes around 25 to 40 minutes by car depending on traffic." },
          { q: "How long a layover do I need to see Baku?", a: "At least 7 hours to see the Old City comfortably, allowing time for immigration, transport and getting back for your next flight." },
        ]}
      />
    </div>
  )
}

export const batch3Posts = [
  {
    slug: "best-baku-tours",
    title: "Best Baku Tours 2026: Top Tours and Day Trips Worth Booking",
    category: "Tours",
    excerpt:
      "The best tours in Baku and who each one suits: Old Town walking tours, Gobustan and the mud volcanoes, the fire sights, the mountains and family tours.",
    image: "/baku-old-city-tour-group.jpg",
    date: "Nov 21, 2026",
    updated: "2026-11-21",
    readTime: "8 min read",
    keywords: "best Baku tours, Baku tours, tours in Baku, Baku day tours, Baku guided tour, Baku Old Town tour, Gobustan tour",
    Content: BestToursContent,
  },
  {
    slug: "day-trips-from-baku",
    title: "Best Day Trips from Baku: Gobustan, Fire Mountains and the Caucasus",
    category: "Tours",
    excerpt:
      "The best day trips from Baku with travel times: Gobustan and the mud volcanoes, Yanar Dag and the Fire Temple, Quba and Shahdag, and Sheki.",
    image: "/gobustan-rock-art-petroglyphs.jpg",
    date: "Nov 21, 2026",
    updated: "2026-11-21",
    readTime: "7 min read",
    keywords: "day trips from Baku, Baku day trip, Gobustan day trip, Shahdag day trip, Baku excursions",
    Content: DayTripsContent,
  },
  {
    slug: "baku-layover",
    title: "Baku Layover: What to Do with 7, 10 or 24 Hours",
    category: "Travel Tips",
    excerpt:
      "Got a long connection at Baku airport? How to see the Old City and the fire sights on a layover, how to get into the city and what to check first.",
    image: "/baku-city-flame-towers-night.jpg",
    date: "Nov 21, 2026",
    updated: "2026-11-21",
    readTime: "6 min read",
    keywords: "Baku layover, Baku transit, Baku airport layover, things to do Baku layover, Baku stopover",
    Content: LayoverContent,
  },
]
