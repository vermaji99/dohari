export type VerificationStatus =
  | "VERIFIED"
  | "PUBLICLY_LISTED"
  | "NEEDS_VERIFICATION"
  | "INFORMATION_UNAVAILABLE";

export interface ImageData {
  id: string;
  url: string;
  alt: string;
  description: string;
  category: string;
  source?: string;
  credit?: string;
  license?: string;
}

export interface DohrighatPlace {
  id: string;
  name: string;
  slug?: string;
  category: string;
  subcategory?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
  images: string[];
  imageAlt?: string;
  imageSource?: string;
  openingHours?: string;
  rating?: number;
  reviewCount?: number;
  verificationStatus: VerificationStatus;
  sourceUrl?: string;
  lastVerified?: string;
  history?: string;
  timings?: string;
  entryFee?: string;
  nearbyAttractions?: string[];
  tips?: string;
  tags?: string[];
  priceRange?: string;
  status?: string;
}

export interface EducationalInstitute extends Omit<DohrighatPlace, 'category' | 'subcategory'> {
  id: string;
  name: string;
  type: "school" | "college" | "coaching" | "computer" | "library";
  board?: string;
  medium?: string;
  classes?: string[];
  courses?: string[];
  facilities?: string[];
  yearEstablished?: number;
  principal?: string;
  affiliationNo?: string;
  schoolCode?: string;
  contact?: string;
}

export const realImages: ImageData[] = [
  // Rivers & Pools
  {
    id: "ghaghara-river",
    url: "/images/river_ghaghara.png",
    alt: "Ghaghara River Dohrighat",
    description: "The majestic Ghaghara River flowing through Dohrighat",
    category: "rivers",
    source: "Local photography",
  },
  // Temples
  {
    id: "muktidham-1",
    url: "/images/mukti_dham.png",
    alt: "Muktidham Dohrighat",
    description: "Muktidham Temple and Park located on the banks of the Ghaghara river in Dohrighat",
    category: "temples",
    source: "Mau District Administration",
  },
  {
    id: "muktidham-2",
    url: "/images/mukti_dham2.png",
    alt: "Muktidham Dohrighat - Side View",
    description: "Another beautiful view of Muktidham",
    category: "temples",
    source: "Mau District Administration",
  },
  {
    id: "shiv-temple",
    url: "/images/shiv_temple.png",
    alt: "Shiv Temple Dohrighat",
    description: "Shiv Temple in Dohrighat",
    category: "temples",
  },
  {
    id: "durga-maa-temple",
    url: "/images/durga_maa_temple.png",
    alt: "Durga Maa Temple Dohrighat",
    description: "Durga Maa Temple",
    category: "temples",
  },
  {
    id: "hanuman-ji-temple",
    url: "/images/hanuman_ji_temple.png",
    alt: "Hanuman Ji Temple Dohrighat",
    description: "Hanuman Ji Temple",
    category: "temples",
  },
  {
    id: "sai-baba-temple",
    url: "/images/sai_baba_temple.png",
    alt: "Sai Baba Temple Dohrighat",
    description: "Sai Baba Temple",
    category: "temples",
  },
  // Canals
  {
    id: "canal-dam",
    url: "/images/canal_dam.png",
    alt: "Dohrighat Canal Dam",
    description: "Canal Dam in Dohrighat",
    category: "canals",
  },
  {
    id: "canals-2",
    url: "/images/canals_2.png",
    alt: "Dohrighat Canals",
    description: "Another view of Dohrighat canals",
    category: "canals",
  },
  {
    id: "dam-3",
    url: "/images/dam_3.png",
    alt: "Dohrighat Dam",
    description: "Third view of Dohrighat dam",
    category: "canals",
  },
  // Schools
  {
    id: "school-1",
    url: "/images/school_1.png",
    alt: "School 1 in Dohrighat",
    description: "School in Dohrighat",
    category: "education",
  },
  {
    id: "school-2",
    url: "/images/school_2.png",
    alt: "School 2 in Dohrighat",
    description: "Another school in Dohrighat",
    category: "education",
  },
  // Colleges
  {
    id: "college-1",
    url: "/images/college_1.png",
    alt: "College 1 in Dohrighat",
    description: "College in Dohrighat",
    category: "education",
  },
  {
    id: "college-2",
    url: "/images/college_2.png",
    alt: "College 2 in Dohrighat",
    description: "Another college in Dohrighat",
    category: "education",
  },
  {
    id: "college-3",
    url: "/images/college_3.png",
    alt: "College 3 in Dohrighat",
    description: "Third college in Dohrighat",
    category: "education",
  },
  // Other
  {
    id: "railway-station",
    url: "/images/railway_s.png",
    alt: "Dohrighat Railway Station",
    description: "Dohrighat Railway Station",
    category: "transport",
  },
];

