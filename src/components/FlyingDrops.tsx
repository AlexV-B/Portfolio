import React, { useEffect, useRef } from "react";
import "./drops.module.css";

const FlyingDrops: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Проверяем, что canvas существует

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Проверяем, что контекст существует

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Параметры мыши
    const particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    // Обновляем координаты мыши
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    // Сбрасываем координаты мыши
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    // Класс частицы
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      friction: number = 0.98; // Добавим трение для замедления движения


      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.515)";
        ctx.fill();
      }

      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;

        
        // Перезапускаем каплю, если она уходит за верхнюю границу
        if (this.y + this.size < 0) {
          this.y = canvas.height + this.size;
          this.x = Math.random() * canvas.width;
          this.speedX = Math.random() * 2 - 1;
        }

        // Реакция на мышь
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const force = Math.max(0,1, (distance - 100) / 100);
            const forceX = Math.cos(angle) * force * 5;
            const forceY = Math.sin(angle) * force * 5;

            this.x -= forceX;
            this.y -= forceY;
          }
        }
      }
    }

    // Инициализация частиц
    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas!.width;
        const y = Math.random() * canvas!.height;
        const size = Math.random() * 2 + 1;
        const speedX = Math.random() * 1 - 1;
        const speedY = Math.random() * 0 - 1;

        particles.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    // Анимация частиц
    function animateParticles() {
      if (!ctx || !canvas) return; // Проверяем, что контекст и canvas существуют
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx); // Передаём ctx как аргумент
      });
      requestAnimationFrame(animateParticles);
    }

    // Изменение размера окна
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Запуск
    initParticles();
    animateParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FlyingDrops;
