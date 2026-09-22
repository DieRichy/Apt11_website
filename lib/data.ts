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

export const services = [
  {
    number: "01",
    title: "Arrival planning",
    description: "A considered arrival outline, with transfer support explored after your dates and needs are understood.",
    placeholder: "[AIRPORT TRANSFER PHOTO]",
  },
  {
    number: "02",
    title: "Dining guidance",
    description: "Suggestions shaped around your tastes, occasion, group, and the neighborhoods already in your journey.",
    placeholder: "[DINING EXPERIENCE PHOTO]",
  },
  {
    number: "03",
    title: "Private day planning",
    description: "Thoughtful day ideas across Osaka, Kyoto, Nara, or Kobe, subject to availability and confirmation.",
    placeholder: "[PRIVATE JOURNEY PHOTO]",
  },
];

