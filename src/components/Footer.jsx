export default function Footer() {
    return (
      <footer className="bg-black border-t border-white/10 px-4 py-16">
        <div className="max-w-7xl mx-auto text-gray-400">
  
          {/* MAIN FOOTER */}
          <div className="grid gap-12 md:grid-cols-3">
  
            {/* BRAND */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                DreamTeam11
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
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#events" className="hover:text-white transition">
                    Events & Festivals
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* CONTACT INFO */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Phone: +44 7886 384599</li>
                <li>Email: Dreamteamevents@protonmail.com</li>
                <li>
                30 Horsham Road, 
                  <br />
                  Feltham, United Kingdom TW14 8LW
                </li>
              </ul>
            </div>
  
          </div>
  
          {/* BOTTOM BAR */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm">
            © DreamTeam11. All rights reserved.
          </div>
  
        </div>
      </footer>
    );
  }
  