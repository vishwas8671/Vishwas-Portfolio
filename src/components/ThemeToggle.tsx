import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full gradient-bg p-0.5 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div
        className={`w-6 h-6 rounded-full bg-card flex items-center justify-center transition-transform duration-300 ${
          dark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {dark ? <Moon size={14} className="text-primary" /> : <Sun size={14} className="text-primary" />}
      </div>
    </button>
  );
};

export default ThemeToggle;
