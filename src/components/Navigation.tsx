import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/theme';
import { useActiveSection } from '@/lib/useActiveSection';
import { navLinks, profile } from '@/data/profile';

const sectionIds = navLinks.map((link) => link.href.slice(1));

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const themeLabel = theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre';

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled || mobileMenuOpen ? 'bg-green-950/90 backdrop-blur-md shadow-xs py-3' : 'bg-transparent py-5'
    )}>
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-heading text-xl font-bold text-white" aria-label="Accueil">
            AN<span className="text-green-400">.</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'group relative py-1 text-sm font-medium transition-colors hover:text-white',
                    isActive ? 'text-white' : 'text-green-100',
                  )}
                >
                  <span className="font-mono text-green-400 mr-1">0{index + 1}.</span>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-green-400 transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </a>
              );
            })}
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="rounded-md border border-green-400 px-4 py-2 text-sm font-medium text-green-300 hover:bg-green-400/10 transition-colors"
              >
                CV
              </a>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              className="text-green-100 hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button type="button" onClick={toggleTheme} aria-label={themeLabel} className="text-white">
              {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            <button
              type="button"
              className="text-white focus:outline-hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <m.nav
              className="lg:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-4 pt-6 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-medium text-green-100 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                {profile.cvUrl && (
                  <a href={profile.cvUrl} download className="font-medium text-green-300">
                    Télécharger mon CV
                  </a>
                )}
              </div>
            </m.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
