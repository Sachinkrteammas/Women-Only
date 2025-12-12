import { ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react";

interface WorkshopInfoProps {
  onCTAClick: () => void;
}

export function WorkshopInfo({ onCTAClick }: WorkshopInfoProps) {
  const details = [
    {
      icon: Calendar,
      label: "Duration",
      value: "2 Days Total",
      subtitle: "Training + Challenge Day (Day 2)"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi NCR",
      subtitle: "Noida & East Delhi"
    },
    {
      icon: Clock,
      label: "Time Commitment",
      value: "6 Hours + 2 Hours",
      subtitle: "Training + Challenge Fight"
    },
    {
      icon: Users,
      label: "Batch Size",
      value: "30 Women Max",
      subtitle: "Limited spots available"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 mb-4 border-2 border-[#FF7A00]">
            <span className="text-[#FF7A00] uppercase tracking-widest">Workshop</span>
          </div>
          <h2 className="text-[#1C1C1C] mb-6">The Experience</h2>
          <p className="text-xl text-[#1C1C1C]/70 max-w-2xl mx-auto">
            An intensive 2-day workshop designed to push your limits and unlock your potential
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border-2 border-[#1C1C1C]">
                  <Icon className="w-8 h-8 text-[#FF2E9A]" strokeWidth={2} />
                </div>
                <div className="text-sm text-[#1C1C1C]/50 uppercase tracking-wide mb-2">
                  {detail.label}
                </div>
                <div className="text-xl text-[#1C1C1C] mb-1">
                  {detail.value}
                </div>
                <div className="text-sm text-[#1C1C1C]/60">
                  {detail.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included */}
        <div className="mb-16 p-10 border-4 border-[#1C1C1C]">
          <h3 className="text-[#1C1C1C] mb-8 text-center">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "All training equipment provided",
              "Professional female coaches",
              "Post-training nutrition guidance",
              "Safety gear and gloves",
              "Small group personalized attention",
              "Challenge Day certificate",
              "Access to exclusive community",
              "Training manual and resources"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 border-2 border-[#FF2E9A] flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-[#FF2E9A]"></div>
                </div>
                <span className="text-[#1C1C1C]/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block p-10 bg-[#1C1C1C]">
            <h3 className="text-white mb-4">Ready to Begin?</h3>
            <p className="text-[#E8E8E8]/80 mb-8 max-w-xl">
              Limited spots available. Join the waitlist to be notified when registration opens.
            </p>
            <button
              onClick={onCTAClick}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(255,122,0,0.4)]"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}