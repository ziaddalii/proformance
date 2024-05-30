import { FeaturesSection } from "@/components/home/FeaturesSection";
import { GlobeHero } from "@/components/home/GlobeHero";
import { HeroParallaxDemo } from "@/components/home/ParallaxSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GlobeHero />
      <HeroParallaxDemo/>
      <FeaturesSection/>
    </main>
  );
}
