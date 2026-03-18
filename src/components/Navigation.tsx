import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";

const navItems = [
  { href: "#introducao", label: "Introdução" },
  { href: "#componentes", label: "Componentes" },
  { href: "#conversao", label: "Conversão" },
  { href: "#transmissao", label: "Transmissão" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#diagramas", label: "Diagramas" },
  { href: "#conclusao", label: "Conclusão" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-display font-bold text-primary text-lg">
          <Droplets className="w-6 h-6" aria-hidden="true" />
          <span className="hidden sm:inline">Energia Hidrelétrica</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="menubar">
          {navItems.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                onClick={(e) => handleClick(e, item.href)}
                className="px-3 py-2 rounded-md text-sm font-display font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-foreground/70 hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Abrir menu de navegação"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-card border-t border-border/30"
          >
            <ul className="p-4 space-y-1" role="menu">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <a
                    href={item.href}
                    role="menuitem"
                    onClick={(e) => handleClick(e, item.href)}
                    className="block px-4 py-3 rounded-md font-display font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
