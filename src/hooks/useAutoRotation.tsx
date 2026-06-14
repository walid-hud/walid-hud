import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

type RotationSpeedTuple = [number, number, number];

export const useAutoRotation = (speeds: RotationSpeedTuple = [0, 0.7, 0]) => {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    // Multiply the speed by delta so it rotates consistently regardless of frame rate
    ref.current.rotation.x += speeds[0] * delta;
    ref.current.rotation.y += speeds[1] * delta;
    ref.current.rotation.z += speeds[2] * delta;
  });

  return ref;
};
