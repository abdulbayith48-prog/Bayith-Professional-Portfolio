import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Commerce — Computer Applications (B.Com CA)",
    institution: "Dr. Zakir Husain College",
    period: "2023 — 2026",
    description: "Pursuing a degree that combines commerce, accounting, and computer applications. Developing expertise in financial accounting, data management, and digital tools used in modern business environments.",
    icon: <GraduationCap size={20} strokeWidth={1.5} />
  }
];

const highlights = [
  {
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    title: "Academic Focus",
    desc: "Accounting principles, financial data analysis, and computer applications in business"
  },
  {
    icon: <Award size={20} strokeWidth={1.5} />,
    title: "Core Competency",
    desc: "Bridging accounting knowledge with technology skills including Excel, data entry, and management"
  }
];

export function Experience() {
  return (
    <section id="education" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
                Education
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Building the foundation, one semester at a time.
            </h3>
            <p className="text-background/65 leading-relaxed">
              Currently in my third year of B.Com CA, combining the rigour of commerce with the practicality of computer applications — preparing for a career in accounting, finance, and data.
            </p>

            <div className="mt-12 space-y-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  data-testid={`card-highlight-${i}`}
                  className="flex gap-4 p-4 rounded-xl bg-background/5 border border-background/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-background/90 text-sm">{h.title}</p>
                    <p className="text-background/55 text-xs mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  data-testid={`card-education-${index}`}
                  className="border-t border-background/15 pt-8"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                    <h4 className="text-xl md:text-2xl font-serif font-bold">{edu.degree}</h4>
                    <span className="text-primary font-mono text-sm tracking-wider whitespace-nowrap">{edu.period}</span>
                  </div>
                  <div className="text-background/60 uppercase tracking-widest text-xs font-semibold mb-4">
                    {edu.institution}
                  </div>
                  <p className="text-background/55 leading-relaxed text-sm max-w-2xl">
                    {edu.description}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-t border-background/15 pt-8"
              >
                <p className="text-background/60 uppercase tracking-widest text-xs font-semibold mb-4">Languages</p>
                <div className="flex gap-4">
                  {["English", "Tamil"].map((lang, i) => (
                    <span
                      key={i}
                      data-testid={`badge-language-${i}`}
                      className="px-5 py-2 rounded-full border border-background/20 text-background/80 text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
