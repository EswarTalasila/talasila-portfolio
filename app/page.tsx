import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
