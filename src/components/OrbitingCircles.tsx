import React from 'react';
import './OrbitingCircles.css';

export interface OrbitingCirclesProps {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number; // Added speed prop from the demo
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
}

export function OrbitingCircles({
  className = "",
  children,
  reverse,
  speed = 1,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 30,
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-slate-700/50 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const angle = (360 / count) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--delay": -delay * index,
                "--angle": angle,
                "--icon-size": iconSize,
              } as React.CSSProperties
            }
            className={`absolute flex items-center justify-center rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 shadow-lg shadow-slate-900/20 text-slate-200 transition-colors hover:border-sky-500/50 hover:bg-slate-800 ${
              reverse ? "animate-orbit-reverse" : "animate-orbit"
            } ${className}`}
            style={{ width: iconSize, height: iconSize, ...({ "--duration": calculatedDuration, "--radius": radius, "--delay": -delay * index, "--angle": angle, "--icon-size": iconSize } as React.CSSProperties) }}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
