// src/data/users.ts

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  date: string;
}

export interface UserCertificate {
  id: string;
  courseId: string;
  courseTitle: string;
  category: string;
  issueDate: string;
  grade: string;
  verificationCode: string;
  instructorName: string;
}

export interface CourseEnrollment {
  courseId: string;
  progress: number; // 0 to 100
  completedLessons: string[];
  enrolledDate: string;
  isCompleted: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  district: string;
  education: string;
  preferredLanguage: string;
  interests: string[];
  skills: string[];
  careerGoal: string;
  bio: string;
  phone?: string;
  avatarUrl?: string;
  portfolioStrength: number;
  projects: PortfolioProject[];
  certificates: UserCertificate[];
  enrolledCourses: CourseEnrollment[];
  bookmarkedCourseIds: string[];
  joinedDate: string;
}

export const DEFAULT_DEMO_USER: UserProfile = {
  id: 'user-birsa-kumar',
  name: 'Birsa Kumar',
  email: 'birsa.kumar@adivasi-skills.in',
  district: 'Ranchi',
  education: 'Diploma in Computer Science & Trades',
  preferredLanguage: 'Hindi & English',
  interests: ['Digital Analytics', 'Local Product Branding', 'Web Apps', 'Lac Processing'],
  skills: ['Excel Analytics', 'Digital Marketing', 'Python Scripting', 'Tally Prime', 'Business Communication'],
  careerGoal: 'Launch an agro-forest produce digital storefront and work in tech operations.',
  bio: 'Ambitious 21-year-old learner from Ranchi passionate about leveraging digital tools, data analytics, and modern business techniques to elevate local Jharkhand produce into global markets.',
  portfolioStrength: 84,
  joinedDate: 'January 2026',
  projects: [
    {
      id: 'proj-1',
      title: 'Jharkhand Artisan Direct Marketplace',
      description: 'Built a responsive prototype connecting tribal bamboo artisans and Sohrai painters directly with urban interior designers, reducing middleman commission by 35%.',
      tags: ['React', 'Tailwind CSS', 'Figma', 'Local Commerce'],
      link: 'https://artisan-jharkhand.preview.dev',
      github: 'https://github.com/birsakumar/artisan-portal',
      date: 'Feb 2026'
    },
    {
      id: 'proj-2',
      title: 'Khunti Lac FPO Inventory & Pricing Dashboard',
      description: 'Automated seedlac vs button lac moisture tracking, batch grading, and price forecasting in Excel and Google Sheets for 120+ local harvesters in Namkum & Khunti.',
      tags: ['Excel Analytics', 'Power Query', 'Agri-Business', 'Financial Modeling'],
      link: 'https://sheets.google.com/demo-fpo',
      date: 'Jan 2026'
    },
    {
      id: 'proj-3',
      title: 'Hyper-Local Social Campaign for Namkum Organic Honey',
      description: 'Executed an Instagram Reels and WhatsApp Business catalog launch for a rural SHG, generating 48 paid orders in 2 weeks with a ₹1,200 ad spend.',
      tags: ['Meta Ads', 'Canva Design', 'WhatsApp Funnels', 'Copywriting'],
      date: 'March 2026'
    }
  ],
  certificates: [
    {
      id: 'cert-jh-2026-8942',
      courseId: 'excel-business-analytics',
      courseTitle: 'Excel & Business Data Analytics for Work',
      category: 'Technology',
      issueDate: 'February 18, 2026',
      grade: 'Distinction (94%)',
      verificationCode: 'JH-EXCEL-94827-X',
      instructorName: 'Deepika Minz (Tata Steel Services)'
    },
    {
      id: 'cert-jh-2026-7731',
      courseId: 'lac-cultivation-value-addition',
      courseTitle: 'Scientific Lac Cultivation & Value Addition',
      category: 'Local Enterprise',
      issueDate: 'January 29, 2026',
      grade: 'First Class with Honors (91%)',
      verificationCode: 'JH-LAC-77319-K',
      instructorName: 'Dr. Anand Munda (ICAR Namkum)'
    },
    {
      id: 'cert-jh-2026-6194',
      courseId: 'digital-marketing-local-business',
      courseTitle: 'Digital Marketing & Social Media for Local Businesses',
      category: 'Freelancing',
      issueDate: 'March 04, 2026',
      grade: 'Distinction (96%)',
      verificationCode: 'JH-MKT-61944-D',
      instructorName: 'Priyanka Hansda (Kolhan Digital)'
    }
  ],
  enrolledCourses: [
    {
      courseId: 'excel-business-analytics',
      progress: 100,
      completedLessons: ['lesson-1', 'lesson-2', 'lesson-3', 'lesson-4'],
      enrolledDate: 'Jan 15, 2026',
      isCompleted: true
    },
    {
      courseId: 'lac-cultivation-value-addition',
      progress: 100,
      completedLessons: ['lesson-1', 'lesson-2', 'lesson-3', 'lesson-4'],
      enrolledDate: 'Jan 02, 2026',
      isCompleted: true
    },
    {
      courseId: 'digital-marketing-local-business',
      progress: 100,
      completedLessons: ['lesson-1', 'lesson-2', 'lesson-3', 'lesson-4'],
      enrolledDate: 'Feb 10, 2026',
      isCompleted: true
    },
    {
      courseId: 'python-for-beginners',
      progress: 62,
      completedLessons: ['lesson-1', 'lesson-2'],
      enrolledDate: 'Feb 24, 2026',
      isCompleted: false
    },
    {
      courseId: 'solar-rooftop-installation-maintenance',
      progress: 25,
      completedLessons: ['lesson-1'],
      enrolledDate: 'March 01, 2026',
      isCompleted: false
    }
  ],
  bookmarkedCourseIds: [
    'tasar-silk-sericulture',
    'full-stack-web-development',
    'bamboo-product-design-enterprise',
    'financial-literacy-mudra-loans'
  ]
};
