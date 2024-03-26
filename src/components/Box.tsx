import { useRef } from "react";
import * as THREE from "three";
import { useFrame, Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";

const BoxObject = ({ color }: { color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta / 2;
    meshRef.current.rotation.x += delta / 2;
  });

  return (
    <mesh ref={meshRef} scale={3}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} transparent />
      {/* <MeshDistortMaterial distort={0.3} speed={5} /> */}
    </mesh>
  );
};

const Box = ({ color }: { color: string }) => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <directionalLight position={[5, 0, 0]} intensity={1} />
      <directionalLight position={[0, 5, 0]} intensity={1} />
      <ambientLight intensity={1} />
      <OrbitControls />
      <BoxObject color={color} />
    </Canvas>
  );
};

export default Box;
