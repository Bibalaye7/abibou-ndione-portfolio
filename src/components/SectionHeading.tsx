import * as m from 'motion/react-m';

interface SectionHeadingProps {
  index: string;
  title: string;
  intro?: string;
}

const SectionHeading = ({ index, title, intro }: SectionHeadingProps) => (
  <div className="mb-12">
    <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold font-heading text-heading">
      <m.span
        className="font-mono text-lg md:text-xl font-medium text-brand"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {index}.
      </m.span>
      <m.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </m.span>
      {/* Le trait se dessine de gauche à droite */}
      <m.span
        aria-hidden="true"
        className="hidden sm:block h-px flex-1 max-w-xs origin-left bg-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
      />
    </h2>
    {intro && (
      <m.p
        className="mt-4 max-w-2xl text-lg text-body"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {intro}
      </m.p>
    )}
  </div>
);

export default SectionHeading;
