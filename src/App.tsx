import { useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { WhatYouLearn } from "./components/WhatYouLearn";
import { WhyWeExist } from "./components/WhyWeExist";
import { ThreePillars } from "./components/ThreePillars";
import { WorkshopInfo } from "./components/WorkshopInfo";
import { CommunityGallery } from "./components/CommunityGallery";
import { FinalCTA } from "./components/FinalCTA";
import { SimpleFooter } from "./components/SimpleFooter";

export default function App() {
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      {/* Hero with Primary CTA */}
      <HeroSection onCTAClick={scrollToCTA} />

      {/* What You'll Learn */}
      <WhatYouLearn />

      {/* Why We Exist */}
      <WhyWeExist />

      {/* Three Pillars */}
      <ThreePillars />

      {/* Workshop Details with CTA */}
      <WorkshopInfo onCTAClick={scrollToCTA} />

      {/* Community Gallery */}
      <CommunityGallery />

      {/* Final CTA with Form */}
      <div ref={ctaRef}>
        <FinalCTA />
      </div>

      {/* Footer */}
      <SimpleFooter />
    </div>
  );
}
