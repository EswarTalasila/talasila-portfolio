import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section id="home" aria-label="Introduction">
          <Home />
        </section>
        <section id="about" aria-label="About">
          <About />
        </section>
        <section id="projects" aria-label="Selected work">
          <Projects />
        </section>
        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
