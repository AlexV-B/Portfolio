import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>Обо мне</h2>
        <p>
          Привет! Я фронтенд-разработчик, создаю стильные и удобные веб-интерфейсы. 
          Работаю с React, TypeScript и Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default About;
