import React, { useEffect, useState } from 'react';
import { Download, Eye, FileText, Plus, RotateCcw, Upload, X } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { CertificateVisualPreview } from '../components/ElectricalSymbols';
import { SafeImage } from '../components/SafeImage';
import {
  CERTIFICATES_DATA,
  CertificateItem,
  PROFILE_DATA,
} from '../data/portfolioData';
import { downloadCertificatePDF } from '../utils/pdfExport';

const STORAGE_KEY = 'titl_custom_certificates_v1';

export const CertificatesPage: React.FC = () => {
  const [customCerts, setCustomCerts] = useState<CertificateItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CertificateItem[]) : [];
    } catch {
      return [];
    }
  });

  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [uploadOpen, setUploadOpen] = useState(false);

  // Form state for uploading/adding a certificate
  const [name, setName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [year, setYear] = useState('2025');
  const [credentialNumber, setCredentialNumber] = useState('');
  const [description, setDescription] = useState('');
  const [competencyText, setCompetencyText] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customCerts));
    } catch {
      // Ignore storage quota errors
    }
  }, [customCerts]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setUploadOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const allCertificates = [...customCerts, ...CERTIFICATES_DATA];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2.5 * 1024 * 1024) {
      setFormError('Ukuran gambar maksimal 2,5 MB agar tersimpan optimal di browser.');
      return;
    }
    setFormError('');
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setUploadedImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !issuer.trim() || !year.trim() || !description.trim()) {
      setFormError('Mohon lengkapi nama sertifikat, lembaga penerbit, tahun, dan deskripsi.');
      return;
    }

    const competencies = competencyText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const newCert: CertificateItem = {
      id: `custom-cert-${Date.now()}`,
      name: name.trim(),
      issuer: issuer.trim(),
      year: year.trim(),
      credentialNumber: credentialNumber.trim() || `REG-${Date.now().toString().slice(-4)}`,
      description: description.trim(),
      competencies:
        competencies.length > 0
          ? competencies
          : ['Kompetensi teknis instalasi tenaga listrik'],
      imageUrl: uploadedImage || undefined,
    };

    setCustomCerts((prev) => [newCert, ...prev]);
    setName('');
    setIssuer('');
    setYear('2025');
    setCredentialNumber('');
    setDescription('');
    setCompetencyText('');
    setUploadedImage('');
    setFormError('');
    setUploadOpen(false);
  };

  const handleClearCustom = () => {
    setCustomCerts([]);
  };

  return (
    <PageShell title={`Sertifikat Kompetensi — ${PROFILE_DATA.fullName} | Portofolio TITL`}>
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-mono-tech text-sky-400">Dokumentasi Kompetensi &amp; Pelatihan</p>
          <h1 className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Sertifikat
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
            Koleksi sertifikat pelatihan, Uji Kompetensi Keahlian (UKK), dan keselamatan K3 listrik. Anda dapat melihat pratinjau penuh, mengunduh dalam format PDF, atau menambahkan dokumen sertifikat baru.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {customCerts.length > 0 && (
            <button
              type="button"
              onClick={handleClearCustom}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#0B111C] px-3.5 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-yellow-400/50 hover:text-yellow-300 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Hapus Tambahan</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => setUploadOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <Plus className="h-4 w-4" />
            <span>Upload Sertifikat</span>
          </button>
        </div>
      </div>

      {/* Document Gallery Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {allCertificates.map((cert) => (
          <article
            key={cert.id}
            className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0B111C] transition-colors duration-150 hover:border-sky-400/45"
          >
            {/* Document Preview Area */}
            <button
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#090F1A] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
              aria-label={`Lihat sertifikat secara penuh: ${cert.name}`}
            >
              {cert.imageUrl ? (
                <SafeImage
                  src={cert.imageUrl}
                  alt={cert.name}
                  fallbackTitle={cert.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <CertificateVisualPreview
                  name={cert.name}
                  issuer={cert.issuer}
                  year={cert.year}
                  credentialNumber={cert.credentialNumber}
                  holderName={PROFILE_DATA.fullName}
                  compact
                />
              )}
            </button>

            {/* Details & Actions */}
            <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech">
                  <span className="text-yellow-400">{cert.year}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-sky-400">{cert.issuer}</span>
                </div>

                <h2 className="mt-2 font-display text-lg font-bold leading-snug text-slate-50">
                  {cert.name}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {cert.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3.5 text-xs text-slate-300">
                  {cert.competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FileText className="mt-0.5 h-3.5 w-3.5 text-sky-400 shrink-0" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-2 rounded-lg border border-sky-400/40 bg-[#0F1724] px-3.5 py-2 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-500/15 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Lihat Penuh</span>
                </button>

                <button
                  type="button"
                  onClick={() => downloadCertificatePDF(cert, PROFILE_DATA.fullName)}
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-3.5 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Unduh PDF</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Fullscreen Certificate Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-sky-400/35 bg-[#0B111C] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
              <div className="min-w-0">
                <p className="text-xs font-mono-tech text-sky-400">
                  {selectedCert.issuer} · {selectedCert.year}
                </p>
                <h2
                  id="modal-cert-title"
                  className="font-display text-lg font-bold text-slate-50 truncate"
                >
                  {selectedCert.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Tutup pratinjau sertifikat"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#0F1724] text-slate-200 hover:border-sky-400/50 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="aspect-[16/10] w-full bg-[#06090F]">
              {selectedCert.imageUrl ? (
                <SafeImage
                  src={selectedCert.imageUrl}
                  alt={selectedCert.name}
                  fallbackTitle={selectedCert.name}
                  className="h-full w-full object-contain"
                />
              ) : (
                <CertificateVisualPreview
                  name={selectedCert.name}
                  issuer={selectedCert.issuer}
                  year={selectedCert.year}
                  credentialNumber={selectedCert.credentialNumber}
                  holderName={PROFILE_DATA.fullName}
                />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 p-6">
              <p className="text-sm text-slate-300 max-w-2xl">
                {selectedCert.description}
              </p>
              <button
                type="button"
                onClick={() => downloadCertificatePDF(selectedCert, PROFILE_DATA.fullName)}
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download Sertifikat (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload / Tambah Sertifikat Modal */}
      {uploadOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="upload-cert-title"
          onClick={() => setUploadOpen(false)}
        >
          <div
            className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-sky-400/35 bg-[#0B111C] p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 id="upload-cert-title" className="font-display text-xl font-bold text-slate-50">
                Tambah / Upload Sertifikat
              </h2>
              <button
                type="button"
                onClick={() => setUploadOpen(false)}
                aria-label="Tutup form upload sertifikat"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleAddCertificate} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nama Sertifikat *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Sertifikat Ahli K3 Muda Kelistrikan"
                  className="w-full rounded-lg border border-white/15 bg-[#06090F] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Lembaga Penerbit *
                  </label>
                  <input
                    type="text"
                    value={issuer}
                    onChange={(e) => setIssuer(e.target.value)}
                    placeholder="Contoh: BNSP / LSP Teknik Listrik"
                    className="w-full rounded-lg border border-white/15 bg-[#06090F] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Tahun Penerbitan *
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="2025"
                    className="w-full rounded-lg border border-white/15 bg-[#06090F] px-3.5 py-2.5 text-sm text-slate-100 font-mono-tech focus:border-sky-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nomor Sertifikat / Kredensial (Opsional)
                </label>
                <input
                  type="text"
                  value={credentialNumber}
                  onChange={(e) => setCredentialNumber(e.target.value)}
                  placeholder="Contoh: REG-TITL-2025-01"
                  className="w-full rounded-lg border border-white/15 bg-[#06090F] px-3.5 py-2.5 text-sm text-slate-100 font-mono-tech placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Deskripsi Kompetensi *
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ringkasan kompetensi atau materi pelatihan yang dicapai..."
                  className="w-full rounded-lg border border-white/15 bg-[#06090F] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Poin Kompetensi (satu baris per poin)
                </label>
                <textarea
                  rows={2}
                  value={competencyText}
                  onChange={(e) => setCompetencyText(e.target.value)}
                  placeholder={'Pemasangan panel distribusi\nUji tahanan isolasi'}
                  className="w-full rounded-lg border border-white/15 bg-[#06090F] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Upload Gambar Scan Sertifikat (Opsional · JPG/PNG)
                </label>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-sky-400/40 bg-[#06090F] px-4 py-4 text-xs text-slate-300 hover:border-sky-400">
                  <Upload className="h-4 w-4 text-sky-400" />
                  <span>
                    {uploadedImage ? 'Gambar dipilih — klik untuk ganti' : 'Pilih file gambar sertifikat'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="sr-only"
                  />
                </label>
              </div>

              {formError && (
                <p className="text-xs font-medium text-yellow-400" role="alert">
                  {formError}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setUploadOpen(false)}
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-300 hover:text-white cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400 cursor-pointer"
                >
                  Simpan Sertifikat
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageShell>
  );
};
