import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Design Engineer",
    company: "Nexus Creative",
    period: "2021 — Present",
    description: "Leading the bridge between design and engineering. Architecting scalable frontend solutions while ensuring pixel-perfect execution of brand identities."
  },
  {
    role: "Product Designer",
    company: "Studio Serif",
    period: "2018 — 2021",
    description: "Directed visual design for premium e-commerce and fintech clients. Established design systems that reduced engineering handoff friction."
  },
  {
    role: "Frontend Developer",
    company: "Ascent Digital",
    period: "2015 — 2018",
    description: "Built interactive web applications for early-stage startups. Focused heavily on animation, performance, and accessibility."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              A history of evolution.
            </h3>
            <p className="text-background/70 leading-relaxed text-lg">
              My career has been a continuous pendulum swing between code and canvas. I believe the best products are built by those who understand both the medium and the message.
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="border-t border-background/20 pt-8"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                    <h4 className="text-2xl font-serif">{exp.role}</h4>
                    <span className="text-primary font-mono text-sm tracking-wider">{exp.period}</span>
                  </div>
                  <div className="text-background/80 uppercase tracking-widest text-xs font-medium mb-4">
                    {exp.company}
                  </div>
                  <p className="text-background/60 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
