'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  className?: string;
}

export default function ThreeBackground({ className = '' }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const animationRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  const checkEnvironment = useCallback(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      if (!hasWebGL) {
        setIsWebGLAvailable(false);
        return false;
      }
    } catch {
      setIsWebGLAvailable(false);
      return false;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check for mobile device
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      setShouldRender(false);
      return false;
    }

    return true;
  }, []);

  useEffect(() => {
    if (!checkEnvironment()) return;

    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Materials with higher visibility teal colors
    const tealMaterial = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.65,
      metalness: 0.3,
      roughness: 0.4,
    });

    const tealWireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });

    const lightTealMaterial = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      transparent: true,
      opacity: 0.55,
      metalness: 0.2,
      roughness: 0.5,
    });

    // Create geometries - positioned more visibly
    // Torus ring 1 (larger, top-left)
    const torus1 = new THREE.Mesh(
      new THREE.TorusGeometry(3, 0.25, 20, 60),
      tealMaterial
    );
    torus1.position.set(-5, 3, -2);
    torus1.rotation.x = Math.PI / 3;
    torus1.rotation.z = Math.PI / 6;
    scene.add(torus1);

    // Torus ring 2 (smaller, bottom-right)
    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.18, 18, 50),
      lightTealMaterial
    );
    torus2.position.set(5, -2, -1);
    torus2.rotation.y = Math.PI / 4;
    torus2.rotation.x = Math.PI / 5;
    scene.add(torus2);

    // Wireframe icosahedron (center-left)
    const icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2, 1),
      tealWireframeMaterial
    );
    icosahedron.position.set(-4, -3, 0);
    scene.add(icosahedron);

    // Spheres with better visibility
    const sphereMaterial1 = new THREE.MeshStandardMaterial({
      color: 0x0d9488,
      transparent: true,
      opacity: 0.7,
      metalness: 0.4,
      roughness: 0.3,
    });
    const sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32),
      sphereMaterial1
    );
    sphere1.position.set(6, 4, -3);
    scene.add(sphere1);

    const sphereMaterial2 = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.6,
      metalness: 0.3,
      roughness: 0.4,
    });
    const sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      sphereMaterial2
    );
    sphere2.position.set(-6, 4, -2);
    scene.add(sphere2);

    const sphereMaterial3 = new THREE.MeshStandardMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.55,
      metalness: 0.25,
      roughness: 0.45,
    });
    const sphere3 = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 32, 32),
      sphereMaterial3
    );
    sphere3.position.set(4, -4, -1);
    scene.add(sphere3);

    // Additional small sphere for balance
    const sphere4 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0x99f6e4,
        transparent: true,
        opacity: 0.5,
        metalness: 0.2,
        roughness: 0.5,
      })
    );
    sphere4.position.set(-2, 5, -4);
    scene.add(sphere4);

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0x14b8a6, 0.5);
    directionalLight2.position.set(-10, -5, 5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x2dd4bf, 0.8, 20);
    pointLight.position.set(0, 0, 8);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Slow rotations
      torus1.rotation.x += 0.004;
      torus1.rotation.y += 0.003;

      torus2.rotation.y += 0.005;
      torus2.rotation.z += 0.003;

      icosahedron.rotation.x += 0.003;
      icosahedron.rotation.y += 0.004;

      sphere1.rotation.y += 0.006;
      sphere2.rotation.y -= 0.005;
      sphere3.rotation.x += 0.004;
      sphere4.rotation.z += 0.003;

      // Gentle floating motion
      torus1.position.y = 3 + Math.sin(time * 0.5) * 0.4;
      torus2.position.y = -2 + Math.sin(time * 0.6) * 0.3;
      icosahedron.position.y = -3 + Math.sin(time * 0.4) * 0.5;
      sphere1.position.y = 4 + Math.sin(time * 0.7) * 0.25;
      sphere4.position.y = 5 + Math.sin(time * 0.8) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current && container) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [checkEnvironment]);

  // Fallback gradient for unsupported browsers or mobile
  if (!isWebGLAvailable || !shouldRender) {
    return (
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(20, 184, 166, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(45, 212, 191, 0.1) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ minHeight: '100%' }}
      aria-hidden="true"
    />
  );
}
