import ProjectCard from "../components/ProjectCard";
import roboImg from "../assets/robo.png";
import uniImg from "../assets/uni.png";
import fakeImg from "../assets/fake.png";
import thumbImg from "../assets/thumb.jpeg";

export default function Projects() {
  const projects = [
    {
      title: "RoboTechArm",
      desc: "Vision-assisted robotic arm (Final Year Project) using YOLOv8 for fruit detection, Flask web control, and Firebase command bridge.",
      tech: ["Python","YOLOv8","OpenCV","Flask","Firebase"],
      github: "https://github.com/MuhammadQutab/RoboTechArm",
      video: "https://www.linkedin.com/posts/muhammadqutab03_robotics-computervision-yolov8-activity-7386506168401199105-nUgW",
      img: roboImg
    },
    {
      title: "University Recommender System",
      desc: "Flask + scikit-learn app that recommends universities based on marks, fee & interest; Gemini suggests 3 career paths per department.",
      tech: ["Flask","Scikit-learn","Pandas","Gemini API","SQLAlchemy"],
      github: "https://github.com/MuhammadQutab/university-recommender-system",
      video: "https://www.linkedin.com/posts/muhammadqutab03_flask-machinelearning-generativeai-activity-7386554628060102656-g4DL",
      img: uniImg
    },
    {
      title: "Fake News Detector",
      desc: "DistilBERT-based NLP classifier with Streamlit UI; supports single-text predictions and CSV batch inference.",
      tech: ["DistilBERT","Transformers","NLP","Streamlit"],
      github: "https://github.com/MuhammadQutab/fake-news-detector",
      video: "https://www.linkedin.com/posts/muhammadqutab03_python-nlp-transformers-activity-7384967969140891648-dyit",
      img: fakeImg
    },
    {
      title: "Thumb Gesture Servo",
      desc: "Gesture-controlled servo using MediaPipe hand landmarks for smooth 180° rotation; low-cost HMI for robotics.",
      tech: ["MediaPipe","OpenCV","Arduino"],
      github: "https://github.com/MuhammadQutab/ThumbGestureServo",
      video: "https://www.linkedin.com/posts/muhammadqutab03_arduino-python-opencv-activity-7386505275572215808-iWU1",
      img: thumbImg
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Projects</h1>
      <p className="text-[var(--muted)] mb-8">A selection of my AI, automation, and computer vision projects.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
