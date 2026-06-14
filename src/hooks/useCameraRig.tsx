"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneConfig } from "@/store/scene-config";
import { useActiveSectionStore } from "@/store/store";

export const CameraRig = () => {
  const activeSection = useActiveSectionStore((state) => state.activeSection);

  useFrame((state, delta) => {
    const target = sceneConfig[activeSection] || sceneConfig.About;

    // Grab the target position coordinates from your config
    const targetX = target.position[0];
    const targetY = target.position[1];
    const targetZ = target.position[2];

    // Smoothly damp the camera coordinates independently.
    // The third parameter (0.25) is the approximate time in seconds
    // it takes to reach the target. Lower = faster, higher = smoother.
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      targetX,
      4, // Stiffness/lambda value
      delta,
    );

    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      targetY,
      4,
      delta,
    );

    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      targetZ,
      4,
      delta,
    );

    state.camera.lookAt(0, 0, 0);
  });

  return null;
};
