import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  accent?: boolean;
};

export default function Card({ children, className = "", accent = false }: CardProps) {
  return <article className={`ba-card ${accent ? "ba-card-accent" : ""} ${className}`.trim()}>{children}</article>;
}
