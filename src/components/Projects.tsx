import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Server, Shield, Database, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Smart Expense Tracker",
    tech: "MERN Stack",
    description:
      "Full-stack expense management application to track income and expenses with real-time visualization. Features JWT authentication, REST APIs with Node.js & Express.js, and MongoDB integration.",
    features: [
      { icon: Shield, text: "JWT Auth" },
      { icon: Server, text: "REST APIs" },
      { icon: Database, text: "MongoDB" },
      { icon: BarChart3, text: "Analytics" },
    ],
    gradient: "gradient-bg",
    github: "https://github.com/vishwas8671",
    live: "#",
  },
  {
    title: "Personalized Learning Management System",
    tech: "MERN Stack",
    description:
      "Full-stack LMS with personalized course recommendations based on user activity and performance. Role-based access control (Admin, Instructor, Student) with JWT authentication.",
    features: [
      { icon: Shield, text: "RBAC" },
      { icon: Server, text: "REST APIs" },
      { icon: Database, text: "MongoDB" },
      { icon: BarChart3, text: "Progress" },
    ],
    gradient: "gradient-accent-bg",
    github: "https://github.com/vishwas8671",
    live: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden card-shadow border border-border group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className={`h-2 ${p.gradient}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-semibold text-xl">{p.title}</h3>
                  <span className={`${p.gradient} text-primary-foreground px-3 py-1 rounded-full text-xs font-medium`}>
                    {p.tech}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {p.features.map((f) => (
                    <div key={f.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <f.icon size={14} className="text-primary" />
                      {f.text}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium border border-border rounded-lg px-4 py-2 hover:bg-muted transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={p.live}
                    className="flex items-center gap-2 text-sm font-medium gradient-bg text-primary-foreground rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
