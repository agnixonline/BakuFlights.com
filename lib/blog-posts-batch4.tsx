import Link from "next/link"
import type { ReactNode } from "react"
import { ExternalLink } from "lucide-react"
import { viatorTours, viatorLink } from "./viator"

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

function Tour({ id, page, children }: { id: string; page: string; children: ReactNode }) {
  const t = viatorTours.find((x) => x.id === id)!
  return (
    <div className="not-prose my-6 rounded-xl border bg-muted/30 p-5">
      <p className="font-semibold">{t.title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      <a
        href={viatorLink(t.path, `blog-${page}-inline-${t.id}`)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        Check price &amp; availability <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}

/* ---------------- Baku in winter ---------------- */
function WinterContent() {
  const p = "baku-in-winter"
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead">
        Baku in winter is quiet, cheaper and surprisingly festive. Days are cool rather than freezing, the city is lit
        up for New Year, and the big sights have no queues. Here is what to expect from December to February and how to
        plan a winter trip.
      </p>

      <h2>What is the weather like in Baku in winter?</h2>
      <p>
        Baku has a mild winter by European standards. Daytime highs are usually around 6&ndash;10&deg;C, nights drop
        to around 1&ndash;4&deg;C, and snow in the city is rare and short-lived. The real factor is the wind: Baku is
        called the &ldquo;City of Winds&rdquo; and a cold breeze off the Caspian makes it feel colder than the
        thermometer says. Pack a windproof coat, a hat and comfortable waterproof shoes. Month-by-month figures are in
        our <In href="/blog/baku-weather-by-month">Baku weather guide</In>.
      </p>

      <h2>Christmas and New Year in Baku</h2>
      <p>
        New Year is the main winter celebration in Azerbaijan. From early December the Boulevard, Fountain Square and
        Nizami Street fill with lights, a large New Year tree goes up and there are seasonal markets. On New Year&apos;s
        Eve there are fireworks over the bay, best seen from the Seaside Boulevard or from Upland Park (Highland Park)
        above the city. Christmas on 25 December is not a public holiday, but hotels and international restaurants mark
        it, and the festive decorations are already up.
      </p>
      <p>
        20 January (a day of remembrance) and the long Novruz holiday in March are the other dates to know. Novruz is a
        spring festival, so it falls just after the winter season.
      </p>

      <h2>Best things to do in Baku in winter</h2>
      <Ul>
        <li>
          <strong>Walk the Old City (Icherisheher) without the crowds.</strong> Maiden Tower and the Palace of the
          Shirvanshahs are far quieter than in summer. See our <In href="/blog/baku-old-city-guide">Old City guide</In>.
        </li>
        <li>
          <strong>See the fire sights.</strong> Yanar Dag&apos;s flames look best on a cold, dark evening. Read our{" "}
          <In href="/blog/yanar-dag-ateshgah-fire-temple">Yanar Dag and Fire Temple guide</In>.
        </li>
        <li>
          <strong>Museums and galleries.</strong> The Carpet Museum, the Heydar Aliyev Center and the Museum of
          Miniature Books are perfect for a windy day.
        </li>
        <li>
          <strong>Hammams and tea houses.</strong> Warm up in a traditional bathhouse, then sit over tea, jam and
          pakhlava.
        </li>
        <li>
          <strong>Skiing at Shahdag.</strong> Shahdag Mountain Resort, about 3.5 hours north, usually runs its ski season
          from around December to March, depending on snow.
        </li>
      </Ul>

      <Tour id="old-town" page={p}>
        A local-led walk through the Old City is a good first morning in winter, when the lanes are quiet.
      </Tour>
      <Tour id="fire" page={p}>
        Yanar Dag and the Ateshgah Fire Temple in one trip, with transport, ideal for a dark winter evening.
      </Tour>

      <h2>Is winter a good time to visit Baku?</h2>
      <p>
        Yes, if you prefer city sightseeing, food and culture over beaches. Flights and hotels are often cheaper than
        in spring and autumn, and attractions are uncrowded. If you want warm weather, spring (April to June) and
        autumn (September to October) are better. Compare all the seasons in our{" "}
        <In href="/blog/best-time-to-visit-baku">best time to visit Baku</In> guide.
      </p>

      <h2>Winter travel tips</h2>
      <Ul>
        <li>Check the latest e-visa rules before booking. See our <In href="/blog/azerbaijan-e-visa-guide">Azerbaijan e-visa guide</In>.</li>
        <li>Book New Year hotels early: central Baku fills up around 31 December.</li>
        <li>Mountain roads to Quba, Shahdag and Sheki can be affected by snow, so leave flexibility for day trips.</li>
        <li>Use Bolt or the metro to avoid long walks in the wind. See <In href="/blog/getting-around-baku">getting around Baku</In>.</li>
      </Ul>

      <Faq
        items={[
          { q: "Does it snow in Baku?", a: "Occasionally, but snow in the city is rare and usually melts quickly. The mountains in the north of Azerbaijan get regular snow." },
          { q: "What should I wear in Baku in winter?", a: "A warm windproof coat, layers, a hat and waterproof shoes. The wind off the Caspian is the main thing to dress for." },
          { q: "Is Baku busy at New Year?", a: "Central Baku is lively on New Year's Eve, with fireworks over the bay. Hotels near the Boulevard and Old City book up, so reserve early." },
        ]}
      />
    </div>
  )
}

/* ---------------- 7-day Azerbaijan itinerary ---------------- */
function ItineraryContent() {
  const p = "azerbaijan-itinerary-7-days"
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead">
        A week is the sweet spot for a first trip to Azerbaijan: enough for Baku&apos;s highlights, the ancient rock art
        of Gobustan, the fire sights and a taste of the Caucasus mountains. This 7-day itinerary is based in Baku with
        one overnight trip, so you only change hotels once.
      </p>

      <h2>Day 1: Arrive in Baku and the Boulevard</h2>
      <p>
        Get from the airport into the city (our <In href="/blog/baku-airport-to-city-centre">airport to city guide</In>{" "}
        covers the Aeroexpress bus and taxis), check in, and spend the evening on the Seaside Boulevard as the Flame
        Towers light up.
      </p>

      <h2>Day 2: The Old City</h2>
      <p>
        Explore Icherisheher, the walled Old City and a UNESCO World Heritage Site: Maiden Tower, the Palace of the
        Shirvanshahs, caravanserais and carpet shops. In the afternoon, visit the Carpet Museum, then go up to Upland
        Park for the view. Details in our <In href="/blog/baku-old-city-guide">Old City guide</In>.
      </p>
      <Tour id="old-town" page={p}>A walking tour with a local is the easiest way to understand the Old City on your first full day.</Tour>

      <h2>Day 3: Gobustan and the mud volcanoes</h2>
      <p>
        Head south to Gobustan National Park to see thousands of Stone Age petroglyphs, then on to the bubbling mud
        volcanoes. The volcanoes are reached on rough tracks, so a tour is the simplest option. Read our{" "}
        <In href="/blog/gobustan-mud-volcanoes-day-trip">Gobustan day trip guide</In>.
      </p>
      <Tour id="gobustan" page={p}>Gobustan rock art and the mud volcanoes in one day, with transport from Baku.</Tour>

      <h2>Day 4: The fire sights and modern Baku</h2>
      <p>
        Spend the morning at the Heydar Aliyev Center, then in the late afternoon visit the Ateshgah Fire Temple and
        Yanar Dag, the burning hillside, timed for sunset.
      </p>
      <Tour id="fire" page={p}>Yanar Dag and the Fire Temple, best done at dusk when the flames stand out.</Tour>

      <h2>Days 5&ndash;6: Sheki or Quba and Shahdag</h2>
      <p>
        Pick one mountain region and stay overnight. <strong>Sheki</strong> (about 5 hours) has the painted Khan&apos;s
        Palace, an old caravanserai you can sleep in, and the famous Sheki halva. <strong>Quba and Shahdag</strong>{" "}
        (about 3&ndash;3.5 hours) offer mountain villages such as Khinalug, hiking in summer and skiing in winter. See{" "}
        <In href="/blog/baku-to-sheki-gabala">Baku to Sheki and Gabala</In> and{" "}
        <In href="/blog/quba-shahdag-day-trip">Quba and Shahdag</In>.
      </p>
      <Tour id="guba" page={p}>A guided trip to Quba, Qusar and Shahdag if you would rather not drive mountain roads.</Tour>

      <h2>Day 7: Food and farewell</h2>
      <p>
        Back in Baku, spend your last day eating: plov, qutab, dolma and pakhlava. Our{" "}
        <In href="/blog/what-to-eat-in-baku">what to eat in Baku</In> guide lists the dishes to try.
      </p>
      <Tour id="food" page={p}>A street food tour is a fun final evening and covers many dishes in one go.</Tour>

      <h2>Extending your trip</h2>
      <p>
        With more time, add Gabala and Lahij, or continue to Georgia on the overnight{" "}
        <In href="/blog/baku-to-tbilisi-train">Baku to Tbilisi train</In>. Short on time? Try our{" "}
        <In href="/blog/48-hour-itinerary">48 hours in Baku</In> plan instead.
      </p>

      <Faq
        items={[
          { q: "Is 7 days enough for Azerbaijan?", a: "Yes for a first visit. It covers Baku, Gobustan, the fire sights and one mountain region. Allow 10 to 14 days to see more of the regions." },
          { q: "Do I need a car in Azerbaijan?", a: "No. Baku is easy by metro and Bolt, and day trips are simplest as tours. Buses and shared taxis serve Sheki and Quba." },
          { q: "What is the best base for a week in Azerbaijan?", a: "Baku, near the Old City or the Boulevard, with one or two nights in Sheki or Quba." },
        ]}
      />
    </div>
  )
}

/* ---------------- Things to know before visiting ---------------- */
function TipsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead">
        Heading to Azerbaijan for the first time? These are the practical things worth knowing before you go, from
        visas and money to etiquette and getting around.
      </p>

      <h2>1. Most visitors need an e-visa</h2>
      <p>
        Many nationalities can get an ASAN e-visa online in a few days. Apply only on the official portal and check
        the current rules for your passport. Our <In href="/blog/azerbaijan-e-visa-guide">e-visa guide</In> walks
        through it.
      </p>

      <h2>2. The currency is the manat (AZN)</h2>
      <p>
        Cards are widely accepted in Baku, but carry some cash for markets, small cafes and the regions. ATMs are easy
        to find in the city. For typical prices see <In href="/blog/is-baku-expensive">is Baku expensive?</In>
      </p>

      <h2>3. Getting around is easy</h2>
      <p>
        Baku has a cheap metro and buses (you need a BakuKart travel card) and ride-hailing with Bolt. Read{" "}
        <In href="/blog/getting-around-baku">getting around Baku</In>.
      </p>

      <h2>4. Baku is generally safe</h2>
      <p>
        Baku has a reputation as a safe city for visitors, including at night in central areas. Use normal precautions.
        More in <In href="/blog/is-baku-safe">is Baku safe?</In>
      </p>

      <h2>5. Dress and etiquette</h2>
      <Ul>
        <li>Baku is modern and relaxed about dress; cover shoulders and knees in mosques and be more modest in the regions.</li>
        <li>Bread is treated with respect: don&apos;t throw it away.</li>
        <li>Hospitality is a big deal. If you are offered tea, accept it.</li>
        <li>Tipping around 10% is normal in restaurants if service is not already added.</li>
      </Ul>

      <h2>6. Check official travel advice</h2>
      <p>
        Relations between Azerbaijan and Armenia are sensitive. Check the latest official advice from your government
        before travelling, especially if you have visited the Karabakh region.
      </p>

      <h2>7. Language</h2>
      <p>
        Azerbaijani is the official language and Russian is widely understood. English is common in hotels, among
        younger people and in tourist areas of Baku, less so in the regions. A translation app helps.
      </p>

      <h2>8. The best time to go</h2>
      <p>
        Spring and autumn are the most comfortable. Summers are hot and winters are mild but windy. See{" "}
        <In href="/blog/best-time-to-visit-baku">best time to visit Baku and Azerbaijan</In> and{" "}
        <In href="/blog/baku-in-winter">Baku in winter</In>.
      </p>

      <h2>9. Book key tours in advance</h2>
      <p>
        Gobustan&apos;s mud volcanoes and the mountain regions are hard to reach without a car, so most visitors book a
        tour. Our <In href="/blog/best-baku-tours">best Baku tours</In> guide compares the options.
      </p>

      <h2>10. Plan your route</h2>
      <p>
        For a first trip, a week covers the highlights. Use our{" "}
        <In href="/blog/azerbaijan-itinerary-7-days">7-day Azerbaijan itinerary</In>.
      </p>

      <Faq
        items={[
          { q: "Is Azerbaijan friendly to tourists?", a: "Yes. Azerbaijanis are known for their hospitality, and Baku is used to international visitors." },
          { q: "Can I drink tap water in Baku?", a: "Most visitors stick to bottled or filtered water, which is cheap and easy to find." },
          { q: "Do I need cash in Azerbaijan?", a: "Cards work in most of Baku, but keep some manat for markets, small shops, taxis outside the city and the regions." },
        ]}
      />
    </div>
  )
}

