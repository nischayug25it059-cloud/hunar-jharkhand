// src/context/AppContext.tsx
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { UserProfile, DEFAULT_DEMO_USER, PortfolioProject, UserCertificate, CourseEnrollment } from '../data/users';
import { COURSES_DATA, Course } from '../data/courses';
import { TRANSLATIONS, LanguageCode } from '../data/translations';

interface AppContextType {
  user: UserProfile;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
  enrollCourse: (courseId: string) => void;
  updateCourseProgress: (courseId: string, progress: number, isCompleted?: boolean) => void;
  completeCourse: (courseId: string) => UserCertificate;
  toggleBookmark: (courseId: string) => void;
  isBookmarked: (courseId: string) => boolean;
  isEnrolled: (courseId: string) => boolean;
  getEnrollment: (courseId: string) => CourseEnrollment | undefined;
  addProject: (project: Omit<PortfolioProject, 'id'>) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  login: (email: string, name?: string) => void;
  logout: () => void;
  signupAndOnboard: (data: {
    name: string;
    email: string;
    district: string;
    education: string;
    preferredLanguage: string;
    interests: string[];
    skills: string[];
    careerGoal: string;
  }) => void;
  allCourses: Course[];
}

const STORAGE_USER_KEY = 'hunar_jharkhand_user_profile';
const STORAGE_LANG_KEY = 'hunar_jharkhand_lang';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved user or fall back to default rich demo user
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_USER_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load user from localStorage', e);
    }
    return DEFAULT_DEMO_USER;
  });

  // Load saved language or default to 'en'
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY) as LanguageCode;
      if (saved && TRANSLATIONS[saved]) {
        return saved;
      }
    } catch (e) {
      console.error('Failed to load language from localStorage', e);
    }
    return 'en';
  });

  // Persist user changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
    } catch (e) {
      console.error('Failed to save user to localStorage', e);
    }
  }, [user]);

  // Persist language changes
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch (e) {
      console.error('Failed to save language to localStorage', e);
    }
  };

  // Translation helper
  const t = (key: string, fallback?: string): string => {
    const langDict = TRANSLATIONS[language] || TRANSLATIONS['en'];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // fallback to English
    if (TRANSLATIONS['en'][key]) {
      return TRANSLATIONS['en'][key];
    }
    return fallback || key;
  };

  // Check if course is bookmarked
  const isBookmarked = (courseId: string): boolean => {
    return user.bookmarkedCourseIds.includes(courseId);
  };

  // Toggle bookmark
  const toggleBookmark = (courseId: string) => {
    setUser((prev) => {
      const exists = prev.bookmarkedCourseIds.includes(courseId);
      const updated = exists
        ? prev.bookmarkedCourseIds.filter((id) => id !== courseId)
        : [...prev.bookmarkedCourseIds, courseId];
      return { ...prev, bookmarkedCourseIds: updated };
    });
  };

  // Check enrollment
  const isEnrolled = (courseId: string): boolean => {
    return user.enrolledCourses.some((e) => e.courseId === courseId);
  };

  const getEnrollment = (courseId: string): CourseEnrollment | undefined => {
    return user.enrolledCourses.find((e) => e.courseId === courseId);
  };

  // Enroll in course
  const enrollCourse = (courseId: string) => {
    setUser((prev) => {
      if (prev.enrolledCourses.some((e) => e.courseId === courseId)) {
        return prev;
      }
      const newEnrollment: CourseEnrollment = {
        courseId,
        progress: 10,
        completedLessons: ['lesson-1'],
        enrolledDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        isCompleted: false,
      };
      return {
        ...prev,
        enrolledCourses: [newEnrollment, ...prev.enrolledCourses],
      };
    });
  };

  // Update progress
  const updateCourseProgress = (courseId: string, progress: number, isCompleted: boolean = false) => {
    setUser((prev) => {
      const updated = prev.enrolledCourses.map((e) => {
        if (e.courseId === courseId) {
          return {
            ...e,
            progress: Math.min(100, Math.max(0, progress)),
            isCompleted: isCompleted || progress >= 100,
          };
        }
        return e;
      });
      return { ...prev, enrolledCourses: updated };
    });
  };

  // Complete course and generate Certificate
  const completeCourse = (courseId: string): UserCertificate => {
    const course = COURSES_DATA.find((c) => c.id === courseId);
    const courseTitle = course ? course.title : 'Skill Certification';
    const category = course ? course.category : 'General';
    const instructorName = course ? `${course.instructor.name} (${course.instructor.organization})` : 'Hunar Jharkhand Directorate';

    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newCert: UserCertificate = {
      id: `cert-jh-2026-${randNum}`,
      courseId,
      courseTitle,
      category,
      issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      grade: 'Distinction (95%)',
      verificationCode: `JH-${courseId.slice(0, 4).toUpperCase()}-${randNum}-V`,
      instructorName,
    };

    setUser((prev) => {
      // Mark enrollment as complete
      const updatedEnrollments = prev.enrolledCourses.map((e) => {
        if (e.courseId === courseId) {
          return { ...e, progress: 100, isCompleted: true };
        }
        return e;
      });

      // Avoid duplicate certificate
      const alreadyHasCert = prev.certificates.some((c) => c.courseId === courseId);
      const updatedCerts = alreadyHasCert ? prev.certificates : [newCert, ...prev.certificates];

      // Add course skills to user profile if not present
      const newSkills = course ? course.skillsGained.filter((s) => !prev.skills.includes(s)) : [];
      const updatedSkills = [...prev.skills, ...newSkills.slice(0, 2)];

      // Recalculate portfolio strength
      const newStrength = Math.min(98, prev.portfolioStrength + 4);

      return {
        ...prev,
        enrolledCourses: updatedEnrollments,
        certificates: updatedCerts,
        skills: updatedSkills,
        portfolioStrength: newStrength,
      };
    });

    return newCert;
  };

  // Add project to portfolio
  const addProject = (projectData: Omit<PortfolioProject, 'id'>) => {
    const newProj: PortfolioProject = {
      ...projectData,
      id: `proj-${Date.now()}`,
    };
    setUser((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects],
      portfolioStrength: Math.min(100, prev.portfolioStrength + 5),
    }));
  };

  // Update profile
  const updateProfile = (updates: Partial<UserProfile>) => {
    setUser((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  // Login
  const login = (email: string, name?: string) => {
    setUser((prev) => ({
      ...prev,
      email,
      name: name || (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)),
    }));
  };

  // Logout (reset to demo)
  const logout = () => {
    setUser({
      ...DEFAULT_DEMO_USER,
      id: 'guest-' + Date.now(),
      name: 'Guest Learner',
      email: 'guest@adivasi-skills.in',
      portfolioStrength: 20,
      certificates: [],
      projects: [],
      enrolledCourses: [],
      bookmarkedCourseIds: [],
    });
  };

  // Signup and auto-create portfolio
  const signupAndOnboard = (data: {
    name: string;
    email: string;
    district: string;
    education: string;
    preferredLanguage: string;
    interests: string[];
    skills: string[];
    careerGoal: string;
  }) => {
    const autoCreatedUser: UserProfile = {
      id: `user-${Date.now()}`,
      name: data.name,
      email: data.email,
      district: data.district || 'Ranchi',
      education: data.education || 'Senior Secondary (12th)',
      preferredLanguage: data.preferredLanguage || 'Hindi & English',
      interests: data.interests.length ? data.interests : ['Digital Skills', 'Local Products'],
      skills: data.skills.length ? data.skills : ['Computer Fundamentals', 'Problem Solving'],
      careerGoal: data.careerGoal || 'Build a sustainable career and certified skills.',
      bio: `Ambitious youth from ${data.district || 'Jharkhand'} focused on learning modern skills and creating local economic impact.`,
      portfolioStrength: 65,
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      projects: [],
      certificates: [],
      enrolledCourses: [
        {
          courseId: 'digital-marketing-local-business',
          progress: 15,
          completedLessons: ['lesson-1'],
          enrolledDate: 'Just now',
          isCompleted: false,
        },
      ],
      bookmarkedCourseIds: ['excel-business-analytics', 'lac-cultivation-value-addition'],
    };

    setUser(autoCreatedUser);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        language,
        setLanguage,
        t,
        enrollCourse,
        updateCourseProgress,
        completeCourse,
        toggleBookmark,
        isBookmarked,
        isEnrolled,
        getEnrollment,
        addProject,
        updateProfile,
        login,
        logout,
        signupAndOnboard,
        allCourses: COURSES_DATA,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
