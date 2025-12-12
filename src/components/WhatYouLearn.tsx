import { Target, Zap, Shield, Users } from "lucide-react";

export function WhatYouLearn() {
  const skills = [
    {
      icon: Target,
      title: "Striking Fundamentals",
      description: "Master punches, kicks, and combinations with proper form and power generation",
      color: "#FF2E9A"
    },
    {
      icon: Users,
      title: "Ground Control",
      description: "Brazilian Jiu-Jitsu fundamentals including escapes, positions, and submissions",
      color: "#FF7A00"
    },
    {
      icon: Shield,
      title: "Real Self-Defense",
      description: "Learn practical techniques to defend yourself in real-world situations with confidence",
      color: "#77F2C5"
    },
    {
      icon: Zap,
      title: "Combat Conditioning",
      description: "Build explosive strength, stamina, and fight-ready endurance through intensive drills",
      color: "#FF2E9A"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 mb-4 border-2 border-[#FF2E9A]">
            <span className="text-[#FF2E9A] uppercase tracking-widest">Training</span>
          </div>
          <h2 className="text-[#1C1C1C]">What You'll Learn</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative p-8 border-2 border-[#1C1C1C]/10 hover:border-[#FF2E9A] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon 
                    className="w-12 h-12" 
                    style={{ color: skill.color, strokeWidth: 2.5 }} 
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-[#1C1C1C]">{skill.title}</h3>
                <p className="text-[#1C1C1C]/70 leading-relaxed">
                  {skill.description}
                </p>

                {/* Accent bar on hover */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: skill.color }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-[#1C1C1C] text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="mb-2">All Experience Levels Welcome</h4>
              <p className="text-[#E8E8E8]/80">
                No prior martial arts experience required. We start from the ground up.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#77F2C5]"></div>
              <span className="text-[#77F2C5] uppercase tracking-wide">Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}