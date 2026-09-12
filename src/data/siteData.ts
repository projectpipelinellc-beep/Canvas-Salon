/**
 * CENTRALIZED BUSINESS DATA
 * ─────────────────────────────────────────────────────────────────────────
 * Every piece of editable business information for the Canvas Salon Studio
 * redesign concept lives in this single file. To update the site's
 * content — address, hours, services, artists, gallery captions, reviews,
 * amenities, or links — edit the values below. No other file should need
 * to change for a routine content update.
 *
 * ⚠️ DEVELOPER / OWNER NOTE ───────────────────────────────────────────────
 * This is a private REDESIGN CONCEPT, not the salon's published website.
 * Every field marked "CONFIRM" or "PLACEHOLDER" below must be reviewed and
 * approved by the salon owner before any of this content goes live:
 *   - Business address, phone number and hours
 *   - Exact service list, descriptions and any pricing
 *   - Staff/artist roster, names, specialties and bios
 *   - Portfolio / gallery photography
 *   - Review excerpts and attributions
 *   - Amenities and accessibility claims
 *   - Booking URL and current-website URL
 *   - Social media links and email address (none are set — see `social`)
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface DayHours {
  day: string;
  /** JS Date.getDay() index: 0 = Sunday … 6 = Saturday */
  dayIndex: number;
  hours: string;
  closed: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export interface Artist {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  portrait: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  date: string;
}

export interface Amenity {
  id: string;
  label: string;
  description: string;
}

/* ── Core business info ──────────────────────────────────────────────── */

export const business = {
  name: "Canvas Salon Studio",
  tagline: "Your Hair. Your Style. Your Canvas.",
  categoriesShort: "Hair • Makeup • Waxing • Brows",

  // CONFIRM before launch — verify against current signage / lease documents.
  address: {
    line1: "271 U.S. Route 6",
    line2: "Mahopac, NY 10541",
    full: "271 U.S. Route 6, Mahopac, NY 10541",
  },

  // CONFIRM before launch.
  phone: {
    display: "(845) 628-0188",
    tel: "8456280188",
  },

  // CONFIRM before launch — current live site, kept for reference only.
  currentWebsiteUrl: "https://www.canvassalonstudiony.com/",

  // CONFIRM before launch — this concept links every booking action here.
  bookingUrl: "https://www.vagaro.com/canvassalonstudio",

  // Generated from the address above. No paid Maps API required.
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=271+U.S.+Route+6%2C+Mahopac%2C+NY+10541",

  walkInsAccepted: true,
} as const;

/* ── Navigation ───────────────────────────────────────────────────────── */

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Artists", href: "#artists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

/* ── Hours ────────────────────────────────────────────────────────────
   CONFIRM before launch. Displayed as a static, accessible table; the
   current day is additionally highlighted client-side with JavaScript. */

export const hours: DayHours[] = [
  { day: "Sunday", dayIndex: 0, hours: "Closed", closed: true },
  { day: "Monday", dayIndex: 1, hours: "Closed", closed: true },
  { day: "Tuesday", dayIndex: 2, hours: "10:00 AM – 6:00 PM", closed: false },
  { day: "Wednesday", dayIndex: 3, hours: "10:00 AM – 5:00 PM", closed: false },
  { day: "Thursday", dayIndex: 4, hours: "10:00 AM – 6:00 PM", closed: false },
  { day: "Friday", dayIndex: 5, hours: "10:00 AM – 7:00 PM", closed: false },
  { day: "Saturday", dayIndex: 6, hours: "9:00 AM – 6:00 PM", closed: false },
];

/* ── Services ─────────────────────────────────────────────────────────
   DEVELOPER NOTE: These are intentionally general category descriptions.
   Exact treatment names, durations and prices must be imported from the
   salon's approved service menu only after owner sign-off — do not add
   specific treatments or pricing here without that approval. */

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    name: "Hair",
    description:
      "Personalized cutting, coloring and styling services designed around your hair, preferences and desired look.",
  },
  {
    id: "makeup",
    name: "Makeup",
    description:
      "Professional makeup application for everyday wear or special occasions, tailored to complement your features.",
  },
  {
    id: "waxing",
    name: "Waxing",
    description:
      "Precise, gentle waxing services designed with your comfort and skin in mind.",
  },
  {
    id: "brows",
    name: "Brows",
    description:
      "Brow shaping and grooming services to frame your face and suit your personal style.",
  },
];

/* ── Artists ──────────────────────────────────────────────────────────
   PLACEHOLDER DATA — no staff members are named here because the current
   roster has not been confirmed by the owner. A prior online review
   mentions stylists by name (Laurie, Dayana, Jess) but this concept does
   not assume any of them are still on staff. Replace the placeholders
   below with the approved artist roster, portraits and bios. */

export const artists: Artist[] = [
  {
    id: "artist-1",
    name: "Artist Name",
    specialty: "Specialty — Pending Confirmation",
    bio: "Biography placeholder. Artist details will be added following salon approval.",
    portrait: "/assets/team/artist-01.svg",
  },
  {
    id: "artist-2",
    name: "Artist Name",
    specialty: "Specialty — Pending Confirmation",
    bio: "Biography placeholder. Artist details will be added following salon approval.",
    portrait: "/assets/team/artist-02.svg",
  },
  {
    id: "artist-3",
    name: "Artist Name",
    specialty: "Specialty — Pending Confirmation",
    bio: "Biography placeholder. Artist details will be added following salon approval.",
    portrait: "/assets/team/artist-03.svg",
  },
  {
    id: "artist-4",
    name: "Artist Name",
    specialty: "Specialty — Pending Confirmation",
    bio: "Biography placeholder. Artist details will be added following salon approval.",
    portrait: "/assets/team/artist-04.svg",
  },
];

