import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowDown, Droplets, Waves, Cog, Zap } from "lucide-react";

const stepIcons = [Droplets, Waves, Cog, Zap];

const steps = [
  {
    label: "Energia Potencial Gravitacional",
    formula: "Ep = m · g · h",
    explanation:
      "A água armazenada no reservatório em grande altitude possui energia potencial gravitacional, que depende da massa de água (m), da aceleração da gravidade (g ≈ 9,8 m/s²) e da altura da queda (h). Quanto maior o desnível e o volume de água, maior a energia disponível.",
    color: "bg-water-deep text-primary-foreground",
  },
  {
    label: "Energia Cinética",
    formula: "Ec = ½ · m · v²",
    explanation:
      "Ao ser liberada pelos condutos forçados, a água acelera devido à gravidade, convertendo sua energia potencial em energia cinética. A velocidade da água aumenta conforme ela desce, obedecendo ao princípio da conservação de energia.",
    color: "bg-water-mid text-primary-foreground",
  },
  {
    label: "Energia Mecânica (Rotação)",
    formula: "τ = F · r",
    explanation:
      "A água em alta velocidade atinge as pás da turbina, transferindo sua energia cinética para o eixo da turbina sob forma de rotação (energia mecânica). O torque (τ) depende da força exercida pela água e do raio da turbina. A turbina pode girar a até 90 rotações por minuto.",
    color: "bg-nature text-secondary-foreground",
  },
  {
    label: "Energia Elétrica",
    formula: "ε = -dΦ/dt (Lei de Faraday)",
    explanation:
      "O eixo da turbina está acoplado ao rotor do gerador elétrico. A rotação do rotor (com eletroímãs) dentro do estator (com bobinas de cobre) varia o fluxo magnético, induzindo uma força eletromotriz (fem) e gerando corrente elétrica alternada, conforme a Lei de Faraday.",
    color: "bg-energy-glow text-accent-foreground",
  },
];

const ConversionSection = () => {
  return (
    <SectionWrapper
      id="conversao"
      title="Processo de Conversão de Energia"
      subtitle="Acompanhe passo a passo como a energia potencial da água se transforma em eletricidade"
    >
      <div className="max-w-2xl mx-auto space-y-0">
        {steps.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <div key={step.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`rounded-xl p-6 ${step.color} relative overflow-hidden`}
              >
                {/* Decorative bg icon */}
                <Icon className="absolute top-3 right-3 w-16 h-16 opacity-10" aria-hidden="true" />
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-display font-bold">
                    {i + 1}
                  </span>
                  <p className="font-display font-semibold text-sm uppercase tracking-wider opacity-70">
                    Etapa {i + 1}
                  </p>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{step.label}</h3>
                <code className="inline-block px-3 py-1.5 rounded-lg bg-foreground/10 text-sm font-mono mb-3 backdrop-blur-sm">
                  {step.formula}
                </code>
                <p className="leading-relaxed text-sm opacity-90">{step.explanation}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Efficiency note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto italic"
      >
        ⚡ A eficiência total de uma usina hidrelétrica moderna pode chegar a <strong className="text-foreground">90%</strong> — 
        muito superior à de termelétricas (≈35%) e painéis solares (≈20%).
      </motion.p>
    </SectionWrapper>
  );
};

export default ConversionSection;
