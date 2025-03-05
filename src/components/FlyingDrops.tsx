import React, { useEffect, useRef } from "react";
import "./drops.module.css";

// Класс частицы
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;

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

  update(canvas: HTMLCanvasElement, mouse: { x: number | null, y: number | null }) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y + this.size < 0) {
      this.y = canvas.height + this.size;
      this.x = Math.random() * canvas.width;
    }

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        const angle = Math.atan2(dy, dx);
        const forceX = Math.cos(angle) * 2;
        const forceY = Math.sin(angle) * 2;
        this.x -= forceX;
        this.y -= forceY;
      }
    }
  }
}

const FlyingDrops: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Проверяем существование canvas

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Проверяем существование контекста

    // Функция изменения размера canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas(); // Устанавливаем размер при монтировании

    const particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        const speedX = Math.random() * 1 - 1;
        const speedY = Math.random() * 0 - 1;
        particles.push(new Particle(x, y, size, speedX, speedY));
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(canvas, mouse);
        particle.draw(ctx);
      });
      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener("resize", handleResize);

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
