import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/prijects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
