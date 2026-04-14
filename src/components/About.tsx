import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Full Stack Dev", desc: "MERN Stack expertise", color: "gradient-bg" },
    { icon: Brain, label: "AI/ML Student", desc: "CSE-AIML specialization", color: "gradient-accent-bg" },
    { icon: Rocket, label: "Problem Solver", desc: "250+ DSA problems", color: "gradient-warm-bg" },
  ];

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            I am a Computer Science student specializing in Artificial Intelligence and Machine Learning at ABES Engineering College, Ghaziabad.
            I focus on Data Structures & Algorithms and Full Stack Web Development using the MERN stack. I enjoy building scalable web applications and solving challenging algorithmic problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 card-shadow border border-border hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${h.color} flex items-center justify-center mb-4`}>
                <h.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{h.label}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
