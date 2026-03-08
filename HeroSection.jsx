import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../../public/animations/hero.json";
import GradientButton from "./GradientButton";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          background: "linear-gradient(90deg,#ff4c60,#ff8c42)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Nas Tech Innovations
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: "1.2rem", marginTop: 20 }}
      >
        Turning Ideas into Digital Solutions 🚀
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ width: 400, marginTop: 40 }}
      >
        <Lottie animationData={heroAnimation} loop={true} />
      </motion.div>

      <motion.div style={{ marginTop: 50 }}>
        <GradientButton text="Contact Us" onClick={() => window.scrollTo({ top: 2000, behavior: "smooth" })} />
      </motion.div>
    </section>
  );
}
