import Hero from "./hero";
import GradualBlur from "@/components/GradualBlur";
import HomeNav from "./home-nav";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#050505]">
      <main className={`flex flex-1 w-full flex-col items-center justify-between bg-[#050505] sm:items-start`}>
        <HomeNav />
        <Hero />
        <div id="about" className="h-dvh" />
        <GradualBlur
          target="page"
          position="bottom"
          height="15rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </main>
    </div>
  );
}
