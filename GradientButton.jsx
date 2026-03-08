import { motion } from "framer-motion";

export default function GradientButton({ text, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      style={{
        background: "linear-gradient(90deg, #ff4c60, #ff8c42)",
        padding: "12px 30px",
        borderRadius: 50,
        color: "#fff",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      {text}
    </motion.button>
  );
}
