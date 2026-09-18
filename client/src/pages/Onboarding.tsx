// src/pages/Onboarding.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, Layers, ShieldCheck, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { JHARKHAND_DISTRICTS } from '../data/districts';
import { SUPPORTED_LANGUAGES } from '../data/translations';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const { signupAndOnboard } = useApp();

  const [name, setName] = useState('New Learner');
  const [email, setEmail] = useState('learner@jharkhand.in');
  const [district, setDistrict] = useState('Ranchi');
  const [education, setEducation] = useState('Senior Secondary (Class 12)');
  const [preferredLanguage, setPreferredLanguage] = useState('Hindi & English');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Digital Skills']);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Computer Fundamentals']);
  const [careerGoal, setCareerGoal] = useState('Build practical skills and earn verified income.');

  useEffect(() => {
    try {
      const temp = sessionStorage.getItem('hunar_temp_signup');
      if (temp) {
        const parsed = JSON.parse(temp);
        if (parsed.name) setName(parsed.name);
        if (parsed.email) setEmail(parsed.email);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const interestOptions = [
    'Technology & Computers',
    'Scientific Lac & Forest Enterprise',
    'Tasar Silk & Handloom',
    'Digital Freelancing & Social Media',
    'Solar & Clean Energy Trades',
    'Shop Accounting & Mudra Finance',
    'Millet & Organic Food Business',
    'Community Ecotourism & Homestays',
  ];

  const toggleInterest = (item: string) => {
    if (selectedInterests.includes(item)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== item));
    } else {
      setSelectedInterests([...selectedInterests, item]);
    }
  };

  const handleFinishOnboarding = (e: React.FormEvent) => {
    e.preventDefault();

    signupAndOnboard({
      name,
      email,
      district,
      education,
      preferredLanguage,
      interests: selectedInterests,
      skills: selectedSkills,
      careerGoal,
    });

    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-borderLight shadow-elevated">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-forest/10 text-forest mb-2 inline-block">
              STEP 2 OF 2 • PORTFOLIO SETUP
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Welcome, {name}! Let's build your profile.
            </h1>
            <p className="text-xs text-mutedGray mt-1">
              Your responses will automatically generate your shareable digital portfolio.
            </p>
          </div>

          <form onSubmit={handleFinishOnboarding} className="space-y-6 text-xs">
            {/* District & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-charcoal block mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-forest" />
                  <span>Your District (Jharkhand)</span>
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                >
                  {JHARKHAND_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.specialty})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1.5">Highest Education Level</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                >
                  <option value="Class 10 (Matriculation)">Class 10 (Matriculation)</option>
                  <option value="Senior Secondary (Class 12)">Senior Secondary (Class 12)</option>
                  <option value="ITI / Diploma">ITI / Polytechnic Diploma</option>
                  <option value="Undergraduate (BA / BSc / BCom)">Undergraduate (BA / BSc / BCom)</option>
                  <option value="Engineering / Technical Degree">Engineering / Technical Degree</option>
                </select>
              </div>
            </div>

            {/* Language Selection */}
            <div>
              <label className="font-bold text-charcoal block mb-1.5">Preferred Learning Language</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SUPPORTED_LANGUAGES.map((l) => (
                  <button
                    type="button"
                    key={l.code}
                    onClick={() => setPreferredLanguage(l.nativeLabel)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      preferredLanguage === l.nativeLabel
                        ? 'border-forest bg-forest/5 text-forest font-bold shadow-xs'
                        : 'border-borderLight bg-background text-charcoal hover:bg-borderLight/40'
                    }`}
                  >
                    <p className="font-bold text-xs">{l.nativeLabel.split(' ')[0]}</p>
                    <p className="text-[10px] text-mutedGray">{l.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Areas */}
            <div>
              <label className="font-bold text-charcoal block mb-1.5">
                Select Your Key Interests (Choose 1 or more)
              </label>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((opt) => {
                  const isSelected = selectedInterests.includes(opt);
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleInterest(opt)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-forest text-white shadow-subtle'
                          : 'bg-background text-charcoal hover:bg-borderLight/50 border border-borderLight'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Career Goal */}
            <div>
              <label className="font-bold text-charcoal block mb-1.5">What is your primary goal?</label>
              <input
                type="text"
                value={careerGoal}
                onChange={(e) => setCareerGoal(e.target.value)}
                placeholder="e.g. Work as a junior software engineer or launch a bamboo furniture studio."
                className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
              />
            </div>

            {/* Finish CTA */}
            <div className="pt-4 border-t border-borderLight">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-forest text-white font-bold text-xs hover:bg-forest-light transition-all flex items-center justify-center gap-2 shadow-card"
              >
                <Layers className="w-4 h-4" />
                <span>Auto-Create My Portfolio & Go to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
