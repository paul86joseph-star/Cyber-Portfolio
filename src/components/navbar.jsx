import { motion } from "framer-motion";

const sections = ["home","about", "experience","skills", "certifications", "contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full z-50"
    >
      <div className="bg-[#0b1220]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">

          {/* Centered Navigation */}
          <div className="flex space-x-10 text-sm text-gray-400">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-medium transition-colors hover:text-purple-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
