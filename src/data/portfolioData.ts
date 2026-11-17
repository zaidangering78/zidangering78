/**
 * PANDUAN EDIT KONTEN PORTOFOLIO (TITL)
 * ---------------------------------------------------------------------------
 * Seluruh data di bawah ini adalah DATA CONTOH (placeholder) yang siap diganti
 * dengan identitas, pengalaman, foto dokumentasi, sertifikat, dan kontak asli Anda.
 * Cukup ubah nilai string/array di file ini untuk memperbarui seluruh halaman.
 */

export interface ProfileData {
  fullName: string;
  brandName: string;
  role: string;
  slogan: string;
  shortDescription: string;
  photoUrl: string;
  birthPlaceDate: string;
  address: string;
  lastEducation: string;
  major: string;
  biography: string;
  careerGoal: string;
  motivation: string;
  highlights: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export type ExperienceCategory =
  | 'Pendidikan'
  | 'PKL'
  | 'Pekerjaan'
  | 'Organisasi'
  | 'Pelatihan';

export interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  title: string;
  institution: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
}

export type ProjectCategory =
  | 'Instalasi Penerangan Rumah'
  | 'Instalasi Stop Kontak'
  | 'Instalasi Panel Listrik'
  | 'Wiring Diagram'
  | 'Rangkaian Kontrol Motor Listrik'
  | 'Instalasi Motor 3 Fasa'
  | 'Sistem Proteksi Listrik'
  | 'Perakitan & Pengawatan Panel Kontrol';

export type SchematicKind =
  | 'star-delta'
  | 'lighting-mcb'
  | 'dol-motor'
  | 'protection-rcd';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  imageUrl: string;
  schematicKind: SchematicKind;
  description: string;
  toolsAndMaterials: string[];
  functionSummary: string;
  technologySystem: string;
}

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialNumber: string;
  description: string;
  competencies: string[];
  imageUrl?: string;
}

export type SkillCategory =
  | 'Instalasi & Panel'
  | 'Kontrol & Otomasi'
  | 'Alat Ukur & K3';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  percentage: number;
  standardRef: string;
  description: string;
}

export interface ContactData {
  whatsappDisplay: string;
  whatsappLink: string;
  instagramHandle: string;
  instagramLink: string;
  email: string;
  address: string;
  workingHours: string;
}

