"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface Model3DProps {
  color?: string;
  autoRotate?: boolean;
  float?: boolean;
}

export function Model3D({
  color = "#EAD08E",
  autoRotate = true,
  float = true,
}: Model3DProps) {
  const meshRef = useRef<Mesh>(null);
  // Placeholder: cargar modelo GLB cuando esté disponible
  // const { scene } = useGLTF("/models/tracker.glb");

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (autoRotate) {
        meshRef.current.rotation.y += delta * 0.3;
      }
      if (float) {
        meshRef.current.position.y =
          Math.sin(state.clock.elapsedTime) * 0.1;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Placeholder geométrico - reemplazar con modelo GLB real */}
      <boxGeometry args={[1, 0.3, 0.5]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}