// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Learning from './pages/Learning';
import Career from './pages/Career';
import AIGuide from './pages/AIGuide';
import Portfolio from './pages/Portfolio';
import PortfolioBuilder from './pages/PortfolioBuilder';
import Certificates from './pages/Certificates';
import CertificateDetails from './pages/CertificateDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Onboarding from './pages/Onboarding';
import Profile from './pages/Profile';
import Bookmarks from './pages/Bookmarks';
import About from './pages/About';

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background text-charcoal font-sans antialiased selection:bg-forest/10 selection:text-forest">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              <Route path="/learn/:id" element={<Learning />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career-paths" element={<Career />} />
              <Route path="/ai-guide" element={<AIGuide />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:username" element={<Portfolio />} />
              <Route path="/portfolio/edit" element={<PortfolioBuilder />} />
              <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/certificates/:id" element={<CertificateDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/about" element={<About />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
