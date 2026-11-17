/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { ElectricLoader } from './components/ElectricLoader';
import { ElectricTraceBackground } from './components/ElectricalSymbols';
import { Navbar } from './components/Navbar';
import { BackToTopButton, Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/pengalaman" element={<ExperiencePage />} />
        <Route path="/proyek" element={<ProjectsPage />} />
        <Route path="/sertifikat" element={<CertificatesPage />} />
        <Route path="/keahlian" element={<SkillsPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="relative flex min-h-screen flex-col bg-[#06090F] text-slate-100">
          <ElectricLoader />
          <ElectricTraceBackground />
          <Navbar />
          <div className="flex-1">
            <AnimatedRoutes />
          </div>
          <Footer />
          <BackToTopButton />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
