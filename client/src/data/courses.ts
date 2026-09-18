// src/data/courses.ts

export interface CourseModule {
  title: string;
  duration: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'Technology' | 'Business' | 'Local Enterprise' | 'Freelancing' | 'Skilled Trades' | 'Soft Skills';
  description: string;
  longDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: 'Hindi & English' | 'Hindi' | 'Santali & Hindi' | 'Ho & Hindi' | 'Mundari & Hindi' | 'English';
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  instructor: {
    name: string;
    title: string;
    organization: string;
  };
  gradient: string;
  accentColor: string;
  lessonsCount: number;
  isFeatured: boolean;
  isLocalSpecialty: boolean;
  districtRelevance: string[];
  skillsGained: string[];
  modules: CourseModule[];
  prerequisites: string[];
  careerOutcome: string;
}

export const COURSES_DATA: Course[] = [
  // Local Enterprise & Indigenous Value Chains
  {
    id: 'lac-cultivation-value-addition',
    title: 'Scientific Lac Cultivation & Value Addition',
    category: 'Local Enterprise',
    description: 'Master modern Kusmi and Rangeeni lac harvesting, host-tree pruning, and high-value shellac processing for global markets.',
    longDescription: 'Jharkhand produces over 55% of India’s lac. This comprehensive program, curated in partnership with ICAR-IINRG Namkum, teaches host tree management (Ber, Kusum, Semialata), scientific pest protection, broodbac inoculation, and rural processing into button lac and refined shellac for cosmetics and pharmaceuticals.',
    duration: '5 Weeks (20 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 382,
    studentsCount: 2420,
    instructor: {
      name: 'Dr. Anand Munda',
      title: 'Senior Forest Produce Agronomist',
      organization: 'ICAR Namkum & TRIFED Jharkhand'
    },
    gradient: 'from-amber-800/80 via-terracotta to-amber-900',
    accentColor: '#C65A38',
    lessonsCount: 16,
    isFeatured: true,
    isLocalSpecialty: true,
    districtRelevance: ['Khunti', 'Ranchi', 'Simdega', 'Latehar'],
    skillsGained: ['Host Tree Pruning', 'Broodlac Inoculation', 'Pest Management', 'Shellac Processing', 'Direct FPO Marketing'],
    modules: [
      { title: 'Foundations of Natural Resins & Lac Insects', duration: '4h', lessons: ['Biology of Kerria lacca', 'Kusmi vs Rangeeni cycle', 'Climate & host trees'] },
      { title: 'Field Operations & Scientific Inoculation', duration: '6h', lessons: ['Tree canopy preparation', 'Broodlac bundle tying', 'Monitoring & predator protection'] },
      { title: 'Harvesting, Scraping & Primary Washing', duration: '5h', lessons: ['Optimal harvesting windows', 'Mechanical scraping vs manual', 'Seedlac washing techniques'] },
      { title: 'Value Addition, Packaging & Global Export Standards', duration: '5h', lessons: ['Button lac manufacturing', 'Grading protocols for pharmaceutical shellac', 'Farmer Producer Organization (FPO) collective bargaining'] }
    ],
    prerequisites: ['Basic interest in rural enterprise', 'No prior chemistry degree required'],
    careerOutcome: 'Certified Lac Enterprise Specialist, FPO Production Lead, Organic Resin Exporter'
  },
  {
    id: 'tasar-silk-sericulture',
    title: 'Tasar Silk Rearing, Reeling & Modern Weaving',
    category: 'Local Enterprise',
    description: 'End-to-end wild silk production: Asan/Arjun silkworm maintenance, cocoon sorting, machine reeling, and boutique apparel design.',
    longDescription: 'Jharkhand is the Tasar Silk capital of India. Explore how rural youth can transform raw cocoon production into finished artisanal stoles, yardage, and contemporary sustainable fashion directly supplied to luxury export houses.',
    duration: '6 Weeks (28 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.8,
    reviewsCount: 290,
    studentsCount: 1840,
    instructor: {
      name: 'Pooja Tudu & Team',
      title: 'Master Sericulturist & Textile Designer',
      organization: 'Jharkhand Silk Board (JHARCRAFT)'
    },
    gradient: 'from-amber-600 via-amber-700 to-amber-900',
    accentColor: '#CFA145',
    lessonsCount: 20,
    isFeatured: true,
    isLocalSpecialty: true,
    districtRelevance: ['West Singhbhum', 'Saraikela', 'Dumka', 'Godda'],
    skillsGained: ['Silkworm Care', 'Cocoon Boiling Protocols', 'Motorized Reeling', 'Natural Vegetable Dyeing', 'E-commerce Listing'],
    modules: [
      { title: 'Wild Silk Ecosystem & Grainage Setup', duration: '6h', lessons: ['Antheraea mylitta life cycle', 'Disease-free layings (DFLs)', 'Outdoor tree rearing'] },
      { title: 'Cocoon Harvesting, Grading & Storage', duration: '6h', lessons: ['A, B, C grade sorting', 'Safe stifling methods', 'Preventing storage fungus'] },
      { title: 'Modern Wet Reeling & Spinning Technologies', duration: '8h', lessons: ['Solar powered reeling machines', 'Yarn twisting & count measurement', 'Waste silk processing (Kattya)'] },
      { title: 'Weaving & Direct-to-Consumer Branding', duration: '8h', lessons: ['Handloom warp/weft dynamics', 'Eco-friendly natural mordanting', 'Selling on Amazon Karigar & ONDC'] }
    ],
    prerequisites: ['Basic literacy in Hindi or English'],
    careerOutcome: 'Sericulture Operations Manager, Textile Artisan Lead, Sustainable Silk Brand Founder'
  },
  {
    id: 'bamboo-product-design-enterprise',
    title: 'Modern Bamboo Craft & Architectural Furniture',
    category: 'Local Enterprise',
    description: 'Transform abundant regional bamboo into contemporary minimalist furniture, lighting fixtures, and eco-packaging.',
    longDescription: 'Move beyond traditional basketry to high-margin modern lifestyle products: bent-bamboo lounge chairs, Scandinavian-style lampshades, and sustainable food boxes demanded by urban cafes and interior designers across India.',
    duration: '4 Weeks (18 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.7,
    reviewsCount: 215,
    studentsCount: 1390,
    instructor: {
      name: 'Rameshwar Oraon',
      title: 'Craft Innovator & Product Designer',
      organization: 'National Institute of Design & TRIFED'
    },
    gradient: 'from-forest via-emerald-800 to-forest-dark',
    accentColor: '#1B3B2B',
    lessonsCount: 14,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['Simdega', 'Latehar', 'Gumla', 'Khunti'],
    skillsGained: ['Boron Chemical Treatment', 'Steam Bending Technique', 'CAD-Assisted Joinery', 'Clear Coat Finishing', 'B2B Wholesale Pitching'],
    modules: [
      { title: 'Species Selection & Seasoning Science', duration: '4h', lessons: ['Dendrocalamus strictus properties', 'Borer prevention treatments', 'Solar kiln drying'] },
      { title: 'Precision Cutting, Splitting & Bending', duration: '5h', lessons: ['Power tool operations', 'Heat and steam bending fixtures', 'Mortise and tenon bamboo joinery'] },
      { title: 'Contemporary Product Prototyping', duration: '5h', lessons: ['Minimalist pendant lamps', 'Ergonomic study desks', 'Flat-pack design principles'] },
      { title: 'Finishing & Retail Packaging', duration: '4h', lessons: ['Water-based PU sealants', 'Branding stamps & barcodes', 'B2B supply chain contracts'] }
    ],
    prerequisites: ['Basic hand-eye coordination and eagerness to craft'],
    careerOutcome: 'Modern Bamboo Furniture Maker, Sustainable Product Entrepreneur'
  },
  {
    id: 'sohrai-khovar-art-merchandising',
    title: 'Sohrai & Khovar Traditional Art Digital Merchandising',
    category: 'Local Enterprise',
    description: 'Digitize Jharkhand’s GI-tagged indigenous wall art into prints, vector graphics, murals, and lifestyle merchandise.',
    longDescription: 'Preserve and monetize sacred indigenous art forms. Learn to scan, vectorize, and license traditional Sohrai animal motifs and Khovar comb-cut geometry for wall papers, corporate murals, high-end textile prints, and design assets.',
    duration: '4 Weeks (16 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 178,
    studentsCount: 960,
    instructor: {
      name: 'Malati Murmu & Sunita Devi',
      title: 'GI-Registered Sohrai Master Artists',
      organization: 'Hazaribagh Indigenous Arts Collective'
    },
    gradient: 'from-terracotta via-amber-700 to-terracotta-dark',
    accentColor: '#C65A38',
    lessonsCount: 12,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['Hazaribagh', 'Ranchi', 'East Singhbhum', 'Bokaro'],
    skillsGained: ['Natural Clay Pigment Preparation', 'Traditional Stylus & Finger Techniques', 'High-Res Digital Scanning', 'Vector Pattern Creation in Illustrator', 'GI Tag Trademark Protection'],
    modules: [
      { title: 'Cultural Roots & Natural Ochre Pigments', duration: '4h', lessons: ['Dudhi matti & red geru chemistry', 'Sacred harvest symbolism', 'Surface plastering methods'] },
      { title: 'Design Grammar: Lines, Animals & Flora', duration: '4h', lessons: ['Bull, peacock and tree motifs', 'Khovar comb cut incisions', 'Composition balance'] },
      { title: 'Digital Capture & Vectorization', duration: '4h', lessons: ['Smartphone lighting rigs', 'Image trace in Illustrator / Vectorize', 'Seamless repeating pattern tiles'] },
      { title: 'Commercial Licensing & Gallery Representation', duration: '4h', lessons: ['Art licensing contracts', 'Print-on-Demand setups', 'Hotel and airport mural commissions'] }
    ],
    prerequisites: ['Curiosity for visual design and cultural preservation'],
    careerOutcome: 'Indigenous Visual Artist, Pattern Designer, Cultural Muralist'
  },
  {
    id: 'millet-organic-food-business',
    title: 'Millet Processing & Superfood Food Tech',
    category: 'Local Enterprise',
    description: 'Build a packaged food brand around Ragi (Marua), Gundli, and Kodo millets grown natively across Chotanagpur.',
    longDescription: 'Capitalize on the global millet resurgence. Learn low-cost destoning, dehusking, cold-milling into nutritious flours, baking gluten-free snacks, FSSAI licensing, and eco-friendly pouch packaging.',
    duration: '4 Weeks (18 Hours)',
    level: 'Beginner',
    language: 'Hindi',
    rating: 4.8,
    reviewsCount: 154,
    studentsCount: 1120,
    instructor: {
      name: 'Sushil Kerketta',
      title: 'Agri-Food Entrepreneur',
      organization: 'Jharkhand State Livelihood Promotion Society (JSLPS)'
    },
    gradient: 'from-amber-700 via-amber-800 to-amber-950',
    accentColor: '#CFA145',
    lessonsCount: 15,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['Gumla', 'Khunti', 'Ranchi', 'Palamu'],
    skillsGained: ['Small-scale Dehuller Operation', 'Formulation of Ragi Snacks', 'FSSAI Basic Registration', 'Nutritional Fact Calculation', 'Rural Hyper-Local Distribution'],
    modules: [
      { title: 'Millet Crop Ecology & Nutrient Profiles', duration: '4h', lessons: ['Finger millet, Little millet & Foxtail', 'Low glycemic indexing', 'Post-harvest grain handling'] },
      { title: 'Processing Equipment & Hygiene Protocols', duration: '5h', lessons: ['Destoner and aspirator setup', 'Flour milling vs ready-to-cook flakes', 'Good Manufacturing Practices (GMP)'] },
      { title: 'Product Value Addition & Recipes', duration: '5h', lessons: ['Ragi cookies & malt drinks', 'Instant khichdi dry mixes', 'Shelf-life testing without preservatives'] },
      { title: 'Branding, Compliance & Direct Sales', duration: '4h', lessons: ['FSSAI labeling laws', 'Packaging design on Canva', 'Supplying local gymnasiums & retail stores'] }
    ],
    prerequisites: ['Basic reading ability'],
    careerOutcome: 'Agri-Food Enterprise Owner, Healthy Snack Brand Operator'
  },
  {
    id: 'minor-forest-produce-value-chain',
    title: 'Minor Forest Produce (MFP) Harvesting & Processing',
    category: 'Local Enterprise',
    description: 'Commercial collection, grading, and organic extract processing of Mahua flowers, Sal seeds, Haritaki, and Chironji.',
    longDescription: 'Eliminate middlemen exploitation. Learn MSP (Minimum Support Price) guidelines under Van Dhan Vikas Kendras (VDVK), scientific solar dehydration, honey processing, cold-pressed oil extraction, and bulk supply to Ayurvedic enterprises.',
    duration: '5 Weeks (22 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 310,
    studentsCount: 2200,
    instructor: {
      name: 'Dr. Nirmal Bedia',
      title: 'Ethnobotanist & Forest Enterprise Advisor',
      organization: 'Van Dhan Vikas Mission'
    },
    gradient: 'from-forest-dark via-forest to-emerald-900',
    accentColor: '#1B3B2B',
    lessonsCount: 18,
    isFeatured: true,
    isLocalSpecialty: true,
    districtRelevance: ['Latehar', 'West Singhbhum', 'Dumka', 'Pakur', 'Palamu'],
    skillsGained: ['Non-Destructive Harvesting', 'Solar Tray Dehydration', 'Cold-Press Oil Expeller Use', 'Van Dhan Portal Management', 'FPO Bulk Contracting'],
    modules: [
      { title: 'Forest Ecology & Seasonal Calendars', duration: '5h', lessons: ['Mahua blossom cycles', 'Sal seed seed-coat removal', 'Chironji decortication methods'] },
      { title: 'Quality Grading & Moisture Testing', duration: '5h', lessons: ['Moisture meters and standard indices', 'Toxin and fungus prevention', 'Warehouse moisture control'] },
      { title: 'Primary Processing Tech', duration: '6h', lessons: ['Solar tunnel dryers', 'Mini cold-press expellers for Karanj and Sal', 'Purifying wild forest honey'] },
      { title: 'Van Dhan Vikas Kendras & Market Access', duration: '6h', lessons: ['Institutional procurement mechanisms', 'Packaging for herbal brands (Patanjali, Dabur, Khadi)', 'Collective pricing'] }
    ],
    prerequisites: ['Residence or work in rural/forest fringe areas'],
    careerOutcome: 'VDVK Operations Supervisor, Natural Products Exporter'
  },
  {
    id: 'dokra-bell-metal-enterprise',
    title: 'Dokra Bell Metal Lost-Wax Casting & Modern Decor',
    category: 'Local Enterprise',
    description: 'Learn ancient lost-wax metal sculpting combined with contemporary home accents, brassware, and online craft retail.',
    longDescription: 'Dokra casting is a 4,000-year-old tribal non-ferrous metal casting craft. This course shows how youth can take traditional clay core modeling, beeswax threading, furnace melting, and produce bespoke architectural hardware, door handles, and luxury art pieces.',
    duration: '6 Weeks (24 Hours)',
    level: 'Intermediate',
    language: 'Hindi',
    rating: 4.8,
    reviewsCount: 140,
    studentsCount: 780,
    instructor: {
      name: 'Ramu Karmakar',
      title: 'National Award-Winning Dokra Sculptor',
      organization: 'Tribal Artisans Federation'
    },
    gradient: 'from-amber-700 via-amber-600 to-terracotta',
    accentColor: '#CFA145',
    lessonsCount: 16,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['East Singhbhum', 'Ramgarh', 'Dumka'],
    skillsGained: ['Clay-Dung Core Preparation', 'Beeswax Ribbon Extrusion', 'Mud Mould Crucible Firing', 'Scrap Brass Melting', 'Oxidized Antique Patina'],
    modules: [
      { title: 'Foundry Chemistry & Core Moulding', duration: '6h', lessons: ['Ant-hill clay and paddy chaff ratios', 'Core armatures for strength', 'Baking initial core'] },
      { title: 'Wax Filigree & Detail Application', duration: '6h', lessons: ['Hand wax rollers', 'Filigree tribal jewelry motifs', 'Sprues and vents alignment'] },
      { title: 'Furnace Firing & Molten Pour', duration: '6h', lessons: ['Briquette and charcoal furnaces', 'Brass scrap sorting and fluxing', 'Break-out techniques'] },
      { title: 'Polishing, Patinas & Architectural Sales', duration: '6h', lessons: ['Chemical patinas (green verdigris & antique bronze)', 'Pricing for architects and hotel designers', 'Etsy and global courier packaging'] }
    ],
    prerequisites: ['Willingness to work with traditional furnaces and clay'],
    careerOutcome: 'Dokra Metal Art Studio Owner, Architectural Decor Supplier'
  },
  {
    id: 'community-ecotourism-homestays',
    title: 'Community-Based Ecotourism & Homestay Management',
    category: 'Local Enterprise',
    description: 'Transform ancestral rural homes near waterfalls, forests, and cultural hubs into profitable sustainable eco-homestays.',
    longDescription: 'From Betla National Park and Netarhat to Hundru and Jonha Falls, Jharkhand has breathtaking natural landscapes. Learn hospitality standards, safety protocols, local culinary experiences, Airbnb/MakeMyTrip listings, and guided village trekking tours.',
    duration: '4 Weeks (16 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 205,
    studentsCount: 1450,
    instructor: {
      name: 'Anita Soren',
      title: 'Pioneer of Chotanagpur Eco-Trails',
      organization: 'Jharkhand Tourism Development Corp (JTDC)'
    },
    gradient: 'from-emerald-800 via-forest to-forest-dark',
    accentColor: '#1B3B2B',
    lessonsCount: 14,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['Latehar', 'Ranchi', 'Khunti', 'West Singhbhum', 'Deoghar'],
    skillsGained: ['Homestay Sanitation Standards', 'Online Travel Agency (OTA) Listing', 'Indigenous Food Curation', 'Guest Safety & First Aid', 'Instagram Travel Marketing'],
    modules: [
      { title: 'Site Feasibility & Traditional Architecture Upgrades', duration: '4h', lessons: ['Eco-friendly modern washroom retrofitting', 'Mud and thatch aesthetics preservation', 'Solar power and water purification'] },
      { title: 'Guest Experience & Food Curation', duration: '4h', lessons: ['Traditional millet, bamboo shoot & desi chicken meals', 'Storytelling around bonfires', 'Cultural etiquette guidance'] },
      { title: 'Digital Bookings, Pricing & Google Maps Setup', duration: '4h', lessons: ['Google Business Profile optimization', 'Airbnb, MakeMyTrip & Agoda partner signup', 'Dynamic seasonal tariff strategies'] },
      { title: 'Safety, Legal Formalities & Community Sharing', duration: '4h', lessons: ['Police guest verification forms (Form C)', 'Basic medical first aid and emergency plans', 'Creating local guide and vehicle cooperatives'] }
    ],
    prerequisites: ['Home or land situated within 15km of scenic/cultural spots'],
    careerOutcome: 'Eco-Homestay Operator, Nature Tour Guide Lead'
  },

  // Technology & Digital Foundations
  {
    id: 'python-for-beginners',
    title: 'Python Programming from Scratch',
    category: 'Technology',
    description: 'Build practical programming fundamentals, write automation scripts, analyze data with Pandas, and build your first web app.',
    longDescription: 'A practical, zero-fluff introduction to Python designed for first-generation tech learners. Starting from basic syntax and problem-solving, you will build real-world scripts for automation, data processing, and simple web backends.',
    duration: '8 Weeks (32 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 620,
    studentsCount: 4890,
    instructor: {
      name: 'Rohan Gupta',
      title: 'Software Architect & Tech Educator',
      organization: 'TechJharkhand Community'
    },
    gradient: 'from-blue-900 via-indigo-900 to-slate-900',
    accentColor: '#3B82F6',
    lessonsCount: 24,
    isFeatured: true,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Bokaro'],
    skillsGained: ['Python 3 Syntax', 'Control Structures & Loops', 'Object-Oriented Programming', 'Data Handling with Pandas', 'Building CLI Tools'],
    modules: [
      { title: 'Logic & Python Basics', duration: '8h', lessons: ['Variables, numbers, strings', 'Conditionals and logic', 'Lists, tuples and dictionaries'] },
      { title: 'Functions & Modular Code', duration: '8h', lessons: ['Defining reusable functions', 'Reading and writing CSV/JSON files', 'Handling runtime errors gracefully'] },
      { title: 'Practical Scripting & Automation', duration: '8h', lessons: ['Automating Excel workflows', 'Web scraping basics with BeautifulSoup', 'Sending automated email notifications'] },
      { title: 'Capstone Project & GitHub Portfolio', duration: '8h', lessons: ['Building a Student Record CLI system', 'Writing clean README documentation', 'Hosting code on GitHub'] }
    ],
    prerequisites: ['Basic familiarity with a laptop or smartphone', 'No prior coding experience needed'],
    careerOutcome: 'Junior Python Developer, Data Operations Assistant, QA Tester'
  },
  {
    id: 'excel-business-analytics',
    title: 'Excel & Business Data Analytics for Work',
    category: 'Technology',
    description: 'Master advanced formulas (XLOOKUP, INDEX/MATCH), dynamic pivot tables, Power Query, and interactive executive dashboards.',
    longDescription: 'Data analytics is the highest-demand entry-level office skill in every company in India. Learn step-by-step how to clean messy business data, build dynamic financial sheets, and present professional visual dashboards that wow employers.',
    duration: '5 Weeks (20 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 840,
    studentsCount: 6120,
    instructor: {
      name: 'Deepika Minz',
      title: 'Lead Financial Analyst',
      organization: 'Tata Steel Services'
    },
    gradient: 'from-emerald-900 via-forest to-slate-900',
    accentColor: '#10B981',
    lessonsCount: 18,
    isFeatured: true,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Bokaro', 'Ramgarh'],
    skillsGained: ['XLOOKUP & Nested IFs', 'Dynamic Pivot Tables & Slicers', 'Data Cleaning with Power Query', 'Conditional Formatting Rules', 'KPI Dashboard Architecture'],
    modules: [
      { title: 'Core Calculations & Clean Data Entry', duration: '5h', lessons: ['Formulas vs values', 'Keyboard shortcuts for 3x speed', 'Text-to-columns and flash fill'] },
      { title: 'Lookup Mastery & Statistical Formulas', duration: '5h', lessons: ['XLOOKUP from scratch', 'SUMIFS, COUNTIFS, AVERAGEIFS', 'Date and time analytics'] },
      { title: 'Pivot Tables & Power Query Automation', duration: '5h', lessons: ['Creating dynamic cross-tabulations', 'Power Query data transform & merge', 'Calculated fields'] },
      { title: 'Executive Dashboards & Storytelling', duration: '5h', lessons: ['Chart selection best practices', 'Building interactive slicer control boards', 'Exporting clean PDF reports'] }
    ],
    prerequisites: ['Computer or laptop with Microsoft Excel or Google Sheets'],
    careerOutcome: 'MIS Executive, Junior Business Analyst, Operations Coordinator'
  },
  {
    id: 'full-stack-web-development',
    title: 'Modern Web Development with React & Node.js',
    category: 'Technology',
    description: 'Learn HTML5, modern CSS/Tailwind, JavaScript ES6+, React components, and build full-stack deployed web applications.',
    longDescription: 'Go from creating simple web pages to building production-grade web applications. Learn modern responsive layout design, state management, connecting frontend with REST APIs, and deploying on Vercel and render.',
    duration: '10 Weeks (40 Hours)',
    level: 'Intermediate',
    language: 'Hindi & English',
    rating: 4.8,
    reviewsCount: 450,
    studentsCount: 3200,
    instructor: {
      name: 'Kunal Besra',
      title: 'Senior Frontend Engineer',
      organization: 'Bangalore Tech Labs (Alumnus BIT Mesra)'
    },
    gradient: 'from-cyan-950 via-slate-900 to-blue-950',
    accentColor: '#06B6D4',
    lessonsCount: 30,
    isFeatured: false,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Bokaro'],
    skillsGained: ['Semantic HTML & Tailwind CSS', 'Modern JavaScript (ES6+)', 'React Hooks & Router', 'REST API Integration', 'Git & CI/CD Deployment'],
    modules: [
      { title: 'Modern Web Foundations', duration: '8h', lessons: ['Responsive UI with Tailwind CSS', 'DOM manipulation & Event listeners', 'Async/Await and Fetch'] },
      { title: 'React Fundamentals & Component Architecture', duration: '12h', lessons: ['JSX and Props', 'useState & useEffect in-depth', 'Custom reusable UI components'] },
      { title: 'State, Routing & Backend Integration', duration: '10h', lessons: ['React Router for SPAs', 'Calling REST APIs and handling loading states', 'Form validation and error boundaries'] },
      { title: 'Full-Stack Deployment & Capstone App', duration: '10h', lessons: ['Express.js mini server', 'Authentication flow with JWT/localStorage', 'Deploying to Vercel with custom domain'] }
    ],
    prerequisites: ['Basic computer skills and familiarity with file systems'],
    careerOutcome: 'Junior Frontend Developer, React Developer, Web Designer'
  },
  {
    id: 'ai-prompt-engineering-productivity',
    title: 'Generative AI & Prompt Engineering for Work',
    category: 'Technology',
    description: 'Leverage ChatGPT, Gemini, Claude, and Midjourney to accelerate writing, research, coding, marketing, and business planning.',
    longDescription: 'Generative AI is the superpower of the modern workforce. Learn structured prompt engineering frameworks (Role-Context-Instruction-Constraint), automate office tasks, generate professional client proposals, and build simple AI automation agents.',
    duration: '4 Weeks (16 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 510,
    studentsCount: 4100,
    instructor: {
      name: 'Aakash Verma',
      title: 'AI Product Specialist',
      organization: 'Anthropic AI Community Fellow'
    },
    gradient: 'from-purple-950 via-slate-900 to-indigo-950',
    accentColor: '#8B5CF6',
    lessonsCount: 14,
    isFeatured: true,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Hazaribagh'],
    skillsGained: ['Structured Prompt Crafting', 'Few-Shot & Chain-of-Thought Prompting', 'AI Content Repurposing', 'Automating Spreadsheets with AI', 'Ethical AI & Bias Detection'],
    modules: [
      { title: 'Core Mechanics of Large Language Models', duration: '4h', lessons: ['Tokens, temperature and context windows', 'The R-C-I-C prompt formula', 'Preventing hallucinations'] },
      { title: 'Professional Workplace Productivity', duration: '4h', lessons: ['Drafting high-converting business emails', 'Summarizing 50-page PDFs in seconds', 'Data extraction into formatted tables'] },
      { title: 'Visual & Audio Generative Tools', duration: '4h', lessons: ['Generating marketing visuals with Midjourney/DALL-E', 'AI voiceovers and video dubbing', 'Creating presentation decks'] },
      { title: 'Building Simple AI Assistants & Workflows', duration: '4h', lessons: ['Custom GPTs and Gemini Gems', 'Connecting AI to Google Sheets', 'Future career opportunities in AI'] }
    ],
    prerequisites: ['Access to an internet browser (phone or PC)'],
    careerOutcome: 'AI Operations Associate, Content Strategist, Prompt Specialist'
  },
  {
    id: 'cybersecurity-hygiene-safety',
    title: 'Cybersecurity Hygiene & Digital Fraud Prevention',
    category: 'Technology',
    description: 'Learn cyber safety, secure digital payments, detect phishing/social engineering, and earn credentials in security testing.',
    longDescription: 'As digital banking and online commerce expand rapidly across tier-2 and tier-3 districts of Jharkhand, understanding cyber defense is vital. Learn defensive security: passkey configurations, safe UPI setups, identifying scam infrastructure, and foundational ethical security auditing.',
    duration: '4 Weeks (16 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.8,
    reviewsCount: 230,
    studentsCount: 2150,
    instructor: {
      name: 'Inspector S. Tigga',
      title: 'Cyber Crime Investigation Advisor',
      organization: 'Jharkhand Cyber Defense Cell'
    },
    gradient: 'from-slate-900 via-rose-950 to-slate-950',
    accentColor: '#F43F5E',
    lessonsCount: 14,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['Jamtara', 'Ranchi', 'Dhanbad', 'Deoghar', 'Bokaro'],
    skillsGained: ['Multi-Factor Authentication (MFA)', 'Phishing URL Analysis', 'Secure UPI & Netbanking', 'Device Encryption', 'Incident Reporting on Cybercrime.gov.in'],
    modules: [
      { title: 'Threat Landscapes & Social Engineering', duration: '4h', lessons: ['Anatomy of modern OTP scams', 'Impersonation and spoofed calling', 'Malicious APK detection'] },
      { title: 'Securing Personal & Enterprise Devices', duration: '4h', lessons: ['Operating system updates and patching', 'Password managers vs weak repeated pins', 'Wi-Fi encryption and VPN safety'] },
      { title: 'Financial Cybersecurity & Digital Signatures', duration: '4h', lessons: ['AEPS biometric security locks', 'UPI transaction limits and virtual IDs', 'Bank account dispute protocols'] },
      { title: 'Careers in Cyber Defense & Ethical Testing', duration: '4h', lessons: ['Introduction to SOC operations', 'CompTIA Security+ pathway', 'Community cyber awareness trainer roadmap'] }
    ],
    prerequisites: ['Basic smartphone or computer usage'],
    careerOutcome: 'Cybersecurity Assistant, Digital Safety Officer, Banking CSP Supervisor'
  },

  // Digital Freelancing & Creative Economy
  {
    id: 'digital-marketing-local-business',
    title: 'Digital Marketing & Social Media for Local Businesses',
    category: 'Freelancing',
    description: 'Run targeted Meta & Google ads, master local SEO, build high-converting WhatsApp business funnels, and sign client retainers.',
    longDescription: 'Every doctor, retail store, hotel, coaching center, and artisan in Jharkhand needs more local customers. This hands-on program teaches hyper-local Google Business optimization, running ₹200/day Instagram campaigns, creating viral reels, and closing monthly marketing retainers.',
    duration: '6 Weeks (24 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 670,
    studentsCount: 5200,
    instructor: {
      name: 'Priyanka Hansda',
      title: 'Founder, Kolhan Digital Agency',
      organization: 'Jharkhand Youth Startup Network'
    },
    gradient: 'from-terracotta via-amber-700 to-rose-900',
    accentColor: '#C65A38',
    lessonsCount: 20,
    isFeatured: true,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Hazaribagh', 'Bokaro', 'Deoghar'],
    skillsGained: ['Google Business Profile Ranking', 'Meta Ads Manager Hyper-Targeting', 'Canva Ad Creative Design', 'WhatsApp Business Automation', 'Client Retainer Proposals'],
    modules: [
      { title: 'Local Search & Google Maps Dominance', duration: '6h', lessons: ['GMB verification without postal delay', 'Local keyword placement', 'Generating genuine customer 5-star reviews'] },
      { title: 'High-Converting Ad Campaigns on Meta', duration: '6h', lessons: ['Setting up Meta Pixel and custom audiences', 'Geographic pin-drop radius targeting', 'Budget allocation for small businesses'] },
      { title: 'Short-Form Video & Content Creation', duration: '6h', lessons: ['Shooting aesthetic product reels with phones', 'CapCut & VN video editing mastery', 'Hook-Story-Offer script framework'] },
      { title: 'Client Acquisition & Freelance Pitching', duration: '6h', lessons: ['Cold walk-ins and local business audits', 'Drafting ₹10,000/month retainer agreements', 'Monthly reporting templates'] }
    ],
    prerequisites: ['Smartphone with camera and internet connection'],
    careerOutcome: 'Freelance Digital Marketer, Social Media Manager, Agency Founder'
  },
  {
    id: 'freelancing-fundamentals-global-market',
    title: 'Freelancing Fundamentals on Upwork, Fiverr & LinkedIn',
    category: 'Freelancing',
    description: 'Set up 100% verified freelance profiles, write winning proposals, negotiate rates in USD/INR, and maintain top ratings.',
    longDescription: 'Stop competing in low-paid gig traps. Learn the exact process of packaging any skill (data entry, translation, video editing, coding, graphic design) into clear commercial service offerings, passing profile verifications, and earning income from home.',
    duration: '4 Weeks (16 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 540,
    studentsCount: 3950,
    instructor: {
      name: 'Sunil Mahato',
      title: 'Top-Rated Plus Freelancer ($80k+ Eearned)',
      organization: 'Upwork Global Talent Network'
    },
    gradient: 'from-emerald-950 via-slate-900 to-forest-dark',
    accentColor: '#10B981',
    lessonsCount: 16,
    isFeatured: true,
    isLocalSpecialty: false,
    districtRelevance: ['All Districts of Jharkhand'],
    skillsGained: ['Upwork Profile Optimization', 'Proposal Writing that Beats AI Spammers', 'Pricing Psychology & Milestone Billing', 'International Payment Setup (PayPal/Payoneer/FIRC)', 'Conflict Resolution & Client Retention'],
    modules: [
      { title: 'Positioning Your Niche & Profile Architecture', duration: '4h', lessons: ['Choosing the right primary categories', 'Crafting a high-conversion bio headline', 'Building a zero-experience sample portfolio'] },
      { title: 'Proposal Crafting & Connects Optimization', duration: '4h', lessons: ['Deconstructing client job postings', 'The 3-line opener rule', 'Custom video pitches with Loom'] },
      { title: 'Contract Management & Milestones', duration: '4h', lessons: ['Fixed price vs hourly contracts', 'Escrow protection guidelines', 'Avoiding scope creep politely'] },
      { title: 'Taxation, FIRC & Currency Inflow into India', duration: '4h', lessons: ['GST rules for Indian freelancers (LUT)', 'Payoneer/Bank wire exchange rate secrets', 'FIRC certificate downloads for clean income tax'] }
    ],
    prerequisites: ['One marketable skill (design, writing, data, video, code, admin)'],
    careerOutcome: 'Full-Time Independent Freelancer, Remote Contract Specialist'
  },
  {
    id: 'graphic-design-canva-figma',
    title: 'Graphic Design & Brand Identity with Canva & Figma',
    category: 'Freelancing',
    description: 'Design brand logos, marketing flyers, social carousels, and UI mockups with professional typography and color theory.',
    longDescription: 'Design is not about complex tools; it is about visual hierarchy, contrast, balance, and communication. Learn to create commercial brand packages, Instagram kits, company brochures, and vector icons using Figma and Canva.',
    duration: '5 Weeks (20 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.8,
    reviewsCount: 420,
    studentsCount: 3400,
    instructor: {
      name: 'Ritu Gope',
      title: 'UI/UX & Brand Identity Designer',
      organization: 'Design Studio Ranchi'
    },
    gradient: 'from-fuchsia-950 via-slate-900 to-rose-950',
    accentColor: '#EC4899',
    lessonsCount: 18,
    isFeatured: false,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Bokaro'],
    skillsGained: ['Typography Pairing Rules', 'Color Harmony & Contrast Ratios', 'Figma Auto-Layout & Components', 'Commercial Print Preparation (CMYK/DPI)', 'Social Media Carousel Architecture'],
    modules: [
      { title: 'Design Principles & Spatial Geometry', duration: '5h', lessons: ['Whitespace as an active design tool', 'Grid systems (8pt standard)', 'Visual hierarchy and focal points'] },
      { title: 'Brand Identity Development in Figma', duration: '5h', lessons: ['Creating minimalist logos and marks', 'Defining typography scales', 'Building reusable component kits'] },
      { title: 'Commercial Collateral & Print Readiness', duration: '5h', lessons: ['Brochures, standees, and visiting cards', 'Bleed margins and resolution checks', 'Exporting print-ready vector PDFs'] },
      { title: 'Packaging Mockups & Behance Presentation', duration: '5h', lessons: ['3D bottle, pouch, and box mockups', 'Publishing case studies on Behance', 'Pricing design projects for clients'] }
    ],
    prerequisites: ['Computer or laptop with internet browser'],
    careerOutcome: 'Brand Identity Designer, Social Media Creative Lead, Junior UI Designer'
  },
  {
    id: 'video-editing-storytelling',
    title: 'Commercial Video Editing & Smartphone Filmmaking',
    category: 'Freelancing',
    description: 'Shoot high-quality video on your phone, edit in Premiere Pro & CapCut, master pacing, color grading, sound design, and viral hooks.',
    longDescription: 'Video is the dominant medium of the internet. Learn documentary storytelling, product commercial cuts, pacing, music sync, motion graphics subtitles, and sound effects to produce work for brands, YouTubers, and NGOs.',
    duration: '6 Weeks (24 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 380,
    studentsCount: 2900,
    instructor: {
      name: 'Amitabh Tirkey',
      title: 'Documentary Filmmaker & Video Editor',
      organization: 'Chotanagpur Visual Media Collective'
    },
    gradient: 'from-amber-950 via-slate-900 to-red-950',
    accentColor: '#F59E0B',
    lessonsCount: 20,
    isFeatured: false,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Hazaribagh', 'Dumka'],
    skillsGained: ['Video Pacing & J/L Cuts', 'Color Grading for Mood', 'Sound Design & Foley Layering', 'Kinetic Typography Subtitles', 'Storyboarding Commercials'],
    modules: [
      { title: 'Cinematography with What You Have', duration: '6h', lessons: ['Three-point lighting on a budget', 'Phone camera settings (24fps, lock exposure)', 'Composition (rule of thirds, leading lines)'] },
      { title: 'Editing Workflow & Cut Techniques', duration: '6h', lessons: ['Organizing bin structures', 'J-cuts and L-cuts for natural audio transitions', 'Pacing and rhythm with music beats'] },
      { title: 'Audio Post-Production & Color Correction', duration: '6h', lessons: ['Vocal enhancement & noise removal with AI', 'LUTs and balancing skin tones', 'Layering atmospheric ambient audio'] },
      { title: 'Short-Form Video Production & Client Delivery', duration: '6h', lessons: ['Instagram Reels / YouTube Shorts editing', 'Animated captions with animated emojis', 'Export settings for YouTube 4K vs WhatsApp'] }
    ],
    prerequisites: ['Smartphone or PC capable of running video editing apps'],
    careerOutcome: 'Video Editor, Reel Creator, Commercial Ad Editor, Documentary Maker'
  },

  // Skilled Trades & Renewable Technology
  {
    id: 'solar-rooftop-installation-maintenance',
    title: 'Solar Rooftop Installation, Inverters & Maintenance',
    category: 'Skilled Trades',
    description: 'Certified training in PV panel mounting, wiring, grid-tie inverters, battery storage, and PM Surya Ghar scheme setups.',
    longDescription: 'With Jharkhand’s high solar insolation and the central government’s PM Surya Ghar Muft Bijli Yojana, certified solar technicians are in unprecedented demand. Learn panel angle optimization, earthing, net metering connection, fault diagnosis, and routine cleaning.',
    duration: '6 Weeks (26 Hours)',
    level: 'Beginner',
    language: 'Hindi',
    rating: 4.9,
    reviewsCount: 710,
    studentsCount: 4600,
    instructor: {
      name: 'Er. Rajeshwar Bando',
      title: 'Senior Renewable Energy Engineer',
      organization: 'Jharkhand Renewable Energy Development Agency (JREDA)'
    },
    gradient: 'from-amber-700 via-yellow-600 to-slate-900',
    accentColor: '#D97706',
    lessonsCount: 22,
    isFeatured: true,
    isLocalSpecialty: true,
    districtRelevance: ['Giridih', 'Ranchi', 'Hazaribagh', 'Koderma', 'Palamu', 'Garhwa'],
    skillsGained: ['Photovoltaic Array Sizing', 'Structure Mounting & Wind Load Safety', 'Inverter Programming & Net Metering', 'Lightning Arrester & Earthing Pit Testing', 'Solar Pump Troubleshooting'],
    modules: [
      { title: 'Solar Fundamentals & Electricity Basics', duration: '6h', lessons: ['AC vs DC current in solar arrays', 'Monocrystalline vs Polycrystalline panels', 'Azimuth and tilt calculations for Jharkhand latitude'] },
      { title: 'Mechanical Mounting & Electrical Wiring', duration: '8h', lessons: ['Tin shed vs RCC roof anchors', 'MC4 connector crimping and wire conduit layout', 'Combiner box and DC circuit breakers'] },
      { title: 'Grid-Tie vs Off-Grid & Battery Storage', duration: '6h', lessons: ['Lithium-ion vs tubular lead-acid maintenance', 'Grid-synchronous inverters & anti-islanding', 'Net meter installation workflow with JBVNL'] },
      { title: 'Government Subsidies & Solar Contracting', duration: '6h', lessons: ['PM Surya Ghar National Portal registration', 'Preparing cost quotations for residential owners', 'Safety protocols and fall prevention harness'] }
    ],
    prerequisites: ['Basic high school physics or ITI electrician background helpful'],
    careerOutcome: 'Certified Surya Mitra Technician, Solar Project Contractor, Solar Pump Service Lead'
  },
  {
    id: 'ev-two-wheeler-service-diagnostics',
    title: 'Electric Two-Wheeler Maintenance & Battery Diagnostics',
    category: 'Skilled Trades',
    description: 'Service BLDC hub motors, diagnose Lithium BMS errors, troubleshoot throttle controllers, and open an EV repair workshop.',
    longDescription: 'As electric scooters and cargo three-wheelers replace petrol vehicles across Ranchi, Jamshedpur, and Dhanbad, local mechanics lack EV training. Learn safety precautions for high-voltage DC, controller diagnostics, battery health measurement, and wiring harness repair.',
    duration: '5 Weeks (22 Hours)',
    level: 'Intermediate',
    language: 'Hindi',
    rating: 4.8,
    reviewsCount: 390,
    studentsCount: 2800,
    instructor: {
      name: 'Vikram Singh',
      title: 'Lead EV Systems Trainer',
      organization: 'National Skill Development Corp (NSDC)'
    },
    gradient: 'from-teal-950 via-slate-900 to-emerald-950',
    accentColor: '#14B8A6',
    lessonsCount: 18,
    isFeatured: false,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Bokaro'],
    skillsGained: ['BLDC Hall Sensor Testing', 'Battery Management System (BMS) Diagnostics', 'Cell Voltage Balancing', 'Controller Rewiring', 'Regenerative Braking Calibration'],
    modules: [
      { title: 'EV Powertrain Architecture & High-Voltage Safety', duration: '5h', lessons: ['Safety personal protective equipment (PPE)', 'Understanding 48V/60V/72V architectures', 'Preventing thermal runaway'] },
      { title: 'Lithium Battery Packs & BMS Analytics', duration: '6h', lessons: ['Li-ion vs LFP chemistry', 'Measuring internal resistance of cells', 'Replacing faulty BMS circuit boards'] },
      { title: 'Motor Controllers & Throttle Mechanisms', duration: '6h', lessons: ['Testing hall sensors using digital multimeters', 'Troubleshooting intermittent acceleration', 'Wiring harnesses and DC-DC converters'] },
      { title: 'Workshop Setup & Spare Parts Sourcing', duration: '5h', lessons: ['Diagnostic scanning tools for Ather, Ola, and local e-rickshaws', 'Direct spare parts sourcing from manufacturers', 'Warranty claims and service billing'] }
    ],
    prerequisites: ['Basic familiarity with two-wheeler mechanics or electricals'],
    careerOutcome: 'Certified EV Technician, E-Rickshaw Battery Specialist, EV Workshop Owner'
  },
  {
    id: 'smart-drip-irrigation-polyhouse',
    title: 'Micro-Irrigation & Polyhouse Smart Farming',
    category: 'Skilled Trades',
    description: 'Design water-saving drip networks, automate solar pumping, and cultivate off-season high-value capsicum and strawberries.',
    longDescription: 'Jharkhand’s undulating terrain makes water conservation crucial. Master gravity-fed and pressurized drip irrigation systems, fertigation venturi injectors, shade net polyhouses, and produce high-demand exotic vegetables for urban wholesale markets.',
    duration: '5 Weeks (20 Hours)',
    level: 'Beginner',
    language: 'Hindi',
    rating: 4.9,
    reviewsCount: 310,
    studentsCount: 1950,
    instructor: {
      name: 'Birsa Birhor & Team',
      title: 'Agricultural Engineering Specialist',
      organization: 'Birsa Agricultural University (BAU) Kanke'
    },
    gradient: 'from-forest via-emerald-900 to-slate-900',
    accentColor: '#1B3B2B',
    lessonsCount: 16,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['Khunti', 'Ranchi', 'Hazaribagh', 'Lohardaga', 'Palamu'],
    skillsGained: ['Drip Lateral Line Layout', 'Sand & Screen Filter Cleaning', 'Venturi Fertigation Calculation', 'Polyhouse Climate Control', 'Mandi Direct Selling'],
    modules: [
      { title: 'Water Source Sizing & Pipe Hydraulics', duration: '5h', lessons: ['Calculating water discharge per hour', 'Main line, sub-main and lateral pipe sizing', 'Preventing emitter clogging with acid treatment'] },
      { title: 'Fertigation & Nutrient Injection Systems', duration: '5h', lessons: ['Venturi injectors and fertilizer tanks', 'Water-soluble NPK calculations', 'Soil pH and EC monitoring'] },
      { title: 'Polyhouse & Net House Construction', duration: '5h', lessons: ['GI pipe framing and anti-UV sheet fixing', 'Micro-sprinklers for temperature reduction', 'Trellising systems for tomatoes and cucumbers'] },
      { title: 'Government Subsidies & Supply Contracts', duration: '5h', lessons: ['PM Krishi Sinchayee Yojana (PMKSY) 80% subsidy process', 'Packaging for supermarket chains (Reliance Fresh, BigBasket)', 'Collective farmer logistics'] }
    ],
    prerequisites: ['Access to agricultural land or interest in farming services'],
    careerOutcome: 'Micro-Irrigation Installation Contractor, Polyhouse Farm Manager'
  },
  {
    id: 'modern-plumbing-rainwater-harvesting',
    title: 'Modern Plumbing, CPVC Fittings & Rainwater Harvesting',
    category: 'Skilled Trades',
    description: 'Master sanitary piping, CPVC/UPVC heat welding, pressure pump installation, and rooftop rainwater recharge structures.',
    longDescription: 'High-rise residential construction and rural Jal Jeevan Mission pipelines need modern plumbing professionals. Learn water pipe pressure calculations, diverter valve installations, sump pump automation, and building percolation pits.',
    duration: '4 Weeks (18 Hours)',
    level: 'Beginner',
    language: 'Hindi',
    rating: 4.7,
    reviewsCount: 220,
    studentsCount: 1750,
    instructor: {
      name: 'Manoj Kumar',
      title: 'Master Plumbing Instructor',
      organization: 'Indian Plumbing Skills Council'
    },
    gradient: 'from-blue-950 via-slate-900 to-cyan-950',
    accentColor: '#0284C7',
    lessonsCount: 15,
    isFeatured: false,
    isLocalSpecialty: false,
    districtRelevance: ['All Districts of Jharkhand'],
    skillsGained: ['PPR Heat Fusion Welding', 'Concealed Bathroom Diverter Fitting', 'Booster Pump Installation', 'Rainwater Filter Trench Construction', 'Jal Jeevan Mission Pipeline Standards'],
    modules: [
      { title: 'Pipe Materials & Pressure Rating Standards', duration: '4h', lessons: ['CPVC vs UPVC vs PPR pipes', 'Solvent cementing techniques', 'Leak-testing under 10 bar hydrostatic pressure'] },
      { title: 'Concealed Sanitary Installations', duration: '5h', lessons: ['Wall-hung toilets with concealed cisterns', 'Thermostatic shower diverters', 'S-trap and P-trap sewer venting'] },
      { title: 'Pumps, Overhead Tanks & Automation', duration: '5h', lessons: ['Automatic water level controllers', 'Pressure booster pump selection for multistory buildings', 'Underground sump maintenance'] },
      { title: 'Rooftop Rainwater Harvesting & Recharging', duration: '4h', lessons: ['First-flush rainwater diverter design', 'Recharge borewell filtration chambers', 'Local municipal building compliance bylaws'] }
    ],
    prerequisites: ['Basic manual aptitude'],
    careerOutcome: 'Certified Plumbing Contractor, Commercial Building Maintenance Lead'
  },

  // Business, Accounting & Entrepreneurship
  {
    id: 'local-business-accounting-tally-gst',
    title: 'Local Business Accounting with Tally Prime & GST',
    category: 'Business',
    description: 'Handle bookkeeping for shops and MSMEs, file GSTR-1 & 3B, generate e-way bills, and manage bank reconciliations.',
    longDescription: 'Every trader, contractor, distributor, and small factory in Jharkhand requires accurate GST bookkeeping. This course covers everything from debit/credit vouchers and inventory management to filing monthly returns and generating e-invoices.',
    duration: '6 Weeks (24 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.8,
    reviewsCount: 520,
    studentsCount: 3800,
    instructor: {
      name: 'CA Sangeeta Kujur',
      title: 'Chartered Accountant & Tax Consultant',
      organization: 'Ranchi Chamber of Commerce & Industry'
    },
    gradient: 'from-slate-900 via-emerald-950 to-slate-950',
    accentColor: '#10B981',
    lessonsCount: 20,
    isFeatured: true,
    isLocalSpecialty: false,
    districtRelevance: ['Ranchi', 'East Singhbhum', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar'],
    skillsGained: ['Tally Prime Navigation', 'GST Invoice Generation & HSN Codes', 'Bank Reconciliation Statement (BRS)', 'GSTR-3B & GSTR-1 Return Filing', 'MSME 45-Day Payment Rule Compliance'],
    modules: [
      { title: 'Accounting Foundations & Company Setup', duration: '6h', lessons: ['Chart of accounts & ledger groups', 'Voucher entry (Purchase, Sales, Receipt, Payment)', 'Contra entries and Petty cash'] },
      { title: 'GST Rules, Rates & Invoicing', duration: '6h', lessons: ['CGST, SGST, and IGST mechanism', 'Generating compliant tax invoices', 'E-way bill generation on Government portal'] },
      { title: 'Inventory Control & Stock Valuations', duration: '6h', lessons: ['Stock items, units of measure, and godowns', 'Batch-wise expiry date tracking', 'Purchase order to payment reconciliation cycle'] },
      { title: 'GST Return Preparation & Financial Statements', duration: '6h', lessons: ['Reconciling GSTR-2B with purchase ledgers', 'Filing GSTR-3B summary return', 'Generating Profit & Loss and Balance Sheet'] }
    ],
    prerequisites: ['Basic high school arithmetic'],
    careerOutcome: 'Accountant, GST Filing Consultant, Billing Executive'
  },
  {
    id: 'financial-literacy-mudra-loans',
    title: 'Financial Literacy, Mudra Loans & MSME Grants',
    category: 'Business',
    description: 'Learn personal budgeting, debt management, Mudra (Shishu, Kishore, Tarun) loan application, and PMEGP 35% subsidies.',
    longDescription: 'Unlock government capital to kickstart your enterprise. Learn how to write a bankable Detailed Project Report (DPR), apply online under the PMEGP subsidy scheme, obtain Mudra loans without collateral, and manage working capital efficiently.',
    duration: '3 Weeks (12 Hours)',
    level: 'Beginner',
    language: 'Hindi',
    rating: 4.9,
    reviewsCount: 410,
    studentsCount: 3600,
    instructor: {
      name: 'Alok Toppo',
      title: 'Former Lead District Manager',
      organization: 'State Bank of India & NABARD Jharkhand'
    },
    gradient: 'from-amber-900 via-slate-900 to-terracotta',
    accentColor: '#D97706',
    lessonsCount: 12,
    isFeatured: false,
    isLocalSpecialty: true,
    districtRelevance: ['All Districts of Jharkhand'],
    skillsGained: ['Detailed Project Report (DPR) Preparation', 'PMEGP Subsidy Application', 'CIBIL Score Improvement Techniques', 'Working Capital Cash Flow Management', 'Zero-Collateral Mudra Loan Filing'],
    modules: [
      { title: 'Personal Finance & Banking Systems', duration: '3h', lessons: ['Savings vs current accounts', 'Understanding compounding interest and bad debt', 'CIBIL credit score mechanics and repair'] },
      { title: 'Government Credit Schemes (PMEGP & Mudra)', duration: '3h', lessons: ['PMEGP 25%-35% capital subsidy rules', 'Mudra loans up to ₹10 Lakhs', 'Stand-Up India for ST/SC entrepreneurs'] },
      { title: 'Writing Bankable Detailed Project Reports', duration: '3h', lessons: ['Estimating capital expenditure vs working capital', 'Calculating Debt Service Coverage Ratio (DSCR)', 'Presenting before the Bank Branch Manager'] },
      { title: 'Financial Discipline & Digital Payment Controls', duration: '3h', lessons: ['Separating personal wallet from business cash', 'Using QR soundboxes and zero-cost UPI', 'Investing surplus profits into mutual funds / gold bonds'] }
    ],
    prerequisites: ['Aadhar Card, PAN Card, and Bank Account'],
    careerOutcome: 'Rural Financial Advisor, MSME Loan Consultant, Micro-Enterprise Founder'
  },

  // Soft Skills, Communication & Career Readiness
  {
    id: 'spoken-english-workplace-confidence',
    title: 'Spoken English & Workplace Communication Confidence',
    category: 'Soft Skills',
    description: 'Break hesitation, practice real-world office conversations, speak clearly in interviews, and draft professional emails.',
    longDescription: 'Designed specifically for Hindi- and regional-medium students who understand English but hesitate to speak. Master everyday professional pronunciation, sentence patterns, interview self-introductions, and customer-handling phrasing without memorizing boring grammar rules.',
    duration: '6 Weeks (24 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 920,
    studentsCount: 7100,
    instructor: {
      name: 'Shreya Munda',
      title: 'Corporate Communication Coach',
      organization: 'Tata Communications Training Alum'
    },
    gradient: 'from-indigo-950 via-slate-900 to-blue-950',
    accentColor: '#6366F1',
    lessonsCount: 20,
    isFeatured: true,
    isLocalSpecialty: false,
    districtRelevance: ['All Districts of Jharkhand'],
    skillsGained: ['Spoken Fluency Drills', 'Eliminating Mother Tongue Influence (MTI)', 'Professional Phone & Video Etiquette', 'Interview "Tell Me About Yourself" Mastery', 'Email Writing Templates'],
    modules: [
      { title: 'Breaking the Hesitation Barrier', duration: '6h', lessons: ['Overcoming fear of grammatical mistakes', 'The 50 most common conversational sentence structures', 'Daily tongue-twisters and voice projection'] },
      { title: 'Professional Workplace Interactions', duration: '6h', lessons: ['Introducing yourself with confidence', 'Asking questions politely in meetings', 'Handling disagreement with managers gracefully'] },
      { title: 'Job Interview Conversation Mastery', duration: '6h', lessons: ['The STAR framework for answering questions', 'Explaining career gaps and college backgrounds', 'Salary expectation negotiation phrasing'] },
      { title: 'Business Email & WhatsApp Communication', duration: '6h', lessons: ['Subject lines that get opened', 'Writing concise status updates', 'Formal invitations and thank-you notes'] }
    ],
    prerequisites: ['Basic ability to read English words'],
    careerOutcome: 'Customer Support Representative, BPO Specialist, Front Desk Executive'
  },
  {
    id: 'resume-interview-job-search-mastery',
    title: 'Resume Building, LinkedIn & Job Search Strategy',
    category: 'Soft Skills',
    description: 'Build an ATS-optimized modern resume, establish an attractive LinkedIn profile, and prepare for competitive private sector interviews.',
    longDescription: 'Applying for jobs shouldn’t feel like sending resumes into a black hole. Learn how Applicant Tracking Systems (ATS) score your resume, network effectively on LinkedIn with hiring managers in Ranchi, Kolkata, and Bangalore, and pass behavioral HR interviews.',
    duration: '3 Weeks (12 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.9,
    reviewsCount: 650,
    studentsCount: 4900,
    instructor: {
      name: 'Vikash Hansdak',
      title: 'HR Talent Acquisition Lead',
      organization: 'Tech Mahindra Recruitment Partner'
    },
    gradient: 'from-slate-900 via-slate-800 to-slate-950',
    accentColor: '#94A3B8',
    lessonsCount: 12,
    isFeatured: false,
    isLocalSpecialty: false,
    districtRelevance: ['All Districts of Jharkhand'],
    skillsGained: ['Single-Page ATS Resume Formatting', 'Keyword Optimization for Job Portals', 'LinkedIn Direct Outreach Messages', 'Mock HR Interview Rehearsals', 'Negotiating Joining Allowances'],
    modules: [
      { title: 'ATS Resume Engineering', duration: '3h', lessons: ['Action verb bullet point formulas', 'Quantifying college projects and internships', 'Single-column markdown / LaTeX formatting'] },
      { title: 'LinkedIn Profile That Attracts Recruiters', duration: '3h', lessons: ['Writing a high-impact headline', 'The "About" story section that hooks readers', 'Adding media, certificates, and portfolio links'] },
      { title: 'The Hidden Job Market & Cold Outreach', duration: '3h', lessons: ['Finding internal hiring managers on LinkedIn', 'Personalized message templates that get 60%+ replies', 'Following up professionally without being annoying'] },
      { title: 'Interview Day Simulation & Offer Evaluation', duration: '3h', lessons: ['Body language and eye contact on Zoom / in-person', 'Handling tricky behavioral questions', 'Understanding CTC components (Basic, HRA, PF, In-hand)'] }
    ],
    prerequisites: ['Completed 10th or 12th or any degree'],
    careerOutcome: 'Job-Ready Candidate for Corporates, Startups, and Public Sector'
  },
  {
    id: 'workplace-tools-google-slack-notion',
    title: 'Modern Workplace Tools: Google Workspace, Slack & Notion',
    category: 'Soft Skills',
    description: 'Learn collaborative productivity: Google Docs, Sheets, Slides, Drive organization, Slack channels, and Notion task trackers.',
    longDescription: 'Whether working remotely or in a modern corporate office, you must know how to collaborate asynchronously. Master professional calendar scheduling, shared cloud drives, team chat etiquette, and building clean project dashboards.',
    duration: '3 Weeks (12 Hours)',
    level: 'Beginner',
    language: 'Hindi & English',
    rating: 4.8,
    reviewsCount: 310,
    studentsCount: 2600,
    instructor: {
      name: 'Pooja Soren',
      title: 'Operations & Remote Work Lead',
      organization: 'EdTech Initiatives Jharkhand'
    },
    gradient: 'from-sky-950 via-slate-900 to-slate-950',
    accentColor: '#38BDF8',
    lessonsCount: 12,
    isFeatured: false,
    isLocalSpecialty: false,
    districtRelevance: ['All Districts of Jharkhand'],
    skillsGained: ['Google Drive Cloud Permission Management', 'Collaborative Doc Version History', 'Google Meet & Zoom Host Controls', 'Slack Thread Etiquette', 'Notion Kanban Boards'],
    modules: [
      { title: 'Cloud Document Collaboration', duration: '3h', lessons: ['Sharing files with "Viewer" vs "Editor" roles', 'Live comments and task assignments in Docs', 'Folder taxonomy for clean team drives'] },
      { title: 'Presentation Decks with Google Slides', duration: '3h', lessons: ['Master slides and template design', 'Embedding charts and clean vector icons', 'Presenting remotely with speaker notes'] },
      { title: 'Team Communication on Slack & Teams', duration: '3h', lessons: ['Public vs private channels', 'Using threads to keep conversations tidy', 'Status messages and working hour boundaries'] },
      { title: 'Personal Task Management in Notion', duration: '3h', lessons: ['Creating simple daily to-do lists', 'Kanban project boards (To Do, Doing, Done)', 'Linking course notes and bookmark resources'] }
    ],
    prerequisites: ['Computer or smartphone with Google Account'],
    careerOutcome: 'Virtual Assistant, Office Operations Executive, Project Coordinator'
  }
];

export const COURSE_CATEGORIES = [
  'All',
  'Technology',
  'Business',
  'Local Enterprise',
  'Freelancing',
  'Skilled Trades',
  'Soft Skills'
] as const;
