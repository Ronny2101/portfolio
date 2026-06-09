"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function GlassSphere({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.2;
      meshRef.current.rotation.y += delta * speed * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.55}
          distort={0.35}
          speed={1.5}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

function GlowRing({
  position,
  color,
  size,
}: {
  position: [number, number, number];
  color: string;
  size: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.2, 24, 48]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.15}
          metalness={0.3}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function BackgroundOrb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -6]}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial
        color="#dbeafe"
        transparent
        opacity={0.12}
        roughness={1}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-4, -3, 2]} intensity={0.5} color="#818cf8" />
      <pointLight position={[3, 4, -2]} intensity={0.3} color="#93c5fd" />

      <BackgroundOrb />

      <GlassSphere position={[-3.2, 1.5, -0.5]} color="#818cf8" size={1.3} speed={0.5} />
      <GlassSphere position={[3.5, -0.8, -1.5]} color="#a78bfa" size={1} speed={0.6} />
      <GlassSphere position={[0.5, 2.8, -2.5]} color="#93c5fd" size={0.7} speed={0.4} />
      <GlassSphere position={[-1, -2.5, -1]} color="#c4b5fd" size={0.5} speed={0.7} />

      <GlowRing position={[-2.5, -1.5, -1]} color="#818cf8" size={1.1} />
      <GlowRing position={[2.8, 1.5, -2]} color="#93c5fd" size={0.8} />
    </Canvas>
  );
}
