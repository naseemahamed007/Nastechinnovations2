import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.background = darkMode ? "#0a0a0a" : "#f9f9f9";
    document.body.style.color = darkMode ? "#fff" : "#111";
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        padding: "10px 20px",
        borderRadius: 30,
        background: darkMode ? "#ff4c60" : "#111",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
