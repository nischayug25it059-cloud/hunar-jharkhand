// src/pages/Career.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Compass,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CAREER_PATHS_DATA, CareerPath } from '../data/careers';
import { COURSES_DATA } from '../data/courses';
import { TribalMotif } from '../components/TribalMotif';

export const Career: React.FC = () => {
  const { t } = useApp();
  const [selectedPathId, setSelectedPathId] = useState(CAREER_PATHS_DATA[0].id);

  const activePath = CAREER_PATHS_DATA.find((p) => p.id === selectedPathId) || CAREER_PATHS_DATA[0];
  const matchingCourses = COURSES_DATA.filter((c) => activePath.recommendedCourseIds.includes(c.id));

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>JHARKHAND ECONOMIC ROADMAPS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Don't just learn. Know where you're going.
          </h1>
          <p className="text-sm sm:text-base text-mutedGray mt-3 leading-relaxed">
            Every career path connects verified skill credentials with real earning potential across local enterprises, remote markets, and skilled infrastructure trades.
          </p>
        </div>

        {/* Path Selection Horizontal Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 justify-start md:justify-center">
          {CAREER_PATHS_DATA.map((path) => (
            <button
              key={path.id}
              onClick={() => setSelectedPathId(path.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedPathId === path.id
                  ? 'bg-forest text-white shadow-elevated scale-[1.02]'
                  : 'bg-white text-charcoal hover:bg-borderLight/40 border border-borderLight shadow-subtle'
              }`}
            >
              <span>{path.title}</span>
            </button>
          ))}
        </div>

        {/* Active Path Spotlight Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-borderLight shadow-card mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 text-forest/5 pointer-events-none">
            <TribalMotif variant="geometric-grid" opacity={0.08} className="w-96 h-96" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 pb-8 border-b border-borderLight">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-forest/10 text-forest mb-3 inline-block">
                {activePath.timeCommitment} Full Timeline
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal mb-2">
                {activePath.title}
              </h2>
              <p className="text-sm sm:text-base text-mutedGray leading-relaxed max-w-2xl mb-6">
                {activePath.subtitle} {activePath.description}
              </p>

              {/* Target Roles */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-mutedGray">Target Employment & Roles:</p>
                <div className="flex flex-wrap gap-1.5">
                  {activePath.targetRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-background border border-borderLight text-charcoal font-semibold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="lg:col-span-4 bg-background p-6 rounded-2xl border border-borderLight space-y-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-mutedGray">Estimated Earning Potential</p>
                <p className="text-2xl font-extrabold text-forest">{activePath.earningPotential}</p>
                <p className="text-[11px] text-mutedGray mt-0.5">Based on entry-level placement data in Jharkhand & remote firms.</p>
              </div>

              <div className="pt-3 border-t border-borderLight text-xs">
                <p className="text-[10px] uppercase font-bold text-mutedGray mb-1">Key Growth Hubs:</p>
                <p className="text-charcoal font-semibold">{activePath.inDemandDistricts.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* 5-Phase Horizontal Timeline */}
          <div className="pt-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-mutedGray mb-6">
              The 5-Phase Progression
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {activePath.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-background rounded-2xl p-5 border border-borderLight hover:border-forest transition-colors shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-forest bg-forest/10 px-2 py-0.5 rounded">
                        PHASE {idx + 1}
                      </span>
                      <span className="text-[10px] text-mutedGray font-semibold">{step.badge}</span>
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-mutedGray block mb-1">
                      {step.stage}
                    </span>
                    <h4 className="text-xs font-bold text-charcoal mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-mutedGray leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-borderLight/60 text-[10px] text-forest font-bold flex items-center justify-between">
                    <span>Verified Milestone</span>
                    {idx < 4 && <span className="hidden md:inline text-mutedGray">→</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curated Courses for this Career Path */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal">Recommended Courses for {activePath.title}</h3>
              <p className="text-xs text-mutedGray">Master these modules to fulfill the technical requirements of this roadmap.</p>
            </div>
            <Link to="/courses" className="text-xs font-bold text-forest hover:underline">
              View All Catalogue
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchingCourses.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-3xl p-6 border border-borderLight hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-forest/10 text-forest mb-2 inline-block">
                    {c.category}
                  </span>
                  <h4 className="text-sm font-bold text-charcoal mb-1 leading-snug">{c.title}</h4>
                  <p className="text-xs text-mutedGray line-clamp-2 mb-4">{c.description}</p>
                  <div className="flex items-center gap-3 text-[11px] text-mutedGray mb-4">
                    <span>⏱ {c.duration.split(' ')[0]} {c.duration.split(' ')[1]}</span>
                    <span>★ {c.rating}</span>
                    <span>{c.level}</span>
                  </div>
                </div>
                <Link
                  to={`/courses/${c.id}`}
                  className="w-full py-2.5 rounded-xl bg-background hover:bg-forest text-charcoal hover:text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span>Start Curriculum</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
