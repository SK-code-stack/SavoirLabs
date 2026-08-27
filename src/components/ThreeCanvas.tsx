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
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    // 3D Isometric Cube Data
    let angleX = 0.005;
    let angleY = 0.008;

    const cubes = [
      { x: width * 0.15, y: height * 0.25, size: 42, speed: 0.015, color: "#ff0033" },
      { x: width * 0.82, y: height * 0.3, size: 55, speed: -0.01, color: "#ff0033" },
      { x: width * 0.88, y: height * 0.75, size: 48, speed: 0.012, color: "#ff0033" },
    ];

    let rotationTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      rotationTime += 0.015;

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw Concentric Radar Grid Rings (NexTash signature look)
      const ringCount = 5;
      for (let i = 1; i <= ringCount; i++) {
        const radius = i * (Math.min(width, height) * 0.14) + Math.sin(rotationTime * 0.5 + i) * 8;
        ctx.beginPath();
        ctx.arc(centerX, centerY + 50, radius, 0, Math.PI * 2);
        ctx.strokeStyle = i % 2 === 0 ? "rgba(255, 0, 51, 0.14)" : "rgba(255, 0, 51, 0.06)";
        ctx.lineWidth = i === 2 ? 2 : 1;
        if (i === 3) {
          ctx.setLineDash([8, 12]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.stroke();
      }

      ctx.setLineDash([]);

      // 2. Draw Interactive Floating Cyber Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 51, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#ff0033";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Render 3D Isometric Wireframe Cubes (NexTash Red Cubes)
      cubes.forEach((cube, index) => {
        ctx.save();
        const offsetX = (mouseX - centerX) * (0.02 * (index + 1));
        const offsetY = (mouseY - centerY) * (0.02 * (index + 1));
        const posX = cube.x + offsetX;
        const posY = cube.y + offsetY;

        ctx.translate(posX, posY);

        const rot = rotationTime * cube.speed * 80;
        const s = cube.size;

        // Draw 3D Isometric Cube Faces
        // Top Face (Glowing Crimson Accent)
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.6);
        ctx.lineTo(s * 0.8, -s * 0.2);
        ctx.lineTo(0, s * 0.2);
        ctx.lineTo(-s * 0.8, -s * 0.2);
        ctx.closePath();
        ctx.fillStyle = "#ff0033";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#ff0033";
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
        ctx.lineWidth = 1.5;
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
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      });

      // 4. Curved Dashed Flight Path (Top Right Arc from NexTash image)
      ctx.beginPath();
      const pathStartX = width * 0.75;
      const pathStartY = 0;
      const pathControlX = width * 0.98;
      const pathControlY = height * 0.25;
      const pathEndX = width * 0.72;
      const pathEndY = height * 0.38;

      ctx.moveTo(pathStartX, pathStartY);
      ctx.bezierCurveTo(pathControlX, pathControlY, pathControlX - 100, pathEndY - 50, pathEndX, pathEndY);
      ctx.setLineDash([12, 10]);
      ctx.strokeStyle = "#ff0033";
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#ff0033";
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.shadowBlur = 0;

      // Arrowhead on path end
      ctx.beginPath();
      ctx.fillStyle = "#ff0033";
      ctx.moveTo(pathEndX, pathEndY);
      ctx.lineTo(pathEndX + 12, pathEndY - 16);
      ctx.lineTo(pathEndX - 6, pathEndY - 18);
      ctx.closePath();
      ctx.fill();

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
