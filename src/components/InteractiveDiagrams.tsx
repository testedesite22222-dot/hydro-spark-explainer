import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { X } from "lucide-react";

/* ─── Hotspot data for three interactive diagrams ─── */

interface Hotspot {
  id: string;
  label: string;
  x: string; // percentage
  y: string;
  explanation: string;
}

interface DiagramData {
  title: string;
  description: string;
  svgContent: React.ReactNode;
  hotspots: Hotspot[];
}

const diagrams: DiagramData[] = [
  {
    title: "Estrutura da Barragem e Reservatório",
    description: "Clique nos pontos interativos para aprender sobre cada componente da barragem.",
    svgContent: (
      <svg viewBox="0 0 800 400" className="w-full h-full" role="img" aria-label="Diagrama da estrutura de uma barragem hidrelétrica">
        {/* Sky */}
        <rect x="0" y="0" width="800" height="160" fill="hsl(199, 89%, 85%)" />
        {/* Mountains */}
        <polygon points="0,160 120,60 240,160" fill="hsl(160, 40%, 45%)" />
        <polygon points="180,160 350,40 520,160" fill="hsl(160, 40%, 35%)" />
        <polygon points="450,160 620,70 800,160" fill="hsl(160, 40%, 40%)" />
        {/* Water / Reservoir */}
        <rect x="0" y="160" width="400" height="180" fill="hsl(199, 89%, 48%)" opacity="0.7" />
        <text x="200" y="260" textAnchor="middle" fill="white" fontFamily="Outfit" fontSize="16" fontWeight="600">RESERVATÓRIO</text>
        {/* Dam wall */}
        <polygon points="380,100 420,100 440,340 360,340" fill="hsl(30, 10%, 55%)" stroke="hsl(30, 10%, 40%)" strokeWidth="2" />
        <text x="400" y="230" textAnchor="middle" fill="white" fontFamily="Outfit" fontSize="11" fontWeight="600" transform="rotate(-5, 400, 230)">BARRAGEM</text>
        {/* Penstock */}
        <line x1="400" y1="260" x2="560" y2="320" stroke="hsl(210, 20%, 40%)" strokeWidth="14" strokeLinecap="round" />
        <text x="470" y="278" fill="hsl(210, 50%, 20%)" fontFamily="Outfit" fontSize="10">CONDUTO</text>
        {/* Powerhouse */}
        <rect x="540" y="280" width="120" height="60" rx="4" fill="hsl(210, 30%, 50%)" />
        <text x="600" y="316" textAnchor="middle" fill="white" fontFamily="Outfit" fontSize="11" fontWeight="600">CASA DE FORÇA</text>
        {/* River downstream */}
        <rect x="440" y="340" width="360" height="60" fill="hsl(199, 70%, 60%)" opacity="0.5" />
        {/* Ground */}
        <rect x="0" y="340" width="440" height="60" fill="hsl(30, 30%, 45%)" />
        {/* Transmission lines */}
        <line x1="660" y1="280" x2="760" y2="200" stroke="hsl(0, 0%, 30%)" strokeWidth="2" />
        <line x1="760" y1="200" x2="760" y2="280" stroke="hsl(0, 0%, 30%)" strokeWidth="3" />
        <line x1="750" y1="220" x2="770" y2="220" stroke="hsl(0, 0%, 30%)" strokeWidth="2" />
      </svg>
    ),
    hotspots: [
      {
        id: "dam-reservoir",
        label: "Reservatório",
        x: "25%",
        y: "55%",
        explanation:
          "O reservatório é o lago artificial formado pela barragem. A água armazenada acumula energia potencial gravitacional (Ep = m·g·h). Quanto maior a altura (h) da lâmina d'água em relação às turbinas, maior a energia potencial disponível. Reservatórios também servem para controle de cheias e abastecimento de água.",
      },
      {
        id: "dam-wall",
        label: "Barragem",
        x: "50%",
        y: "40%",
        explanation:
          "A barragem é a estrutura que represa o rio. Pode ser de concreto (gravidade ou arco) ou de terra/enrocamento. Deve suportar a enorme pressão hidrostática exercida pela água (P = ρ·g·h). As comportas na parte superior permitem verter o excesso de água durante chuvas intensas, evitando transbordamentos.",
      },
      {
        id: "dam-penstock",
        label: "Conduto Forçado",
        x: "59%",
        y: "70%",
        explanation:
          "O conduto forçado é a tubulação que leva a água do reservatório até as turbinas. Fabricado em aço, suporta altíssimas pressões. A velocidade da água aumenta conforme desce, de acordo com o Teorema de Bernoulli. O dimensionamento do conduto é crucial para a eficiência da usina.",
      },
      {
        id: "dam-powerhouse",
        label: "Casa de Força",
        x: "75%",
        y: "72%",
        explanation:
          "A casa de força abriga as turbinas e os geradores. É o coração da usina, onde a conversão de energia mecânica em elétrica acontece. Cada conjunto turbina-gerador constitui uma 'unidade geradora'. Grandes usinas possuem dezenas de unidades geradoras operando simultaneamente.",
      },
    ],
  },
  {
    title: "Funcionamento da Turbina e Gerador",
    description: "Explore como a turbina converte energia cinética da água em eletricidade.",
    svgContent: (
      <svg viewBox="0 0 800 400" className="w-full h-full" role="img" aria-label="Diagrama do funcionamento de turbina e gerador">
        {/* Background */}
        <rect width="800" height="400" fill="hsl(210, 30%, 95%)" />
        {/* Water inlet */}
        <rect x="0" y="150" width="200" height="100" fill="hsl(199, 89%, 48%)" opacity="0.6" rx="4" />
        <text x="100" y="205" textAnchor="middle" fill="white" fontFamily="Outfit" fontSize="14" fontWeight="600">ENTRADA DE ÁGUA</text>
        {/* Arrow */}
        <polygon points="200,185 240,170 240,200 280,200 280,170 240,150 240,180" fill="hsl(199, 89%, 38%)" />
        {/* Turbine casing */}
        <circle cx="370" cy="200" r="90" fill="hsl(210, 20%, 80%)" stroke="hsl(210, 20%, 50%)" strokeWidth="4" />
        {/* Turbine blades */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="370"
            y1="200"
            x2={370 + 70 * Math.cos((angle * Math.PI) / 180)}
            y2={200 + 70 * Math.sin((angle * Math.PI) / 180)}
            stroke="hsl(210, 30%, 40%)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        ))}
        <circle cx="370" cy="200" r="15" fill="hsl(210, 30%, 40%)" />
        <text x="370" y="310" textAnchor="middle" fill="hsl(210, 50%, 20%)" fontFamily="Outfit" fontSize="14" fontWeight="600">TURBINA</text>
        {/* Shaft */}
        <rect x="460" y="190" width="80" height="20" fill="hsl(0, 0%, 50%)" rx="4" />
        <text x="500" y="230" textAnchor="middle" fill="hsl(0, 0%, 40%)" fontFamily="Outfit" fontSize="10">EIXO</text>
        {/* Generator */}
        <rect x="540" y="140" width="120" height="120" rx="12" fill="hsl(45, 93%, 58%)" stroke="hsl(45, 80%, 45%)" strokeWidth="3" />
        <text x="600" y="195" textAnchor="middle" fill="hsl(210, 50%, 10%)" fontFamily="Outfit" fontSize="13" fontWeight="700">GERADOR</text>
        <text x="600" y="215" textAnchor="middle" fill="hsl(210, 50%, 10%)" fontFamily="Outfit" fontSize="10">ELÉTRICO</text>
        {/* Output wires */}
        <line x1="660" y1="175" x2="760" y2="175" stroke="hsl(0, 70%, 50%)" strokeWidth="3" />
        <line x1="660" y1="225" x2="760" y2="225" stroke="hsl(210, 70%, 50%)" strokeWidth="3" />
        <text x="760" y="200" fill="hsl(210, 50%, 20%)" fontFamily="Outfit" fontSize="12" fontWeight="600" textAnchor="end">⚡ SAÍDA</text>
        {/* Water outlet */}
        <rect x="280" y="310" width="180" height="50" fill="hsl(199, 60%, 65%)" opacity="0.4" rx="4" />
        <text x="370" y="340" textAnchor="middle" fill="hsl(199, 60%, 30%)" fontFamily="Outfit" fontSize="11">SAÍDA DE ÁGUA</text>
      </svg>
    ),
    hotspots: [
      {
        id: "turbine-inlet",
        label: "Entrada de Água",
        x: "12%",
        y: "48%",
        explanation:
          "A água chega à turbina com alta velocidade e pressão, proveniente do conduto forçado. A vazão (volume por segundo) e a pressão determinam a potência disponível. A potência hidráulica é calculada por P = ρ·g·Q·h, onde Q é a vazão volumétrica e h é a altura da queda.",
      },
      {
        id: "turbine-blades",
        label: "Pás da Turbina",
        x: "46%",
        y: "42%",
        explanation:
          "As pás (ou aletas) da turbina são projetadas com perfis hidrodinâmicos específicos para captar a máxima energia da água. Na turbina Francis, a água entra radialmente e sai axialmente. Na Pelton, jatos de água atingem conchas. Na Kaplan, as pás são ajustáveis para diferentes vazões. A eficiência pode chegar a 95%.",
      },
      {
        id: "turbine-generator",
        label: "Gerador",
        x: "75%",
        y: "42%",
        explanation:
          "O gerador funciona pelo princípio da indução eletromagnética de Faraday. O rotor (parte giratória, com eletroímãs) gira dentro do estator (parte fixa, com bobinas de cobre). A variação do fluxo magnético nas bobinas induz uma tensão alternada (CA). A frequência da corrente gerada é 60 Hz no Brasil (3.600 ciclos por minuto para geradores de 2 polos).",
      },
    ],
  },
  {
    title: "Rede de Transmissão e Distribuição",
    description: "Veja como a eletricidade viaja da usina até as residências.",
    svgContent: (
      <svg viewBox="0 0 800 400" className="w-full h-full" role="img" aria-label="Diagrama da rede de transmissão e distribuição de energia elétrica">
        {/* Background */}
        <rect width="800" height="400" fill="hsl(200, 25%, 97%)" />
        {/* Ground line */}
        <rect x="0" y="320" width="800" height="80" fill="hsl(120, 20%, 75%)" />
        {/* Power plant */}
        <rect x="20" y="240" width="100" height="80" rx="4" fill="hsl(210, 30%, 50%)" />
        <text x="70" y="275" textAnchor="middle" fill="white" fontFamily="Outfit" fontSize="10" fontWeight="600">USINA</text>
        <text x="70" y="290" textAnchor="middle" fill="white" fontFamily="Outfit" fontSize="9">13,8 kV</text>
        {/* Step-up transformer */}
        <rect x="160" y="250" width="70" height="60" rx="6" fill="hsl(45, 80%, 55%)" stroke="hsl(45, 80%, 40%)" strokeWidth="2" />
        <text x="195" y="278" textAnchor="middle" fill="hsl(210, 50%, 10%)" fontFamily="Outfit" fontSize="8" fontWeight="600">ELEVADOR</text>
        <text x="195" y="292" textAnchor="middle" fill="hsl(210, 50%, 10%)" fontFamily="Outfit" fontSize="8">→ 500 kV</text>
        {/* Connection lines */}
        <line x1="120" y1="280" x2="160" y2="280" stroke="hsl(0, 0%, 40%)" strokeWidth="3" />
        {/* Transmission towers */}
        {[300, 400, 500].map((x) => (
          <g key={x}>
            <line x1={x} y1="180" x2={x} y2="320" stroke="hsl(0, 0%, 40%)" strokeWidth="3" />
            <line x1={x - 20} y1="200" x2={x + 20} y2="200" stroke="hsl(0, 0%, 40%)" strokeWidth="2" />
            <line x1={x - 15} y1="220" x2={x + 15} y2="220" stroke="hsl(0, 0%, 40%)" strokeWidth="2" />
          </g>
        ))}
        {/* Transmission lines between towers */}
        <line x1="230" y1="265" x2="300" y2="195" stroke="hsl(0, 70%, 50%)" strokeWidth="2" />
        {[300, 400].map((x) => (
          <g key={`line-${x}`}>
            <line x1={x} y1="195" x2={x + 100} y2="195" stroke="hsl(0, 70%, 50%)" strokeWidth="2" />
            <line x1={x} y1="215" x2={x + 100} y2="215" stroke="hsl(210, 70%, 50%)" strokeWidth="2" />
          </g>
        ))}
        <text x="400" y="170" textAnchor="middle" fill="hsl(0, 0%, 35%)" fontFamily="Outfit" fontSize="11" fontWeight="600">LINHAS DE TRANSMISSÃO (500 kV)</text>
        {/* Step-down transformer */}
        <rect x="570" y="250" width="70" height="60" rx="6" fill="hsl(45, 80%, 55%)" stroke="hsl(45, 80%, 40%)" strokeWidth="2" />
        <text x="605" y="278" textAnchor="middle" fill="hsl(210, 50%, 10%)" fontFamily="Outfit" fontSize="8" fontWeight="600">REBAIXADOR</text>
        <text x="605" y="292" textAnchor="middle" fill="hsl(210, 50%, 10%)" fontFamily="Outfit" fontSize="8">→ 220 V</text>
        <line x1="500" y1="195" x2="570" y2="265" stroke="hsl(0, 70%, 50%)" strokeWidth="2" />
        {/* Houses */}
        {[680, 730, 680, 730].map((x, i) => (
          <g key={`house-${i}`}>
            <rect x={x} y={250 + (i > 1 ? 40 : 0)} width="30" height="25" fill="hsl(20, 60%, 70%)" rx="2" />
            <polygon points={`${x - 3},${250 + (i > 1 ? 40 : 0)} ${x + 15},${238 + (i > 1 ? 40 : 0)} ${x + 33},${250 + (i > 1 ? 40 : 0)}`} fill="hsl(0, 60%, 55%)" />
          </g>
        ))}
        <text x="715" y="335" textAnchor="middle" fill="hsl(210, 50%, 20%)" fontFamily="Outfit" fontSize="10" fontWeight="600">CONSUMIDORES</text>
        <line x1="640" y1="275" x2="680" y2="262" stroke="hsl(0, 0%, 40%)" strokeWidth="2" />
      </svg>
    ),
    hotspots: [
      {
        id: "grid-plant",
        label: "Usina Geradora",
        x: "9%",
        y: "65%",
        explanation:
          "A usina gera eletricidade em corrente alternada (CA) a uma tensão de aproximadamente 13.800 V (13,8 kV). Essa tensão é adequada para a geração, mas insuficiente para o transporte eficiente a longas distâncias, pois as perdas seriam muito grandes.",
      },
      {
        id: "grid-stepup",
        label: "Transformador Elevador",
        x: "24%",
        y: "65%",
        explanation:
          "O transformador elevador aumenta a tensão de 13,8 kV para valores como 230 kV, 345 kV, 500 kV ou até 765 kV. Pela relação P = V × I, ao elevar a tensão, a corrente diminui proporcionalmente. Como as perdas por efeito Joule dependem do quadrado da corrente (P_perda = R × I²), a alta tensão reduz drasticamente as perdas na transmissão.",
      },
      {
        id: "grid-transmission",
        label: "Torres de Transmissão",
        x: "50%",
        y: "48%",
        explanation:
          "As torres (ou pylons) sustentam os cabos de transmissão a grande altura por razões de segurança e isolamento. Os cabos são feitos de alumínio com alma de aço (ACSR) — alumínio pela condutividade e leveza, aço pela resistência mecânica. O Brasil possui mais de 160.000 km de linhas de transmissão no Sistema Interligado Nacional (SIN).",
      },
      {
        id: "grid-consumer",
        label: "Consumidores Finais",
        x: "89%",
        y: "70%",
        explanation:
          "Subestações rebaixadoras reduzem a tensão em etapas: de 500 kV para 138 kV (subtransmissão), depois para 13,8 kV (distribuição primária), e finalmente para 127/220 V nas residências. O padrão brasileiro é bifásico ou trifásico, com tomadas de 127 V ou 220 V dependendo da região.",
      },
    ],
  },
];

const InteractiveDiagrams = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const toggleHotspot = (id: string) => {
    setActiveHotspot((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper
      id="diagramas"
      title="Diagramas Interativos"
      subtitle="Clique nos pontos destacados para explorar cada componente em detalhes"
      alternate
    >
      <div className="space-y-16">
        {diagrams.map((diagram) => (
          <motion.div
            key={diagram.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            {/* Diagram header */}
            <div className="p-6 border-b border-border/50">
              <h3 className="font-display font-bold text-xl text-foreground">{diagram.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{diagram.description}</p>
            </div>

            {/* SVG diagram with hotspots */}
            <div className="relative">
              <div className="aspect-video bg-muted/30">{diagram.svgContent}</div>

              {/* Hotspot buttons */}
              {diagram.hotspots.map((hotspot) => (
                <div key={hotspot.id}>
                  <button
                    onClick={() => toggleHotspot(hotspot.id)}
                    className={`absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 flex items-center justify-center text-xs font-display font-bold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                      activeHotspot === hotspot.id
                        ? "bg-primary border-primary text-primary-foreground scale-110"
                        : "bg-primary-foreground border-primary text-primary hover:scale-110 animate-pulse"
                    }`}
                    style={{ left: hotspot.x, top: hotspot.y }}
                    aria-expanded={activeHotspot === hotspot.id}
                    aria-label={`Informações sobre: ${hotspot.label}`}
                  >
                    {activeHotspot === hotspot.id ? "−" : "+"}
                  </button>
                </div>
              ))}
            </div>

            {/* Explanation panel */}
            <AnimatePresence>
              {diagram.hotspots.map(
                (hotspot) =>
                  activeHotspot === hotspot.id && (
                    <motion.div
                      key={`explanation-${hotspot.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-border/50"
                    >
                      <div className="p-6 bg-primary/5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-display font-semibold text-lg text-primary mb-2">
                              {hotspot.label}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {hotspot.explanation}
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveHotspot(null)}
                            className="flex-shrink-0 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Fechar explicação"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default InteractiveDiagrams;
