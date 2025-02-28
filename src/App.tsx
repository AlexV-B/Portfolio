import './App.css'
import "./styles/global.css"; 
// import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import FlyingDrops from './components/FlyingDrops';
import BurgerMenu from './components/BurgerMenu';
import { HashRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <BurgerMenu />
      <Hero />
      <Skills />
      <FlyingDrops />
      <About />
      <Projects />
      <Contact />
    </Router>
  )
}

export default App
