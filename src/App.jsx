import Starfield from "./components/Starfield";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import SideEmail from "./components/SideEmail";
import Focus from "./components/Focus";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Cursor />
      <Navbar />
      <SideEmail />
      <div className="relative z-10">
        <main>
          {/* Each section fades out as it leaves the screen */}
          <Focus>
            <Hero />
          </Focus>
          <Focus>
            <About />
          </Focus>
          <Focus>
            <Stack />
          </Focus>
          <Focus>
            <Experience />
          </Focus>
          <Focus>
            <Projects />
          </Focus>
          <Focus last>
            <Contact />
          </Focus>
        </main>
        <Footer />
      </div>
    </div>
  );
}
