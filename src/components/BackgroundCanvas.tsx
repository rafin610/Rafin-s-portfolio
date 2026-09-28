import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  pulseSpeed: number;
}

export const BackgroundCanvas: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Theme-aware ambient gradient near cursor
      if (mouseX > 0 && mouseY > 0) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 260);
        if (theme === 'midnight') {
          // Warm ambient for midnight
          gradient.addColorStop(0, 'rgba(232, 213, 183, 0.022)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          // Soft lavender ambient for daylight
          gradient.addColorStop(0, 'rgba(180, 160, 200, 0.015)');
          gradient.addColorStop(1, 'rgba(248, 246, 242, 0)');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Subtle connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 100) * 0.05;
            if (theme === 'midnight') {
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            } else {
              ctx.strokeStyle = `rgba(139, 122, 160, ${lineAlpha * 0.7})`;
            }
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles — theme-aware colors
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120 && mdist > 0) {
          const force = (120 - mdist) / 120;
          p.x += (mdx / mdist) * force * 0.9;
          p.y += (mdy / mdist) * force * 0.9;
        }

        const currentAlpha = p.alpha + Math.sin(time * 1.5 + p.x * 0.01) * 0.06;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (theme === 'midnight') {
          ctx.fillStyle = `rgba(200, 200, 200, ${Math.max(0.04, Math.min(0.3, currentAlpha))})`;
        } else {
          ctx.fillStyle = `rgba(180, 160, 200, ${Math.max(0.03, Math.min(0.2, currentAlpha))})`;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      aria-hidden="true"
    />
  );
};
