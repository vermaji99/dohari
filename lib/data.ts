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
}

export interface DohrighatPlace {
  id: string;
  name: string;
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
  },
  // Temples
  {
    id: "muktidham-1",
    url: "/images/mukti_dham.png",
    alt: "Muktidham Dohrighat",
    description: "Muktidham Temple and Park located on the banks of the Ghaghara river in Dohrighat",
    category: "temples",
  },
  {
    id: "muktidham-2",
    url: "/images/mukti_dham2.png",
    alt: "Muktidham Dohrighat - Side View",
    description: "Another beautiful view of Muktidham",
    category: "temples",
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
  {
    id: "durga-maa-statue",
    url: "/images/durga_maa.png",
    alt: "Durga Maa Statue",
    description: "Statue of Durga Maa",
    category: "temples",
  },
  {
    id: "hanuman-ji-statue",
    url: "/images/hanuman_ji.png",
    alt: "Hanuman Ji Statue",
    description: "Statue of Hanuman Ji",
    category: "temples",
  },
  {
    id: "sai-baba-statue",
    url: "/images/sai_baba.png",
    alt: "Sai Baba Statue",
    description: "Statue of Sai Baba",
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
  // Rivers & Pools
  {
    id: "ghaghara-river",
    url: "/images/mukti_dham.png",
    alt: "Ghaghara River at Muktidham",
    description: "Ghaghara (Saryu) River at Muktidham Dohrighat",
    category: "rivers",
  },
  {
    id: "doharighat-pool",
    url: "/images/doharighat pool.png",
    alt: "Doharighat Pool",
    description: "Pool in Dohrighat",
    category: "rivers",
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
    category: "other",
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
    id: "muktidham",
    name: "Bharat Mata Muktidham",
    category: "tourist",
    subcategory: "religious",
    description: "A beautiful temple complex and park on the banks of the Ghaghara River, featuring a large Shiva statue, Trimurti statue, and Indian Emblem. It's a popular place for devotees and tourists alike.",
    history: "Muktidham is a modern spiritual and cultural center in Dohrighat, built to honor Bharat Mata (Mother India) and Lord Shiva.",
    latitude: 26.26,
    longitude: 83.52,
    images: ["/images/mukti_dham.png", "/images/mukti_dham2.png"],
    imageAlt: "Muktidham Dohrighat",
    nearbyAttractions: ["Ghaghara River Ghats", "Shiv Temple"],
    tips: "Best visited during sunrise or sunset for beautiful views of the river.",
    verificationStatus: "VERIFIED",
    sourceUrl: "Mau District Administration",
    lastVerified: "2024-07-24",
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
    nearbyAttractions: ["Muktidham", "Temples", "Canals"],
    tips: "Take a walk along the ghats during sunrise or sunset for a peaceful experience.",
    verificationStatus: "VERIFIED",
  },
  {
    id: "ghaghara-riverfront",
    name: "Ghaghara Riverfront",
    category: "rivers",
    subcategory: "ghat",
    description: "Riverfront area along the Ghaghara River in Dohrighat",
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
];

export const temples: DohrighatPlace[] = [
  {
    id: "muktidham",
    name: "Bharat Mata Muktidham",
    category: "temples",
    subcategory: "hindu",
    description: "A beautiful temple complex and park on the banks of the Ghaghara River, featuring a large Shiva statue, Trimurti statue, and Indian Emblem. It's a popular place for devotees and tourists alike.",
    history: "Muktidham is a modern spiritual and cultural center in Dohrighat, built to honor Bharat Mata (Mother India) and Lord Shiva.",
    address: "Mukti Dham Road, East Nagar Panchayat, Dohrighat",
    latitude: 26.26,
    longitude: 83.52,
    images: ["/images/mukti_dham.png", "/images/mukti_dham2.png"],
    imageAlt: "Muktidham Dohrighat",
    nearbyAttractions: ["Ghaghara River Ghats", "Shiv Temple"],
    tips: "Best visited during sunrise or sunset for beautiful views of the river.",
    verificationStatus: "VERIFIED",
    sourceUrl: "Mau District Administration",
    lastVerified: "2024-07-24",
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
    nearbyAttractions: ["Ghaghara River", "Muktidham"],
    tips: "Great place for photography and understanding local irrigation systems. Best visited during early morning.",
    verificationStatus: "PUBLICLY_LISTED",
  },
];

export const educationalInstitutes: EducationalInstitute[] = [
  {
    id: "navals-national-academy",
    name: "Naval's National Academy",
    type: "school",
    description: "A CBSE-affiliated school in Dohrighat.",
    address: "Near Baijnath Petrol Pump, Azamgarh Road, Dohrighat, Mau",
    board: "CBSE",
    affiliationNo: "2134149",
    schoolCode: "72142",
    principal: "Mrs. Sauvari Mukherjee",
    images: ["/images/school_1.png"],
    verificationStatus: "VERIFIED",
  },
  {
    id: "cms-international-school",
    name: "CMS International School",
    type: "school",
    address: "Dohrighat",
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
  {
    id: "victory-inter-college",
    name: "Victory Inter College",
    type: "college",
    address: "Dohrighat, Mau, Uttar Pradesh",
    board: "UPMSP",
    yearEstablished: 1946,
    contact: "9616250965",
    images: ["/images/college_1.png"],
    verificationStatus: "PUBLICLY_LISTED",
  },
];

export const foodSweets: DohrighatPlace[] = [
  {
    id: "madhuraj-sweets",
    name: "Madhuraj Sweets",
    category: "food",
    subcategory: "sweets",
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
  {
    id: "mahaveer-misthan",
    name: "Mahaveer Misthan",
    category: "food",
    subcategory: "sweets",
    address: "Azamgarh–Dohrighat–Gorakhpur Road",
    phone: "9956991676",
    verificationStatus: "PUBLICLY_LISTED",
    rating: 3.4,
    images: [],
  },
  {
    id: "the-viraj-food-zone",
    name: "The Viraj Food Zone",
    category: "food",
    subcategory: "restaurant",
    address: "Near Block, in front of Rudra Medical Store",
    phone: "9616966319",
    rating: 4.5,
    reviewCount: 60,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
  {
    id: "maa-bhojnalay",
    name: "Maa Bhojnalay",
    category: "food",
    subcategory: "restaurant",
    address: "Azamgarh Road, Dohrighat",
    rating: 4.6,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
  {
    id: "gupta-sweet",
    name: "Gupta Sweet",
    category: "food",
    subcategory: "sweets",
    address: "Dohrighat",
    rating: 4.5,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
];

export const jewelleryShops: DohrighatPlace[] = [
  {
    id: "vaibhav-swarn-kala-kendra",
    name: "Vaibhav Swarn Kala Kendra",
    category: "jewellery",
    verificationStatus: "NEEDS_VERIFICATION",
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
    id: "saptrang-saree",
    name: "Saptrang Saree Shop",
    category: "clothing",
    subcategory: "saree",
    address: "Dohrighat",
    verificationStatus: "PUBLICLY_LISTED",
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
    address: "Dohrighat",
    phone: "9415844869",
    rating: 4.9,
    reviewCount: 58,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
  {
    id: "gupta-fine-cloth-center",
    name: "Gupta Fine Cloth Center",
    category: "clothing",
    address: "Mau–Gorakhpur Road, opposite Barhalganj Post Office, Dohrighat",
    phone: "8882951333",
    rating: 4.1,
    reviewCount: 27,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
];

export const utensilsHousehold: DohrighatPlace[] = [
  {
    id: "vaibhav-bartan-store",
    name: "Vaibhav Bartan Store",
    category: "utensils",
    verificationStatus: "NEEDS_VERIFICATION",
    images: [],
  },
];

export const markets: DohrighatPlace[] = [
  {
    id: "barhalganj-dohrighat-bypass-market",
    name: "Barhalganj–Dohrighat Bypass Market Area",
    category: "markets",
    rating: 4.4,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
];

export const healthcare: DohrighatPlace[] = [
  {
    id: "government-hospital-dohrighat",
    name: "Government Hospital, Dohrighat",
    category: "healthcare",
    subcategory: "hospital",
    address: "National Highway 29, Dohrighat",
    rating: 4.2,
    verificationStatus: "PUBLICLY_LISTED",
    images: [],
  },
  {
    id: "maa-shakti-multi-speciality-hospital",
    name: "Maa Shakti Multi-Speciality Hospital",
    category: "healthcare",
    subcategory: "hospital",
    address: "Opposite Parvati Mahila PG College, Dohrighat",
    rating: 5.0,
    verificationStatus: "PUBLICLY_LISTED",
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
