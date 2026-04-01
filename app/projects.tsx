'use client';

import AnimatedContent from '@/components/AnimatedContent';
import GlareHover from '@/components/GlareHover';

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
            <AnimatedContent
              key={project.id}
              direction="vertical"
              distance={50}
              duration={0.5}
              ease="easeOut"
              delay={0.5 + 0.3 * idx}
            >
              <GlareHover>
                <a
                  href={project.link}
                  className="block group cursor-pointer"
                >
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all">
                    {/* Image */}
                    <div className="w-full h-48 bg-gray-700 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-900 text-gray-300 px-2.5 py-1 rounded-full border border-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </GlareHover>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
