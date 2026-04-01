'use client';

import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A brief description of your first project and what it does',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A brief description of your second project and what it does',
      tags: ['Next.js', 'PostgreSQL', 'Node.js'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A brief description of your third project and what it does',
      tags: ['React', 'Firebase', 'CSS'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A brief description of your fourth project and what it does',
      tags: ['Next.js', 'Tailwind', 'MongoDB'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#050505]">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects and work samples
          </p>
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

