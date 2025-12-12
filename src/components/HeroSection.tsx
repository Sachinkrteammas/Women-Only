import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1675154457033-cc7a891a9433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJveGluZyUyMGd5bXxlbnwxfHx8fDE3NjUwMDE5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Women boxing training"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/95 via-[#1C1C1C]/85 to-[#1C1C1C]/70"></div>
        <div className="absolute inset-0 bg-[#1C1C1C]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Brand Label */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-12 bg-[#FF2E9A]"></div>
              <span className="text-[#E8E8E8]/60 uppercase tracking-wider text-sm">India's First</span>
            </div>
            <div className="inline-block">
              <h3 className="text-[#FF2E9A] mb-1">HerCombat Lab</h3>
              <div className="h-1 bg-[#FF2E9A]"></div>
            </div>
            <p className="text-[#E8E8E8]/80 mt-3 uppercase tracking-wide text-sm">
              Women-Only Combat Workshop • Ages 18-40
            </p>
          </div>

          {/* Main Tagline */}
          <h1 className="mb-6 text-white">
            Born to Rise.
            <br />
            <span className="text-[#FF2E9A]">Trained to Fight.</span>
          </h1>

          {/* Subline */}
          <p className="text-xl md:text-2xl text-[#E8E8E8] mb-8">
            Delhi NCR's first women-only combat workshop.
          </p>

          {/* Disciplines */}
          <div className="flex flex-wrap items-center gap-3 mb-12 text-[#E8E8E8]">
            <span>Boxing</span>
            <span className="text-[#FF2E9A]">•</span>
            <span>Kickboxing</span>
            <span className="text-[#FF2E9A]">•</span>
            <span>Brazilian Jiu-Jitsu</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(255,122,0,0.4)]"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#77F2C5] flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#77F2C5] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}