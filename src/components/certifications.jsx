export default function Certifications() {
  const certifications = [
    { title: "Google Cybersecurity Professional Certificate", issuer: "Coursera" },
    { title: "eJPT", issuer: "INE Security" },
    { title: "Certified in Cybersecurity", issuer: "ISC2" },
    { title: "ISO/IEC 27001:2022 Lead Auditor", issuer: "Mastermind" },
    { title: "Deloitte Cyber Job Simulation", issuer: "Forage" },
  ];

  return (
    <section
      id="certifications"
      className="scroll-mt-24 py-20 px-6 bg-[#0b1220]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-white-400 mb-10">
          Certifications
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                p-5 rounded-lg
                bg-[#020617]/90
                border border-white/10
                transition-colors duration-200
                hover:border-purple-500
              "
            >
              <h3 className="text-lg font-medium text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
