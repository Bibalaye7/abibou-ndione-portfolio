import { navLinks, profile } from '@/data/profile';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 dark:bg-[#050a07] px-4 py-12 text-white">
      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-heading text-xl font-bold">
            {profile.name}<span className="text-green-400">.</span>
          </p>
          <p className="mt-1 text-sm text-green-300">{profile.role}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-green-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <SocialLinks linkClassName="text-green-300 hover:text-white" />
      </div>
      <p className="mt-8 text-center text-sm text-green-400">
        &copy; {currentYear} {profile.name}. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
