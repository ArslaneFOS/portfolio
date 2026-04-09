import SplitText from "@/components/SplitText";
import Beams from "@/components/Beams";
import TextType from '@/components/TextType';
import { getTranslations, type Locale } from '@/lib/i18n';

type HeroProps = {
    lang: Locale;
};

export default function Hero({ lang }: HeroProps) {
    const translations = getTranslations(lang);

    return (
        <section id="main" className="relative h-lvh w-full flex items-center justify-center flex-col gap-6">
            <div className="h-[90dvh] sm:h-dvh w-[95dvw] top-24 self-center absolute rounded-4xl overflow-hidden" >
                <Beams
                    beamWidth={3}
                    beamHeight={25}
                    beamNumber={20}
                    lightColor="white"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={30}
                />

            </div>
            <SplitText
                text={translations.hero.headline}
                className="text-3xl px-8 sm:px-0 sm:text-5xl font-extrabold text-center text-white font-heading"
                delay={50}
                duration={0.1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            <TextType
                className="text-md px-8 sm:px-0 sm:text-lg font-medium text-center text-white opacity-75 font-body"
                text={translations.hero.taglines}
                // typingSpeed={30}
                pauseDuration={2000}
                showCursor
                cursorCharacter="█"
                // texts={["Welcome to React Bits! Good to see you! ", "Build some amazing experiences!"]}
                deletingSpeed={20}
                variableSpeed={{ min: 20, max: 75 }}
                // variableSpeedMin={60}
                // variableSpeedMax={120}
                cursorBlinkDuration={0.5}
            />
            <div className="mt-8 z-50">
                <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    {translations.hero.contactCta}
                </a>
            </div>
        </section>
    );
}
