import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About: React.FC = () => {
  const firstBlockRef = useRef<HTMLDivElement | null>(null);
  const secondBlockRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false); // ✅ Новое состояние
  const [isShaking, setIsShaking] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (hasClicked) return;
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Тряска длится 500 мс
    }, 2500); // Каждые 2 секунды + 500 мс тряски

    return () => clearInterval(interval);
  }, [hasClicked]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
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



    useEffect(() => {
      const handleScroll = () => {
        if (!secondBlockRef.current) return;
        const rect = secondBlockRef.current.getBoundingClientRect();
  
        const isOutOfView = rect.top > window.innerHeight || rect.bottom < 0;
  
        if (isOutOfView) {
          setIsVisible(false); // ✅ Скрываем блок
          setHasClicked(false); // ✅ Возвращаем тряску кнопки
        }
      };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`about ${isFixed ? "fixed" : ""}`}
      ref={sectionRef}
    >
      <div className="about-content">
        <h2>Über mich</h2>
        <div className="blocks">
          <p className="FirstBlock" ref={firstBlockRef}>
            - Servus! <span className="mySkills">Ich heiße Alexander</span> und bin ein Frontend Entwickler aus
            <br></br>📍Passau, Niederbayern.  <br></br>Ich erstelle stilvolle und
            benutzerfreundliche Weboberflächen.  <br></br>
            <span className="mySkills">
              Ich arbeite mit React, TypeScript, Tailwind CSS usw.
            </span>
          </p>
          
          {/* Второй блок, который падает сверху */}
          <p
            className={`SecondBlock ${isVisible ? "falling" : ""}`}
            ref={secondBlockRef}
          >
            - Ich bin darauf spezialisiert, maßgeschneiderte Lösungen zu
            entwickeln, bei jedem Projekt ständig die Grenzen zu erweitern und
            stets nach <span className="mySkills">Exzellenz</span> zu streben.
          </p>

          {/* Кнопка для появления второго блока */}
          <button
            ref={buttonRef}
            className={`reveal-button ${isShaking ? "shake" : ""}`}
            onClick={() => {
              setIsVisible(true); // Показываем блок
              setHasClicked(true); // Останавливаем тряску
            }}
          >
            Drück mich
          </button>

        </div>
      </div>
    </section>
  );
};

export default About;
