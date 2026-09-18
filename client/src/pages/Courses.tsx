// src/pages/Courses.tsx
import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  Star,
  Clock,
  Award,
  Globe,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA, COURSE_CATEGORIES, Course } from '../data/courses';
import { JHARKHAND_DISTRICTS } from '../data/districts';
import { TribalMotif } from '../components/TribalMotif';

export const Courses: React.FC = () => {
  const { user, isBookmarked, toggleBookmark, isEnrolled, enrollCourse, t } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCat = searchParams.get('cat') || 'All';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');

  // Filter logic
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      // Category
      if (selectedCategory !== 'All' && course.category !== selectedCategory) {
        return false;
      }
      // Level
      if (selectedLevel !== 'All' && course.level !== selectedLevel) {
        return false;
      }
      // Language
      if (selectedLanguage !== 'All' && !course.language.toLowerCase().includes(selectedLanguage.toLowerCase())) {
        return false;
      }
      // District relevance
      if (selectedDistrict !== 'All') {
        const matchesDistrict =
          course.districtRelevance.includes(selectedDistrict) ||
          course.districtRelevance.includes('All Districts of Jharkhand') ||
          course.districtRelevance.includes('All 24 Districts of Jharkhand');
        if (!matchesDistrict) return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesDesc = course.description.toLowerCase().includes(q);
        const matchesSkill = course.skillsGained.some((s) => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesSkill) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedLevel, selectedLanguage, selectedDistrict, searchQuery]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 text-center sm:text-left relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACCREDITED COURSE DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Explore your next skill.
          </h1>
          <p className="text-sm sm:text-base text-mutedGray mt-2 max-w-2xl leading-relaxed">
            Choose from {COURSES_DATA.length} practical, industry-aligned skill programs designed for the youth of Jharkhand.
          </p>
        </div>

        {/* Search & Secondary Filter Controls */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-borderLight shadow-card mb-8">
          {/* Main Search Input */}
          <div className="relative mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedGray" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, skills, tools (e.g. Python, Lac, Tally, Solar, Marketing)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-background border border-borderLight focus:outline-none focus:border-forest text-xs sm:text-sm text-charcoal placeholder:text-mutedGray"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-mutedGray hover:text-charcoal font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Primary Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-4">
            {COURSE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-forest text-white shadow-subtle'
                    : 'bg-background text-charcoal hover:bg-borderLight/50 border border-borderLight'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dropdown Filters (Level, Language, District) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-borderLight/60">
            {/* Level */}
            <div>
              <label className="text-[11px] font-bold text-mutedGray uppercase tracking-wider block mb-1">
                Experience Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-background border border-borderLight text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="text-[11px] font-bold text-mutedGray uppercase tracking-wider block mb-1">
                Instruction Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-background border border-borderLight text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="All">All Languages</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Santali">Santali</option>
                <option value="Ho">Ho</option>
                <option value="Mundari">Mundari</option>
              </select>
            </div>

            {/* District Relevance */}
            <div>
              <label className="text-[11px] font-bold text-mutedGray uppercase tracking-wider block mb-1">
                District Relevance
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-background border border-borderLight text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="All">All 24 Districts</option>
                {JHARKHAND_DISTRICTS.map((d) => (
                  <option key={d.id} value={d.name.split(' ')[0]}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-mutedGray">
          <p>
            Showing <span className="font-bold text-charcoal">{filteredCourses.length}</span> courses
            {selectedCategory !== 'All' && <span> in <strong className="text-forest">{selectedCategory}</strong></span>}
          </p>
          {(selectedCategory !== 'All' || selectedLevel !== 'All' || selectedLanguage !== 'All' || selectedDistrict !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSelectedLanguage('All');
                setSelectedDistrict('All');
                setSearchQuery('');
                searchParams.delete('cat');
                setSearchParams(searchParams);
              }}
              className="text-terracotta hover:underline font-bold"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-borderLight max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-mutedGray mx-auto mb-3 opacity-40" />
            <h3 className="text-base font-bold text-charcoal mb-1">No matching courses found</h3>
            <p className="text-xs text-mutedGray mb-6">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-forest text-white text-xs font-semibold"
            >
              Show All Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredCourses.map((course) => {
              const bookmarked = isBookmarked(course.id);
              const enrolled = isEnrolled(course.id);

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-3xl border border-borderLight overflow-hidden hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div
                      className={`h-40 bg-gradient-to-br ${course.gradient} p-5 relative overflow-hidden text-white flex flex-col justify-between`}
                    >
                      <div className="absolute right-0 bottom-0 text-white/10 pointer-events-none">
                        <TribalMotif variant="diamond-lattice" opacity={0.25} className="w-32 h-32" />
                      </div>
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white">
                          {course.category}
                        </span>
                        <button
                          onClick={() => toggleBookmark(course.id)}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors"
                          title="Bookmark course"
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white text-white' : 'text-white'}`} />
                        </button>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-1 text-gold text-xs font-semibold">
                          <span>★ {course.rating}</span>
                          <span className="text-white/70 text-[10px]">({course.reviewsCount})</span>
                          <span className="mx-1 text-white/40">•</span>
                          <span className="text-white/80 text-[10px]">{course.studentsCount}+ learners</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-base font-bold text-charcoal group-hover:text-forest transition-colors mb-2 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-mutedGray line-clamp-2 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      {/* Detail Badges */}
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

                      {/* Skills Tags */}
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

                  {/* Action Bottom Bar */}
                  <div className="p-6 pt-0 border-t border-borderLight/50 mt-2">
                    <div className="flex items-center justify-between pt-3">
                      {enrolled ? (
                        <Link
                          to={`/learn/${course.id}`}
                          className="px-4 py-2 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-colors flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                          Continue Learning
                        </Link>
                      ) : (
                        <button
                          onClick={() => enrollCourse(course.id)}
                          className="px-4 py-2 rounded-xl bg-forest/10 hover:bg-forest text-forest hover:text-white text-xs font-semibold transition-all"
                        >
                          Enroll Free
                        </button>
                      )}

                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-charcoal hover:text-forest transition-colors"
                      >
                        <span>Syllabus</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
