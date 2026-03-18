import { Droplets, Users, GraduationCap, School, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-14" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Droplets className="w-6 h-6 text-water-light" aria-hidden="true" />
          <span className="font-display font-bold text-xl text-primary-foreground">
            Energia Hidrelétrica
          </span>
        </div>

        {/* Credits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-water-light" aria-hidden="true" />
              <span className="text-primary-foreground/70 text-xs font-display font-semibold uppercase tracking-wider">
                Projeto por
              </span>
            </div>
            <p className="text-primary-foreground font-display font-semibold">Alana Cristina</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-4 h-4 text-water-light" aria-hidden="true" />
              <span className="text-primary-foreground/70 text-xs font-display font-semibold uppercase tracking-wider">
                Participantes
              </span>
            </div>
            <p className="text-primary-foreground font-display font-semibold">José Lorran</p>
            <p className="text-primary-foreground font-display font-semibold">Fernando</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-water-light" aria-hidden="true" />
              <span className="text-primary-foreground/70 text-xs font-display font-semibold uppercase tracking-wider">
                Professor
              </span>
            </div>
            <p className="text-primary-foreground font-display font-semibold">Patrick</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <School className="w-4 h-4 text-water-light" aria-hidden="true" />
              <span className="text-primary-foreground/70 text-xs font-display font-semibold uppercase tracking-wider">
                Colégio &middot; Turma
              </span>
            </div>
            <p className="text-primary-foreground font-display font-semibold text-sm leading-snug">
              Colégio Estadual Visconde De Itaboraí (CEVI)
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">RJ — Turma 3008</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-20 h-0.5 bg-primary-foreground/15 mx-auto mb-6" aria-hidden="true" />

        <p className="text-primary-foreground/40 text-sm text-center">
          Projeto de Física — Energia Hidrelétrica: Da Geração ao Consumo
        </p>
        <p className="text-primary-foreground/25 text-xs text-center mt-2">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
