"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieIconProps {
  animationData: object;
  size?: number;
  loop?: boolean;
  className?: string;
}

export function LottieIcon({
  animationData,
  size = 40,
  loop = true,
  className,
}: LottieIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          setShouldRender(true);
          if (!loop) {
            hasPlayed.current = true;
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loop]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: size, height: size }}
    >
      {shouldRender && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
}
