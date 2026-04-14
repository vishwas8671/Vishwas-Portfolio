import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/vishwas8671/",
    color: "from-[hsl(35,95%,50%)] to-[hsl(25,95%,45%)]",
    icon: "⚡",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/vishwas7906",
    color: "from-[hsl(30,60%,40%)] to-[hsl(20,70%,35%)]",
    icon: "👨‍🍳",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
    color: "from-[hsl(120,60%,35%)] to-[hsl(140,60%,30%)]",
    icon: "🧑‍💻",
  },
];

const CodingProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coding" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
        >
          Coding <span className="gradient-text">Profiles</span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Trophy className="text-primary" size={28} />
          <span className="text-2xl md:text-3xl font-heading font-bold gradient-text">250+</span>
          <span className="text-muted-foreground text-lg">DSA Problems Solved</span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="group bg-card rounded-2xl p-6 card-shadow border border-border hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-heading font-semibold text-lg mb-2">{p.name}</h3>
              <div className="flex items-center justify-center gap-1 text-primary text-sm">
                <span>Visit Profile</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