export const exploreCards = [
  {
    id: "ghaghara-river",
    icon: "waves",
    title: "Ghaghara River",
    description: "Experience the serene beauty of the sacred Ghaghara river",
    image: "/images/river_ghaghara.png",
    imageAlt: "Ghaghara River Dohrighat",
    href: "/rivers",
  },
  {
    id: "historic-ghats",
    icon: "building",
    title: "Historic Ghats & Muktidham",
    description: "Visit the ancient Muktidham temple and ghats",
    image: "/images/mukti_dham2.png",
    imageAlt: "Muktidham Dohrighat",
    href: "/temples",
  },
  {
    id: "food",
    icon: "utensils",
    title: "Local Food & Sweets",
    description: "Taste the authentic flavours of Dohrighat",
    image: "/images/mukti_dham.png",
    imageAlt: "Local Food Dohrighat",
    href: "/food",
  },
  {
    id: "markets",
    icon: "shopping",
    title: "Markets",
    description: "Explore local markets of Dohrighat",
    image: "/images/canal_dam.png",
    imageAlt: "Markets Dohrighat",
    href: "/markets",
  },
  {
    id: "education",
    icon: "graduation",
    title: "Education",
    description: "Quality schools and colleges in Dohrighat",
    image: "/images/college_1.png",
    imageAlt: "Education in Dohrighat",
    href: "/education",
  },
  {
    id: "healthcare",
    icon: "hospital",
    title: "Healthcare",
    description: "Hospitals and healthcare facilities in Dohrighat",
    image: "/images/school_1.png",
    imageAlt: "Healthcare in Dohrighat",
    href: "/healthcare",
  },
];

export const touristPlaces: DohrighatPlace[] = [
  {
    id: "muktidhaam",
    name: "Muktidhaam Dohrighat",
    category: "tourist",
    subcategory: "religious",
    description: "A beautiful temple complex and park on the banks of the Ghaghara River, featuring Bharat Mata Muktidham, a large Shiva statue, Trimurti statue, and Indian Emblem. It's a popular place for devotees and tourists alike.",
    history: "Muktidham is a modern spiritual and cultural center in Dohrighat, built to honor Bharat Mata (Mother India) and Lord Shiva.",
    address: "Mukti Dham Road, East Nagar Panchayat, Dohrighat, Mau, Uttar Pradesh",
    latitude: 26.26,
    longitude: 83.52,
    images: ["/images/mukti_dham.png", "/images/mukti_dham2.png"],
    imageAlt: "Muktidham Dohrighat",
    nearbyAttractions: ["Ghaghara River Ghats", "Ramghat", "Durga Ghat", "Khaki Ghat"],
    tips: "Best visited during sunrise or sunset for beautiful views of the river.",
    verificationStatus: "VERIFIED",
    sourceUrl: "District Mau official tourism website",
    lastVerified: "2025-07-22",
  },
];

