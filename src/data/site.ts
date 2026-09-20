// Central config for photographer branding, navigation, and all sample imagery/copy.
// Swap the `unsplashId` values (or point `src` at your own files) to replace sample
// photography with real client work — nothing else in the app needs to change.

export const brand = {
  name: "Kishore Photography",
  signatureName: "Kishore",
  wordmarkBottom: "PHOTOGRAPHY",
  tagline: "Stories. Emotions. Moments.",
  email: "hello@kishorephotography.com",
  phone: "+1 (415) 555-0134",
  instagramHandle: "@kishorephotography",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/** Builds a responsive Unsplash source URL from a photo id. */
export function unsplash(id: string, width: number, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export type Category =
  | "Weddings"
  | "Couples"
  | "Portraits"
  | "Family"
  | "Events"
  | "Travel";

export const categories: Category[] = [
  "Weddings",
  "Couples",
  "Portraits",
  "Family",
  "Events",
  "Travel",
];

export type Orientation = "portrait" | "landscape" | "wide" | "square";

export interface GalleryImage {
  id: string;
  unsplashId: string;
  category: Category;
  title: string;
  location: string;
  orientation: Orientation;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    unsplashId: "1519741497674-611481863552",
    category: "Weddings",
    title: "First Light",
    location: "Sonoma, California",
    orientation: "wide",
    alt: "Bride and groom backlit by golden sunlight, holding a bouquet",
  },
  {
    id: "g2",
    unsplashId: "1583939003579-730e3918a45a",
    category: "Weddings",
    title: "Just Married",
    location: "Healdsburg, California",
    orientation: "wide",
    alt: "Newlyweds walking through a shower of confetti with their wedding party",
  },
  {
    id: "g3",
    unsplashId: "1537633552985-df8429e8048b",
    category: "Weddings",
    title: "Windswept Vows",
    location: "Big Sur, California",
    orientation: "portrait",
    alt: "Bride and groom embracing on a rocky coastline, her veil caught in the wind",
  },
  {
    id: "g4",
    unsplashId: "1606800052052-a08af7148866",
    category: "Weddings",
    title: "The Rings",
    location: "Napa Valley, California",
    orientation: "square",
    alt: "Two wedding rings resting on a box beside white flowers",
  },
  {
    id: "g5",
    unsplashId: "1520854221256-17451cc331bf",
    category: "Couples",
    title: "Hand in Hand",
    location: "Sonoma, California",
    orientation: "portrait",
    alt: "Close-up of a couple holding hands against a softly lit green background",
  },
  {
    id: "g6",
    unsplashId: "1606216794074-735e91aa2c92",
    category: "Couples",
    title: "Golden Laughter",
    location: "Santa Barbara, California",
    orientation: "landscape",
    alt: "Bride and groom laughing together beneath the trees",
  },
  {
    id: "g7",
    unsplashId: "1500648767791-00dcc994a43e",
    category: "Portraits",
    title: "Quiet Confidence",
    location: "San Francisco, California",
    orientation: "portrait",
    alt: "Natural outdoor portrait of a man in soft daylight",
  },
  {
    id: "g8",
    unsplashId: "1524504388940-b1c1722653e1",
    category: "Portraits",
    title: "Studio Light",
    location: "Oakland, California",
    orientation: "square",
    alt: "Editorial studio portrait of a woman against a dark background",
  },
  {
    id: "g9",
    unsplashId: "1524250502761-1ac6f2e30d43",
    category: "Portraits",
    title: "Wind and Light",
    location: "Point Reyes, California",
    orientation: "landscape",
    alt: "Woman laughing with her hair caught in the wind, warm evening light",
  },
  {
    id: "g10",
    unsplashId: "1476703993599-0035a21b17a9",
    category: "Family",
    title: "Sunday Morning",
    location: "Berkeley, California",
    orientation: "landscape",
    alt: "Mother sitting on a couch with her two young children",
  },
  {
    id: "g11",
    unsplashId: "1522621032211-ac0031dfbddc",
    category: "Family",
    title: "Sisters",
    location: "Los Angeles, California",
    orientation: "portrait",
    alt: "Two women embracing and laughing together outdoors",
  },
  {
    id: "g12",
    unsplashId: "1470753937643-efeb931202a9",
    category: "Events",
    title: "The Celebration",
    location: "San Jose, California",
    orientation: "wide",
    alt: "Crowd of guests celebrating outdoors under string lights at dusk",
  },
  {
    id: "g13",
    unsplashId: "1529333166437-7750a6dd5a70",
    category: "Events",
    title: "Golden Hour Cheers",
    location: "Malibu, California",
    orientation: "landscape",
    alt: "Friends cheering with arms raised, silhouetted against the sunset",
  },
  {
    id: "g14",
    unsplashId: "1493246507139-91e8fad9978e",
    category: "Travel",
    title: "Above the Clouds",
    location: "Sierra Nevada, California",
    orientation: "wide",
    alt: "Sweeping mountain range reflected in a still alpine lake at dawn",
  },
  {
    id: "g15",
    unsplashId: "1533105079780-92b9be482077",
    category: "Travel",
    title: "Blue Hour, Santorini",
    location: "Santorini, Greece",
    orientation: "landscape",
    alt: "Whitewashed buildings with blue domes overlooking the sea in Santorini",
  },
];

export const featuredWedding = {
  eyebrow: "Featured Story",
  couple: "Sushmita & Harshal",
  location: "Sonoma, California",
  cta: "View Their Story",
  unsplashId: "1511285560929-80b456fea0bc",
  alt: "Sushmita and Harshal celebrating with balloons at their wedding in Sonoma, California",
};

export const story = {
  heading: "Every Frame Has a Story",
  quote:
    "Photography isn't just about capturing how a moment looked. It's about remembering how it felt.",
  body: "I work quietly and close to the ground — watching for the glance between courses, the hand that reaches for another without looking, the laugh that catches someone off guard. Nothing here is staged twice. My job is to be ready when it happens once, so the photograph can hold what the moment felt like, not just what it looked like.",
  cta: "My Story",
  unsplashId: "1508672019048-805c876b67e2",
  alt: "A person standing quietly at the edge of a still mountain lake",
};

export const services = [
  {
    name: "Weddings",
    description:
      "Full-day storytelling from getting ready through the celebration.",
  },
  {
    name: "Portraits",
    description:
      "Natural and expressive portraits for individuals, couples, and families.",
  },
  {
    name: "Events",
    description:
      "Authentic coverage of celebrations, cultural events, and special occasions.",
  },
  {
    name: "Engagements",
    description:
      "Relaxed sessions focused on genuine connection and personality.",
  },
];

export const about = {
  heading: "Behind the Camera",
  greeting: "Hi, I'm Kishore.",
  body: "I'm passionate about capturing real moments — the laughter, emotions, details, and connections that make every story unique. My approach is relaxed and documentary-inspired, allowing moments to happen naturally while creating timeless photographs you'll want to revisit for years.",
  cta: "More About Me",
  alt: "Portrait of Kishore, photographer",
};

export const testimonials = [
  {
    quote:
      "Kishore captured moments we didn't even realize were happening. Looking through our photographs feels like reliving the entire day.",
    author: "Sushmita & Harshal",
  },
  {
    quote:
      "He has a way of disappearing into the background until you forget he's even there — and somehow that's when the best photographs happen.",
    author: "Priya & Arjun",
  },
  {
    quote:
      "We've looked through hundreds of wedding galleries and never felt anything like this. Every photograph feels like it remembers something we'd forgotten.",
    author: "Emily & Daniel",
  },
];

export const instagramStrip = [
  "1465495976277-4387d4b0b4c6",
  "1529636798458-92182e662485",
  "1522673607200-164d1b6ce486",
  "1519225421980-715cb0215aed",
  "1487412947147-5cebf100ffc2",
  "1522075469751-3a6694fb2f61",
];

export const sessionTypes = [
  "Wedding",
  "Engagement",
  "Portrait",
  "Family",
  "Event",
  "Travel",
  "Other",
];

export const footerLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
