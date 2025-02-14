import React from "react";
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
  return (
    <motion.section className="projects" id="projects"
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
      <div className="container">
        <h2>Мои проекты</h2>
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
