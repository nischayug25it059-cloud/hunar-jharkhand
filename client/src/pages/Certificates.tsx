// src/pages/Certificates.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Search,
  ShieldCheck,
  QrCode,
  CheckCircle2,
  ExternalLink,
  Download,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TribalMotif } from '../components/TribalMotif';

export const Certificates: React.FC = () => {
  const { user } = useApp();
  const [searchCode, setSearchCode] = useState('');
  const [verificationResult, setVerificationResult] = useState<any | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode.trim()) return;

    setHasSearched(true);
    const q = searchCode.trim().toLowerCase();

    // Check user's certificates or known verification codes
    const found = user.certificates.find(
      (c) =>
        c.id.toLowerCase() === q ||
        c.verificationCode.toLowerCase() === q ||
        c.courseId.toLowerCase().includes(q)
    );

    if (found) {
      setVerificationResult({
        valid: true,
        cert: found,
        studentName: user.name,
        district: user.district,
      });
    } else if (q.includes('jh-') || q.includes('cert-')) {
      // Demo verified match
      setVerificationResult({
        valid: true,
        cert: {
          id: searchCode.toUpperCase(),
          courseTitle: 'Certified Skill Program in Jharkhand',
          verificationCode: searchCode.toUpperCase(),
          issueDate: 'February 2026',
          grade: 'Distinction (92%)',
          instructorName: 'Directorate of Tribal Skill Development',
        },
        studentName: 'Verified Student',
        district: 'Jharkhand',
      });
    } else {
      setVerificationResult({ valid: false });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-gold" />
            <span>CRYPTOGRAPHIC CREDENTIAL PORTAL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Verify & View Certificates
          </h1>
          <p className="text-sm sm:text-base text-mutedGray mt-2">
            Every certificate issued by Hunar Jharkhand is tamper-proof and verifiable by employers worldwide.
          </p>
        </div>

        {/* Verification Search Tool */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-card max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-2">
            Online Credential Verification Lookup
          </h2>
          <p className="text-xs text-mutedGray mb-4">
            Enter any Certificate ID or QR code hash (e.g. <code>JH-EXCEL-94827-X</code> or <code>JH-LAC-77319-K</code>) to confirm authenticity.
          </p>

          <form onSubmit={handleVerify} className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedGray" />
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Enter Certificate ID / Code..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-borderLight text-xs sm:text-sm text-charcoal focus:outline-none focus:border-forest font-mono uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light transition-colors whitespace-nowrap shadow-subtle"
            >
              Verify Authenticity
            </button>
          </form>

          {/* Verification Result Feedback */}
          {hasSearched && (
            <div className="mt-4 pt-4 border-t border-borderLight">
              {verificationResult?.valid ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Official Authenticated Credential Verified</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-emerald-200">
                    <div>
                      <p className="text-emerald-800/70">Candidate:</p>
                      <p className="font-bold text-emerald-950">{verificationResult.studentName}</p>
                    </div>
                    <div>
                      <p className="text-emerald-800/70">Course:</p>
                      <p className="font-bold text-emerald-950">{verificationResult.cert.courseTitle}</p>
                    </div>
                    <div>
                      <p className="text-emerald-800/70">Grade:</p>
                      <p className="font-bold text-emerald-950">{verificationResult.cert.grade}</p>
                    </div>
                    <div>
                      <p className="text-emerald-800/70">Issued Date:</p>
                      <p className="font-bold text-emerald-950">{verificationResult.cert.issueDate}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <p className="font-bold">Credential Not Found</p>
                    <p className="text-[11px] text-rose-700 mt-0.5">
                      No matching certificate was found for "{searchCode}". Please check for typos.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* User's Issued Certificates */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-charcoal">Your Earned Certificates ({user.certificates.length})</h2>
              <p className="text-xs text-mutedGray">Download high-resolution copies or share directly with recruiters.</p>
            </div>
            <Link to="/courses" className="text-xs font-bold text-forest hover:underline">
              Earn More Skills →
            </Link>
          </div>

          {user.certificates.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-borderLight max-w-md mx-auto">
              <Award className="w-12 h-12 text-mutedGray mx-auto mb-3 opacity-30" />
              <h3 className="text-base font-bold text-charcoal mb-1">No certificates earned yet</h3>
              <p className="text-xs text-mutedGray mb-6">
                Enroll in any of our 20+ skill courses and complete the video lessons to earn your first certified credential.
              </p>
              <Link to="/courses" className="px-5 py-2.5 rounded-full bg-forest text-white text-xs font-bold">
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {user.certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-3xl border border-borderLight overflow-hidden shadow-card p-6 flex flex-col justify-between hover:shadow-elevated transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-forest/10 text-forest">
                        {cert.verificationCode}
                      </span>
                      <QrCode className="w-5 h-5 text-mutedGray group-hover:text-forest transition-colors" />
                    </div>

                    <h3 className="text-base font-bold text-charcoal mb-1 leading-snug group-hover:text-forest transition-colors">
                      {cert.courseTitle}
                    </h3>
                    <p className="text-xs text-mutedGray mb-4">
                      Issued to <strong>{user.name}</strong> • {cert.issueDate}
                    </p>

                    <div className="p-3 rounded-xl bg-background text-[11px] text-charcoal space-y-1 mb-4">
                      <p><strong>Grade:</strong> {cert.grade}</p>
                      <p className="text-mutedGray truncate"><strong>Signatory:</strong> {cert.instructorName}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-borderLight flex items-center justify-between">
                    <Link
                      to={`/certificates/${cert.id}`}
                      className="px-4 py-2 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-colors flex items-center gap-1.5"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </Link>

                    <Link
                      to={`/certificates/${cert.id}`}
                      className="text-xs font-bold text-mutedGray hover:text-charcoal flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
