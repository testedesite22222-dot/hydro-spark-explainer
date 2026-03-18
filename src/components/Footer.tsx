import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10" role="contentinfo">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Droplets className="w-5 h-5 text-water-light" aria-hidden="true" />
          <span className="font-display font-semibold text-primary-foreground">
            Energia Hidrelétrica
          </span>
        </div>
        <p className="text-primary-foreground/50 text-sm">
          Projeto de Física — Energia Hidrelétrica: Da Geração ao Consumo
        </p>
        <p className="text-primary-foreground/40 text-xs mt-2">
          Desenvolvido como material educativo para estudo das transformações energéticas
        </p>
        <p className="text-primary-foreground/30 text-xs mt-4">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
