import React from 'react';
import { Wrench } from 'lucide-react';

interface TechnicalPartVisualProps {
  type?: 'body' | 'interior' | 'wheels';
  title: string;
}

export const TechnicalPartVisual: React.FC<TechnicalPartVisualProps> = ({ type, title }) => {
  return (
    <div
      aria-label={title}
      className="w-full h-full bg-gradient-to-br from-[#ECECE8] via-[#E3E2DD] to-[#D6D4CE] flex items-center justify-center p-6 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(11,11,13,0.14) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />

      {type === 'wheels' && (
        <svg viewBox="0 0 240 180" className="w-44 h-36 relative z-10" fill="none" aria-hidden="true">
          <circle cx="120" cy="90" r="64" stroke="#18181C" strokeWidth="14" />
          <circle cx="120" cy="90" r="64" stroke="#C8A24A" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="120" cy="90" r="44" stroke="#2D2D34" strokeWidth="4" />
          <circle cx="120" cy="90" r="14" fill="#18181C" stroke="#C8A24A" strokeWidth="2.5" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="120"
              y1="90"
              x2={120 + 42 * Math.cos((deg * Math.PI) / 180)}
              y2={90 + 42 * Math.sin((deg * Math.PI) / 180)}
              stroke="#18181C"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          ))}
          <circle cx="120" cy="90" r="5" fill="#C8A24A" />
        </svg>
      )}

      {type === 'body' && (
        <svg viewBox="0 0 240 180" className="w-48 h-36 relative z-10" fill="none" aria-hidden="true">
          <path
            d="M28 112L44 76C49 65 60 58 72 58H166C180 58 192 67 198 80L212 112H28Z"
            stroke="#18181C"
            strokeWidth="3"
            fill="#F7F7F5"
          />
          <path
            d="M54 96H186"
            stroke="#C8A24A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <rect x="38" y="84" width="32" height="14" rx="4" stroke="#18181C" strokeWidth="2.5" fill="#DFBE6A" fillOpacity="0.45" />
          <rect x="170" y="84" width="32" height="14" rx="4" stroke="#18181C" strokeWidth="2.5" fill="#DFBE6A" fillOpacity="0.45" />
          <rect x="86" y="82" width="68" height="20" rx="3" stroke="#18181C" strokeWidth="2" />
          <path d="M96 88H144M96 95H144" stroke="#18181C" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}

      {type === 'interior' && (
        <svg viewBox="0 0 240 180" className="w-44 h-36 relative z-10" fill="none" aria-hidden="true">
          <circle cx="120" cy="90" r="54" stroke="#18181C" strokeWidth="10" />
          <circle cx="120" cy="90" r="54" stroke="#C8A24A" strokeWidth="1.5" />
          <path d="M68 90H172" stroke="#18181C" strokeWidth="8" strokeLinecap="round" />
          <path d="M120 90V140" stroke="#18181C" strokeWidth="8" strokeLinecap="round" />
          <circle cx="120" cy="90" r="18" fill="#18181C" stroke="#C8A24A" strokeWidth="2.5" />
          <path d="M111 90H129" stroke="#DFBE6A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}

      {!type && (
        <div className="relative z-10 flex flex-col items-center gap-2 text-neutral-500">
          <Wrench className="w-9 h-9 text-[#9B7829]" aria-hidden="true" />
          <span className="text-xs font-medium text-neutral-700 text-center max-w-[180px] truncate">
            {title}
          </span>
        </div>
      )}
    </div>
  );
};
