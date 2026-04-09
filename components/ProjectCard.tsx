'use client';

import AnimatedContent from '@/components/AnimatedContent';
import SpotlightCard from '@/components/SpotlightCard';
import BorderGlow from './BorderGlow';

type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
};

type ProjectCardProps = {
    project: Project;
    idx: number;
};

const ProjectCard = ({ project, idx }: ProjectCardProps) => {
    return (
        <AnimatedContent
            direction="vertical"
            distance={50}
            duration={0.5}
            ease="easeOut"
            delay={0.5 + 0.3 * idx}
        >
            <SpotlightCard 
                className='p-0! rounded-lg! overflow-hidden! border-0! shadow-lg!'>
                <a href={project.link} className="block cursor-pointer" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all">
                        <div className="w-full h-48 bg-gray-700 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

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
            </SpotlightCard>
        </AnimatedContent >
    );
};

export default ProjectCard;
