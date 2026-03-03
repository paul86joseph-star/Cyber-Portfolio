import { motion } from "framer-motion";

export default function Experience() {
  const experience = [
    {
      role: "Junior Penetration Tester",
      company: "Cyfosis Cyber Solutions",
      duration: "Apr 2022 – May 2023",
      description:
        "Executed web application and network penetration testing engagements, identifying security vulnerabilities and supporting remediation efforts.",
      highlights: [
        "Conducted OWASP Top 10 testing including XSS, SQL Injection, IDOR, and authentication bypass",
        "Performed vulnerability scanning and manual exploitation using Burp Suite, Nmap, Metasploit, and OWASP ZAP",
        "Executed network reconnaissance, port scanning, and service enumeration",
        "Prepared detailed technical reports with proof-of-concept (PoC) and remediation guidance",
      ],
    },
    {
      role: "Infra Managed Service Associate",
      company: "Accenture",
      duration: "Jun 2023 – Nov 2025",
      description:
        "Supported enterprise infrastructure and middleware environments, focusing on system stability, monitoring, and security best practices.",
      highlights: [
        "Administered and monitored IBM MQ and Apache Kafka environments",
        "Handled L1/L2 incident management and production support",
        "Performed system health checks, log analysis, and troubleshooting",
        "Collaborated on root cause analysis (RCA) and remediation processes",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 px-6 bg-[#020617]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-purple-400 mb-12"
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-10"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                p-6 rounded-lg
                bg-white/5 border border-white/10
                transition-colors
                hover:border-purple-400/40
              "
            >
              {/* Role & Duration */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <span className="mt-2 md:mt-0 text-sm text-gray-400">
                  {item.duration}
                </span>
              </div>

              {/* Company */}
              <p className="mt-1 text-purple-300 font-medium">
                {item.company}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}