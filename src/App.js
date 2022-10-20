import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NavigationBar from "./UI/NavigationBar";
import Container from "./UI/Container";
import Avatar from "./Models/Avatar";
import ChickenDance from "./Models/ChickenDance";
import SillyDance from "./Models/SillyDance";
const App = () => {
  const [move, setMove] = useState("AVATAR");

  const getMoveHandler = (newMove) => {
    console.log(move, newMove);
    setMove(newMove);
  };

  return (
    <React.Fragment>
      <Container>
        <NavigationBar getMove={getMoveHandler} />
        <Canvas
          camera={{
            position: [0, 0, 12.25],
            fov: 15,
          }}
          style={{
            backgroundColor: "#111a21",
            width: "100vw",
            height: "100vh",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <ambientLight intensity={0.4} />
          <Suspense fallback={null}>
            {move === "AVATAR" ? (
              <Avatar position={[0.025, -0.9, 0]} />
            ) : move === "CHICKEN" ? (
              <ChickenDance position={[0.15, -0.9, 0]} />
            ) : move === "SILLY" ? (
              <SillyDance position={[0.015, -0.9, 0]} />
            ) : null}
          </Suspense>
          <OrbitControls />
        </Canvas>
      </Container>
    </React.Fragment>
  );
};

export default App;
