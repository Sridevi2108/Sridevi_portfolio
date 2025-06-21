import './App.css';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Navbar from './sections/Navbar/Navbar';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Coding from './sections/coding/CodingPlatforms';
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Education/>
      <Coding />
      <Contact />
      <Footer />
    </>
  );
}

export default App;