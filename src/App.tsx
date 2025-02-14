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
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <BurgerMenu />
      <Hero />
      <FlyingDrops />
      <Skills />
      <About />
      <Projects />
      <Contact /> 
    </BrowserRouter>
  )
}

export default App
