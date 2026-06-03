import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/images/hero-bg.png"
          alt="Abstract Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">
              Creative Professional
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-8"
          >
            Crafting digital <br />
            <span className="italic font-light text-muted-foreground">experiences</span> with
            <br /> precision & soul.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <a
              href="#works"
              className="px-8 py-4 bg-foreground text-background hover:bg-primary transition-colors rounded-full text-sm font-medium uppercase tracking-wider"
            >
              View Selected Works
            </a>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed border-l border-border pl-4">
              I blend technical expertise with artistic sensibility to build memorable interfaces and products.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground rotate-[-90deg] origin-left translate-y-6">Scroll</span>
        <div className="w-[1px] h-16 bg-border overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-primary absolute top-[-50%]"
          />
        </div>
      </motion.div>
    </section>
  );
}
