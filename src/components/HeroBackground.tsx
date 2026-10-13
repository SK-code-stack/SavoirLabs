
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    if (!width || !height) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.1,
      1000
    );

    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.5)
    );
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    container.appendChild(renderer.domElement);

    // Rotating teal wireframe
    const knotGeometry = new THREE.TorusKnotGeometry(
      43,
      11,
      120,
      18
    );

    const knotMaterial = new THREE.MeshBasicMaterial({
      color: 0x00bfb3,
      wireframe: true,
      transparent: true,
      opacity: 0.19,
      depthWrite: false,
    });

    const knot = new THREE.Mesh(
      knotGeometry,
      knotMaterial
    );

    knot.position.set(48, 0, -15);
    scene.add(knot);

    // Floating particles
    const particleCount = 280;
    const positions = new Float32Array(
      particleCount * 3
    );

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] =
        (Math.random() - 0.5) * 350;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 240;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 150;
    }

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    
const particleMaterial = new THREE.PointsMaterial({
  color: 0x00bfb3,
  size: 2.2,
  map: (() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;

    const context = canvas.getContext("2d")!;

    context.beginPath();
    context.arc(32, 32, 28, 0, Math.PI * 2);
    context.fillStyle = "#ffffff";
    context.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  })(),
  transparent: true,
  opacity: 0.55,
  alphaTest: 0.1,
  depthWrite: false,
  sizeAttenuation: true,
});


    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    scene.add(particles);

    // Mouse parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrame = 0;
    let isVisible = true;

    const handleMouseMove = (event: MouseEvent) => {
      targetX =
        (event.clientX / window.innerWidth - 0.5) * 2;

      targetY =
        (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    // Resize to fit the hero section
    const resizeObserver = new ResizeObserver(() => {
      width = container.clientWidth;
      height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    });

    resizeObserver.observe(container);

    // Pause rendering while the hero is off-screen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      }
    );

    intersectionObserver.observe(container);

    // Animation loop
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      if (!isVisible) return;

      mouseX += (targetX - mouseX) * 0.035;
      mouseY += (targetY - mouseY) * 0.035;

      knot.rotation.x += 0.0015;
      knot.rotation.y += 0.0025;
      knot.rotation.z = mouseX * 0.12;

      knot.position.x = 48 + mouseX * 8;
      knot.position.y = -mouseY * 6;

      particles.rotation.y += 0.0005;
      particles.rotation.x = mouseY * 0.025;
      particles.position.x = mouseX * 5;
      particles.position.y = -mouseY * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      scene.remove(knot, particles);

      knotGeometry.dispose();
      knotMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}
