import { motion } from "framer-motion";
import { PenTool, Code, Eye } from "lucide-react";

const disciplines = [
  {
    title: "Visual Design",
    icon: <PenTool size={32} strokeWidth={1.5} />,
    description: "Crafting distinct visual identities and interfaces that communicate purpose and evoke emotion. Typography, color theory, and spatial rhythm are my tools.",
    skills: ["UI/UX Design", "Brand Identity", "Design Systems", "Typography"]
  },
  {
    title: "Engineering",
    icon: <Code size={32} strokeWidth={1.5} />,
    description: "Building robust, performant applications. I treat code as a medium for design, ensuring the underlying architecture is as elegant as the surface.",
    skills: ["React & Next.js", "TypeScript", "Animation", "Performance"]
  },
  {
    title: "Creative Direction",
    icon: <Eye size={32} strokeWidth={1.5} />,
    description: "Guiding the holistic vision of a product from conception to launch. Ensuring every touchpoint aligns with the core narrative and business goals.",
    skills: ["Product Strategy", "Art Direction", "Prototyping", "User Research"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Disciplines
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            A harmonious blend of form and function.
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {disciplines.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-10 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>
              <h4 className="text-2xl font-serif text-foreground mb-4">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="text-sm font-medium tracking-wide uppercase text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
