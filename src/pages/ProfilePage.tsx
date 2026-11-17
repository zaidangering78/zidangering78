import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Download,
  GraduationCap,
  MapPin,
  Target,
  User,
  Zap,
} from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SafeImage } from '../components/SafeImage';
import {
  CONTACT_DATA,
  EXPERIENCES_DATA,
  PROFILE_DATA,
  SKILLS_DATA,
} from '../data/portfolioData';
import { downloadCVPDF } from '../utils/pdfExport';

export const ProfilePage: React.FC = () => {
  const handleDownloadCV = () => {
    downloadCVPDF(PROFILE_DATA, EXPERIENCES_DATA, SKILLS_DATA, CONTACT_DATA);
  };

  return (
    <PageShell title={`Profil Saya — ${PROFILE_DATA.fullName} | Portofolio TITL`}>
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-mono-tech text-sky-400">Identitas &amp; Latar Belakang</p>
          <h1 className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Profil Saya
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
            Informasi lengkap pribadi, latar belakang pendidikan Teknik Instalasi Tenaga Listrik, tujuan karier, dan motivasi di dunia kelistrikan.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDownloadCV}
          className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <Download className="h-4 w-4" />
          <span>Unduh CV (PDF)</span>
        </button>
      </div>

      {/* Main Profile Grid */}
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        {/* Left Column: Photo + Personal Identity Card */}
        <div className="space-y-6 lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-sky-400/25 bg-[#0B111C]">
            <div className="aspect-[4/4] w-full overflow-hidden bg-[#0F1724]">
              <SafeImage
                src={PROFILE_DATA.photoUrl}
                alt={PROFILE_DATA.fullName}
                fallbackTitle={PROFILE_DATA.fullName}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-50">
                  {PROFILE_DATA.fullName}
                </h2>
                <p className="mt-1 text-sm font-medium text-sky-400">
                  {PROFILE_DATA.role}
                </p>
              </div>

              <dl className="space-y-3.5 border-t border-white/10 pt-5 text-sm">
                <div className="flex items-start gap-3">
                  <User className="mt-0.5 h-4 w-4 text-sky-400 shrink-0" />
                  <div>
                    <dt className="text-xs text-slate-400">Tempat &amp; Tanggal Lahir</dt>
                    <dd className="mt-0.5 font-medium text-slate-100">
                      {PROFILE_DATA.birthPlaceDate}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-sky-400 shrink-0" />
                  <div>
                    <dt className="text-xs text-slate-400">Alamat</dt>
                    <dd className="mt-0.5 font-medium text-slate-100">
                      {PROFILE_DATA.address}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 text-yellow-400 shrink-0" />
                  <div>
                    <dt className="text-xs text-slate-400">Pendidikan Terakhir</dt>
                    <dd className="mt-0.5 font-medium text-slate-100">
                      {PROFILE_DATA.lastEducation}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="mt-0.5 h-4 w-4 text-yellow-400 shrink-0" />
                  <div>
                    <dt className="text-xs text-slate-400">Jurusan / Kompetensi Keahlian</dt>
                    <dd className="mt-0.5 font-medium text-sky-300">
                      {PROFILE_DATA.major}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Right Column: Biography, Career Goal, Motivation Cards */}
        <div className="space-y-6 lg:col-span-7">
          <article className="rounded-2xl border border-white/10 bg-[#0B111C] p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-sky-400">
              <User className="h-5 w-5" />
              <h2 className="font-display text-xl font-bold text-slate-50">
                Deskripsi Diri &amp; Biografi
              </h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {PROFILE_DATA.biography}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {PROFILE_DATA.shortDescription}
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#0B111C] p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-yellow-400">
              <Target className="h-5 w-5" />
              <h2 className="font-display text-xl font-bold text-slate-50">
                Tujuan Karier
              </h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {PROFILE_DATA.careerGoal}
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#0B111C] p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-sky-400">
              <Compass className="h-5 w-5" />
              <h2 className="font-display text-xl font-bold text-slate-50">
                Motivasi dalam Dunia Kelistrikan
              </h2>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-slate-300">
              "{PROFILE_DATA.motivation}"
            </blockquote>
          </article>

          {/* Action links to related pages */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#0F1724] p-5">
            <p className="text-sm text-slate-300">
              Ingin melihat rekam jejak kerja dan proyek bengkel/industri?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/pengalaman"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400 whitespace-nowrap shrink-0"
              >
                <span>Lihat Pengalaman</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/proyek"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-300 whitespace-nowrap shrink-0"
              >
                <span>Galeri Proyek</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
