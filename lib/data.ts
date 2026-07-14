export interface ImageData {
  id: string;
  url: string;
  alt: string;
  description: string;
  category: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  history?: string;
  timings?: string;
  entryFee?: string;
  location?: { lat: number; lng: number };
  images: string[];
  imageAlt: string;
  nearbyAttractions?: string[];
  tips?: string;
}

export interface EducationalInstitute {
  id: string;
  name: string;
  type: "school" | "college" | "coaching";
  address: string;
  contact?: string;
  board?: string;
  courses?: string[];
  facilities?: string[];
  website?: string;
  images: string[];
  yearEstablished?: number;
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
  },
  {
    id: "historic-ghats",
    icon: "building",
    title: "Historic Ghats & Muktidham",
    description: "Visit the ancient Muktidham temple and ghats",
    image: "/images/mukti_dham2.png",
    imageAlt: "Muktidham Dohrighat",
  },
  {
    id: "shiv-temple",
    icon: "temple",
    title: "Shiv Temple",
    description: "See the sacred Shiv Temple",
    image: "/images/shiv_temple.png",
    imageAlt: "Shiv Temple Dohrighat",
  },
  {
    id: "pump-canal",
    icon: "water",
    title: "Chaudhary Charan Singh Pump Canal",
    description: "Asia's major pump canal, a significant engineering landmark",
    image: "/images/canal_dam.png",
    imageAlt: "Dohrighat Pump Canal",
  },
  {
    id: "education",
    icon: "graduation",
    title: "Education",
    description: "Quality schools and colleges in Dohrighat",
    image: "/images/college_1.png",
    imageAlt: "Education in Dohrighat",
  },
  {
    id: "transport",
    icon: "train",
    title: "Transport",
    description: "Railway and road connectivity to Dohrighat",
    image: "/images/railway_s.png",
    imageAlt: "Transport in Dohrighat",
  },
];

export const temples: Place[] = [
  {
    id: "muktidham",
    name: "Bharat Mata Muktidham",
    description: "A beautiful temple complex and park on the banks of the Ghaghara River, featuring a large Shiva statue, Trimurti statue, and Indian Emblem. It's a popular place for devotees and tourists alike.",
    history: "Muktidham is a modern spiritual and cultural center in Dohrighat, built to honor Bharat Mata (Mother India) and Lord Shiva.",
    timings: "Open all day",
    entryFee: "Free",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/mukti_dham.png", "/images/mukti_dham2.png"],
    imageAlt: "Muktidham Dohrighat",
    nearbyAttractions: ["Ghaghara River Ghats", "Shiv Temple"],
    tips: "Best visited during sunrise or sunset for beautiful views of the river.",
  },
  {
    id: "shiv-temple",
    name: "Shiv Temple",
    description: "A peaceful and sacred temple dedicated to Lord Shiva, known for its spiritual atmosphere and beautiful architecture.",
    history: "An ancient temple dedicated to Lord Shiva, revered by locals for generations.",
    timings: "Morning 6:00 AM - 12:00 PM, Evening 5:00 PM - 9:00 PM",
    entryFee: "Free",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/shiv_temple.png"],
    imageAlt: "Shiv Temple Dohrighat",
    nearbyAttractions: ["Muktidham", "Ghaghara River"],
  },
  {
    id: "durga-maa-temple",
    name: "Durga Maa Temple",
    description: "A temple dedicated to Goddess Durga, known for its vibrant celebrations during Navratri festival.",
    history: "A revered temple celebrating the power of Goddess Durga.",
    timings: "Morning 6:00 AM - 12:00 PM, Evening 5:00 PM - 9:00 PM",
    entryFee: "Free",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/durga_maa_temple.png", "/images/durga_maa.png"],
    imageAlt: "Durga Maa Temple Dohrighat",
    nearbyAttractions: ["Muktidham", "Hanuman Ji Temple"],
    tips: "Visit during Navratri for special celebrations.",
  },
  {
    id: "hanuman-ji-temple",
    name: "Hanuman Ji Temple",
    description: "A temple dedicated to Lord Hanuman, known for its spiritual atmosphere and devotion.",
    history: "A temple honoring Lord Hanuman, symbolizing strength and devotion.",
    timings: "Morning 6:00 AM - 12:00 PM, Evening 5:00 PM - 9:00 PM",
    entryFee: "Free",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/hanuman_ji_temple.png", "/images/hanuman_ji.png"],
    imageAlt: "Hanuman Ji Temple Dohrighat",
    nearbyAttractions: ["Durga Maa Temple", "Muktidham"],
  },
  {
    id: "sai-baba-temple",
    name: "Sai Baba Temple",
    description: "A temple dedicated to Shirdi Sai Baba, a place of devotion, peace, and spiritual solace.",
    history: "A temple built in reverence of Shirdi Sai Baba, a revered saint.",
    timings: "Morning 6:00 AM - 12:00 PM, Evening 5:00 PM - 9:00 PM",
    entryFee: "Free",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/sai_baba_temple.png", "/images/sai_baba.png"],
    imageAlt: "Sai Baba Temple Dohrighat",
    nearbyAttractions: ["Hanuman Ji Temple", "Ghaghara River"],
  },
];

