'use client';

import AnimatedContent from '@/components/AnimatedContent';
import SpotlightCard from '@/components/SpotlightCard';

type SkillCategory = {
  title: string;
  skills: string[];
};

type SkillCardProps = {
  category: SkillCategory;
  idx: number;
};

const SkillCard = ({ category, idx }: SkillCardProps) => {
  return (
    <AnimatedContent
      direction="vertical"
      distance={50}
      duration={0.5}
      ease="easeOut"
      delay={0.5 + 0.3 * idx}
    >
        
      <SpotlightCard className="bg-linear-to-br from-[#111111] to-[#0a0a0a] border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
        <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
        <ul className="space-y-2">
          {category.skills.map((skill, i) => (
            <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </AnimatedContent>
  );
};

export default SkillCard;
