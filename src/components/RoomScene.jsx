import { Canvas } from "@react-three/fiber";
import Character from "./models/Character";

function RoomScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Character />
    </Canvas>
  );
}

export default RoomScene;
