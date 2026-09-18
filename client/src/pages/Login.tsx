// src/pages/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock, ShieldCheck, UserCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DEFAULT_DEMO_USER } from '../data/users';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, updateProfile } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    login(email.trim());
    navigate('/profile');
  };

  const handleOneClickDemoLogin = () => {
    updateProfile(DEFAULT_DEMO_USER);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-borderLight shadow-elevated">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-forest text-white mx-auto mb-3 flex items-center justify-center shadow-subtle">
              <ShieldCheck className="w-6 h-6 text-gold" />
            </div>
            <h1 className="text-2xl font-extrabold text-charcoal tracking-tight">
              Welcome Back
            </h1>
            <p className="text-xs text-mutedGray mt-1">
              Access your enrolled courses, certificates, and portfolio.
            </p>
          </div>

          {/* Quick Demo Login Preset Button */}
          <div className="mb-6 p-4 rounded-2xl bg-background border border-borderLight text-center">
            <p className="text-[11px] font-bold text-charcoal mb-1">Instant Demo Experience</p>
            <p className="text-[10px] text-mutedGray mb-3">
              One-click sign in as <strong>Birsa Kumar (Ranchi)</strong> with 3 completed certificates & active projects.
            </p>
            <button
              type="button"
              onClick={handleOneClickDemoLogin}
              className="w-full py-2.5 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light transition-colors flex items-center justify-center gap-1.5 shadow-subtle"
            >
              <UserCheck className="w-4 h-4" />
              <span>Continue as Birsa Kumar (Demo)</span>
            </button>
          </div>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-borderLight" />
            </div>
            <span className="relative bg-white px-3 text-[10px] font-bold uppercase tracking-widest text-mutedGray">
              Or Sign In with Email
            </span>
          </div>

          {/* Custom Login Form */}
          <form onSubmit={handleCustomLogin} className="space-y-4 text-xs">
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
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
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
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-forest text-white font-bold text-xs hover:bg-forest-light transition-all flex items-center justify-center gap-1.5 shadow-subtle"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-borderLight text-center text-xs text-mutedGray">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-forest hover:underline">
              Create one in 30 seconds
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
