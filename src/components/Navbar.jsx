import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm ${isActive ? "bg-[#1b2330]" : "hover:bg-[#151a22]"}`;

export default function Navbar() {
  return (
    <nav className="border-b border-[var(--border)] bg-[#12161a]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-[var(--brand)]">
          Muhammad Qutab
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <a href="https://github.com/MuhammadQutab" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/muhammadqutab03" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-white" />
          </a>
        </div>
      </div>
    </nav>
  );
}
