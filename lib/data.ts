export type RoomType = {
  name: string;
  size: string;
  guests: string;
  beds?: string;
};

export type Property = {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  address: string;
  eyebrow: string;
  summary: string;
  note: string;
  hero: string;
  gallery: string[];
  roomTypes: RoomType[];
  amenities: string[];
  nearby: { place: string; time: string }[];
  exteriorPlaceholder: string;
};

export const properties: Property[] = [
  {
    slug: "kuromon-9",
    name: "Apartment Hotel 11 Kuromon 9",
    shortName: "Kuromon 9",
    location: "Chuo, Osaka",
    address: "3-8-19 Kozu, Chuo-ku, Osaka",
    eyebrow: "Food, markets, central Osaka",
    summary:
      "An apartment-style base near Kuromon Market, for travelers who want food, shopping, and central neighborhoods close at hand.",
    note: "Four room types offer options for three to five guests.",
    hero: "/images/kuromon-9-room-a.jpg",
    gallery: ["/images/kuromon-9-room-b.jpg", "/images/kuromon-9-room-c.jpg"],
    roomTypes: [
      { name: "Standard Quad Room", size: "26 m²", guests: "Up to 4 guests", beds: "2 double beds" },
      { name: "Standard Triple Room", size: "29 m²", guests: "Up to 3 guests", beds: "1 double + 1 single" },
      { name: "Standard Family Room", size: "27 m²", guests: "Up to 4 guests" },
      { name: "Family Room", size: "31 m²", guests: "Up to 5 guests" },
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Smart TV", "Kitchen", "Separated bathing area", "Induction hob", "Cookware and tableware", "Refrigerator", "Microwave", "Washing machine", "Hair dryer", "Towels and bath amenities"],
    nearby: [
      { place: "Kuromon Market", time: "2 min walk" },
      { place: "Nipponbashi", time: "6 min walk" },
      { place: "Dotonbori", time: "8 min walk" },
      { place: "Namba", time: "10 min walk" },
    ],
    exteriorPlaceholder: "[PROPERTY EXTERIOR — KUROMON 9]",
  },
  {
    slug: "tsutenkaku-3",
    name: "Apartment Hotel 11 Tsutenkaku 3",
    shortName: "Tsutenkaku 3",
    location: "Naniwa, Osaka",
    address: "1-4-2 Ebisuhigashi, Naniwa-ku, Osaka",
    eyebrow: "Shinsekai energy, room to settle",
    summary:
      "A practical apartment base close to Tsutenkaku and Shinsekai, with easy access to the energy of southern Osaka.",
    note: "Three room types offer options for three or four guests.",
    hero: "/images/tsutenkaku-3-room-a.jpg",
    gallery: ["/images/tsutenkaku-3-room-b.jpg", "/images/tsutenkaku-3-context.jpg"],
    roomTypes: [
      { name: "Standard Triple Room", size: "25 m²", guests: "Up to 3 guests" },
      { name: "Superior Quad Room", size: "31 m²", guests: "Up to 4 guests" },
      { name: "Superior Family Room", size: "31 m²", guests: "Up to 3 guests" },
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Smart TV", "Kitchen", "Separated bathing area", "Induction hob", "Cookware and tableware", "Refrigerator", "Microwave", "Washing machine", "Hair dryer", "Towels and bath amenities", "24-hour self check-in"],
    nearby: [
      { place: "Tsutenkaku", time: "2 min walk" },
      { place: "Shinsekai", time: "3 min walk" },
      { place: "Ebisucho", time: "6 min walk" },
      { place: "Tennoji", time: "10 min walk" },
    ],
    exteriorPlaceholder: "[PROPERTY EXTERIOR — TSUTENKAKU 3]",
  },
  {
    slug: "namba-minami-7",
    name: "Apartment Hotel 11 Namba Minami 7",
    shortName: "Namba Minami 7",
    location: "Naniwa, Osaka",
    address: "1-4-10 Daikoku, Naniwa-ku, Osaka",
    eyebrow: "Bright, compact, well connected",
    summary:
      "A bright apartment base south of Namba, with an open kitchen and a comfortable place to reset between city days.",
    note: "A considered 25 m² layout for up to three guests.",
    hero: "/images/namba-minami-7-room-a.jpg",
    gallery: ["/images/namba-minami-7-room-b.jpg", "/images/namba-minami-7-context.jpg"],
    roomTypes: [
      { name: "Apartment Room", size: "Approx. 25 m²", guests: "Up to 3 guests", beds: "1 double + 1 single" },
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Smart TV", "Open kitchen", "Separated bathing area", "Lounge and dining zone", "Induction hob", "Cookware and tableware", "Refrigerator", "Microwave", "Washing machine", "Hair dryer", "Towels and bath amenities", "Natural light"],
    nearby: [
      { place: "JR Imamiya", time: "3 min walk" },
      { place: "Daikokucho", time: "5 min walk" },
      { place: "Tsutenkaku & Shinsekai", time: "12 min walk" },
    ],
    exteriorPlaceholder: "[PROPERTY EXTERIOR — NAMBA MINAMI 7]",
  },
];

export const getProperty = (slug: string) => properties.find((property) => property.slug === slug);

export type PackagePillar = {
  name: "Stay" | "Dine" | "Move" | "Relax" | "Enjoy";
  japanese: string;
  preview: string;
  detail: string;
};

export type JourneyPackage = {
  slug: string;
  name: string;
  tier: string;
  price: string;
  accommodation: string;
  location: string;
  image: string;
  imageAlt: string;
  summary: string;
  idealFor: string;
  reason: string;
  experienceLabel: string;
  experienceOptions: string[];
  pillars: PackagePillar[];
  itinerary: { day: string; title: string; copy: string }[];
};

export const journeyPackages: JourneyPackage[] = [
  {
    slug: "essential",
    name: "Essential Osaka",
    tier: "Apartment comfort",
    price: "¥198,000",
    accommodation: "Apartment Hotel 11",
    location: "Osaka",
    image: "/images/kuromon-9-room-a.jpg",
    imageAlt: "Apartment Hotel 11 guest room in Osaka",
    summary: "A practical Osaka base with the essential support already connected around your stay.",
    idealFor: "Travelers who want value, space, and a clear first route through Osaka.",
    reason: "More included, with the freedom to explore Osaka at your own pace.",
    experienceLabel: "Curated discovery",
    experienceOptions: [
      "A neighborhood food and market route",
      "One bookable Osaka highlight",
      "An evening plan close to your Apartment Hotel 11 base",
    ],
    pillars: [
      { name: "Stay", japanese: "住", preview: "Apartment Hotel 11 · 3 nights", detail: "Three nights at Kuromon 9, Tsutenkaku 3, or Namba Minami 7, selected around your dates and group." },
      { name: "Dine", japanese: "食", preview: "One HIWIN dining experience", detail: "One experience from the HIWIN dining network plus neighborhood recommendations." },
      { name: "Move", japanese: "行", preview: "One-way KIX transfer", detail: "One-way airport transfer by standard taxi, minivan, or equivalent, plus a practical local transport outline." },
      { name: "Relax", japanese: "癒", preview: "Partner relaxation for two", detail: "One partner relaxation experience for two, arranged around the itinerary." },
      { name: "Enjoy", japanese: "楽", preview: "Curated Osaka discovery", detail: "A considered Osaka neighborhood plan, one bookable highlight, and evening ideas." },
    ],
    itinerary: [
      { day: "Day 01", title: "Arrive and settle", copy: "Airport pickup, Apartment Hotel 11 check-in, and a gentle first evening nearby." },
      { day: "Day 02", title: "Markets and city character", copy: "A neighborhood route shaped around food, local streets, and the Osaka you want to meet." },
      { day: "Day 03", title: "A day with room to choose", copy: "Follow the suggested city plan, add a relaxation appointment, or keep time open." },
      { day: "Day 04", title: "A calm departure", copy: "A clear departure outline with optional transfer support." },
    ],
  },
  {
    slug: "signature",
    name: "Osaka Signature",
    tier: "Premium city stay",
    price: "¥698,000",
    accommodation: "W Osaka",
    location: "Shinsaibashi, Osaka",
    image: "/images/w-osaka-room.jpg",
    imageAlt: "Official W Osaka guest room with city views",
    summary: "A design-led Osaka stay with private transport, selected dining, and more of the city arranged for you.",
    idealFor: "Couples and friends who want a premium hotel and a smoother, more hosted Osaka experience.",
    reason: "A smoother, hosted city journey with more of the moving parts already arranged.",
    experienceLabel: "One Signature Experience",
    experienceOptions: [
      "A Kansai golf day with a tee-time request, return transfer, and optional equipment or caddie support",
      "A privately hosted Osaka, Kyoto, or Nara day",
      "A craft, design, or premium shopping experience shaped around your interests",
    ],
    pillars: [
      { name: "Stay", japanese: "住", preview: "W Osaka · 3 nights", detail: "Three nights at W Osaka, with final room category confirmed for your dates." },
      { name: "Dine", japanese: "食", preview: "Two selected dining experiences", detail: "Two selected dining experiences across HIWIN's restaurant network." },
      { name: "Move", japanese: "行", preview: "Return transfer + private-car day", detail: "Return airport transfers plus one private-car day. Toyota Alphard, Vellfire, or equivalent may be requested, subject to supplier confirmation." },
      { name: "Relax", japanese: "癒", preview: "Premium relaxation for two", detail: "A relaxation experience for two, timed around the city plan." },
      { name: "Enjoy", japanese: "楽", preview: "Golf, culture, craft, or hosted day", detail: "Choose one Signature Experience, such as a golf day or a privately hosted Osaka, Kyoto, or Nara day, subject to reservation and confirmation." },
    ],
    itinerary: [
      { day: "Day 01", title: "A bold Osaka arrival", copy: "Private airport transfer, W Osaka check-in, and a selected dinner." },
      { day: "Day 02", title: "Your Signature Experience", copy: "Choose a privately hosted city day, a golf request, or another confirmed experience shaped around your interests." },
      { day: "Day 03", title: "Taste, pause, continue", copy: "A slower morning, relaxation time, and a second dining or evening experience." },
      { day: "Day 04", title: "Private departure", copy: "Breakfast at your pace and a return airport transfer." },
    ],
  },
  {
    slug: "prestige",
    name: "Kansai Prestige",
    tier: "Luxury retreat",
    price: "¥1,680,000",
    accommodation: "Aman Kyoto",
    location: "Takagamine, Kyoto",
    image: "/images/aman-kyoto-room.webp",
    imageAlt: "Official Aman Kyoto room overlooking a forest garden",
    summary: "A quiet Kyoto retreat with dedicated movement, premium dining, and a privately considered Kansai journey.",
    idealFor: "Travelers seeking privacy, calm, and a higher level of orchestration across Kyoto and Osaka.",
    reason: "Privacy, access, and pace—considered around the moments that cannot be rushed.",
    experienceLabel: "One Private Access Experience",
    experienceOptions: [
      "A resident monk-led Buddhist temple visit request, with Kiyomizu-dera as a possible example",
      "A Shinto priest-guided formal worship request, with Fushimi Inari Taisha as a possible example",
      "Private tea, garden, artisan, or premium golf arrangements",
    ],
    pillars: [
      { name: "Stay", japanese: "住", preview: "Aman Kyoto · 3 nights", detail: "Three nights at Aman Kyoto, with final room or pavilion category confirmed for your dates." },
      { name: "Dine", japanese: "食", preview: "A premium Kansai dining sequence", detail: "A premium dining sequence shaped around Kyoto and selected HIWIN experiences." },
      { name: "Move", japanese: "行", preview: "Dedicated private movement", detail: "Airport transfer, intercity movement, and dedicated private transport. Alphard Executive Lounge, Mercedes-Benz V-Class, or equivalent may be requested, subject to supplier confirmation." },
      { name: "Relax", japanese: "癒", preview: "Hotel spa or premium relaxation", detail: "Hotel spa or a confirmed premium relaxation experience." },
      { name: "Enjoy", japanese: "楽", preview: "Private cultural access or premium golf", detail: "Choose one Private Access Experience. Requests may include a resident monk-led Buddhist temple visit, Shinto priest-guided formal shrine worship, private tea or craft, or premium golf. Every named venue and access arrangement requires confirmation." },
    ],
    itinerary: [
      { day: "Day 01", title: "Enter the garden", copy: "Private arrival at Aman Kyoto, time to settle, and a calm first dining experience." },
      { day: "Day 02", title: "A private Kyoto", copy: "A requested temple, shrine, tea, garden, or artisan experience shaped around confirmed access and your preferred pace." },
      { day: "Day 03", title: "Kansai, extended", copy: "Choose deeper Kyoto, a private Osaka extension, or a day centered on spa and stillness." },
      { day: "Day 04", title: "Depart without hurry", copy: "A measured morning and private onward transfer." },
    ],
  },
];

export const getJourneyPackage = (slug: string) => journeyPackages.find((item) => item.slug === slug);

export const partnerHotels = [
  {
    name: "W Osaka",
    location: "Shinsaibashi, Osaka",
    image: "/images/w-osaka-room.jpg",
    imageAlt: "Official W Osaka guest room with city views",
    packageSlug: "signature",
    summary: "A bold design hotel on Midosuji, chosen as the city anchor for Osaka Signature.",
    source: "Official W Osaka imagery",
  },
  {
    name: "Aman Kyoto",
    location: "Takagamine, Kyoto",
    image: "/images/aman-kyoto-room.webp",
    imageAlt: "Official Aman Kyoto room overlooking its forest garden",
    packageSlug: "prestige",
    summary: "A secluded forest retreat selected as the accommodation anchor for Kansai Prestige.",
    source: "Official Aman Kyoto imagery",
  },
];

export const services = [
  {
    number: "01",
    title: "Stay",
    japanese: "住",
    description: "Apartment Hotel 11 in Osaka, with W Osaka and Aman Kyoto anchoring the premium package levels.",
    image: "/images/namba-minami-7-room-a.jpg",
  },
  {
    number: "02",
    title: "Dine",
    japanese: "食",
    description: "Restaurants across teppanyaki, tonkatsu, crab, tempura, robata, and ramen, selected to suit the package and guest.",
    image: "/images/tonkatsu.jpg",
  },
  {
    number: "03",
    title: "Move",
    japanese: "行",
    description: "Airport transfer, private vehicles, and flexible movement across Osaka, Kyoto, Nara, Kobe, and Kansai.",
    image: "/images/chauffeur.jpg",
  },
  {
    number: "04",
    title: "Relax",
    japanese: "癒",
    description: "Partner massage and relaxation experiences positioned where they genuinely make the journey easier.",
    image: "/images/spa.jpg",
  },
  {
    number: "05",
    title: "Enjoy",
    japanese: "楽",
    description: "City culture, neighborhood discoveries, and Osaka evenings connected into one considered journey.",
    image: "/images/dotonbori.jpg",
  },
];

export type Destination = {
  slug: string;
  name: string;
  region: string;
  kanji: string;
  theme: string;
  reason: string;
  summary: string;
  bestMatch: string;
  recommendedTime: string;
  image?: string;
  imageAlt?: string;
  detailReady: boolean;
  pillars: PackagePillar[];
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "osaka",
    name: "Osaka",
    region: "Urban Kansai",
    kanji: "阪",
    theme: "Food, energy, and neighborhood life",
    reason: "Go for a city that becomes more rewarding when you move beyond the famous signs and into its markets, kitchens, and local streets.",
    summary: "Apartment-style ease, expressive food, lively evenings, and a practical base for the wider Kansai region.",
    bestMatch: "Essential or Signature",
    recommendedTime: "2–4 days",
    image: "/images/osaka-castle.jpg",
    imageAlt: "Osaka skyline and castle at dusk",
    detailReady: true,
    pillars: [
      { name: "Stay", japanese: "住", preview: "Apartment Hotel 11 or W Osaka", detail: "Choose an Apartment Hotel 11 neighborhood base or a premium city stay at W Osaka, subject to dates and room confirmation." },
      { name: "Dine", japanese: "食", preview: "Markets and HIWIN dining", detail: "Connect market culture and neighborhood food with selected restaurants across the HIWIN dining network." },
      { name: "Move", japanese: "行", preview: "Rail, transfer, or private car", detail: "Use Osaka's rail network with selected transfer or private-car support where it meaningfully reduces friction." },
      { name: "Relax", japanese: "癒", preview: "Urban reset", detail: "Position massage, spa, or a slower neighborhood morning between energetic city experiences." },
      { name: "Enjoy", japanese: "楽", preview: "Markets, streets, culture, nights", detail: "Shape a day around Kuromon, Shinsekai, central Osaka, craft, shopping, or an evening route rather than a rigid checklist." },
    ],
    highlights: ["Kuromon and central food culture", "Shinsekai and southern Osaka character", "A hosted city or golf day by request", "Evening dining and reservation support"],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    region: "Cultural Kansai",
    kanji: "京",
    theme: "Refinement, craft, and spiritual depth",
    reason: "Go to slow down enough to notice how gardens, tea, food, faith, and handwork are connected.",
    summary: "A considered Kyoto journey balances renowned places with quieter cultural encounters and room to absorb them.",
    bestMatch: "Signature or Prestige",
    recommendedTime: "1–3 days",
    image: "/images/aman-kyoto-room.webp",
    imageAlt: "A quiet Aman Kyoto room looking toward a forest garden",
    detailReady: true,
    pillars: [
      { name: "Stay", japanese: "住", preview: "Aman Kyoto or confirmed alternative", detail: "Use Aman Kyoto or another confirmed premium base to place stillness and landscape at the center of the stay." },
      { name: "Dine", japanese: "食", preview: "Kaiseki, tea, and seasonal dining", detail: "Explore seasonal Kyoto dining, tea, tempura, or a privately considered meal, subject to reservation." },
      { name: "Move", japanese: "行", preview: "Private car and measured routing", detail: "Reduce transfers and crowd pressure with a route designed around timing, geography, and confirmed vehicle support." },
      { name: "Relax", japanese: "癒", preview: "Garden, spa, and unhurried time", detail: "Leave room for hotel spa, garden stillness, tea, or an intentionally slower morning." },
      { name: "Enjoy", japanese: "楽", preview: "Temple, shrine, tea, or artisan request", detail: "Explore requests such as a resident monk-led Buddhist temple visit, Shinto priest-guided formal worship, private tea, gardens, or artisan encounters. Named access is never guaranteed before confirmation." },
    ],
    highlights: ["Kiyomizu-dera monk-led visit request", "Fushimi Inari Taisha formal worship request", "Private tea, garden, or artisan encounter", "Premium golf or an Osaka extension"],
  },
  {
    slug: "wakayama",
    name: "Wakayama & Kumano",
    region: "Southern Kii Peninsula",
    kanji: "熊",
    theme: "Pilgrimage, forest, and renewal",
    reason: "Go when the journey needs a deeper reset—sacred routes, forest, water, and onsen beyond the city.",
    summary: "Wakayama brings pilgrimage landscapes, coastal food, restorative bathing, and a powerful contrast to urban Kansai.",
    bestMatch: "Signature extension or Prestige",
    recommendedTime: "2–3 days",
    detailReady: true,
    pillars: [
      { name: "Stay", japanese: "住", preview: "Onsen ryokan or coastal retreat", detail: "Plan an overnight stay around a confirmed onsen ryokan, coastal property, or quiet Kumano base." },
      { name: "Dine", japanese: "食", preview: "Tuna, seafood, and mountain produce", detail: "Build meals around Katsuura tuna, coastal seafood, local vegetables, and the mountain character of Kumano." },
      { name: "Move", japanese: "行", preview: "Private car with local connections", detail: "Treat Wakayama as a multi-day extension using confirmed private transport and local boats or rail where appropriate." },
      { name: "Relax", japanese: "癒", preview: "Ocean or forest onsen", detail: "Use hot springs and slower evenings as a central part of the route, not an afterthought." },
      { name: "Enjoy", japanese: "楽", preview: "Kumano routes, shrines, river, and Nachi", detail: "Possible highlights include Kumano pilgrimage routes, grand shrines, a traditional river journey, Nachi Falls, or a morning market, subject to seasonal and supplier confirmation." },
    ],
    highlights: ["Kumano pilgrimage landscapes", "Nachi Falls and sacred sites", "Katsuura tuna and coastal food", "River, forest, and onsen time"],
  },
  {
    slug: "nara-yoshino",
    name: "Nara & Yoshino",
    region: "Eastern Kansai",
    kanji: "奈",
    theme: "Sacred forest, early history, and living craft",
    reason: "Go beyond the familiar park into mountain faith, washi, cedar, and slower village traditions.",
    summary: "A future route connecting Nara's spiritual history with the workshops and landscapes of Yoshino.",
    bestMatch: "Signature or Prestige",
    recommendedTime: "1–2 days",
    detailReady: false,
    pillars: [],
    highlights: [],
  },
  {
    slug: "kobe-awaji",
    name: "Kobe & Awaji",
    region: "Bay and island Kansai",
    kanji: "淡",
    theme: "Harbor ease, island produce, and design",
    reason: "Go for a softer coastal counterpoint to Osaka, with architecture, food, and island landscapes close at hand.",
    summary: "A future bay-to-island route linking Kobe's urban polish with Awaji's landscape and produce.",
    bestMatch: "Essential extension or Signature",
    recommendedTime: "1–2 days",
    detailReady: false,
    pillars: [],
    highlights: [],
  },
  {
    slug: "setouchi-shikoku",
    name: "Setouchi & Shikoku",
    region: "Inland Sea",
    kanji: "瀬",
    theme: "Art islands, water, and living traditions",
    reason: "Go when art, boats, craft, food, and small communities should set the pace of the journey.",
    summary: "A future multi-night extension covering art islands, Tokushima traditions, coastal food, and restorative landscapes.",
    bestMatch: "Signature extension or Prestige",
    recommendedTime: "3–5 days",
    detailReady: false,
    pillars: [],
    highlights: [],
  },
];

export const getDestination = (slug: string) => destinations.find((destination) => destination.slug === slug);
