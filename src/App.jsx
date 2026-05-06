import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Scene() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial color="#ff6a00" wireframe />
    </mesh>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      
      {/* HERO */}
      <section style={{ height: "100vh", position: "relative" }}>
        <Canvas>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <Scene />
        </Canvas>

        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
            Kirkkonummen Liikuntakeskus
          </h1>

          <button style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "#ff6a00",
            border: "none"
          }}>
            LIITY NYT
          </button>
        </div>
      </section>

      {/* VOIMA */}
      <section style={{ height: "100vh" }}>
        <motion.div style={{ y: y1, textAlign: "center", marginTop: "40vh" }}>
          <h2 style={{ fontSize: "3rem", color: "#ff6a00" }}>VOIMA</h2>
        </motion.div>
      </section>

      {/* ENERGIA */}
      <section style={{ height: "100vh" }}>
        <motion.div style={{ y: y2, textAlign: "center", marginTop: "40vh" }}>
          <h2 style={{ fontSize: "3rem" }}>ENERGIA</h2>
        </motion.div>
      </section>

      {/* PALAUTUMINEN */}
      <section style={{ height: "100vh" }}>
        <motion.div style={{ y: y3, textAlign: "center", marginTop: "40vh" }}>
          <h2 style={{ fontSize: "3rem" }}>PALAUTUMINEN</h2>
        </motion.div>
      </section>

    </div>
  );
}
