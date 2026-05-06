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

      {/* 3D BACKGROUND */}
      <Canvas style={{ position: "fixed", top: 0, left: 0 }}>
        <Scene scroll={scrollRef} />
      </Canvas>

      {/* HERO */}
      <section style={{ height: "100vh", position: "relative" }}>
        
        {/* Background Image */}
        <img 
          src="/bg.jpg"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.25,
            filter: "brightness(0.6)"
          }}
        />

        {/* Gradient Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6), #000)"
        }} />

        {/* Content */}
        <div id="hero" style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>

          {/* LOGO BADGE */}
          <div style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            padding: "25px 40px",
            borderRadius: "20px",
            boxShadow: "0 0 80px rgba(255,106,0,0.35)",
            marginBottom: "20px"
          }}>
            <img src="/logo.png" style={{ width: "140px" }} />
          </div>

          <h1 style={{
            fontSize: "4rem",
            letterSpacing: "3px",
            textAlign: "center"
          }}>
            Kirkkonummen Liikuntakeskus
          </h1>

          <button style={{
            marginTop: "30px",
            padding: "15px 40px",
            background: "#ff6a00",
            border: "none",
            borderRadius: "10px",
            color: "#fff",
            cursor: "pointer"
          }}>
            LIITY NYT
          </button>
        </div>
      </section>

      {/* MAIN IMAGE */}
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
            width: "65%",
            borderRadius: "20px",
            opacity: 0,
            boxShadow: "0 40px 120px rgba(0,0,0,0.9)",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        />
      </section>

      {/* PRICING */}
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

      {/* EXTRA IMAGE SECTION */}
      <section style={{
        height: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img 
          src="/gym2.jpg"
          style={{
            width: "50%",
            borderRadius: "20px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.8)"
          }}
        />
      </section>

    </div>
  )
}
