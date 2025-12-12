import { Lock, Dumbbell, Heart } from "lucide-react";

export function ThreePillars() {
  const pillars = [
    {
      icon: Lock,
      title: "Safe",
      description: "A protected space where you can push limits without judgment. Female coaches. Trauma-informed training. Zero tolerance policy.",
      color: "#77F2C5",
      bgColor: "#77F2C5",
      accentPosition: "left"
    },
    {
      icon: Dumbbell,
      title: "Strong",
      description: "Real combat training. No watered-down versions. You'll build physical and mental strength that translates beyond the mat.",
      color: "#FF7A00",
      bgColor: "#FF7A00",
      accentPosition: "top"
    },
    {
      icon: Heart,
      title: "Sisterhood",
      description: "Train alongside women who get it. Build bonds through sweat, growth, and shared victories. This is your tribe.",
      color: "#FF2E9A",
      bgColor: "#FF2E9A",
      accentPosition: "right"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1C1C1C] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF2E9A]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#77F2C5]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <div className="inline-block px-6 py-2 mb-6 border-2 border-[#FF2E9A] bg-[#FF2E9A]/10">
            <span className="text-[#FF2E9A] uppercase tracking-[0.3em]">Our Foundation</span>
          </div>
          <h2 className="text-white mb-6">
            Safe. Strong. Sisterhood.
          </h2>
          <p className="text-xl md:text-2xl text-[#E8E8E8]/80 max-w-2xl mx-auto">
            The three pillars of HerCombat Lab
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#1C1C1C] border-2 border-[#E8E8E8]/20 hover:border-transparent transition-all duration-500 overflow-hidden"
              >
                {/* Colored accent bar - different position for each */}
                <div 
                  className={`absolute ${
                    pillar.accentPosition === 'left' ? 'left-0 top-0 bottom-0 w-1 group-hover:w-2' :
                    pillar.accentPosition === 'top' ? 'top-0 left-0 right-0 h-1 group-hover:h-2' :
                    'right-0 top-0 bottom-0 w-1 group-hover:w-2'
                  } transition-all duration-500`}
                  style={{ backgroundColor: pillar.bgColor }}
                ></div>

                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: pillar.bgColor }}
                ></div>

                {/* Content Container */}
                <div className="relative p-8 md:p-10">
                  {/* Icon with background circle */}
                  <div className="mb-8">
                    <div 
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 group-hover:scale-110 transition-transform duration-500"
                      style={{ borderColor: pillar.color }}
                    >
                      <Icon 
                        className="w-10 h-10" 
                        style={{ color: pillar.color, strokeWidth: 2 }} 
                      />
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className="absolute top-6 right-6 opacity-20">
                    <span 
                      className="text-6xl leading-none"
                      style={{ color: pillar.color }}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="mb-5 uppercase tracking-wider text-3xl"
                    style={{ color: pillar.color }}
                  >
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#E8E8E8]/80 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto relative">
            {/* Decorative quotes */}
            <div className="absolute -top-6 -left-4 text-8xl text-[#FF2E9A]/20 leading-none">"</div>
            <div className="relative bg-gradient-to-r from-[#1C1C1C] via-[#FF2E9A]/10 to-[#1C1C1C] border-l-4 border-r-4 border-[#FF2E9A] p-10 md:p-12">
              <p className="text-2xl md:text-3xl text-white">
                We're not just teaching you to fight.{' '}
                <span className="text-[#FF2E9A]">We're teaching you to stand in your power.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}