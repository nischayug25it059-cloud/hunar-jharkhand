// src/pages/Portfolio.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  ExternalLink,
  Share2,
  Edit3,
  MapPin,
  GraduationCap,
  Sparkles,
  Code2,
  CheckCircle2,
  QrCode,
  Download,
  Plus
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TribalMotif } from '../components/TribalMotif';

export const Portfolio: React.FC = () => {
  const { user } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopyShareUrl = () => {
    const shareUrl = `${window.location.origin}/portfolio`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Control Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 sm:px-6 sm:py-4 rounded-3xl border border-borderLight shadow-card">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-charcoal">Public Live Verified Portfolio</span>
            <span className="text-xs text-mutedGray">|</span>
            <span className="text-xs text-mutedGray font-mono">ID: {user.id}</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <Link
              to="/portfolio/edit"
              className="px-4 py-2 rounded-xl bg-background hover:bg-borderLight/60 text-charcoal text-xs font-semibold border border-borderLight flex items-center gap-1.5 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-mutedGray" />
              <span>Edit Portfolio</span>
            </Link>

            <button
              onClick={handleCopyShareUrl}
              className="px-4 py-2 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-colors flex items-center gap-1.5 shadow-subtle"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied Public Link!' : 'Share Portfolio'}</span>
            </button>
          </div>
        </div>

        {/* Main Portfolio Canvas / Card */}
        <div className="bg-white rounded-[32px] border border-borderLight shadow-elevated p-6 sm:p-12 relative overflow-hidden">
          {/* Subtle Tribal Watermark */}
          <div className="absolute top-0 right-0 text-forest/5 pointer-events-none">
            <TribalMotif variant="geometric-grid" opacity={0.06} className="w-[500px] h-[500px]" />
          </div>

          {/* Profile Header Block */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-borderLight relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-forest via-emerald-800 to-forest-dark text-white text-3xl font-extrabold flex items-center justify-center shadow-elevated shrink-0">
                {user.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                    {user.name}
                  </h1>
                  <ShieldCheck className="w-6 h-6 text-forest" title="Verified Tribal Skills Profile" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-mutedGray flex items-center gap-2">
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
                <p className="text-xs sm:text-sm text-charcoal/80 max-w-xl mt-3 leading-relaxed">
                  {user.bio}
                </p>
              </div>
            </div>

            {/* Portfolio Strength Gauge */}
            <div className="bg-background p-5 rounded-2xl border border-borderLight shadow-subtle min-w-[200px] text-center md:text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-mutedGray block mb-1">
                PORTFOLIO STRENGTH
              </span>
              <p className="text-3xl font-extrabold text-forest">{user.portfolioStrength}%</p>
              <div className="w-full bg-borderLight h-2 rounded-full overflow-hidden my-2">
                <div
                  className="bg-forest h-full rounded-full transition-all duration-500"
                  style={{ width: `${user.portfolioStrength}%` }}
                />
              </div>
              <p className="text-[10px] text-mutedGray">Verified by 3 Accredited Credentials</p>
            </div>
          </div>

          {/* Core Verified Skills Section */}
          <div className="py-8 border-b border-borderLight">
            <h2 className="text-xs font-bold uppercase tracking-wider text-mutedGray mb-3">
              Verified Technical & Domain Competencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-background border border-borderLight text-xs font-semibold text-charcoal flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Verified Certificates Showcase */}
          <div className="py-8 border-b border-borderLight">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-charcoal">Issued Industry Credentials</h2>
                <p className="text-xs text-mutedGray">
                  Cryptographically signed certificates earned via coursework and capstones.
                </p>
              </div>
              <Link to="/certificates" className="text-xs font-bold text-forest hover:underline">
                Verify All ({user.certificates.length})
              </Link>
            </div>

            {user.certificates.length === 0 ? (
              <div className="p-8 text-center bg-background rounded-2xl border border-borderLight">
                <p className="text-xs text-mutedGray mb-3">No certificates earned yet.</p>
                <Link to="/courses" className="px-5 py-2 rounded-xl bg-forest text-white text-xs font-bold">
                  Start a Course
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {user.certificates.map((cert) => (
                  <Link
                    key={cert.id}
                    to={`/certificates/${cert.id}`}
                    className="p-5 rounded-2xl bg-background border border-borderLight hover:border-forest transition-colors shadow-subtle flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-forest bg-forest/10 px-2 py-0.5 rounded">
                          {cert.verificationCode}
                        </span>
                        <QrCode className="w-4 h-4 text-mutedGray group-hover:text-forest" />
                      </div>
                      <h3 className="text-xs font-bold text-charcoal mb-1 leading-snug group-hover:text-forest transition-colors">
                        {cert.courseTitle}
                      </h3>
                      <p className="text-[10px] text-mutedGray">Instructor: {cert.instructorName}</p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-borderLight/60 flex items-center justify-between text-[10px] text-mutedGray">
                      <span>{cert.grade}</span>
                      <span className="font-semibold text-forest flex items-center gap-0.5">
                        Verify <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio Projects Showcase */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-charcoal">Real-World Projects & Capstones</h2>
                <p className="text-xs text-mutedGray">
                  Practical applications built for local cooperatives, MSMEs, and digital clients.
                </p>
              </div>
              <Link
                to="/portfolio/edit"
                className="inline-flex items-center gap-1 text-xs font-bold text-forest hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </Link>
            </div>

            {user.projects.length === 0 ? (
              <div className="p-8 text-center bg-background rounded-2xl border border-borderLight">
                <p className="text-xs text-mutedGray mb-3">No custom projects added yet.</p>
                <Link to="/portfolio/edit" className="px-5 py-2 rounded-xl bg-forest text-white text-xs font-bold">
                  Add Your First Project
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {user.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-6 rounded-2xl bg-background border border-borderLight flex flex-col justify-between shadow-subtle hover:border-forest/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-mutedGray">{proj.date}</span>
                        <div className="flex items-center gap-2">
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noreferrer"
                              className="text-mutedGray hover:text-charcoal"
                              title="Source Code"
                            >
                              <Code2 className="w-4 h-4" />
                            </a>
                          )}
                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noreferrer"
                              className="text-mutedGray hover:text-forest"
                              title="Live Prototype"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-charcoal mb-2 leading-snug">{proj.title}</h3>
                      <p className="text-xs text-mutedGray leading-relaxed mb-4">{proj.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-borderLight/60">
                      {proj.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2.5 py-0.5 rounded-md bg-white border border-borderLight text-charcoal font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
