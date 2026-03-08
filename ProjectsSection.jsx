import { motion } from "framer-motion";
import Lottie from "lottie-react";
import projectAnimation from "../../public/animations/project.json";

const projects = [
  { name: "Website A", desc: "Modern UI/UX", link: "#" },
  { name: "App B", desc: "Interactive Web App", link: "#" },
  { name: "Tool C", desc: "Automation Tool", link: "#" },
];

export default function ProjectsSection() {
  return (
    <section style={{ padding: "100px 20px" }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: 50 }}
      >
        Our Projects
      </motion.h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{
              background: "#222",
              padding: "30px",
              borderRadius: "20px",
              width: "250px",
              textAlign: "center",
            }}
          >
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div style={{ marginTop: 20 }}>
              <Lottie animationData={projectAnimation} loop={true} style={{ height: 100 }} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
