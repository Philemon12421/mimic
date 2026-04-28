import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32, showText = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div 
        style={{ width: size, height: size }}
        className="shrink-0 flex items-center justify-center bg-black rounded-lg relative overflow-hidden"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-3/5 h-3/5 relative z-10"
        >
          {/* Abstract Hand + M Shape */}
          <path d="M4 18V9l4 4 4-4 4 4 4-4v9" strokeWidth="2.5" />
          {/* Spark Element */}
          <path d="M12 4v2" />
          <path d="M15 5l-1 1" />
          <path d="M9 5l1 1" />
        </svg>
        {/* Subtle geometric accent */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
      </div>
      {showText && (
        <span className="font-sans font-black text-2xl tracking-tight text-neutral-900">
          MINIC
        </span>
      )}
    </div>
  );
};
