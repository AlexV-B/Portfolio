import React, { useEffect, useRef, useState } from "react";
import "./Projects.css"; // Подключаем стили
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "MovieRealm",
    description: "Ihre Filmwelt mit anpassungsfähigem Design.",
    link: "https://alexv-b.github.io/movieRealm/",
  },
  {
    id: 2,
    title: "React-App",
    description: "Final project on React, TypeScript.",
    link: "https://platform-qxs32.ondigitalocean.app/",
  },
  {
    id: 3,
    title: "Weather API",
    description: "in der Entwicklung",
    link: "",
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isCovering, setIsCovering] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      setIsCovering(rect.top <= window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = sectionRef.current!.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--x", `${x}px`);
      sectionRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <motion.section id="projects" ref={sectionRef} className={`projects ${isCovering ? "covering" : ""}`}
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      >
<div className="wave-top">
    <svg
      width="100%"
      height="100px"
      viewBox="0 0 1440 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 100V40C1280 60 1100 80 720 80C340 80 160 60 0 40V100H1440Z"
        fill="#000000"
      />
    </svg>
  </div>

  <div className="container">
      <div className="overlay" />
    <h2>Meine Projekte</h2>
    <div className="projects-list">
      {projects.map((project) => (
        <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          Projekt ansehen
        </a>
      ))}
    </div>
  </div>


    </motion.section>
  );
};

export default Projects;
