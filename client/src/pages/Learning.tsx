// src/pages/Learning.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Play,
  Pause,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Volume2,
  FileText,
  Sparkles,
  Download,
  Share2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA } from '../data/courses';
import { UserCertificate } from '../data/users';
import { TribalMotif } from '../components/TribalMotif';

export const Learning: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, enrollCourse, updateCourseProgress, completeCourse, getEnrollment } = useApp();

  const course = COURSES_DATA.find((c) => c.id === id);

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(25);
  const [selectedLanguage, setSelectedLanguage] = useState<'hindi' | 'english' | 'regional'>('hindi');
  const [issuedCertificate, setIssuedCertificate] = useState<UserCertificate | null>(null);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);

  useEffect(() => {
    if (course && !getEnrollment(course.id)) {
      enrollCourse(course.id);
    }
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background pt-40 pb-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-charcoal mb-3">Course Not Found</h2>
        <Link to="/courses" className="px-6 py-2.5 rounded-full bg-forest text-white text-xs font-semibold">
          Back to Courses
        </Link>
      </div>
    );
  }

  const enrollment = getEnrollment(course.id);
  const currentModule = course.modules[activeModuleIndex] || course.modules[0];
  const currentLessonTitle = currentModule.lessons[activeLessonIndex] || currentModule.lessons[0];

  const handleMarkLessonComplete = () => {
    // Advance progress
    const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const stepIncrement = Math.round(100 / totalLessons);
    const newProgress = Math.min(100, (enrollment?.progress || 10) + stepIncrement);

    if (newProgress >= 100) {
      const cert = completeCourse(course.id);
      setIssuedCertificate(cert);
      setShowCelebrationModal(true);
    } else {
      updateCourseProgress(course.id, newProgress);
      // Advance to next lesson if possible
      if (activeLessonIndex < currentModule.lessons.length - 1) {
        setActiveLessonIndex((prev) => prev + 1);
      } else if (activeModuleIndex < course.modules.length - 1) {
        setActiveModuleIndex((prev) => prev + 1);
        setActiveLessonIndex(0);
      }
    }
  };

  const handleInstantCourseCompletion = () => {
    const cert = completeCourse(course.id);
    setIssuedCertificate(cert);
    setShowCelebrationModal(true);
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-borderLight py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <Link to="/courses" className="text-mutedGray hover:text-charcoal flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Catalogue</span>
            </Link>
            <span className="text-mutedGray">/</span>
            <Link to={`/courses/${course.id}`} className="text-mutedGray hover:text-charcoal truncate max-w-[150px] sm:max-w-xs">
              {course.title}
            </Link>
            <span className="text-mutedGray">/</span>
            <span className="font-bold text-forest truncate max-w-[150px] sm:max-w-xs">
              Module {activeModuleIndex + 1}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-mutedGray hidden sm:inline">Course Progress:</span>
            <div className="w-24 sm:w-36 bg-borderLight h-2 rounded-full overflow-hidden">
              <div
                className="bg-forest h-full rounded-full transition-all duration-300"
                style={{ width: `${enrollment?.progress || 10}%` }}
              />
            </div>
            <span className="text-xs font-bold text-forest">{enrollment?.progress || 10}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video & Lesson Content Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Virtual Classroom Video Player Frame */}
            <div className="bg-[#151B17] rounded-3xl overflow-hidden border border-borderLight shadow-elevated text-white relative">
              <div className="aspect-video w-full bg-gradient-to-br from-forest-dark via-[#18261E] to-[#121B15] relative flex flex-col items-center justify-center p-6 text-center">
                {/* Subtle Tribal Watermark inside classroom */}
                <div className="absolute top-4 right-4 text-white/5 pointer-events-none">
                  <TribalMotif variant="diamond-lattice" opacity={0.15} className="w-48 h-48" />
                </div>

                <div className="relative z-10 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-forest text-white flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-transform cursor-pointer shadow-float"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-[#D4A853] mb-2 inline-block">
                    Interactive Video Lesson
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {currentLessonTitle}
                  </h3>
                  <p className="text-xs text-[#9BB0A2]">
                    Instructor: {course.instructor.name} • {course.instructor.organization}
                  </p>
                </div>

                {/* Progress Scrubber */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-2 cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      setVideoProgress(Math.round((clickX / rect.width) * 100));
                    }}
                  >
                    <div className="bg-forest-light h-full rounded-full" style={{ width: `${videoProgress}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-white/70 font-mono">
                    <span>04:15 / 16:40</span>
                    <span>1080p HD • Bilingual</span>
                  </div>
                </div>
              </div>

              {/* Player Bottom Control Bar */}
              <div className="p-4 sm:p-5 bg-[#1B241F] flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#9BB0A2]">Language Audio:</span>
                  <button
                    onClick={() => setSelectedLanguage('hindi')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      selectedLanguage === 'hindi' ? 'bg-forest text-white' : 'bg-white/5 text-[#CBD8CE]'
                    }`}
                  >
                    हिन्दी
                  </button>
                  <button
                    onClick={() => setSelectedLanguage('english')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      selectedLanguage === 'english' ? 'bg-forest text-white' : 'bg-white/5 text-[#CBD8CE]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setSelectedLanguage('regional')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      selectedLanguage === 'regional' ? 'bg-forest text-white' : 'bg-white/5 text-[#CBD8CE]'
                    }`}
                  >
                    संथाली
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleMarkLessonComplete}
                    className="px-4 py-2 rounded-xl bg-forest hover:bg-forest-light text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-subtle"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Complete Lesson</span>
                  </button>

                  <button
                    onClick={handleInstantCourseCompletion}
                    className="px-3.5 py-2 rounded-xl bg-[#D4A853]/20 hover:bg-[#D4A853]/30 text-[#D4A853] text-xs font-bold flex items-center gap-1.5 transition-colors"
                    title="Complete entire course & get certificate now"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Claim Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Lesson Transcript & Notes Tab */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>Bilingual Lecture Transcript & Key Takeaways</span>
              </div>
              <h2 className="text-xl font-bold text-charcoal mb-4">{currentLessonTitle}</h2>

              <div className="prose prose-sm max-w-none text-xs sm:text-sm text-charcoal/80 space-y-3 leading-relaxed">
                <p>
                  In this session, we investigate the fundamental science and commercial standards required for{' '}
                  <strong>{course.title}</strong>. Special emphasis is given to local procurement realities across
                  Jharkhand districts and connecting with institutional buyers (FPOs, TRIFED, JHARCRAFT, and private digital aggregators).
                </p>
                <div className="p-4 rounded-2xl bg-background border border-borderLight space-y-2">
                  <p className="font-bold text-charcoal">Core Practical Principles:</p>
                  <ul className="list-disc pl-5 space-y-1 text-mutedGray">
                    <li>Always conduct moisture and quality verification before secondary value addition.</li>
                    <li>Maintain batch code records for traceability demanded by urban export customers.</li>
                    <li>Utilize low-cost solar dehydration to prevent fungal contamination.</li>
                    <li>Establish direct WhatsApp Business ordering links to bypass middleman deductions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Curriculum Navigation Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-borderLight shadow-card space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-mutedGray block mb-1">
                COURSE NAVIGATION
              </span>
              <h3 className="text-base font-bold text-charcoal">Modules & Lessons</h3>
              <p className="text-xs text-mutedGray mt-0.5">
                {course.modules.length} Modules • {course.lessonsCount} Total Lessons
              </p>
            </div>

            <div className="space-y-4">
              {course.modules.map((mod, mIdx) => (
                <div key={mIdx} className="space-y-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-forest px-1">
                    Module {mIdx + 1}: {mod.title}
                  </p>
                  <div className="space-y-1">
                    {mod.lessons.map((les, lIdx) => {
                      const isCurrent = activeModuleIndex === mIdx && activeLessonIndex === lIdx;
                      return (
                        <button
                          key={lIdx}
                          onClick={() => {
                            setActiveModuleIndex(mIdx);
                            setActiveLessonIndex(lIdx);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                            isCurrent
                              ? 'bg-forest text-white font-bold shadow-subtle'
                              : 'bg-background hover:bg-borderLight/50 text-charcoal'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="w-4 h-4 rounded-full bg-white/20 text-[9px] flex items-center justify-center font-mono">
                              {lIdx + 1}
                            </span>
                            <span className="truncate">{les}</span>
                          </div>
                          {isCurrent && <Play className="w-3 h-3 text-gold shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Completion Button */}
            <div className="pt-4 border-t border-borderLight">
              <button
                onClick={handleInstantCourseCompletion}
                className="w-full py-3 rounded-xl bg-forest/10 hover:bg-forest text-forest hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Finish Course & Issue Certificate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Celebration Modal when Course is Completed */}
      {showCelebrationModal && issuedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-borderLight shadow-float text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-forest text-white flex items-center justify-center mx-auto mb-4 shadow-subtle">
              <Award className="w-8 h-8 text-gold" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-forest/10 text-forest mb-2 inline-block">
              COURSE COMPLETED!
            </span>
            <h3 className="text-2xl font-extrabold text-charcoal mb-2">Congratulations, {user.name}!</h3>
            <p className="text-xs text-mutedGray mb-6">
              You have successfully completed <strong>{course.title}</strong>. Your verified certificate has been issued and automatically synced to your digital portfolio!
            </p>

            <div className="p-4 rounded-2xl bg-background border border-borderLight text-left text-xs mb-6 space-y-1">
              <p className="text-[10px] font-mono font-bold text-forest">ID: {issuedCertificate.verificationCode}</p>
              <p className="font-bold text-charcoal">{issuedCertificate.courseTitle}</p>
              <p className="text-mutedGray">Grade: {issuedCertificate.grade}</p>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                to={`/certificates/${issuedCertificate.id}`}
                className="w-full py-3 rounded-xl bg-forest text-white font-bold text-xs hover:bg-forest-light transition-colors"
              >
                View Official Certificate
              </Link>
              <Link
                to="/portfolio"
                className="w-full py-2.5 rounded-xl bg-background text-charcoal font-semibold text-xs hover:bg-borderLight/40 transition-colors"
              >
                Go to My Portfolio
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learning;
