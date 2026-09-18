// src/pages/CourseDetails.tsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  Award,
  Globe,
  Star,
  Users,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Bookmark,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA } from '../data/courses';
import { TribalMotif } from '../components/TribalMotif';

export const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isBookmarked, toggleBookmark, isEnrolled, enrollCourse } = useApp();

  const [copiedShare, setCopiedShare] = useState(false);
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const course = COURSES_DATA.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-background pt-40 pb-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-charcoal mb-3">Course Not Found</h2>
        <p className="text-sm text-mutedGray mb-6">The requested course could not be located in our directory.</p>
        <Link to="/courses" className="px-6 py-2.5 rounded-full bg-forest text-white text-xs font-semibold">
          Browse All Courses
        </Link>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);
  const bookmarked = isBookmarked(course.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleEnrollAndStart = () => {
    if (!enrolled) {
      enrollCourse(course.id);
    }
    navigate(`/learn/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-xs font-semibold text-mutedGray hover:text-charcoal mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Course Directory</span>
        </Link>

        {/* Hero Banner with Course Identity */}
        <div className="bg-white rounded-3xl border border-borderLight overflow-hidden shadow-card p-6 sm:p-10 mb-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-forest/10 text-forest">
                  {course.category}
                </span>
                {course.isLocalSpecialty && (
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-terracotta/10 text-terracotta">
                    Jharkhand Regional Specialty
                  </span>
                )}
                <span className="text-xs text-mutedGray flex items-center gap-1 font-medium">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  <strong className="text-charcoal">{course.rating}</strong> ({course.reviewsCount} reviews)
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-snug mb-4">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-mutedGray leading-relaxed mb-6">
                {course.longDescription}
              </p>

              {/* Fast metadata pills */}
              <div className="flex flex-wrap gap-3 text-xs text-charcoal mb-8">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border border-borderLight">
                  <Clock className="w-4 h-4 text-forest" />
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border border-borderLight">
                  <Award className="w-4 h-4 text-forest" />
                  <span><strong>Level:</strong> {course.level}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border border-borderLight">
                  <Globe className="w-4 h-4 text-forest" />
                  <span><strong>Language:</strong> {course.language}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border border-borderLight">
                  <Users className="w-4 h-4 text-forest" />
                  <span><strong>Learners:</strong> {course.studentsCount}+ Enrolled</span>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-background border border-borderLight max-w-md">
                <div className="w-11 h-11 rounded-xl bg-forest text-white font-bold text-base flex items-center justify-center shadow-xs">
                  {course.instructor.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">{course.instructor.name}</p>
                  <p className="text-[11px] text-mutedGray">{course.instructor.title}</p>
                  <p className="text-[10px] text-forest font-semibold mt-0.5">{course.instructor.organization}</p>
                </div>
              </div>
            </div>

            {/* Right Action Sidebar Card */}
            <div className="lg:col-span-4 bg-background rounded-2xl p-6 border border-borderLight flex flex-col justify-between">
              <div>
                <div className={`h-24 rounded-xl bg-gradient-to-br ${course.gradient} p-4 text-white relative overflow-hidden mb-5 flex flex-col justify-between`}>
                  <div className="text-[10px] font-mono tracking-widest text-white/80 uppercase font-bold">
                    OFFICIAL CURRICULUM
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{course.lessonsCount} Video Lessons</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/20 text-white font-bold">Free</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-xs text-charcoal">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <span>Full lifetime access to lesson materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <span>Bilingual audio & transcripts in regional languages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <span>Verified QR certificate on completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <span>Automatic sync with personal digital portfolio</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-borderLight">
                <button
                  onClick={handleEnrollAndStart}
                  className="w-full py-3.5 rounded-full bg-forest text-white font-semibold text-xs hover:bg-forest-light transition-all shadow-subtle flex items-center justify-center gap-2"
                >
                  <span>{enrolled ? 'Go to Virtual Classroom' : 'Enroll Now (100% Free)'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => toggleBookmark(course.id)}
                    className="py-2.5 rounded-xl bg-white border border-borderLight text-xs font-semibold text-charcoal hover:bg-borderLight/40 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-forest text-forest' : 'text-mutedGray'}`} />
                    <span>{bookmarked ? 'Saved' : 'Save'}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="py-2.5 rounded-xl bg-white border border-borderLight text-xs font-semibold text-charcoal hover:bg-borderLight/40 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5 text-mutedGray" />
                    <span>{copiedShare ? 'Copied Link!' : 'Share'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Modules / Syllabus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-card">
              <h2 className="text-xl font-bold text-charcoal mb-4">Course Curriculum & Modules</h2>
              <p className="text-xs text-mutedGray mb-6">
                {course.modules.length} comprehensive modules totaling {course.duration}. Click a module to expand lesson topics.
              </p>

              <div className="space-y-3">
                {course.modules.map((mod, idx) => {
                  const isOpen = openModuleIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-borderLight rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                        className="w-full text-left p-4 bg-background hover:bg-borderLight/30 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-forest/10 text-forest font-bold text-xs flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-charcoal">{mod.title}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-mutedGray">
                          <span>{mod.duration}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-borderLight/60 space-y-2">
                          {mod.lessons.map((les, lIdx) => (
                            <div key={lIdx} className="flex items-center gap-2.5 text-xs text-charcoal/80 py-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                              <span>{les}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Career Outcomes & Practical Scope */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-card">
              <h3 className="text-lg font-bold text-charcoal mb-2">Target Career Outcome</h3>
              <p className="text-xs sm:text-sm text-mutedGray leading-relaxed mb-4">
                Graduates of this program are equipped to pursue:
              </p>
              <div className="p-4 rounded-2xl bg-forest/5 border border-forest/20 text-xs sm:text-sm font-bold text-forest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>{course.careerOutcome}</span>
              </div>
            </div>
          </div>

          {/* Sidebar Skills & District Context */}
          <div className="lg:col-span-4 space-y-6">
            {/* Skills You Will Master */}
            <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
              <h3 className="text-sm font-bold text-charcoal mb-3">Skills You Will Master</h3>
              <div className="flex flex-wrap gap-1.5">
                {course.skillsGained.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-forest/5 text-forest font-medium border border-forest/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* District Relevance */}
            <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
              <h3 className="text-sm font-bold text-charcoal mb-2">High Regional Demand</h3>
              <p className="text-xs text-mutedGray mb-3">
                This skill profile is specifically requested by enterprises and cooperatives in:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {course.districtRelevance.map((dist, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-background text-charcoal font-medium border border-borderLight"
                  >
                    {dist}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
