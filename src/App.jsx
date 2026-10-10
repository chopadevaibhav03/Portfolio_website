import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { CurrentlyExploring } from "./components/Exploring/CurrentlyExploring";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Services";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Workflow } from "./components/Workflow/Workflow";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CurrentlyExploring />
        <Projects />
        <Services />
        <Experience />
        <About />
        <Workflow />
        <Contact />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
