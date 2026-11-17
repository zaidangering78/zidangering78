import React, { useState } from 'react';
import {
  CheckCircle2,
  Copy,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { CONTACT_DATA, PROFILE_DATA } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      window.setTimeout(() => setCopiedField(null), 1800);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const mailtoHref = `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent(
    subject || 'Peluang Kerja / Proyek Instalasi Listrik'
  )}&body=${encodeURIComponent(
    `Halo ${PROFILE_DATA.fullName},\n\nNama: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  return (
    <PageShell title={`Kontak — ${PROFILE_DATA.fullName} | Portofolio TITL`}>
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <p className="text-xs font-mono-tech text-sky-400">Komunikasi &amp; Kolaborasi</p>
        <h1 className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
          Kontak
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          Hubungi saya untuk peluang kerja teknisi instalasi tenaga listrik, proyek perakitan panel kontrol, pemeliharaan instalasi, atau diskusi teknis.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        {/* Left: Direct Contact Channels */}
        <div className="space-y-4 lg:col-span-5">
          <div className="rounded-xl border border-white/10 bg-[#0B111C] p-6 space-y-5">
            <h2 className="font-display text-xl font-bold text-slate-50">
              Informasi Kontak Langsung
            </h2>

            {/* WhatsApp */}
            <div className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-[#0F1724] p-4">
              <div className="flex items-start gap-3 min-w-0">
                <MessageCircle className="mt-0.5 h-5 w-5 text-yellow-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">WhatsApp</p>
                  <a
                    href={CONTACT_DATA.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block font-mono-tech text-sm font-medium text-slate-100 hover:text-sky-400 truncate"
                  >
                    {CONTACT_DATA.whatsappDisplay}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('wa', CONTACT_DATA.whatsappDisplay)}
                aria-label="Salin nomor WhatsApp"
                className="rounded-md border border-white/10 p-2 text-slate-400 hover:text-sky-400 cursor-pointer shrink-0"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            {/* Email */}
            <div className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-[#0F1724] p-4">
              <div className="flex items-start gap-3 min-w-0">
                <Mail className="mt-0.5 h-5 w-5 text-sky-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Email</p>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="mt-0.5 block text-sm font-medium text-slate-100 hover:text-sky-400 truncate"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('email', CONTACT_DATA.email)}
                aria-label="Salin alamat email"
                className="rounded-md border border-white/10 p-2 text-slate-400 hover:text-sky-400 cursor-pointer shrink-0"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            {/* Instagram */}
            <div className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-[#0F1724] p-4">
              <div className="flex items-start gap-3 min-w-0">
                <Instagram className="mt-0.5 h-5 w-5 text-sky-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Instagram</p>
                  <a
                    href={CONTACT_DATA.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-sm font-medium text-slate-100 hover:text-sky-400 truncate"
                  >
                    {CONTACT_DATA.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Lokasi */}
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#0F1724] p-4">
              <MapPin className="mt-0.5 h-5 w-5 text-yellow-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Lokasi / Alamat</p>
                <p className="mt-0.5 text-sm font-medium text-slate-100">
                  {CONTACT_DATA.address}
                </p>
                <p className="mt-1 font-mono-tech text-xs text-slate-400">
                  {CONTACT_DATA.workingHours}
                </p>
              </div>
            </div>

            {copiedField && (
              <p className="text-xs font-medium text-sky-400" role="status">
                Kontak berhasil disalin ke clipboard.
              </p>
            )}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="rounded-xl border border-white/10 bg-[#0B111C] p-6 sm:p-8 lg:col-span-7">
          <h2 className="font-display text-xl font-bold text-slate-50">
            Kirim Pesan Langsung
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Isi formulir di bawah ini untuk menyampaikan kebutuhan proyek atau jadwal wawancara.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-sky-400/40 bg-[#0F1724] p-6 space-y-4">
              <div className="flex items-center gap-3 text-sky-400">
                <CheckCircle2 className="h-6 w-6 shrink-0" />
                <h3 className="font-display text-lg font-bold text-slate-50">
                  Pesan Siap Dikirim
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Terima kasih, <span className="font-semibold text-white">{name}</span>. Pesan Anda mengenai <span className="text-yellow-400">"{subject}"</span> telah tercatat di formulir ini. Anda juga dapat langsung meneruskannya melalui aplikasi email Anda.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 whitespace-nowrap"
                >
                  <Mail className="h-4 w-4" />
                  <span>Buka Aplikasi Email</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="rounded-lg border border-white/15 px-4 py-2.5 text-sm text-slate-200 hover:border-sky-400/50 cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda atau Perusahaan"
                    required
                    className="w-full rounded-lg border border-white/15 bg-[#06090F] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    required
                    className="w-full rounded-lg border border-white/15 bg-[#06090F] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subjek *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Contoh: Undangan Interview Teknisi Listrik / Proyek Panel"
                  required
                  className="w-full rounded-lg border border-white/15 bg-[#06090F] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Pesan *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan detail pekerjaan, lokasi proyek, atau informasi panggilan kerja..."
                  required
                  className="w-full rounded-lg border border-white/15 bg-[#06090F] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-300 safety-glow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Send className="h-4 w-4" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
};
