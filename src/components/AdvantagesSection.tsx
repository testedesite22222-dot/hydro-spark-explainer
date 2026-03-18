import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const advantages = [
  "Fonte de energia renovável — a água é continuamente reposta pelo ciclo hidrológico",
  "Baixa emissão de gases de efeito estufa durante a operação, comparada a termelétricas",
  "Longa vida útil das usinas (50 a 100 anos) com custos operacionais relativamente baixos",
  "Capacidade de armazenamento de energia no reservatório, permitindo regulação da oferta",
  "Contribui para o controle de enchentes e abastecimento de água para irrigação",
  "Geração de empregos e desenvolvimento econômico regional durante construção e operação",
];

const disadvantages = [
  "Alto custo inicial de construção e longo prazo para conclusão das obras",
  "Impacto ambiental significativo: alagamento de extensas áreas de florestas e ecossistemas",
  "Deslocamento de comunidades ribeirinhas e populações indígenas",
  "Alteração do regime hidrológico dos rios, afetando fauna aquática e ciclos de reprodução de peixes",
  "Vulnerabilidade a secas e mudanças climáticas, que reduzem o nível dos reservatórios",
  "Emissão de metano (CH₄) pela decomposição de matéria orgânica submersa nos reservatórios tropicais",
];

const AdvantagesSection = () => {
  return (
    <SectionWrapper
      id="vantagens"
      title="Vantagens e Desvantagens"
      subtitle="Uma análise equilibrada dos impactos ambientais, econômicos e sociais"
    >
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Vantagens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-6 lg:p-8 border-l-4 border-nature"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-nature/10 flex items-center justify-center">
              <ThumbsUp className="w-5 h-5 text-nature" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">Vantagens</h3>
          </div>
          <ul className="space-y-4" role="list">
            {advantages.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-nature flex-shrink-0" aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Desvantagens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-card rounded-xl p-6 lg:p-8 border-l-4 border-destructive"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <ThumbsDown className="w-5 h-5 text-destructive" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">Desvantagens</h3>
          </div>
          <ul className="space-y-4" role="list">
            {disadvantages.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-destructive flex-shrink-0" aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AdvantagesSection;
