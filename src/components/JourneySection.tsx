import * as m from 'motion/react-m';
import { BookOpen, GraduationCap } from 'lucide-react';
import { journey } from '@/data/profile';
import SectionHeading from './SectionHeading';

const icons = { Formation: BookOpen, Diplôme: GraduationCap };

const JourneySection = () => {
  return (
    <section id="journey" className="section-padding bg-surface-alt">
      <div className="container">
        <SectionHeading
          index="04"
          title="Parcours"
          intro="Ma formation universitaire et mes diplômes, du plus récent au plus ancien."
        />

        <ol className="relative ml-4 max-w-3xl border-l-2 border-line">
          {journey.map((item, index) => {
            const Icon = icons[item.kind];
            return (
              <m.li
                key={item.title}
                className="relative pb-10 pl-10 last:pb-0"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
              >
                <span className="absolute -left-4.25 top-0 flex size-8 items-center justify-center rounded-full border-2 border-brand bg-surface text-brand">
                  <Icon className="size-4" />
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm text-brand">{item.year}</span>
                  <span className="rounded-full bg-chip-bg px-2.5 py-0.5 text-xs font-medium text-chip-fg">{item.kind}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-heading">{item.title}</h3>
                <p className="font-medium text-body">{item.org}</p>
                <p className="mt-1 text-sm text-subtle">{item.detail}</p>
              </m.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default JourneySection;
