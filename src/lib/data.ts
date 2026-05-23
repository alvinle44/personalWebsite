// ← Update this whenever your current fav changes
export const currentSong = {
  title: "2 Hard 4 The Radio",
  artist: "Drake",
  album: "For All The Dogs",
  coverUrl: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028e76f09489ebfa31ac920f08",
  spotifyUrl: "https://open.spotify.com/track/7COiiObIVJIdBcW3J43Iy2",
};

export const projects = [
  {
    id: 1,
    title: "ECAD Datasheet RAG Assistant",
    description: "",
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "OpenAI API"],
    github: "https://github.com/alvinle44/ECAD-RAG-Assistant",
    live: null,
    category: "AI/ML",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "NBA Player Prop Prediction System",
    description: "",
    tech: ["Python", "XGBoost", "scikit-learn", "NBA API", "The Odds API"],
    github: "https://github.com/alvinle44/NBA_Sports_Betting",
    live: null,
    category: "AI/ML",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "",
    tech: ["Python", "PyTorch", "LightGCN", "GNN"],
    github: "https://github.com/alvinle44/CS7643-Movie-Magic-LightGCN",
    live: null,
    category: "AI/ML",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "AI Shot Tracking App",
    description: "",
    tech: ["Python", "FastAPI", "React Native", "TypeScript", "YOLOv8", "Roboflow"],
    github: "https://github.com/alvinle44/Basketball-Shot-Tracker-App",
    live: null,
    category: "AI/ML",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["Python", "C/C++", "JavaScript/TypeScript", "Java", "SystemVerilog", "x86 Assembly"],
  },
  {
    category: "ML / AI",
    icon: "Brain",
    items: ["PyTorch", "scikit-learn", "XGBoost", "OpenCV", "YOLOv8", "Transformers", "CNNs", "GNNs", "LLMs", "RAG", "LangChain", "ChromaDB", "NumPy", "pandas"],
  },
  {
    category: "Web / Backend",
    icon: "Globe",
    items: ["React", "React Native", "Next.js", "Node.js", "FastAPI", "Supabase", "gRPC", "REST APIs"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Git", "Docker", "Linux", "PostgreSQL"],
  },
];

export const experience = [
  {
    id: 1,
    role: "M.S. Computer Science",
    company: "Georgia Institute of Technology",
    period: "2024 – Dec 2026",
    type: "education",
    description:
      "Specialization in Machine Learning. GPA: 4.00/4.00. Relevant coursework: Machine Learning, Deep Learning, NLP, Agentic AI, Computer Networks, OS, Software Design, AI Ethics, Knowledge-Based AI.",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Agentic AI"],
  },
  {
    id: 2,
    role: "STEM Intern",
    company: "General Infomatics Inc. — TRMCi Program",
    period: "Summer 2026",
    type: "work",
    description:
      "DoD-affiliated TRMCi Summer 2026 Internship at Point Mugu, CA. Will perform software testing and evaluation with AI/ML techniques, validating system behavior and contributing to quality assurance for defense systems.",
    skills: ["Software Testing", "AI/ML", "DoD Systems", "QA"],
  },
  {
    id: 3,
    role: "Biomedical Research Intern",
    company: "UC Irvine — Alzheimer's Disease Lab",
    period: "Aug 2022 – Jun 2023",
    type: "work",
    description:
      "Automated ImageJ (Jython) image analysis scripts, improving pipeline throughput by 60%. Analyzed 1,000+ microscopy images across a 4-person team; designed experiments and presented quantitative findings on protein PGC1-α in transgenic mouse neurons.",
    skills: ["Python/Jython", "ImageJ", "Data Analysis", "Research"],
  },
  {
    id: 4,
    role: "B.S. Biological Sciences",
    company: "University of California, Irvine",
    period: "Sept 2019 – Jun 2023",
    type: "education",
    description:
      "Dean's Honor List all quarters. GPA: 3.92/4.00. Developed a strong foundation in the sciences before transitioning into computer science and software engineering.",
    skills: ["Biology", "Research Methods", "Dean's Honor List"],
  },
];
