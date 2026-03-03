const skills = [
    "Web Application Penetration Testing",
    "Network Security",
    "Network Security",
    "OWASP Top 10",
    "Burp Suite",
    "Nmap & Metasploit",
    "Linux Security",
    "Python for Security",
    "Nessus"
  ];
  
  import { Motion } from "./motion";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 px-6 bg-[#0b1220] ">
      <div className="max-w-5xl mx-auto">
        <Motion>
          <h2 className="text-3xl font-semibold text-center mb-12">
            Skills
          </h2>
        </Motion>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <Motion key={skill} delay={i * 0.04}>
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-center text-sm hover:border-purple-500 transition">
                {skill}
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}

  