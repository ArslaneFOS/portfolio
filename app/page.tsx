import type { Metadata } from "next";
import Hero from "./hero";
import GradualBlur from "@/components/GradualBlur";
import HomeNav from "./home-nav";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import DotGrid from "@/components/DotGrid";
import { getLocale, getTranslations } from "@/lib/i18n";

type HomePageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams;
  const locale = getLocale(params.lang);
  const translations = getTranslations(locale);

  return {
    title: translations.metadata.title,
    description: translations.metadata.description,
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = getLocale(params.lang);

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <main className={`flex flex-1 w-full flex-col items-center justify-between bg-[#111111] sm:items-start`}>
        <div style={{ width: '100%', height: '100lvh', position: 'fixed' }}>
          <DotGrid
            dotSize={2}
            gap={15}
            baseColor="#555555"
            activeColor="#2b7fff" 
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
            style={undefined}
          />
        </div>
        <HomeNav lang={lang} />
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />

        <GradualBlur
          target="page"
          position="bottom"
          height="7rem"
          strength={1}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </main>
    </div>
  );
}
