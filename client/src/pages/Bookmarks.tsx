// src/pages/Bookmarks.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight, Trash2, Clock, Award, Globe, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA } from '../data/courses';

export const Bookmarks: React.FC = () => {
  const { user, toggleBookmark } = useApp();

  const savedCourses = COURSES_DATA.filter((c) =>
    user.bookmarkedCourseIds.includes(c.id)
  );

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Bookmark className="w-3.5 h-3.5 text-terracotta" />
            <span>SAVED FOR LATER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Bookmarked Courses ({savedCourses.length})
          </h1>
          <p className="text-xs sm:text-sm text-mutedGray mt-2">
            Keep track of skills and career specializations you plan to enroll in.
          </p>
        </div>

        {savedCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-borderLight max-w-md mx-auto shadow-card">
            <Bookmark className="w-12 h-12 text-mutedGray mx-auto mb-3 opacity-30" />
            <h2 className="text-base font-bold text-charcoal mb-1">No Saved Courses</h2>
            <p className="text-xs text-mutedGray mb-6">
              You haven't bookmarked any courses yet. Browse our catalog and click the star/bookmark icon on any course card.
            </p>
            <Link to="/courses" className="px-5 py-2.5 rounded-full bg-forest text-white text-xs font-bold shadow-subtle">
              Browse Skills Directory
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-borderLight overflow-hidden shadow-card flex flex-col justify-between hover:shadow-elevated transition-all"
              >
                <div>
                  <div className={`h-36 bg-gradient-to-br ${course.gradient} p-5 text-white flex flex-col justify-between`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md self-start">
                      {course.category}
                    </span>
                    <div className="flex items-center justify-between text-xs">
                      <span>★ {course.rating}</span>
                      <button
                        onClick={() => toggleBookmark(course.id)}
                        className="text-xs text-white/80 hover:text-white flex items-center gap-1 font-semibold"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-sm font-bold text-charcoal mb-2 leading-snug">{course.title}</h3>
                    <p className="text-xs text-mutedGray line-clamp-2 mb-4">{course.description}</p>
                    <div className="flex items-center gap-2 text-[11px] text-mutedGray">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}</span>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-borderLight/50 mt-2">
                  <div className="pt-3 flex items-center justify-between">
                    <Link
                      to={`/courses/${course.id}`}
                      className="text-xs font-bold text-forest hover:underline flex items-center gap-1"
                    >
                      <span>View Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/learn/${course.id}`}
                      className="px-3.5 py-1.5 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-colors"
                    >
                      Start Learning
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
