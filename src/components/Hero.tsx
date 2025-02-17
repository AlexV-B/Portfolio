import React, { useEffect, useState, useRef } from "react";
import FirstAvatar from "../assets/ich.png";
import SecondAvatar from "../assets/ich22.png";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrollingDown(currentScroll > lastScrollTop.current);
      lastScrollTop.current = currentScroll;
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
          transform:
            isVisible && !isScrollingDown
              ? "translateX(0)"
              : "translateX(-100%)",
          opacity: isVisible && !isScrollingDown ? 1 : 0,
          transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
        }}
      >
        <h2 className={styles.title}>Fr<span className={styles.FirstPhoto}><img src ={FirstAvatar} alt="FirstAvatar"></img></span>ntend Entwicklung</h2>
        <h2 className={styles.title}>ist was führt uns f<span className={styles.SecondPhoto}><img src ={SecondAvatar} alt="SecondAvatar"></img></span>rt</h2>
      </div>
      <img
        // src={avatar}
        // alt="My photo"
        className={styles.avatar}
        style={{
          transform:
            isVisible && !isScrollingDown
              ? "translateX(0)"
              : "translateX(100%)",
          opacity: isVisible && !isScrollingDown ? 1 : 0,
          transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
        }}
      />
    </section>
  );
};

export default Hero;
