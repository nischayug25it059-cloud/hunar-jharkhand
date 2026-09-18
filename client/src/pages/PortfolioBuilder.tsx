// src/pages/PortfolioBuilder.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { JHARKHAND_DISTRICTS } from '../data/districts';

export const PortfolioBuilder: React.FC = () => {
  const { user, updateProfile, addProject } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [district, setDistrict] = useState(user.district);
  const [education, setEducation] = useState(user.education);
  const [bio, setBio] = useState(user.bio);
  const [careerGoal, setCareerGoal] = useState(user.careerGoal);
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<string[]>(user.skills);

  // New project modal / inline form
  const [showAddProject, setShowAddProject] = useState(false);
  const [projTitle, setProjTitle] = useState('');
  const [projDesc, setProjDesc] = useState('');
  const [projTags, setProjTags] = useState('');
  const [projLink, setProjLink] = useState('');
  const [projGithub, setProjGithub] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      district,
      education,
      bio,
      careerGoal,
      skills,
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      navigate('/portfolio');
    }, 1200);
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projTitle.trim() || !projDesc.trim()) return;

    addProject({
      title: projTitle,
      description: projDesc,
      tags: projTags ? projTags.split(',').map((t) => t.trim()) : ['Project'],
      link: projLink || undefined,
      github: projGithub || undefined,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    });

    setProjTitle('');
    setProjDesc('');
    setProjTags('');
    setProjLink('');
    setProjGithub('');
    setShowAddProject(false);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold text-mutedGray hover:text-charcoal mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Live Portfolio</span>
        </Link>

        <div className="bg-white rounded-[32px] border border-borderLight shadow-card p-6 sm:p-10">
          <div className="flex items-center justify-between pb-6 border-b border-borderLight mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-forest/10 text-forest mb-2 inline-block">
                PORTFOLIO EDITOR
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                Edit Your Professional Identity
              </h1>
              <p className="text-xs text-mutedGray mt-1">
                Customize how employers and clients view your profile, bio, skills, and projects.
              </p>
            </div>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-8">
            {/* Basic Info */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-charcoal uppercase tracking-wider">Basic Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-charcoal block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                    required
                  />
                </div>

                <div>
                  <label className="font-bold text-charcoal block mb-1.5">District (Jharkhand)</label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                  >
                    {JHARKHAND_DISTRICTS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-charcoal block mb-1.5">Education / Qualification</label>
                  <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-charcoal block mb-1.5">Professional Bio</label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest leading-relaxed"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-charcoal block mb-1.5">Primary Career Goal</label>
                  <input
                    type="text"
                    value={careerGoal}
                    onChange={(e) => setCareerGoal(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>
              </div>
            </div>

            {/* Skills Editor */}
            <div className="space-y-3 pt-6 border-t border-borderLight">
              <h2 className="text-sm font-bold text-charcoal uppercase tracking-wider">Skills & Competencies</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-background border border-borderLight text-xs font-semibold text-charcoal flex items-center gap-2"
                  >
                    <span>{s}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(s)}
                      className="text-mutedGray hover:text-rose-500 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 max-w-md">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add skill (e.g. Graphic Design, Lac Inoculation)..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-background border border-borderLight text-xs text-charcoal focus:outline-none focus:border-forest"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-4 py-2 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light"
                >
                  Add Skill
                </button>
              </div>
            </div>

            {/* Save Buttons */}
            <div className="pt-6 border-t border-borderLight flex items-center justify-between">
              {savedSuccess ? (
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Portfolio updated successfully! Redirecting...</span>
                </div>
              ) : (
                <span className="text-xs text-mutedGray">Changes update your live portfolio instantly.</span>
              )}

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-forest text-white text-xs font-bold hover:bg-forest-light transition-all flex items-center gap-2 shadow-subtle"
              >
                <Save className="w-4 h-4" />
                <span>Save All Changes</span>
              </button>
            </div>
          </form>

          {/* Add Project Section */}
          <div className="mt-12 pt-8 border-t-2 border-borderLight">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-base font-bold text-charcoal">Custom Projects & Case Studies</h2>
                <p className="text-xs text-mutedGray">Add real work to prove your practical capability.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddProject(!showAddProject)}
                className="px-4 py-2 rounded-xl bg-background border border-borderLight text-xs font-bold text-forest hover:bg-borderLight/50 flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{showAddProject ? 'Cancel' : 'New Project'}</span>
              </button>
            </div>

            {showAddProject && (
              <form onSubmit={handleCreateProject} className="bg-background p-6 rounded-2xl border border-borderLight space-y-4 mb-6">
                <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider">Project Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="sm:col-span-2">
                    <label className="font-bold text-charcoal block mb-1">Project Title</label>
                    <input
                      type="text"
                      value={projTitle}
                      onChange={(e) => setProjTitle(e.target.value)}
                      placeholder="e.g. Netarhat Eco-Homestay Booking Website"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-bold text-charcoal block mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={projDesc}
                      onChange={(e) => setProjDesc(e.target.value)}
                      placeholder="Explain what problem this solved and tools used..."
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-bold text-charcoal block mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={projTags}
                      onChange={(e) => setProjTags(e.target.value)}
                      placeholder="e.g. React, Tailwind, Tourism"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-charcoal block mb-1">Live URL (optional)</label>
                    <input
                      type="url"
                      value={projLink}
                      onChange={(e) => setProjLink(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-borderLight text-charcoal focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light"
                >
                  Add Project to Portfolio
                </button>
              </form>
            )}

            <div className="space-y-3">
              {user.projects.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-background border border-borderLight flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-charcoal">{p.title}</p>
                    <p className="text-[11px] text-mutedGray truncate max-w-md">{p.description}</p>
                  </div>
                  <span className="text-[10px] text-mutedGray font-mono">{p.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder;
