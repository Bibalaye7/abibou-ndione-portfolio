import { Award, BadgeCheck, FileText } from 'lucide-react';
import { certifications, trainings } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-surface">
      <div className="container">
        <SectionHeading
          index="03"
          title="Certifications"
          intro="Mes certifications et les formations que j'ai suivies pour compléter mon cursus."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal
              key={cert.title}
              delay={index * 0.1}
              className="flex gap-4 rounded-xl border border-line bg-card-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_20px_50px_rgba(22,163,74,0.15)]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-chip-bg text-brand">
                <Award className="size-6" />
              </span>
              <div className="flex flex-1 flex-col">
                <p className="font-mono text-xs text-brand">{cert.date}</p>
                <h3 className="mt-1 text-lg font-semibold text-heading">{cert.title}</h3>
                <p className="mt-1 flex-1 text-sm text-body">{cert.issuer}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                  {cert.proofUrl && (
                    <a href={cert.proofUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hover hover:underline">
                      <FileText className="size-4" /> PDF
                    </a>
                  )}
                  {cert.verifyUrl && (
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hover hover:underline">
                      <BadgeCheck className="size-4" /> Vérifier en ligne
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="mb-4 text-xl font-bold font-heading text-heading">Autres formations</h3>
          <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-card-bg">
            {trainings.map((training) => (
              <li key={training.title} className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-surface-alt sm:flex-row sm:items-center sm:gap-6">
                <span className="w-24 shrink-0 font-mono text-xs text-brand">{training.date}</span>
                <div className="flex-1">
                  <p className="font-medium text-heading">{training.title}</p>
                  <p className="text-sm text-subtle">{training.issuer}</p>
                </div>
                {training.proofUrl && (
                  <a
                    href={training.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Attestation PDF : ${training.title}`}
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover hover:underline"
                  >
                    <FileText className="size-4" /> Attestation
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default CertificationsSection;
