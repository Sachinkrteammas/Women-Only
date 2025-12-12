export function WhyWeExist() {
  return (
    <section className="relative py-20 md:py-28 bg-[#1C1C1C] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1591978638709-bd73f437243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtbWElMjBmaWdodGVyfGVufDF8fHx8MTc2NTAwMTk2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Fighter training"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-4 border-2 border-[#FF2E9A]">
            <span className="text-[#FF2E9A] uppercase tracking-widest">Mission</span>
          </div>
          <h2 className="text-white mb-8">Why HerCombat Lab Exists</h2>
        </div>

        {/* Content */}
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#E8E8E8]">
            Because every woman deserves to know what it feels like to be <span className="text-[#FF2E9A]">powerful</span>, 
            not just strong.
          </p>

          <p className="text-lg text-[#E8E8E8]/80">
            Combat sports have been gatekept, masculinized, and made inaccessible for too long. 
            We're changing that. HerCombat Lab is a space where you don't have to prove yourself — 
            you just have to show up.
          </p>

          <div className="pt-8">
            <div className="inline-block p-8 border-l-4 border-[#FF7A00] bg-[#1C1C1C]/80 backdrop-blur-sm text-left">
              <p className="text-xl text-white italic">
                "This isn't about making women fight like men. It's about women discovering their own power, 
                on their own terms, in their own space."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-0.5 bg-[#FF2E9A]"></div>
                <span className="text-[#E8E8E8] uppercase tracking-wide">Founder's Vision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-[#FF2E9A] mb-2">100%</div>
            <div className="text-sm md:text-base text-[#E8E8E8]/70 uppercase tracking-wide">Women Only</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-4xl md:text-5xl text-[#FF7A00] mb-2">3</div>
            <div className="text-sm md:text-base text-[#E8E8E8]/70 uppercase tracking-wide">Combat Styles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-[#77F2C5] mb-2">18-40</div>
            <div className="text-sm md:text-base text-[#E8E8E8]/70 uppercase tracking-wide">Age Range</div>
          </div>
        </div>
      </div>
    </section>
  );
}
