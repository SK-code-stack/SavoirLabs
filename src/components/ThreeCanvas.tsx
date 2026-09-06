"use client";

import React, { useEffect, useRef } from "react";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Interactive Mouse Tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particle cloud system
    const particleCount = width < 768 ? 30 : 65;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    let rotationTime = 0;
    // Arrow flight progress along   (starts at 0 on reload/mount)
    let flightProgress = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Read current Brand Primary color dynamically from CSS variables
      const rootStyle = getComputedStyle(document.documentElement);
      const brandColor = rootStyle.getPropertyValue("--brand-primary").trim() || "#ff0033";

      // Damped mouse tracking
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      rotationTime += 0.015;
      if (flightProgress < 1) {
        flightProgress += 0.008; // Smooth flight speed on initial load
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const isMobile = width < 768;

      // 1. Concentric Radar Grid Rings
      const ringCount = isMobile ? 3 : 5;
      for (let i = 1; i <= ringCount; i++) {
        const radius = i * (Math.min(width, height) * (isMobile ? 0.18 : 0.14)) + Math.sin(rotationTime * 0.5 + i) * 6;
        ctx.beginPath();
        ctx.arc(centerX, centerY + (isMobile ? 20 : 50), radius, 0, Math.PI * 2);
        ctx.strokeStyle = i % 2 === 0 ? "rgba(255, 0, 51, 0)" : "rgba(255, 0, 51, 0.04)";
        ctx.lineWidth = i === 2 ? 1.5 : 1;
        if (i === 2) {
          ctx.setLineDash([8, 12]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.stroke();
      }

      ctx.setLineDash([]);

      // 2. Floating Cyber Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 51, ${p.opacity * 0.8})`;
        ctx.fill();
      });

      // 3. Responsive 3D Isometric Cubes
      const cubes = isMobile
        ? [
            { x: 36, y: 75, size: 22, speed: 0.015 },
            { x: width - 40, y: 85, size: 26, speed: -0.01 },
            { x: width - 45, y: height - 120, size: 24, speed: 0.012 },
          ]
        : [
            { x: width * 0.14, y: height * 0.28, size: 42, speed: 0.015 },
            { x: width * 0.84, y: height * 0.28, size: 52, speed: -0.01 },
            { x: width * 0.88, y: height * 0.76, size: 46, speed: 0.012 },
          ];

      cubes.forEach((cube, index) => {
        ctx.save();
        const offsetX = (mouseX - centerX) * (0.015 * (index + 1));
        const offsetY = (mouseY - centerY) * (0.015 * (index + 1));
        const posX = cube.x + offsetX;
        const posY = cube.y + offsetY;

        ctx.translate(posX, posY);

        const s = cube.size;

        // Top Face (Glowing Crimson Accent)
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.6);
        ctx.lineTo(s * 0.8, -s * 0.2);
        ctx.lineTo(0, s * 0.2);
        ctx.lineTo(-s * 0.8, -s * 0.2);
        ctx.closePath();
        ctx.fillStyle = brandColor;
        ctx.shadowBlur = isMobile ? 10 : 20;
        ctx.shadowColor = brandColor;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Left Face (Dark Metallic)
        ctx.beginPath();
        ctx.moveTo(-s * 0.8, -s * 0.2);
        ctx.lineTo(0, s * 0.2);
        ctx.lineTo(0, s * 0.9);
        ctx.lineTo(-s * 0.8, s * 0.5);
        ctx.closePath();
        ctx.fillStyle = "#14141c";
        ctx.strokeStyle = "rgba(255, 0, 51, 0.4)";
        ctx.lineWidth = 1.2;
        ctx.fill();
        ctx.stroke();

        // Right Face (Dark Wireframe)
        ctx.beginPath();
        ctx.moveTo(0, s * 0.2);
        ctx.lineTo(s * 0.8, -s * 0.2);
        ctx.lineTo(s * 0.8, s * 0.5);
        ctx.lineTo(0, s * 0.9);
        ctx.closePath();
        ctx.fillStyle = "#0c0c12";
        ctx.strokeStyle = "rgba(255, 0, 51, 0.6)";
        ctx.lineWidth = 1.2;
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      });

      // 4. Curved Dashed Flight Path & Animated Arrowhead (NexTash Signature)
      const p0 = { x: isMobile ? width * 0.8 : width * 0.88, y: -20 };
      const p1 = { x: width * 1.02, y: isMobile ? height * 0.2 : height * 0.24 };
      const p2 = { x: width * 0.86, y: isMobile ? height * 0.36 : height * 0.42 };
      const p3 = { x: isMobile ? width * 0.72 : width * 0.68, y: isMobile ? height * 0.32 : height * 0.38 };

      // arrow color
      const arrowColor = "#ffffffff";

      const u = Math.min(1, Math.max(0, flightProgress));

      // de Casteljau's algorithm: Sub-curve control points from t = 0 to t = u (revealing line behind arrow)
      const a0 = { x: (1 - u) * p0.x + u * p1.x, y: (1 - u) * p0.y + u * p1.y };
      const a1 = { x: (1 - u) * p1.x + u * p2.x, y: (1 - u) * p1.y + u * p2.y };
      const a2 = { x: (1 - u) * p2.x + u * p3.x, y: (1 - u) * p2.y + u * p3.y };

      const b0 = { x: (1 - u) * a0.x + u * a1.x, y: (1 - u) * a0.y + u * a1.y };
      const b1 = { x: (1 - u) * a1.x + u * a2.x, y: (1 - u) * a1.y + u * a2.y };

      const c0 = { x: (1 - u) * b0.x + u * b1.x, y: (1 - u) * b0.y + u * b1.y };

      // Draw ONLY the portion of the line that has been created behind the arrowhead
      if (u > 0.01) {
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(a0.x, a0.y, b0.x, b0.y, c0.x, c0.y);
        ctx.setLineDash([12, 10]);
        ctx.lineDashOffset = -rotationTime * 35; // Flowing dashes effect
        ctx.strokeStyle = arrowColor; // arrow color
        ctx.lineWidth = isMobile ? 2 : 2.8;
        ctx.shadowBlur = 12;
        ctx.shadowColor = arrowColor; // arrow color
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.lineDashOffset = 0;
        ctx.shadowBlur = 0;
      }

      // Position (hx, hy) at progress u
      const hx = c0.x;
      const hy = c0.y;

      // Tangent vector (dx, dy) for arrowhead rotation angle
      const dx = b1.x - b0.x;
      const dy = b1.y - b0.y;
      const tangentAngle = Math.atan2(dy, dx);

      // Draw Animated Arrowhead at current tip position (hx, hy)
      ctx.save();
      ctx.translate(hx, hy);
      ctx.rotate(tangentAngle);

      const arrowScale = isMobile ? 0.8 : 1.1;
      ctx.scale(arrowScale, arrowScale);

      ctx.beginPath();
      ctx.moveTo(14, 0);       // Arrowhead tip pointing forward along curve
      ctx.lineTo(-12, -8);
      ctx.lineTo(-6, 0);
      ctx.lineTo(-12, 8);
      ctx.closePath();
      ctx.fillStyle = arrowColor; // arrow color
      ctx.shadowBlur = 18;
      ctx.shadowColor = arrowColor; // arrow color
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
