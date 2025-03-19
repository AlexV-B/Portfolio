import React, { useEffect, useState, useRef } from "react";
import FirstAvatar from "../assets/ich.png";
import SecondAvatar from "../assets/ich22.png";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsVisible(rect.bottom > 0); // Исчезает только когда Hero уходит за экран
        setScrollOffset(window.scrollY / 2); // Плавное движение текста
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="home" className={styles.hero}>
      <h1 className={styles.name}>Varnavin-Braun Alexander</h1>
      <div
        className={styles.iam}
        style={{
          transform: `translateX(${Math.min(scrollOffset, 200)}px)`, // Плавный уход влево
          opacity: isVisible ? Math.max(1 - scrollOffset / 200, 0) : 0, // Плавное исчезновение
          transition: "transform 0.3s linear, opacity 0.2s linear",
        }}
      >
        <h2 className={styles.title}>
          Fr
          <span className={styles.FirstPhoto}>
            <img src={FirstAvatar} alt="FirstAvatar" />
          </span>
          ntend Entwicklung
        </h2>
        <h2 className={styles.title}>
          ist was führt uns f
          <span className={styles.SecondPhoto}>
            <img src={SecondAvatar} alt="SecondAvatar" />
          </span>
          rt
        </h2>
      </div>
      <img
        className={styles.avatar}
        style={{
          transform: `translateX(-${Math.min(scrollOffset, 200)}px)`, // Плавное движение вправо
          opacity: isVisible ? Math.max(1 - scrollOffset / 200, 0) : 0,
          transition: "transform 0.3s linear, opacity 0.2s linear",
        }}
      />
    </section>
  );
};

export default Hero;
