export function CommunityGallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1590556409454-198422ea5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJveGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc2NTE4MDc2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Women boxing training",
      title: "Strike with Purpose"
    },
    {
      url: "https://images.unsplash.com/photo-1522956957021-9f2437e01594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBraWNrYm94aW5nfGVufDF8fHx8MTc2NTE4MDc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Female kickboxing",
      title: "Build Power"
    },
    {
      url: "https://images.unsplash.com/flagged/photo-1579473454383-438c60283b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1hcnRpYWwlMjBhcnRzfGVufDF8fHx8MTc2NTE4MDc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Women martial arts training",
      title: "Master Control"
    },
    {
      url: "https://images.unsplash.com/photo-1756314355692-56276a5b7bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBmaXRuZXNzJTIwZ3JvdXB8ZW58MXx8fHwxNzY1MTgwNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Female fitness group",
      title: "Find Your Tribe"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 mb-4 border-2 border-[#77F2C5]">
            <span className="text-[#77F2C5] uppercase tracking-widest">Community</span>
          </div>
          <h2 className="text-white mb-6">Train Together. Rise Together.</h2>
          <p className="text-xl text-[#E8E8E8]/80 max-w-2xl mx-auto">
            Join a community of fierce, fearless women who refuse to be limited by expectations
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/20 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white uppercase tracking-wide">{image.title}</h4>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FF2E9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-3xl border-l-4 border-[#FF2E9A] bg-[#1C1C1C]/60 p-8 text-left">
            <p className="text-xl text-white">
              "I never knew I could be this strong until I found women who showed me how."
            </p>
            <div className="mt-4 text-[#E8E8E8]/70">
              — Participant, Beta Workshop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}