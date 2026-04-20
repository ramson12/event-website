export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 px-4 py-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px]" />
      </div>

      <div className="relative max-w-7xl mx-auto text-gray-400">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Dream</span>
              <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
                Team11
              </span>
            </h3>

            <p className="text-sm leading-relaxed">
              A community-driven events brand creating unforgettable
              experiences through connection, culture, and celebration.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Events & Festivals", href: "#events" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      hover:text-[#ff9a44]
                      transition duration-300
                      hover:pl-1
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#ff9a44] transition">
                +44 7886 384599
              </li>

              <li className="hover:text-[#ff9a44] transition">
                Dreamteamevents@protonmail.com
              </li>

              <li>
                30 Horsham Road, <br />
                Feltham, United Kingdom TW14 8LW
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DreamTeam11. All rights reserved.
        </div>

      </div>
    </footer>
  );
}