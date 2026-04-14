import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border bg-card">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading font-semibold gradient-text">{"<Vishwas />"}</p>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Vishwas Rajput. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://github.com/vishwas8671" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/vishwasrajput" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:vishwas7906@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