/* ---------------- Flame Towers & Boulevard ---------------- */
function BoulevardContent() {
  const p = "baku-boulevard-flame-towers"
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead">
        The Flame Towers and the Seaside Boulevard are modern Baku&apos;s postcard view. Here is how to see them, where
        to get the best photos and what else is along the waterfront.
      </p>

      <h2>The Flame Towers</h2>
      <p>
        The three glass towers on the hill above the Old City are shaped like flames, a nod to Azerbaijan&apos;s
        &ldquo;land of fire&rdquo; name. They hold a hotel, offices and apartments. The real show is after dark, when
        LED screens across the facades animate flames, the Azerbaijani flag and moving figures.
      </p>
      <h3>Best viewpoints</h3>
      <Ul>
        <li><strong>Seaside Boulevard</strong>, looking back up the hill, especially near the Little Venice area.</li>
        <li><strong>The Old City walls</strong> and rooftop cafes for towers-over-old-town shots.</li>
        <li>
          <strong>Upland Park (Highland Park)</strong>, right beside the towers, for a panorama of the bay. Take the
          funicular when it is running, or climb the steps.
        </li>
      </Ul>

      <h2>The Seaside Boulevard (Baku Boulevard)</h2>
      <p>
        Stretching for kilometres along the Caspian, the Boulevard is where Baku comes to walk. Highlights include the
        Baku Eye Ferris wheel, the Carpet Museum (shaped like a rolled carpet), Little Venice canals, cafes and the
        Crystal Hall area further along. It is lovely at sunset and busy on warm evenings.
      </p>
      <p>
        Families will like the rides and open space. See <In href="/blog/with-kids">Baku with kids</In>.
      </p>

      <h2>How to plan your visit</h2>
      <Ul>
        <li>Start in the Old City late afternoon, walk down to the Boulevard for sunset, then look back at the towers once they light up.</li>
        <li>Allow 2&ndash;3 hours for an unhurried evening.</li>
        <li>It is all free to walk; only the Ferris wheel, museums and some rides charge.</li>
      </Ul>
      <Tour id="city" page={p}>
        A private city tour covers the Flame Towers, Upland Park, the Boulevard and the Old City with a guide and driver.
      </Tour>

      <p>
        Next, plan the rest of your trip with <In href="/blog/things-to-do-in-baku">things to do in Baku</In>.
      </p>

      <Faq
        items={[
          { q: "Can you go inside the Flame Towers?", a: "The hotel in one tower is open to guests and restaurant or bar visitors; the office and residential towers are private." },
          { q: "What time do the Flame Towers light up?", a: "The light show starts after dark every evening, so the time changes with the season." },
          { q: "Is the Baku Boulevard free?", a: "Yes, walking the Boulevard is free. Attractions such as the Baku Eye and museums have separate tickets." },
        ]}
      />
    </div>
  )
}

