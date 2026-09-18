// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Compass,
  Briefcase,
  Sparkles,
  Award,
  User,
  Globe,
  Bookmark,
  Menu,
  X,
  ArrowRight,
  LogOut,
  ChevronDown,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUPPORTED_LANGUAGES, LanguageCode } from '../data/translations';

export const Navbar: React.FC = () => {
  const { user, language, setLanguage, t, logout } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  // Detect scroll to adjust opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/courses', label: t('nav.courses', 'Courses'), icon: Compass },
    { to: '/career', label: t('nav.career', 'Career Paths'), icon: Briefcase },
    { to: '/ai-guide', label: t('nav.ai_guide', 'AI Guide'), icon: Sparkles, badge: 'New' },
    { to: '/portfolio', label: t('nav.portfolio', 'Portfolio'), icon: Layers },
    { to: '/certificates', label: t('nav.certificates', 'Certificates'), icon: Award },
  ];

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-elevated border border-borderLight'
            : 'bg-white/80 backdrop-blur-md shadow-card border border-borderLight/80'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-forest flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
                <polygon points="12,3 21,12 12,21 3,12" stroke="#D4A853" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="#C65A38" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-tight text-charcoal leading-none flex items-center gap-1.5">
                HUNAR <span className="text-forest font-extrabold">JHARKHAND</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-mutedGray font-medium mt-0.5">
                Tribal Skill Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-background/60 p-1.5 rounded-full border border-borderLight/60">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    active
                      ? 'bg-white text-forest shadow-subtle'
                      : 'text-charcoal/80 hover:text-charcoal hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-forest' : 'text-mutedGray'}`} />
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-forest/10 text-forest ml-0.5">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language, Bookmarks, Auth */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold text-charcoal/80 hover:text-charcoal hover:bg-background transition-colors border border-transparent hover:border-borderLight"
                title="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-mutedGray" />
                <span>{currentLangObj.nativeLabel.split(' ')[0]}</span>
                <ChevronDown className="w-3 h-3 text-mutedGray" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white shadow-elevated border border-borderLight py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-mutedGray border-b border-borderLight/60">
                    Select Interface Language
                  </div>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as LanguageCode);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-background transition-colors ${
                        language === lang.code ? 'font-bold text-forest bg-forest/5' : 'text-charcoal'
                      }`}
                    >
                      <span>{lang.nativeLabel}</span>
                      {language === lang.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Bookmarks */}
            <Link
              to="/bookmarks"
              className="relative p-2 rounded-full text-charcoal/80 hover:text-charcoal hover:bg-background transition-colors"
              title="Saved courses"
            >
              <Bookmark className="w-4 h-4 text-mutedGray hover:text-charcoal" />
              {user.bookmarkedCourseIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-terracotta text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {user.bookmarkedCourseIds.length}
                </span>
              )}
            </Link>

            {/* User Auth state */}
            {user.email && user.name !== 'Guest Learner' ? (
              <div className="relative" ref={userRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-background hover:bg-borderLight/50 border border-borderLight transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-forest text-white text-xs font-bold flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-charcoal truncate max-w-[90px]">
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3 h-3 text-mutedGray" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-elevated border border-borderLight py-1.5 z-50">
                    <div className="px-3.5 py-2 border-b border-borderLight/60">
                      <p className="text-xs font-bold text-charcoal">{user.name}</p>
                      <p className="text-[11px] text-mutedGray truncate">{user.email}</p>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-forest/10 text-forest font-bold">
                          {user.district}
                        </span>
                        <span className="text-[10px] text-mutedGray">
                          Strength: {user.portfolioStrength}%
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-charcoal hover:bg-background"
                    >
                      <User className="w-3.5 h-3.5 text-mutedGray" />
                      {t('nav.profile', 'My Profile & Dashboard')}
                    </Link>
                    <Link
                      to="/portfolio"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-charcoal hover:bg-background"
                    >
                      <Layers className="w-3.5 h-3.5 text-mutedGray" />
                      {t('nav.portfolio', 'My Live Portfolio')}
                    </Link>
                    <Link
                      to="/certificates"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-charcoal hover:bg-background"
                    >
                      <Award className="w-3.5 h-3.5 text-mutedGray" />
                      {t('nav.certificates', 'My Certificates')}
                    </Link>
                    <div className="border-t border-borderLight/60 my-1"></div>
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-2 px-3.5 py-2 text-xs text-rose-600 hover:bg-rose-50"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      {t('nav.logout', 'Sign Out')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 text-xs font-semibold text-charcoal hover:text-forest transition-colors"
                >
                  {t('nav.login', 'Log in')}
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-1.5 rounded-full bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-all shadow-xs hover:shadow-subtle flex items-center gap-1 group"
                >
                  <span>{t('nav.get_started', 'Get Started')}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/bookmarks"
              className="p-1.5 text-charcoal"
              title="Saved courses"
            >
              <Bookmark className="w-4 h-4 text-mutedGray" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-charcoal hover:bg-background"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-borderLight/60 px-4 py-4 bg-white/95 rounded-b-2xl sm:rounded-b-3xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${
                      active ? 'bg-forest/10 text-forest' : 'text-charcoal hover:bg-background'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-mutedGray" />
                      <span>{link.label}</span>
                    </div>
                    {link.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest/15 text-forest">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Language Selection inside mobile menu */}
            <div className="mt-4 pt-3 border-t border-borderLight/60">
              <p className="text-[11px] font-bold uppercase tracking-wider text-mutedGray mb-2 px-1">
                Language
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as LanguageCode)}
                    className={`px-3 py-1.5 rounded-lg text-xs text-left font-medium ${
                      language === lang.code
                        ? 'bg-forest text-white'
                        : 'bg-background text-charcoal'
                    }`}
                  >
                    {lang.nativeLabel.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Auth Buttons in mobile menu */}
            <div className="mt-4 pt-3 border-t border-borderLight/60 flex flex-col gap-2">
              {user.email && user.name !== 'Guest Learner' ? (
                <>
                  <Link
                    to="/profile"
                    className="w-full text-center py-2.5 rounded-xl bg-background text-charcoal font-semibold text-sm"
                  >
                    {user.name} ({user.district})
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-center py-2 text-rose-600 font-semibold text-xs"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    className="py-2.5 text-center rounded-xl bg-background text-charcoal font-semibold text-xs"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="py-2.5 text-center rounded-xl bg-forest text-white font-semibold text-xs"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
