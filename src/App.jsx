import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Experience from "./components/experience";

export default function App() {

  return (
    <div className="bg-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
