import React from 'react';

interface AutoKrisLogoProps {
  variant?: 'compact' | 'full';
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * Original AUTO KRIS brand mark & wordmark.
 * Inspired by the golden aerodynamic silhouette and typography in AUTO KRIS's identity,
 * paired with an original precision gear-arc emblem (no third-party automaker marks).
 */
export const AutoKrisLogo: React.FC<AutoKrisLogoProps> = ({
  variant = 'full',
  theme = 'dark',
  className = '',
}) => {
  const wordColor = theme === 'dark' ? 'text-white' : 'text-[#0B0B0D]';
  const taglineColor = theme === 'dark' ? 'text-[#DFBE6A]' : 'text-[#9B7829]';
  const uid = React.useId().replace(/:/g, '');

  if (variant === 'compact') {
    return (
      <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
        <svg
          width="34"
          height="24"
          viewBox="0 0 68 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <defs>
            <linearGradient id={`ak-gold-${uid}`} x1="4" y1="8" x2="64" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F0D78C" />
              <stop offset="50%" stopColor="#C8A24A" />
              <stop offset="100%" stopColor="#947022" />
            </linearGradient>
          </defs>
          {/* Original precision automotive aerodynamic silhouette + mechanical ring arc */}
          <path
            d="M5 27.5C14.5 18 27.5 11 41.5 11C50.2 11 57.5 14.3 63 20.5C56.4 17.3 49.3 15.8 41.2 15.8C29.4 15.8 18.2 20.2 8.8 27.5H5Z"
            fill={`url(#ak-gold-${uid})`}
          />
          <path
            d="M20 28.5C25.5 23.2 33 20.5 41 20.5C47.5 20.5 53.5 22.3 58 25.5"
            stroke={`url(#ak-gold-${uid})`}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Precision piston/gear horizon bar */}
          <path
            d="M8 34H28M34 34H39M45 34H60"
            stroke={`url(#ak-gold-${uid})`}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
        <span className={`font-display text-lg font-extrabold tracking-[0.06em] ${wordColor}`}>
          AUTO <span className="text-[#C8A24A]">KRIS</span>
        </span>
      </span>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <svg
        width="160"
        height="40"
        viewBox="0 0 220 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="mb-1"
      >
        <defs>
          <linearGradient id={`ak-full-gold-${uid}`} x1="10" y1="6" x2="210" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F3DC96" />
            <stop offset="48%" stopColor="#C8A24A" />
            <stop offset="100%" stopColor="#8F6B1F" />
          </linearGradient>
        </defs>
        {/* Sleek coupe roofline sweep */}
        <path
          d="M10 42C36 22 72 10 116 10C152 10 184 18 208 33C183 24 152 19 116 19C76 19 42 28 18 42H10Z"
          fill={`url(#ak-full-gold-${uid})`}
        />
        {/* Inner precision shoulder line */}
        <path
          d="M52 38C74 28 96 24 120 24C144 24 166 28 186 35"
          stroke={`url(#ak-full-gold-${uid})`}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Original mechanical gear/wheel arc accent */}
        <circle cx="114" cy="43" r="4" fill={`url(#ak-full-gold-${uid})`} />
        <path
          d="M36 43H100M128 43H192"
          stroke={`url(#ak-full-gold-${uid})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>

      <div className={`font-display text-3xl sm:text-4xl font-extrabold tracking-[0.08em] leading-none ${wordColor}`}>
        AUTO <span className="text-[#C8A24A]">KRIS</span>
      </div>

      <div className="mt-2 flex items-center gap-3 w-full">
        <span className="h-px flex-1 bg-[#C8A24A]/60" />
        <span className={`font-display text-[11px] font-semibold tracking-[0.28em] uppercase whitespace-nowrap ${taglineColor}`}>
          DRIVING EXCELLENCE
        </span>
        <span className="h-px flex-1 bg-[#C8A24A]/60" />
      </div>
    </div>
  );
};
