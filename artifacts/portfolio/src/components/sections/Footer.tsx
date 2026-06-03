export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background/80 py-12 border-t border-background/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl tracking-wider text-background">
            ABDUL BAYITH.
          </div>
          
          <div className="flex gap-8 text-sm tracking-wider uppercase">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
          
          <div className="text-sm font-mono opacity-60">
            &copy; {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
