import { FeaturesSection } from "@/components/home/FeaturesSection";
import FreeSection from "@/components/home/FreeSection";
import { GlobeHero } from "@/components/home/GlobeHero";
import { HeroParallaxDemo } from "@/components/home/ParallaxSection";
import ProductivitySection from "@/components/home/ProductivitySection";
import { TestimonialsSection } from "@/components/home/Testimonials";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import WhyWe from "@/components/home/WhyWe";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GlobeHero />
      <WhatWeDo/>
      <HeroParallaxDemo />
      {/* <FeaturesSection /> */}
      <TestimonialsSection/>
      <ProductivitySection />
      <WhyWe/>
      <FreeSection/>
    </main>
  );
}
