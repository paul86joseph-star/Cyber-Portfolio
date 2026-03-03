const projects = [
    {
      title: "Web Application Penetration Test",
      description:
        "Performed black-box and authenticated testing, identifying XSS, IDOR, and access control issues.",
      tools: "Burp Suite, OWASP ZAP",
    },
    {
      title: "Network Vulnerability Assessment",
      description:
        "Conducted internal network scanning and exploitation to assess security posture.",
      tools: "Nmap, Metasploit",
    },
  ];
  
  import { Motion } from "./motion";

  export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-24 py-20 px-6 bg-[#020617]">
        <div className="max-w-5xl mx-auto">
          <Motion>
          <h2 className="text-3xl font-semibold text-white mb-10">
            <span className="text-white-400">Projects</span>
          </h2>

          </Motion>
  
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Motion key={project.title} delay={i * 0.08}>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
                  <h3 className="text-xl font-medium">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm text-purple-500">
                    {project.tools}
                  </p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>
    );
  }
  