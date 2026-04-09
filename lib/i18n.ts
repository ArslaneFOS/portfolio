export const supportedLocales = ['fr', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'fr';

export type TranslationSet = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    ariaLabel: string;
    homeAriaLabel: string;
    menuAriaLabel: string;
    languageMenuAriaLabel: string;
    logoAlt: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  };
  hero: {
    headline: string;
    taglines: string[];
    contactCta: string;
  };
  skills: {
    heading: string;
    subheading: string;
    categories: Array<{
      title: string;
      skills: string[];
    }>;
  };
  projects: {
    heading: string;
    subheading: string;
    items: Array<{
      id: number;
      title: string;
      description: string;
      tags: string[];
      link: string;
      image: string;
    }>;
  };
  contact: {
    heading: string;
    subheading: string;
    formTitle: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      subject: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    submitButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
    infoTitle: string;
    emailLabel: string;
    locationLabel: string;
    socialLinksLabel: string;
    scheduleTitle: string;
    scheduleDescription: string;
    scheduleCta: string;
  };
};

export const translations: Record<Locale, TranslationSet> = {
  fr: {
    metadata: {
      title: 'Arslane Freelance - Web | Agents IA | Automatisation | Data',
      description: 'Portfolio de Arslane, ingenieur specialise en developpement web, agents IA, automatisation et pipelines de donnees. Projets realises avec Python, React, Next.js, TypeScript, n8n, CrewAI et plus.'
    },
    navigation: {
      ariaLabel: 'Navigation principale',
      homeAriaLabel: 'Accueil',
      menuAriaLabel: 'Basculer le menu',
      languageMenuAriaLabel: 'Changer de langue',
      logoAlt: 'Logo Arslane',
      items: [
        { label: 'Competences', href: '#skills' },
        { label: 'Projets', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    hero: {
      headline: "Vos solutions web et IA sur mesure",
      taglines: [
        'Conception et développement web moderne' , 'Agents IA sur mesure pour automatiser et optimiser vos processus' , 'Pipelines de données robustes pour alimenter vos projets IA'
      ],
      contactCta: 'Discutons de votre projet'
    },
    skills: {
      heading: 'Competences et stack technique',
      subheading: 'J\'utilise les technologies les plus recentes pour construire des produits solides.',
      categories: [
        {
          title: 'Développement Web',
          skills: ['Django', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'PostgreSQL', 'Figma Design']
        },
        {
          title: 'Développement IA',
          skills: ['Python', 'n8n', 'Intégrations IA', 'CrewAI', 'LangChain', 'LangGraph', 'TensorFlow', 'Pipelines de données']
        },
        {
          title: 'Outils et DevOps',
          skills: ['AWS', 'Git', 'Docker', 'n8n', 'Linux', 'Claude Code', 'CI/CD', 'Notion']
        },
      ]
    },
    projects: {
      heading: 'Projets',
      subheading: 'Quelques exemples de ce que je sais faire !',
      items: [
        {
          id: 1,
          title: 'Agent IA de profilage financier @ Yieldy',
          description: 'Un agent IA conversationnel qui pose des questions pour profiler les besoins financiers des utilisateurs et recommander des produits d\'épargne adaptés.',
          tags: ['React', 'TypeScript', 'Django', 'CrewAI', 'PostgreSQL'],
          link: 'https://advisor.yieldy.fr/',
          image: '/yieldy_agent.png'
        },
        {
          id: 2,
          title: 'Site vitrine B2C @ Yieldy',
          description: 'Site vitrine présentant les services de Yieldy. Conception et développement du site pour mettre en avant les offres et attirer de nouveaux clients.',
          tags: ['Django', 'HTML/CSS', 'Tailwind CSS', 'Figma Design'],
          link: 'https://investing.yieldy.fr',
          image: 'yieldy_site.png'
        },
        {
          id: 3,
          title: 'Outil d\'emailing IA pour la prospection B2B @ Yieldy',
          description: 'Automatisation propriétaire de la prospection B2B utilisant l\'IA pour générer des séquences d\'emails personnalisées et engageantes, améliorant ainsi les taux de conversion. L\'outil a fait ses preuves lors des campagnes de financement et de prospection clients de Yieldy.',
          tags: ['n8n', 'Amazon Bedrock', 'OpenAI API', 'Notion'],
          link: '',
          image: './n8n.jpg'
        },
        {
          id: 4,
          title: 'Site pour le cabinet de conseil AXA Guillaume DUC',
          description: 'Site vitrine pour le conseiller AXA Guillaume DUC. Conception et développement du site pour présenter les services et les expertises du cabinet. Intégration des outils de profilage Yieldy et de prise de rendez-vous pour faciliter la conversion des visiteurs en clients.',
          tags: ['Next.js', 'React', 'Vercel', 'Tailwind CSS', 'Figma Design'],
          link: 'https://site-guillaume-duc.vercel.app/',
          image: './site_guillaume_duc.png'
        }
      ]
    },
    contact: {
      heading: 'Me contacter',
      subheading: "Vous avez un projet en tete ou envie d'en parler ? N'hesitez pas a me contacter, et je reviendrais vers vous au plus vite !",
      formTitle: 'Contactez-moi',
      fields: {
        name: { label: 'Nom', placeholder: 'Votre nom' },
        email: { label: 'Email', placeholder: 'votre.email@exemple.com' },
        subject: { label: 'Sujet', placeholder: "De quoi s'agit-il ?" },
        message: { label: 'Message', placeholder: 'Votre message...' }
      },
      submitButton: 'Envoyer le message',
      sendingButton: 'Envoi en cours...',
      successMessage: 'Message envoye avec succes !',
      errorMessage: "Erreur lors de l'envoi du message. Veuillez reessayer.",
      infoTitle: 'Infos de contact',
      emailLabel: 'Email',
      locationLabel: 'Localisation',
      socialLinksLabel: 'Reseaux sociaux',
      scheduleTitle: 'Planifier un appel',
      scheduleDescription: 'Prenez rendez-vous directement sur mon calendrier pour discuter de votre projet en detail.',
      scheduleCta: 'Reserver un rendez-vous'
    }
  },
  en: {
    metadata: {
      title: 'Arslane Freelance - Web | AI Agents | Automation | Data',
      description: 'Arslane\'s portfolio, an engineer specializing in web development, AI agents, automation, and data pipelines. Projects built with Python, React, Next.js, TypeScript, n8n, CrewAI and more.'
    },
    navigation: {
      ariaLabel: 'Primary navigation',
      homeAriaLabel: 'Home',
      menuAriaLabel: 'Toggle menu',
      languageMenuAriaLabel: 'Change language',
      logoAlt: 'Arslane logo',
      items: [
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    hero: {
      headline: "Your partner for web and AI solutions",
      taglines: [
        'Modern web design and development', 'Custom AI agents to automate and optimize your processes', 'Robust data pipelines to power your AI projects'
      ],
      contactCta: 'Let\'s discuss your project'
    },
    skills: {
      heading: 'Skills and tech stack',
      subheading: 'I use the latest technologies to build solid products.',

      categories: [
        {
          title: 'Web Development',
          skills: ['Django', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'PostgreSQL', 'Figma Design']
        },
        {
          title: 'AI Development',
          skills: ['Python', 'n8n', 'AI Integrations', 'CrewAI', 'LangChain', 'LangGraph', 'TensorFlow', 'Data Pipelines']
        },
        {
          title: 'Tools & DevOps',
          skills: ['AWS', 'Git', 'Docker', 'n8n', 'Linux', 'Claude Code', 'CI/CD', 'Notion']
        },
      ]
    },
    projects: {
      heading: 'Featured projects',
      subheading: 'Some examples of what I can do!',
      items: [
        {
          id: 1,
          title: 'Financial Profiling AI Agent @ Yieldy',
          description: 'A conversational AI agent that asks questions to profile users\' financial needs and recommend suitable savings products.',
          tags: ['React', 'TypeScript', 'Django', 'CrewAI', 'PostgreSQL'],
          link: 'https://advisor.yieldy.fr/',
          image: '/yieldy_agent.png'
        },
        {
          id: 2,
          title: 'B2C Showcase Website @ Yieldy',
          description: 'Showcase website presenting Yieldy\'s services. Designed and developed the site to highlight offerings and attract new customers.',
          tags: ['Django', 'HTML/CSS', 'Tailwind CSS', 'Figma Design'],
          link: 'https://investing.yieldy.fr',
          image: 'yieldy_site.png'
        },
        {
          id: 3,
          title: 'AI Emailing Tool for B2B Prospecting @ Yieldy',
          description: 'Proprietary automation for B2B prospecting using AI to generate personalized and engaging email sequences, improving conversion rates. The tool proved effective during Yieldy\'s fundraising and client prospecting campaigns.',
          tags: ['n8n', 'Amazon Bedrock', 'OpenAI API', 'Notion'],
          link: '',
          image: './n8n.jpg'
        },
        {
          id: 4,
          title: 'Website for AXA Guillaume DUC Consulting Firm',
          description: 'Showcase website for AXA advisor Guillaume DUC. Designed and developed the site to present the services and expertise of the firm. Integrated Yieldy\'s profiling tools and appointment scheduling to facilitate converting visitors into clients.',
          tags: ['Next.js', 'React', 'Vercel', 'Tailwind CSS', 'Figma Design'],
          link: 'https://site-guillaume-duc.vercel.app/',
          image: './site_guillaume_duc.png'
        }
      ]
    },
    contact: {
      heading: 'Get in touch',
      subheading: 'Have a project in mind or just want to chat? Feel free to reach out, and I\'ll get back to you as soon as possible!',
      formTitle: 'Send me a message',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'your.email@example.com' },
        subject: { label: 'Subject', placeholder: 'What is this about?' },
        message: { label: 'Message', placeholder: 'Your message...' }
      },
      submitButton: 'Send Message',
      sendingButton: 'Sending...',
      successMessage: 'Message sent successfully!',
      errorMessage: 'Error sending message. Please try again.',
      infoTitle: 'Contact info',
      emailLabel: 'Email',
      locationLabel: 'Location',
      socialLinksLabel: 'Social links',
      scheduleTitle: 'Schedule a call',
      scheduleDescription: 'Book a slot directly on my schedule to discuss your project in detail.',
      scheduleCta: 'Book a meeting'
    }
  }
};

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getLocale(value?: string | string[]): Locale {
  const resolved = Array.isArray(value) ? value[0] : value;
  return resolved && isLocale(resolved) ? resolved : defaultLocale;
}

export function getTranslations(locale: Locale): TranslationSet {
  return translations[locale] ?? translations[defaultLocale];
}