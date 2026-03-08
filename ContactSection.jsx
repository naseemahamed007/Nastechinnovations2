import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section style={{ background: "#0a0a0a" }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: 50 }}
      >
        Get in Touch
      </motion.h2>

      <form
        action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
        method="POST"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <input type="text" placeholder="Name" style={{ margin: 10, padding: 10, width: 300 }} required />
        <input type="email" placeholder="Email" style={{ margin: 10, padding: 10, width: 300 }} required />
        <textarea placeholder="Message" style={{ margin: 10, padding: 10, width: 300, height: 100 }} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
