// src/pages/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, MapPin, Award, ArrowRight, BookOpen } from 'lucide-react';
import { TribalMotif } from '../components/TribalMotif';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>OUR MISSION & ROOTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Rooted in heritage. Powered by technology.
          </h1>
          <p className="text-sm sm:text-base text-mutedGray mt-3 leading-relaxed">
            Hunar Jharkhand bridges traditional indigenous tribal capabilities with modern digital and technical economies.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-borderLight shadow-card mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 text-forest/5 pointer-events-none">
            <TribalMotif variant="geometric-grid" opacity={0.08} className="w-96 h-96" />
          </div>

          <div className="relative z-10 space-y-6 text-charcoal/80 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-extrabold text-charcoal">Why We Built This Platform</h2>
            <p>
              Jharkhand is blessed with immense wealth—not just in its mineral grounds, but in its ancient agricultural traditions, rich forest bio-reserves, and extraordinary artisanal heritage: from GI-tagged Sohrai and Khovar paintings to wild Tasar silk and the world's finest natural lac.
            </p>
            <p>
              Yet, for decades, tribal youth have faced a binary choice: leave their ancestral homes for low-wage informal labor in distant cities, or remain underemployed without access to market-aligned skills.
            </p>
            <p>
              <strong>Hunar Jharkhand</strong> changes this narrative. We provide high-quality education in regional tongues (Hindi, Santali, Mundari, Ho, Kurukh), combine modern technical skills (Python, Data Analytics, Solar, EV diagnostics) with scientific value addition in regional produce, and issue cryptographically verifiable credentials that employers recognize instantly.
            </p>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
            <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-charcoal mb-2">100% Free & Open Access</h3>
            <p className="text-xs text-mutedGray leading-relaxed">
              Every course, roadmap, and certificate is free of charge for learners, supported by CSR initiatives and academic fellowships.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
            <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-charcoal mb-2">Cultural Preservation</h3>
            <p className="text-xs text-mutedGray leading-relaxed">
              We treat traditional knowledge—from medicinal herbs to sacred clay murals—not as ancient history, but as thriving, patentable, commercial assets.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
            <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-charcoal mb-2">Market & Career Outcomes</h3>
            <p className="text-xs text-mutedGray leading-relaxed">
              Every module culminates in a tangible portfolio project, verified credentials, and connections to real MSMEs, FPOs, and tech employers.
            </p>
          </div>
        </div>

        {/* Institutional Collaborations */}
        <div className="bg-white rounded-3xl p-8 border border-borderLight shadow-card text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-mutedGray mb-4">
            CURRICULUM INFORMED BY LEADING REGIONAL INSTITUTIONS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-charcoal/70">
            <span>ICAR-IINRG Namkum</span>
            <span>•</span>
            <span>JHARCRAFT</span>
            <span>•</span>
            <span>TRIFED Tribal India</span>
            <span>•</span>
            <span>Birsa Agricultural University</span>
            <span>•</span>
            <span>National Skill Development Corp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
