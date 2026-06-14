import { MeshTransmissionMaterial } from "@react-three/drei";
import { sceneConfig } from "@/store/scene-config";
import GlassBox from "./GlassBox";
import { GroupSlider } from "./GroupSlider";

const SceneGroup = () => {
  return (
    <GroupSlider>
      <GlassBox />
      <GlassSphere />
    </GroupSlider>
  );
};

const GlassSphere = () => {
  const { position, rotation } = sceneConfig["Skills"];
  return (
    <mesh position={position} rotation={rotation}>
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
      <coneGeometry />
    </mesh>
  );
};

export default SceneGroup;
