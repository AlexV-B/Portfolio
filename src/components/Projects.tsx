import React, { useEffect, useRef, useState } from "react";
import "./Projects.css"; // Подключаем стили
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Мой первый проект",
    description: "Простой сайт с адаптивным дизайном.",
    link: "https://alexv-b.github.io/my-first-ts/",
  },
  {
    id: 2,
    title: "React-приложение",
    description: "SPA-приложение с использованием React и TypeScript.",
    link: "https://yourusername.github.io/project2/",
  },
  {
    id: 3,
    title: "API-приложение",
    description: "Работа с внешним API и отображение данных.",
    link: "https://yourusername.github.io/project3/",
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isCovering, setIsCovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      setIsCovering(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  return (
    <motion.section id="projects" ref={sectionRef} className={`projects ${isCovering ? "covering" : ""}`}
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
      <div className="container">
        <h2>Meine Projekte</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Смотреть проект
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
