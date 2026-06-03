import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(162 60% 40%) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-medium tracking-[0.25em] uppercase text-xs">
              Aspiring Accountant & Data Professional
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-foreground leading-[1.0] tracking-tight mb-6"
          >
            Abdul
            <br />
            <span className="italic font-normal text-primary">Bayith</span>
            <span className="text-foreground"> A</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="origin-left h-[2px] w-32 bg-gradient-to-r from-primary to-secondary mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <a
              href="#about"
              data-testid="button-view-works"
              className="group px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full text-sm font-semibold uppercase tracking-wider flex items-center gap-2"
            >
              View My Profile
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              data-testid="link-contact"
              className="px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all rounded-full text-sm font-semibold uppercase tracking-wider"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex items-center gap-10"
          >
            <div data-testid="stat-degree">
              <p className="text-2xl font-serif font-bold text-foreground">B.Com CA</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Degree</p>
            </div>
            <div className="w-[1px] h-10 bg-border" />
            <div data-testid="stat-year">
              <p className="text-2xl font-serif font-bold text-foreground">2026</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Graduating</p>
            </div>
            <div className="w-[1px] h-10 bg-border" />
            <div data-testid="stat-projects">
              <p className="text-2xl font-serif font-bold text-foreground">2+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Projects</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-border overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-primary absolute top-[-50%]"
          />
        </div>
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
      </motion.div>
    </section>
  );
}
