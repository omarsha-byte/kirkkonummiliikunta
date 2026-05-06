import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Scene({ scroll }) {
  const mesh = useRef()
  const { camera } = useThree()

  useFrame(() => {
    const t = scroll.current

    camera.position.z = 8 - t * 5
    camera.position.y = t * 3
    camera.rotation.x = -t * 0.4

    mesh.current.rotation.y += 0.01
    mesh.current.rotation.x += 0.005
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
    </>
  )
}

export default function App() {
  const container = useRef()
  const scrollRef = useRef(0)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    })

    tl.to("#hero", { opacity: 0, duration: 1 })

    tl.fromTo("#gymImg",
      { scale: 0.8, opacity: 0 },
      { scale: 1.2, opacity: 1, duration: 2 }
    )

    tl.fromTo("#pricing",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 }
    )

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        scrollRef.current = self.progress
      }
    })

  }, [])

  return (
    <div ref={container} style={{ background: "#000", color: "#fff" }}>

      <Canvas style={{ position: "fixed", top: 0, left: 0 }}>
        <Scene scroll={scrollRef} />
      </Canvas>

      <section style={{ height: "100vh", position: "relative" }}>
        <div id="hero" style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>

          <img src="/logo.png" style={{ width: "140px" }} />

          <h1 style={{ fontSize: "4rem" }}>
            Kirkkonummen Liikuntakeskus
          </h1>

          <button style={{
            marginTop: "30px",
            padding: "15px 40px",
            background: "#ff6a00",
            border: "none",
            borderRadius: "10px",
            color: "#fff"
          }}>
            LIITY NYT
          </button>
        </div>
      </section>

      <section style={{
        height: "150vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img
          id="gymImg"
          src="/gym.jpg"
          style={{
            width: "60%",
            borderRadius: "20px",
            opacity: 0
          }}
        />
      </section>

      <section style={{
        height: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div id="pricing" style={{
          display: "flex",
          gap: "40px",
          opacity: 0
        }}>
          <div style={{
            padding: "40px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px"
          }}>
            <h3>12 kk</h3>
            <p>51€/kk</p>
          </div>

          <div style={{
            padding: "40px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px"
          }}>
            <h3>VIP</h3>
            <p>58€/kk</p>
          </div>
        </div>
      </section>

    </div>
  )
}
