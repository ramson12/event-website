import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Events", href: "#events" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-black/90 backdrop-blur shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center text-white">
          
          {/* LEFT: LOGO */}
          <div className="absolute left-4 text-2xl font-bold tracking-widest">
          DreamTeam
          </div>

          {/* CENTER: NAV LINKS */}
          <ul className="hidden md:flex mx-auto gap-10 text-sm uppercase tracking-wider">
            {links.map((link) => (
              <motion.li
                key={link.name}
                whileHover="hover"
                className="relative"
              >
                <a href={link.href}>{link.name}</a>

                <motion.span
                  variants={{
                    hover: { width: "100%" },
                    initial: { width: 0 }
                  }}
                  initial="initial"
                  className="absolute left-0 -bottom-1 h-[2px] bg-pink-500"
                />
              </motion.li>
            ))}
          </ul>

          {/* RIGHT: MOBILE MENU */}
          <div className="absolute right-4">
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white"
          >
            <button
              className="absolute top-5 right-6 text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.12 }
                }
              }}
              className="space-y-10 text-xl uppercase tracking-widest"
            >
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
