import type { ReactNode } from 'react';
import * as m from 'motion/react-m';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Fait apparaître son contenu en fondu quand il entre dans l'écran
const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <m.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
  >
    {children}
  </m.div>
);

export default Reveal;
