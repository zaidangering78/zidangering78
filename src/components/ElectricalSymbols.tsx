import React from 'react';
import { SchematicKind } from '../data/portfolioData';

/**
 * Latar belakang garis aliran listrik animasi bertema instalasi tenaga listrik.
 */
export const ElectricTraceBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-circuit-grid opacity-90" />
      <div className="absolute -top-40 left-1/4 h-[460px] w-[460px] rounded-full bg-sky-500/[0.06] blur-[120px]" />
      <div className="absolute bottom-0 right-1/5 h-[360px] w-[360px] rounded-full bg-yellow-400/[0.04] blur-[110px]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Horizontal power bus traces */}
        <path
          d="M0 140 H360 L410 190 H940 L990 140 H1440"
          stroke="rgba(56, 189, 248, 0.14)"
          strokeWidth="1.2"
        />
        <path
          d="M0 140 H360 L410 190 H940 L990 140 H1440"
          stroke="#38BDF8"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="animate-current-flow"
        />

        <path
          d="M0 680 H260 L320 620 H780 L840 680 H1440"
          stroke="rgba(56, 189, 248, 0.10)"
          strokeWidth="1.2"
        />
        <path
          d="M0 680 H260 L320 620 H780 L840 680 H1440"
          stroke="#0EA5E9"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="animate-current-flow-slow"
        />

        {/* Vertical feeder line with node junctions */}
        <path
          d="M1180 0 V280 L1130 330 V740 L1180 790 V900"
          stroke="rgba(250, 204, 21, 0.11)"
          strokeWidth="1"
        />
        <path
          d="M1180 0 V280 L1130 330 V740 L1180 790 V900"
          stroke="#FACC15"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="animate-current-flow-slow"
        />

        {/* Subtle schematic terminal nodes */}
        <circle cx="410" cy="190" r="3.5" fill="#0B111C" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="940" cy="190" r="3.5" fill="#0B111C" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="320" cy="620" r="3.5" fill="#0B111C" stroke="#0EA5E9" strokeWidth="1.5" />
        <circle cx="1130" cy="330" r="3.5" fill="#0B111C" stroke="#FACC15" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

/**
 * Simbol IEC kelistrikan otentik untuk header bagian / diagram.
 */
export const IecBreakerMark: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 2V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 17V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 17L7.5 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10.2 5.2L13.8 8.8M13.8 5.2L10.2 8.8" stroke="#FACC15" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * Diagram skematik listrik interaktif IEC untuk pratinjau proyek di modal detail.
 */
