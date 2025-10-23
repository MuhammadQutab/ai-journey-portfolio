import { motion } from "framer-motion";
import { FaGithub, FaVideo } from "react-icons/fa";

export default function ProjectCard({ title, desc, tech, github, video, img }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-[#12161a] border border-[var(--border)] rounded-xl overflow-hidden shadow-lg"
    >
      {img && <img src={img} alt={title} className="w-full h-auto max-h-72 md:max-h-80 object-contain rounded-lg mb-5 bg-black/20"
  loading="lazy"/>}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[var(--brand)]">{title}</h3>
        <p className="text-sm text-[var(--muted)] mt-2">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 bg-[#0e1216] border border-[var(--border)] rounded-full text-[var(--muted)]">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          <a className="inline-flex items-center gap-2 px-3 py-2 bg-[var(--brand)] text-black rounded-md font-semibold"
             href={github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          {video && (
            <a className="inline-flex items-center gap-2 px-3 py-2 border border-[var(--brand)] text-[var(--brand)] rounded-md"
               href={video} target="_blank" rel="noreferrer">
              <FaVideo /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}