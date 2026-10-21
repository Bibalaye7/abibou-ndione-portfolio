import { useScroll, useSpring } from 'motion/react';
import * as m from 'motion/react-m';

// Fine barre en haut de page qui suit la progression du défilement
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-60 h-1 origin-left bg-linear-to-r from-green-400 via-green-500 to-emerald-300"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
