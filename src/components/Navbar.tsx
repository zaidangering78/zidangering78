import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import {
  CONTACT_DATA,
  EXPERIENCES_DATA,
  PROFILE_DATA,
  SKILLS_DATA,
} from '../data/portfolioData';
import { downloadCVPDF } from '../utils/pdfExport';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/profil', label: 'Profil Saya' },
  { to: '/pengalaman', label: 'Pengalaman' },
  { to: '/proyek', label: 'Karya & Proyek' },
  { to: '/sertifikat', label: 'Sertifikat' },
  { to: '/keahlian', label: 'Keahlian' },
  { to: '/kontak', label: 'Kontak' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleDownloadCV = () => {
    downloadCVPDF(PROFILE_DATA, EXPERIENCES_DATA, SKILLS_DATA, CONTACT_DATA);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06090F]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <NavLink
          to="/"
          className="font-display text-lg font-bold tracking-tight text-slate-50 transition-colors hover:text-sky-400 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-1"
        >
          {PROFILE_DATA.brandName}
        </NavLink>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden lg:flex items-center gap-5 xl:gap-6"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded ${
                  isActive
                    ? 'text-sky-400'
                    : 'text-slate-300 hover:text-slate-50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute inset-x-0 -bottom-[15px] h-[2px] bg-sky-400"
                      aria-hidden="true"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-sky-400 active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <Download className="h-4 w-4 shrink-0" />
            <span>Unduh CV</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#0F1724] text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-400 lg:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <nav
          aria-label="Navigasi seluler"
          className="border-t border-white/10 bg-[#0B111C] px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-slate-50'
                  }`
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
