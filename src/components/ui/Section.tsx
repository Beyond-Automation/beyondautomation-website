import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  surface?: boolean;
  className?: string;
};

export default function Section({ children, id, eyebrow, title, intro, surface = false, className = "" }: SectionProps) {
  return (
    <section id={id} className={`${surface ? "ba-section-surface" : ""} ${className}`.trim()}>
      <div className="ba-container ba-section">
        {(eyebrow || title || intro) ? (
          <div className="ba-section-heading">
            {eyebrow ? <p className="ba-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="ba-heading-2">{title}</h2> : null}
            {intro ? <p className="ba-section-intro">{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
