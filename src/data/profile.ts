// Tout le contenu du portfolio est centralisé ici : modifier ce fichier suffit
// pour ajouter un projet, un lien ou une formation.

export const profile = {
  name: 'Abibou Ndione',
  role: 'Développeur Web et Mobile',
  tagline:
    'Je conçois des sites et applications web et mobile utiles, rapides et accessibles, avec une attention particulière pour les entreprises africaines.',
  location: 'Dakar, Médina, Sénégal',
  email: 'ndioneabibou7@gmail.com',
  phones: ['+221 76 805 29 67', '+221 70 760 10 58'],
  // Chemin du CV placé dans public/ ; mettre null pour masquer le bouton
  cvUrl: '/cv-abibou-ndione.pdf' as string | null,
  socials: {
    github: 'https://github.com/Bibalaye7',
    linkedin: null as string | null,
    twitter: null as string | null,
  },
};

export const about = [
  "Étudiant en 3e année de Licence Développement d'applications (web, mobile, gaming) à l'Université Numérique Cheikh Hamidou Kane (UN-CHK), j'aime transformer des idées en produits concrets. J'ai déjà conçu et mis en ligne des sites web avec React et TypeScript.",
  "Mon parcours a commencé avec HTML et CSS, puis s'est élargi aux frameworks JavaScript, au mobile avec Ionic et Angular, au back-end avec Node.js et Java, et aux CMS avec WordPress et WooCommerce.",
  "Je crois que la meilleure technologie est celle qui répond aux besoins réels des utilisateurs tout en restant robuste et maintenable. En dehors du code, je m'intéresse à l'e-commerce, aux randonnées en plein air et à l'apprentissage continu.",
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Africa Agro SEM',
    description:
      "Site d'une entreprise sénégalaise de semences certifiées : catalogue des semences, activités, traçabilité des lots et réservation en ligne.",
    tags: ['React', 'TypeScript', 'Vercel'],
    image: '/projets/africa-agro-sem.webp',
    liveUrl: 'https://africaagrosemsn.vercel.app',
  },
  {
    title: 'AgroIA',
    description:
      "Plateforme d'agriculture intelligente : optimisation des cultures, analyse des sols et recommandations personnalisées pour les agriculteurs.",
    tags: ['React', 'TypeScript', 'GitHub Pages'],
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=70',
    liveUrl: 'https://bibalaye7.github.io/agroIA/',
  },
];

export const skillGroups = [
  {
    title: 'Front-end & mobile',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Angular', 'Ionic'],
  },
  {
    title: 'Back-end & CMS',
    skills: ['Node.js', 'Java / JEE', 'JSP / JSF', 'MySQL / MariaDB', 'WordPress', 'WooCommerce'],
  },
  {
    title: 'Outils & méthodes',
    skills: ['Git & GitHub', 'VS Code', 'Vercel', 'Figma', 'Architecture logicielle', 'E-commerce', 'Sécurité & optimisation'],
  },
];

export interface JourneyItem {
  kind: 'Formation' | 'Diplôme';
  title: string;
  org: string;
  year: string;
  detail: string;
}

// Du plus récent au plus ancien
export const journey: JourneyItem[] = [
  {
    kind: 'Formation',
    title: "Licence Développement d'applications : web, mobile, gaming — L3",
    org: 'Université Numérique Cheikh Hamidou Kane (UN-CHK)',
    year: 'Depuis 2023',
    detail: 'Technologies web et mobile, JSF, architectures logicielles, CMS/LMS, sécurité, cryptographie, e-commerce. Validation en attente des résultats.',
  },
  {
    kind: 'Diplôme',
    title: 'Baccalauréat, série L2',
    org: 'Lycée de Guéréo',
    year: '2022',
    detail: 'Sénégal',
  },
  {
    kind: 'Diplôme',
    title: "Brevet de Fin d'Études Moyennes (BFEM)",
    org: 'CEM Guéréo',
    year: '2017',
    detail: 'Option Français — Section Moderne-SP · Session de juillet 2017',
  },
  {
    kind: 'Diplôme',
    title: "Certificat de Fin d'Études Élémentaires (CFEE)",
    org: 'Centre de Guéréo I',
    year: '2013',
    detail: "Session d'août 2013",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  // Image du document, consultable sur le site mais pas proposée au téléchargement
  documentUrl?: string;
  // Page de vérification officielle
  verifyUrl?: string;
}

// Certifications mises en avant
export const certifications: Certification[] = [
  {
    title: 'Créez un site e-commerce avec WordPress',
    issuer: 'Xarala Academy — attestation de formation',
    date: '4 mars 2026',
    documentUrl: '/consultation/xarala-ecommerce-wordpress.webp',
  },
  {
    title: 'Elements of AI',
    issuer: 'University of Helsinki, Sorbonne Université & MinnaLearn',
    date: '10 septembre 2025',
    documentUrl: '/consultation/elements-of-ai.webp',
    verifyUrl: 'https://certificates.mooc.fi/validate/vh8oopy4vkk',
  },
  {
    title: 'Web Development Essentials',
    issuer: 'GOMYCODE — certificat de fin de formation',
    date: '28 février 2025',
    documentUrl: '/consultation/gomycode-web-development-essentials.webp',
  },
];

export interface Training {
  title: string;
  issuer: string;
  date: string;
  documentUrl?: string;
}

// Autres formations, affichées en liste simple (du plus récent au plus ancien)
export const trainings: Training[] = [
  {
    title: 'Cyber Shield — Les fondamentaux de la cybersécurité',
    issuer: 'TECH-KI · Orange Digital Center',
    date: 'Août 2026',
    documentUrl: '/consultation/techki-cyber-shield.webp',
  },
  {
    title: 'Web Builder — Créer des sites web modernes (HTML, CSS, Bootstrap, JavaScript)',
    issuer: 'TECH-KI · Orange Digital Center',
    date: 'Août 2026',
    documentUrl: '/consultation/techki-web-builder.webp',
  },
  {
    title: "Vibe Coding Starter — Créer un projet web avec l'IA",
    issuer: 'TECH-KI · Orange Digital Center',
    date: 'Août 2026',
    documentUrl: '/consultation/techki-vibe-coding-starter.webp',
  },
  {
    title: 'Project Master — Piloter un projet Agile',
    issuer: 'TECH-KI · Orange Digital Center',
    date: 'Août 2026',
    documentUrl: '/consultation/techki-project-master-agile.webp',
  },
  {
    title: 'Masterclass Conception graphique : créer son premier logo',
    issuer: 'GOMYCODE',
    date: '2026',
    documentUrl: '/consultation/gomycode-masterclass-logo.webp',
  },
  {
    title: 'Créez votre site web avec HTML5 et CSS3',
    issuer: 'OpenClassrooms — cours terminé à 100 %',
    date: '2025',
  },
  {
    title: 'Codez un site web accessible avec HTML & CSS',
    issuer: 'OpenClassrooms — cours terminé à 100 %',
    date: '2025',
  },
];

export const navLinks = [
  { label: 'Projets', href: '#projects' },
  { label: 'À propos', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Parcours', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];
