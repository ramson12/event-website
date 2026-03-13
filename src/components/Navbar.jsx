import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const links = [
  { name: "Events & Festivals", id: "events", mega: true },
  { name: "Services", id: "services" },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "contact" }
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigate = useNavigate();

  /* NAVBAR BACKGROUND ON SCROLL */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ACTIVE SECTION DETECTION */
  useEffect(() => {

    const sections = ["events", "services", "about", "contact"];

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {

        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section;
        }

      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* NAVIGATION FUNCTION */
  const goToSection = (section) => {
    navigate(`/#${section}`);
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur shadow-lg" : "bg-transparent"}`}
      >

        <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center text-white">

          {/* LOGO */}
          <div
            className="absolute left-4 text-2xl font-bold tracking-widest cursor-pointer"
            onClick={() => navigate("/")}
          >
            DreamTeam
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex mx-auto gap-10 text-sm uppercase tracking-wider">

            {links.map((link) => (

              <motion.li
                key={link.name}
                whileHover="hover"
                className="relative cursor-pointer"
                onClick={() => goToSection(link.id)}
              >

                <span
                  className={`transition-colors ${
                    activeSection === link.id
                      ? "text-pink-500"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </span>

                <motion.span
                  variants={{
                    hover: { width: "100%" },
                    initial: { width: 0 }
                  }}
                  initial="initial"
                  animate={
                    activeSection === link.id
                      ? { width: "100%" }
                      : { width: 0 }
                  }
                  className="absolute left-0 -bottom-1 h-[2px] bg-pink-500"
                />

              </motion.li>

            ))}

          </ul>

          {/* MOBILE MENU BUTTON */}
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
                visible: { transition: { staggerChildren: 0.12 } }
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
                  className="cursor-pointer"
                  onClick={() => goToSection(link.id)}
                >

                  <span
                    className={`transition-colors ${
                      activeSection === link.id
                        ? "text-pink-500"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                </motion.li>

              ))}

            </motion.ul>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}