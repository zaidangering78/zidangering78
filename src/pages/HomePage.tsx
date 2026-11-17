import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, ShieldCheck, Wrench, Zap } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SafeImage } from '../components/SafeImage';
import {
  CERTIFICATES_DATA,
  PROFILE_DATA,
  PROJECTS_DATA,
} from '../data/portfolioData';

export const HomePage: React.FC = () => {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const featuredCertificates = CERTIFICATES_DATA.slice(0, 2);

  return (
    <PageShell title={`${PROFILE_DATA.fullName} — Electrical Installation Technician | Portofolio TITL`}>
      {/* Hero Split Section */}
      <section className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Typographic Hierarchy & CTAs */}
        <div className="flex flex-col justify-between py-2 lg:col-span-7">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-sky-400">
              <span>Teknik Instalasi Tenaga Listrik</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-yellow-400">{PROFILE_DATA.role}</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] text-balance">
                {PROFILE_DATA.fullName}
              </h1>
              <p className="font-display text-lg font-semibold text-sky-400 sm:text-xl">
                "{PROFILE_DATA.slogan}"
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300">
              {PROFILE_DATA.shortDescription}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/proyek"
                className="inline-flex items-center gap-2.5 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-150 hover:bg-yellow-300 hover:-translate-y-0.5 safety-glow whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/kontak"
                className="inline-flex items-center gap-2.5 rounded-lg border border-sky-400/50 bg-[#0F1724] px-5 py-3 text-sm font-semibold text-sky-300 transition-all duration-150 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Mail className="h-4 w-4" />
                <span>Hubungi Saya</span>
              </Link>
            </div>
          </div>

          {/* Subtle Technical Readout Divider (No Pill Boxes) */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-tech text-slate-400">
              <span>220V / 380V AC</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>PUIL 2011 &amp; IEC 60617</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Motor Control &amp; Panel Wiring</span>
            </div>
          </div>
        </div>

        {/* Right Column: Large Technician Portrait */}
        <div className="lg:col-span-5">
          <div className="relative h-full min-h-[380px] lg:min-h-[460px] overflow-hidden rounded-2xl border border-sky-400/30 bg-[#0B111C] electric-glow">
            <SafeImage
              src={PROFILE_DATA.photoUrl}
              alt={`Foto profil ${PROFILE_DATA.fullName} — ${PROFILE_DATA.role}`}
              fallbackTitle={PROFILE_DATA.fullName}
              className="h-full w-full object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06090F]/85 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-base font-bold text-slate-50">
                  {PROFILE_DATA.fullName}
                </p>
                <p className="text-xs text-sky-300">
                  {PROFILE_DATA.major}
                </p>
              </div>
              <Zap className="h-5 w-5 text-yellow-400 shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width 4-Column Technical Pillars Strip */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROFILE_DATA.highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/10 bg-[#0B111C]/90 p-5 transition-colors duration-150 hover:border-sky-400/40"
          >
            <p className="text-xs font-medium text-slate-400">{item.label}</p>
            <p className="mt-1.5 font-display text-xl font-bold text-slate-50 font-mono-tech">
              {item.value}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      {/* Featured Projects Preview */}
      <section className="mt-16 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-mono-tech text-sky-400">01. Dokumentasi Pekerjaan</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-slate-50 sm:text-3xl">
              Karya &amp; Proyek Kelistrikan
            </h2>
          </div>
          <Link
            to="/proyek"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Lihat Semua Proyek</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to="/proyek"
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0B111C] transition-all duration-150 hover:-translate-y-0.5 hover:border-sky-400/45"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#0F1724]">
                <SafeImage
                  src={project.imageUrl}
                  alt={project.title}
                  fallbackTitle={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-sky-400">
                    <span className="truncate">{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-50 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2 text-xs text-slate-300">
                  <Wrench className="h-3.5 w-3.5 text-yellow-400 shrink-0" />
                  <span className="truncate">{project.technologySystem}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Navigation & Certificates Teaser */}
      <section className="mt-16 grid gap-6 lg:grid-cols-12">
        <div className="rounded-xl border border-white/10 bg-[#0B111C] p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-yellow-400">
              <ShieldCheck className="h-4 w-4" />
              <span>02. Sertifikasi &amp; Kualifikasi</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-slate-50">
              Sertifikat Kompetensi &amp; Pelatihan
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 max-w-xl">
              Dokumentasi sertifikat keahlian instalasi tenaga, keselamatan kerja K3 listrik, serta pelatihan kontrol motor dan PLC dasar dalam format dokumen siap unduh.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featuredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="rounded-lg border border-white/10 bg-[#0F1724] p-4"
              >
                <p className="font-mono-tech text-xs text-sky-400">
                  {cert.year} · {cert.credentialNumber}
                </p>
                <h3 className="mt-1.5 font-display text-sm font-semibold text-slate-100 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400 truncate">{cert.issuer}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/sertifikat"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>Buka Galeri Sertifikat</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-sky-400/25 bg-gradient-to-br from-[#0F1724] to-[#090F1A] p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-3">
            <p className="text-xs font-mono-tech text-sky-400">03. Profil &amp; Keahlian</p>
            <h2 className="font-display text-2xl font-bold text-slate-50">
              Siap Berkontribusi di Lapangan &amp; Panel Workshop
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Pelajari latar belakang pendidikan, riwayat Praktik Kerja Lapangan (PKL), penguasaan alat ukur listrik, hingga kemampuan pembacaan wiring diagram secara detail.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/profil"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#0B111C] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-sky-400/50 hover:text-sky-300 whitespace-nowrap shrink-0"
            >
              <span>Profil Saya</span>
            </Link>
            <Link
              to="/keahlian"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#0B111C] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-sky-400/50 hover:text-sky-300 whitespace-nowrap shrink-0"
            >
              <span>Daftar Keahlian</span>
            </Link>
            <Link
              to="/pengalaman"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#0B111C] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-sky-400/50 hover:text-sky-300 whitespace-nowrap shrink-0"
            >
              <span>Riwayat Pengalaman</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
