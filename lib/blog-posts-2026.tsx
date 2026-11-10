import Link from "next/link"
import type { ReactNode } from "react"

const V = "?pid=P00220435&mcid=42383&medium=link&medium_version=selector&target_lander=NONE"
const tours = {
  oldTown: "https://www.viator.com/tours/Baku/Baku-Old-Town-Walking-Tour/d22974-13710P4" + V,
  gobustan: "https://www.viator.com/tours/Baku/Day-Trip-Baku/d22974-63022P1" + V,
  fire: "https://www.viator.com/tours/Baku/Fire-Temple-and-Fire-Mountain-Private-Tour/d22974-75513P3" + V,
  guba: "https://www.viator.com/tours/Baku/Guba-Shahdag-Adventure-Discover-Natures-Winter-Wonderland/d22974-441116P7" + V,
  food: "https://www.viator.com/tours/Baku/Free-Product/d22974-176027P10" + V,
}

function TourLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="text-primary font-semibold underline">
      {children}
    </a>
  )
}

function TipBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-primary/10 p-8 rounded-lg my-8">
      <h3 className="font-serif text-2xl font-bold mb-4">{title}</h3>
      <div className="space-y-2 text-muted-foreground">{children}</div>
    </div>
  )
}

function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="my-8">
      <h2>Frequently asked questions</h2>
      {items.map((item) => (
        <div key={item.q} className="mb-6">
          <h3 className="font-semibold text-xl mb-2">{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 1. Baku itinerary 3-5 days                                          */
/* ------------------------------------------------------------------ */
function BakuItineraryContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Planning a trip to Azerbaijan&apos;s capital and wondering how many days you need? This Baku itinerary gives you a
        day-by-day plan for <strong>3, 4 or 5 days</strong>, from the UNESCO-listed Old City to the fire mountains and mud
        volcanoes just outside town. Short on time? See our{" "}
        <Link href="/blog/48-hour-itinerary" className="text-primary underline">
          weekend in Baku guide
        </Link>{" "}
        instead.
      </p>

      <h2>How many days do you need in Baku?</h2>
      <p>
        Three days is the sweet spot for most first-time visitors. It gives you one day in the city centre, one day for the
        Absheron Peninsula&apos;s fire sites and one day for Gobustan&apos;s rock art and mud volcanoes. With four or five
        days you can add a mountain day trip to Quba and Shahdag, or slow down and enjoy Baku&apos;s cafés, museums and
        seaside Boulevard at a relaxed pace.
      </p>

      <h2>Day 1: Old City, Maiden Tower and the Boulevard</h2>
      <p>
        Start inside <strong>Icherisheher (the Old City)</strong>, the walled heart of Baku and a UNESCO World Heritage Site
        together with the Palace of the Shirvanshahs and Maiden Tower. Wander the stone lanes, climb the{" "}
        <strong>Maiden Tower</strong> for views over the Caspian, and explore the 15th-century{" "}
        <strong>Palace of the Shirvanshahs</strong>.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Morning:</strong> Old City walls, Maiden Tower and the Shirvanshahs&apos; Palace. A local guide brings the
          history to life: <TourLink href={tours.oldTown}>book a Baku Old Town walking tour</TourLink>.
        </li>
        <li>
          <strong>Lunch:</strong> try plov, qutab (stuffed flatbreads) and tea served with jam in an Old City restaurant.
        </li>
        <li>
          <strong>Afternoon:</strong> the Azerbaijan Carpet Museum, then a stroll along <strong>Baku Boulevard</strong>, the
          seafront promenade that runs for kilometres beside the Caspian Sea.
        </li>
        <li>
          <strong>Evening:</strong> take the funicular or the steps up to <strong>Highland Park</strong> to watch the{" "}
          <strong>Flame Towers</strong> light up after dark.
        </li>
      </ul>

      <h2>Day 2: The Land of Fire (Ateshgah and Yanar Dag)</h2>
      <p>
        Azerbaijan is called the Land of Fire for a reason. On the Absheron Peninsula, natural gas has fed open flames for
        centuries. Visit the <strong>Ateshgah Fire Temple</strong> in Surakhani, a former Zoroastrian and Hindu place of
        worship, then head to <strong>Yanar Dag</strong>, a hillside that burns continuously. Go late afternoon so you arrive
        at Yanar Dag as the sun sets and the flames glow brightest.
      </p>
      <p>
        The two sites are on opposite sides of the peninsula, so a driver or tour saves a lot of time:{" "}
        <TourLink href={tours.fire}>see the Fire Temple &amp; Burning Mountain private tour</TourLink>. Back in the city,
        spend the evening at the <strong>Heydar Aliyev Center</strong>, Zaha Hadid&apos;s flowing white landmark, which is
        especially photogenic at dusk.
      </p>

      <h2>Day 3: Gobustan rock art and the mud volcanoes</h2>
      <p>
        About an hour south of Baku, <strong>Gobustan National Park</strong> protects thousands of prehistoric rock
        carvings and is Azerbaijan&apos;s other UNESCO World Heritage Site. Nearby, dozens of small{" "}
        <strong>mud volcanoes</strong> bubble and gurgle out of the desert, one of the strangest landscapes you will ever
        see.
      </p>
      <p>
        Most visitors combine Gobustan and the mud volcanoes in a half-day trip; the road to the volcanoes is rough, so
        locals use old Lada taxis or tour vehicles. The easiest option is a guided day trip:{" "}
        <TourLink href={tours.gobustan}>book the Gobustan &amp; mud volcano day trip</TourLink>. Spend the evening in the
        Fountain Square area for dinner and people-watching.
      </p>

      <h2>Day 4 (optional): Quba and Shahdag mountains</h2>
      <p>
        If you have a fourth day, swap the city for the Greater Caucasus. A full-day trip north to <strong>Quba</strong>{" "}
        and <strong>Shahdag</strong> takes you through forests, mountain villages and, in winter, Azerbaijan&apos;s main ski
        resort. It is a long day (around three hours each way), so a tour is the stress-free choice:{" "}
        <TourLink href={tours.guba}>Guba &amp; Shahdag adventure tour</TourLink>.
      </p>

      <h2>Day 5 (optional): Slow Baku</h2>
      <p>
        Use your last day for the things a rushed trip skips: a morning hammam, the Museum of Modern Art, shopping on Nizami
        Street, or a <TourLink href={tours.food}>Baku street food tour</TourLink> to taste pastries, kebabs and sweets
        across the city. Finish with a sunset walk along the Boulevard.
      </p>

      <TipBox title="Baku itinerary tips">
        <p>✓ <strong>Visa:</strong> most visitors need an e-visa, so apply online before you fly. Read our <Link href="/blog/azerbaijan-e-visa-guide" className="text-primary underline">Azerbaijan e-visa guide</Link>.</p>
        <p>✓ <strong>Getting around:</strong> buy a BakuCard for the metro and buses, and use a ride-hailing app for taxis.</p>
        <p>✓ <strong>Arriving:</strong> see how to get from <Link href="/blog/baku-airport-to-city-centre" className="text-primary underline">Baku airport to the city centre</Link>.</p>
        <p>✓ <strong>Best time:</strong> spring (April to June) and autumn (September to October) have the most comfortable weather.</p>
      </TipBox>

      <Faq
        items={[
          {
            q: "Is 3 days enough for Baku?",
            a: "Yes. Three days covers the Old City, the fire sites of the Absheron Peninsula and Gobustan. Add a fourth day if you want to see the mountains around Quba and Shahdag.",
          },
          {
            q: "Can I do Gobustan and the mud volcanoes in one day?",
            a: "Yes. They are close together, about an hour south of Baku, and most tours visit both in half a day.",
          },
          {
            q: "When is the best time to visit Baku?",
            a: "Spring and autumn are the most pleasant. Summers are hot and winters are cool and windy. If you are a Formula 1 fan, plan around the Azerbaijan Grand Prix in September.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Azerbaijan Grand Prix 2027                                       */
/* ------------------------------------------------------------------ */
function GrandPrixContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        The <strong>2027 Formula 1 Azerbaijan Grand Prix</strong> takes place on <strong>24–26 September 2027</strong> on
        the streets of Baku. Here is everything you need to plan your trip, from where to stay to what to see between
        sessions.
      </p>

      <h2>Azerbaijan Grand Prix 2027 dates</h2>
      <p>
        Race weekend runs from <strong>Friday 24 to Sunday 26 September 2027</strong>, with practice on Friday, qualifying on
        Saturday and the Grand Prix on Sunday. Session times are published by Formula 1 closer to the event, so check the
        official schedule before you book tours.
      </p>

      <h2>The Baku City Circuit</h2>
      <p>
        The Baku City Circuit is one of the fastest street tracks on the calendar. Cars race along the seafront Boulevard at
        top speed, then squeeze through the narrow, twisting section beside the walls of the <strong>Old City</strong>. That
        mix of long straights and tight corners is why Baku is known for dramatic, unpredictable races.
      </p>

      <h2>Where to stay for the Baku Grand Prix</h2>
      <p>
        The circuit runs through the city centre, so staying central means you can walk to the track. The trade-off is
        price: hotels near the Boulevard and Old City fill up early and cost more on race weekend.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Old City and Boulevard:</strong> walking distance to the track, but book as early as possible.</li>
        <li><strong>Nizami Street and Fountain Square:</strong> lively, central and close to the action.</li>
        <li><strong>Further out:</strong> cheaper hotels near metro stations, with an easy ride into the centre.</li>
      </ul>
      <p>
        Expect road closures around the circuit during race week. Plan to walk or use the metro rather than taxis near the
        track.
      </p>

      <h2>Getting to Baku for the race</h2>
      <p>
        Azerbaijan Airlines flies direct from London Heathrow, and there are good one-stop connections from the USA via
        Istanbul, Doha and Dubai. See our full guide to{" "}
        <Link href="/blog/flights-to-baku" className="text-primary underline">flights to Baku from the UK and USA</Link>.
        Flights get more expensive close to race weekend, so book early. Don&apos;t forget your{" "}
        <Link href="/blog/azerbaijan-e-visa-guide" className="text-primary underline">Azerbaijan e-visa</Link>.
      </p>

      <h2>What to do in Baku around race weekend</h2>
      <p>
        Many fans arrive a few days early. Use the days before practice to see the sights the race cars speed past:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Walk the Old City and Maiden Tower: <TourLink href={tours.oldTown}>Baku Old Town walking tour</TourLink></li>
        <li>See the flames of Yanar Dag at sunset: <TourLink href={tours.fire}>Fire Temple &amp; Burning Mountain tour</TourLink></li>
        <li>Visit the prehistoric rock art and mud volcanoes: <TourLink href={tours.gobustan}>Gobustan day trip</TourLink></li>
      </ul>
      <p>
        Want a full plan? Follow our <Link href="/blog/baku-itinerary" className="text-primary underline">3–5 day Baku itinerary</Link>.
      </p>

      <TipBox title="Grand Prix travel tips">
        <p>✓ <strong>Book early:</strong> hotels and flights rise sharply as race weekend approaches.</p>
        <p>✓ <strong>Weather:</strong> late September is usually warm and pleasant, but bring a light layer for windy evenings.</p>
        <p>✓ <strong>Tickets:</strong> buy only from the official race organisers or authorised sellers.</p>
        <p>✓ <strong>Tours:</strong> book day trips for the days before or after the race, when roads are clear.</p>
      </TipBox>

      <Faq
        items={[
          { q: "When is the 2027 Azerbaijan Grand Prix?", a: "Friday 24 to Sunday 26 September 2027, in Baku." },
          { q: "Where is the Baku F1 track?", a: "In the city centre. The Baku City Circuit is a street circuit that runs along the seafront Boulevard and around the Old City walls." },
          { q: "Do I need a visa for the Baku Grand Prix?", a: "Most visitors, including UK and US citizens, need a visa and can apply online for an e-visa before travelling." },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Flights to Baku                                                  */
/* ------------------------------------------------------------------ */
function FlightsContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Baku is easier to reach than most people think. This guide covers <strong>flights to Baku from the UK, USA, India
        and Pakistan</strong>: who flies direct, the best connections and how to find a good fare.
      </p>

      <h2>Baku&apos;s airport</h2>
      <p>
        International flights land at <strong>Heydar Aliyev International Airport (GYD)</strong>, about 30 minutes from the
        city centre. <strong>Azerbaijan Airlines (AZAL)</strong> is the national airline and runs most direct routes. Once you
        land, here is <Link href="/blog/baku-airport-to-city-centre" className="text-primary underline">how to get from the airport to the city centre</Link>.
      </p>

      <h2>London to Baku flights</h2>
      <p>
        Azerbaijan Airlines flies <strong>direct from London Heathrow to Baku</strong>, currently around three times a week.
        The flight takes about <strong>5 hours 30 minutes</strong>. If the direct dates don&apos;t suit you, one-stop
        options via Istanbul (Turkish Airlines or Pegasus) are often cheaper and run daily.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Direct:</strong> London Heathrow to Baku with Azerbaijan Airlines, about 5h30.</li>
        <li><strong>One stop:</strong> via Istanbul, Doha or Dubai, usually 8–12 hours in total.</li>
        <li><strong>From other UK cities:</strong> Manchester, Birmingham and Edinburgh connect via Istanbul or the Gulf.</li>
      </ul>

      <h2>Flights to Baku from the USA (Boston, New York and more)</h2>
      <p>
        There are <strong>no direct flights from the USA to Baku</strong>, but one-stop connections are easy. From{" "}
        <strong>Boston</strong>, <strong>New York</strong> and other major US cities, the most common routings are:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Via Istanbul</strong> with Turkish Airlines, often the shortest total journey.</li>
        <li><strong>Via Doha</strong> with Qatar Airways.</li>
        <li><strong>Via Dubai</strong> with Emirates or flydubai.</li>
        <li><strong>Via Europe</strong>, connecting in cities such as London or Frankfurt.</li>
      </ul>
      <p>
        Expect a total travel time of roughly 14 to 20 hours from the US East Coast, depending on your connection.
      </p>

      <h2>Flights to Baku from India and Pakistan</h2>
      <p>
        Azerbaijan has become a popular short-haul trip from South Asia. Azerbaijan Airlines flies{" "}
        <strong>direct from Delhi to Baku</strong> (around 5 hours), and Pakistan International Airlines has operated direct
        flights from <strong>Lahore</strong>. From Karachi and Islamabad, connections via Dubai, Doha or Istanbul are easy.
        Check the airlines&apos; websites for the latest schedules, as routes and frequencies change by season.
      </p>

      <h2>How to find cheap flights to Baku</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Be flexible:</strong> compare a few days either side; midweek flights are often cheaper.</li>
        <li><strong>Avoid race week:</strong> fares jump around the <Link href="/blog/azerbaijan-grand-prix-2027" className="text-primary underline">Azerbaijan Grand Prix</Link> in September.</li>
        <li><strong>Consider one stop:</strong> a connection via Istanbul or the Gulf can cost much less than a direct flight.</li>
        <li><strong>Book shoulder season:</strong> spring and autumn offer good weather and better prices than summer.</li>
      </ul>

      <TipBox title="Before you fly">
        <p>✓ <strong>Visa:</strong> apply for your <Link href="/blog/azerbaijan-e-visa-guide" className="text-primary underline">Azerbaijan e-visa</Link> online before departure.</p>
        <p>✓ <strong>Currency:</strong> Azerbaijan uses the manat (AZN). Cards are widely accepted in Baku.</p>
        <p>✓ <strong>Plan your days:</strong> use our <Link href="/blog/baku-itinerary" className="text-primary underline">Baku itinerary</Link> and book popular tours in advance.</p>
      </TipBox>

      <Faq
        items={[
          { q: "How long is the flight from London to Baku?", a: "About 5 hours 30 minutes direct from London Heathrow with Azerbaijan Airlines." },
          { q: "Are there direct flights from Boston to Baku?", a: "No. Flights from Boston connect once, most often via Istanbul, Doha or Dubai." },
          { q: "Which airport do I fly into for Baku?", a: "Heydar Aliyev International Airport (GYD), about 30 minutes from the city centre." },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Azerbaijan e-visa                                                */
/* ------------------------------------------------------------------ */
function EvisaContent() {
  const L = ({ href, children }: { href: string; children: ReactNode }) => (
    <Link href={href} className="text-primary underline">
      {children}
    </Link>
  )
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Most visitors need a visa for Azerbaijan, but you don&apos;t need to visit an embassy. The official{" "}
        <strong>e-visa, called the ASAN Visa</strong>, is applied for online in about 10 minutes and usually arrives by
        email within 3 working days, or within 3 hours if you pay for the urgent service. This guide covers who needs it,
        what it costs, the documents you need and the mistakes that get applications refused.
      </p>

      <div className="bg-muted/50 p-6 rounded-lg">
        <p className="text-sm">
          <strong>Only apply on the official portal:</strong>{" "}
          <a href="https://evisa.gov.az/en/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            evisa.gov.az
          </a>
          . Many look-alike websites charge two or three times the real price. Visa rules and fees can change, so check the
          portal for the latest details before you pay.
        </p>
      </div>

      <h2>Azerbaijan e-visa at a glance</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody>
            {[
              ["Official name", "ASAN Visa (Azerbaijan electronic visa)"],
              ["Where to apply", "evisa.gov.az (official government portal)"],
              ["Standard processing", "Up to 3 working days"],
              ["Urgent processing", "Within 3 hours, including weekends and holidays"],
              ["Cost (at time of writing)", "Around US$25–30 standard, about US$60 urgent, paid by card"],
              ["Length of stay", "Up to 30 days"],
              ["Entries", "Single entry"],
              ["Validity", "Use it within 90 days of issue"],
            ].map(([k, v]) => (
              <tr key={k} className="border-b border-border">
                <th className="py-3 pr-4 font-semibold align-top">{k}</th>
                <td className="py-3 text-muted-foreground">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Who needs an e-visa for Azerbaijan?</h2>
      <p>
        Citizens of around 100 countries can get the e-visa, including the <strong>United Kingdom</strong>, the{" "}
        <strong>United States</strong>, Canada, Australia, the EU countries, the Gulf states, India and Pakistan. A small
        number of nationalities, including Turkey and most former Soviet countries, can enter <strong>visa-free</strong> for
        short stays. The portal checks your nationality as soon as you start, and lists every eligible country.
      </p>
      <p>
        Every traveller needs their own e-visa, <strong>including children and babies</strong>. If you hold two passports,
        apply with the one you will use to check in and enter Azerbaijan.
      </p>

      <h2>What you need before you start</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>A passport</strong> valid for at least 3 months after your e-visa expires. Six months of validity is the
          safe choice.
        </li>
        <li>
          <strong>A clear colour scan or photo of your passport information page</strong>, with all four corners and the
          two code lines at the bottom readable.
        </li>
        <li>
          <strong>Your travel dates and the address of your hotel</strong> or accommodation in Azerbaijan.
        </li>
        <li>
          <strong>A debit or credit card</strong> to pay the fee online.
        </li>
        <li>
          <strong>An email address</strong> you can check while you travel, as the e-visa is sent there.
        </li>
      </ul>

      <h2>How to apply for the ASAN Visa, step by step</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Go to <strong>evisa.gov.az</strong>, choose your language and click to apply for an e-visa.</li>
        <li>Select your nationality, then your expected arrival date and the type of processing (standard or urgent).</li>
        <li>
          Enter your personal and passport details <strong>exactly</strong> as they appear in your passport, including
          middle names.
        </li>
        <li>Add your hotel address in Azerbaijan and upload the scan of your passport page.</li>
        <li>Check everything twice, then pay by card.</li>
        <li>
          When the e-visa is approved, download the PDF. Print a copy and keep it on your phone too: airline staff often
          ask to see it at check-in.
        </li>
      </ol>

      <h2>How long does the Azerbaijan e-visa take?</h2>
      <p>
        <strong>Standard</strong> applications are decided within <strong>3 working days</strong>, so apply at least a
        week before you fly. Weekends and Azerbaijani public holidays (such as Novruz in March and the New Year period) do
        not count as working days. If your trip is soon, the <strong>urgent</strong> option is processed within{" "}
        <strong>3 hours</strong>, even on weekends and holidays, for a higher fee.
      </p>

      <h2>How much does the e-visa cost?</h2>
      <p>
        At the time of writing, the standard e-visa costs <strong>around US$25–30</strong> and the urgent e-visa about{" "}
        <strong>US$60</strong> on the official portal. The exact fee is shown before you pay and can vary by nationality.
        The fee is not refunded if your application is refused, so check your details carefully. If a website asks for much
        more than this, you are almost certainly on an agency or copycat site rather than evisa.gov.az.
      </p>

      <h2>Staying more than 15 days? Register your stay</h2>
      <p>
        Foreign visitors who stay in Azerbaijan for <strong>more than 15 days</strong> must be registered with the State
        Migration Service. Hotels normally do this for you. If you are staying in an apartment or with friends, ask your
        host to register you, or do it yourself online through the migration service. Overstaying your e-visa can lead to
        a fine and problems entering Azerbaijan again.
      </p>

      <h2>Common e-visa mistakes (and how to avoid them)</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Paying a copycat website:</strong> search results often show agencies first. The official address is
          evisa.gov.az.
        </li>
        <li>
          <strong>Typos in your name or passport number:</strong> one wrong letter can mean you are refused boarding. You
          cannot edit an e-visa after it is issued, so you would need to apply and pay again.
        </li>
        <li>
          <strong>A blurry passport scan:</strong> this is one of the most common reasons for refusal.
        </li>
        <li>
          <strong>Wrong arrival date:</strong> your trip must start on or after the date you choose and fit inside the
          30-day stay.
        </li>
        <li>
          <strong>Leaving it too late before big events:</strong> apply early for busy weekends such as the{" "}
          <L href="/blog/azerbaijan-grand-prix-2027">Baku Formula 1 Grand Prix</L>.
        </li>
      </ul>

      <h2>Arriving by land from Georgia?</h2>
      <p>
        If you plan to travel overland, for example by road from Tbilisi to Sheki, check the current border situation on
        the official portal and with your government&apos;s travel advice before you go. Land borders have had different
        rules from airports in recent years, and flying into Baku is the simplest option for most visitors.
      </p>

      <TipBox title="Next steps for your trip">
        <p>
          ✓ Book your flights: <L href="/blog/flights-to-baku">flights to Baku from the UK and USA</L>
        </p>
        <p>
          ✓ Plan your budget: <L href="/blog/is-baku-expensive">how much a trip to Baku costs</L>
        </p>
        <p>
          ✓ Arrive smoothly: <L href="/blog/baku-airport-to-city-centre">Baku airport to city centre</L>
        </p>
        <p>
          ✓ Plan your days: <L href="/blog/baku-itinerary">3–5 day Baku itinerary</L>
        </p>
      </TipBox>

      <Faq
        items={[
          {
            q: "Is the ASAN Visa the same as the Azerbaijan e-visa?",
            a: "Yes. ASAN Visa is the official name of Azerbaijan's electronic visa system. You apply for it on evisa.gov.az.",
          },
          {
            q: "Do UK citizens need a visa for Azerbaijan?",
            a: "Yes. British citizens can apply online for the e-visa on evisa.gov.az before travelling.",
          },
          {
            q: "Do US citizens need a visa for Azerbaijan?",
            a: "Yes. US citizens can apply online for the e-visa, which allows a single stay of up to 30 days.",
          },
          {
            q: "Can I get a visa on arrival in Baku?",
            a: "Most visitors should not count on a visa on arrival. Get the e-visa online before you fly, as airlines usually check it at check-in.",
          },
          {
            q: "How fast can I get an Azerbaijan e-visa?",
            a: "Standard applications take up to 3 working days. The urgent service is processed within 3 hours, including weekends and holidays, for a higher fee.",
          },
          {
            q: "Can I extend my Azerbaijan e-visa?",
            a: "The e-visa allows up to 30 days. If you need to stay longer, contact the State Migration Service before your visa ends rather than overstaying.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 5. Airport to city centre                                           */
/* ------------------------------------------------------------------ */
function AirportContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Just landed at Heydar Aliyev International Airport? Here are the easiest ways to get from{" "}
        <strong>Baku airport to the city centre</strong>, whether you want the cheapest option or the quickest.
      </p>

      <h2>Option 1: Aeroexpress bus (cheapest)</h2>
      <p>
        The <strong>Aeroexpress bus</strong> runs from both terminals to <strong>28 May metro station</strong> (Baku railway
        station) in the city centre, stopping at Koroglu metro on the way. The journey takes about{" "}
        <strong>30 minutes</strong>, depending on traffic.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>How often:</strong> every 20 minutes from 06:00 to 23:15, then every 45 minutes overnight.</li>
        <li><strong>How to pay:</strong> you need a <strong>BakuCard</strong>, a rechargeable transport card. Buy and top it up at the machines outside the terminal exits.</li>
        <li><strong>Bonus:</strong> the same BakuCard works on the metro and city buses, and one card can be shared by a group.</li>
      </ul>

      <h2>Option 2: Taxi or ride-hailing app (quickest)</h2>
      <p>
        A taxi takes around 25–30 minutes to the centre, outside rush hour. For the fairest price, book through a
        ride-hailing app or use the official taxi rank, and agree the fare before you set off if there is no meter. Politely
        decline offers from unofficial drivers in the arrivals hall.
      </p>

      <h2>Option 3: Private transfer (easiest)</h2>
      <p>
        Travelling with family, lots of luggage or arriving late at night? A pre-booked private transfer means a driver meets
        you in arrivals with your name and takes you straight to your hotel.
      </p>

      <h2>Getting around Baku after you arrive</h2>
      <p>
        Baku&apos;s metro is cheap, clean and easy to use, and most sights in the centre are walkable. For trips outside the
        city, such as Gobustan or the fire sites, a tour is far easier than public transport:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><TourLink href={tours.gobustan}>Gobustan &amp; mud volcano day trip</TourLink></li>
        <li><TourLink href={tours.fire}>Fire Temple &amp; Burning Mountain tour</TourLink></li>
        <li><TourLink href={tours.oldTown}>Baku Old Town walking tour</TourLink></li>
      </ul>

      <TipBox title="Arrival checklist">
        <p>✓ Carry a printed copy of your <Link href="/blog/azerbaijan-e-visa-guide" className="text-primary underline">e-visa</Link>.</p>
        <p>✓ Get a BakuCard as soon as you land.</p>
        <p>✓ Have your hotel address saved offline on your phone.</p>
        <p>✓ Plan your stay with our <Link href="/blog/baku-itinerary" className="text-primary underline">Baku itinerary</Link>.</p>
      </TipBox>

      <Faq
        items={[
          { q: "How far is Baku airport from the city centre?", a: "About 25–30 minutes by road, depending on traffic." },
          { q: "Is there a bus from Baku airport to the city?", a: "Yes. The Aeroexpress bus runs from both terminals to 28 May metro station, every 20 minutes during the day." },
          { q: "Can I pay for the airport bus with cash?", a: "You pay with a BakuCard, which you can buy and top up at machines outside the terminal." },
        ]}
      />
    </div>
  )
}

export const newBlogPosts = [
  {
    slug: "baku-itinerary",
    title: "Baku Itinerary: How to Spend 3, 4 or 5 Days in Baku",
    category: "Itinerary",
    excerpt:
      "A day-by-day Baku itinerary for 3 to 5 days: the UNESCO Old City, Flame Towers, the fire mountains of the Absheron Peninsula, Gobustan mud volcanoes and the Caucasus mountains.",
    image: "/baku-flame-towers-skyline-sunset.jpg",
    date: "Oct 25, 2026",
    updated: "2026-10-25",
    readTime: "9 min read",
    keywords: "Baku itinerary, 3 days in Baku, 5 days in Baku, Baku travel itinerary, what to do in Baku",
    Content: BakuItineraryContent,
  },
  {
    slug: "azerbaijan-grand-prix-2027",
    title: "Azerbaijan Grand Prix 2027: Baku F1 Travel Guide",
    category: "Events",
    excerpt:
      "The 2027 Azerbaijan Grand Prix is on 24–26 September in Baku. Dates, the Baku City Circuit, where to stay, how to get there and what to do around race weekend.",
    image: "/baku-city-flame-towers-night.jpg",
    date: "Oct 25, 2026",
    updated: "2026-10-25",
    readTime: "7 min read",
    keywords: "Azerbaijan Grand Prix 2027, Baku F1, Baku Grand Prix, Baku City Circuit, F1 Baku travel",
    Content: GrandPrixContent,
  },
  {
    slug: "flights-to-baku",
    title: "Flights to Baku: Direct Routes from the UK, USA, India and Pakistan",
    category: "Flights",
    excerpt:
      "How to fly to Baku: direct London Heathrow flights, the best connections from Boston and New York, direct routes from Delhi and Lahore, and tips for cheaper fares.",
    image: "/baku-panorama-destinations.jpg",
    date: "Oct 25, 2026",
    updated: "2026-10-25",
    readTime: "8 min read",
    keywords: "flights to Baku, London to Baku flights, Boston to Baku flights, direct flights Baku, cheap flights Baku",
    Content: FlightsContent,
  },
  {
    slug: "azerbaijan-e-visa-guide",
    title: "Azerbaijan e-Visa (ASAN Visa): Cost, Processing Time and How to Apply",
    category: "Travel Tips",
    excerpt:
      "Do you need a visa for Azerbaijan? How to apply for the ASAN e-visa on evisa.gov.az, what it costs, how long it takes, the documents you need and the mistakes to avoid.",
    image: "/baku-old-city-maiden-tower.jpg",
    date: "Oct 25, 2026",
    updated: "2026-11-10",
    readTime: "8 min read",
    keywords: "Azerbaijan e-visa, Azerbaijan evisa, ASAN visa, e visa Azerbaijan, Azerbaijan visa cost, visa to Azerbaijan, Azerbaijan visa UK, Azerbaijan visa US",
    Content: EvisaContent,
  },
  {
    slug: "baku-airport-to-city-centre",
    title: "Baku Airport to City Centre: Bus, Taxi and Transfers",
    category: "Travel Tips",
    excerpt:
      "The easiest ways to get from Heydar Aliyev International Airport to central Baku: the Aeroexpress bus and BakuCard, taxis, ride-hailing apps and private transfers.",
    image: "/baku-boulevard-promenade.jpg",
    date: "Oct 25, 2026",
    updated: "2026-10-25",
    readTime: "5 min read",
    keywords: "Baku airport to city centre, Baku airport bus, Aeroexpress Baku, BakuCard, Baku airport taxi",
    Content: AirportContent,
  },
]
