import { Instagram, Mail, MapPin } from "lucide-react";

export function SimpleFooter() {
  return (
    <footer className="bg-[#1C1C1C] border-t-4 border-[#FF2E9A]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl text-[#FF2E9A] uppercase tracking-wider">
                HerCombat Lab
              </span>
            </div>
            <p className="text-[#E8E8E8]/70 mb-6">
              Delhi NCR's first women-only combat workshop. Ages 18–40.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white uppercase tracking-wide mb-4">Workshop</h4>
            <ul className="space-y-3 text-[#E8E8E8]/70">
              <li>Boxing Fundamentals</li>
              <li>Kickboxing Training</li>
              <li>Brazilian Jiu-Jitsu</li>
              <li>Self-Defense Tactics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white uppercase tracking-wide mb-4">Connect</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-[#E8E8E8]/70">
                <MapPin className="w-5 h-5 text-[#77F2C5]" />
                <span>Delhi NCR</span>
              </div>
              <div className="flex items-center gap-3 text-[#E8E8E8]/70">
                <Mail className="w-5 h-5 text-[#77F2C5]" />
                <span>sweatoutsocial@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 border-2 border-white/20 hover:border-[#FF2E9A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 border-2 border-white/20 hover:border-[#FF2E9A] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E8E8E8]/50">
          <p>© 2025 HerCombat Lab. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FF2E9A] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FF2E9A] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
