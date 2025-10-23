export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h1>
      <p className="text-[var(--muted)] leading-relaxed">
        I’m an AI & Automation Engineer focused on building practical, real-world systems across computer vision, NLP, and robotics.
        I love turning ideas into working products—clean code, reproducible ML, and expressive UIs.
        Reach me at <a href="mailto:muhammadqutab6@gmail.com" className="underline">muhammadqutab6@gmail.com</a>.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-[#12161a] border border-[var(--border)] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3 text-[var(--brand)]">Education</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--muted)]">
            <li><span className="text-white font-medium">BS Artificial Intelligence</span> — University of Kotli Azad Jammu & Kashmir (Gold Medalist)</li>
            <li>Final Year Project: RoboTechArm — YOLOv8-based robotic arm with Flask control & Firebase</li>
          </ul>
        </div>
        <div className="bg-[#12161a] border border-[var(--border)] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3 text-[var(--brand)]">Technical Skills</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--muted)]">
            <li><b>Programming:</b> Python, SQL, MATLAB, Power BI, HTML/CSS</li>
            <li><b>Libraries:</b> TensorFlow, PyTorch, Scikit-learn, OpenCV, Pandas, NumPy, MediaPipe, YOLOv8, Transformers</li>
            <li><b>ML & AI:</b> Deep Learning, CV, NLP, Transfer Learning, Evaluation, Preprocessing</li>
            <li><b>Tools:</b> Jupyter, VS Code, GitHub, Colab, Arduino IDE, Firebase, MySQL, Linux/Windows</li>
            <li><b>Specializations:</b> Robotics Control, Model Deployment, Predictive Analytics, APIs, Cloud Basics (AWS/GCP)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