export const canals: Place[] = [
  {
    id: "pump-canal",
    name: "Chaudhary Charan Singh Pump Canal",
    description: "One of Asia's major pump canal systems, a significant engineering landmark in Dohrighat. It plays a crucial role in irrigation for the surrounding agricultural lands.",
    history: "Built to provide water for irrigation to the farmers of Dohrighat and nearby areas, it's a marvel of engineering.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/canal_dam.png", "/images/canals_2.png", "/images/dam_3.png"],
    imageAlt: "Dohrighat Pump Canal",
    nearbyAttractions: ["Ghaghara River", "Muktidham"],
    tips: "Great place for photography and understanding local irrigation systems. Best visited during early morning.",
  },
];

export const riversPools: Place[] = [
  {
    id: "ghaghara-river",
    name: "Ghaghara (Saryu) River",
    description: "The sacred Ghaghara River, also known as Saryu, flows through Dohrighat. It's a major tributary of the Ganges and holds great religious significance.",
    history: "The Ghaghara River has been a lifeline for Dohrighat for centuries, supporting agriculture, spirituality, and daily life.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/river_ghaghara.png", "/images/mukti_dham.png"],
    imageAlt: "Ghaghara River Dohrighat",
    nearbyAttractions: ["Muktidham", "Temples", "Canals"],
    tips: "Take a walk along the ghats during sunrise or sunset for a peaceful experience.",
  },
  {
    id: "doharighat-pool",
    name: "Doharighat Pool",
    description: "A popular pool in Dohrighat, a place for relaxation and recreation.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/doharighat pool.png"],
    imageAlt: "Doharighat Pool",
    nearbyAttractions: ["Local Markets", "Temples"],
  },
];

export const touristPlaces: Place[] = [
  {
    id: "muktidham",
    name: "Bharat Mata Muktidham",
    description: "A beautiful temple complex and park on the banks of the Ghaghara River, featuring a large Shiva statue, Trimurti statue, and Indian Emblem.",
    history: "A modern spiritual and cultural center in Dohrighat.",
    timings: "Open all day",
    entryFee: "Free",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/mukti_dham.png", "/images/mukti_dham2.png"],
    imageAlt: "Muktidham Dohrighat",
    nearbyAttractions: ["Ghaghara River Ghats", "Shiv Temple"],
    tips: "Best visited during sunrise or sunset for beautiful views of the river.",
  },
  {
    id: "shiv-temple",
    name: "Shiv Temple",
    description: "A peaceful and sacred temple dedicated to Lord Shiva.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/shiv_temple.png"],
    imageAlt: "Shiv Temple Dohrighat",
  },
  {
    id: "durga-maa-temple",
    name: "Durga Maa Temple",
    description: "A temple dedicated to Goddess Durga, known for its vibrant celebrations during Navratri.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/durga_maa_temple.png", "/images/durga_maa.png"],
    imageAlt: "Durga Maa Temple Dohrighat",
  },
  {
    id: "hanuman-ji-temple",
    name: "Hanuman Ji Temple",
    description: "A temple dedicated to Lord Hanuman, known for its spiritual atmosphere.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/hanuman_ji_temple.png", "/images/hanuman_ji.png"],
    imageAlt: "Hanuman Ji Temple Dohrighat",
  },
  {
    id: "sai-baba-temple",
    name: "Sai Baba Temple",
    description: "A temple dedicated to Shirdi Sai Baba, a place of devotion and peace.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/sai_baba_temple.png", "/images/sai_baba.png"],
    imageAlt: "Sai Baba Temple Dohrighat",
  },
  {
    id: "pump-canal",
    name: "Chaudhary Charan Singh Pump Canal",
    description: "One of Asia's major pump canal systems, an important engineering landmark in Dohrighat.",
    history: "The canal plays a vital role in irrigation for the surrounding agricultural lands.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/canal_dam.png", "/images/canals_2.png", "/images/dam_3.png"],
    imageAlt: "Dohrighat Pump Canal",
    tips: "Great place for photography and understanding local irrigation systems.",
  },
  {
    id: "ghaghara-river",
    name: "Ghaghara (Saryu) River",
    description: "The sacred Ghaghara River flowing through Dohrighat.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/mukti_dham.png"],
    imageAlt: "Ghaghara River at Muktidham Dohrighat",
  },
  {
    id: "doharighat-pool",
    name: "Doharighat Pool",
    description: "A popular pool in Dohrighat.",
    location: { lat: 26.26, lng: 83.52 },
    images: ["/images/doharighat pool.png"],
    imageAlt: "Doharighat Pool",
  },
];

export const educationalInstitutes: EducationalInstitute[] = [
  {
    id: "school-1",
    name: "Government School 1",
    type: "school",
    address: "Dohrighat, Mau, Uttar Pradesh",
    board: "UPMSP",
    images: ["/images/school_1.png"],
  },
  {
    id: "school-2",
    name: "Government School 2",
    type: "school",
    address: "Dohrighat, Mau, Uttar Pradesh",
    board: "UPMSP",
    images: ["/images/school_2.png"],
  },
  {
    id: "college-1",
    name: "Government Inter College",
    type: "college",
    address: "Dohrighat, Mau, Uttar Pradesh",
    board: "UPMSP",
    images: ["/images/college_1.png"],
  },
  {
    id: "college-2",
    name: "Private Inter College",
    type: "college",
    address: "Dohrighat, Mau, Uttar Pradesh",
    board: "UPMSP",
    images: ["/images/college_2.png"],
  },
  {
    id: "college-3",
    name: "Degree College",
    type: "college",
    address: "Dohrighat, Mau, Uttar Pradesh",
    board: "UPMSP",
    courses: ["BA", "BSc", "BCom"],
    images: ["/images/college_3.png"],
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
  majorCanal: "Chaudhary Charan Singh Pump Canal",
};
