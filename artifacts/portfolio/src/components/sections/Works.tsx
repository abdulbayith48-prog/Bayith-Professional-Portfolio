import { motion } from "framer-motion";
import { ArrowUpRight, Landmark, FileSpreadsheet } from "lucide-react";

const works = [
  {
    title: "Online Banking System",
    category: "Academic Project",
    year: "2024",
    icon: <Landmark size={40} strokeWidth={1} />,
    color: "from-primary/20 to-primary/5",
    accentColor: "bg-primary/10 text-primary",
    description: "Designed and analyzed an online banking system as part of academic coursework. Covered transaction workflows, user account management, and data security concepts. Documented system requirements and produced structured project reports.",
    tags: ["System Design", "Transaction Workflows", "User Account Management", "Data Security", "Project Documentation"]
  },
  {
    title: "MS Excel in Accounting",
    category: "Academic Project",
    year: "2024",
    icon: <FileSpreadsheet size={40} strokeWidth={1} />,
    color: "from-secondary/20 to-secondary/5",
    accentColor: "bg-secondary/10 text-secondary-foreground",
    description: "Applied advanced MS Excel functions including SUM, AVERAGE, COUNT, and VLOOKUP for accounting tasks. Prepared ledger entries and performed financial data analysis to derive business insights from raw datasets.",
    tags: ["MS Excel", "SUM / AVERAGE / COUNT", "VLOOKUP", "Ledger Entries", "Financial Analysis"]
  }
];

export function Works() {
  return (
    <section id="works" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
                Projects
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Academic work that proves the craft.
            </h3>
          </motion.div>
        </div>

        <div className="space-y-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`card-project-${index}`}
              className="group rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`aspect-[4/3] md:aspect-auto bg-gradient-to-br ${work.color} flex items-center justify-center relative min-h-[200px]`}>
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, hsl(162 60% 40%) 1px, transparent 0)",
                      backgroundSize: "30px 30px"
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.4 }}
                    className={`w-20 h-20 rounded-2xl ${work.accentColor} flex items-center justify-center relative z-10`}
                  >
                    {work.icon}
                  </motion.div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-muted-foreground/60">{work.year}</span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">{work.category}</p>
                      <h4 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {work.title}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:border-primary group-hover:text-primary ml-4 flex-shrink-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        data-testid={`tag-project-${index}-${idx}`}
                        className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
