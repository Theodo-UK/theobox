import { useRef } from "react";
import * as THREE from "three";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const BoxObject = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta / 2;
    meshRef.current.rotation.x += delta / 2;
  });

  return (
    <mesh ref={meshRef} scale={3}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
};

const Box = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <directionalLight position={[5, 0, 0]} intensity={1} />
      <directionalLight position={[0, 5, 0]} intensity={1} />
      <ambientLight intensity={1} />
      <OrbitControls />
      <BoxObject />
    </Canvas>
  );
};

export default Box;
