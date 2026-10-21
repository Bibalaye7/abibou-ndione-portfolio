import type { Variants } from 'motion/react';
import * as m from 'motion/react-m';
import { about, skillGroups } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const badge: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-surface-alt">
      <div className="container">
        <SectionHeading index="02" title="À propos" />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-5 text-lg text-body">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="lg:col-span-3 space-y-8">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.1}>
                <h3 className="mb-3 font-mono text-sm uppercase tracking-wider text-brand">{group.title}</h3>
                <m.ul
                  className="flex flex-wrap gap-2"
                  variants={list}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {group.skills.map((skill) => (
                    <m.li
                      key={skill}
                      variants={badge}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-md border border-line bg-card-bg px-3 py-1.5 text-sm font-medium text-heading shadow-xs transition-colors hover:border-brand hover:text-brand"
                    >
                      {skill}
                    </m.li>
                  ))}
                </m.ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
