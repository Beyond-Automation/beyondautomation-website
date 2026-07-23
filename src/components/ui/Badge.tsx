import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "blue" | "green" | "neutral";
  dot?: boolean;
};

export default function Badge({ children, tone = "blue", dot = false }: BadgeProps) {
  return (
    <span className={`ba-badge ba-badge-${tone}`}>
      {dot ? <span className="ba-badge-dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
