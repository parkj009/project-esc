import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useKeyPress from "../../hooks/useKeyPress";

function Character() {
  const meshRef = useRef();
  const direction = useKeyPress("w");

  console.log(direction);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Character;
