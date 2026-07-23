import type { ReactNode } from "react";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`ba-terminal ${className}`.trim()}>
      <div className="ba-terminal-bar">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <span className="ba-terminal-title">{title}</span>
        <span className="w-12" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
