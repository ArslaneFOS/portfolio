'use client';

import AnimatedContent from '@/components/AnimatedContent';
import LogoLoop from '@/components/LogoLoop';
import SkillCard from '@/components/SkillCard';
import { getTranslations, type Locale } from '@/lib/i18n';
import { techLogos } from '@/lib/tech-logos';

type SkillsProps = {
  lang: Locale;
};

const Skills = ({ lang }: SkillsProps) => {
  const translations = getTranslations(lang);
  const { categories: skillCategories } = translations.skills;

  return (
    <section id='skills' className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{translations.skills.heading}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{translations.skills.subheading}</p>
        </div>

        {/* Logo Loop Marquee */}
        <AnimatedContent
          direction="vertical"
          distance={50}
          duration={0.5}
          ease="easeOut"
        >
          <div className="mb-20">
            <LogoLoop logoHeight={54} logos={techLogos.map(logo => ({ src: logo.src, alt: logo.alt, width: logo.width, height: logo.height }))} />
          </div>
        </AnimatedContent>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
