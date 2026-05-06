import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
      
      <section style={{ height: "100vh", position: "relative" }}>
        <Canvas>
          <ambientLight />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h1>Kirkkonummen Liikuntakeskus</h1>
          <button style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "orange",
            border: "none"
          }}>
            LIITY NYT
          </button>
        </div>
      </section>

    </div>
  );
}
