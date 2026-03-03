import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id='home' className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        {/* Intro */}
        <p className="text-sm text-purple-400 tracking-widest mb-4">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Paul Joseph
        </h1>

        {/* Roles */}
        <h2 className="mt-4 text-lg sm:text-xl text-purple-200 font-medium">
          Junior Penetration Tester
        {/*}  <span className="text-gray-500"> | </span>
          Penetration Tester
          <span className="text-gray-500"> | </span>
        DevOps Engineer */}
        </h2>

        {/* Description */}
        <p className="mt-6 mx-auto max-w-3xl text-gray-400 leading-relaxed">
          I have experience working as a Junior Penetration Tester, with a strong focus on
          Web,Mobile and API Penetesting.
          My work involves Scripting, Monitoring, Testing, Analyzing and Securing
          environments using modern tools and frameworks.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-md
                       bg-purple-500 text-white font-medium
                       hover:bg-purple-400 transition"
          >
            View Projects
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md
                       border border-purple-400 text-purple-400 font-medium
                       hover:bg-purple-400/10 transition"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
