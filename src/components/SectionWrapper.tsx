import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

/** Reusable animated section with consistent headings */
const SectionWrapper = ({ id, title, subtitle, children, className = "", alternate = false }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 scroll-mt-20 ${alternate ? "bg-gradient-section" : ""} ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id={`${id}-heading`}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-primary/60" aria-hidden="true" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