export const batch4Posts = [
  {
    slug: "baku-in-winter",
    title: "Baku in Winter: Weather, New Year and Things to Do (Dec to Feb)",
    category: "Travel Tips",
    excerpt:
      "What Baku is like in December, January and February: temperatures, New Year celebrations, winter things to do, skiing at Shahdag and what to pack.",
    image: "/baku-city-flame-towers-night.jpg",
    date: "Nov 25, 2026",
    updated: "2026-11-25",
    readTime: "6 min read",
    keywords: "Baku in winter, Baku in December, Baku New Year, Christmas in Baku, Baku in January, Baku winter weather",
    Content: WinterContent,
  },
  {
    slug: "azerbaijan-itinerary-7-days",
    title: "7-Day Azerbaijan Itinerary: Baku, Gobustan and the Mountains",
    category: "Itineraries",
    excerpt:
      "A one-week Azerbaijan itinerary for first-timers: Baku's Old City, Gobustan and the mud volcanoes, the fire sights, and an overnight in Sheki or Quba.",
    image: "/baku-panorama-destinations.jpg",
    date: "Nov 25, 2026",
    updated: "2026-11-25",
    readTime: "7 min read",
    keywords: "Azerbaijan itinerary, 7 days in Azerbaijan, one week in Azerbaijan, Azerbaijan travel itinerary, Baku itinerary 7 days",
    Content: ItineraryContent,
  },
  {
    slug: "things-to-know-before-visiting-azerbaijan",
    title: "10 Things to Know Before Visiting Azerbaijan",
    category: "Travel Tips",
    excerpt:
      "First trip to Azerbaijan? Visas, money, getting around, safety, etiquette and language: the practical tips to know before you go.",
    image: "/baku-old-city-maiden-tower.jpg",
    date: "Nov 25, 2026",
    updated: "2026-11-25",
    readTime: "6 min read",
    keywords: "Azerbaijan travel tips, things to know before visiting Azerbaijan, Azerbaijan travel guide, visiting Azerbaijan, Baku tips",
    Content: TipsContent,
  },
  {
    slug: "baku-boulevard-flame-towers",
    title: "Flame Towers and Baku Boulevard: Best Views and How to Visit",
    category: "Attractions",
    excerpt:
      "How to see Baku's Flame Towers light show, the best viewpoints, and what to do along the Seaside Boulevard, from the Baku Eye to Little Venice.",
    image: "/baku-boulevard-promenade.jpg",
    date: "Nov 25, 2026",
    updated: "2026-11-25",
    readTime: "5 min read",
    keywords: "Flame Towers Baku, Baku Boulevard, Seaside Boulevard Baku, Flame Towers light show, Upland Park Baku, Baku Eye",
    Content: BoulevardContent,
  },
]
