import { motion } from "framer-motion";
import Lottie from "lottie-react";
import testimonialAnimation from "../../public/animations/testimonial.json";

const testimonials = [
  { name: "Client A", feedback: "Amazing IT solutions!" },
  { name: "Client B", feedback: "Highly professional team." },
  { name: "Client C", feedback: "Creative and fast delivery." },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "100px 20px", background: "#111" }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: 50 }}
      >
        Testimonials
      </motion.h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{
              background: "#222",
              padding: "30px",
              borderRadius: "20px",
              width: "250px",
              textAlign: "center",
            }}
          >
            <p>"{t.feedback}"</p>
            <h4 style={{ marginTop: 15 }}>{t.name}</h4>
            <div style={{ marginTop: 20 }}>
              <Lottie animationData={testimonialAnimation} loop={true} style={{ height: 80 }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
