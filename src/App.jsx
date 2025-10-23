import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  return (
    <div className="bg-[var(--bg)] text-[var(--muted)] min-h-screen">
      <Home />
      <Projects />
      <About />
    </div>
  );
}
