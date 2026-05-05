import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import profileImg from "@/assets/vishwas-photo-g.jpeg";

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
  >
    {/* Decorative blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
    <div
      className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float"
      style={{ animationDelay: "1.5s" }}
    />
    <div
      className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float"
      style={{ animationDelay: "0.8s" }}
    />

    <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10 pt-24">
      
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8"
      >
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
          <img
            src={profileImg}
            alt="Vishwas Rajput"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
          <span className="text-primary-foreground text-xs">✓</span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4"
      >
        Hi, I'm <span className="gradient-text">Vishwas</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground font-medium mb-2"
      >
        MERN Stack Developer • DSA Enthusiast • CSE-AIML Student
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="text-muted-foreground max-w-xl mb-8"
      >
        Building scalable web applications and solving complex algorithmic problems
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {/* Projects */}
        <a
          href="#projects"
          className="gradient-bg text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <FolderOpen size={18} /> View Projects
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="gradient-accent-bg text-accent-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Download size={18} /> My Resume
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="border-2 border-primary text-primary px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Mail size={18} /> Contact Me
        </a>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="animate-bounce text-muted-foreground" />
      </motion.div>
    </div>
  </section>
);

export default Hero;