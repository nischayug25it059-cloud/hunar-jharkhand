// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Briefcase, Sparkles, Award, Layers, ShieldCheck, Heart } from 'lucide-react';
import { TribalMotif } from './TribalMotif';
import { SUPPORTED_LANGUAGES, LanguageCode } from '../data/translations';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setLanguage, t } = useApp();

  return (
    <footer className="relative bg-[#111613] text-[#A6AEA8] pt-16 pb-12 overflow-hidden border-t border-forest/40">
      {/* Decorative subtle tribal background watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none text-forest-light select-none transform translate-x-12 translate-y-12">
        <TribalMotif variant="geometric-grid" opacity={0.06} className="w-96 h-96" />
      </div>
      <div className="absolute left-6 top-10 pointer-events-none text-terracotta select-none">
        <TribalMotif variant="diamond-lattice" opacity={0.05} className="w-48 h-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group inline-flex mb-4">
              <div className="w-9 h-9 rounded-xl bg-forest-light flex items-center justify-center text-white shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
                  <polygon points="12,3 21,12 12,21 3,12" stroke="#D4A853" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="3" fill="#C65A38" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white leading-none">
                  HUNAR <span className="text-[#CFA145]">JHARKHAND</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#8B968E] mt-1 font-medium">
                  Tribal Youth Skill Platform
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#949F97] max-w-sm mb-6">
              Empowering indigenous youth across all 24 districts of Jharkhand with market-ready digital skills, high-value local enterprise training, verified portfolios, and AI-guided career roadmaps.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8B968E]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-light" />
                Verified Digital Credentials
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                <Heart className="w-3.5 h-3.5 text-terracotta" />
                100% Free Public Initiative
              </span>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Platform</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-mutedGray" />
                  Course Catalogue
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Briefcase className="w-3 h-3 text-mutedGray" />
                  Career Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/ai-guide" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-gold" />
                  AI Career Guide
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-mutedGray" />
                  Digital Portfolios
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-mutedGray" />
                  Certificate Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Domains */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Focus Domains</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/courses?cat=Local+Enterprise" className="hover:text-white transition-colors">
                  Lac & Shellac Processing
                </Link>
              </li>
              <li>
                <Link to="/courses?cat=Local+Enterprise" className="hover:text-white transition-colors">
                  Tasar Silk & Handloom
                </Link>
              </li>
              <li>
                <Link to="/courses?cat=Technology" className="hover:text-white transition-colors">
                  Python & Web Tech
                </Link>
              </li>
              <li>
                <Link to="/courses?cat=Skilled+Trades" className="hover:text-white transition-colors">
                  Solar Energy & EV Repair
                </Link>
              </li>
              <li>
                <Link to="/courses?cat=Freelancing" className="hover:text-white transition-colors">
                  Digital Freelancing & Ads
                </Link>
              </li>
              <li>
                <Link to="/courses?cat=Business" className="hover:text-white transition-colors">
                  Tally Prime & Mudra Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Languages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Regional Languages</h3>
            <div className="flex flex-wrap gap-1.5">
              {SUPPORTED_LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code as LanguageCode)}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-[#C1C9C3] hover:text-white transition-colors"
                >
                  {l.nativeLabel}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#78827A] mt-3 leading-relaxed">
              Committed to linguistic inclusion for indigenous youth across Santhal Pargana, Kolhan, and Chotanagpur.
            </p>
          </div>
        </div>

        {/* Bottom Bar with tribal line separator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A857D]">
          <p>
            © {new Date().getFullYear()} Hunar Jharkhand. Designed with Apple-inspired minimalism and indigenous tribal pride.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/certificates" className="hover:text-white transition-colors">QR Verification</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
