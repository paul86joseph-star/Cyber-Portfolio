import { Motion } from "./motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 px-6 bg-[#0b1220]">
      <div className="max-w-5xl mx-auto">
        <Motion>
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        </Motion>

        <Motion delay={0.1}>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
          Information Security Professional with 1 year of practical penetration testing experience and 2.5 years of
          middleware administration (Kafka, IBM MQ). Skilled in assessing web, mobile, and network applications, conducting source code
          reviews, and delivering actionable remediation insights. Strong understanding of OWASP Top 10, CIS Controls, and NIST
          methodologies. Proficient in tools such as Burp Suite, Nmap, Metasploit, Nessus, and Wireshark. Adept at scripting automation
          using Python and Bash for vulnerability scanning and exploitation tasks.
          </p>
        </Motion>
      </div>
    </section>
  );
}
