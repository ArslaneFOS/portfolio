'use client';

import AnimatedContent from '@/components/AnimatedContent';
import LogoLoop from '@/components/LogoLoop';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'GitHub', 'VS Code', 'Linux']
    },
    {
      title: 'Other',
      skills: ['UI/UX Design', 'Figma', 'Web Performance', 'SEO', 'Testing']
    }
  ];

  const techLogos = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'Git'
  ];

  return (
    <section id='skills' className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#050505]">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Tech Stack</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I use to build amazing products
          </p>
        </div>

        {/* Logo Loop Marquee */}
        <AnimatedContent
          direction="vertical"
          distance={50}
          duration={0.5}
          ease="easeOut"
        >
          <div className="mb-20">
            <LogoLoop logos={techLogos.map(logo => ({ node: <span className="text-sm font-medium text-gray-400">{logo}</span> }))} />
          </div>
        </AnimatedContent>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
