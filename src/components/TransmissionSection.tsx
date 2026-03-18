import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Factory, Zap, Home, Building2 } from "lucide-react";

const stages = [
  {
    icon: Factory,
    title: "Geração na Usina",
    desc: "A energia é gerada na usina a uma tensão de aproximadamente 13.800 V (13,8 kV). Essa tensão ainda é relativamente baixa para o transporte a longas distâncias.",
  },
  {
    icon: Zap,
    title: "Subestação Elevadora",
    desc: "Transformadores elevam a tensão para 230 kV a 765 kV. A alta tensão reduz a corrente elétrica e, consequentemente, as perdas por aquecimento nos cabos (Efeito Joule: P = R · I²).",
  },
  {
    icon: Building2,
    title: "Linhas de Transmissão",
    desc: "Torres metálicas de até 45 metros sustentam os cabos de alumínio-aço que transportam a energia por centenas de quilômetros. No Brasil, o sistema interligado nacional (SIN) conecta quase todo o país.",
  },
  {
    icon: Home,
    title: "Distribuição ao Consumidor",
    desc: "Subestações rebaixadoras reduzem a tensão gradualmente: de 138 kV para 13,8 kV e depois para 127/220 V, a tensão que chega às tomadas das residências e estabelecimentos comerciais.",
  },
];

const TransmissionSection = () => {
  return (
    <SectionWrapper
      id="transmissao"
      title="Transmissão e Distribuição"
      subtitle="Como a eletricidade percorre centenas de quilômetros até chegar à sua casa"
      alternate
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Connection line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"
          aria-hidden="true"
        />
        <div className="space-y-8 md:space-y-12">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`md:flex items-center gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div className="flex-1 glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stage.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{stage.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
              </div>
              {/* Timeline dot */}
              <div
                className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background flex-shrink-0"
                aria-hidden="true"
              />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TransmissionSection;
