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
    pillars: [
      { name: "Stay", japanese: "住", detail: "Three nights at Kuromon 9, Tsutenkaku 3, or Namba Minami 7, selected around your dates and group." },
      { name: "Dine", japanese: "食", detail: "One experience from the HIWIN dining network plus neighborhood recommendations." },
      { name: "Move", japanese: "行", detail: "One-way airport transfer and a practical local transport outline." },
      { name: "Relax", japanese: "癒", detail: "One partner relaxation experience for two, arranged around the itinerary." },
      { name: "Enjoy", japanese: "楽", detail: "A considered Osaka neighborhood plan with evening ideas." },
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
    pillars: [
      { name: "Stay", japanese: "住", detail: "Three nights at W Osaka, with final room category confirmed for your dates." },
      { name: "Dine", japanese: "食", detail: "Two selected dining experiences across HIWIN's restaurant network." },
      { name: "Move", japanese: "行", detail: "Return airport transfers plus one private-car day in Osaka." },
      { name: "Relax", japanese: "癒", detail: "A relaxation experience for two, timed around the city plan." },
      { name: "Enjoy", japanese: "楽", detail: "A privately shaped Osaka day and evening reservation support." },
    ],
    itinerary: [
      { day: "Day 01", title: "A bold Osaka arrival", copy: "Private airport transfer, W Osaka check-in, and a selected dinner." },
      { day: "Day 02", title: "Osaka by private car", copy: "A flexible city day connecting culture, food, shopping streets, and the neighborhoods that interest you." },
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
    pillars: [
      { name: "Stay", japanese: "住", detail: "Three nights at Aman Kyoto, with final room or pavilion category confirmed for your dates." },
      { name: "Dine", japanese: "食", detail: "A premium dining sequence shaped around Kyoto and selected HIWIN experiences." },
      { name: "Move", japanese: "行", detail: "Airport transfer, intercity movement, and dedicated private transport." },
      { name: "Relax", japanese: "癒", detail: "Hotel spa or a confirmed premium relaxation experience." },
      { name: "Enjoy", japanese: "楽", detail: "A private Kyoto cultural day with an optional Osaka extension." },
    ],
    itinerary: [
      { day: "Day 01", title: "Enter the garden", copy: "Private arrival at Aman Kyoto, time to settle, and a calm first dining experience." },
      { day: "Day 02", title: "A private Kyoto", copy: "A dedicated cultural day shaped around craft, temples, gardens, and your preferred pace." },
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
    image: "/images/photorealistic-high-end-tonkatsu-teishoku--35mm-le.png",
  },
  {
    number: "03",
    title: "Move",
    japanese: "行",
    description: "Airport transfer, private vehicles, and flexible movement across Osaka, Kyoto, Nara, Kobe, and Kansai.",
    image: "/images/photorealistic-premium-japanese-chauffeur-service-.png",
  },
  {
    number: "04",
    title: "Relax",
    japanese: "癒",
    description: "Partner massage and relaxation experiences positioned where they genuinely make the journey easier.",
    image: "/images/photorealistic-high-end-japanese-massage-spa-in-os.png",
  },
  {
    number: "05",
    title: "Enjoy",
    japanese: "楽",
    description: "City culture, neighborhood discoveries, and Osaka evenings connected into one considered journey.",
    image: "/images/photorealistic-dotonbori-osaka-at-night--canal-ref.png",
  },
];
