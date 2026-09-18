// src/pages/AIGuide.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Send,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Award,
  Compass,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { JHARKHAND_DISTRICTS } from '../data/districts';
import { COURSES_DATA } from '../data/courses';
import { TribalMotif } from '../components/TribalMotif';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  recommendedCourses?: string[];
  careerTrack?: string;
  salary?: string;
}

export const AIGuide: React.FC = () => {
  const { user } = useApp();

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-init',
      sender: 'ai',
      text: `Hello ${user.name.split(' ')[0]}! I am your AI Career Advisor, specialized in educational pathways and market opportunities across all 24 districts of Jharkhand. What are your current interests, education, or dream career?`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Guided questionnaire state
  const [guidedDistrict, setGuidedDistrict] = useState(user.district || 'Ranchi');
  const [guidedEducation, setGuidedEducation] = useState('Class 12');
  const [guidedInterest, setGuidedInterest] = useState('Technology & Computers');

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // AI smart response generation based on keywords
    setTimeout(() => {
      let aiText = '';
      let recommended: string[] = [];
      let career = '';
      let salary = '';

      const lower = query.toLowerCase();

      if (lower.includes('lac') || lower.includes('silk') || lower.includes('tasar') || lower.includes('forest') || lower.includes('bamboo')) {
        aiText = `Based on your interest in Jharkhand's natural resources and indigenous enterprise, here is an optimal roadmap to build a certified FPO or value-addition brand:`;
        career = 'Sustainable Forest Produce Entrepreneur';
        salary = '₹45,000 - ₹1,20,000 / month';
        recommended = ['lac-cultivation-value-addition', 'tasar-silk-sericulture', 'bamboo-product-design-enterprise'];
      } else if (lower.includes('computer') || lower.includes('tech') || lower.includes('coding') || lower.includes('python') || lower.includes('12')) {
        aiText = `For a high-growth tech path starting from Class 12 or graduation, here is the proven sequence to become employment-ready in 4 to 6 months:`;
        career = 'Junior Software & Data Specialist';
        salary = '₹25,000 - ₹50,000 / month';
        recommended = ['excel-business-analytics', 'python-for-beginners', 'full-stack-web-development'];
      } else if (lower.includes('freelance') || lower.includes('marketing') || lower.includes('video') || lower.includes('design')) {
        aiText = `Freelancing allows you to earn without relocating from your hometown. Here are the core modules to close your first USD/INR clients:`;
        career = 'Independent Digital Freelancer';
        salary = '₹30,000 - ₹85,000 / month';
        recommended = ['digital-marketing-local-business', 'freelancing-fundamentals-global-market', 'graphic-design-canva-figma'];
      } else if (lower.includes('solar') || lower.includes('ev') || lower.includes('electric') || lower.includes('trade')) {
        aiText = `Jharkhand's solarization and EV transition are creating massive technician shortages. Here is your fast-track hands-on route:`;
        career = 'Certified Clean Tech Contractor';
        salary = '₹30,000 - ₹75,000 / month';
        recommended = ['solar-rooftop-installation-maintenance', 'ev-two-wheeler-service-diagnostics'];
      } else {
        aiText = `Based on your background in ${guidedDistrict}, here is a balanced multi-disciplinary skill track combining digital productivity with commercial acumen:`;
        career = 'Digital Operations & Enterprise Associate';
        salary = '₹22,000 - ₹40,000 / month';
        recommended = ['excel-business-analytics', 'digital-marketing-local-business', 'local-business-accounting-tally-gst'];
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        careerTrack: career,
        salary,
        recommendedCourses: recommended,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleGuidedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(
      `I live in ${guidedDistrict}, my education is ${guidedEducation}, and my primary passion is in ${guidedInterest}. What is my ideal step-by-step career pathway?`
    );
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>AI CAREER ARCHITECT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Not sure what to learn next?
          </h1>
          <p className="text-sm sm:text-base text-mutedGray mt-2">
            Ask any question or use our guided advisor to generate a personalized stepwise learning roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Prompts & Guided Profile Builder */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Prompt Starters */}
            <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
              <h3 className="text-sm font-bold text-charcoal mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold" />
                Popular Questions
              </h3>
              <div className="space-y-2">
                {[
                  'I finished Class 12 in Ranchi and I like computers.',
                  'How do I build a Tasar silk or Lac enterprise in Khunti?',
                  'I want to work as a freelance designer from home.',
                  'What are the best solar rooftop technician skills for 2026?',
                ].map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="w-full text-left p-3 rounded-2xl bg-background hover:bg-forest/5 text-xs text-charcoal font-medium border border-borderLight hover:border-forest/30 transition-all leading-snug"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>

            {/* Guided Path Generator */}
            <div className="bg-white rounded-3xl p-6 border border-borderLight shadow-card">
              <h3 className="text-sm font-bold text-charcoal mb-3">Generate Custom Roadmap</h3>
              <form onSubmit={handleGuidedSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="text-[11px] font-bold text-mutedGray block mb-1">Your District</label>
                  <select
                    value={guidedDistrict}
                    onChange={(e) => setGuidedDistrict(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                  >
                    {JHARKHAND_DISTRICTS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-mutedGray block mb-1">Highest Education</label>
                  <select
                    value={guidedEducation}
                    onChange={(e) => setGuidedEducation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                  >
                    <option value="Class 10">Class 10 (Matric)</option>
                    <option value="Class 12">Class 12 (Intermediate)</option>
                    <option value="ITI / Polytechnic">ITI / Polytechnic Diploma</option>
                    <option value="Graduate Degree">Graduate (BA, BSc, BCom, BTech)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-mutedGray block mb-1">Primary Interest Area</label>
                  <select
                    value={guidedInterest}
                    onChange={(e) => setGuidedInterest(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                  >
                    <option value="Technology & Computers">Technology & Computers</option>
                    <option value="Forest Produce & Lac Processing">Forest Produce & Lac Processing</option>
                    <option value="Digital Freelancing & Marketing">Digital Freelancing & Marketing</option>
                    <option value="Solar Energy & Skilled Trades">Solar Energy & Skilled Trades</option>
                    <option value="Shop Accounting & MSME Business">Shop Accounting & MSME Business</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-forest text-white font-bold text-xs hover:bg-forest-light transition-colors mt-2"
                >
                  Generate Roadmap
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Chat Stream & Interactive Recommendations */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-borderLight shadow-card flex flex-col h-[650px] overflow-hidden">
            {/* Chat Top Banner */}
            <div className="p-4 bg-background border-b border-borderLight flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-forest text-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Hunar AI Career Guide</p>
                  <p className="text-[10px] text-mutedGray">Powered by Jharkhand skill and placement data</p>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                Interactive Session
              </span>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl p-4 text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-forest text-white rounded-tr-sm shadow-subtle'
                        : 'bg-background text-charcoal border border-borderLight rounded-tl-sm'
                    }`}
                  >
                    <p>{m.text}</p>

                    {/* Rich Career Track Card if AI provided recommendations */}
                    {m.careerTrack && (
                      <div className="mt-3 pt-3 border-t border-borderLight/80 space-y-2">
                        <div className="p-3 rounded-2xl bg-white border border-borderLight">
                          <p className="text-[10px] font-bold text-forest uppercase">Target Career</p>
                          <p className="text-sm font-bold text-charcoal">{m.careerTrack}</p>
                          {m.salary && (
                            <p className="text-[11px] text-mutedGray mt-0.5">
                              Estimated Income: <strong className="text-forest">{m.salary}</strong>
                            </p>
                          )}
                        </div>

                        {m.recommendedCourses && m.recommendedCourses.length > 0 && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-mutedGray mb-1.5">
                              Stepwise Enrolment Sequence:
                            </p>
                            <div className="space-y-1.5">
                              {m.recommendedCourses.map((cId, idx) => {
                                const matched = COURSES_DATA.find((c) => c.id === cId);
                                if (!matched) return null;
                                return (
                                  <Link
                                    key={cId}
                                    to={`/courses/${matched.id}`}
                                    className="p-2.5 rounded-xl bg-white hover:bg-forest/5 border border-borderLight flex items-center justify-between group transition-colors"
                                  >
                                    <div className="flex items-center gap-2 truncate">
                                      <span className="w-5 h-5 rounded-full bg-forest/10 text-forest font-bold text-[10px] flex items-center justify-center shrink-0">
                                        {idx + 1}
                                      </span>
                                      <span className="font-bold text-charcoal truncate">{matched.title}</span>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-mutedGray group-hover:text-forest shrink-0 ml-2" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-background rounded-2xl px-4 py-3 border border-borderLight text-xs text-mutedGray flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" />
                    <span>Analyzing opportunities for your profile...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="p-4 bg-background border-t border-borderLight">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Describe your interests or ask anything..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-white border border-borderLight text-xs sm:text-sm text-charcoal focus:outline-none focus:border-forest placeholder:text-mutedGray shadow-subtle"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isTyping}
                  className="w-11 h-11 rounded-2xl bg-forest disabled:opacity-50 text-white flex items-center justify-center hover:bg-forest-light transition-colors shadow-subtle shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGuide;
