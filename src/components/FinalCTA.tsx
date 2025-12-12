import { useState } from "react";
import { ArrowRight, Mail, Phone, User, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbzFqcBJYhEaL8WCLnd3ZwqAuBEDm12bdEOrSf2Uahafuf6cE4V5rmtsudQ1PG_n56YE/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    try {
      setIsSubmitting(true);

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // JSON like curl
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok)
        throw new Error(`Request failed with status ${response.status}`);

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "" });
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Google Sheets submission error:", error);
      setSubmitError("Unable to submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[#E8E8E8]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block px-4 py-1 mb-6 border-2 border-[#FF2E9A]">
              <span className="text-[#FF2E9A] uppercase tracking-widest">
                Join Waitlist
              </span>
            </div>

            <h2 className="text-[#1C1C1C] mb-6">
              Your Fight
              <br />
              Starts Here.
            </h2>

            <p className="text-xl text-[#1C1C1C]/70 mb-8">
              Be among the first to know when registration opens. Limited
              spots. Ages 18–40 only.
            </p>

            <div className="space-y-4">
              {[
                "100% women-only environment",
                "Professional female coaches only",
                "Trauma-informed training approach",
                "Safe, judgment-free space",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-[#77F2C5] flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#77F2C5]"></div>
                  </div>
                  <span className="text-[#1C1C1C]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border-4 border-[#1C1C1C] p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 mb-3 text-[#1C1C1C] uppercase tracking-wide"
                  >
                    <User className="w-4 h-4" />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] placeholder-[#1C1C1C]/30 focus:outline-none focus:border-[#FF2E9A] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 mb-3 text-[#1C1C1C] uppercase tracking-wide"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] placeholder-[#1C1C1C]/30 focus:outline-none focus:border-[#FF2E9A] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 mb-3 text-[#1C1C1C] uppercase tracking-wide"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Phone</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] placeholder-[#1C1C1C]/30 focus:outline-none focus:border-[#FF2E9A] transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgba(255,122,0,0.4)]"
                >
                  <span>{isSubmitting ? "Submitting..." : "Join the Waitlist"}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {submitError && (
                  <p className="text-sm text-red-600 text-center" role="alert">
                    {submitError}
                  </p>
                )}

                <p className="text-sm text-[#1C1C1C]/50 text-center">
                  By submitting, you confirm you're 18–40 years old and agree to
                  receive updates.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 border-4 border-[#77F2C5] mb-6">
                  <CheckCircle2
                    className="w-10 h-10 text-[#77F2C5]"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-[#1C1C1C] mb-4">You're In!</h3>
                <p className="text-[#1C1C1C]/70">
                  Welcome to HerCombat Lab. We'll be in touch soon with next
                  steps.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
