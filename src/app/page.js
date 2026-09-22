import Header from "../../components/layout/Header";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Projects from "../../components/sections/Projects";
import Experience from "../../components/sections/Experience"; 
import Education from "../../components/sections/Education"; 
import Certifications from "../../components/sections/Certifications";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />  
    </>
  );
}
