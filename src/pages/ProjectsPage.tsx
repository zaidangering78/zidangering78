import React, { useEffect, useState } from 'react';
import { Eye, Layers, Wrench, X } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SafeImage } from '../components/SafeImage';
import { ProjectSchematicDiagram } from '../components/ElectricalSymbols';
import {
  PROFILE_DATA,
  PROJECT_CATEGORIES,
  PROJECTS_DATA,
  ProjectCategory,
  ProjectItem,
} from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | ProjectCategory>('Semua');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [modalView, setModalView] = useState<'photo' | 'schematic'>('photo');

  const filteredProjects =
    selectedCategory === 'Semua'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openProjectModal = (project: ProjectItem) => {
    setModalView('photo');
    setActiveProject(project);
  };

  return (
    <PageShell title={`Karya & Proyek Kelistrikan — ${PROFILE_DATA.fullName} | Portofolio TITL`}>
      {/* Header & Category Filters */}
      <div className="border-b border-white/10 pb-8">
        <p className="text-xs font-mono-tech text-sky-400">Galeri Pekerjaan &amp; Instalasi</p>
        <h1 className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
          Karya &amp; Proyek
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
          Dokumentasi pekerjaan instalasi penerangan, stop kontak, panel distribusi, wiring diagram, kontrol motor listrik, serta sistem proteksi. Klik proyek atau gambar untuk melihat detail lengkap dalam ukuran besar.
        </p>

        <div
          className="mt-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter kategori proyek kelistrikan"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'Semua'}
            onClick={() => setSelectedCategory('Semua')}
            className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              selectedCategory === 'Semua'
                ? 'bg-sky-500 text-slate-950 font-semibold'
                : 'border border-white/10 bg-[#0B111C] text-slate-300 hover:border-sky-400/40 hover:text-slate-100'
            }`}
          >
            Semua ({PROJECTS_DATA.length})
          </button>

          {PROJECT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'border border-white/10 bg-[#0B111C] text-slate-300 hover:border-sky-400/40 hover:text-slate-100'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0B111C] transition-all duration-150 hover:-translate-y-0.5 hover:border-sky-400/45"
          >
            <button
              type="button"
              onClick={() => openProjectModal(project)}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F1724] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
              aria-label={`Lihat detail ukuran besar: ${project.title}`}
            >
              <SafeImage
                src={project.imageUrl}
                alt={project.title}
                fallbackTitle={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06090F]/80 via-transparent to-transparent opacity-80" />
              <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-[#06090F]/85 px-2.5 py-1 text-xs font-medium text-sky-300 border border-sky-400/30">
                <Eye className="h-3.5 w-3.5" />
                <span>Perbesar Detail</span>
              </span>
            </button>

            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono-tech">
                  <span className="text-sky-400 truncate">{project.category}</span>
                  <span className="text-slate-400 shrink-0">{project.year}</span>
                </div>

                <h2 className="mt-2 font-display text-lg font-bold leading-snug text-slate-50">
                  {project.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 space-y-2 border-t border-white/10 pt-3.5 text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">Fungsi Proyek: </span>
                    <span className="text-slate-400">{project.functionSummary}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Alat &amp; Bahan: </span>
                    <span className="text-slate-400">
                      {project.toolsAndMaterials.slice(0, 3).join(' · ')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3.5">
                <div className="flex items-center gap-2 text-xs text-yellow-400 min-w-0">
                  <Wrench className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{project.technologySystem}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openProjectModal(project)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Detail →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox & Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-sky-400/30 bg-[#0B111C] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#0B111C]/95 px-6 py-4 backdrop-blur-md">
              <div className="min-w-0">
                <p className="text-xs font-mono-tech text-sky-400">
                  {activeProject.category} · {activeProject.year}
                </p>
                <h2
                  id="modal-project-title"
                  className="mt-0.5 font-display text-lg sm:text-xl font-bold text-slate-50 truncate"
                >
                  {activeProject.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Tutup detail proyek"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#0F1724] text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-300 shrink-0 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* View Switcher: Photo vs IEC Schematic */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#070B13] px-6 py-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setModalView('photo')}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    modalView === 'photo'
                      ? 'bg-sky-500 text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Foto Dokumentasi
                </button>
                <button
                  type="button"
                  onClick={() => setModalView('schematic')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    modalView === 'schematic'
                      ? 'bg-yellow-400 text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Diagram Skematik IEC</span>
                </button>
              </div>
              <span className="hidden sm:inline font-mono-tech text-xs text-slate-400">
                Tekan ESC untuk menutup
              </span>
            </div>

            {/* Large Media Viewer */}
            <div className="aspect-[16/9] w-full bg-[#06090F]">
              {modalView === 'photo' ? (
                <SafeImage
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  fallbackTitle={activeProject.title}
                  className="h-full w-full object-contain"
                />
              ) : (
                <ProjectSchematicDiagram
                  kind={activeProject.schematicKind}
                  title={activeProject.title}
                />
              )}
            </div>

            {/* Detailed Technical Breakdown */}
            <div className="grid gap-6 p-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-sm font-semibold text-sky-400">
                    Deskripsi Pekerjaan
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm font-semibold text-sky-400">
                    Fungsi Proyek
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {activeProject.functionSummary}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm font-semibold text-yellow-400">
                    Teknologi &amp; Sistem yang Diterapkan
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-200">
                    {activeProject.technologySystem}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0F1724] p-5">
                <h3 className="font-display text-sm font-semibold text-slate-100">
                  Alat &amp; Bahan yang Digunakan
                </h3>
                <ul className="mt-3 space-y-2">
                  {activeProject.toolsAndMaterials.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
};
