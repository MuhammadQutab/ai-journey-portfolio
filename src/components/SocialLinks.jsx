import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 text-2xl">
      <a href="https://github.com/MuhammadQutab" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub className="hover:text-white" />
      </a>
      <a href="https://www.linkedin.com/in/muhammadqutab03" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="hover:text-white" />
      </a>
      <a href="mailto:muhammadqutab6@gmail.com" aria-label="Email">
        <FaEnvelope className="hover:text-white" />
      </a>
    </div>
  );
}
