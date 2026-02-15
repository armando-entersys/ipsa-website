"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "pulse-ring" | "checkmark" | "gear-spin" | "blueprint-lines";

interface AnimatedIconProps {
  type: AnimationType;
  size?: number;
  className?: string;
}

export function AnimatedIcon({
  type,
  size = 40,
  className,
}: AnimatedIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ width: size, height: size }}>
      {isVisible && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {type === "pulse-ring" && <PulseRing />}
          {type === "checkmark" && <Checkmark />}
          {type === "gear-spin" && <GearSpin />}
          {type === "blueprint-lines" && <BlueprintLines />}
        </svg>
      )}
    </div>
  );
}

function PulseRing() {
  return (
    <circle
      cx="24"
      cy="24"
      r="20"
      stroke="#c8922a"
      strokeWidth="1.5"
      className="anim-pulse-ring"
    />
  );
}

function Checkmark() {
  return (
    <path
      d="M10 24 L20 34 L38 14"
      stroke="#c8922a"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="anim-checkmark"
    />
  );
}

const gearTeeth = [
  { x1: 24, y1: 12, x2: 24, y2: 6 },
  { x1: 32.5, y1: 15.5, x2: 36.7, y2: 11.3 },
  { x1: 36, y1: 24, x2: 42, y2: 24 },
  { x1: 32.5, y1: 32.5, x2: 36.7, y2: 36.7 },
  { x1: 24, y1: 36, x2: 24, y2: 42 },
  { x1: 15.5, y1: 32.5, x2: 11.3, y2: 36.7 },
  { x1: 12, y1: 24, x2: 6, y2: 24 },
  { x1: 15.5, y1: 15.5, x2: 11.3, y2: 11.3 },
];

function GearSpin() {
  return (
    <g className="anim-gear-spin">
      <circle cx="24" cy="24" r="9" stroke="#c8922a" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="3.5" stroke="#c8922a" strokeWidth="1" />
      {gearTeeth.map((t, i) => (
        <line
          key={i}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke="#c8922a"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

function BlueprintLines() {
  return (
    <>
      <line x1="6" y1="10" x2="42" y2="10" stroke="#c8922a" strokeWidth="1.5" strokeLinecap="round" className="anim-bp-1" />
      <line x1="10" y1="6" x2="10" y2="42" stroke="#c8922a" strokeWidth="1" strokeLinecap="round" opacity="0.7" className="anim-bp-2" />
      <line x1="6" y1="24" x2="36" y2="24" stroke="#c8922a" strokeWidth="1.5" strokeLinecap="round" className="anim-bp-3" />
      <line x1="18" y1="18" x2="36" y2="36" stroke="#c8922a" strokeWidth="1" strokeLinecap="round" opacity="0.6" className="anim-bp-4" />
    </>
  );
}
