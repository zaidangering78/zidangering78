import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_DATA, PROFILE_DATA } from '../data/portfolioData';
import { IecBreakerMark } from './ElectricalSymbols';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-[#070B13]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-slate-100">
              <IecBreakerMark className="h-5 w-5 text-sky-400" />
              <span className="font-display text-lg font-bold tracking-tight">
                {PROFILE_DATA.fullName}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {PROFILE_DATA.role} · {PROFILE_DATA.major}. "{PROFILE_DATA.slogan}"
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-slate-200 mb-3">
              Navigasi Halaman
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-sky-400 transition-colors">
                  Profil Saya
                </Link>
              </li>
              <li>
                <Link to="/pengalaman" className="hover:text-sky-400 transition-colors">
                  Pengalaman
                </Link>
              </li>
              <li>
                <Link to="/proyek" className="hover:text-sky-400 transition-colors">
                  Karya &amp; Proyek
                </Link>
              </li>
              <li>
                <Link to="/sertifikat" className="hover:text-sky-400 transition-colors">
                  Sertifikat
                </Link>
              </li>
              <li>
                <Link to="/keahlian" className="hover:text-sky-400 transition-colors">
                  Keahlian
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-sky-400 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-2.5 text-sm text-slate-400">
            <h3 className="font-display text-sm font-semibold text-slate-200 mb-3">
              Kontak Langsung
            </h3>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-sky-400 shrink-0" />
              <span className="truncate">{CONTACT_DATA.email}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-yellow-400 shrink-0" />
              <span className="font-mono-tech text-xs">{CONTACT_DATA.whatsappDisplay}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
              <span>{CONTACT_DATA.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {PROFILE_DATA.fullName} · Portofolio Teknik Instalasi Tenaga Listrik.
          </p>
          <p>Seluruh data contoh dapat disesuaikan pada file data portofolio.</p>
        </div>
      </div>
    </footer>
  );
};

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Kembali ke atas"
      className="fixed bottom-6 right-6 z-30 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-sky-400/40 bg-[#0F1724]/95 text-sky-400 shadow-lg backdrop-blur-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-sky-500 hover:text-slate-950 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
