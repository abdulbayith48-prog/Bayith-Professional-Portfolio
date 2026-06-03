import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">
              Let's Collaborate
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-12">
              Have a vision? Let's bring it to life.
            </h3>
            
            <a
              href="mailto:hello@abdulbayith.design"
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-2 group"
            >
              hello@abdulbayith.design
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={32} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          >
            <div className="p-8 bg-muted/50 rounded-sm">
              <h4 className="font-serif text-2xl mb-4">Availability</h4>
              <p className="text-muted-foreground leading-relaxed">
                Currently accepting new projects for Q3 2025. Whether it's a comprehensive brand identity or a complex web application, I'm ready to dive in.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Message</label>
                <textarea 
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-primary transition-colors resize-none h-24"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-4 bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:bg-primary transition-colors">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative noise/texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </section>
  );
}
