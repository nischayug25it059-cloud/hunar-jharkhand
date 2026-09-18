// src/pages/Home.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Compass,
  Briefcase,
  Layers,
  Award,
  BookOpen,
  Volume2,
  Play,
  Pause,
  ExternalLink,
  ChevronRight,
  Star,
  Users,
  Clock,
  ShieldCheck,
  TrendingUp,
  Flame,
  Globe,
  QrCode
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA } from '../data/courses';
import { CAREER_PATHS_DATA } from '../data/careers';
import { SUPPORTED_LANGUAGES, LanguageCode } from '../data/translations';
import { TribalMotif } from '../components/TribalMotif';

export const Home: React.FC = () => {
  const { user, language, setLanguage, t, isBookmarked, toggleBookmark } = useApp();
  const navigate = useNavigate();

  // Audio preview simulation in Language Section
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeAudioLang, setActiveAudioLang] = useState<'hi' | 'en' | 'sat'>('hi');

  // Interactive Career Path selection
  const [selectedCareerId, setSelectedCareerId] = useState(CAREER_PATHS_DATA[0].id);
  const activeCareer = CAREER_PATHS_DATA.find((c) => c.id === selectedCareerId) || CAREER_PATHS_DATA[0];

  // Featured courses (top 6)
  const featuredCourses = COURSES_DATA.filter((c) => c.isFeatured).slice(0, 6);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-forest/10 selection:text-forest">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Editorial Apple-Style with Floating Dashboard Visual)     */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 lg:pb-32 overflow-hidden">
        {/* Subtle radial ambient gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
          <div className="absolute top-24 right-10 w-[450px] h-[450px] bg-terracotta/5 rounded-full blur-3xl" />
          <div className="absolute top-40 left-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>

        {/* Background subtle geometric tribal motif */}
        <div className="absolute right-[-100px] top-20 text-forest select-none pointer-events-none opacity-40">
          <TribalMotif variant="geometric-grid" opacity={0.05} className="w-[600px] h-[600px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-subtle border border-borderLight mb-6">
                <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-forest">
                  {t('hero.eyebrow', 'BUILT FOR THE NEXT GENERATION')}
                </span>
              </div>

              {/* Large Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-charcoal tracking-tight leading-[1.08] mb-6">
                {t('hero.headline_part1', 'Skills that open')}{' '}
                <span className="relative inline-block text-forest">
                  {t('hero.headline_highlight', 'possibilities.')}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-terracotta/40 h-2.5"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-mutedGray leading-relaxed max-w-xl mb-8">
                {t(
                  'hero.subtext',
                  'Learn practical skills, discover your path, and build a verified professional identity that moves with you.'
                )}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
                <Link
                  to="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-forest text-white text-sm font-semibold hover:bg-forest-light transition-all shadow-subtle hover:shadow-card group"
                >
                  <span>{t('hero.cta_explore', 'Explore Skills')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/ai-guide"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-charcoal text-sm font-semibold border border-borderLight hover:bg-borderLight/30 transition-all shadow-subtle"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>{t('hero.cta_ai', 'Meet your AI Guide')}</span>
                </Link>
              </div>

              {/* Micro-Metrics Strip */}
              <div className="pt-6 border-t border-borderLight/80 w-full flex items-center justify-between sm:justify-start sm:gap-8 text-xs">
                <div>
                  <p className="font-extrabold text-charcoal text-base sm:text-lg leading-tight">10,000+</p>
                  <p className="text-mutedGray font-medium text-[11px] uppercase tracking-wide">Demo Learners</p>
                </div>
                <div className="w-px h-8 bg-borderLight" />
                <div>
                  <p className="font-extrabold text-charcoal text-base sm:text-lg leading-tight">50+</p>
                  <p className="text-mutedGray font-medium text-[11px] uppercase tracking-wide">Learning Paths</p>
                </div>
                <div className="w-px h-8 bg-borderLight" />
                <div>
                  <p className="font-extrabold text-charcoal text-base sm:text-lg leading-tight">6 Regional</p>
                  <p className="text-mutedGray font-medium text-[11px] uppercase tracking-wide">Languages</p>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Column: Sophisticated Floating Product Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              {/* Layered Cards Canvas */}
              <div className="relative w-full max-w-[540px] mx-auto h-[480px] sm:h-[520px]">
                {/* Background Tribal Geometric Card Frame */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-forest/10 via-white/40 to-terracotta/10 border border-borderLight/80 shadow-card p-6 overflow-hidden">
                  <div className="absolute top-2 right-2 text-forest/20">
                    <TribalMotif variant="diamond-lattice" opacity={0.15} className="w-48 h-48" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-mutedGray mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-forest uppercase font-bold">
                      JH-PLATFORM-PREVIEW // LIVE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                {/* Card 1: AI Recommendation Card (Top Left) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-0 sm:left-4 z-30 w-72 sm:w-80 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-elevated border border-borderLight/80"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-forest/10 text-forest flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-charcoal">AI Career Recommendation</p>
                      <p className="text-[10px] text-mutedGray">Personalized for Class 12 • Ranchi</p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-background/80 text-[11px] text-charcoal space-y-1">
                    <div className="flex items-center gap-1.5 text-forest font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Step 1: Excel & Business Analytics</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-mutedGray pl-5">
                      <span>Step 2: Python Programming</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-mutedGray pl-5">
                      <span>Step 3: Direct Portfolio Project</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Course Progress & Active Learning (Center Right) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-36 right-0 sm:right-2 z-20 w-68 sm:w-76 rounded-2xl bg-white p-4 shadow-float border border-borderLight"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-terracotta/10 text-terracotta">
                      Local Enterprise
                    </span>
                    <span className="text-[11px] font-bold text-forest">84% Done</span>
                  </div>
                  <h4 className="text-xs font-bold text-charcoal mb-1">
                    Scientific Lac Cultivation & Shellac Processing
                  </h4>
                  <div className="w-full bg-borderLight/70 h-1.5 rounded-full overflow-hidden my-2">
                    <div className="bg-forest h-full rounded-full w-[84%]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-mutedGray">
                    <span>14 / 16 Lessons</span>
                    <span className="text-charcoal font-semibold">Certificate Ready</span>
                  </div>
                </motion.div>

                {/* Card 3: Live Portfolio & Verified Identity (Bottom Left) */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-6 left-2 sm:left-6 z-30 w-76 sm:w-84 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-elevated border border-borderLight"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-emerald-900 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      BK
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-charcoal truncate">Birsa Kumar</h4>
                        <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                      </div>
                      <p className="text-[10px] text-mutedGray">Ranchi • Portfolio Strength: 84%</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-forest/10 text-forest">
                      3 Badges
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-borderLight/60 flex items-center justify-between text-[10px]">
                    <span className="text-mutedGray">Skills: Excel · Lac · Python</span>
                    <Link to="/portfolio" className="text-forest font-bold hover:underline flex items-center gap-0.5">
                      View <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* Card 4: Verified Certificate Preview Tag (Bottom Right Floating) */}
                <motion.div
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-2 right-2 sm:right-6 z-40 bg-[#151515] text-white p-3 rounded-2xl shadow-elevated border border-white/10 flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-gold/20 text-gold flex items-center justify-center">
                    <QrCode className="w-4 h-4 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#D4A853] font-bold">JH-CERT-2026</p>
                    <p className="text-[9px] text-[#A6AEA8]">QR Cryptographic Verify</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MINIMALIST TRUST & STATS STRIP                                         */}
      {/* ========================================================================= */}
      <section className="py-8 bg-white border-y border-borderLight/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-forest mb-1">
                {t('trust.learn_tag', 'LEARN')}
              </span>
              <p className="text-base sm:text-lg font-extrabold text-charcoal">50+ Curated Courses</p>
              <p className="text-xs text-mutedGray">Modern tech, trades & local crafts</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-terracotta mb-1">
                {t('trust.build_tag', 'BUILD')}
              </span>
              <p className="text-base sm:text-lg font-extrabold text-charcoal">10+ Career Roadmaps</p>
              <p className="text-xs text-mutedGray">Step-by-step paths to income</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold mb-1">
                {t('trust.show_tag', 'SHOW')}
              </span>
              <p className="text-base sm:text-lg font-extrabold text-charcoal">Live Digital Portfolio</p>
              <p className="text-xs text-mutedGray">Auto-generated with every course</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-forest mb-1">
                {t('trust.prove_tag', 'PROVE')}
              </span>
              <p className="text-base sm:text-lg font-extrabold text-charcoal">QR-Verified Certificates</p>
              <p className="text-xs text-mutedGray">Verifiable by employers nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED COURSES SHOWCASE (Horizontal / High-Value Cards)              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-forest mb-2 block">
                {t('courses.section_tag', 'CURATED LEARNING')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                {t('courses.heading', 'Learn something that moves you forward.')}
              </h2>
              <p className="text-sm sm:text-base text-mutedGray mt-2 max-w-xl">
                {t(
                  'courses.subheading',
                  'From modern digital skills to high-value indigenous enterprise and certified trades.'
                )}
              </p>
            </div>
            <Link
              to="/courses"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-forest-light transition-colors group"
            >
              <span>{t('courses.view_all', 'View All 20+ Courses')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {featuredCourses.map((course) => {
              const bookmarked = isBookmarked(course.id);
              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-3xl border border-borderLight overflow-hidden hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className={`h-40 bg-gradient-to-br ${course.gradient} p-5 relative overflow-hidden text-white flex flex-col justify-between`}>
                      <div className="absolute right-0 bottom-0 text-white/10 pointer-events-none">
                        <TribalMotif variant="diamond-lattice" opacity={0.2} className="w-32 h-32" />
                      </div>
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white">
                          {course.category}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleBookmark(course.id);
                          }}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors"
                          title="Save course"
                        >
                          <Star className={`w-4 h-4 ${bookmarked ? 'fill-gold text-gold' : 'text-white'}`} />
                        </button>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-1 text-gold text-xs font-semibold mb-1">
                          <span>★ {course.rating}</span>
                          <span className="text-white/70 text-[10px]">({course.reviewsCount})</span>
                          <span className="mx-1 text-white/40">•</span>
                          <span className="text-white/80 text-[10px]">{course.studentsCount}+ learners</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-base font-bold text-charcoal group-hover:text-forest transition-colors mb-2 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-mutedGray line-clamp-2 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      {/* Details Pills */}
                      <div className="flex flex-wrap gap-2 text-[11px] text-charcoal/70 mb-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-background border border-borderLight/60">
                          <Clock className="w-3 h-3 text-mutedGray" />
                          {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-background border border-borderLight/60">
                          <Award className="w-3 h-3 text-mutedGray" />
                          {course.level}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-background border border-borderLight/60">
                          <Globe className="w-3 h-3 text-mutedGray" />
                          {course.language.split('&')[0]}
                        </span>
                      </div>

                      {/* Key Skills Tags */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {course.skillsGained.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-forest/5 text-forest font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0 border-t border-borderLight/40 mt-2">
                    <div className="flex items-center justify-between pt-3">
                      <span className="text-[11px] text-mutedGray">
                        By {course.instructor.name.split(' ')[0]} ({course.instructor.organization.split(' ')[0]})
                      </span>
                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-forest hover:text-forest-light group/link"
                      >
                        <span>{t('courses.explore', 'View Syllabus')}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CAREER PATH ROADMAP SECTION (Interactive & Stepwise)                   */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-borderLight relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-forest mb-2 block">
              {t('career.section_tag', 'ROADMAPS WITH CLARITY')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              {t('career.heading', "Don't just learn. Know where you're going.")}
            </h2>
            <p className="text-sm sm:text-base text-mutedGray mt-2">
              {t(
                'career.subheading',
                'Interactive roadmaps showing every milestone from zero experience to income generation.'
              )}
            </p>
          </div>

          {/* Career Category Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {CAREER_PATHS_DATA.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedCareerId(path.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCareerId === path.id
                    ? 'bg-forest text-white shadow-subtle'
                    : 'bg-background text-charcoal hover:bg-borderLight/60 border border-borderLight'
                }`}
              >
                {path.title}
              </button>
            ))}
          </div>

          {/* Active Roadmap Detailed Card */}
          <div className="bg-background rounded-3xl p-6 sm:p-10 border border-borderLight shadow-card relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-borderLight">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest/10 text-forest mb-2 inline-block">
                  {activeCareer.timeCommitment} Commitment
                </span>
                <h3 className="text-2xl font-bold text-charcoal">{activeCareer.title}</h3>
                <p className="text-sm text-mutedGray max-w-xl mt-1">{activeCareer.description}</p>
              </div>
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-borderLight shadow-subtle">
                <div>
                  <p className="text-[10px] text-mutedGray uppercase tracking-wider font-bold">Earning Potential</p>
                  <p className="text-base font-extrabold text-forest">{activeCareer.earningPotential}</p>
                </div>
                <Link
                  to="/career"
                  className="px-4 py-2 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-colors"
                >
                  Explore Path
                </Link>
              </div>
            </div>

            {/* Step-by-Step Flow: START -> SKILLS -> PROJECT -> PORTFOLIO -> OPPORTUNITY */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {activeCareer.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-borderLight relative group hover:border-forest transition-colors shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded bg-forest/10 text-forest">
                        {step.stage}
                      </span>
                      {step.badge && (
                        <span className="text-[9px] text-mutedGray font-mono">{step.badge}</span>
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-charcoal mb-1 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-mutedGray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-borderLight/40 text-[10px] text-forest font-semibold flex items-center justify-between">
                    <span>Phase {idx + 1}</span>
                    {idx < 4 && <span className="hidden md:inline text-mutedGray">→</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. AI CAREER GUIDE SECTION (Realistic Dark Gradient Chat UI)              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#111A14] text-white relative overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-forest/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-[-60px] top-10 text-forest-light/10 pointer-events-none">
          <TribalMotif variant="geometric-grid" opacity={0.08} className="w-96 h-96" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left AI Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#D4A853] text-[11px] font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('ai.section_tag', 'INTELLIGENT ADVISOR')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                {t('ai.heading', 'Not sure what to learn next?')}
              </h2>
              <p className="text-sm sm:text-base text-[#9FAFA3] leading-relaxed mb-8">
                {t(
                  'ai.subtext',
                  'Your AI Career Guide turns your interests and skills into a practical learning path.'
                )}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-[#CBD8CE]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Trained on 24 Jharkhand district economic opportunities</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#CBD8CE]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Bridges 10th/12th/Graduation into modern private & remote jobs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#CBD8CE]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Auto-populates your course roadmap in one click</span>
                </div>
              </div>

              <Link
                to="/ai-guide"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-charcoal text-sm font-semibold hover:bg-[#F7F5F0] transition-all shadow-float"
              >
                <span>{t('ai.cta', 'Build My Learning Path')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Realistic AI Chat Conversation UI */}
            <div className="lg:col-span-7">
              <div className="bg-[#19241E] rounded-3xl p-5 sm:p-7 border border-white/10 shadow-elevated">
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-forest-light text-white flex items-center justify-center shadow-xs">
                      <Sparkles className="w-4 h-4 text-[#D4A853]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Hunar AI Career Advisor</p>
                      <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Online • Multi-lingual guidance
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#8B988F] bg-white/5 px-2 py-1 rounded-md">
                    Jharkhand Context v2.4
                  </span>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-4 text-xs">
                  {/* User Bubble */}
                  <div className="flex justify-end">
                    <div className="bg-forest-light text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] sm:max-w-[70%] shadow-subtle">
                      <p className="font-medium">
                        "I finished Class 12 in Ranchi and I like computers. What should I learn for a good job?"
                      </p>
                    </div>
                  </div>

                  {/* AI Bubble */}
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-[#E5ECE7] p-4 rounded-2xl rounded-tl-sm max-w-[95%] sm:max-w-[85%] border border-white/10 space-y-3">
                      <p className="leading-relaxed">
                        Great! Since you are in Ranchi with high tech demand, here is your high-probability roadmap:
                      </p>
                      <div className="bg-[#121B15] p-3 rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <span className="w-5 h-5 rounded-full bg-forest text-[10px] flex items-center justify-center font-bold">1</span>
                          <span>Computer Fundamentals & Fast Typing</span>
                        </div>
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <span className="w-5 h-5 rounded-full bg-forest text-[10px] flex items-center justify-center font-bold">2</span>
                          <span>Excel & Business Analytics (Namkum & Doranda MSMEs)</span>
                        </div>
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <span className="w-5 h-5 rounded-full bg-forest text-[10px] flex items-center justify-center font-bold">3</span>
                          <span>Python Automation & SQL Queries</span>
                        </div>
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <span className="w-5 h-5 rounded-full bg-forest text-[10px] flex items-center justify-center font-bold">4</span>
                          <span>Portfolio Project: District Data Dashboard</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#A2B1A6]">
                        Estimated time: 14 weeks • Expected entry salary: ₹22,000 - ₹35,000 / month.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Action Input Preview */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                  <input
                    type="text"
                    disabled
                    placeholder="Ask another question, e.g. 'How do I start Tasar silk business?'"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white/70 placeholder:text-white/40 focus:outline-none"
                  />
                  <Link
                    to="/ai-guide"
                    className="px-4 py-2 rounded-xl bg-forest text-white font-semibold text-xs hover:bg-forest-light transition-colors whitespace-nowrap"
                  >
                    Open Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. REGIONAL LANGUAGE SECTION                                              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-forest mb-2 block">
                {t('lang.section_tag', 'REGIONAL ACCESS')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
                {t('lang.heading', 'Learn in the language that feels like home.')}
              </h2>
              <p className="text-sm sm:text-base text-mutedGray leading-relaxed mb-8">
                {t(
                  'lang.subtext',
                  'Course content can be translated, subtitled, and dubbed into regional languages to make complex concepts intuitive.'
                )}
              </p>

              {/* Language Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {SUPPORTED_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code as LanguageCode)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      language === l.code
                        ? 'bg-forest text-white shadow-subtle'
                        : 'bg-white text-charcoal border border-borderLight hover:bg-background'
                    }`}
                  >
                    {l.nativeLabel}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white border border-borderLight/80 text-xs text-mutedGray space-y-1.5">
                <p className="font-semibold text-charcoal">
                  Multi-lingual Audio & Subtitles
                </p>
                <p>
                  Audio voiceovers and bilingual transcriptions are continuously recorded in collaboration with tribal language scholars from Ranchi University.
                </p>
              </div>
            </div>

            {/* Right: Audio Player Style UI */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-card max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest/10 text-forest">
                    {t('lang.audio_preview', 'Lesson Audio Preview')}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveAudioLang('hi')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        activeAudioLang === 'hi' ? 'bg-forest text-white' : 'text-mutedGray'
                      }`}
                    >
                      हिन्दी
                    </button>
                    <button
                      onClick={() => setActiveAudioLang('en')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        activeAudioLang === 'en' ? 'bg-forest text-white' : 'text-mutedGray'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setActiveAudioLang('sat')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        activeAudioLang === 'sat' ? 'bg-forest text-white' : 'text-mutedGray'
                      }`}
                    >
                      संथाली
                    </button>
                  </div>
                </div>

                {/* Lesson Track Card */}
                <div className="p-4 rounded-2xl bg-background border border-borderLight mb-6">
                  <p className="text-[11px] font-bold text-charcoal mb-1">
                    Lesson 3: Introduction to Host Trees (Kusum & Ber)
                  </p>
                  <p className="text-[10px] text-mutedGray mb-3">
                    Scientific Lac Cultivation • Speaker: Dr. Anand Munda
                  </p>

                  {/* Waveform Visualization */}
                  <div className="h-10 flex items-center justify-between gap-1 px-2 py-1 bg-white rounded-xl border border-borderLight/60">
                    {[40, 70, 30, 90, 60, 45, 80, 50, 95, 30, 65, 85, 40, 75, 90, 35, 60, 80, 50, 70].map(
                      (h, i) => (
                        <span
                          key={i}
                          style={{ height: `${isPlayingAudio ? (h * Math.random() + 20) % 100 : h}%` }}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            i < 10 ? 'bg-forest' : 'bg-borderLight'
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Player Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest-light transition-transform active:scale-95 shadow-subtle"
                    >
                      {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <div>
                      <p className="text-xs font-bold text-charcoal">
                        {isPlayingAudio ? 'Playing snippet (0:42)' : 'Tap to Listen'}
                      </p>
                      <p className="text-[10px] text-mutedGray">
                        Language: {activeAudioLang === 'hi' ? 'Hindi' : activeAudioLang === 'en' ? 'English' : 'Santali (Ol Chiki)'}
                      </p>
                    </div>
                  </div>
                  <Volume2 className="w-5 h-5 text-mutedGray" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PORTFOLIO & AUTO-CREATION SECTION                                      */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-borderLight relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-forest mb-2 block">
                {t('portfolio.section_tag', 'SHOWCASE YOUR WORK')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
                {t('portfolio.heading', 'Your skills deserve a place to be seen.')}
              </h2>
              <p className="text-sm sm:text-base text-mutedGray leading-relaxed mb-6">
                {t(
                  'portfolio.subtext',
                  'Every course you complete, project you build, and credential you earn automatically updates your shareable digital portfolio.'
                )}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Public shareable URL: hunar.jharkhand.gov/p/{user.name.toLowerCase().replace(' ', '')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Auto-updated with verified certificates and code repositories</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Direct QR code sharing for recruiters & business clients</span>
                </div>
              </div>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-all shadow-subtle"
              >
                <span>{t('portfolio.view_sample', 'View Live Portfolio Preview')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right: Floating Portfolio Preview Card */}
            <div className="lg:col-span-7">
              <div className="bg-background rounded-3xl p-6 sm:p-8 border border-borderLight shadow-elevated relative">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-borderLight">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-forest text-white flex items-center justify-center font-extrabold text-lg shadow-subtle">
                      BK
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-charcoal">BIRSA KUMAR</h3>
                        <ShieldCheck className="w-4 h-4 text-forest" />
                      </div>
                      <p className="text-xs text-mutedGray">Digital Skills & Local Enterprise • Ranchi, Jharkhand</p>
                    </div>
                  </div>
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-borderLight shadow-subtle text-right">
                    <p className="text-[10px] uppercase tracking-wider text-mutedGray font-bold">Portfolio Strength</p>
                    <p className="text-base font-extrabold text-forest">84% Complete</p>
                  </div>
                </div>

                {/* Skills Row */}
                <div className="py-4 border-b border-borderLight">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-mutedGray mb-2">Verified Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Excel Analytics', 'Scientific Lac Cultivation', 'Digital Marketing', 'Python Fundamentals', 'Tally Prime'].map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-full bg-white text-charcoal text-xs font-medium border border-borderLight/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-borderLight">
                    <p className="text-xs font-bold text-charcoal mb-1">Jharkhand Artisan Marketplace</p>
                    <p className="text-[11px] text-mutedGray line-clamp-2">
                      Connected 40+ local bamboo artisans directly with urban buyers using WhatsApp & React.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-borderLight">
                    <p className="text-xs font-bold text-charcoal mb-1">Khunti Lac FPO Pricing Model</p>
                    <p className="text-[11px] text-mutedGray line-clamp-2">
                      Automated seedlac vs button lac moisture tracking in Excel for 120+ local harvesters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CERTIFICATES SECTION (Perspective 3D Presentation)                     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: 3D-Tilt Certificate Display */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg">
                <div className="bg-[#FAF8F3] rounded-3xl p-8 border-2 border-forest/30 shadow-elevated relative overflow-hidden transform lg:-rotate-1 transition-transform duration-300 hover:rotate-0">
                  {/* Subtle Corner Tribal Geometry */}
                  <div className="absolute top-0 right-0 text-forest/20">
                    <TribalMotif variant="corner-ornament" opacity={0.3} className="w-28 h-28" />
                  </div>
                  <div className="absolute bottom-0 left-0 text-terracotta/20 transform rotate-180">
                    <TribalMotif variant="corner-ornament" opacity={0.2} className="w-24 h-24" />
                  </div>

                  {/* Certificate Heading */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/10 text-forest text-[10px] font-bold uppercase tracking-widest mb-3">
                      <Award className="w-3.5 h-3.5" />
                      OFFICIAL CREDENTIAL
                    </div>
                    <h3 className="text-xl font-extrabold text-charcoal tracking-wide">
                      CERTIFICATE OF COMPLETION
                    </h3>
                    <p className="text-[10px] text-mutedGray mt-0.5">HUNAR JHARKHAND SKILL INITIATIVE</p>
                  </div>

                  {/* Recipient */}
                  <div className="text-center my-5">
                    <p className="text-[11px] text-mutedGray uppercase tracking-wider font-semibold">This is proudly presented to</p>
                    <p className="text-2xl font-extrabold text-charcoal my-1 font-serif">Birsa Kumar</p>
                    <p className="text-xs text-mutedGray">Ranchi, Jharkhand</p>
                  </div>

                  {/* Course Details */}
                  <div className="bg-white/80 p-4 rounded-2xl border border-borderLight my-4 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-forest font-bold">For successfully mastering</p>
                    <p className="text-sm font-bold text-charcoal mt-0.5">Scientific Lac Cultivation & Value Addition</p>
                    <p className="text-[10px] text-mutedGray mt-1">Grade: Distinction (94%) • 20 Instructional Hours</p>
                  </div>

                  {/* Verification Bottom Bar */}
                  <div className="pt-4 border-t border-borderLight/80 flex items-center justify-between text-[10px] text-mutedGray">
                    <div>
                      <p className="font-mono text-charcoal font-bold">ID: JH-SKILL-2026-8942</p>
                      <p>Issued: February 18, 2026</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-lg border border-borderLight">
                      <QrCode className="w-5 h-5 text-charcoal" />
                      <span className="font-mono font-bold text-forest text-[9px]">SCAN TO VERIFY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Information */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-forest mb-2 block">
                {t('cert.section_tag', 'CRYPTOGRAPHICALLY VERIFIED')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
                {t('cert.heading', 'Credentials that employers trust.')}
              </h2>
              <p className="text-sm sm:text-base text-mutedGray leading-relaxed mb-6">
                {t(
                  'cert.subtext',
                  'Earn QR-verifiable certificates linked to your digital portfolio with unique cryptographic hashes.'
                )}
              </p>

              <div className="space-y-3 mb-8 text-xs text-charcoal font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Tamper-proof online verification URL on Government servers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Co-signed by industry partners (ICAR, JHARCRAFT, Tata Steel Services)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Print-ready high-resolution PDF download</span>
                </div>
              </div>

              <Link
                to="/certificates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-charcoal text-xs font-semibold border border-borderLight hover:bg-borderLight/40 transition-colors shadow-subtle"
              >
                <span>{t('cert.verify_btn', 'Verify Any Certificate')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. LOCAL OPPORTUNITY CATEGORIES                                           */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-t border-borderLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-forest mb-2 block">
              {t('opp.section_tag', 'REGIONAL POTENTIAL')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              {t('opp.heading', 'Skills rooted locally. Opportunities without limits.')}
            </h2>
            <p className="text-sm sm:text-base text-mutedGray mt-2">
              {t(
                'opp.subtext',
                'Bridging traditional tribal strengths with high-growth digital markets.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'Digital Work', desc: 'Remote data & coding', icon: Compass, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Local Enterprise', desc: 'Lac, Silk, Bamboo', icon: TrendingUp, color: 'text-amber-700', bg: 'bg-amber-50' },
              { title: 'Skilled Trades', desc: 'Solar, EV, Irrigation', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Freelancing', desc: 'Design, Video, Ads', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: 'Business', desc: 'Tally & Mudra loans', icon: ShieldCheck, color: 'text-forest', bg: 'bg-forest/10' },
              { title: 'Technology', desc: 'Python, Web & AI', icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50' },
            ].map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={idx}
                  to={`/courses?cat=${encodeURIComponent(cat.title)}`}
                  className="p-4 rounded-2xl bg-background border border-borderLight hover:border-forest hover:shadow-subtle transition-all flex flex-col items-center text-center group"
                >
                  <div className={`w-10 h-10 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-charcoal mb-0.5">{cat.title}</h4>
                  <p className="text-[10px] text-mutedGray">{cat.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CTA SECTION                                                     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#182C21] via-forest to-[#12231A] text-white p-8 sm:p-14 text-center overflow-hidden shadow-float border border-forest/30">
            {/* Subtle Tribal Glow */}
            <div className="absolute -top-24 -left-24 text-forest-light/10 pointer-events-none">
              <TribalMotif variant="geometric-grid" opacity={0.1} className="w-80 h-80" />
            </div>
            <div className="absolute -bottom-24 -right-24 text-terracotta/10 pointer-events-none">
              <TribalMotif variant="diamond-lattice" opacity={0.1} className="w-80 h-80" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-gold mb-6 inline-block">
              JOIN 10,000+ YOUTH ACROSS JHARKHAND
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight mb-4">
              {t('cta.heading', 'Your next skill could change your next step.')}
            </h2>

            <p className="text-sm sm:text-base text-[#B2C0B6] max-w-lg mx-auto mb-8 leading-relaxed">
              {t(
                'cta.subtext',
                'Join thousands of ambitious youth across Jharkhand transforming their careers today.'
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/signup"
                className="px-8 py-3.5 rounded-full bg-white text-charcoal text-sm font-semibold hover:bg-[#FAF9F5] transition-all shadow-subtle group flex items-center gap-1.5"
              >
                <span>{t('cta.start', 'Start Learning Free')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/career"
                className="px-7 py-3.5 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                {t('cta.explore_careers', 'Explore Career Paths')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
