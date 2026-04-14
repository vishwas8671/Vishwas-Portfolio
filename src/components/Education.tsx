import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    title: "B.Tech – CSE (AI/ML)",
    institution: "ABES Engineering College, Ghaziabad",
    period: "2023 – 2027",
    score: "CGPA: 8.026",
    color: "gradient-bg",
  },
  {
    icon: School,
    title: "Class XII – CBSE",
    institution: "Jawahar Navodaya Vidyalaya, Bijnor",
    period: "2022 – 2023",
    score: "87%",
    color: "gradient-accent-bg",
  },
  {
    icon: School,
    title: "Class X – CBSE",
    institution: "Jawahar Navodaya Vidyalaya, Bijnor",
    period: "2020 – 2021",
    score: "99.6%",
    color: "gradient-warm-bg",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
        >
          My <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 gradient-bg" />

          {educationData.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full gradient-bg -translate-x-1/2 z-10 ring-4 ring-background" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-card rounded-2xl p-5 card-shadow border border-border hover:scale-[1.02] transition-transform duration-300">
                  <div className={`inline-flex w-10 h-10 rounded-lg ${edu.color} items-center justify-center mb-3`}>
                    <edu.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{edu.title}</h3>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm flex-wrap justify-start">
                    <span className="gradient-bg text-primary-foreground px-3 py-0.5 rounded-full text-xs font-medium">{edu.period}</span>
                    <span className="text-primary font-semibold">{edu.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
