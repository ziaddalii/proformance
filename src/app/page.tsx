import { FeaturesSection } from "@/components/home/FeaturesSection";
import { GlobeHero } from "@/components/home/GlobeHero";
import { HeroParallaxDemo } from "@/components/home/ParallaxSection";
import ProductivitySection from "@/components/home/ProductivitySection";
import { TestimonialsSection } from "@/components/home/Testimonials";
import WhyWe from "@/components/home/WhyWe";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GlobeHero />
      <HeroParallaxDemo />
      {/* <FeaturesSection /> */}
      <TestimonialsSection/>
      <ProductivitySection />
      <WhyWe/>
    </main>
  );
}
