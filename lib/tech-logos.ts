/**
 * Independent list of technology logos
 * Separated from i18n to avoid duplication across languages
 * and to keep logo sources centralized and language-agnostic
 */

export type TechLogo = {
  name: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const techLogos: TechLogo[] = [
  {
    name: 'Python',
    src: 'https://cdn.simpleicons.org/python',
    alt: 'Python',
    width: 40,
    height: 40
  },
  {
    name: 'React',
    src: 'https://cdn.simpleicons.org/react',
    alt: 'React',
    width: 40,
    height: 40
  },
  {
    name: 'Next.js',
    src: 'https://cdn.simpleicons.org/next.js/ccc',
    alt: 'Next.js',
    width: 40,
    height: 40
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.simpleicons.org/typescript',
    alt: 'TypeScript',
    width: 40,
    height: 40
  },
  {
    name: 'Django',
    src: 'https://cdn.simpleicons.org/django/070',
    alt: 'Django',
    width: 40,
    height: 40
  },
  {
    name: 'PostgreSQL',
    src: 'https://cdn.simpleicons.org/postgresql',
    alt: 'PostgreSQL',
    width: 40,
    height: 40
  },
  {
    name: 'Docker',
    src: 'https://cdn.simpleicons.org/docker',
    alt: 'Docker',
    width: 40,
    height: 40
  },
  {
    name: 'Git',
    src: 'https://cdn.simpleicons.org/git',
    alt: 'Git',
    width: 40,
    height: 40
  },
  {
    name: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    alt: 'AWS',
    width: 40,
    height: 40
  },
  {
    name: 'Tailwind CSS',
    src: 'https://cdn.simpleicons.org/tailwindcss',
    alt: 'Tailwind CSS',
    width: 40,
    height: 40
  },
  {
    name: 'Figma Design',
    src: 'https://cdn.simpleicons.org/figma',
    alt: 'Figma Design',
    width: 40,
    height: 40
  },
  {
    name: 'Linux',
    src: 'https://cdn.simpleicons.org/linux/eee',
    alt: 'Linux',
    width: 40,
    height: 40
  },
  {
    name: 'n8n',
    src: 'https://cdn.simpleicons.org/n8n',
    alt: 'n8n',
    width: 40,
    height: 40
  },
  {
    name: 'shadcn UI',
    src: 'https://cdn.simpleicons.org/shadcnui/eee',
    alt: 'shadcn UI',
    width: 40,
    height: 40
  },
  {
    name: 'CrewAI',
    src: 'https://cdn.simpleicons.org/crewai',
    alt: 'CrewAI',
    width: 40,
    height: 40
  },
  {
    name: 'TensorFlow',
    src: 'https://cdn.simpleicons.org/tensorflow',
    alt: 'TensorFlow',
    width: 40,
    height: 40
  },
  {
    name: 'Claude Code',
    src: 'https://cdn.simpleicons.org/claude',
    alt: 'Claude Code',
    width: 40,
    height: 40
  }
];
