import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
                Contact
              </h2>
              <div className="w-6 h-[2px] bg-primary" />
            </div>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Let's connect.
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I am open to internships, entry-level opportunities, and academic collaborations in accounting, finance, or data management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-4"
            >
              <a
                href="mailto:abdulbayith48@gmail.com"
                data-testid="link-email"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-400 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">abdulbayith48@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:9566017149"
                data-testid="link-phone"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-foreground group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-400 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">Phone</p>
                  <p className="font-semibold text-foreground">+91 9566017149</p>
                </div>
              </a>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">Availability</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-foreground font-medium text-sm">Open to Opportunities</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Available for internships, part-time roles, and entry-level positions in accounting, finance, or data management.
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              onSubmit={(e) => e.preventDefault()}
              className="p-8 rounded-2xl border border-border bg-card space-y-5"
            >
              <h4 className="font-serif text-xl font-bold text-foreground">Send a message</h4>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Your Name</label>
                <input
                  type="text"
                  data-testid="input-name"
                  className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Your Email</label>
                <input
                  type="email"
                  data-testid="input-email"
                  className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Message</label>
                <textarea
                  data-testid="input-message"
                  className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none h-28 placeholder:text-muted-foreground/50"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button
                type="submit"
                data-testid="button-submit"
                className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={15} />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
