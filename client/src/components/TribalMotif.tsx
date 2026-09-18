// src/components/TribalMotif.tsx
import React from 'react';

interface TribalMotifProps {
  className?: string;
  variant?: 'geometric-grid' | 'sohrai-border' | 'diamond-lattice' | 'corner-ornament' | 'sun-burst';
  opacity?: number;
}

export const TribalMotif: React.FC<TribalMotifProps> = ({
  className = '',
  variant = 'diamond-lattice',
  opacity = 0.08,
}) => {
  if (variant === 'corner-ornament') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`pointer-events-none ${className}`}
        style={{ opacity }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L100 0 L0 100 Z" fill="currentColor" opacity="0.15" />
        <path d="M10 10 L80 10 L10 80 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 20 L60 20 L20 60 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="10" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="28" r="4" fill="currentColor" />
      </svg>
    );
  }

  if (variant === 'sohrai-border') {
    return (
      <div className={`overflow-hidden pointer-events-none h-4 w-full flex items-center ${className}`} style={{ opacity }}>
        <svg width="100%" height="16" xmlns="http://www.w3.org/2000/svg">
          <pattern id="sohrai-zigzag" x="0" y="0" width="24" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 16 L6 4 L12 16 L18 4 L24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="12" r="1.5" fill="currentColor" />
            <circle cx="18" cy="12" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="16" fill="url(#sohrai-zigzag)" />
        </svg>
      </div>
    );
  }

  if (variant === 'geometric-grid') {
    return (
      <svg
        viewBox="0 0 400 400"
        className={`pointer-events-none ${className}`}
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          {/* Concentric diamond geometry inspired by Khovar art */}
          <polygon points="200,40 360,200 200,360 40,200" />
          <polygon points="200,80 320,200 200,320 80,200" strokeDasharray="6 4" />
          <polygon points="200,120 280,200 200,280 120,200" />
          <circle cx="200" cy="200" r="30" fill="currentColor" opacity="0.2" />
          <line x1="40" y1="200" x2="360" y2="200" strokeDasharray="3 3" />
          <line x1="200" y1="40" x2="200" y2="360" strokeDasharray="3 3" />
          {/* Corner traditional triangles */}
          <polygon points="50,50 90,50 50,90" fill="currentColor" opacity="0.3" />
          <polygon points="350,50 310,50 350,90" fill="currentColor" opacity="0.3" />
          <polygon points="50,350 90,350 50,310" fill="currentColor" opacity="0.3" />
          <polygon points="350,350 310,350 350,310" fill="currentColor" opacity="0.3" />
        </g>
      </svg>
    );
  }

  // Default: diamond-lattice
  return (
    <svg
      viewBox="0 0 240 240"
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <path d="M120 10 L230 120 L120 230 L10 120 Z" />
        <path d="M120 40 L200 120 L120 200 L40 120 Z" strokeDasharray="4 4" />
        <path d="M120 70 L170 120 L120 170 L70 120 Z" />
        <circle cx="120" cy="120" r="16" fill="currentColor" opacity="0.3" />
        <circle cx="120" cy="120" r="6" fill="currentColor" />
        {/* Subtle cross rays */}
        <line x1="120" y1="20" x2="120" y2="220" strokeWidth="0.8" />
        <line x1="20" y1="120" x2="220" y2="120" strokeWidth="0.8" />
      </g>
    </svg>
  );
};
