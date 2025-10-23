import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Muhammad Qutab
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 text-lg text-[var(--muted)]"
          >
            AI & Automation Engineer • Building Intelligent Systems through Code & Creativity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-[var(--muted)] text-base"
          >
            <span className="mr-2">I am</span>
            <ReactTyped
              strings={[
                "an AI Engineer",
                "an Automation Developer",
                "a Problem Solver",
                "a Machine Learning Enthusiast"
              ]}
              typeSpeed={45}
              backSpeed={30}
              backDelay={1400}
              loop
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-6"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-[#12161a] border border-[var(--border)] rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold">Recent Highlights</h2>
          <ul className="list-disc pl-6 mt-3 text-[var(--muted)]">
            <li>Final Year Project: RoboTechArm — YOLOv8-based robotic arm with Flask control & Firebase</li>
            <li>University Recommender System — ML + Gemini career suggestions</li>
            <li>Fake News Detector — DistilBERT + Streamlit</li>
            <li>Thumb Gesture Servo — MediaPipe + Arduino</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