export const artistsNotice =
  "Updated artist profiles will be added following salon approval.";

/* ── Gallery ──────────────────────────────────────────────────────────
   Drop replacement photography into /public/assets/gallery using the
   same filenames (or update `src` below) to swap these placeholders. */

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "/assets/gallery/gallery-01-hair-transformation.svg",
    alt: "Placeholder image representing a hair transformation",
    category: "Hair Transformations",
  },
  {
    id: "gallery-2",
    src: "/assets/gallery/gallery-02-color-work.svg",
    alt: "Placeholder image representing color work",
    category: "Color Work",
  },
  {
    id: "gallery-3",
    src: "/assets/gallery/gallery-03-finished-styling.svg",
    alt: "Placeholder image representing finished styling",
    category: "Finished Styling",
  },
  {
    id: "gallery-4",
    src: "/assets/gallery/gallery-04-makeup.svg",
    alt: "Placeholder image representing makeup artistry",
    category: "Makeup",
  },
  {
    id: "gallery-5",
    src: "/assets/gallery/gallery-05-brows.svg",
    alt: "Placeholder image representing brow services",
    category: "Brows",
  },
  {
    id: "gallery-6",
    src: "/assets/gallery/gallery-06-salon-interior.svg",
    alt: "Placeholder image representing the salon interior",
    category: "Salon Interior",
  },
  {
    id: "gallery-7",
    src: "/assets/gallery/gallery-07-behind-the-scenes.svg",
    alt: "Placeholder image representing behind-the-scenes work",
    category: "Behind the Scenes",
  },
  {
    id: "gallery-8",
    src: "/assets/gallery/gallery-08-team.svg",
    alt: "Placeholder image representing the salon team",
    category: "Team",
  },
];

export const galleryNotice =
  "Portfolio images will be added following salon approval.";

/* ── Reviews ──────────────────────────────────────────────────────────
   Owner-supplied excerpts, reproduced verbatim. DEVELOPER NOTE: all
   excerpts and attributions must be re-confirmed with the owner before
   publication — do not add, remove or reword any review. */

export const reviewSummary = {
  rating: 5.0,
  count: 22,
};

export const reviews: Review[] = [
  {
    id: "review-1",
    quote:
      "If you want a fantastic haircut and a great laugh, go see Laurie! She really listens to what you want and has incredible attention to detail.",
    author: "Bert A.",
    date: "June 2026",
  },
  {
    id: "review-2",
    quote:
      "Dayana is great! Very patient and kind. I can't even describe how much I loved the results.",
    author: "Mabelyn V.",
    date: "November 2025",
  },
  {
    id: "review-3",
    quote: "Jess did a beautiful job on my color and blowout!",
    author: "Nicole M.",
    date: "August 2025",
  },
  {
    id: "review-4",
    quote:
      "The salon is immaculate and beautifully designed, offering a welcoming space where you can truly relax.",
    author: "Jennifer C.",
    date: "August 2024",
  },
];

/* ── Salon experience / amenities ────────────────────────────────────── */

export const amenities: Amenity[] = [
  {
    id: "parking",
    label: "Free Parking",
    description: "Complimentary parking is available on site.",
  },
  {
    id: "walk-ins",
    label: "Walk-Ins Welcome",
    description: "Appointments are recommended; walk-ins are accepted.",
  },
  {
    id: "wifi",
    label: "WiFi",
    description: "Complimentary WiFi is available in the salon.",
  },
  {
    id: "snack-bar",
    label: "Snack Bar",
    description: "A snack bar is available for guests during their visit.",
  },
  {
    id: "accessible",
    label: "Accessible Salon",
    description:
      "Accessibility accommodations listed by the salon — please call with specific questions.",
  },
  {
    id: "kid-friendly",
    label: "Kid-Friendly",
    description: "Children are welcome at Canvas Salon Studio.",
  },
];

/* ── Social links — NOT SET ──────────────────────────────────────────
   No Instagram, Facebook or email address was supplied for this concept.
   Leave these as null until the owner provides verified links; the UI
   omits any link whose value is null rather than guessing at one. */

export const social = {
  instagram: null as string | null,
  facebook: null as string | null,
  email: null as string | null,
};

/* ── SEO ──────────────────────────────────────────────────────────────── */

export const seo = {
  title: "Canvas Salon Studio | Hair & Beauty Salon in Mahopac, NY",
  description:
    "Discover Canvas Salon Studio in Mahopac, New York, offering hair, makeup, waxing and brow services. View availability and book your appointment online.",
};

/* ── Legal ────────────────────────────────────────────────────────────
   Both pages carry the same concept disclosure as the rest of the site
   and are placeholder legal text — see the developer note at the top of
   src/pages/PrivacyPolicyPage.tsx and TermsPage.tsx. A qualified
   professional should review both before this site is published. */

export const legal = {
  privacyPolicyUrl: "/privacy.html",
  termsUrl: "/terms.html",
};
