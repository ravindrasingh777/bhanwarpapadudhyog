
"use client";

import { useEffect, useRef } from "react";

export default function Fireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const rockets = [];
    const particles = [];

    const colors = [
      "#FFD700", // Royal Gold
      "#FFB300", // Saffron Gold
      "#FF6D00", // Deep Orange
      "#FF1744", // Ruby Red
      "#E040FB", // Electric Purple
      "#D500F9", // Royal Violet
      "#00E5FF", // Sky Cyan
      "#00E676", // Emerald Green
      "#FF4081", // Festival Pink
      "#FFFFFF", // Sparkling White
      "#FFF176", // Warm Yellow
      "#FF9100", // Amber
    ];

    // Launch rocket
    const launchRocket = () => {
      const x = Math.random() * window.innerWidth;
      const targetY = 80 + Math.random() * window.innerHeight * 0.45;

      rockets.push({
        x,
        y: window.innerHeight,
        targetY,
        speed: 5 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: [],
      });
    };

    // Explosion
    const explode = (x, y, color) => {
      const count = 90 + Math.floor(Math.random() * 60);

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 1.5 + Math.random() * 5;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          radius: 1.5 + Math.random() * 2,
          color,
          gravity: 0.045,
          decay: 0.008 + Math.random() * 0.008,
        });
      }
    };

    let lastLaunch = 0;
    const duration = 7000;
    const startTime = Date.now();

    const animate = () => {
      if (!running) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Launch fireworks periodically
      if (
        Date.now() - lastLaunch > 450 &&
        Date.now() - startTime < duration
      ) {
        launchRocket();
        lastLaunch = Date.now();
      }

      // Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rocket = rockets[i];

        rocket.y -= rocket.speed;

        rocket.trail.push({ x: rocket.x, y: rocket.y });

        if (rocket.trail.length > 8) {
          rocket.trail.shift();
        }

        ctx.beginPath();
        ctx.strokeStyle = rocket.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.7;
        ctx.moveTo(rocket.x, rocket.y + 15);
        ctx.lineTo(rocket.x, rocket.y);
        ctx.stroke();

        ctx.globalAlpha = 1;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(rocket.x, rocket.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        if (rocket.y <= rocket.targetY) {
          explode(rocket.x, rocket.y, rocket.color);
          rockets.splice(i, 1);
        }
      }

      // Explosion particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (
        Date.now() - startTime > duration &&
        rockets.length === 0 &&
        particles.length === 0
      ) {
        running = false;
        return;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      running = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full"
    />
  );
}
