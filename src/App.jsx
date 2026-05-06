import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#000", color: "#fff" }}>

      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          position: "relative",
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            style={{
              width: "120px",
              marginBottom: "20px",
              filter: "invert(1)",
            }}
          />

          <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
            Kirkkonummen Liikuntakeskus
          </h1>

          <p style={{ opacity: 0.8, marginBottom: "20px" }}>
            24/7 Kuntosali • 37+ vuotta
          </p>

          <button
            style={{
              padding: "14px 28px",
              background: "#ff6a00",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            LIITY NYT
          </button>
        </div>
      </section>

      {/* SECTION 1 */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          padding: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/gym.jpg"
          style={{
            width: "400px",
            borderRadius: "10px",
          }}
        />

        <div style={{ maxWidth: "400px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff6a00" }}>
            VOIMA
          </h2>
          <p style={{ opacity: 0.8 }}>
            Modernit laitteet ja vapaat painot. Kaikki mitä tarvitset kehittääksesi voimaa ja lihasmassaa.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          padding: "60px 20px",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        <img
          src="/gym2.jpg"
          style={{
            width: "400px",
            borderRadius: "10px",
          }}
        />

        <div style={{ maxWidth: "400px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff6a00" }}>
            KUNTO
          </h2>
          <p style={{ opacity: 0.8 }}>
            Cardio-alue ja monipuoliset harjoittelumahdollisuudet kaikentasoisille treenaajille.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          borderTop: "1px solid #222",
        }}
      >
        <p style={{ opacity: 0.6 }}>
          © Kirkkonummen Liikuntakeskus
        </p>
      </footer>
    </div>
  );
}
