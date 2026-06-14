import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type EulerTuple = [number, number, number];

export const useSmoothRotation = (
  targetRotation: EulerTuple,
  speed: number = 6,
) => {
  const ref = useRef<THREE.Object3D>(null);

  const currentEuler = useRef(new THREE.Euler());
  const currentQuaternion = useRef(new THREE.Quaternion());
  const targetEuler = useRef(new THREE.Euler());
  const targetQuaternion = useRef(new THREE.Quaternion());

  useFrame((_, delta) => {
    if (!ref.current) return;

    // 1. Convert incoming target array to an Euler angle, then to a Quaternion
    targetEuler.current.set(...targetRotation);
    targetQuaternion.current.setFromEuler(targetEuler.current);

    // 2. Safely grab the object's current rotation state
    ref.current.getWorldQuaternion(currentQuaternion.current);

    // 3. Spherical linear interpolation (slerp) with frame-rate independent dampening
    // Formula: 1 - Math.exp(-speed * delta) ensures constant speed regardless of 60Hz or 144Hz displays
    currentQuaternion.current.slerp(
      targetQuaternion.current,
      1 - Math.exp(-speed * delta),
    );

    // 4. Apply the calculated smooth rotation back to the object
    ref.current.quaternion.copy(currentQuaternion.current);
  });

  return ref;
};
