import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href="#home"
          aria-label="Retour en haut de page"
          className="fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full bg-brand text-brand-fg shadow-lg hover:bg-brand-hover"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="size-5" />
        </m.a>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
