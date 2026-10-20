export interface PortfolioItem {
  id: string;
  title: string;
  category: 'real-estate' | 'healthcare' | 'advertising' | 'branding' | 'packaging' | 'print' | 'social';
  categoryLabel: string;
  client: string;
  year: string;
  location: string;
  description: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  software: string[];
  image: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
  featured?: boolean;
  tags: string[];
  deliverables?: string[];
  palette?: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  sector: string;
  timeline: string;
  heroImage: string;
  summary: string;
  clientGoal: string;
  problem: string;
  designStrategy: string;
  creativeDirection: string;
  deliverables: string[];
  palette: { hex: string; name: string }[];
  typography: { role: string; family: string; sample: string };
  results: { metric: string; label: string }[];
  quote?: { text: string; author: string; role: string };
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  beforeNotes: string[];
  afterNotes: string[];
  beforeImageTag: string;
  afterImageTag: string;
  resultsGained: string;
}

export const DESIGNER_INFO = {
  name: 'Husnain Mehboob',
  title: 'Senior Graphic Designer & Brand Strategist',
  experience: '5+ Years Experience',
  marketFocus: 'UAE & Middle East Market Specialist',
  location: 'Pakistan (Available for UAE / Gulf / Worldwide Remote Engagements)',
  email: 'husnainmehboob189@gmail.com',
  phone: '+92 328 0600557',
  whatsappUrl: 'https://wa.me/923280600557?text=Hi%20Husnain,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20design%20project.',
  linkedin: 'https://linkedin.com/in/husnain-mehboob',
  behance: 'https://behance.net/husnainmehboob',
  portraitImage: '/husnain.png',
  intro: {
    heading: 'HELLO! I am Husnain.',
    lead: 'A passionate graphic designer who turns ideas into visually striking designs with a keen eye for detail and creativity. I specialize in creating modern, engaging visuals that connect with people. I believe every design should tell a story and I\'m here to bring those stories to life.',
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '450+', label: 'Designs Delivered' },
      { value: '40+', label: 'UAE & Gulf Campaigns' },
      { value: '98%', label: 'Client Satisfaction' },
    ]
  }
};

export const SKILLS_DATA = [
  {
    category: 'Design Disciplines',
    items: [
      { name: 'Branding & Visual Identity', level: 95, desc: 'Logo systems, brand guidelines, color palettes, typography hierarchy' },
      { name: 'Social Media Design', level: 98, desc: 'High-converting Instagram, Facebook & LinkedIn carousels, stories & posts' },
      { name: 'Real Estate Marketing Design', level: 96, desc: 'Off-plan launch campaigns, floorplan brochures, luxury investor ads' },
      { name: 'Healthcare & Aesthetic Clinics', level: 94, desc: 'Treatment promotions, Ramadan glow promos, educational medical carousels' },
      { name: 'Digital Advertising & Meta Ads', level: 92, desc: 'High-CTR lead gen creatives, promotional ads, hook-tested static & motion' },
      { name: 'Print Media & Packaging', level: 90, desc: 'Tri-fold brochures, product pouches, bottles, standees, massive billboards' },
    ]
  },
  {
    category: 'Software & Tools',
    items: [
      { name: 'Adobe Photoshop', icon: 'Ps', level: 98, role: 'Photo manipulation, composition, lighting, high-end retouching' },
      { name: 'Adobe Illustrator', icon: 'Ai', level: 96, role: 'Vector logos, brand assets, packaging dielines, typography systems' },
      { name: 'Canva Pro', icon: 'Cv', level: 92, role: 'Rapid campaign scaling, social media templates for client in-house teams' },
      { name: 'Adobe After Effects', icon: 'Ae', level: 85, role: 'Motion graphics, animated logo reveals, dynamic ad reels' },
    ]
  }
];

