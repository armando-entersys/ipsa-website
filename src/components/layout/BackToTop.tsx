"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-10 bottom-10 z-50 w-14 h-14 rounded-full border-none bg-navy text-white cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } hover:bg-navy-deep hover:-translate-y-[3px] max-[600px]:right-5 max-[600px]:bottom-5 max-[600px]:w-12 max-[600px]:h-12`}
      style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
    >
      <ArrowUp size={24} strokeWidth={2} />
    </button>
  );
}
