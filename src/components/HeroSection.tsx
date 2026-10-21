import { useEffect, useState } from 'react';
import { AnimatePresence, type Variants } from 'motion/react';
import * as m from 'motion/react-m';
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import { profile } from '@/data/profile';
import SocialLinks from './SocialLinks';

// Ce que je crée : affiché en boucle sous le titre
const creations = ['des sites vitrines', 'des applications web', 'des applications mobiles', 'des boutiques en ligne'];

// Les éléments du texte apparaissent l'un après l'autre
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const RotatingWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % creations.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={creations[index]}
          className="whitespace-nowrap font-semibold text-green-300"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {creations[index]}
        </m.span>
      </AnimatePresence>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-svh flex items-center section-padding pt-32 bg-linear-to-br from-green-950 via-green-900 to-green-800 dark:from-[#050a07] dark:via-green-950 dark:to-[#0a1f12]"
    >
      {/* Halos lumineux qui dérivent lentement en arrière-plan */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 size-112 rounded-full bg-green-500/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 size-128 rounded-full bg-emerald-400/15 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <m.div className="md:w-3/5 space-y-6" variants={container} initial="hidden" animate="show">
            <m.p variants={item} className="font-mono text-green-400">Bonjour, je suis</m.p>
            <m.h1 variants={item} className="font-heading font-bold text-white">
              <span className="block text-4xl md:text-6xl">{profile.name}</span>
              <span className="mt-2 block text-3xl md:text-5xl text-green-200/90">{profile.role}</span>
            </m.h1>
            <m.p variants={item} className="text-xl text-green-100">
              Je crée <RotatingWord />
            </m.p>
            <m.p variants={item} className="text-green-100/90 text-lg max-w-xl">{profile.tagline}</m.p>
            <m.div variants={item} className="space-y-1 text-sm text-green-300">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" /> {profile.location}
              </p>
              <p className="pl-6 text-green-300/80">Actuellement à {profile.currentLocation}</p>
            </m.div>

            <m.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <m.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-green-900 shadow-lg shadow-green-950/30 transition-colors hover:bg-green-100"
              >
                Voir mes projets
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </m.a>
              <m.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center rounded-md border-2 border-white/80 px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-green-900"
              >
                Me contacter
              </m.a>
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download
                  className="group inline-flex items-center gap-2 rounded-md px-4 py-3 font-medium text-green-300 hover:text-white transition-colors"
                >
                  <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
                  Télécharger mon CV
                </a>
              )}
            </m.div>

            <m.div variants={item}>
              <SocialLinks className="pt-2" linkClassName="text-green-300 hover:text-white" />
            </m.div>
          </m.div>

          <m.div
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative">
              <m.div
                aria-hidden="true"
                className="absolute -top-6 -left-6 size-56 md:size-64 bg-green-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* La photo flotte doucement */}
              <m.div
                className="relative z-10 rounded-xl border border-white/30 bg-white/10 p-2 backdrop-blur-xs"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  fetchPriority="high"
                  className="size-60 md:size-80 rounded-lg object-cover object-top"
                />
              </m.div>
              <m.div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 size-40 md:size-48 bg-green-300 rounded-full opacity-20"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </div>
          </m.div>
        </div>
      </div>

      <m.a
        href="#projects"
        aria-label="Aller à la section Projets"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block text-green-300 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="size-7" />
      </m.a>
    </section>
  );
};

export default HeroSection;
