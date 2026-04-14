import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "vishwas7906@gmail.com", href: "mailto:vishwas7906@gmail.com", gradient: "gradient-bg" },
  { icon: Phone, label: "Phone", value: "+91 9568361184", href: "tel:+919568361184", gradient: "gradient-accent-bg" },
  { icon: Linkedin, label: "LinkedIn", value: "vishwasrajput", href: "https://linkedin.com/in/vishwasrajput", gradient: "gradient-warm-bg" },
  { icon: Github, label: "GitHub", value: "vishwas8671", href: "https://github.com/vishwas8671", gradient: "gradient-bg" },
  { icon: MapPin, label: "Location", value: "Ghaziabad, U.P., India", href: "#", gradient: "gradient-accent-bg" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-md mx-auto"
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-2xl p-5 card-shadow border border-border hover:scale-105 transition-transform duration-300 flex items-center gap-4"
            >
              <div className={`w-11 h-11 rounded-xl ${c.gradient} flex items-center justify-center flex-shrink-0`}>
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="font-medium text-sm truncate">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
