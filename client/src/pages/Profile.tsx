// src/pages/Profile.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Award,
  BookOpen,
  Layers,
  MapPin,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Edit3,
  Bookmark,
  LogOut
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA } from '../data/courses';
import { TribalMotif } from '../components/TribalMotif';

export const Profile: React.FC = () => {
  const { user, logout } = useApp();

  const enrolledCourseDetails = user.enrolledCourses.map((e) => {
    const matched = COURSES_DATA.find((c) => c.id === e.courseId);
    return {
      enrollment: e,
      course: matched,
    };
  }).filter((item) => item.course !== undefined);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Hero Banner */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-borderLight shadow-card mb-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 text-forest/5 pointer-events-none">
            <TribalMotif variant="geometric-grid" opacity={0.08} className="w-80 h-80" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 pb-8 border-b border-borderLight">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-forest to-emerald-900 text-white font-extrabold text-2xl flex items-center justify-center shadow-subtle shrink-0">
                {user.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal">{user.name}</h1>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-forest/10 text-forest">
                    Verified Learner
                  </span>
                </div>
                <p className="text-xs text-mutedGray flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-terracotta" />
                    {user.district}, Jharkhand
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-forest" />
                    {user.education}
                  </span>
                </p>
                <p className="text-xs text-charcoal/80 mt-2 max-w-lg leading-relaxed">
                  {user.bio}
                </p>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                to="/portfolio"
                className="px-4 py-2.5 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-all flex items-center gap-1.5 shadow-subtle"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>View Public Portfolio</span>
              </Link>
              <Link
                to="/portfolio/edit"
                className="px-4 py-2.5 rounded-xl bg-background hover:bg-borderLight/50 text-charcoal text-xs font-semibold border border-borderLight flex items-center gap-1.5 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5 text-mutedGray" />
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center sm:text-left">
            <div>
              <p className="text-[10px] uppercase font-bold text-mutedGray">Enrolled Courses</p>
              <p className="text-xl font-extrabold text-charcoal">{user.enrolledCourses.length}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-mutedGray">Certificates Earned</p>
              <p className="text-xl font-extrabold text-forest">{user.certificates.length}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-mutedGray">Portfolio Strength</p>
              <p className="text-xl font-extrabold text-forest">{user.portfolioStrength}%</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-mutedGray">Verified Skills</p>
              <p className="text-xl font-extrabold text-charcoal">{user.skills.length}</p>
            </div>
          </div>
        </div>

        {/* Learning Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active Courses List */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-charcoal">Current Learning Journey</h2>
                  <p className="text-xs text-mutedGray">Courses in progress and completed modules.</p>
                </div>
                <Link to="/courses" className="text-xs font-bold text-forest hover:underline">
                  + Enroll in New Course
                </Link>
              </div>

              {enrolledCourseDetails.length === 0 ? (
                <div className="p-8 text-center bg-background rounded-2xl border border-borderLight">
                  <p className="text-xs text-mutedGray mb-3">You have not enrolled in any courses yet.</p>
                  <Link to="/courses" className="px-5 py-2.5 rounded-xl bg-forest text-white text-xs font-bold">
                    Explore Skills Directory
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {enrolledCourseDetails.map(({ enrollment, course }) => {
                    if (!course) return null;
                    return (
                      <div
                        key={course.id}
                        className="p-5 rounded-2xl bg-background border border-borderLight hover:border-forest transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-forest border border-borderLight">
                              {course.category}
                            </span>
                            {enrollment.isCompleted ? (
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                                <CheckCircle2 className="w-2.5 h-2.5" /> Completed
                              </span>
                            ) : (
                              <span className="text-[10px] text-mutedGray">In Progress</span>
                            )}
                          </div>
                          <h3 className="text-sm font-bold text-charcoal truncate mb-1">{course.title}</h3>
                          <div className="w-full max-w-md bg-borderLight h-1.5 rounded-full overflow-hidden my-2">
                            <div
                              className="bg-forest h-full rounded-full transition-all duration-300"
                              style={{ width: `${enrollment.progress}%` }}
                            />
                          </div>
                          <div className="flex items-center gap-3 text-[10px] text-mutedGray">
                            <span>Progress: <strong>{enrollment.progress}%</strong></span>
                            <span>•</span>
                            <span>Enrolled: {enrollment.enrolledDate}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <Link
                            to={`/learn/${course.id}`}
                            className="px-4 py-2.5 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-colors flex items-center gap-1 shadow-subtle"
                          >
                            <span>{enrollment.isCompleted ? 'Review Classroom' : 'Continue'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Shortcuts & Certificates */}
          <div className="lg:col-span-4 space-y-6">
            {/* Certificates Shortcut */}
            <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-charcoal flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-gold" />
                  <span>My Certificates ({user.certificates.length})</span>
                </h3>
                <Link to="/certificates" className="text-xs font-bold text-forest hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-2.5">
                {user.certificates.slice(0, 3).map((cert) => (
                  <Link
                    key={cert.id}
                    to={`/certificates/${cert.id}`}
                    className="p-3 rounded-xl bg-background hover:bg-forest/5 border border-borderLight text-xs block transition-colors"
                  >
                    <p className="font-bold text-charcoal truncate">{cert.courseTitle}</p>
                    <p className="text-[10px] text-mutedGray mt-0.5">{cert.verificationCode} • {cert.grade}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bookmarks Shortcut */}
            <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-charcoal flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-terracotta" />
                  <span>Saved Courses ({user.bookmarkedCourseIds.length})</span>
                </h3>
                <Link to="/bookmarks" className="text-xs font-bold text-forest hover:underline">
                  View All
                </Link>
              </div>
              <p className="text-xs text-mutedGray">
                Review courses you've saved to start later.
              </p>
            </div>

            {/* Sign out */}
            <div className="p-4 bg-white rounded-2xl border border-borderLight text-center">
              <button
                onClick={logout}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center justify-center gap-1.5 w-full py-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out of Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
