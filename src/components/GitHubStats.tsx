import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const GitHubStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const username = "vishwas8671";

  return (
    <section id="github" className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
        >
          <Github className="inline mr-2 mb-1" size={32} />
          GitHub <span className="gradient-text">Stats</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-10"
        >
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            @{username}
          </a>
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card rounded-2xl p-4 card-shadow border border-border overflow-hidden flex items-center justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="GitHub Stats"
              loading="lazy"
              className="w-full max-w-md"
            />
          </div>
          <div className="bg-card rounded-2xl p-4 card-shadow border border-border overflow-hidden flex items-center justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="Top Languages"
              loading="lazy"
              className="w-full max-w-md"
            />
          </div>
          <div className="md:col-span-2 bg-card rounded-2xl p-4 card-shadow border border-border overflow-hidden flex items-center justify-center">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=00000000`}
              alt="GitHub Streak"
              loading="lazy"
              className="w-full max-w-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
