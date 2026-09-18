// src/pages/CertificateDetails.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Award,
  ArrowLeft,
  Printer,
  Share2,
  Download,
  ShieldCheck,
  QrCode,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA } from '../data/courses';
import { TribalMotif } from '../components/TribalMotif';

export const CertificateDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useApp();
  const [copied, setCopied] = useState(false);

  // Find certificate in user's profile or generate demo view
  const userCert = user.certificates.find((c) => c.id === id);
  const matchedCourse = COURSES_DATA.find((c) => c.id === userCert?.courseId);

  const cert = userCert || {
    id: id || 'cert-jh-2026-demo',
    courseId: 'excel-business-analytics',
    courseTitle: matchedCourse ? matchedCourse.title : 'Certified Skill Program in Jharkhand',
    category: matchedCourse ? matchedCourse.category : 'Technology',
    issueDate: 'February 18, 2026',
    grade: 'Distinction (94%)',
    verificationCode: 'JH-SKILL-2026-VERIFIED',
    instructorName: matchedCourse ? `${matchedCourse.instructor.name} (${matchedCourse.instructor.organization})` : 'Directorate of Tribal Skill Development',
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Controls Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 print:hidden">
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 text-xs font-semibold text-mutedGray hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Certificates</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-white border border-borderLight text-charcoal text-xs font-semibold hover:bg-borderLight/40 transition-colors flex items-center gap-1.5 shadow-subtle"
            >
              <Share2 className="w-3.5 h-3.5 text-mutedGray" />
              <span>{copied ? 'Copied Verification Link!' : 'Share'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-light transition-colors flex items-center gap-1.5 shadow-subtle"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Certificate Frame (High-Res Heritage & Minimalist Layout) */}
        <div className="bg-[#FAF8F3] rounded-[32px] border-4 border-forest/40 p-8 sm:p-16 shadow-elevated relative overflow-hidden text-center text-charcoal print:border-2 print:shadow-none print:m-0">
          {/* Ornate Corner Tribal Geometry */}
          <div className="absolute top-0 right-0 text-forest/25 pointer-events-none">
            <TribalMotif variant="corner-ornament" opacity={0.35} className="w-36 h-36" />
          </div>
          <div className="absolute bottom-0 left-0 text-terracotta/25 pointer-events-none transform rotate-180">
            <TribalMotif variant="corner-ornament" opacity={0.3} className="w-36 h-36" />
          </div>

          {/* Watermark in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-forest/5 pointer-events-none">
            <TribalMotif variant="geometric-grid" opacity={0.06} className="w-[550px] h-[550px]" />
          </div>

          {/* Certificate Header */}
          <div className="relative z-10 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-forest text-white mx-auto mb-4 flex items-center justify-center shadow-subtle">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
                <polygon points="12,2 22,12 12,22 2,12" stroke="#D4A853" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="4" fill="#C65A38" />
              </svg>
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-forest">
              HUNAR JHARKHAND • TRIBAL YOUTH SKILL INITIATIVE
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mt-2 font-serif">
              Certificate of Completion
            </h1>
            <p className="text-xs text-mutedGray mt-1 tracking-wider uppercase font-semibold">
              ACCREDITED VOCATIONAL & DIGITAL CREDENTIAL
            </p>
          </div>

          {/* Recipient Section */}
          <div className="relative z-10 my-10 py-6 border-y border-forest/20 max-w-2xl mx-auto">
            <p className="text-xs text-mutedGray uppercase tracking-widest font-medium mb-1">
              THIS CERTIFIES WITH HIGH DISTINCTION THAT
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal font-serif tracking-normal text-forest">
              {user.name}
            </h2>
            <p className="text-xs text-mutedGray mt-1 font-medium">
              Resident of {user.district}, Jharkhand, India
            </p>
          </div>

          {/* Course Details */}
          <div className="relative z-10 max-w-xl mx-auto mb-10 space-y-2">
            <p className="text-xs text-mutedGray uppercase tracking-wider font-semibold">
              has successfully fulfilled all requirements, assessments & practical assignments for
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              {cert.courseTitle}
            </h3>
            <p className="text-xs text-mutedGray">
              Performance Grade: <strong className="text-charcoal">{cert.grade}</strong> • Program Category: {cert.category}
            </p>
          </div>

          {/* Signatures and QR Code Verification Footer */}
          <div className="relative z-10 pt-8 border-t border-forest/20 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end max-w-3xl mx-auto">
            {/* Left Signature */}
            <div className="text-center sm:text-left">
              <div className="h-10 border-b border-charcoal/30 flex items-end justify-center sm:justify-start pb-1 font-serif italic text-sm text-forest font-bold">
                {cert.instructorName.split(' ')[0]} {cert.instructorName.split(' ')[1] || ''}
              </div>
              <p className="text-[10px] font-bold text-charcoal uppercase mt-1">Authorized Instructor</p>
              <p className="text-[9px] text-mutedGray">{cert.instructorName}</p>
            </div>

            {/* Center Official Seal */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-forest/60 p-1 mx-auto flex items-center justify-center bg-white shadow-xs">
                <div className="w-full h-full rounded-full bg-forest/5 flex flex-col items-center justify-center text-[8px] font-bold text-forest uppercase tracking-tighter">
                  <ShieldCheck className="w-5 h-5 text-forest mb-0.5" />
                  <span>JHARKHAND</span>
                  <span>VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Right QR Code & Hash */}
            <div className="text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-end gap-2 mb-1">
                <QrCode className="w-10 h-10 text-charcoal" />
              </div>
              <p className="text-[10px] font-mono font-bold text-forest uppercase">
                {cert.verificationCode}
              </p>
              <p className="text-[9px] text-mutedGray">Date: {cert.issueDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetails;
