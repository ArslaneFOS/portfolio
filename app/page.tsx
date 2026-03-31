import SplitText from "@/components/SplitText";
import Beams from "@/components/Beams";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className={`flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start`}>
        <div className="h-lvh w-full absolute z-0">
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
        <div className="h-lvh w-full z-50 flex items-center justify-center flex-col gap-6">
          <SplitText
            text="Hi, I'm Arslane. I build things for the web."
            className="text-3xl px-8 sm:px-0 sm:text-5xl font-extrabold text-center text-white font-heading"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="Currently, I'm focused on building accessible, inclusive products and digital experiences at Upstatement."
            className="text-md px-8 sm:px-0 sm:text-lg font-medium text-center text-white opacity-75 font-body"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        {/* <SplitText
          text={<h6 className="">Hi, I'm Arslane. I build things for the web.</h6>}
          className="text-lg font-semibold text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={undefined}
        /> */}
      </main>
    </div>
  );
}
