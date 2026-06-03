import { motion } from "framer-motion";
import { GraduationCap, MapPin, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="relative z-10 text-center p-12">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-serif font-bold text-primary">AB</span>
                  </div>
                  <p className="font-serif text-2xl font-bold text-foreground">Abdul Bayith</p>
                  <p className="text-sm text-muted-foreground mt-2 tracking-wider uppercase">B.Com CA Student</p>
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                      <GraduationCap size={14} className="text-primary" />
                      <span>Dr. Zakir Husain College</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                      <Globe size={14} className="text-primary" />
                      <span>English & Tamil</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase shadow-lg"
                data-testid="badge-available"
              >
                Open to Opportunities
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase shadow-lg"
                data-testid="badge-degree"
              >
                Graduating 2026
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
                About Me
              </h2>
            </div>

            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Detail-oriented. Data-driven. Ready to contribute.
            </h3>

            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                I am Abdul Bayith, a B.Com Computer Applications student at Dr. Zakir Husain College, with a strong foundation in accounting principles, data management, and financial analysis.
              </p>
              <p>
                My academic journey has equipped me with hands-on skills in Microsoft Excel, bookkeeping, and structured data analysis — skills I've applied to real-world academic projects including an Online Banking System and an MS Excel-based accounting analysis.
              </p>
              <p>
                I am a quick learner and team player, eager to bring my analytical mindset and technical knowledge into a professional environment where I can grow as an accounting and finance professional.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "3", label: "Years of Study" },
                { value: "2", label: "Projects Completed" },
                { value: "8+", label: "Core Skills" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  data-testid={`stat-about-${i}`}
                  className="text-center p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <p className="text-3xl font-serif font-bold text-primary">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
