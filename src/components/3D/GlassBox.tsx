import { MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import { useAutoRotation } from "@/hooks/useAutoRotation";
import { sceneConfig } from "@/store/scene-config";

export default function GlassBox() {
  const { position, rotation } = sceneConfig.About;
  const ref = useAutoRotation();
  return (
    <RoundedBox args={[1]} rotation={rotation} position={position} ref={ref}>
      <MeshTransmissionMaterial
        backside
        backsideThickness={0.2}
        thickness={1}
        roughness={0.1}
        transmission={1}
        ior={1.5}
        chromaticAberration={0.05}
        anisotropy={0.1}
        distortion={0.1}
        distortionScale={0.3}
        temporalDistortion={0.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </RoundedBox>
  );
}
