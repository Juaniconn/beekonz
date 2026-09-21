"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model3D } from "./Model3D";

interface SceneProps {
  autoRotate?: boolean;
  float?: boolean;
  showControls?: boolean;
}

export function Scene({
  autoRotate = true,
  float = true,
  showControls = false,
}: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model3D autoRotate={autoRotate} float={float} />
      {showControls && <OrbitControls enableZoom={true} />}
      <Environment preset="city" />
    </Canvas>
  );
}