// src/pages/Signup.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Lock, Mail, User } from 'lucide-react';
import { TribalMotif } from '../components/TribalMotif';

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Save temporary signup data and forward to onboarding questionnaire
    sessionStorage.setItem(
      'hunar_temp_signup',
      JSON.stringify({ name: name.trim(), email: email.trim() })
    );
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-borderLight shadow-elevated relative overflow-hidden">
          {/* Subtle Tribal Watermark */}
          <div className="absolute top-0 right-0 text-forest/5 pointer-events-none">
            <TribalMotif variant="diamond-lattice" opacity={0.08} className="w-48 h-48" />
          </div>

          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-forest text-white mx-auto mb-3 flex items-center justify-center shadow-subtle">
              <Sparkles className="w-6 h-6 text-gold" />
            </div>
            <h1 className="text-2xl font-extrabold text-charcoal tracking-tight">
              Create Your Free Account
            </h1>
            <p className="text-xs text-mutedGray mt-1">
              Join thousands of youth across Jharkhand learning modern skills.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-charcoal block mb-1.5">Your Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedGray" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Soni Kumari"
                  required
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest text-xs"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-charcoal block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedGray" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest text-xs"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-charcoal block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedGray" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest text-xs"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-forest text-white font-bold text-xs hover:bg-forest-light transition-all flex items-center justify-center gap-1.5 shadow-subtle"
              >
                <span>Continue to Profile Onboarding</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-borderLight text-center text-xs text-mutedGray">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-forest hover:underline">
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