export const PROFILE_DATA: ProfileData = {
  fullName: 'Ahmad Zaidan Ghaly',
  brandName: 'Ahmad Zaidan Ghaly',
  role: 'Electrical Installation Technician',
  slogan: 'Connecting Power, Building The Future.',
  shortDescription:
    'Teknisi muda bidang Teknik Instalasi Tenaga Listrik (TITL) yang berfokus pada instalasi tenaga 1 & 3 fasa, pengawatan panel kontrol industri, pembacaan wiring diagram, serta penerapan standar keselamatan K3 dan PUIL.',
  photoUrl: '/src/assets/images/profile_technician_1794894379057.jpg',
  birthPlaceDate: 'Gresik, 16 Februari 2011',
  address: 'Dsn. Brak, Desa Wadeng, Kec. Sidayu, Kab. Gresik',
  lastEducation: 'SMKN 1 SIDAYU — Kompetensi Keahlian TITL',
  major: 'Teknik Instalasi Tenaga Listrik (TITL)',
  biography:
    'Saya adalah lulusan Teknik Instalasi Tenaga Listrik yang terbiasa bekerja secara teliti dari tahap pembacaan gambar kerja (single-line & wiring diagram), perakitan panel kontrol berbasis kontaktor dan PLC dasar, hingga pengujian tahanan isolasi dan komisioning sistem tenaga.',
  careerGoal:
    'Menjadi teknisi instalasi listrik industri dan otomasi panel yang andal, tersertifikasi kompetensi nasional, serta berkontribusi pada proyek infrastruktur kelistrikan yang aman, efisien, dan berstandar IEC/PUIL.',
  motivation:
    'Setiap sambungan kabel dan panel kontrol yang rapi adalah fondasi keandalan sebuah fasilitas. Ketertarikan saya di dunia kelistrikan berawal dari bagaimana energi listrik dapat dikendalikan secara presisi dan aman untuk menggerakkan industri modern.',
  highlights: [
    {
      label: 'Sistem Tenaga',
      value: '1 & 3 Fasa',
      detail: 'Instalasi 220V / 380V AC sesuai PUIL',
    },
    {
      label: 'Panel & Kontrol',
      value: 'DOL · Star-Delta',
      detail: 'Pengawatan kontaktor, TOR & timer',
    },
    {
      label: 'Pengujian & Ukur',
      value: 'Multimeter · Clamp',
      detail: 'Verifikasi arus, tegangan & kontinuitas',
    },
    {
      label: 'Standar Kerja',
      value: 'K3 Listrik',
      detail: 'Lockout/Tagout (LOTO) & APD lengkap',
    },
  ],
};

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    category: 'Pekerjaan',
    title: 'Junior Electrical Panel & Maintenance Technician (Contoh)',
    institution: 'PT Daya Elektro Industri',
    location: 'Kawasan Industri Jababeka, Bekasi',
    period: '2024 – Sekarang',
    summary:
      'Melaksanakan perakitan panel distribusi tegangan rendah (LVMDP), pengawatan panel kontrol motor, serta pemeliharaan preventif instalasi penerangan dan daya area produksi.',
    highlights: [
      'Merakit dan melakukan pengawatan kabel kontrol dengan pelabelan ferrule sesuai wiring diagram.',
      'Melakukan pengecekan arus beban 3 fasa menggunakan tang ampere serta pengukuran keseimbangan fasa R-S-T.',
      'Mendampingi proses komisioning sistem proteksi MCB, MCCB, dan ELCB/RCCB.',
    ],
  },
  {
    id: 'exp-2',
    category: 'PKL',
    title: 'Praktik Kerja Lapangan — Teknisi Instalasi & Utilitas (Contoh)',
    institution: 'PT Mitra Teknik Utilitas',
    location: 'Karawang, Jawa Barat',
    period: 'Jul 2023 – Des 2023',
    summary:
      'Terlibat langsung dalam pemasangan instalasi pipa konduit, penarikan kabel NYM/NYY, pemasangan stop kontak daya, serta inspeksi berkala panel distribusi gedung.',
    highlights: [
      'Membantu pemasangan 24 titik penerangan LED industri dan jalur sakelar tukar.',
      'Melakukan pengujian kontinuitas kabel pentanahan (grounding) dan pencatatan log suhu terminal panel.',
      'Menerapkan prosedur keselamatan kerja LOTO sebelum melakukan terminasi.',
    ],
  },
  {
    id: 'exp-3',
    category: 'Pelatihan',
    title: 'Pelatihan Dasar PLC & Motor Kontrol Industri (Contoh)',
    institution: 'Balai Latihan Kerja Industri (BLKI)',
    location: 'Bekasi, Jawa Barat',
    period: 'Feb 2024 – Apr 2024',
    summary:
      'Program pelatihan intensif pemrograman ladder diagram PLC dasar untuk kendali motor sekuensial, sistem interlocking, dan troubleshooting rangkaian kontrol.',
    highlights: [
      'Merancang simulasi kendali motor Forward-Reverse dan Star-Delta otomatis.',
      'Integrasi sensor proximity dan limit switch ke modul input PLC 24VDC.',
    ],
  },
  {
    id: 'exp-4',
    category: 'Organisasi',
    title: 'Koordinator Divisi Workshop — Himpunan Siswa Teknik Listrik (Contoh)',
    institution: 'Komunitas Keahlian TITL',
    location: 'Lingkungan Sekolah',
    period: '2022 – 2023',
    summary:
      'Mengelola inventaris alat ukur kelistrikan, trainer panel kontrol, serta mengoordinasikan kegiatan praktik keselamatan kerja bagi anggota baru.',
    highlights: [
      'Mengadakan workshop dasar pembacaan diagram pengawatan dan penggunaan multimeter digital.',
      'Menyusun daftar periksa keamanan alat tangan berisolasi 1000V sebelum praktik bengkel.',
    ],
  },
  {
    id: 'exp-5',
    category: 'Pendidikan',
    title: 'SMKN 1 SIDAYU — Teknik Instalasi Tenaga Listrik (TITL)',
    institution: 'SMKN 1 SIDAYU',
    location: 'Kec. Sidayu, Kab. Gresik, Jawa Timur',
    period: 'Pendidikan Kejuruan',
    summary:
      'Menempuh pendidikan kejuruan dengan fokus inti pada Instalasi Penerangan Listrik, Instalasi Tenaga Listrik, Instalasi Motor Listrik, dan Perbaikan Peralatan Listrik.',
    highlights: [
      'Menyelesaikan Uji Kompetensi Keahlian (UKK) perakitan panel kontrol motor 3 fasa dengan hasil kompeten.',
      'Aktif dalam proyek bengkel instalasi rumah tinggal dan sistem proteksi beban lebih.',
    ],
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Instalasi Penerangan Rumah',
  'Instalasi Stop Kontak',
  'Instalasi Panel Listrik',
  'Wiring Diagram',
  'Rangkaian Kontrol Motor Listrik',
  'Instalasi Motor 3 Fasa',
  'Sistem Proteksi Listrik',
  'Perakitan & Pengawatan Panel Kontrol',
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-panel-kontrol',
    title: 'Perakitan Panel Kontrol Star-Delta Motor 3 Fasa (Contoh)',
    category: 'Perakitan & Pengawatan Panel Kontrol',
    year: '2024',
    imageUrl: '/src/assets/images/project_panel_control_1794894379992.jpg',
    schematicKind: 'star-delta',
    description:
      'Perakitan lengkap box panel kontrol untuk mengoperasikan motor induksi 3 fasa dengan metode pengasutan Star-Delta otomatis guna menekan lonjakan arus start.',
    toolsAndMaterials: [
      'Box Panel Steel IP54 & DIN Rail',
      'MCB 3 Fasa 25A & MCB Kontrol 1 Fasa 6A',
      '3x Kontaktor Magnetik + Thermal Overload Relay (TOR)',
      'Timer On-Delay (TDR), Kabel NYAF 2.5mm² & 1.5mm²',
      'Wire Duct, Cable Lug, Ferrule Bernomor, Obeng VDE 1000V',
    ],
    functionSummary:
      'Mengurangi arus starting motor hingga sepertiga arus DOL sekaligus melindungi motor dari gangguan beban lebih dan kehilangan fasa.',
    technologySystem: 'Sistem Pengasutan Star-Delta Otomatis · Interlock Mekanis & Elektris',
  },
  {
    id: 'proj-penerangan-rumah',
    title: 'Instalasi Penerangan & Distribusi MCB Hunian 2 Lantai (Contoh)',
    category: 'Instalasi Penerangan Rumah',
    year: '2024',
    imageUrl: '/src/assets/images/project_residential_wiring_1794894380963.jpg',
    schematicKind: 'lighting-mcb',
    description:
      'Pemasangan jalur pipa konduit PVC, box MCB pembagi grup penerangan dan tenaga, sakelar tunggal/seri/tukar, serta fitting lampu LED hemat energi.',
    toolsAndMaterials: [
      'Box MCB Inbow 12 Grup + Busbar Netral & Ground',
      'MCB 6A (Penerangan), MCB 10A/16A (Stop Kontak), RCCB 30mA',
      'Kabel NYM 3x1.5mm² & 3x2.5mm², Pipa Konduit 20mm',
      'Sakelar Tunggal, Sakelar Tukar, T-Dos & Isolasi Listrik',
    ],
    functionSummary:
      'Menyediakan sistem pencahayaan terbagi per zona ruang yang aman, rapi, serta memudahkan isolasi pemeliharaan per grup.',
    technologySystem: 'Pembagian Grup Beban Standar PUIL · Proteksi Kebocoran Arus 30mA',
  },
  {
    id: 'proj-motor-3fasa',
    title: 'Instalasi & Komisioning Motor Induksi 3 Fasa dengan E-Stop (Contoh)',
    category: 'Instalasi Motor 3 Fasa',
    year: '2024',
    imageUrl: '/src/assets/images/project_three_phase_motor_1794894380633.jpg',
    schematicKind: 'dol-motor',
    description:
      'Pemasangan unit motor induksi 3 fasa pada baseplate mekanis menggunakan flexible conduit metal, kotak push button Start/Emergency Stop, serta uji beban menggunakan tang ampere.',
    toolsAndMaterials: [
      'Motor Induksi 3 Fasa 380V AC',
      'Kabel NYY 4x4mm² & Flexible Metal Conduit + Cable Gland',
      'Push Button Station (Start Hijau / Emergency Stop Mushroom)',
      'Digital Clamp Meter (Tang Ampere) & Insulation Tester',
    ],
    functionSummary:
      'Menggerakkan mesin konveyor/pompa industri dengan penghentian darurat instan dan pemantauan arus fasa aktual.',
    technologySystem: 'Direct-On-Line (DOL) Heavy Duty · Terminasi U1-V1-W1 Delta',
  },
  {
    id: 'proj-wiring-diagram',
    title: 'Perancangan Wiring Diagram & Panel Terminasi Kontrol (Contoh)',
    category: 'Wiring Diagram',
    year: '2023',
    imageUrl: '/src/assets/images/project_wiring_diagram_1794894381682.jpg',
    schematicKind: 'star-delta',
    description:
      'Pembuatan diagram pengawatan (wiring diagram) dan pengkodean terminal blok X1–X12 untuk memudahkan proses perakitan dan pelacakan gangguan (troubleshooting).',
    toolsAndMaterials: [
      'Gambar Kerja Skematik IEC 60617',
      'Terminal Blok DIN Rail (Fasa, Netral, PE, Kontrol)',
      'Multimeter Digital, Wire Stripper, Crimping Ferrule',
      'Label Penomoran Kabel Kontrol',
    ],
    functionSummary:
      'Menjadi acuan standar perakitan panel dan mempercepat identifikasi titik uji tegangan saat pemeliharaan.',
    technologySystem: 'Standar Simbol IEC · Penomoran Terminal Terstruktur',
  },
  {
    id: 'proj-stop-kontak',
    title: 'Instalasi Jalur Stop Kontak Daya & Pentanahan Bengkel (Contoh)',
    category: 'Instalasi Stop Kontak',
    year: '2023',
    imageUrl: '/src/assets/images/project_residential_wiring_1794894380963.jpg',
    schematicKind: 'lighting-mcb',
    description:
      'Penarikan jalur khusus stop kontak daya 16A dengan penampang kabel 2.5mm² dan koneksi pembumian (PE) langsung ke terminal grounding utama.',
    toolsAndMaterials: [
      'Stop Kontak Arde 16A IP44',
      'Kabel NYM 3x2.5mm² (Fasa Coklat, Netral Biru, PE Kuning-Hijau)',
      'MCB 16A Kurva C, Konduit & Klem Pipa',
      'Earth Tester / Socket Polarity Checker',
    ],
    functionSummary:
      'Menjamin suplai daya stabil untuk peralatan kerja dan mencegah bahaya tegangan sentuh melalui jalur pembumian.',
    technologySystem: 'Sistem Pentanahan TN-S · Polaritas L-N-PE Terverifikasi',
  },
  {
    id: 'proj-panel-distribusi',
    title: 'Instalasi Sub-Distribution Panel (SDP) 3 Fasa 4 Kawat (Contoh)',
    category: 'Instalasi Panel Listrik',
    year: '2024',
    imageUrl: '/src/assets/images/project_panel_control_1794894379992.jpg',
    schematicKind: 'protection-rcd',
    description:
      'Pemasangan dan pembagian beban seimbang R-S-T pada Sub-Distribution Panel lengkap dengan busbar tembaga, lampu indikator fasa, serta volt/ampere meter panel.',
    toolsAndMaterials: [
      'Busbar Tembaga R-S-T-N-PE + Isolator Penyangga',
      'MCCB Utama 3P 63A & MCB Cabang 1P/3P',
      'Pilot Lamp Indikator R-S-T & Digital Power Meter',
      'Kunci Torsi Terisolasi & Tang Skun Hidrolik',
    ],
    functionSummary:
      'Mendistribusikan daya listrik 3 fasa secara seimbang ke beberapa jalur mesin dan penerangan area kerja.',
    technologySystem: 'Distribusi 380V/220V 3P+N+PE · Monitoring Beban Panel',
  },
  {
    id: 'proj-kontrol-motor',
    title: 'Rangkaian Kontrol Motor Forward–Reverse dengan Interlock (Contoh)',
    category: 'Rangkaian Kontrol Motor Listrik',
    year: '2023',
    imageUrl: '/src/assets/images/project_wiring_diagram_1794894381682.jpg',
    schematicKind: 'dol-motor',
    description:
      'Implementasi rangkaian pengendali dua arah putaran motor (maju-mundur) dilengkapi pengunci NC (interlock) antar kontaktor KM1 dan KM2 untuk mencegah hubung singkat antar fasa.',
    toolsAndMaterials: [
      '2x Kontaktor Magnetik dengan Kontak Bantu NO/NC',
      'Push Button Forward, Reverse, Stop & Lampu Indikator',
      'Thermal Overload Relay & MCB 1 Fasa',
      'Multimeter untuk Uji Kontinuitas Rangkaian Kontrol',
    ],
    functionSummary:
      'Mengendalikan arah putaran motor penggerak pintu/hoist secara aman tanpa risiko dua kontaktor aktif bersamaan.',
    technologySystem: 'Kontrol Elektromagnetik · Interlock Silang NC Kontak Bantu',
  },
  {
    id: 'proj-proteksi-listrik',
    title: 'Sistem Proteksi Hubung Singkat, Beban Lebih & Arus Bocor (Contoh)',
    category: 'Sistem Proteksi Listrik',
    year: '2024',
    imageUrl: '/src/assets/images/project_three_phase_motor_1794894380633.jpg',
    schematicKind: 'protection-rcd',
    description:
      'Konfigurasi koordinasi proteksi bertingkat memadukan MCCB/MCB untuk arus hubung singkat, Thermal Overload Relay untuk beban lebih motor, dan RCCB 30mA untuk proteksi manusia.',
    toolsAndMaterials: [
      'RCCB / ELCB Sensitivitas 30mA',
      'MCB Kurva B & C, Surge Protection Device (SPD)',
      'Phase Failure Relay (PFR) Proteksi Urutan & Hilang Fasa',
      'RCD Trip Time Tester & Clamp Meter',
    ],
    functionSummary:
      'Memutus suplai daya secara otomatis dalam hitungan milidetik saat terjadi gangguan isolasi, arus bocor, atau ketidakseimbangan fasa.',
    technologySystem: 'Koordinasi Proteksi Selektif · Phase Sequence & Earth Leakage Protection',
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-ukk-titl',
    name: 'Sertifikat Kompetensi Klaster Instalasi Tenaga & Kontrol Motor 3 Fasa (Contoh)',
    issuer: 'Lembaga Sertifikasi Profesi (LSP) / BNSP',
    year: '2024',
    credentialNumber: 'TITL-2024-0891 (Contoh)',
    description:
      'Pengakuan kompetensi pelaksanaan pemasangan instalasi listrik bangunan sederhana hingga panel pengendali motor listrik 3 fasa sesuai standar SKKNI & PUIL.',
    competencies: [
      'Membaca & mengimplementasikan wiring diagram',
      'Perakitan panel kontrol DOL & Star-Delta',
      'Pengukuran tahanan isolasi & kontinuitas',
    ],
  },
  {
    id: 'cert-k3-listrik',
    name: 'Sertifikat Pelatihan Dasar Keselamatan & Kesehatan Kerja (K3) Listrik (Contoh)',
    issuer: 'Pusat Pelatihan Keselamatan Kerja Industri',
    year: '2024',
    credentialNumber: 'K3L-2024-0314 (Contoh)',
    description:
      'Pelatihan identifikasi bahaya kejut listrik, busur api (arc flash), prosedur Lockout/Tagout (LOTO), serta pemilihan alat pelindung diri (APD) tegangan rendah.',
    competencies: [
      'Penerapan prosedur LOTO saat perawatan panel',
      'Penggunaan alat kerja berisolasi 1000V (VDE)',
      'Penanganan darurat bahaya kelistrikan',
    ],
  },
  {
    id: 'cert-plc-dasar',
    name: 'Sertifikat Pelatihan Otomasi Dasar & Pemrograman PLC (Contoh)',
    issuer: 'Balai Latihan Kerja Industri (BLKI)',
    year: '2024',
    credentialNumber: 'PLC-2024-1120 (Contoh)',
    description:
      'Pelatihan perancangan ladder diagram dasar untuk kontrol sekuensial, timer, counter, serta integrasi input/output panel otomasi industri.',
    competencies: [
      'Pengawatan I/O PLC 24VDC dan relay output',
      'Pemrograman Ladder Diagram sistem konveyor',
      'Simulasi & troubleshooting logika kontrol',
    ],
  },
  {
    id: 'cert-pkl',
    name: 'Sertifikat Praktik Kerja Lapangan — Teknisi Instalasi Utilitas (Contoh)',
    issuer: 'PT Mitra Teknik Utilitas',
    year: '2023',
    credentialNumber: 'PKL-2023-0542 (Contoh)',
    description:
      'Penghargaan penyelesaian program Praktik Kerja Lapangan selama 6 bulan pada divisi instalasi penerangan, stop kontak daya, dan pemeliharaan panel distribusi.',
    competencies: [
      'Instalasi konduit & penarikan kabel daya',
      'Inspeksi berkala panel LVMDP & SDP',
      'Disiplin kerja & pelaporan teknis lapangan',
    ],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'skill-1fasa',
    name: 'Instalasi Listrik 1 Fasa',
    category: 'Instalasi & Panel',
    percentage: 92,
    standardRef: 'PUIL 2011 · 220V AC',
    description: 'Pemasangan instalasi rumah tinggal & perkantoran, pembagian grup MCB, dan jalur pentanahan.',
  },
  {
    id: 'skill-3fasa',
    name: 'Instalasi Listrik 3 Fasa',
    category: 'Instalasi & Panel',
    percentage: 86,
    standardRef: '380V AC · R-S-T-N-PE',
    description: 'Penarikan kabel daya 3 fasa, terminasi busbar panel distribusi, dan penyeimbangan beban.',
  },
  {
    id: 'skill-wiring',
    name: 'Membaca Wiring Diagram',
    category: 'Kontrol & Otomasi',
    percentage: 90,
    standardRef: 'Standar Simbol IEC 60617',
    description: 'Interpretasi single-line diagram, diagram rangkaian daya, dan diagram rangkaian kontrol.',
  },
  {
    id: 'skill-panel',
    name: 'Pengawatan Panel Listrik',
    category: 'Instalasi & Panel',
    percentage: 88,
    standardRef: 'DIN Rail · Ferrule & Duct',
    description: 'Tata letak komponen panel, penekukan kabel rapi di wire duct, dan pelabelan terminal.',
  },
  {
    id: 'skill-penerangan',
    name: 'Instalasi Penerangan',
    category: 'Instalasi & Panel',
    percentage: 94,
    standardRef: 'Sakelar Tukar · Seri · LED',
    description: 'Perencanaan dan pemasangan titik lampu, sakelar tukar/silang, serta proteksi grup lampu.',
  },
  {
    id: 'skill-alat-ukur',
    name: 'Pengoperasian Alat Ukur Listrik',
    category: 'Alat Ukur & K3',
    percentage: 87,
    standardRef: 'Insulation · Earth Tester',
    description: 'Pengujian tahanan isolasi kabel (Megger), uji kontinuitas, dan pengukuran resistansi grounding.',
  },
  {
    id: 'skill-multimeter',
    name: 'Penggunaan Multimeter & Tang Ampere',
    category: 'Alat Ukur & K3',
    percentage: 93,
    standardRef: 'True RMS · AC/DC Measure',
    description: 'Pengukuran tegangan fasa-netral/fasa-fasa, arus beban clamp meter, dan deteksi hubung singkat.',
  },
  {
    id: 'skill-plc',
    name: 'Dasar PLC',
    category: 'Kontrol & Otomasi',
    percentage: 78,
    standardRef: 'Ladder Diagram · 24VDC I/O',
    description: 'Pemrograman logika dasar timer, counter, latching, serta pengawatan sensor ke modul PLC.',
  },
  {
    id: 'skill-motor',
    name: 'Sistem Kontrol Motor Listrik',
    category: 'Kontrol & Otomasi',
    percentage: 89,
    standardRef: 'DOL · Forward-Reverse · Y-Δ',
    description: 'Perakitan dan troubleshooting rangkaian kendali motor induksi dengan kontaktor dan TOR.',
  },
  {
    id: 'skill-k3',
    name: 'Keselamatan dan Kesehatan Kerja (K3) Listrik',
    category: 'Alat Ukur & K3',
    percentage: 95,
    standardRef: 'LOTO · APD 1000V VDE',
    description: 'Kepatuhan prosedur Lockout/Tagout, verifikasi bebas tegangan, dan penggunaan APD standar.',
  },
];

export const CONTACT_DATA: ContactData = {
  whatsappDisplay: '+62 812-0000-0000 (Contoh)',
  whatsappLink: 'https://wa.me/6281200000000',
  instagramHandle: '@ahmadzaidan.titl (Contoh)',
  instagramLink: 'https://instagram.com/',
  email: 'ahmad.zaidan.titl@contoh-email.id',
  address: 'Dsn. Brak, Desa Wadeng, Kec. Sidayu, Kab. Gresik',
  workingHours: 'Senin – Sabtu · 08:00 – 17:00 WIB',
};
