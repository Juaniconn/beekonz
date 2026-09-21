"use client";

import { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Mesh, Group } from "three";
import * as THREE from "three";

interface Model3DProps {
  autoRotate?: boolean;
  float?: boolean;
}

export function Model3D({
  autoRotate = true,
  float = true,
}: Model3DProps) {
  const groupRef = useRef<Group>(null);
  const gltf = useLoader(GLTFLoader, "/models/tracker.glb");

  useEffect(() => {
    if (!gltf || !groupRef.current) return;

    // Escalar y centrar el modelo (igual que el script original)
    const model = gltf.scene.clone();

    // Aplicar materiales
    model.traverse((child) => {
      const mesh = child as Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && "metalness" in mat) {
          mat.metalness = Math.max(mat.metalness ?? 0, 0.45);
          mat.roughness = Math.min(mat.roughness ?? 1, 0.55);
          mat.envMapIntensity = 1.1;
          mat.needsUpdate = true;
        }
      }
    });

    // Escalar
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 2.8 / maxDim;
    model.scale.setScalar(scale);

    // Centrar
    const centeredBox = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    centeredBox.getCenter(center);
    model.position.sub(center);

    // Limpiar previo y agregar
    groupRef.current.clear();
    groupRef.current.add(model);
  }, [gltf]);

  useFrame((state) => {
    if (groupRef.current) {
      if (autoRotate) {
        groupRef.current.rotation.y += 0.005;
      }
      if (float) {
        groupRef.current.position.y =
          Math.sin(state.clock.elapsedTime) * 0.1;
      }
    }
  });

  return <group ref={groupRef} />;
}