export const ProjectSchematicDiagram: React.FC<{ kind: SchematicKind; title: string }> = ({
  kind,
  title,
}) => {
  if (kind === 'star-delta') {
    return (
      <svg
        viewBox="0 0 680 380"
        className="h-full w-full bg-[#070C15] p-4"
        role="img"
        aria-label={`Diagram skematik ${title}`}
      >
        <defs>
          <pattern id="schGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(56,189,248,0.08)" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="680" height="380" fill="url(#schGrid)" />

        {/* 3-Phase Bus L1 L2 L3 */}
        <text x="26" y="42" fill="#94A3B8" fontSize="12" fontFamily="JetBrains Mono">L1</text>
        <text x="26" y="66" fill="#94A3B8" fontSize="12" fontFamily="JetBrains Mono">L2</text>
        <text x="26" y="90" fill="#94A3B8" fontSize="12" fontFamily="JetBrains Mono">L3</text>
        <line x1="56" y1="38" x2="620" y2="38" stroke="#38BDF8" strokeWidth="2" />
        <line x1="56" y1="62" x2="620" y2="62" stroke="#FACC15" strokeWidth="2" />
        <line x1="56" y1="86" x2="620" y2="86" stroke="#E2E8F0" strokeWidth="2" />

        {/* Main Breaker Q1 */}
        <line x1="170" y1="38" x2="170" y2="170" stroke="#38BDF8" strokeWidth="1.6" />
        <line x1="210" y1="62" x2="210" y2="170" stroke="#FACC15" strokeWidth="1.6" />
        <line x1="250" y1="86" x2="250" y2="170" stroke="#E2E8F0" strokeWidth="1.6" />

        <rect x="150" y="114" width="120" height="34" rx="4" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.4" />
        <text x="210" y="135" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="JetBrains Mono">
          MCCB Q1 · 3P
        </text>

        {/* Contactor KM1 (Main) + KM2 (Delta) + KM3 (Star) */}
        <rect x="150" y="170" width="120" height="44" rx="4" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.5" />
        <text x="210" y="196" textAnchor="middle" fill="#38BDF8" fontSize="12" fontFamily="JetBrains Mono">
          KM1 (MAIN)
        </text>

        <rect x="330" y="170" width="115" height="44" rx="4" fill="#0F1724" stroke="#FACC15" strokeWidth="1.5" />
        <text x="388" y="196" textAnchor="middle" fill="#FACC15" fontSize="12" fontFamily="JetBrains Mono">
          KM2 (DELTA)
        </text>

        <rect x="485" y="170" width="115" height="44" rx="4" fill="#0F1724" stroke="#94A3B8" strokeWidth="1.5" />
        <text x="542" y="196" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontFamily="JetBrains Mono">
          KM3 (STAR)
        </text>

        {/* Interlock dashed line */}
        <line x1="445" y1="192" x2="485" y2="192" stroke="#FACC15" strokeDasharray="4 4" strokeWidth="1.5" />
        <text x="465" y="182" textAnchor="middle" fill="#FACC15" fontSize="9" fontFamily="JetBrains Mono">
          INTERLOCK
        </text>

        {/* TOR F2 */}
        <rect x="165" y="232" width="90" height="32" rx="4" fill="#0F1724" stroke="#E2E8F0" strokeWidth="1.2" />
        <text x="210" y="252" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontFamily="JetBrains Mono">
          TOR (F2)
        </text>

        {/* 3 Phase Motor Symbol */}
        <line x1="180" y1="214" x2="180" y2="232" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="210" y1="214" x2="210" y2="232" stroke="#FACC15" strokeWidth="1.5" />
        <line x1="240" y1="214" x2="240" y2="232" stroke="#E2E8F0" strokeWidth="1.5" />

        <line x1="210" y1="264" x2="210" y2="296" stroke="#38BDF8" strokeWidth="1.6" />
        <line x1="388" y1="214" x2="388" y2="322" stroke="#FACC15" strokeWidth="1.5" />
        <line x1="388" y1="322" x2="246" y2="322" stroke="#FACC15" strokeWidth="1.5" />
        <line x1="542" y1="214" x2="542" y2="290" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="542" y1="290" x2="388" y2="290" stroke="#94A3B8" strokeWidth="1.5" />

        <circle cx="210" cy="322" r="30" fill="#0B111C" stroke="#38BDF8" strokeWidth="2" />
        <text x="210" y="320" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono">
          M 3~
        </text>
        <text x="210" y="336" textAnchor="middle" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono">
          U1-V1-W1
        </text>

        {/* Timer block */}
        <rect x="485" y="102" width="115" height="44" rx="4" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.2" />
        <text x="542" y="122" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="JetBrains Mono">
          TIMER TDR (KT1)
        </text>
        <text x="542" y="136" textAnchor="middle" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono">
          t = 5.0 sec Y-&gt;D
        </text>
      </svg>
    );
  }

  if (kind === 'lighting-mcb') {
    return (
      <svg
        viewBox="0 0 680 380"
        className="h-full w-full bg-[#070C15] p-4"
        role="img"
        aria-label={`Diagram skematik ${title}`}
      >
        <rect width="680" height="380" fill="#070C15" />
        <text x="36" y="44" fill="#38BDF8" fontSize="12" fontFamily="JetBrains Mono">
          SINGLE-LINE DISTRIBUSI 1 FASA (220V AC / 50Hz)
        </text>
        <line x1="36" y1="74" x2="640" y2="74" stroke="#38BDF8" strokeWidth="2" />
        <line x1="36" y1="92" x2="640" y2="92" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="5 3" />
        <line x1="36" y1="110" x2="640" y2="110" stroke="#FACC15" strokeWidth="1.2" strokeDasharray="3 3" />

        <text x="44" y="68" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">L (FASA)</text>
        <text x="44" y="88" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">N (NETRAL)</text>
        <text x="44" y="106" fill="#FACC15" fontSize="10" fontFamily="JetBrains Mono">PE (GROUND)</text>

        {/* Main RCCB */}
        <rect x="85" y="140" width="120" height="58" rx="4" fill="#0F1724" stroke="#FACC15" strokeWidth="1.6" />
        <text x="145" y="164" textAnchor="middle" fill="#FACC15" fontSize="11.5" fontFamily="JetBrains Mono">
          RCCB 2P 25A
        </text>
        <text x="145" y="182" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontFamily="JetBrains Mono">
          IΔn = 30 mA
        </text>
        <line x1="145" y1="74" x2="145" y2="140" stroke="#38BDF8" strokeWidth="1.5" />

        {/* Group 1 Lighting */}
        <line x1="145" y1="198" x2="145" y2="230" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="145" y1="230" x2="540" y2="230" stroke="#38BDF8" strokeWidth="1.5" />

        <rect x="240" y="254" width="126" height="52" rx="4" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.4" />
        <text x="303" y="276" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="JetBrains Mono">
          GRUP 1 · MCB 6A
        </text>
        <text x="303" y="293" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono">
          Penerangan NYM 3x1.5
        </text>
        <line x1="303" y1="230" x2="303" y2="254" stroke="#38BDF8" strokeWidth="1.5" />

        {/* Group 2 Sockets */}
        <rect x="425" y="254" width="146" height="52" rx="4" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.4" />
        <text x="498" y="276" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="JetBrains Mono">
          GRUP 2 · MCB 16A
        </text>
        <text x="498" y="293" textAnchor="middle" fill="#FACC15" fontSize="10" fontFamily="JetBrains Mono">
          Stop Kontak NYM 3x2.5
        </text>
        <line x1="498" y1="230" x2="498" y2="254" stroke="#38BDF8" strokeWidth="1.5" />

        {/* Grounding symbol */}
        <line x1="145" y1="304" x2="145" y2="330" stroke="#FACC15" strokeWidth="1.6" />
        <line x1="125" y1="330" x2="165" y2="330" stroke="#FACC15" strokeWidth="2" />
        <line x1="132" y1="337" x2="158" y2="337" stroke="#FACC15" strokeWidth="1.6" />
        <line x1="139" y1="344" x2="151" y2="344" stroke="#FACC15" strokeWidth="1.4" />
        <text x="145" y="362" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">
          EARTH PE &lt; 5 Ω
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 680 380"
      className="h-full w-full bg-[#070C15] p-4"
      role="img"
      aria-label={`Diagram skematik ${title}`}
    >
      <rect width="680" height="380" fill="#070C15" />
      <text x="36" y="42" fill="#38BDF8" fontSize="12" fontFamily="JetBrains Mono">
        RANGKAIAN KONTROL &amp; PROTEKSI MOTOR 3 FASA (DOL / INTERLOCK)
      </text>

      {/* Control rail L and N */}
      <line x1="70" y1="74" x2="610" y2="74" stroke="#38BDF8" strokeWidth="2" />
      <line x1="70" y1="322" x2="610" y2="322" stroke="#60A5FA" strokeWidth="2" />
      <text x="40" y="78" fill="#38BDF8" fontSize="11" fontFamily="JetBrains Mono">L1</text>
      <text x="40" y="326" fill="#60A5FA" fontSize="11" fontFamily="JetBrains Mono">N</text>

      {/* MCB 6A + E-Stop + TOR NC */}
      <line x1="160" y1="74" x2="160" y2="322" stroke="#94A3B8" strokeWidth="1.4" />
      <rect x="115" y="96" width="90" height="34" rx="4" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.3" />
      <text x="160" y="117" textAnchor="middle" fill="#F8FAFC" fontSize="10.5" fontFamily="JetBrains Mono">
        MCB F1 6A
      </text>

      <rect x="115" y="148" width="90" height="34" rx="4" fill="#0F1724" stroke="#FACC15" strokeWidth="1.3" />
      <text x="160" y="169" textAnchor="middle" fill="#FACC15" fontSize="10.5" fontFamily="JetBrains Mono">
        E-STOP NC
      </text>

      <rect x="115" y="200" width="90" height="34" rx="4" fill="#0F1724" stroke="#E2E8F0" strokeWidth="1.3" />
      <text x="160" y="221" textAnchor="middle" fill="#E2E8F0" fontSize="10.5" fontFamily="JetBrains Mono">
        TOR 95-96
      </text>

      {/* Start + Latching Branch */}
      <line x1="205" y1="217" x2="360" y2="217" stroke="#38BDF8" strokeWidth="1.4" />
      <rect x="295" y="150" width="120" height="36" rx="4" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.4" />
      <text x="355" y="172" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="JetBrains Mono">
        START PB · KM1 NO
      </text>
      <line x1="355" y1="186" x2="355" y2="254" stroke="#38BDF8" strokeWidth="1.4" />

      {/* Coil KM1 */}
      <rect x="305" y="254" width="100" height="42" rx="4" fill="#0F1724" stroke="#FACC15" strokeWidth="1.6" />
      <text x="355" y="279" textAnchor="middle" fill="#FACC15" fontSize="12" fontFamily="JetBrains Mono">
        COIL KM1 (A1-A2)
      </text>
      <line x1="355" y1="296" x2="355" y2="322" stroke="#60A5FA" strokeWidth="1.4" />

      {/* Pilot Lamps */}
      <line x1="485" y1="74" x2="485" y2="322" stroke="#94A3B8" strokeWidth="1.2" />
      <circle cx="485" cy="195" r="22" fill="#0F1724" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="485" y="199" textAnchor="middle" fill="#38BDF8" fontSize="10.5" fontFamily="JetBrains Mono">
        RUN
      </text>
      <circle cx="565" cy="195" r="22" fill="#0F1724" stroke="#FACC15" strokeWidth="1.5" />
      <text x="565" y="199" textAnchor="middle" fill="#FACC15" fontSize="10.5" fontFamily="JetBrains Mono">
        TRIP
      </text>
      <line x1="565" y1="74" x2="565" y2="173" stroke="#94A3B8" strokeWidth="1.2" />
      <line x1="565" y1="217" x2="565" y2="322" stroke="#60A5FA" strokeWidth="1.2" />
    </svg>
  );
};

/**
 * Tampilan sertifikat grafis profesional jika sertifikat berupa data contoh atau belum ada foto scan.
 */
export const CertificateVisualPreview: React.FC<{
  name: string;
  issuer: string;
  year: string;
  credentialNumber: string;
  holderName: string;
  compact?: boolean;
}> = ({ name, issuer, year, credentialNumber, holderName, compact = false }) => (
  <div className="relative flex h-full w-full flex-col justify-between bg-[#090F1A] p-5 text-slate-100 select-none">
    <div className="pointer-events-none absolute inset-2.5 border border-sky-400/25" />
    <div className="pointer-events-none absolute inset-3.5 border border-yellow-400/15" />

    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tech text-sky-400">
      <span>DOKUMEN KOMPETENSI</span>
      <span className="text-yellow-400">{year}</span>
    </div>

    <div className="relative z-10 my-auto py-3 text-center">
      <p className="text-[11px] tracking-wider text-slate-400">SERTIFIKAT KEAHLIAN TITL</p>
      <h4
        className={`mt-1.5 font-display font-bold leading-snug text-slate-50 ${
          compact ? 'text-sm line-clamp-2' : 'text-xl max-w-xl mx-auto'
        }`}
      >
        {name}
      </h4>
      <p className="mt-2 font-mono-tech text-xs text-yellow-400">{holderName}</p>
    </div>

    <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2.5 text-[11px] text-slate-400">
      <span className="truncate max-w-[60%]">{issuer}</span>
      <span className="font-mono-tech text-slate-300">{credentialNumber}</span>
    </div>
  </div>
);
