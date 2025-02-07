import './App.css'
import "./styles/global.css"; 
// import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";


function App() {
  return (

    <div>
      {/* <Header /> */}
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact /> 
    </div>
  )
}

export default App
