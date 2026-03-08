import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../../public/animations/hero.json";

export default function HeroSection() {
  return (
    <section className="hero-section flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", fontWeight: "700" }}
      >
        Nas Tech Innovations
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: "1.2rem", marginTop: "20px" }}
      >
        Turning Ideas into Digital Solutions 🚀
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ width: 400, marginTop: 40 }}
      >
        <Lottie animationData={heroAnimation} loop={true} />
      </motion.div>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={{ marginTop: 40 }}
      >
        Contact Us
      </motion.button>
    </section>
  );
}
