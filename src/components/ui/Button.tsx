import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export default function Button({ children, href, variant = "primary", external = false, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`ba-button ba-button-${variant} ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