export const riversGhats: DohrighatPlace[] = [
  {
    id: "ghaghara-river",
    name: "Ghaghara (Saryu) River",
    category: "rivers",
    subcategory: "river",
    description: "The sacred Ghaghara River, also known as Saryu, flows through Dohrighat. It's a major tributary of the Ganges and holds great religious significance.",
    history: "The Ghaghara River has been a lifeline for Dohrighat for centuries, supporting agriculture, spirituality, and daily life.",
    latitude: 26.26,
    longitude: 83.52,
    images: ["/images/river_ghaghara.png", "/images/mukti_dham.png"],
    imageAlt: "Ghaghara River Dohrighat",
    nearbyAttractions: ["Muktidhaam", "Ramghat", "Durga Ghat", "Khaki Ghat"],
    tips: "Take a walk along the ghats during sunrise or sunset for a peaceful experience.",
    verificationStatus: "VERIFIED",
    lastVerified: "2025-07-22",
  },
  {
    id: "ramghat",
    name: "Ramghat",
    category: "rivers",
    subcategory: "ghat",
    description: "An important historic ghat in Dohrighat with cultural and religious significance.",
    verificationStatus: "VERIFIED",
    sourceUrl: "District Mau official tourism website",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "durga-ghat",
    name: "Durga Ghat",
    category: "rivers",
    subcategory: "ghat",
    description: "A ghat in Dohrighat with religious significance.",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "khaki-ghat",
    name: "Khaki Ghat",
    category: "rivers",
    subcategory: "ghat",
    description: "A ghat in Dohrighat.",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
];

export const temples: DohrighatPlace[] = [
  {
    id: "muktidhaam-temple",
    name: "Bharat Mata Muktidham",
    category: "temples",
    subcategory: "hindu",
    description: "A beautiful temple complex and park on the banks of the Ghaghara River, featuring a large Shiva statue, Trimurti statue, and Indian Emblem.",
    history: "Muktidham is a modern spiritual and cultural center in Dohrighat, built to honor Bharat Mata (Mother India) and Lord Shiva.",
    address: "Mukti Dham Road, East Nagar Panchayat, Dohrighat",
    latitude: 26.26,
    longitude: 83.52,
    images: ["/images/mukti_dham.png", "/images/mukti_dham2.png"],
    imageAlt: "Muktidham Dohrighat",
    nearbyAttractions: ["Ghaghara River Ghats", "Ramghat"],
    tips: "Best visited during sunrise or sunset for beautiful views of the river.",
    verificationStatus: "VERIFIED",
    sourceUrl: "Mau District Administration",
    lastVerified: "2025-07-22",
  },
  {
    id: "durga-maa-temple-tiwaripur",
    name: "Durga Maa Temple",
    category: "temples",
    subcategory: "hindu",
    description: "Durga Maa Temple in Tiwaripur / Head Canal area",
    address: "Patnai Bujurg / Head Canal area",
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
];

export const canalsWaterInfra: DohrighatPlace[] = [
  {
    id: "dohrighat-pump-canal",
    name: "Dohrighat Pump Canal",
    category: "canals",
    subcategory: "irrigation",
    description: "Significant pump canal system in Dohrighat, important for irrigation of surrounding agricultural lands.",
    latitude: 26.26,
    longitude: 83.52,
    images: ["/images/canal_dam.png", "/images/canals_2.png", "/images/dam_3.png"],
    imageAlt: "Dohrighat Pump Canal",
    nearbyAttractions: ["Ghaghara River", "Muktidhaam"],
    tips: "Great place for photography and understanding local irrigation systems. Best visited during early morning.",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
  },
];

export const educationalInstitutes: EducationalInstitute[] = [
  {
    id: "navals-national-academy",
    name: "Naval's National Academy",
    type: "school",
    description: "A CBSE-affiliated school in Dohrighat, managed by Mahalaxmi Educational And Welfare Trust, offering classes from Pre-nursery to 12th.",
    address: "Near Baijnath Petrol Pump, Azamgarh Road, Dohrighat, Mau, Uttar Pradesh, India",
    board: "CBSE",
    affiliationNo: "2134149",
    schoolCode: "72142",
    principal: "Mrs. Sauvari Mukherjee",
    contact: "+91 8400900771, +91 8400900772",
    website: "https://navalsnationalacademydohrighat.com/",
    images: ["/images/school_1.png"],
    verificationStatus: "VERIFIED",
    sourceUrl: "https://navalsnationalacademydohrighat.com/, https://school.careers360.com/schools/navals-national-academy-dohrighat-mau",
    lastVerified: "2025-07-22",
  },
  {
    id: "cms-international-school",
    name: "CMS International School",
    type: "school",
    description: "An English-medium school in Budhawar, Dohrighat, known for discipline, quality education, and co-curricular activities.",
    address: "Budhawar, Dohrighat, Mau, Uttar Pradesh",
    medium: "English",
    images: ["/images/school_2.png"],
    verificationStatus: "PUBLICLY_LISTED",
    sourceUrl: "YouTube search results for CMS International School, Dohrighat",
    lastVerified: "2025-07-22",
  },
  {
    id: "victory-inter-college",
    name: "Victory Inter College",
    type: "college",
    description: "An inter college in Dohrighat.",
    address: "Dohrighat, Mau, Uttar Pradesh",
    board: "UPMSP",
    contact: "9616250965",
    images: ["/images/college_1.png"],
    verificationStatus: "PUBLICLY_LISTED",
    sourceUrl: "District Mau public utility directory",
    lastVerified: "2025-07-22",
  },
  {
    id: "parwati-mahila-pg-college",
    name: "Parwati Mahila P.G. College",
    type: "college",
    description: "A women's PG college in Dohrighat, offering courses like B.Ed., B.Sc., B.A., M.Sc., etc., affiliated to VBSPU Jaunpur.",
    address: "Dohrighat, Mau, Uttar Pradesh",
    contact: "9455952727",
    website: "https://www.parwaticollege.com/index.php",
    images: ["/images/college_2.png", "/images/college_3.png"],
    verificationStatus: "PUBLICLY_LISTED",
    sourceUrl: "https://www.parwaticollege.com/index.php",
    lastVerified: "2025-07-22",
  },
];

export const foodSweets: DohrighatPlace[] = [
  {
    id: "madhuraj-sweets",
    name: "Madhuraj Sweets",
    category: "food",
    subcategory: "sweets",
    description: "A popular sweets and restaurant in Dohrighat.",
    address: "Azamgarh - Dohrighat - Gorakhpur Road, Dohrighat, Uttar Pradesh 275303",
    phone: "+91 8090064730",
    rating: 3.9,
    reviewCount: 224,
    priceRange: "₹200–400",
    openingHours: "07:00–23:00",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "mahaveer-misthan",
    name: "Mahaveer Misthan",
    category: "food",
    subcategory: "sweets",
    address: "Azamgarh - Dohrighat - Gorakhpur Road, Dohrighat, Uttar Pradesh 275303",
    phone: "+91 9956991676",
    rating: 3.4,
    reviewCount: 28,
    openingHours: "06:30–22:30",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "the-viraj-food-zone",
    name: "The Viraj Food Zone",
    category: "food",
    subcategory: "restaurant",
    address: "In front of Rudra Medical Store, near Block, Dohrighat, Uttar Pradesh 275303",
    phone: "+91 9616966319",
    rating: 4.5,
    reviewCount: 60,
    priceRange: "₹1–200",
    openingHours: "09:00–21:00",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
];

export const jewelleryShops: DohrighatPlace[] = [
  {
    id: "vaibhav-swarn-kala-kendra",
    name: "Vaibhav Swarn Kala Kendra",
    category: "jewellery",
    subcategory: "jewellery",
    address: "Mai Chowk, Dohrighat",
    phone: "+91 8953814654",
    rating: 4.0,
    reviewCount: 3,
    openingHours: "09:00–20:00",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "akshita-jewellers",
    name: "Akshita Jewellers",
    category: "jewellery",
    verificationStatus: "NEEDS_VERIFICATION",
    images: [],
  },
  {
    id: "shivam-jewellers",
    name: "Shivam Jewellers",
    category: "jewellery",
    verificationStatus: "NEEDS_VERIFICATION",
    images: [],
  },
  {
    id: "shubham-swarn-kala-kendra",
    name: "Shubham Swarn Kala Kendra",
    category: "jewellery",
    verificationStatus: "NEEDS_VERIFICATION",
    images: [],
  },
  {
    id: "swarndeep-jewellers",
    name: "Swarndeep Jewellers",
    category: "jewellery",
    address: "Dohrighat",
    rating: 4.7,
    reviewCount: 3,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
];

export const clothingSarees: DohrighatPlace[] = [
  {
    id: "saptrang-saree-shop",
    name: "Saptrang Saree Shop",
    category: "clothing",
    subcategory: "saree",
    address: "Shop No. 1, Ground Floor, Chandrakatra Building, Ramghat Road, Dohrighat, Uttar Pradesh 275303",
    phone: "+91 9415274877",
    rating: 5.0,
    reviewCount: 33,
    verificationStatus: "PUBLICLY_LISTED",
    status: "Temporarily Closed / Needs Local Verification",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "kolkata-cloth-center",
    name: "Kolkata Cloth Center",
    category: "clothing",
    verificationStatus: "NEEDS_VERIFICATION",
    images: [],
  },
  {
    id: "shubham-vastralaya",
    name: "Shubham Vastralaya",
    category: "clothing",
    address: "Dohrighat, Uttar Pradesh 275303",
    phone: "+91 9415844869",
    rating: 4.9,
    reviewCount: 58,
    openingHours: "07:00–20:00",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "gupta-fine-cloth-center",
    name: "Gupta Fine Cloth Center",
    category: "clothing",
    address: "Mau-Gorakhpur Road, opposite Barhalganj Post Office, Dohrighat, Uttar Pradesh 275303",
    phone: "+91 8882951333",
    rating: 4.1,
    reviewCount: 27,
    openingHours: "07:00–19:30",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
];

export const utensilsHousehold: DohrighatPlace[] = [
  {
    id: "vaibhav-bartan-store",
    name: "Vaibhav Bartan Store",
    category: "utensils",
    subcategory: "household",
    address: "Rajesultanpur - Doharighat Road, Dohrighat, Uttar Pradesh 275303",
    verificationStatus: "PUBLICLY_LISTED",
    status: "Permanently Closed / Needs Local Verification",
    lastVerified: "2025-07-22",
    images: [],
  },
];

export const markets: DohrighatPlace[] = [
  {
    id: "dohrighat-market",
    name: "Dohrighat Market",
    category: "markets",
    address: "Dohrighat, Uttar Pradesh 275303",
    rating: 4.0,
    reviewCount: 1283,
    openingHours: "07:00–22:00",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
];

export const transport: DohrighatPlace[] = [
  {
    id: "dohrighat-bus-stand",
    name: "Dohrighat Bus Stand",
    category: "transport",
    subcategory: "bus depot",
    address: "Dohrighat, Uttar Pradesh 275303",
    rating: 4.1,
    reviewCount: 154,
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "dohrighat-railway-station",
    name: "Dohrighat Railway Station",
    category: "transport",
    subcategory: "railway station",
    address: "Dohrighat, Uttar Pradesh 275303",
    rating: 4.2,
    reviewCount: 92,
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: ["/images/railway_s.png"],
  },
];

export const healthcare: DohrighatPlace[] = [
  {
    id: "government-hospital-dohrighat",
    name: "Government Hospital, Dohrighat",
    category: "healthcare",
    subcategory: "hospital",
    address: "National Highway 29, Dohrighat, Uttar Pradesh 275303",
    rating: 4.2,
    reviewCount: 16,
    openingHours: "10:00–14:00 on listed working days",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
  {
    id: "maa-shakti-multi-speciality-hospital",
    name: "Maa Shakti Multi-Speciality Hospital",
    category: "healthcare",
    subcategory: "hospital",
    address: "Opposite Parvati Mahila PG College, Dohrighat, Uttar Pradesh 275303",
    rating: 5.0,
    reviewCount: 4,
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
];

export const otherBusinesses: DohrighatPlace[] = [
  {
    id: "natraj-ply-hardware",
    name: "Natraj Ply & Hardware",
    category: "hardware",
    subcategory: "plywood",
    address: "Near Police Booth, Dohrighat, Uttar Pradesh 275303",
    phone: "+91 9935435108",
    rating: 4.8,
    reviewCount: 19,
    openingHours: "09:00–19:00",
    verificationStatus: "PUBLICLY_LISTED",
    lastVerified: "2025-07-22",
    images: [],
  },
];

export const localStats = {
  population: "11,799 (2011 Census)",
  literacyRate: "76.50%",
  elevation: "66m (217ft)",
  district: "Mau",
  state: "Uttar Pradesh",
  languages: ["Hindi", "English", "Bhojpuri"],
  pincode: "275303",
  timeZone: "IST (UTC+05:30)",
  river: "Ghaghara (Saryu)",
};