export const INDUSTRIES = [
  {
    name: 'Real Estate & Properties',
    focus: 'Dubai Marina, Downtown, Palm Jumeirah luxury penthouses, off-plan launches & ROI brochures',
    icon: 'Building2',
    count: '60+ Projects'
  },
  {
    name: 'Healthcare & Aesthetic Clinics',
    focus: 'Dermatology, HydraFacial, Botox/Fillers, Dental Hollywood Smile & Ramadan campaigns',
    icon: 'Sparkles',
    count: '45+ Projects'
  },
  {
    name: 'Restaurants & F&B',
    focus: 'Cuisine brand identities, dine-in menu brochures, takeaway kraft packaging, burger & fries boxes',
    icon: 'UtensilsCrossed',
    count: '35+ Projects'
  },
  {
    name: 'Automotive & Mobility',
    focus: 'High-speed motorbikes, EV hunters, luxury car hire and SUV campaigns',
    icon: 'Car',
    count: '25+ Projects'
  },
  {
    name: 'Education & Universities',
    focus: 'University admissions, campus billboard campaigns, orientation brochures',
    icon: 'GraduationCap',
    count: '18+ Projects'
  },
  {
    name: 'Retail & Consumer Goods',
    focus: 'Nut snack pouches, energy drink cans, chocolate bars, luxury skincare cosmetics',
    icon: 'Package',
    count: '30+ Projects'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-harvest-dine',
    number: '01',
    title: 'Harvest Dine Restaurant & Cuisine',
    subtitle: 'Full Brand Identity, Poppins Typography & Eco Packaging System',
    client: 'Harvest Dine F&B Group',
    sector: 'Restaurant & Hospitality',
    timeline: '3 Weeks Delivery',
    heroImage: '/src/assets/images/restaurant_harvest_dine_1792418951067.jpg',
    summary: 'A complete culinary branding identity uniting farm-to-table freshness with contemporary fast-casual dining, featuring an iconic logo mark, Poppins type hierarchy, warm saffron gold and deep forest green color scheme.',
    clientGoal: 'Establish an appetizing, modern brand personality that appeals to urban dining guests and stands out on delivery aggregators and takeaway packaging.',
    problem: 'The client had great culinary recipes but suffered from fragmented visual collateral with inconsistent logos, generic generic fast-food colors, and no unified packaging presence.',
    designStrategy: 'Constructed an organic emblem uniting a dining cloche dome, fork, and flourishing botanical leaves. Created a cohesive two-color primary scheme of RGB #f9b60e (Harvest Saffron Gold) and #014425 (Forest Emerald Green) with clean white accents.',
    creativeDirection: 'Utilized Poppins typography across all touchpoints for effortless legibility. Extended the brand into kraft burger packaging boxes, french fries cones with QR order codes, and vibrant social media promotions.',
    deliverables: [
      'Primary & secondary logo suite with iconmark',
      'Typography specifications & brand guidelines (Poppins)',
      'RGB Mood palette (#f9b60e gold, #014425 deep green, #ffffff)',
      'Custom takeaway burger & fry kraft box packaging',
      'Social media food launch carousel templates',
      'Dine-in menu & promotional standees'
    ],
    palette: [
      { hex: '#f9b60e', name: 'Harvest Saffron Gold' },
      { hex: '#014425', name: 'Forest Emerald Green' },
      { hex: '#ffffff', name: 'Crisp Studio White' },
    ],
    typography: {
      family: 'Poppins',
      role: 'Headings & Body',
      sample: 'Aa Bb Cc Dd 0123456789 — Modern, clean geometric sans-serif'
    },
    results: [
      { metric: '+85%', label: 'Social Engagement' },
      { metric: '3.2x', label: 'Takeaway Box Recall' },
      { metric: '100%', label: 'Brand Consistency' }
    ],
    quote: {
      text: 'Husnain gave Harvest Dine an instantly recognizable soul. Our packaging and social posts look as premium as our culinary taste.',
      author: 'Operations Director',
      role: 'Harvest Dine Hospitality'
    }
  },
  {
    id: 'case-apex-realestate',
    number: '02',
    title: 'RS Luxury Property — Real Estate Agent & Elite Collection',
    subtitle: 'High-Prestige Agent Branding, Dubai Penthouse Showcase & Meta Lead Engine',
    client: 'RS Luxury Property Dubai',
    sector: 'Luxury Brokerage & Agent Personal Branding',
    timeline: '3 Weeks Delivery',
    heroImage: '/src/assets/images/rs_luxury_property_creative_1792436060758.jpg',
    summary: 'A bespoke visual identity and high-converting advertising campaign for RS Luxury Property (Churchill Tower, Business Bay, Dubai). Blended agent personal branding with panoramic Dubai Canal and Burj Khalifa skyline views under "The Elite Collection".',
    clientGoal: 'Position RS Luxury Property advisors as the premier authority for international high-net-worth investors seeking Golden Visa luxury residences in Business Bay, Downtown, and Palm Jumeirah.',
    problem: 'Generic Dubai property ads often drown in repetitive, low-res renders. Agents need high-status personal branding that builds instant investor trust and stops the social media scroll.',
    designStrategy: 'Crafted an editorial magazine cover aesthetic: positioned the sharp, tailored agent on an ultra-luxury penthouse terrace at twilight, framed by elegant gold RS Luxury Property typography and clear value triggers (The Elite Collection · Your Gateway to Extraordinary Living).',
    creativeDirection: 'Produced high-converting Meta ad carousels, 9:16 story hooks, investor briefing cards, and digital PDF presentations formatted for rapid WhatsApp sharing with GCC investors.',
    deliverables: [
      'RS Luxury Property Agent Feed Creative (1:1)',
      'Instagram & Facebook Story Ad Suite (9:16)',
      'Digital Penthouse Collection Brochure (PDF)',
      'WhatsApp Quick Investor Pitch Deck',
      'Exhibition Roll-Up Banners for Dubai Property Expos'
    ],
    palette: [
      { hex: '#d4af37', name: 'Emirates Imperial Gold' },
      { hex: '#0a0d14', name: 'Twilight Dubai Obsidian' },
      { hex: '#1e293b', name: 'Canal Deep Slate' },
    ],
    typography: {
      family: 'Bricolage Grotesque & Plus Jakarta Sans',
      role: 'Luxury Real Estate Editorial',
      sample: 'THE ELITE COLLECTION · YOUR GATEWAY TO EXTRAORDINARY LIVING'
    },
    results: [
      { metric: '4.2x', label: 'Meta Ad CTR Increase' },
      { metric: '620+', label: 'Qualified Investor Leads' },
      { metric: '-42%', label: 'Cost Per Acquisition' }
    ],
    quote: {
      text: 'Husnain captures the true prestige of Dubai luxury real estate. His agent branding creatives immediately elevated RS Luxury Property in front of international investors.',
      author: 'Managing Broker',
      role: 'RS Luxury Property Dubai'
    }
  },
  {
    id: 'case-dermaluxe-clinic',
    number: '03',
    title: 'DermaLuxe Aesthetics Clinic — Dubai Jumeirah',
    subtitle: 'Ramadan Glow Campaign, Treatment Promos & Social Strategy',
    client: 'DermaLuxe Medical Clinic',
    sector: 'Healthcare & Aesthetic Medicine',
    timeline: '2 Weeks Sprint',
    heroImage: '/src/assets/images/clinic_dubai_aesthetic_1792418950787.jpg',
    summary: 'A sophisticated visual overhaul for a premium Jumeirah aesthetic clinic, driving high-ticket bookings for HydraFacial, Botox/Fillers, and Ramadan rejuvenation packages.',
    clientGoal: 'Fill clinic consultation calendar leading up to Eid with high-value aesthetic treatment packages.',
    problem: 'Healthcare advertising in the UAE is competitive; previous posts looked clinical, sterile, or overly cartoonish, failing to reflect the clinic’s 5-star spa luxury.',
    designStrategy: 'Blended clinical credibility with luxury beauty salon warmth: soft rose-gold accents, crystal-clear typography, serene clinic photography, and compliant educational breakdowns.',
    creativeDirection: 'Designed a 12-post campaign grid including treatment spotlights, doctor credentials, before/after compliance carousels, and seasonal Ramadan moon motifs.',
    deliverables: [
      'Ramadan Glow special offer promotional graphics',
      'HydraFacial & Laser Hair Reduction carousel ads',
      'Doctor credentials & patient trust social proofs',
      'In-clinic digital reception display slides',
      'WhatsApp consultation flyer graphics'
    ],
    palette: [
      { hex: '#e2a39b', name: 'Rose Gold Pearl' },
      { hex: '#0d9488', name: 'Clinical Aqua Teal' },
      { hex: '#fdfbf7', name: 'Warm Cashmere' },
    ],
    typography: {
      family: 'Poppins & Plus Jakarta Sans',
      role: 'Medical Spa Elegance',
      sample: 'GLOW THIS RAMADAN · EXCLUSIVE AESTHETIC CARE'
    },
    results: [
      { metric: '+48%', label: 'Ramadan Bookings' },
      { metric: '1.2M', label: 'UAE Impressions' },
      { metric: '4.9/5', label: 'Patient Feedback' }
    ],
    quote: {
      text: 'Our clinic reception was flooded with inquiries from his Ramadan series. Elegant, trustworthy, and incredibly fast turnaround.',
      author: 'Lead Dermatologist',
      role: 'DermaLuxe Clinic Jumeirah'
    }
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Real Estate (UAE Focus ⭐)
  {
    id: 're-01',
    title: 'RS Luxury Property — Elite Real Estate Agent Campaign',
    category: 'real-estate',
    categoryLabel: 'Real Estate ⭐',
    client: 'RS Luxury Property Dubai',
    year: '2024',
    location: 'Business Bay & Downtown, Dubai',
    description: 'Premier agent personal branding and luxury penthouse collection campaign for RS Luxury Property (Churchill Tower, Business Bay). Features high-converting Meta feed and story creatives pairing elite broker advisory with Dubai Canal and Burj Khalifa skyline views.',
    software: ['Photoshop', 'Illustrator'],
    image: '/src/assets/images/rs_luxury_property_creative_1792436060758.jpg',
    featured: true,
    tags: ['RS Luxury Property', 'Real Estate Agent', 'Dubai Luxury', 'The Elite Collection', 'Meta Ads'],
    deliverables: ['1:1 Agent Feed Creative', '9:16 Instagram Story Hook', 'Luxury Penthouse Flyer', 'WhatsApp Investor Card'],
    palette: ['#d4af37', '#0a0d14', '#1e293b']
  },
  {
    id: 're-02',
    title: 'Palm Jumeirah Signature Villa Campaign',
    category: 'real-estate',
    categoryLabel: 'Real Estate ⭐',
    client: 'Elysian Island Real Estate',
    year: '2024',
    location: 'Dubai, UAE',
    description: 'Campaign creatives highlighting waterfront living, private beach access, and investment security for international buyers.',
    software: ['Photoshop', 'Illustrator'],
    image: '/src/assets/images/realestate_dubai_luxury_1792418948785.jpg',
    tags: ['Waterfront Living', 'Villa Brochure', 'UAE Investment'],
    deliverables: ['Digital Brochure', 'Carousel Ad Set', 'Facebook Lead Ad'],
    palette: ['#0284c7', '#0f172a', '#f8fafc']
  },
  {
    id: 're-03',
    title: 'Dubai Creek Harbour Project Launch',
    category: 'real-estate',
    categoryLabel: 'Real Estate ⭐',
    client: 'Creekview Realty',
    year: '2023',
    location: 'Dubai, UAE',
    description: 'Off-plan launch campaign promoting 1-3 bedroom waterfront apartments with flexible payment plans and Golden Visa qualification.',
    software: ['Photoshop', 'Canva'],
    image: '/src/assets/images/realestate_dubai_luxury_1792418948785.jpg',
    tags: ['Off-Plan Launch', 'Golden Visa', 'ROI Highlights'],
    deliverables: ['Story Teaser', 'Launch Deck', 'Lead Gen Form Banners'],
    palette: ['#e11d48', '#1e293b', '#ffffff']
  },

  // Healthcare & Aesthetics (UAE Focus ⭐)
  {
    id: 'hc-01',
    title: 'DermaLuxe HydraFacial Deep Rejuvenation',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Aesthetics ⭐',
    client: 'DermaLuxe Clinic Dubai',
    year: '2024',
    location: 'Dubai, UAE',
    description: 'Soft medical-spa aesthetic social graphic educating clients on 3-step skin rejuvenation with clear CTA to book consultation.',
    software: ['Photoshop', 'Illustrator'],
    image: '/src/assets/images/clinic_dubai_aesthetic_1792418950787.jpg',
    featured: true,
    tags: ['Clinic Social', 'HydraFacial', 'Dubai Aesthetics', 'Skincare'],
    deliverables: ['Instagram Feed Ad', 'Treatment Menu Card', 'Clinic Slide'],
    palette: ['#e2a39b', '#0d9488', '#ffffff']
  },
  {
    id: 'hc-02',
    title: 'Ramadan Glow Aesthetics Special Offer',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Aesthetics ⭐',
    client: 'Al Noor Medical Aesthetics',
    year: '2024',
    location: 'Abu Dhabi, UAE',
    description: 'Festive Ramadan aesthetic campaign balancing cultural warmth, crescent moon motifs, and dermatological professionalism.',
    software: ['Photoshop', 'Illustrator'],
    image: '/src/assets/images/clinic_dubai_aesthetic_1792418950787.jpg',
    tags: ['Ramadan Campaign', 'Special Offer', 'Laser & Glow'],
    deliverables: ['Meta Feed Creative', 'WhatsApp Promo Card', 'Reception Poster'],
    palette: ['#d4af37', '#134e4a', '#fef3c7']
  },
  {
    id: 'hc-03',
    title: 'Hollywood Smile Dental Aesthetics',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Aesthetics ⭐',
    client: 'Elite Dental Lounge Dubai',
    year: '2023',
    location: 'Dubai, UAE',
    description: 'Clean medical aesthetic graphic spotlighting digital smile design, porcelain veneers, and patient consultation perks.',
    software: ['Photoshop', 'Illustrator'],
    image: '/src/assets/images/clinic_dubai_aesthetic_1792418950787.jpg',
    tags: ['Dental Aesthetics', 'Cosmetic Clinic', 'Veneers Promo'],
    deliverables: ['Consultation Ad', 'Educational Carousel', 'Story Poll'],
    palette: ['#06b6d4', '#0f172a', '#ffffff']
  },

  // Branding & Logo Folio (Directly from PDF Page 2 & Page 11)
  {
    id: 'br-01',
    title: 'Harvest Dine Restaurant & Cuisine',
    category: 'branding',
    categoryLabel: 'Branding & Logo',
    client: 'Harvest Dine Hospitality',
    year: '2024',
    location: 'Global',
    description: 'Visual identity system featuring cloche and leaf emblem, Poppins typography, and signature #f9b60e saffron and #014425 deep green palette.',
    software: ['Illustrator', 'Photoshop'],
    image: '/src/assets/images/restaurant_harvest_dine_1792418951067.jpg',
    featured: true,
    tags: ['Restaurant Branding', 'Logo Folio', 'Poppins Type', 'Color Mood'],
    deliverables: ['Logo Suite', 'Style Guide', 'Packaging Identity', 'Social Templates'],
    palette: ['#f9b60e', '#014425', '#ffffff']
  },
  {
    id: 'br-02',
    title: 'Bold Fold — Fashion & Apparel',
    category: 'branding',
    categoryLabel: 'Branding & Logo',
    client: 'Bold Fold Brand',
    year: '2023',
    location: 'International',
    description: 'Minimalist monogram logo design exploring negative space and ribbon curves for a modern contemporary fashion label.',
    software: ['Illustrator'],
    image: '/src/assets/images/restaurant_harvest_dine_1792418951067.jpg',
    tags: ['Monogram Logo', 'Fashion Brand', 'Minimalist'],
    deliverables: ['Vector Mark', 'Apparel Tag Mockup', 'Stationery'],
    palette: ['#d946ef', '#18181b', '#ffffff']
  },
  {
    id: 'br-03',
    title: 'iTech — Digital Solutions',
    category: 'branding',
    categoryLabel: 'Branding & Logo',
    client: 'iTech Enterprise',
    year: '2023',
    location: 'UAE / Remote',
    description: 'Modern tech wordmark integrating digital circuitry dots with clean geometric sans typography.',
    software: ['Illustrator'],
    image: '/src/assets/images/restaurant_harvest_dine_1792418951067.jpg',
    tags: ['Tech Identity', 'Geometric Mark', 'Enterprise'],
    deliverables: ['Brand Guidelines', 'Business Card', 'App Icon'],
    palette: ['#0284c7', '#0f172a', '#38bdf8']
  },
  {
    id: 'br-04',
    title: 'Datora — AI Dating Coach',
    category: 'branding',
    categoryLabel: 'Branding & Logo',
    client: 'Datora Mobile App',
    year: '2023',
    location: 'USA / Remote',
    description: 'Heart and swan geometric curves forming an elegant romantic emblem for an AI dating coach platform.',
    software: ['Illustrator'],
    image: '/src/assets/images/restaurant_harvest_dine_1792418951067.jpg',
    tags: ['App Logo', 'Romantic Emblem', 'Vector Art'],
    deliverables: ['App Store Icon', 'Brand Colors', 'Vector Assets'],
    palette: ['#10b981', '#1e293b', '#f8fafc']
  },

  // Packaging Design (From PDF Page 5)
  {
    id: 'pk-01',
    title: 'NatureCrunch — Roasted Nutty Blend',
    category: 'packaging',
    categoryLabel: 'Packaging Design',
    client: 'NatureCrunch Foods',
    year: '2024',
    location: 'Retail Market',
    description: 'Kraft pouch packaging featuring transparent window cutouts, artisanal woodcut illustrations, and roasted nut flavor badges.',
    software: ['Illustrator', 'Photoshop'],
    image: '/src/assets/images/packaging_naturecrunch_1792418950550.jpg',
    featured: true,
    tags: ['Pouch Packaging', 'Organic Snacks', 'Label Design', 'Dieline'],
    deliverables: ['Stand-up Pouch Dieline', 'Nutritional Label', '3D Retail Mockup'],
    palette: ['#b45309', '#15803d', '#fef3c7']
  },
  {
    id: 'pk-02',
    title: 'Pure Chill Energy Drink Blend',
    category: 'packaging',
    categoryLabel: 'Packaging Design',
    client: 'Pure Chill Beverages',
    year: '2023',
    location: 'UAE / GCC',
    description: 'Bold red aluminium can wrap with high-impact metallic typography, energy rush gradients, and nutrition facts.',
    software: ['Illustrator', 'Photoshop'],
    image: '/src/assets/images/packaging_naturecrunch_1792418950550.jpg',
    tags: ['Can Packaging', 'Energy Drink', 'Beverage Label'],
    deliverables: ['250ml Can Mockup', '360 Wrap Dieline', 'Retail Promo'],
    palette: ['#ef4444', '#dc2626', '#ffffff']
  },
  {
    id: 'pk-03',
    title: 'Habanero Verde Hot Sauce',
    category: 'packaging',
    categoryLabel: 'Packaging Design',
    client: 'El Fuego Sauces',
    year: '2023',
    location: 'International',
    description: 'Hand-crafted vintage glass bottle label with sugar skull motif, fire-roasted pepper textures, and rustic typography.',
    software: ['Illustrator', 'Photoshop'],
    image: '/src/assets/images/packaging_naturecrunch_1792418950550.jpg',
    tags: ['Jar Label', 'Hot Sauce', 'Vintage Aesthetic'],
    deliverables: ['Bottle Front & Back Label', 'Cap Seal Sticker', 'Mockup'],
    palette: ['#65a30d', '#1e293b', '#eab308']
  },

  // Print Media, Brochures & Billboards (From PDF Page 4, 9, 15)
  {
    id: 'pr-01',
    title: 'AIU Nigerian University Mega Billboard',
    category: 'print',
    categoryLabel: 'Print & Billboards',
    client: 'American International University',
    year: '2024',
    location: 'Nigeria / Global Edu',
    description: 'Huge outdoor roadside billboard design: "Shape Your Future, Be Part of Excellence" with vivid student photography and crisp highway legibility.',
    software: ['Photoshop', 'Illustrator'],
    image: '/src/assets/images/realestate_dubai_luxury_1792418948785.jpg',
    tags: ['Outdoor Billboard', 'Education', 'Highway Banner', 'High-Res Print'],
    deliverables: ['Billboard Print File', 'Outdoor Mockup', 'Social Cutdowns'],
    palette: ['#16a34a', '#1e3a8a', '#fbbf24']
  },
  {
    id: 'pr-02',
    title: 'Dessert Cake Sweet Time Tri-Fold Brochure',
    category: 'print',
    categoryLabel: 'Print & Billboards',
    client: 'Sweet Time Bakery',
    year: '2023',
    location: 'Retail Bakery',
    description: 'Appetizing 6-panel tri-fold brochure layout with dessert menu pricing, discount vouchers, and photography grids.',
    software: ['InDesign', 'Photoshop'],
    image: '/src/assets/images/restaurant_harvest_dine_1792418951067.jpg',
    tags: ['Tri-Fold Brochure', 'Bakery Menu', 'Print Media'],
    deliverables: ['A4 Tri-fold Dieline', 'CMYK Print Ready', 'Digital PDF'],
    palette: ['#ea580c', '#78350f', '#fffbeb']
  },
  {
    id: 'pr-03',
    title: 'Exclusive Sports Shoes Standee Roll-Up',
    category: 'print',
    categoryLabel: 'Print & Billboards',
    client: 'Apex Athletic Store',
    year: '2023',
    location: 'Retail Exhibition',
    description: 'Dynamic 2-meter tall exhibition roll-up banner featuring high-contrast lightning energy, discount offer, and promo code callouts.',
    software: ['Photoshop', 'Illustrator'],
    image: '/src/assets/images/packaging_naturecrunch_1792418950550.jpg',
    tags: ['Roll-Up Standee', 'Exhibition Banner', 'Retail Promotion'],
    deliverables: ['85x200cm Print File', 'Showroom Mockup', 'Offer Stickers'],
    palette: ['#eab308', '#09090b', '#ffffff']
  },

  // Social Media & Advertising (From PDF Page 8, 14, 16)
  {
    id: 'sm-01',
    title: 'Hi-Speed Motorcycle & EV Hunter Campaign',
    category: 'advertising',
    categoryLabel: 'Advertising & Campaigns',
    client: 'Hi-Speed UK & Motors',
    year: '2024',
    location: 'UK / Pakistan',
    description: 'Multi-post campaign for "Ride Beyond Limits" and "Command the Road", creating masculine, fast-paced vehicle social ads.',
    software: ['Photoshop'],
    image: '/src/assets/images/realestate_dubai_luxury_1792418948785.jpg',
    tags: ['Automotive Ads', 'Meta Campaigns', 'Social Graphics'],
    deliverables: ['10x Social Grid', 'Facebook Ads', 'Story Promos'],
    palette: ['#dc2626', '#090a0f', '#f43f5e']
  },
  {
    id: 'sm-02',
    title: 'Luxury Super Car Rental Social Campaign',
    category: 'advertising',
    categoryLabel: 'Advertising & Campaigns',
    client: 'Prestige Car Rental Dubai',
    year: '2024',
    location: 'Dubai, UAE',
    description: 'High-contrast automotive rental campaign highlighting sports cars, Lamborghini/Audi R8 bookings, and weekend VIP packages.',
    software: ['Photoshop'],
    image: '/src/assets/images/realestate_dubai_luxury_1792418948785.jpg',
    tags: ['Luxury Cars', 'Dubai Lifestyle', 'Lead Gen Ads'],
    deliverables: ['Meta Ad Series', 'Instagram Stories', 'Carousel'],
    palette: ['#e11d48', '#18181b', '#ffffff']
  },
  {
    id: 'sm-03',
    title: 'Artisanal Burger & Sizzling Steak Social Series',
    category: 'social',
    categoryLabel: 'Social Media Posts',
    client: 'Mirchi 360 Restaurant',
    year: '2023',
    location: 'F&B Sector',
    description: 'Mouth-watering restaurant social posts featuring flaming burgers, spicy tandoori chicken, and 50% discount weekend specials.',
    software: ['Photoshop'],
    image: '/src/assets/images/restaurant_harvest_dine_1792418951067.jpg',
    tags: ['Food Social Media', 'Engagement Posts', 'Discount Creative'],
    deliverables: ['Daily Instagram Posts', 'Facebook Ads', 'Story Polls'],
    palette: ['#f97316', '#b91c1c', '#ffffff']
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-01',
    title: 'Dubai Luxury Real Estate Ad Transformation',
    category: 'Real Estate Marketing',
    industry: 'UAE Property Developers',
    description: 'Transformed a cluttered, text-heavy off-plan property flyer with 5 conflicting fonts and washed-out renders into an ultra-premium, high-converting luxury ad.',
    beforeNotes: [
      'Cluttered layout with 6 different font sizes and drop-shadows',
      'Unbalanced amateur photo without architectural color correction',
      'Tiny illegible pricing and vague "Call Now" without clear value',
      'Low social engagement and high bounce rate on paid ads'
    ],
    afterNotes: [
      'Refined editorial typography with clear visual hierarchy',
      'Sunset color grading and architectural contrast enhancement',
      'Clear high-intent triggers: Golden Visa Eligible & 8.4% ROI',
      'Optimized 1:1 and 9:16 aspect ratios engineered for Meta feed'
    ],
    beforeImageTag: 'Standard Broker Flyer',
    afterImageTag: 'Husnain Premium Editorial Creative',
    resultsGained: '+340% Click-Through Rate & 38% Reduction in Cost Per Lead'
  },
  {
    id: 'ba-02',
    title: 'Aesthetic Clinic Ramadan Rejuvenation Promo',
    category: 'Healthcare & Aesthetics',
    industry: 'Dubai Dermatology & Spa',
    description: 'Elevated a generic medical stock flyer into a serene, five-star luxury wellness aesthetic with soft rose-gold hues and clear doctor credibility.',
    beforeNotes: [
      'Sterile hospital blue tone with harsh lighting and medical needles',
      'Crowded bullet points overwhelming the prospective patient',
      'No cultural harmony with Ramadan evening consultation habits',
      'Felt like a cold procedure rather than a rejuvenating luxury treat'
    ],
    afterNotes: [
      'Warm cashmere and soothing rose-gold palette with gentle glow',
      'Focus on radiant results and gentle 3-step non-invasive benefits',
      'Culturally resonant Ramadan crescent motifs with VIP booking hours',
      'Instant WhatsApp booking button with verified doctor credentials'
    ],
    beforeImageTag: 'Sterile Clinic Stock Flyer',
    afterImageTag: 'Husnain Luxury Clinic Aesthetic Promo',
    resultsGained: '+48% Ramadan Consultation Bookings in First 10 Days'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Husnain transformed our agency and agent personal branding. The creative quality directly positioned RS Luxury Property at the pinnacle of Dubai's elite property market, driving real investor inquiries.",
    author: "Raza Shah",
    role: "Managing Broker & Founder",
    company: "RS Luxury Property (Churchill Tower, Business Bay, Dubai)"
  },
  {
    quote: "Finding a designer who understands clinical aesthetics without making it look sterile is rare. Husnain's work on our clinic social media doubled our consultation leads.",
    author: "Dr. Sarah Jansen",
    role: "Medical Director",
    company: "Lumière Aesthetics, Jumeirah Dubai"
  },
  {
    quote: "From our Harvest Dine restaurant logo to custom burger boxes and social campaigns, Husnain delivered flawless work with speed and exceptional creative taste.",
    author: "Farhan Malik",
    role: "Co-Founder & CEO",
    company: "Harvest Dine Cuisine Group"
  }
];
