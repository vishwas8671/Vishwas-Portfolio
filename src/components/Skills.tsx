import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    gradient: "gradient-bg",
    skills: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Web Development",
    gradient: "gradient-accent-bg",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "Core CS",
    gradient: "gradient-warm-bg",
    skills: [
      { name: "Data Structures", level: 92 },
      { name: "Algorithms", level: 88 },
      { name: "Operating Systems", level: 75 },
      { name: "DBMS", level: 78 },
    ],
  },
  {
    title: "Tools",
    gradient: "gradient-bg",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "AWS (Basics)", level: 55 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1 + ci * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 card-shadow border border-border"
            >
              <h3 className="font-heading font-semibold text-lg mb-5 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${cat.gradient}`} />
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.3 + ci * 0.15 + si * 0.1, duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${cat.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
