import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'DUBAI REAL ESTATE ADS',
    'AESTHETIC CLINIC CAMPAIGNS',
    'BRAND IDENTITY & LOGOS',
    'HARVEST DINE PACKAGING',
    'META HIGH-CTR CREATIVES',
    'LUXURY OFF-PLAN LAUNCHES',
    '5+ YEARS UAE EXPERIENCE',
    'FAST 24-48H TURNAROUND',
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#06070a] py-3.5 select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center space-x-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#ff1e42] text-sm leading-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
