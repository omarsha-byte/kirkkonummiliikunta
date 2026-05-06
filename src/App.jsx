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
    <div style={{ background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
      
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
  
  <img 
    src="/logo.png" 
    style={{ width: "120px", marginBottom: "20px" }} 
  />

  <h1 style={{ 
    fontSize: "3rem", 
    textAlign: "center",
    letterSpacing: "2px"
  }}>
    Kirkkonummen Liikuntakeskus
  </h1>

  <p style={{ color: "#aaa", marginTop: "10px" }}>
    24/7 Kuntosali • 37+ vuotta
  </p>

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

      {/* IMAGE SECTION */}
      <section style={{ padding: "80px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>KUNTOSALI</h2>
        <img 
          src="/gym.jpg" 
          style={{ width: "80%", borderRadius: "20px" }} 
        />
      </section>

      {/* PRICING */}
      <section style={{ padding: "80px", background: "#111" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>HINNASTO</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "20px"
        }}>
          {plans.map((p, i) => (
            <div key={i} style={{
              padding: "20px",
              background: "#1c1c1c",
              borderRadius: "15px"
            }}>
              <h3>{p.name}</h3>
              <p style={{ color: "#ff6a00", fontSize: "20px" }}>{p.price}</p>
              <p style={{ color: "#aaa" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px", textAlign: "center" }}>
        <h2>YHTEYSTIEDOT</h2>
        <p>Munkinmäentie 19, Kirkkonummi</p>
        <p>asiakaspalvelu@kirkkonummen-liikuntakeskus.net</p>
        <p>Ma & Ke 17–19</p>
      </section>

    </div>
  );
}

const plans = [
  { name: "Kertamaksu", price: "14€", desc: "17–20" },
  { name: "VIP", price: "18€" },
  { name: "Jäsenyys", price: "58€/kk" },
  { name: "12kk", price: "51€/kk" },
  { name: "VIP 12kk", price: "58€/kk" },
  { name: "Nuoriso", price: "34€" },
  { name: "1kk", price: "79€" },
  { name: "Aloitus", price: "60€" },
  { name: "PT", price: "70€" }
];
