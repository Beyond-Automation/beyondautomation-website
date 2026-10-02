import React from 'react';

interface NetworkGearCardProps {
  title: string;
  category: string;
  amazonUrl: string;
  amazonAsin: string;
  priceRange: string;
  description: string;
  whoNeedsIt: string;
  whyThisPick: string;
}

export function NetworkGearCard({
  title,
  category,
  amazonUrl,
  amazonAsin,
  priceRange,
  description,
  whoNeedsIt,
  whyThisPick,
}: NetworkGearCardProps): React.ReactElement {
  return (
    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-xl font-semibold text-zinc-100 mt-1">{title}</h3>
        </div>
        <span className="text-sm text-zinc-500 font-mono">{priceRange}</span>
      </div>

      <p className="text-zinc-400 mb-4">{description}</p>

      <div className="space-y-3 mb-6">
        <div>
          <span className="text-sm font-medium text-zinc-300">Who needs it: </span>
          <span className="text-sm text-zinc-400">{whoNeedsIt}</span>
        </div>
        <div>
          <span className="text-sm font-medium text-zinc-300">Why this pick: </span>
          <span className="text-sm text-zinc-400">{whyThisPick}</span>
        </div>
      </div>

      <a
        href={amazonUrl}
        rel="sponsored nofollow"
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded transition-colors"
      >
        View on Amazon
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
