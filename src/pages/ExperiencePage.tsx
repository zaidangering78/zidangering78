import React, { useState } from 'react';
import {
  Award,
  Briefcase,
  Calendar,
  GraduationCap,
  HardHat,
  MapPin,
  Users,
} from 'lucide-react';
import { PageShell } from '../components/PageShell';
import {
  EXPERIENCES_DATA,
  ExperienceCategory,
  PROFILE_DATA,
} from '../data/portfolioData';

const FILTERS: ('Semua' | ExperienceCategory)[] = [
  'Semua',
  'Pekerjaan',
  'PKL',
  'Pelatihan',
  'Organisasi',
  'Pendidikan',
];

function getCategoryIcon(category: ExperienceCategory) {
  switch (category) {
    case 'Pendidikan':
      return GraduationCap;
    case 'PKL':
      return HardHat;
    case 'Pekerjaan':
      return Briefcase;
    case 'Organisasi':
      return Users;
    case 'Pelatihan':
      return Award;
  }
}

export const ExperiencePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Semua' | ExperienceCategory>('Semua');

  const filtered =
    activeFilter === 'Semua'
      ? EXPERIENCES_DATA
      : EXPERIENCES_DATA.filter((item) => item.category === activeFilter);

  return (
    <PageShell title={`Pengalaman & Pendidikan — ${PROFILE_DATA.fullName} | Portofolio TITL`}>
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <p className="text-xs font-mono-tech text-sky-400">Riwayat &amp; Rekam Jejak</p>
        <h1 className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
          Pengalaman &amp; Pendidikan
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          Linimasa riwayat pendidikan kejuruan, Praktik Kerja Lapangan (PKL), pengalaman kerja kelistrikan, organisasi, dan pelatihan teknis.
        </p>

        {/* Interactive Filter Tabs */}
        <div
          className="mt-6 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter kategori pengalaman"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'border border-white/10 bg-[#0B111C] text-slate-300 hover:border-sky-400/40 hover:text-slate-100'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Professional Timeline */}
      <div className="relative mt-10 space-y-8 pl-6 sm:pl-10 before:absolute before:left-[11px] sm:before:left-[19px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-sky-400/70 before:via-sky-500/30 before:to-transparent">
        {filtered.map((exp) => {
          const Icon = getCategoryIcon(exp.category);
          return (
            <article key={exp.id} className="relative">
              {/* Timeline Node Icon */}
              <div
                className="absolute -left-6 sm:-left-10 top-1 flex h-6 w-6 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-sky-400/50 bg-[#0B111C] text-sky-400 electric-glow"
                aria-hidden="true"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0B111C] p-6 sm:p-7 transition-colors duration-150 hover:border-sky-400/35">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech">
                    <span className="text-yellow-400 font-semibold">{exp.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-300">{exp.institution}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono-tech text-sky-300">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h2 className="mt-2.5 font-display text-xl font-bold text-slate-50">
                  {exp.title}
                </h2>

                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                  <span>{exp.location}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {exp.summary}
                </p>

                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  {exp.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </PageShell>
  );
};
