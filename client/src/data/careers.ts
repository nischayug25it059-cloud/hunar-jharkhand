// src/data/careers.ts

export interface CareerStep {
  stage: 'START' | 'SKILLS' | 'PROJECT' | 'PORTFOLIO' | 'OPPORTUNITY';
  title: string;
  description: string;
  badge?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  accentBg: string;
  timeCommitment: string;
  earningPotential: string;
  description: string;
  steps: CareerStep[];
  targetRoles: string[];
  recommendedCourseIds: string[];
  inDemandDistricts: string[];
}

export const CAREER_PATHS_DATA: CareerPath[] = [
  {
    id: 'data-and-technology',
    title: 'Data & Technology',
    subtitle: 'From zero coding to tech employment or remote freelance development.',
    iconName: 'Code2',
    color: '#3B82F6',
    accentBg: 'rgba(59, 130, 246, 0.08)',
    timeCommitment: '4 - 6 Months',
    earningPotential: '₹3.5L - ₹8.5L / year',
    description: 'Learn logical thinking, modern programming, data analysis, and building full-stack responsive web applications.',
    steps: [
      {
        stage: 'START',
        title: 'Digital & Math Foundations',
        description: 'Understand computer architecture, basic logic, file systems, and command line tools.',
        badge: 'Month 1'
      },
      {
        stage: 'SKILLS',
        title: 'Python, SQL & Modern JavaScript',
        description: 'Master data structures, write clean scripts, query relational databases, and build interactive frontends.',
        badge: 'Month 2-3'
      },
      {
        stage: 'PROJECT',
        title: 'Production Data Dashboard & App',
        description: 'Build an interactive district analytics portal or student tracking portal deployed live on Vercel.',
        badge: 'Month 4'
      },
      {
        stage: 'PORTFOLIO',
        title: 'GitHub Profile & Live Showcase',
        description: 'Clean repository with comprehensive documentation, clean code commits, and verified course certificates.',
        badge: 'Month 5'
      },
      {
        stage: 'OPPORTUNITY',
        title: 'Tech Companies & Remote Contracts',
        description: 'Junior Full-Stack Engineer, Data Analyst, or Remote Freelance Developer for tech firms across India.',
        badge: 'Month 6'
      }
    ],
    targetRoles: ['Junior Full-Stack Developer', 'Data Analytics Specialist', 'Frontend Engineer', 'Python Automation Consultant'],
    recommendedCourseIds: ['python-for-beginners', 'excel-business-analytics', 'full-stack-web-development', 'ai-prompt-engineering-productivity'],
    inDemandDistricts: ['Ranchi', 'East Singhbhum (Jamshedpur)', 'Dhanbad', 'Bokaro']
  },
  {
    id: 'local-product-business',
    title: 'Local Product Business',
    subtitle: 'Transform indigenous raw produce into high-value global consumer brands.',
    iconName: 'Sprout',
    color: '#C65A38',
    accentBg: 'rgba(198, 90, 56, 0.08)',
    timeCommitment: '3 - 5 Months',
    earningPotential: '₹40,000 - ₹1,50,000 / month',
    description: 'Capitalize on Jharkhand’s monopoly in Lac, Tasar Silk, Bamboo, Millets, and Minor Forest Produce with modern processing and D2C branding.',
    steps: [
      {
        stage: 'START',
        title: 'Raw Material Sourcing & Farmer Tie-ups',
        description: 'Identify high-yield clusters, organize Self-Help Groups (SHGs), and understand seasonal harvest cycles.',
        badge: 'Month 1'
      },
      {
        stage: 'SKILLS',
        title: 'Scientific Processing & Quality Grading',
        description: 'Operate mini processing machines, solar drying, grading protocols, and safe organic packaging.',
        badge: 'Month 2'
      },
      {
        stage: 'PROJECT',
        title: 'FSSAI/GI-Certified Sample Batch',
        description: 'Produce 100 test packaged units of artisanal Tasar scarves, button lac, or organic Marua biscuits.',
        badge: 'Month 3'
      },
      {
        stage: 'PORTFOLIO',
        title: 'Brand Identity & ONDC/Amazon Store',
        description: 'Professional product photography, barcode generation, story-driven packaging, and digital catalogue.',
        badge: 'Month 4'
      },
      {
        stage: 'OPPORTUNITY',
        title: 'B2B Exports, Retail & Government Procurement',
        description: 'Supply corporate gift houses, luxury boutique hotels, TRIFED Tribes India stores, and direct urban consumers.',
        badge: 'Month 5+'
      }
    ],
    targetRoles: ['Agri-Forest Produce Entrepreneur', 'FPO Operations Lead', 'Artisanal Brand Creator', 'Export Merchandiser'],
    recommendedCourseIds: ['lac-cultivation-value-addition', 'tasar-silk-sericulture', 'bamboo-product-design-enterprise', 'minor-forest-produce-value-chain', 'millet-organic-food-business'],
    inDemandDistricts: ['Khunti', 'West Singhbhum', 'Simdega', 'Latehar', 'Gumla', 'Dumka']
  },
  {
    id: 'digital-freelancing',
    title: 'Digital Freelancing',
    subtitle: 'Work from your hometown and earn from clients worldwide.',
    iconName: 'Laptop',
    color: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.08)',
    timeCommitment: '2 - 3 Months',
    earningPotential: '₹25,000 - ₹90,000 / month',
    description: 'Master in-demand digital services: graphic design, short-form video editing, local SEO, and social media marketing.',
    steps: [
      {
        stage: 'START',
        title: 'Service Niche Selection',
        description: 'Choose a high-demand creative or technical service aligned with your natural strengths.',
        badge: 'Month 1'
      },
      {
        stage: 'SKILLS',
        title: 'Figma, Canva & Premiere Pro Mastery',
        description: 'Learn speed shortcuts, commercial design standards, visual storytelling, and viral hooks.',
        badge: 'Month 1-2'
      },
      {
        stage: 'PROJECT',
        title: '3 Spec Work Case Studies',
        description: 'Redesign real local businesses, create 5 viral reel edits, or design a complete brand kit.',
        badge: 'Month 2'
      },
      {
        stage: 'PORTFOLIO',
        title: 'Behance, Upwork & Verified Reviews',
        description: 'Build an impressive single-link visual portfolio with case studies showing client problem vs your solution.',
        badge: 'Month 2-3'
      },
      {
        stage: 'OPPORTUNITY',
        title: 'Monthly Client Retainers ($ and ₹)',
        description: 'Sign 3 to 5 recurring clients paying ₹15,000 - ₹30,000/month or international contracts on Upwork.',
        badge: 'Month 3+'
      }
    ],
    targetRoles: ['Freelance Video Editor', 'Social Media Strategist', 'Brand Identity Designer', 'Local SEO Specialist'],
    recommendedCourseIds: ['digital-marketing-local-business', 'freelancing-fundamentals-global-market', 'graphic-design-canva-figma', 'video-editing-storytelling'],
    inDemandDistricts: ['All 24 Districts (Remote / Hybrid)']
  },
  {
    id: 'skilled-trades',
    title: 'Skilled Trades & Clean Tech',
    subtitle: 'High-income hands-on technical professions powering clean infrastructure.',
    iconName: 'Wrench',
    color: '#D97706',
    accentBg: 'rgba(217, 119, 6, 0.08)',
    timeCommitment: '3 - 4 Months',
    earningPotential: '₹30,000 - ₹80,000 / month',
    description: 'Install and service rooftop solar arrays, diagnose electric vehicle batteries, and build modern rainwater harvesting systems.',
    steps: [
      {
        stage: 'START',
        title: 'Electrical & Plumbing Safety Essentials',
        description: 'Learn tool safety, voltage measurement, pipe fittings, and personal protective equipment standards.',
        badge: 'Month 1'
      },
      {
        stage: 'SKILLS',
        title: 'Solar Inverters, EV Powertrains & Micro-Drip',
        description: 'Hands-on wiring, inverter programming, hall-sensor multimeter diagnostics, and hydraulic pipe sizing.',
        badge: 'Month 2'
      },
      {
        stage: 'PROJECT',
        title: 'Supervised Real-World Field Installation',
        description: 'Participate in a live 3kW PM Surya Ghar rooftop installation or complete EV scooter battery overhaul.',
        badge: 'Month 3'
      },
      {
        stage: 'PORTFOLIO',
        title: 'Certified Skill Credentials & Trade Card',
        description: 'NSDC/JREDA recognized certification, safety logbook, and verified customer testimonials.',
        badge: 'Month 3-4'
      },
      {
        stage: 'OPPORTUNITY',
        title: 'Independent Service Contracting or Dealerships',
        description: 'Operate an EV repair hub, partner with solar EPC companies, or run a plumbing and pump service enterprise.',
        badge: 'Month 4+'
      }
    ],
    targetRoles: ['Certified Solar Rooftop Contractor', 'Electric Vehicle Service Specialist', 'Smart Irrigation System Lead'],
    recommendedCourseIds: ['solar-rooftop-installation-maintenance', 'ev-two-wheeler-service-diagnostics', 'smart-drip-irrigation-polyhouse', 'modern-plumbing-rainwater-harvesting'],
    inDemandDistricts: ['Giridih', 'Ranchi', 'Hazaribagh', 'East Singhbhum', 'Dhanbad', 'Palamu']
  },
  {
    id: 'business-and-entrepreneurship',
    title: 'Business & Entrepreneurship',
    subtitle: 'Launch, formalize, finance, and expand sustainable commercial enterprises.',
    iconName: 'TrendingUp',
    color: '#1B3B2B',
    accentBg: 'rgba(27, 59, 43, 0.08)',
    timeCommitment: '3 - 4 Months',
    earningPotential: '₹50,000 - ₹2,00,000+ / month',
    description: 'Learn formal accounting, GST compliance, Mudra/PMEGP loan underwriting, inventory management, and digital customer acquisition.',
    steps: [
      {
        stage: 'START',
        title: 'Opportunity Mapping & Viability Check',
        description: 'Analyze local unmet demand in your taluk/district, margins, competitors, and required upfront capital.',
        badge: 'Month 1'
      },
      {
        stage: 'SKILLS',
        title: 'Tally Prime, Taxation & Loan DPR Writing',
        description: 'Master bookkeeping, unit economics, CIBIL management, and drafting bankable project reports.',
        badge: 'Month 2'
      },
      {
        stage: 'PROJECT',
        title: 'PMEGP Subsidy or Mudra Loan Application',
        description: 'File a complete online application with MSME Udyam registration and clear cash-flow projections.',
        badge: 'Month 2-3'
      },
      {
        stage: 'PORTFOLIO',
        title: 'Registered Enterprise & Digital Storefront',
        description: 'GSTIN, Current Account, Google Business Profile, WhatsApp catalog, and UPI soundbox integration.',
        badge: 'Month 3'
      },
      {
        stage: 'OPPORTUNITY',
        title: 'Sustainable Growth & Team Employment',
        description: 'Expand business footprint, hire youth from your community, and access credit lines for working capital.',
        badge: 'Month 4+'
      }
    ],
    targetRoles: ['MSME Founder', 'Tally & GST Consultant', 'Retail Enterprise Manager', 'Cooperative Business Lead'],
    recommendedCourseIds: ['local-business-accounting-tally-gst', 'financial-literacy-mudra-loans', 'digital-marketing-local-business', 'spoken-english-workplace-confidence'],
    inDemandDistricts: ['All 24 Districts of Jharkhand']
  }
];
