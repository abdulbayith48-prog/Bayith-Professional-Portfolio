export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-muted-foreground py-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl tracking-wider text-foreground font-bold">
            Abdul Bayith.
          </div>

          <div className="flex gap-6 text-xs tracking-wider uppercase">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#expertise" className="hover:text-primary transition-colors">Skills</a>
            <a href="#works" className="hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="text-xs font-mono opacity-50">
            &copy; {currentYear} Abdul Bayith. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
