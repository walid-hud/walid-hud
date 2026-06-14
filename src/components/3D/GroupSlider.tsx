"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { sceneConfig } from "@/store/scene-config";
import { useActiveSectionStore } from "@/store/store";

export const GroupSlider = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const activeSection = useActiveSectionStore((state) => state.activeSection);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const target = sceneConfig[activeSection];
    const targetX = -target.position[0];
    const targetY = -target.position[1];

    const speed = 6;
    const alpha = THREE.MathUtils.clamp(1 - Math.exp(-speed * delta), 0, 1);

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      alpha,
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      alpha,
    );
  });

  return (
    <group scale={[0.6, 0.6, 0.6]} ref={groupRef}>
      {children}
    </group>
  );
};
