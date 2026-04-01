import SplitText from "@/components/SplitText";
import Beams from "@/components/Beams";
import TextType from '@/components/TextType';

export default function Hero() {
    return (
        <section id="main" className="relative h-lvh w-full flex items-center justify-center flex-col gap-6">
            <div className="h-[90dvh] sm:h-dvh w-[95dvw] top-24 self-center absolute rounded-4xl overflow-hidden">
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
                text="Hi, I'm Arslane. I build things for the web."
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
            {/* <SplitText
                text=""
                className="text-md px-8 sm:px-0 sm:text-lg font-medium text-center text-white opacity-75 font-body"
                delay={25}
                duration={0.1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            /> */}
            <TextType
                className="text-md px-8 sm:px-0 sm:text-lg font-medium text-center text-white opacity-75 font-body"
                text={["Currently, I'm focused on building accessible, inclusive products and digital experiences.", ""]}
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
        </section>
    );
}
