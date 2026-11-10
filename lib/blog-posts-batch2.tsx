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

function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-primary underline">
      {children}
    </Link>
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

function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2">{children}</ul>
}

/* ------------------------------------------------------------------ */
/* 1. Best time to visit Baku                                          */
/* ------------------------------------------------------------------ */
function BestTimeContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        The best time to visit Baku is <strong>late April to June</strong> and <strong>September to October</strong>.
        Days are warm but not scorching, the Caspian breeze is pleasant rather than biting, and it is comfortable to walk
        the Old City and take day trips to Gobustan or the mountains. Here is what each season is really like, month by
        month, so you can pick the right time for your trip.
      </p>

      <h2>Baku weather at a glance</h2>
      <p>
        Baku has a dry, semi-arid climate with hot summers, mild but windy winters and little rain for most of the year.
        The city is famous for its wind, so even a sunny day can feel cooler on the seafront Boulevard. Pack a light
        jacket in every season except high summer.
      </p>

      <h2>Spring (March to May): the sweet spot begins</h2>
      <p>
        March is still cool and changeable, but by <strong>mid-April</strong> Baku warms up nicely and parks start to
        bloom. <strong>Novruz</strong>, the spring new year festival around 20 to 21 March, fills the Old City with music,
        bonfires and sweet pastries such as shekerbura and pakhlava, and it is one of the most memorable times to visit.
        May is close to perfect: warm days, cool evenings and long hours of daylight for sightseeing.
      </p>

      <h2>Summer (June to August): hot, lively and busy</h2>
      <p>
        June is pleasant, but <strong>July and August</strong> are hot, often in the low to mid 30s Celsius, with strong
        sun and very little rain. It is beach season on the Absheron Peninsula and the Boulevard is busy late into the
        evening. Plan outdoor sightseeing for the morning and evening, and save museums and cafés for the afternoon heat.
        This is also the best time to escape to the cooler mountains around{" "}
        <In href="/blog/quba-shahdag-day-trip">Quba and Shahdag</In>.
      </p>

      <h2>Autumn (September to November): warm days, fewer crowds</h2>
      <p>
        <strong>September and October</strong> are our favourite months. The sea is still warm in early September, the
        light is golden and the summer crowds have gone. Autumn is also when the{" "}
        <In href="/blog/azerbaijan-grand-prix-2027">Formula 1 Azerbaijan Grand Prix</In> has been held on the Baku City
        Circuit in recent years, so check race dates as hotels fill quickly that weekend. November turns cooler and windier.
      </p>

      <h2>Winter (December to February): quiet city, snowy mountains</h2>
      <p>
        Baku itself rarely gets heavy snow, but winter days are chilly, grey and windy, usually only a few degrees above
        freezing. Prices are lower and the Old City is peaceful. Winter is also <strong>ski season</strong>: the Shahdag and
        Tufandag resorts usually open from mid-December to early April, about three hours from the city.
      </p>

      <TipBox title="Quick guide: when should you go?">
        <p>✓ <strong>Best overall:</strong> late April to June, September to October</p>
        <p>✓ <strong>Festivals:</strong> Novruz in late March</p>
        <p>✓ <strong>Beach and nightlife:</strong> July and August</p>
        <p>✓ <strong>Skiing:</strong> mid-December to March</p>
        <p>✓ <strong>Lowest prices:</strong> November to February, excluding New Year</p>
      </TipBox>

      <p>
        Whenever you go, book popular experiences such as a{" "}
        <TourLink href={tours.gobustan}>Gobustan and mud volcano day trip</TourLink> a few days ahead in spring and autumn,
        when they sell out fastest. Ready to plan? Our <In href="/blog/baku-itinerary">3 to 5 day Baku itinerary</In> and{" "}
        <In href="/blog/flights-to-baku">guide to flights to Baku</In> will help you put it together.
      </p>

      <Faq
        items={[
          {
            q: "What is the hottest month in Baku?",
            a: "July and August are the hottest months, with daytime temperatures often in the low to mid 30s Celsius and strong sunshine.",
          },
          {
            q: "Does it snow in Baku?",
            a: "Snow in the city is unusual and rarely lasts, though cold winds make winter feel chilly. For reliable snow, head to the Shahdag or Tufandag ski resorts in the mountains.",
          },
          {
            q: "Is Baku windy?",
            a: "Yes. Baku is nicknamed the City of Winds, and breezes off the Caspian are common all year. Bring a layer even on sunny days.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Things to do in Baku                                             */
/* ------------------------------------------------------------------ */
function ThingsToDoContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Baku is a city of contrasts: a walled medieval old town, glass towers that glow like flames at night, and an
        ancient landscape of fire, rock art and bubbling mud volcanoes just outside town. These are the best things to do
        in Baku, from the unmissable sights to the experiences most visitors only discover on their second trip.
      </p>

      <h2>In the city</h2>
      <h3 className="font-semibold text-2xl">1. Explore the Old City (Icherisheher)</h3>
      <p>
        The UNESCO-listed walled Old City is the place to start. Get lost in its stone lanes, caravanserais and tiny
        museums. Read our <In href="/blog/baku-old-city-guide">Baku Old City guide</In> or join a{" "}
        <TourLink href={tours.oldTown}>guided Old Town walking tour</TourLink> to hear the stories behind the walls.
      </p>
      <h3 className="font-semibold text-2xl">2. Climb the Maiden Tower</h3>
      <p>
        Baku's most famous landmark is wrapped in legend, and nobody is entirely sure how old it is. The view from the top
        over the Old City and Caspian Sea is worth the climb.
      </p>
      <h3 className="font-semibold text-2xl">3. Visit the Palace of the Shirvanshahs</h3>
      <p>
        This 15th-century palace complex, with its mosque, mausoleum and bathhouse, is the finest piece of medieval
        architecture in Baku.
      </p>
      <h3 className="font-semibold text-2xl">4. Walk the Baku Boulevard</h3>
      <p>
        The seaside promenade runs for several kilometres along the Caspian. Come at sunset, rent a bike or take a short
        boat trip from the pier.
      </p>
      <h3 className="font-semibold text-2xl">5. See the Flame Towers light up from Highland Park</h3>
      <p>
        Walk or ride the funicular up to Highland Park (Dagustu Park) after dark, when the Flame Towers turn into giant
        animated flames above the city. It is the best free view in Baku.
      </p>
      <h3 className="font-semibold text-2xl">6. Admire the Heydar Aliyev Center</h3>
      <p>
        Zaha Hadid's flowing white building has no straight lines and is one of the most photographed buildings in the
        region. Even if you skip the exhibitions, walk around the outside.
      </p>
      <h3 className="font-semibold text-2xl">7. Learn about carpets at the Azerbaijan Carpet Museum</h3>
      <p>
        Housed in a building shaped like a rolled-up carpet on the Boulevard, it explains why Azerbaijani carpet weaving is
        recognised by UNESCO as intangible cultural heritage.
      </p>
      <h3 className="font-semibold text-2xl">8. Ride the metro</h3>
      <p>
        Some Baku metro stations are grand Soviet-era halls with chandeliers and mosaics. A ride costs very little, and it
        is the easiest way to cross the city. See our <In href="/blog/getting-around-baku">getting around Baku guide</In>.
      </p>
      <h3 className="font-semibold text-2xl">9. Eat your way around the city</h3>
      <p>
        Try plov, dolma, qutab and tender lamb kebabs, and finish with tea served with jam. Our{" "}
        <In href="/blog/food-guide">Azerbaijani food guide</In> covers what to order, or join a{" "}
        <TourLink href={tours.food}>local food tour</TourLink>.
      </p>
      <h3 className="font-semibold text-2xl">10. Shop at Nizami Street and the Old City craft shops</h3>
      <p>
        Nizami Street is Baku's main pedestrian shopping street. For souvenirs, look for carpets, copperware and the
        traditional silk headscarves known as kelaghayi.
      </p>

      <h2>Day trips from Baku</h2>
      <h3 className="font-semibold text-2xl">11. Gobustan rock art and mud volcanoes</h3>
      <p>
        Thousands of prehistoric rock carvings sit about an hour south of Baku, next to a field of small, gurgling mud
        volcanoes. Full details in our <In href="/blog/gobustan-mud-volcanoes-day-trip">Gobustan day trip guide</In>.
      </p>
      <h3 className="font-semibold text-2xl">12. Yanar Dag, the burning mountain</h3>
      <p>
        A hillside where natural gas has been burning for decades. It is most dramatic after dark.
      </p>
      <h3 className="font-semibold text-2xl">13. Ateshgah Fire Temple</h3>
      <p>
        A pentagonal temple complex once used by fire worshippers and traders. Combine it with Yanar Dag on a{" "}
        <TourLink href={tours.fire}>fire temple and fire mountain tour</TourLink>, or read our{" "}
        <In href="/blog/yanar-dag-ateshgah-fire-temple">guide to Baku's fire sites</In>.
      </p>
      <h3 className="font-semibold text-2xl">14. The mountains of Quba and Shahdag</h3>
      <p>
        Swap the city for forests, mountain villages and, in winter, skiing. See our{" "}
        <In href="/blog/quba-shahdag-day-trip">Quba and Shahdag guide</In>.
      </p>
      <h3 className="font-semibold text-2xl">15. Sheki and Gabala</h3>
      <p>
        With two or three extra days, head north-west to Sheki's silk-road caravanserai and palace. Our{" "}
        <In href="/blog/baku-to-sheki-gabala">Baku to Sheki route guide</In> covers the best stops.
      </p>

      <TipBox title="How long do you need?">
        <p>
          Three days covers the city, the fire sites and Gobustan. Add a day or two for the mountains. Use our{" "}
          <In href="/blog/baku-itinerary">Baku itinerary</In> to plan it day by day.
        </p>
      </TipBox>

      <Faq
        items={[
          {
            q: "What is Baku best known for?",
            a: "Its UNESCO-listed Old City and Maiden Tower, the Flame Towers, its oil history, and the natural fire sites and mud volcanoes nearby.",
          },
          {
            q: "What can you do in Baku for free?",
            a: "Walk the Old City lanes and the Boulevard, see the Flame Towers light show from Highland Park, and admire the Heydar Aliyev Center from outside.",
          },
          {
            q: "Is Baku worth visiting?",
            a: "Yes. Few cities combine medieval heritage, bold modern architecture and unusual natural sights within an hour of each other.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Gobustan and mud volcanoes                                       */
/* ------------------------------------------------------------------ */
function GobustanContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        A day trip to <strong>Gobustan</strong> is one of the highlights of any visit to Baku. In a single day you can see
        thousands of prehistoric rock carvings in a UNESCO World Heritage landscape, then stand next to bubbling, burping
        mud volcanoes. Here is how to plan it.
      </p>

      <h2>What is Gobustan?</h2>
      <p>
        Gobustan Rock Art Cultural Landscape lies about 60 km south-west of central Baku, roughly an hour's drive. Its
        rocky hills are covered in more than 6,000 carvings made over thousands of years, showing hunters, boats, dancing
        figures and animals. It was added to the UNESCO World Heritage List in 2007.
      </p>

      <h2>What to see at the Gobustan reserve</h2>
      <Ul>
        <li>
          <strong>The museum:</strong> start in the modern museum by the entrance, which explains the carvings and the
          people who made them.
        </li>
        <li>
          <strong>The rock art trails:</strong> marked paths lead through the boulders to the best-preserved petroglyphs.
          Allow at least an hour.
        </li>
        <li>
          <strong>The gaval dash:</strong> a flat rock that rings like a tambourine when you tap it with a small stone.
        </li>
      </Ul>

      <h2>The mud volcanoes</h2>
      <p>
        Azerbaijan has a large share of the world's mud volcanoes. Near Gobustan you can walk among small cones that gently
        bubble cold, grey mud. The track up to them is unpaved, so tours and local drivers usually switch to sturdy cars for
        the last stretch from Gobustan village. After rain the track can become impassable, so trips are sometimes
        changed at short notice.
      </p>

      <h2>How to get to Gobustan from Baku</h2>
      <Ul>
        <li>
          <strong>Guided day trip (easiest):</strong> most tours combine Gobustan, the mud volcanoes and often the fire
          sites in one day. <TourLink href={tours.gobustan}>See Gobustan day trip options</TourLink>.
        </li>
        <li>
          <strong>Taxi or ride-hailing:</strong> agree a return price with waiting time before you set off.
        </li>
        <li>
          <strong>Public transport:</strong> possible with buses heading south to Gobustan town, but you will still need a
          local driver for the reserve and the volcanoes, so it rarely saves time.
        </li>
      </Ul>

      <TipBox title="Tips for your Gobustan trip">
        <p>✓ Wear sturdy shoes: the rock art trails are uneven and the volcano area is muddy</p>
        <p>✓ Bring water, sunscreen and a hat in summer: there is little shade</p>
        <p>✓ Go in the morning in hot months</p>
        <p>✓ Combine it with Yanar Dag and Ateshgah for a full Absheron day</p>
      </TipBox>

      <p>
        Pair your trip with an evening at the burning hillside of Yanar Dag. Our{" "}
        <In href="/blog/yanar-dag-ateshgah-fire-temple">fire sites guide</In> explains how, and our{" "}
        <In href="/blog/baku-itinerary">Baku itinerary</In> shows how it fits into a longer stay.
      </p>

      <Faq
        items={[
          {
            q: "How far is Gobustan from Baku?",
            a: "About 60 km south-west of the city centre, roughly an hour by road.",
          },
          {
            q: "Can you visit the mud volcanoes on your own?",
            a: "The last part of the track is rough, so most visitors use a tour or a local driver from Gobustan village. After heavy rain the track may be closed.",
          },
          {
            q: "How long do you need at Gobustan?",
            a: "Allow half a day for the museum, rock art and mud volcanoes, or a full day if you add the fire sites.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Yanar Dag and Ateshgah                                           */
/* ------------------------------------------------------------------ */
function FireSitesContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Azerbaijan is called the <strong>Land of Fire</strong> for a reason. On the Absheron Peninsula, just outside Baku,
        natural gas seeps from the ground and has fed flames for centuries. The two places to see it are{" "}
        <strong>Yanar Dag</strong>, the burning mountain, and the <strong>Ateshgah Fire Temple</strong>.
      </p>

      <h2>Yanar Dag: the burning mountain</h2>
      <p>
        Yanar Dag is a hillside on the northern edge of Baku where a wall of flame burns continuously along a sandstone
        bank. It is not a huge mountain, but the effect is mesmerising, especially <strong>after dark</strong> and in
        winter, when the warmth of the fire is welcome. There is a small visitor centre and a viewing area in front of the
        flames.
      </p>

      <h2>Ateshgah Fire Temple</h2>
      <p>
        In Surakhani, east of the city, the Ateshgah is a fortified, pentagonal complex built around a central fire altar.
        It was used by fire worshippers and by Indian traders travelling the trade routes, and their inscriptions can
        still be seen on the walls. The small cells around the courtyard now hold displays on its history and on fire
        worship in the region.
      </p>

      <h2>How to visit both in one trip</h2>
      <p>
        Yanar Dag and Ateshgah are on opposite sides of the peninsula but close enough to combine in half a day. The
        easiest option is a{" "}
        <TourLink href={tours.fire}>private fire temple and fire mountain tour</TourLink>, which handles the driving and
        times the visit so you reach Yanar Dag around sunset. You can also take a taxi or ride-hailing app between the two
        and back to the centre.
      </p>

      <TipBox title="Make the most of the Land of Fire">
        <p>✓ Visit Ateshgah in daylight, then Yanar Dag at dusk</p>
        <p>✓ Bring a warm layer in winter: the peninsula is windy</p>
        <p>✓ Add Gobustan and the mud volcanoes for a full day</p>
      </TipBox>

      <p>
        Planning the rest of your trip? See the <In href="/blog/things-to-do-in-baku">best things to do in Baku</In> and our{" "}
        <In href="/blog/gobustan-mud-volcanoes-day-trip">Gobustan and mud volcanoes guide</In>.
      </p>

      <Faq
        items={[
          {
            q: "Has Yanar Dag always been burning?",
            a: "Its flames have burned for many decades, fed by natural gas seeping from the hillside. Similar natural fires gave Azerbaijan its name, Land of Fire.",
          },
          {
            q: "Is the fire at Ateshgah natural today?",
            a: "The original natural gas flow faded in the 20th century, and the flame at the altar is now supplied by gas from the city network.",
          },
          {
            q: "When is the best time to visit Yanar Dag?",
            a: "Around sunset and after dark, when the flames look most dramatic.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 5. Where to stay in Baku                                            */
/* ------------------------------------------------------------------ */
function WhereToStayContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Choosing the right area makes a big difference in Baku. The city centre is compact, so most visitors stay within
        walking distance of the Old City and the Boulevard. Here are the best areas to stay in Baku, and who each one suits.
      </p>

      <h2>1. Old City (Icherisheher): for atmosphere</h2>
      <p>
        Staying inside the walls means waking up among medieval lanes and caravanserais, with the Maiden Tower on your
        doorstep. Hotels here are mostly small boutique guesthouses. Some lanes are steep and cobbled, and cars have
        limited access, so pack light. Best for first-time visitors and couples.
      </p>

      <h2>2. Fountain Square and Nizami Street: for convenience</h2>
      <p>
        Just outside the Old City walls, this is the lively heart of modern Baku, full of restaurants, cafés and shops.
        You can walk to the Old City, the Boulevard and two metro stations. Best for short stays and anyone who wants to
        be in the middle of everything.
      </p>

      <h2>3. The Boulevard and seafront: for views</h2>
      <p>
        Hotels along Neftchilar Avenue and the Caspian promenade have sea views and are a short walk from the Carpet
        Museum and the Old City. Best for a relaxed stay and evening walks by the water.
      </p>

      <h2>4. Around the Flame Towers and Highland Park: for luxury</h2>
      <p>
        The hill above the centre is home to some of Baku's grandest hotels, with sweeping views over the bay. The
        funicular takes you down to the Boulevard. Best for a special occasion.
      </p>

      <h2>5. Port Baku and the White City: for modern apartments</h2>
      <p>
        East of the centre, newer districts offer modern apartments and business hotels, often with more space for the
        money. You will rely more on taxis or the metro. Best for longer stays and families.
      </p>

      <TipBox title="Our quick pick">
        <p>✓ <strong>First visit, 2 to 4 nights:</strong> Old City or Fountain Square</p>
        <p>✓ <strong>Family trip:</strong> Boulevard or an apartment near Port Baku</p>
        <p>✓ <strong>Grand Prix weekend:</strong> book months ahead, as central hotels sell out</p>
      </TipBox>

      <p>
        Wherever you stay, the airport is about 30 minutes away. Our{" "}
        <In href="/blog/baku-airport-to-city-centre">airport to city centre guide</In> explains the options, and our{" "}
        <In href="/blog/getting-around-baku">getting around Baku guide</In> covers the metro and taxis.
      </p>

      <Faq
        items={[
          {
            q: "What is the best area to stay in Baku for first-time visitors?",
            a: "The Old City or the streets around Fountain Square, both within walking distance of the main sights.",
          },
          {
            q: "Is it better to stay in the Old City or outside?",
            a: "Inside is more atmospheric; just outside is more convenient for restaurants, transport and taxis. Both are central.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 6. Is Baku safe                                                     */
/* ------------------------------------------------------------------ */
function SafetyContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        <strong>Is Baku safe for tourists?</strong> For most visitors, yes. Baku is generally regarded as a safe city, with
        a visible police presence, well-lit central streets and low levels of street crime compared with many European
        capitals. As anywhere, a little common sense goes a long way. Here is what to know before you go.
      </p>

      <h2>Official travel advice</h2>
      <p>
        Always check your government's latest advice before travelling. At the time of writing (November 2026), the UK
        Foreign, Commonwealth and Development Office (FCDO) does <strong>not</strong> advise against travel to Baku. It
        advises against all travel to within 5 km of the border with Armenia, and against all but essential travel to
        several districts in the south-west affected by past conflict, where landmines and unexploded ordnance remain a
        risk. These areas are far from Baku and the usual tourist routes. Read the latest version on{" "}
        <a href="https://www.gov.uk/foreign-travel-advice/azerbaijan" target="_blank" rel="noopener noreferrer" className="text-primary underline">
          GOV.UK
        </a>
        , as advice can change quickly.
      </p>

      <h2>Everyday safety in Baku</h2>
      <Ul>
        <li>
          <strong>Taxis:</strong> use ride-hailing apps or official taxis, and agree the fare first if there is no meter.
        </li>
        <li>
          <strong>Pickpockets:</strong> rare, but keep an eye on bags in crowded spots and on the metro.
        </li>
        <li>
          <strong>Roads:</strong> traffic is fast and drivers do not always stop at crossings. Use underpasses where you can.
        </li>
        <li>
          <strong>Photography:</strong> avoid photographing government, military and security buildings.
        </li>
      </Ul>

      <h2>Is Baku safe for solo and female travellers?</h2>
      <p>
        Many solo and female travellers visit Baku without problems. Azerbaijan is a secular country, and the city centre
        is relaxed and cosmopolitan. Dress is casual in Baku, though modest clothing is respectful when visiting mosques
        and rural areas.
      </p>

      <TipBox title="Before you travel">
        <p>✓ Check entry rules and apply for your e-visa if needed: see our <In href="/blog/azerbaijan-e-visa-guide">Azerbaijan e-visa guide</In></p>
        <p>✓ Take out travel insurance that covers the activities you plan</p>
        <p>✓ Save local emergency numbers and your hotel address offline</p>
      </TipBox>

      <p>
        Prefer to explore with a local? A <TourLink href={tours.oldTown}>guided Old Town walking tour</TourLink> is a
        relaxed way to get your bearings on day one.
      </p>

      <Faq
        items={[
          {
            q: "Is Baku safe at night?",
            a: "The central areas, including the Old City, Fountain Square and the Boulevard, are busy and well lit in the evening. Use a taxi app late at night.",
          },
          {
            q: "Do I need a visa for Azerbaijan?",
            a: "Many nationalities can get an e-visa online before travel. Check our e-visa guide and the official ASAN Visa website for your nationality.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 7. Getting around Baku                                              */
/* ------------------------------------------------------------------ */
function GettingAroundContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Baku is easy and cheap to get around. The centre is walkable, the metro is fast, and taxis booked through an app
        are inexpensive by European standards. Here is everything you need to know about getting around Baku.
      </p>

      <h2>The Baku Metro</h2>
      <p>
        The metro is the quickest way to cross the city. Some of its Soviet-era stations are worth seeing in their own
        right, with marble halls and mosaics. Since <strong>1 October 2025</strong> a single ride costs{" "}
        <strong>0.60 AZN</strong>, with a flat fare whatever the distance.
      </p>
      <p>
        You pay with a rechargeable transport card, the <strong>BakuCard</strong>, sold and topped up at machines in metro
        stations. Several people can share one card by tapping it once for each person. Keep the card for your whole
        stay, as it also works on city buses and the airport bus.
      </p>

      <h2>Buses</h2>
      <p>
        City buses go almost everywhere the metro does not and use the same BakuCard. Route maps can be confusing for
        visitors, so a map app is helpful. The <strong>Aeroexpress</strong> bus runs between the airport and the city;
        see our <In href="/blog/baku-airport-to-city-centre">airport transfer guide</In>.
      </p>

      <h2>Taxis and ride-hailing apps</h2>
      <p>
        Ride-hailing apps such as <strong>Bolt</strong> and <strong>Uber</strong> operate in Baku and are the easiest way to
        get a fair price without haggling. The purple London-style cabs are comfortable but cost more, and street taxis
        without a meter should agree the fare before you get in.
      </p>

      <h2>Walking and cycling</h2>
      <p>
        The Old City, Fountain Square, Nizami Street and the Boulevard are all within walking distance of each other. The
        seafront Boulevard is also great for cycling, with bike hire available along the promenade in the warmer months.
      </p>

      <h2>Getting out of the city</h2>
      <p>
        For Gobustan, the fire sites and the mountains, a guided tour or a hired driver saves a lot of time, as public
        transport to these places is slow. Long-distance buses to regions such as Sheki and Quba leave from Baku
        International Bus Terminal, next to Avtovagzal metro station.
      </p>

      <TipBox title="Quick tips">
        <p>✓ Buy a BakuCard on arrival and top it up as you go</p>
        <p>✓ Use a ride-hailing app for late nights and trips with luggage</p>
        <p>✓ Book a <TourLink href={tours.gobustan}>day trip</TourLink> for Gobustan and the mud volcanoes</p>
      </TipBox>

      <Faq
        items={[
          {
            q: "How much is the metro in Baku?",
            a: "A single ride has cost 0.60 AZN since 1 October 2025, paid with a rechargeable BakuCard.",
          },
          {
            q: "Is Uber available in Baku?",
            a: "Yes, and Bolt is also widely used. Both are a simple way to avoid haggling over fares.",
          },
          {
            q: "Is Baku walkable?",
            a: "The historic and central areas are very walkable. Use the metro or a taxi for longer distances.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 8. Baku to Sheki and Gabala                                         */
/* ------------------------------------------------------------------ */
function ShekiContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        If you have a few extra days, the road from Baku to <strong>Sheki</strong> is one of the most rewarding trips in
        Azerbaijan. It climbs from the dry Absheron plains into green mountain foothills, past mosques, copper-making
        villages and waterfalls, to a silk-road town with a palace covered in stained glass.
      </p>

      <h2>How far is Sheki from Baku?</h2>
      <p>
        Sheki is about <strong>360 km</strong> north-west of Baku. The direct drive takes around 4.5 to 5 hours without
        stops, but most travellers spread the journey over a day or two to enjoy the sights along the way.
      </p>

      <h2>How to get from Baku to Sheki</h2>
      <Ul>
        <li>
          <strong>Bus or minibus:</strong> leave from Baku International Bus Terminal (Avtovagzal metro station) several
          times a day and take roughly 5 to 6.5 hours. Tickets can be booked in advance online.
        </li>
        <li>
          <strong>Hired driver or tour:</strong> the most flexible option if you want to stop along the way.
        </li>
        <li>
          <strong>Train:</strong> an overnight service has linked Baku with Sheki station, which is about 20 km from the
          town centre. Services have been suspended at times, so check the current timetable before planning around it.
        </li>
        <li>
          <strong>Self-drive:</strong> roads are good on the main route, though local driving can be assertive.
        </li>
      </Ul>

      <h2>Best stops on the way</h2>
      <Ul>
        <li><strong>Diri Baba Mausoleum:</strong> a small mausoleum built into a cliff face, about an hour from Baku.</li>
        <li><strong>Shamakhi Juma Mosque:</strong> one of the oldest mosque sites in the Caucasus.</li>
        <li><strong>Lahij:</strong> a mountain village famous for its coppersmiths, reached by a winding road.</li>
        <li><strong>Gabala:</strong> lakes, waterfalls such as Yeddi Gozel, and the Tufandag cable cars.</li>
      </Ul>

      <h2>What to see in Sheki</h2>
      <Ul>
        <li><strong>Palace of the Shaki Khans:</strong> an 18th-century summer palace with dazzling shebeke stained-glass windows.</li>
        <li><strong>The Caravanserai:</strong> a huge silk-road inn where you can still stay the night.</li>
        <li><strong>Sheki halva:</strong> a rich, layered sweet you should not leave without trying.</li>
        <li><strong>Kish:</strong> a nearby village with an ancient Albanian church.</li>
      </Ul>
      <p>
        Sheki and its palace were added to the UNESCO World Heritage List in 2019 as the Historic Centre of Sheki with the
        Khan's Palace.
      </p>

      <TipBox title="Suggested plan">
        <p>✓ <strong>Day 1:</strong> Baku to Gabala via Shamakhi and Lahij</p>
        <p>✓ <strong>Day 2:</strong> Gabala to Sheki, afternoon at the palace</p>
        <p>✓ <strong>Day 3:</strong> Kish in the morning, back to Baku</p>
      </TipBox>

      <p>
        Short on time? Try a mountain day trip to Quba instead: see our{" "}
        <In href="/blog/quba-shahdag-day-trip">Quba and Shahdag guide</In>. For ideas closer to the city, read the{" "}
        <In href="/blog/things-to-do-in-baku">best things to do in Baku</In>.
      </p>

      <Faq
        items={[
          {
            q: "Can you do Sheki as a day trip from Baku?",
            a: "It is possible but long, with around 9 to 10 hours on the road. One or two nights in Sheki or Gabala is far more enjoyable.",
          },
          {
            q: "Where do buses to Sheki leave from in Baku?",
            a: "From Baku International Bus Terminal, next to Avtovagzal metro station.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 9. Quba and Shahdag                                                 */
/* ------------------------------------------------------------------ */
function QubaContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        When Baku gets hot in summer, or you want snow in winter, head north to <strong>Quba</strong> (also written Guba)
        and the <strong>Shahdag</strong> mountains. The drive takes you from the Caspian coast to forests, apple orchards,
        mountain villages and, in winter, Azerbaijan's biggest ski resort.
      </p>

      <h2>How far is Quba from Baku?</h2>
      <p>
        Quba is around 170 km north of Baku, about 2.5 hours by road. Shahdag Mountain Resort is beyond it, roughly 200 to
        220 km and 3 to 3.5 hours from the capital. That makes both possible as a long day trip, though an overnight stay
        is more relaxed.
      </p>

      <h2>Things to see on a Quba day trip</h2>
      <Ul>
        <li><strong>Beshbarmag Mountain:</strong> a striking rocky peak near the coast road, popular with pilgrims.</li>
        <li><strong>Quba town:</strong> mosques, old merchant houses and a lively market.</li>
        <li><strong>Red Village (Qirmizi Qasaba):</strong> a historic Mountain Jewish settlement across the river from Quba.</li>
        <li><strong>Mountain villages and waterfalls:</strong> such as the Afurja waterfall and the high village of Khinaliq.</li>
      </Ul>

      <h2>Skiing at Shahdag</h2>
      <p>
        Shahdag Mountain Resort in the Qusar district has groomed runs at roughly 1,400 to 2,350 metres, modern lifts, ski
        schools and night skiing on lit slopes. The ski season usually runs from <strong>mid-December to early April</strong>,
        with January and February the most reliable months for snow. Equipment can be rented at the resort. Outside ski
        season it is a base for hiking and summer mountain activities.
      </p>
      <p>
        Tufandag in Gabala is the other main resort, with a cable car and forested runs. See our{" "}
        <In href="/blog/baku-to-sheki-gabala">Baku to Sheki and Gabala guide</In>.
      </p>

      <h2>How to get there</h2>
      <p>
        The easiest way is a guided trip such as this{" "}
        <TourLink href={tours.guba}>Guba and Shahdag adventure</TourLink>, which includes transport and the main stops.
        Buses also run from Baku International Bus Terminal to Quba and Qusar, and a hired driver gives you flexibility to
        stop for photos.
      </p>

      <TipBox title="Before you go">
        <p>✓ Mountain weather changes quickly: bring warm layers even in summer</p>
        <p>✓ Check road and snow conditions in winter</p>
        <p>✓ Start early: it is a long day if you return to Baku the same night</p>
      </TipBox>

      <Faq
        items={[
          {
            q: "When is the ski season in Azerbaijan?",
            a: "Usually from mid-December until early April at Shahdag and Tufandag, depending on snow.",
          },
          {
            q: "Can you visit Quba and Shahdag in one day from Baku?",
            a: "Yes, on a long day trip starting early. Staying a night lets you see more of the mountains.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 10. Baku Old City guide                                             */
/* ------------------------------------------------------------------ */
function OldCityContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        <strong>Icherisheher</strong>, Baku's walled Old City, is where the city began and where most visits start. Inside
        its walls are a thousand years of history packed into a few hundred metres: palaces, caravanserais, mosques,
        bathhouses and quiet lanes where people still live. Together with the Palace of the Shirvanshahs and the Maiden
        Tower, it has been a UNESCO World Heritage Site since 2000.
      </p>

      <h2>Top sights in the Old City</h2>
      <h3 className="font-semibold text-2xl">Maiden Tower</h3>
      <p>
        The cylindrical stone tower near the sea gate is Baku's symbol. Its age and purpose are still debated, and there
        are many legends about its name. Climb to the top for views over the rooftops and the bay.
      </p>
      <h3 className="font-semibold text-2xl">Palace of the Shirvanshahs</h3>
      <p>
        Built mainly in the 15th century, the palace complex includes a courtyard palace, a mosque with a minaret, a royal
        mausoleum and bathhouse ruins. Allow an hour to explore it properly.
      </p>
      <h3 className="font-semibold text-2xl">Caravanserais</h3>
      <p>
        The Multani and Bukhara caravanserais once sheltered merchants travelling the trade routes. Today some house
        restaurants where you can eat in a stone courtyard.
      </p>
      <h3 className="font-semibold text-2xl">Museum of Miniature Books</h3>
      <p>
        A charming small museum filled with thousands of tiny books from around the world.
      </p>
      <h3 className="font-semibold text-2xl">The walls and gates</h3>
      <p>
        Walk along the outer walls and through the main gates, such as the Double Gates (Qosha Qala), to see how the
        fortress protected the city.
      </p>

      <h2>How to visit</h2>
      <p>
        The Old City is free to enter and walk around; individual sights such as the Maiden Tower and the Shirvanshahs'
        Palace charge an entrance fee. You can explore on your own in half a day, but a{" "}
        <TourLink href={tours.oldTown}>guided Old Town walking tour</TourLink> brings the legends and history to life.
      </p>

      <TipBox title="Old City tips">
        <p>✓ Wear comfortable shoes: lanes are cobbled and sloping</p>
        <p>✓ Come back after dark, when the walls and tower are lit up</p>
        <p>✓ Carpet and souvenir shops are fun to browse, but compare prices before buying</p>
      </TipBox>

      <p>
        After the Old City, walk five minutes to the seafront Boulevard or up to Highland Park for the Flame Towers. More
        ideas in our <In href="/blog/things-to-do-in-baku">things to do in Baku</In> guide, and if you want to stay inside
        the walls, see <In href="/blog/where-to-stay-in-baku">where to stay in Baku</In>.
      </p>

      <Faq
        items={[
          {
            q: "Is the Old City in Baku free?",
            a: "Walking around the Old City is free. Some attractions inside, such as the Maiden Tower and the Palace of the Shirvanshahs, have entrance fees.",
          },
          {
            q: "How long do you need in Baku's Old City?",
            a: "Half a day covers the main sights. Add an evening walk to see it lit up.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 11. Is Baku expensive? Trip costs                                   */
/* ------------------------------------------------------------------ */
function CostContent() {
  const rows: [string, string, string][] = [
    ["Metro or city bus ride", "0.60 AZN", "about $0.35"],
    ["BakıKart transport card", "2 AZN (plus top-up)", "about $1.20"],
    ["Aeroexpress airport bus", "about 1.30–1.50 AZN", "under $1"],
    ["Bolt ride across the centre", "4–6 AZN", "$2.50–3.50"],
    ["Bolt from the airport", "20–25 AZN", "$12–15"],
    ["Coffee in a café", "3–5 AZN", "$2–3"],
    ["Local beer in a bar", "3–5 AZN", "$2–3"],
    ["Lunch in a local restaurant", "8–15 AZN", "$5–9"],
    ["Dinner with drinks, mid-range restaurant", "30–50 AZN", "$18–30"],
    ["Hostel bed", "15–25 AZN", "$9–15"],
    ["Mid-range hotel room", "80–150 AZN", "$47–90"],
    ["Bus to Sheki, Gabala or Quba", "10–15 AZN", "$6–9"],
  ]
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        <strong>Is Baku expensive?</strong> Not compared with most European capitals. Public transport costs pennies,
        ride-hailing is cheap and a good local meal costs less than a sandwich in London. Hotels and imported drinks are
        where the money goes. Here is what things really cost in Baku, with sample daily budgets so you can plan your trip.
      </p>

      <div className="bg-muted/50 p-6 rounded-lg">
        <p className="text-sm">
          <strong>Currency:</strong> Azerbaijan uses the <strong>manat (AZN)</strong>. It has been held at about{" "}
          <strong>1.70 AZN to US$1</strong> for several years, which makes budgeting easy. Prices below are typical at the
          time of writing and rounded; they are a guide, not a quote.
        </p>
      </div>

      <h2>Typical prices in Baku</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4">Item</th>
              <th className="py-3 pr-4">Price (AZN)</th>
              <th className="py-3">Approx. USD</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([a, b, c]) => (
              <tr key={a} className="border-b border-border">
                <td className="py-3 pr-4">{a}</td>
                <td className="py-3 pr-4 text-muted-foreground">{b}</td>
                <td className="py-3 text-muted-foreground">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Daily budget for Baku</h2>
      <Ul>
        <li>
          <strong>Budget (about $35–50 a day):</strong> a hostel or simple guesthouse, the metro and buses, local cafés and
          street food, and free sights such as the Boulevard and the Old City streets.
        </li>
        <li>
          <strong>Mid-range (about $90–140 a day):</strong> a comfortable 3 to 4 star hotel, Bolt rides, sit-down
          restaurants, museum tickets and one guided day trip during your stay.
        </li>
        <li>
          <strong>Comfort (about $200+ a day):</strong> a 5 star hotel such as those near the Flame Towers, private
          transfers and tours, and dinners at the city&apos;s best restaurants.
        </li>
      </Ul>

      <h2>Accommodation: your biggest cost</h2>
      <p>
        Hotels take the largest share of most budgets. Prices rise sharply around the{" "}
        <In href="/blog/azerbaijan-grand-prix-2027">Formula 1 Grand Prix</In> weekend and big conferences, and fall in
        winter. Staying in or near the Old City saves on transport, as most sights are walkable. Our guide to{" "}
        <In href="/blog/where-to-stay-in-baku">where to stay in Baku</In> compares the best areas.
      </p>

      <h2>Getting around for less</h2>
      <p>
        Buy a <strong>BakıKart</strong> at the airport or any metro station: one card can be shared by a group and works on
        the metro, city buses and the Aeroexpress airport bus. For everything else, use the <strong>Bolt</strong> or Uber
        apps rather than hailing a street taxi, which can charge several times more. See our full{" "}
        <In href="/blog/getting-around-baku">guide to getting around Baku</In> and the{" "}
        <In href="/blog/baku-airport-to-city-centre">airport to city centre guide</In>.
      </p>

      <h2>Food and drink</h2>
      <p>
        Eating out is excellent value. A plate of plov, qutab or kebab with bread and tea in a local restaurant is cheap,
        and even smart restaurants are reasonably priced compared with Western Europe. Imported wine and spirits are the
        main exception, while local Azerbaijani wine and beer are good value. Tipping around 10% is appreciated in
        restaurants; check whether a service charge has already been added to the bill.
      </p>

      <h2>Sights and day trips</h2>
      <p>
        Many of Baku&apos;s best sights cost nothing: walking the Old City lanes, the seafront Boulevard and the view from
        Highland Park. Paid sights such as the Maiden Tower, the Shirvanshahs&apos; Palace and the Heydar Aliyev Center
        usually cost a few manat to around 20 AZN each. A group day trip to Gobustan and the mud volcanoes is often the best
        value way to see several sights at once:{" "}
        <TourLink href={tours.gobustan}>see Gobustan and Absheron day trips</TourLink>, or combine the{" "}
        <TourLink href={tours.fire}>Fire Temple and Burning Mountain</TourLink> in one afternoon.
      </p>

      <h2>Money tips</h2>
      <Ul>
        <li>Cards are widely accepted in Baku, but carry some cash for small cafés, markets and regional trips.</li>
        <li>Use bank ATMs rather than exchange kiosks with poor rates, and pay in manat when a card machine asks.</li>
        <li>Agree taxi prices in advance if you don&apos;t use an app.</li>
        <li>Visit in spring or autumn for good weather and lower hotel prices than summer and race weekend.</li>
        <li>
          Remember to budget for your <In href="/blog/azerbaijan-e-visa-guide">Azerbaijan e-visa</In> and{" "}
          <In href="/blog/flights-to-baku">flights to Baku</In>.
        </li>
      </Ul>

      <TipBox title="Sample 4-day mid-range budget (per person)">
        <p>✓ Hotel, 3 nights shared: about $150–200</p>
        <p>✓ Food and drink: about $120</p>
        <p>✓ Transport in Baku: about $25</p>
        <p>✓ Sights and one day trip: about $80–100</p>
        <p>
          ✓ <strong>Total, excluding flights and visa: about $375–445</strong>
        </p>
      </TipBox>

      <Faq
        items={[
          {
            q: "Is Baku expensive for tourists?",
            a: "No, Baku is cheaper than most European capitals. Transport and local food are very cheap, while hotels and imported alcohol cost more.",
          },
          {
            q: "How much money do I need per day in Baku?",
            a: "Budget travellers can manage on about $35–50 a day. A comfortable mid-range trip costs about $90–140 a day per person, excluding flights.",
          },
          {
            q: "Should I bring cash or card to Baku?",
            a: "Both. Cards work in most hotels, restaurants and shops in Baku, but carry some manat for small cafés, markets and trips outside the city.",
          },
          {
            q: "What currency is used in Baku?",
            a: "The Azerbaijani manat (AZN). It has been held at about 1.70 manat to one US dollar for several years.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 12. Baku weather by month                                           */
/* ------------------------------------------------------------------ */
function WeatherContent() {
  const months: [string, string, string, string][] = [
    ["January", "7°C", "2°C", "Cold, grey and windy. Quiet city, ski season in the mountains."],
    ["February", "7°C", "2°C", "Similar to January, occasional light snow."],
    ["March", "10°C", "4°C", "Cool and changeable. Novruz festival around 20–21 March."],
    ["April", "16°C", "8°C", "Spring arrives mid-month. Great for walking."],
    ["May", "22°C", "14°C", "One of the best months: warm days, fresh evenings."],
    ["June", "27°C", "19°C", "Warm to hot, long days, start of beach season."],
    ["July", "30°C", "22°C", "Hottest month. Sightsee early and late."],
    ["August", "30°C", "22°C", "Hot and dry, warmest sea for swimming."],
    ["September", "25°C", "18°C", "Excellent: warm sea, golden light, fewer crowds."],
    ["October", "19°C", "12°C", "Mild and pleasant, ideal for day trips."],
    ["November", "13°C", "7°C", "Cooler, windier, more rain. Low prices."],
    ["December", "9°C", "4°C", "Chilly. Festive lights and New Year celebrations."],
  ]
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        Baku has hot, dry summers, mild but windy winters and very little rain for most of the year. The best weather is
        from <strong>late April to June</strong> and in <strong>September and October</strong>. Here is what to expect
        in Baku month by month, with average temperatures and what to pack.
      </p>

      <h2>Baku average temperatures by month</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4">Month</th>
              <th className="py-3 pr-4">Avg high</th>
              <th className="py-3 pr-4">Avg low</th>
              <th className="py-3">What it&apos;s like</th>
            </tr>
          </thead>
          <tbody>
            {months.map(([m, hi, lo, note]) => (
              <tr key={m} className="border-b border-border">
                <td className="py-3 pr-4 font-semibold">{m}</td>
                <td className="py-3 pr-4 text-muted-foreground">{hi}</td>
                <td className="py-3 pr-4 text-muted-foreground">{lo}</td>
                <td className="py-3 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted-foreground">
        Averages are rounded long-term figures. Real temperatures vary from year to year, so check the forecast a week
        before you travel.
      </p>

      <h2>The wind: Baku&apos;s defining weather</h2>
      <p>
        Baku is nicknamed the <strong>&quot;City of Winds&quot;</strong>. Strong northerly winds, known locally as the
        khazri, can blow at any time of year and make a sunny day feel several degrees colder, especially on the seafront
        Boulevard and at Highland Park. Even in spring and autumn, bring a windproof layer.
      </p>

      <h2>Winter in Baku (December to February)</h2>
      <p>
        Winters are chilly rather than freezing, with highs around 7°C and grey skies. Snow in the city is unusual and
        rarely lasts. It is the cheapest time for hotels, the Old City is calm, and it is ski season at{" "}
        <In href="/blog/quba-shahdag-day-trip">Shahdag</In>, about three hours away. Pack a warm coat, hat and gloves.
      </p>

      <h2>Spring in Baku (March to May)</h2>
      <p>
        March is still cool, but by mid-April the city warms up and parks bloom. <strong>Novruz</strong>, the spring new
        year in late March, brings bonfires, music and sweet pastries to the Old City. May is close to perfect for
        sightseeing, with highs in the low 20s.
      </p>

      <h2>Summer in Baku (June to August)</h2>
      <p>
        July and August are hot, with highs around 30°C and some days much higher, plus strong sun and almost no rain. It
        is beach season on the Absheron Peninsula and the Boulevard stays busy until late at night. Plan outdoor sights for
        the morning and evening, carry water and sun cream, and escape to the cooler mountains for a day if the heat gets
        too much.
      </p>

      <h2>Autumn in Baku (September to November)</h2>
      <p>
        September and October are many travellers&apos; favourite months: the sea is still warm in early September, the
        summer crowds have gone and the light is beautiful for photos. It is also great day-trip weather for{" "}
        <In href="/blog/gobustan-mud-volcanoes-day-trip">Gobustan and the mud volcanoes</In>. November is cooler, windier
        and the wettest month, but hotel prices drop.
      </p>

      <TipBox title="What to pack for Baku">
        <p>✓ A windproof jacket in every season except high summer</p>
        <p>✓ Comfortable shoes for the Old City&apos;s stone streets and hills</p>
        <p>✓ Sun hat, sunglasses and sun cream from May to September</p>
        <p>✓ A warm coat, hat and gloves from December to February</p>
        <p>✓ Covered shoulders and knees for mosques and the Fire Temple</p>
      </TipBox>

      <p>
        Still deciding when to go? Our guide to the{" "}
        <In href="/blog/best-time-to-visit-baku">best time to visit Baku</In> covers festivals, prices and crowds, and
        our <In href="/blog/baku-itinerary">3 to 5 day Baku itinerary</In> works in any season. Whatever the weather, a{" "}
        <TourLink href={tours.oldTown}>guided Old City walking tour</TourLink> is a great first morning.
      </p>

      <Faq
        items={[
          {
            q: "What is the hottest month in Baku?",
            a: "July and August are the hottest months, with average highs around 30°C and some days well above that.",
          },
          {
            q: "Does it snow in Baku?",
            a: "Occasionally in January and February, but snow rarely settles in the city. The nearby mountains around Shahdag get plenty of snow for skiing.",
          },
          {
            q: "Can you swim in the Caspian Sea at Baku?",
            a: "Yes, from about June to September. The best beaches are on the Absheron Peninsula, a short drive from the city centre.",
          },
          {
            q: "Why is Baku so windy?",
            a: "Baku sits on a peninsula in the Caspian Sea, open to strong northerly winds. It is known as the City of Winds.",
          },
        ]}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 13. Baku to Tbilisi by train                                        */
/* ------------------------------------------------------------------ */
function TrainContent() {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        After a six-year break, the <strong>Baku to Tbilisi train</strong> is running again. Passenger service between
        Azerbaijan and Georgia restarted in <strong>May 2026</strong>, with day and overnight sleeper trains linking the
        two capitals in about 10 hours. Here is how it works, what it costs and, importantly, who can currently use it.
      </p>

      <div className="bg-muted/50 p-6 rounded-lg">
        <p className="text-sm">
          <strong>Check before you plan:</strong> at the time of writing, reports say tickets are only sold to Azerbaijani
          citizens and passport holders who can enter Azerbaijan <strong>visa-free</strong>, and that e-visa holders cannot
          yet cross on the train. Azerbaijan&apos;s land borders also remain closed to most other travellers. Rules are
          changing quickly, so check with Azerbaijan Railways at{" "}
          <a href="https://ticket.ady.az" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            ticket.ady.az
          </a>{" "}
          and your government&apos;s travel advice before you book.
        </p>
      </div>

      <h2>Baku–Tbilisi train timetable</h2>
      <p>From November 2026 there are two trains a day in each direction (times are local and can change):</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4">Route</th>
              <th className="py-3 pr-4">Departs</th>
              <th className="py-3 pr-4">Arrives</th>
              <th className="py-3">Journey</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Baku → Tbilisi (day)", "09:10", "19:11", "about 10 hours"],
              ["Baku → Tbilisi (overnight)", "23:00", "08:41", "about 9h 40m"],
              ["Tbilisi → Baku (day)", "11:00", "20:26", "about 9h 30m"],
              ["Tbilisi → Baku (overnight)", "22:00", "07:57", "about 10 hours"],
            ].map(([r, d, a, j]) => (
              <tr key={r} className="border-b border-border">
                <td className="py-3 pr-4 font-semibold">{r}</td>
                <td className="py-3 pr-4 text-muted-foreground">{d}</td>
                <td className="py-3 pr-4 text-muted-foreground">{a}</td>
                <td className="py-3 text-muted-foreground">{j}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The train runs from <strong>Baku Railway Station</strong> (next to 28 May metro) via Ganja, Agstafa and the border
        posts at Boyuk Kasik and Gardabani, to <strong>Tbilisi Central Station</strong>.
      </p>

      <h2>Classes and ticket prices</h2>
      <Ul>
        <li>
          <strong>Standard:</strong> open sleeper carriage with bunks, from around 54 AZN.
        </li>
        <li>
          <strong>Comfort:</strong> four-berth compartments, from around 85 AZN.
        </li>
        <li>
          <strong>Comfort Plus:</strong> four-berth compartments with extras, from around 123 AZN.
        </li>
        <li>
          <strong>Luxe:</strong> private two-berth compartments with their own facilities, from around 189 AZN.
        </li>
      </Ul>
      <p>
        Prices are set in Swiss francs, so they move with exchange rates, and they can rise closer to departure. Tickets
        go on sale up to 90 days ahead and have been selling out weeks in advance.
      </p>

      <h2>How to book</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Create an account on the Azerbaijan Railways site, ticket.ady.az, with your passport details.</li>
        <li>Search for Baku to Tbilisi (or the reverse), pick your train and class, and pay by card.</li>
        <li>
          Alternatively, buy tickets in person at Baku or Tbilisi station, but book early as popular dates sell out.
        </li>
        <li>Carry your passport and ticket; there are passport checks at both borders on board or at the border stations.</li>
      </ol>

      <h2>Train or plane?</h2>
      <p>
        If you can use the train, it is a relaxed and scenic way to travel, and the overnight service saves a night&apos;s
        hotel. If you need an e-visa for Azerbaijan, flying is currently the reliable option: there are frequent short
        flights between Tbilisi and Baku, taking about an hour. See our guide to{" "}
        <In href="/blog/flights-to-baku">flights to Baku</In> and the{" "}
        <In href="/blog/azerbaijan-e-visa-guide">Azerbaijan e-visa guide</In>.
      </p>

      <TipBox title="Combining Baku and Georgia">
        <p>✓ Spend 3 to 4 days in Baku with our <In href="/blog/baku-itinerary">Baku itinerary</In></p>
        <p>
          ✓ Head west via <In href="/blog/baku-to-sheki-gabala">Sheki and Gabala</In> for mountains and silk-road history
        </p>
        <p>✓ Then cross to Tbilisi by train (if eligible) or fly from Baku</p>
        <p>
          ✓ Budget with our <In href="/blog/is-baku-expensive">Baku trip cost guide</In>
        </p>
      </TipBox>

      <Faq
        items={[
          {
            q: "Is the Baku to Tbilisi train running?",
            a: "Yes. Passenger service restarted in May 2026 after a six-year suspension, with daily day and overnight trains in each direction from November 2026.",
          },
          {
            q: "How long is the train from Baku to Tbilisi?",
            a: "About 9.5 to 10 hours, depending on the service.",
          },
          {
            q: "Can I take the train with an Azerbaijan e-visa?",
            a: "At the time of writing, reports say tickets are limited to Azerbaijani citizens and visa-free nationals, and e-visa holders cannot cross by train yet. Check ticket.ady.az before planning.",
          },
          {
            q: "How much is the Baku to Tbilisi train?",
            a: "Fares start from around 54 AZN in Standard class and go up to around 189 AZN for a private Luxe compartment, depending on exchange rates and demand.",
          },
        ]}
      />
    </div>
  )
}

export const batch2Posts = [
  {
    slug: "baku-weather-by-month",
    title: "Baku Weather by Month: Temperatures and What to Pack",
    category: "Travel Tips",
    excerpt:
      "Baku weather month by month, with average high and low temperatures, the famous wind, the best months to visit and what to pack in every season.",
    image: "/baku-panorama-destinations.jpg",
    date: "Nov 10, 2026",
    updated: "2026-11-10",
    readTime: "6 min read",
    keywords: "Baku weather, Baku weather by month, Baku temperature, Baku climate, Baku in winter, Baku in summer",
    Content: WeatherContent,
  },
  {
    slug: "baku-to-tbilisi-train",
    title: "Baku to Tbilisi Train 2026: Timetable, Prices and Who Can Travel",
    category: "Travel Tips",
    excerpt:
      "The Baku to Tbilisi train is running again. Timetable, classes and fares, how to book on ticket.ady.az, and the current rules on who can cross the border by train.",
    image: "/baku-city-flame-towers-night.jpg",
    date: "Nov 10, 2026",
    updated: "2026-11-10",
    readTime: "6 min read",
    keywords: "Baku to Tbilisi train, Tbilisi to Baku train, Baku Tbilisi sleeper train, Azerbaijan Georgia train, ticket.ady.az",
    Content: TrainContent,
  },
  {
    slug: "is-baku-expensive",
    title: "Is Baku Expensive? Trip Costs and Daily Budget for 2026",
    category: "Travel Tips",
    excerpt:
      "How much a trip to Baku costs: real prices for transport, food, hotels and sights in manat and dollars, plus budget, mid-range and comfort daily budgets.",
    image: "/baku-budget-travel-tips.jpg",
    date: "Nov 10, 2026",
    updated: "2026-11-10",
    readTime: "7 min read",
    keywords: "is Baku expensive, Baku prices, Baku trip cost, Baku budget, cost of travel in Azerbaijan, how much money for Baku",
    Content: CostContent,
  },
  {
    slug: "best-time-to-visit-baku",
    title: "Best Time to Visit Baku: Weather Month by Month",
    category: "Travel Tips",
    excerpt:
      "When to visit Baku for the best weather, festivals, beach days and skiing, with a season-by-season guide to what Azerbaijan's capital is like all year.",
    image: "/baku-boulevard-promenade.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "6 min read",
    keywords: "best time to visit Baku, Baku weather, Baku in summer, Baku in winter, when to go to Azerbaijan",
    Content: BestTimeContent,
  },
  {
    slug: "things-to-do-in-baku",
    title: "15 Best Things to Do in Baku (and Day Trips Worth Taking)",
    category: "Travel Guide",
    excerpt:
      "The best things to do in Baku, from the Old City and Flame Towers to Gobustan, the fire sites and the mountains, with tips on how long to stay.",
    image: "/baku-flame-towers-skyline-sunset.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "9 min read",
    keywords: "things to do in Baku, Baku attractions, what to do in Baku, Baku sightseeing, Baku day trips",
    Content: ThingsToDoContent,
  },
  {
    slug: "gobustan-mud-volcanoes-day-trip",
    title: "Gobustan and the Mud Volcanoes: Day Trip From Baku",
    category: "Day Trips",
    excerpt:
      "How to visit Gobustan's UNESCO rock art and the nearby mud volcanoes from Baku: distance, what to see, how to get there and tips.",
    image: "/gobustan-rock-art-petroglyphs.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "6 min read",
    keywords: "Gobustan day trip, Gobustan mud volcanoes, Gobustan rock art, Baku mud volcanoes, Gobustan from Baku",
    Content: GobustanContent,
  },
  {
    slug: "yanar-dag-ateshgah-fire-temple",
    title: "Yanar Dag and the Ateshgah Fire Temple: Baku's Land of Fire",
    category: "Day Trips",
    excerpt:
      "Visit Yanar Dag, the burning mountain, and the Ateshgah Fire Temple near Baku: what they are, the best time to go and how to see both in one trip.",
    image: "/yanar-dag-burning-mountain-flames.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "5 min read",
    keywords: "Yanar Dag, Ateshgah fire temple, burning mountain Baku, Land of Fire Azerbaijan, Baku fire tour",
    Content: FireSitesContent,
  },
  {
    slug: "where-to-stay-in-baku",
    title: "Where to Stay in Baku: Best Areas for Every Traveller",
    category: "Travel Tips",
    excerpt:
      "The best areas to stay in Baku, from the atmospheric Old City and lively Fountain Square to the seafront Boulevard and modern Port Baku.",
    image: "/baku-old-city-maiden-tower.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "5 min read",
    keywords: "where to stay in Baku, best area to stay in Baku, Baku hotels area, Baku Old City hotel",
    Content: WhereToStayContent,
  },
  {
    slug: "is-baku-safe",
    title: "Is Baku Safe for Tourists? Travel Safety Guide (2026)",
    category: "Travel Tips",
    excerpt:
      "Is Baku safe to visit? Current official advice, everyday safety tips, taxis, solo and female travel, and what to check before you go.",
    image: "/baku-city-flame-towers-night.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "5 min read",
    keywords: "is Baku safe, is Azerbaijan safe, Baku safety, Azerbaijan travel advice, Baku for tourists",
    Content: SafetyContent,
  },
  {
    slug: "getting-around-baku",
    title: "Getting Around Baku: Metro, BakuCard, Buses and Taxis",
    category: "Travel Tips",
    excerpt:
      "How to get around Baku: metro fares and the BakuCard, city buses, taxis and ride-hailing apps, walking, and getting out of the city.",
    image: "/baku-cycling-boulevard-adventure.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "5 min read",
    keywords: "Baku metro, BakuCard, getting around Baku, Baku taxi, Bolt Baku, Baku public transport",
    Content: GettingAroundContent,
  },
  {
    slug: "baku-to-sheki-gabala",
    title: "Baku to Sheki and Gabala: Route, Transport and Best Stops",
    category: "Day Trips",
    excerpt:
      "How to travel from Baku to Sheki by bus, train or car, the best stops in Shamakhi, Lahij and Gabala, and what to see in Sheki.",
    image: "/baku-highland-park-view.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "7 min read",
    keywords: "Baku to Sheki, Sheki Azerbaijan, Baku to Gabala, Sheki Khan Palace, Lahij, road trip Azerbaijan",
    Content: ShekiContent,
  },
  {
    slug: "quba-shahdag-day-trip",
    title: "Quba and Shahdag: Mountain Day Trip and Skiing From Baku",
    category: "Day Trips",
    excerpt:
      "Plan a day trip from Baku to Quba and the Shahdag mountains: distances, the Red Village, waterfalls and the Shahdag ski season.",
    image: "/gobustan-adventure-hiking.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "6 min read",
    keywords: "Quba day trip, Guba Azerbaijan, Shahdag ski resort, skiing in Azerbaijan, Baku to Quba",
    Content: QubaContent,
  },
  {
    slug: "baku-old-city-guide",
    title: "Baku Old City (Icherisheher) Guide: Maiden Tower and More",
    category: "Travel Guide",
    excerpt:
      "A guide to Baku's UNESCO-listed Old City: the Maiden Tower, Palace of the Shirvanshahs, caravanserais, museums and tips for visiting.",
    image: "/baku-old-city-tour-group.jpg",
    date: "Nov 9, 2026",
    updated: "2026-11-09",
    readTime: "6 min read",
    keywords: "Baku Old City, Icherisheher, Maiden Tower, Palace of the Shirvanshahs, Baku walking tour",
    Content: OldCityContent,
  },
]
