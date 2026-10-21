import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { profile } from '@/data/profile';
import { GitHubIcon, LinkedInIcon, XIcon } from './icons';

const links = [
  { label: 'GitHub', href: profile.socials.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: LinkedInIcon },
  { label: 'X (Twitter)', href: profile.socials.twitter, Icon: XIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

// Seuls les réseaux renseignés dans profile.ts sont affichés
const SocialLinks = ({ className, linkClassName }: { className?: string; linkClassName?: string }) => (
  <div className={cn('flex items-center gap-3', className)}>
    {links.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        title={label}
        {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
        className={cn('transition-all duration-300 hover:-translate-y-0.5', linkClassName)}
      >
        <Icon className="size-5" />
      </a>
    ))}
  </div>
);

export default SocialLinks;
