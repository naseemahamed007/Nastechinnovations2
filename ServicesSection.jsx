import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    { title: "Web Development", desc: "Modern responsive websites" },
    { title: "UI/UX Design", desc: "Interactive, smooth interfaces" },
    { title: "IT Solutions", desc: "Automation and tech consulting" },
    { title: "SEO Optimization", desc: "Better visibility and ranking" },
  ];

  return (
    <section style={{ background: "#111" }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: 50 }}
      >
        What We Do
      </motion.h2>

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
            style={{
              background: "#222",
              padding: "30px",
              margin: "20px",
              borderRadius: "15px",
              width: "250px",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: 10, fontSize: "1.2rem" }}>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
