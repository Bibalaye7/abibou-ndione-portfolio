import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { profile, projects } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { GitHubIcon } from './icons';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container">
        <SectionHeading
          index="01"
          title="Projets"
          intro="Une sélection de projets réels, en ligne et utilisés, qui montrent comment je conçois et livre des applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card-bg transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-[0_20px_50px_rgba(22,163,74,0.15)]"
              delay={(index % 2) * 0.1}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-950/15 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold font-heading text-heading">{project.title}</h3>
                <p className="mt-2 flex-1 text-body">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-chip-bg px-3 py-1 font-mono text-xs text-chip-fg">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-brand hover:text-brand-hover hover:underline"
                    >
                      Voir le site <ExternalLink className="size-4" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-subtle hover:text-heading"
                    >
                      <GitHubIcon className="size-4" /> Code source
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-brand px-6 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-brand-fg"
          >
            Voir tous mes projets sur GitHub <ArrowUpRight className="size-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
