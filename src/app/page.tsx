import { FeaturesSection } from "@/components/home/FeaturesSection";
import { GlobeHero } from "@/components/home/GlobeHero";
import { HeroParallaxDemo } from "@/components/home/ParallaxSection";
import ProductivitySection from "@/components/home/ProductivitySection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GlobeHero />
      <HeroParallaxDemo />
      <FeaturesSection />
      <ProductivitySection />
    </main>
  );
}
