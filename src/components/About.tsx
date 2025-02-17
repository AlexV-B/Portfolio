import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About: React.FC = () => {
  const firstBlockRef = useRef<HTMLDivElement | null>(null);
  const secondBlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (firstBlockRef.current) observer.observe(firstBlockRef.current);
    if (secondBlockRef.current) observer.observe(secondBlockRef.current);

    return () => {
      if (firstBlockRef.current) observer.unobserve(firstBlockRef.current);
      if (secondBlockRef.current) observer.unobserve(secondBlockRef.current);
    };
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      setIsFixed(rect.top <= 0 && rect.bottom > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section id="about" className={`about ${isFixed ? "fixed" : ""}`}>
      <div className="about-content">
        <h2>Über mich</h2>
        <div className="blocks">
        <p className="FirstBlock" ref={firstBlockRef}>
          - Servus! Ich heiße Alexander und bin ein Frontend Entwickler aus 📍Passau, Niederbayern. Ich erstelle stilvolle und benutzerfreundliche Weboberflächen. 
          <span className="mySkills">Ich arbeite mit React, TypeScript, Tailwind CSS usw.</span>
        </p>
        <p className="SecondBlock" ref={secondBlockRef}>- Ich bin darauf spezialisiert, maßgeschneiderte Lösungen zu entwickeln, bei jedem Projekt ständig die Grenzen zu erweitern und stets nach Exzellenz zu streben.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
