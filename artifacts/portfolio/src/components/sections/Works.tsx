import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Aura Platform",
    category: "Product Design & Engineering",
    image: "/images/project-1.png",
    year: "2023"
  },
  {
    title: "Maison Brand Identity",
    category: "Art Direction & Branding",
    image: "/images/project-2.png",
    year: "2022"
  },
  {
    title: "Lumina Mobile",
    category: "Mobile Experience",
    image: "/images/project-3.png",
    year: "2024"
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
            <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Selected Works
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Proof of passion.
            </h3>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="group flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-foreground hover:text-primary transition-colors"
          >
            View All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="space-y-24 md:space-y-32">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm mb-8 aspect-[16/9] md:aspect-[21/9] bg-muted relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background/90 backdrop-blur flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight size={24} className="text-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start border-b border-border pb-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">{work.title}</h4>
                  <p className="text-muted-foreground uppercase tracking-wider text-xs font-medium">{work.category}</p>
                </div>
                <span className="text-foreground font-serif text-lg">{work.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
