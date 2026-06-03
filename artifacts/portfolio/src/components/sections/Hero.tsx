import { motion, useReducedMotion } from "framer-motion";
import profileImg from "/bayith.jpeg";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Background blobs + dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(162 60% 40%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[80vh]">

          {/* ── LEFT: Text ── */}
          <div>
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
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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

          {/* ── RIGHT: Image with animations ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center lg:justify-end relative"
          >
            {/* Floating wrapper */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer slow-spinning dashed ring */}
              <motion.svg
                viewBox="0 0 360 360"
                className="absolute inset-[-28px] w-[calc(100%+56px)] h-[calc(100%+56px)] pointer-events-none"
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              >
                <circle
                  cx="180" cy="180" r="168"
                  fill="none"
                  stroke="hsl(162 60% 42%)"
                  strokeWidth="1.5"
                  strokeDasharray="8 18"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </motion.svg>

              {/* Inner counter-spinning accent ring */}
              <motion.svg
                viewBox="0 0 360 360"
                className="absolute inset-[-14px] w-[calc(100%+28px)] h-[calc(100%+28px)] pointer-events-none"
                animate={shouldReduceMotion ? {} : { rotate: -360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              >
                <circle
                  cx="180" cy="180" r="168"
                  fill="none"
                  stroke="hsl(38 90% 52%)"
                  strokeWidth="1"
                  strokeDasharray="3 32"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </motion.svg>

              {/* Emerald glow halo behind image */}
              <div className="absolute inset-0 rounded-[40%_60%_55%_45%/45%_55%_60%_40%] bg-primary/20 blur-2xl scale-105" />

              {/* Profile image — organic blob clip */}
              <div
                className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "40% 60% 55% 45% / 45% 55% 60% 40%",
                  border: "2px solid hsl(162 60% 42% / 0.4)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Abdul Bayith"
                  className="w-full h-full object-cover object-top scale-105"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Floating badge — top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 bg-card border border-primary/30 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-sm"
              >
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">Open To Work</p>
              </motion.div>

              {/* Floating badge — bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -left-4 bg-card border border-secondary/30 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-sm"
              >
                <p className="text-[10px] uppercase tracking-widest text-secondary font-semibold">B.Com CA · 2026</p>
              </motion.div>

              {/* Orbiting dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{ width: 0, height: 0 }}
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <div
                  className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(162_60%_42%)]"
                  style={{ top: "-150px", left: "-6px" }}
                />
              </motion.div>

              {/* Second orbiting dot — opposite phase */}
              <motion.div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{ width: 0, height: 0 }}
                animate={shouldReduceMotion ? {} : { rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              >
                <div
                  className="absolute w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_hsl(38_90%_52%)]"
                  style={{ top: "-130px", left: "-4px" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
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
