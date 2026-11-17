import { jsPDF } from 'jspdf';
import {
  CertificateItem,
  ContactData,
  ExperienceItem,
  ProfileData,
  SkillItem,
} from '../data/portfolioData';

/**
 * Menghasilkan file PDF Sertifikat Kompetensi yang dapat langsung diunduh.
 */
export function downloadCertificatePDF(cert: CertificateItem, holderName: string): void {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // Dark industrial header frame
  doc.setFillColor(11, 17, 28);
  doc.rect(0, 0, width, height, 'F');

  // Outer blueprint border
  doc.setDrawColor(14, 165, 233);
  doc.setLineWidth(1.2);
  doc.rect(10, 10, width - 20, height - 20);

  // Inner safety yellow hairline
  doc.setDrawColor(250, 204, 21);
  doc.setLineWidth(0.4);
  doc.rect(14, 14, width - 28, height - 28);

  // Header tag
  doc.setTextColor(56, 189, 248);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('DOKUMEN PORTOFOLIO KOMPETENSI KELISTRIKAN (TITL)', width / 2, 30, {
    align: 'center',
  });

  // Main title
  doc.setTextColor(248, 250, 252);
  doc.setFontSize(22);
  const titleLines = doc.splitTextToSize(cert.name, width - 60);
  doc.text(titleLines, width / 2, 48, { align: 'center' });

  // Holder
  doc.setTextColor(148, 163, 184);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text('Diberikan / Tercatat Atas Nama:', width / 2, 74, { align: 'center' });

  doc.setTextColor(250, 204, 21);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(holderName, width / 2, 86, { align: 'center' });

  // Issuer & Year
  doc.setTextColor(226, 232, 240);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text(`Lembaga Penerbit: ${cert.issuer}`, width / 2, 102, { align: 'center' });
  doc.text(`Tahun Penerbitan: ${cert.year}   |   No. Referensi: ${cert.credentialNumber}`, width / 2, 110, {
    align: 'center',
  });

  // Description box
  doc.setDrawColor(51, 65, 85);
  doc.setFillColor(15, 23, 36);
  doc.roundedRect(28, 122, width - 56, 48, 2, 2, 'FD');

  doc.setTextColor(203, 213, 225);
  doc.setFontSize(10.5);
  const descLines = doc.splitTextToSize(cert.description, width - 76);
  doc.text(descLines, width / 2, 133, { align: 'center' });

  doc.setTextColor(56, 189, 248);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Unit Kompetensi Tercakup:', 38, 152);

  doc.setTextColor(241, 245, 249);
  doc.setFont('helvetica', 'normal');
  cert.competencies.slice(0, 3).forEach((comp, idx) => {
    doc.text(`- ${comp}`, 40, 159 + idx * 5.5);
  });

  // Footer
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.text(
    'Salinan digital dihasilkan dari Portofolio Teknik Instalasi Tenaga Listrik.',
    width / 2,
    height - 20,
    { align: 'center' }
  );

  const safeFileName = cert.id.replace(/[^a-zA-Z0-9-_]/g, '_');
  doc.save(`Sertifikat_${safeFileName}.pdf`);
}

/**
 * Menghasilkan file CV profesional format PDF dari data profil, pengalaman, dan keahlian.
 */
export function downloadCVPDF(
  profile: ProfileData,
  experiences: ExperienceItem[],
  skills: SkillItem[],
  contact: ContactData
): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 18;

  // Header band
  doc.setFillColor(11, 17, 28);
  doc.rect(0, 0, pageWidth, 42, 'F');
  doc.setDrawColor(14, 165, 233);
  doc.setLineWidth(0.8);
  doc.line(0, 42, pageWidth, 42);

  doc.setTextColor(248, 250, 252);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(profile.fullName, 16, y);

  y += 7;
  doc.setTextColor(56, 189, 248);
  doc.setFontSize(11);
  doc.text(`${profile.role} — ${profile.major}`, 16, y);

  y += 7;
  doc.setTextColor(203, 213, 225);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(`${contact.email}  |  ${contact.whatsappDisplay}  |  ${contact.address}`, 16, y);

  y = 54;

  // Profil Singkat
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('PROFIL & TUJUAN KARIER', 16, y);
  doc.setDrawColor(14, 165, 233);
  doc.line(16, y + 2, pageWidth - 16, y + 2);

  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const bioLines = doc.splitTextToSize(`${profile.biography} ${profile.careerGoal}`, pageWidth - 32);
  doc.text(bioLines, 16, y);
  y += bioLines.length * 4.8 + 6;

  // Pengalaman & Pendidikan
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('PENGALAMAN & PENDIDIKAN', 16, y);
  doc.line(16, y + 2, pageWidth - 16, y + 2);
  y += 8;

  experiences.slice(0, 5).forEach((exp) => {
    if (y > 255) {
      doc.addPage();
      y = 20;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`[${exp.category}] ${exp.title}`, 16, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.institution} (${exp.period})`, 16, y + 4.5);

    const sumLines = doc.splitTextToSize(exp.summary, pageWidth - 32);
    doc.setTextColor(51, 65, 85);
    doc.text(sumLines, 16, y + 9.5);
    y += 12 + sumLines.length * 4.3;
  });

  y += 3;
  if (y > 235) {
    doc.addPage();
    y = 20;
  }

  // Keahlian Teknis
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('KEAHLIAN TEKNIS KELISTRIKAN', 16, y);
  doc.line(16, y + 2, pageWidth - 16, y + 2);
  y += 8;

  skills.forEach((skill, idx) => {
    const colX = idx % 2 === 0 ? 16 : pageWidth / 2 + 4;
    if (idx % 2 === 0 && y > 272) {
      doc.addPage();
      y = 20;
    }
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.2);
    doc.setTextColor(30, 41, 59);
    doc.text(`${skill.name} (${skill.percentage}%)`, colX, y);
    if (idx % 2 === 1) {
      y += 6;
    }
  });

  doc.save(`CV_${profile.fullName.replace(/\s+/g, '_')}_TITL.pdf`);
}
