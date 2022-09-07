import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import styles from "./CanvasContainer.module.scss";

const BreadModel = () => {
  const gltf = useLoader(GLTFLoader, "./static/models/buns.glb");
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() * 0.5;
  });

  return (
    <>
      <primitive ref={myMesh} object={gltf.scene} scale={3} />
    </>
  );
};
const FillModel = () => {
  const gltf = useLoader(GLTFLoader, "./static/models/beef.glb");
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() * 0.5;
  });
  return (
    <>
      <primitive ref={myMesh} object={gltf.scene} scale={3} />
    </>
  );
};

export default function App() {
  return (
    <div className={styles.container}>
      <Canvas>
        <Suspense fallback={null}>
          <BreadModel />
          <FillModel />
          <OrbitControls />
        </Suspense>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}
