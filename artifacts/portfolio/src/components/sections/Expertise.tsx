import { motion } from "framer-motion";
import { Calculator, Monitor, Database } from "lucide-react";

const disciplines = [
  {
    title: "Accounting & Finance",
    icon: <Calculator size={30} strokeWidth={1.5} />,
    description: "Strong foundational knowledge in accounting principles, bookkeeping, and financial data analysis — gained through academic coursework and applied projects.",
    skills: ["Accounting Principles", "Bookkeeping", "Financial Data Analysis", "Ledger Entries"]
  },
  {
    title: "Microsoft Office Suite",
    icon: <Monitor size={30} strokeWidth={1.5} />,
    description: "Proficient in MS Excel with advanced functions for data analysis and reporting. Skilled in MS Word for documentation and MS PowerPoint for presentations.",
    skills: ["MS Excel (SUM, AVERAGE, COUNT, VLOOKUP)", "MS Word", "MS PowerPoint", "Data Reporting"]
  },
  {
    title: "Data & Communication",
    icon: <Database size={30} strokeWidth={1.5} />,
    description: "Hands-on experience in data entry, data management, and internet-based communication. Strong written and verbal communication in both English and Tamil.",
    skills: ["Data Entry & Management", "Internet & Email", "Written Communication", "Verbal Communication"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-primary" />
            <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
              Skills & Expertise
            </h2>
            <div className="w-6 h-[2px] bg-primary" />
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            A toolkit built for finance and data.
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {disciplines.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-testid={`card-skill-${index}`}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="text-xs font-medium tracking-wide text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border"
        >
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium">All Skills at a Glance</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "MS Excel", "MS Word", "MS PowerPoint", "Accounting", "Bookkeeping",
              "Financial Data Analysis", "Data Entry", "Data Management",
              "Internet & Email", "Written Communication", "Verbal Communication",
              "Quick Learner", "Team Player"
            ].map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                data-testid={`badge-skill-${i}`}
                className="px-4 py-1.5 rounded-full border border-border bg-background text-foreground/80 text-xs font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
