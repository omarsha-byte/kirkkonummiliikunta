import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import * as THREE from "three"

function CameraRig({ scroll }) {
  const { camera } = useThree()

  useFrame(() => {
    const t = scroll.current

    camera.position.z = 8 - t * 4
    camera.position.y = t * 3
    camera.rotation.x = -t * 0.3
  })

  return null
}

function Scene({ scroll }) {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.002
  })

  return (
    <>
      <fog attach="fog" args={["#000", 5, 20]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#ff6a00" />

      <mesh ref={mesh}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial wireframe color="#ff6a00" />
      </mesh>

      <CameraRig scroll={scroll} />
    </>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scrollRef = useRef(0)

  scrollYProgress.onChange((v) => (scrollRef.current = v))

  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textMove = useTransform(scrollYProgress, [0, 1], [0, -200])
  const imageZoom = useTransform(scrollYProgress, [0, 1], [1, 1.4])

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "Arial" }}>
      
      {/* 3D BACKGROUND */}
      <Canvas style={{ position: "fixed", top: 0, left: 0 }}>
        <Scene scroll={scrollRef} />
      </Canvas>

      {/* HERO */}
      <section style={{ height: "100vh", position: "relative" }}>
        <motion.div style={{
          opacity: fadeOut,
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          
          <div style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(15px)",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 0 60px rgba(255,106,0,0.4)"
          }}>
            <img src="/logo.png" style={{ width: "150px" }} />
          </div>

          <motion.h1 style={{
            fontSize: "4rem",
            marginTop: "20px",
            letterSpacing: "3px",
            textAlign: "center",
            y: textMove
          }}>
            Kirkkonummen Liikuntakeskus
          </motion.h1>

          <p style={{ color: "#aaa" }}>
            24/7 Kuntosali • 37+ vuotta
          </p>

          <button style={{
            marginTop: "30px",
            padding: "15px 40px",
            background: "linear-gradient(135deg,#ff6a00,#ff8c00)",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 10px 40px rgba(255,106,0,0.5)"
          }}>
            LIITY NYT
          </button>
        </motion.div>
      </section>

      {/* IMAGE SECTION */}
      <section style={{
        height: "140vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <motion.img
          src="/gym.jpg"
          style={{
            width: "65%",
            borderRadius: "20px",
            scale: imageZoom,
            boxShadow: "0 40px 120px rgba(0,0,0,0.8)"
          }}
        />
      </section>

      {/* PRICING */}
      <section style={{
        height: "120vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Hinnasto
        </h2>

        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { name: "12 kk jäsenyys", price: "51€/kk" },
            { name: "VIP jäsenyys", price: "58€/kk" }
          ].map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              style={{
                padding: "40px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
              }}
            >
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <button style={{
          padding: "20px 60px",
          fontSize: "1.2rem",
          background: "#ff6a00",
          border: "none",
          borderRadius: "12px",
          color: "#fff",
          cursor: "pointer"
        }}>
          OSTA JÄSENYYS
        </button>
      </section>

    </div>
  )
}
