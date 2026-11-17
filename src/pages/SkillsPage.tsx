import React, { useEffect, useState } from 'react';
import { Check, Pencil, RotateCcw } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import {
  PROFILE_DATA,
  SKILLS_DATA,
  SkillCategory,
  SkillItem,
} from '../data/portfolioData';

const STORAGE_KEY = 'titl_skills_percentages_v1';

const CATEGORY_FILTERS: ('Semua' | SkillCategory)[] = [
  'Semua',
  'Instalasi & Panel',
  'Kontrol & Otomasi',
  'Alat Ukur & K3',
];

export const SkillsPage: React.FC = () => {
  const [skills, setSkills] = useState<SkillItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return SKILLS_DATA;
      const map = JSON.parse(saved) as Record<string, number>;
      return SKILLS_DATA.map((skill) => ({
        ...skill,
        percentage:
          typeof map[skill.id] === 'number'
            ? Math.min(100, Math.max(0, map[skill.id]))
            : skill.percentage,
      }));
    } catch {
      return SKILLS_DATA;
    }
  });

  const [activeCategory, setActiveCategory] = useState<'Semua' | SkillCategory>('Semua');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    try {
      const map: Record<string, number> = {};
      skills.forEach((s) => {
        map[s.id] = s.percentage;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch {
      // Ignore storage errors
    }
  }, [skills]);

  const updatePercentage = (id: string, value: number) => {
    const clamped = Math.min(100, Math.max(0, Math.round(value)));
    setSkills((prev) =>
      prev.map((skill) => (skill.id === id ? { ...skill, percentage: clamped } : skill))
    );
  };

  const resetPercentages = () => {
    setSkills(SKILLS_DATA);
    localStorage.removeItem(STORAGE_KEY);
  };

  const filteredSkills =
    activeCategory === 'Semua'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const avgPercentage = Math.round(
    skills.reduce((acc, s) => acc + s.percentage, 0) / skills.length
  );

  return (
    <PageShell title={`Keahlian Teknis TITL — ${PROFILE_DATA.fullName} | Portofolio TITL`}>
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-mono-tech text-sky-400">Kompetensi Teknis Kelistrikan</p>
          <h1 className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Keahlian
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
            Daftar kemampuan teknis bidang Teknik Instalasi Tenaga Listrik. Persentase penguasaan dapat diedit secara langsung sesuai perkembangan kompetensi Anda.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setEditMode((prev) => !prev)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              editMode
                ? 'bg-yellow-400 text-slate-950 hover:bg-yellow-300'
                : 'border border-sky-400/50 bg-[#0F1724] text-sky-300 hover:bg-sky-500/15'
            }`}
          >
            {editMode ? (
              <>
                <Check className="h-4 w-4" />
                <span>Selesai Edit</span>
              </>
            ) : (
              <>
                <Pencil className="h-4 w-4" />
                <span>Edit Persentase</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={resetPercentages}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#0B111C] px-3.5 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-white/30 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Default</span>
          </button>
        </div>
      </div>

      {/* Filter Bar + Average Summary */}
      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter kategori keahlian"
        >
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'border border-white/10 bg-[#0B111C] text-slate-300 hover:border-sky-400/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="font-mono-tech text-xs text-slate-400">
          Rata-rata Penguasaan ({skills.length} Kompetensi):{' '}
          <span className="font-bold text-yellow-400">{avgPercentage}%</span>
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-xl border border-white/10 bg-[#0B111C] p-6 transition-colors duration-150 hover:border-sky-400/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-mono-tech text-xs text-sky-400">
                  {skill.category} · {skill.standardRef}
                </p>
                <h2 className="mt-1 font-display text-lg font-bold text-slate-50">
                  {skill.name}
                </h2>
              </div>

              <span className="font-mono-tech text-xl font-bold text-yellow-400 tabular-nums shrink-0">
                {skill.percentage}%
              </span>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {skill.description}
            </p>

            {/* Progress Bar */}
            <div
              className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-800"
              role="progressbar"
              aria-valuenow={skill.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Tingkat keahlian ${skill.name}`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-yellow-400 transition-all duration-200"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>

            {/* Interactive Editor Controls when Edit Mode is active */}
            {editMode && (
              <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-3.5">
                <label
                  htmlFor={`range-${skill.id}`}
                  className="text-xs font-medium text-slate-300 shrink-0"
                >
                  Ubah Nilai:
                </label>
                <input
                  id={`range-${skill.id}`}
                  type="range"
                  min={0}
                  max={100}
                  value={skill.percentage}
                  onChange={(e) => updatePercentage(skill.id, Number(e.target.value))}
                  className="h-1.5 flex-1 cursor-pointer accent-sky-400"
                />
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={skill.percentage}
                  onChange={(e) => updatePercentage(skill.id, Number(e.target.value))}
                  aria-label={`Input angka persentase ${skill.name}`}
                  className="w-16 rounded-md border border-white/15 bg-[#06090F] px-2 py-1 text-center font-mono-tech text-xs text-slate-100 focus:border-sky-400 focus:outline-none"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </PageShell>
  );
};
