'use client';

import ProjectCard from '@/components/ProjectCard';
import { getTranslations, type Locale } from '@/lib/i18n';

type ProjectsProps = {
  lang: Locale;
};

const Projects = ({ lang }: ProjectsProps) => {
  const translations = getTranslations(lang);
  const { items: projects } = translations.projects;

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{translations.projects.heading}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{translations.projects.subheading}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

