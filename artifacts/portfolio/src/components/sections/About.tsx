import { motion } from "framer-motion";

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
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10 max-w-md mx-auto lg:mx-0">
              <img
                src="/images/about-portrait.png"
                alt="Abdul Bayith"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 w-full h-full border border-primary/30 rounded-sm z-0 hidden md:block" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-muted rounded-full z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              The Philosophy
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Design is not just what it looks like, but how it feels.
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am Abdul Bayith, a designer and engineer driven by the intersection of beauty and logic. Rooted in a culture that values intricate craftsmanship and profound warmth, I bring those same principles to the digital realm.
              </p>
              <p>
                To me, an interface is a space of hospitality. It should welcome the user, guide them effortlessly, and leave a lasting impression of care. I reject the sterile and the generic in favor of the considered and the crafted.
              </p>
              <p>
                Whether architecting a complex system or refining a micro-interaction, my goal remains the same: to create work that resonates on a human level.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-4xl font-serif text-foreground">10+</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">Years of Craft</p>
              </div>
              <div className="w-[1px] h-12 bg-border" />
              <div>
                <p className="text-4xl font-serif text-foreground">50+</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">Projects Shipped</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
