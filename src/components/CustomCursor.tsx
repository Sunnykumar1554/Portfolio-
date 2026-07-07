import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let hoverState: "none" | "text" | "interactive" | "hide-ring" = "none";
    let angle = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const t = e.target as HTMLElement | null;
      if (t?.closest("[data-cursor-hide-ring]")) {
        hoverState = "hide-ring";
      } else if (t?.closest("a, button, [role='button'], input, textarea, select, label")) {
        hoverState = "interactive";
      } else if (t?.closest("p, span, h1, h2, h3, h4, h5, h6, li, strong, em, small, pre, code, blockquote")) {
        hoverState = "text";
      } else {
        hoverState = "none";
      }
    };

    const loop = () => {
      // Dot: instant
      if (dotRef.current) {
        const s =
          hoverState === "hide-ring"
            ? 56
            : hoverState === "text"
              ? 64
              : hoverState === "interactive"
                ? 40
                : 8;
        dotRef.current.style.transform = `translate3d(${pos.x - s / 2}px, ${pos.y - s / 2}px, 0)`;
        dotRef.current.style.width = `${s}px`;
        dotRef.current.style.height = `${s}px`;
      }
      // Ring: lag + rotate
      ring.x += (pos.x - ring.x) * 0.15;
      ring.y += (pos.y - ring.y) * 0.15;
      angle += 1.2;
      if (ringRef.current) {
        const s =
          hoverState === "hide-ring" || hoverState === "text"
            ? 0
            : hoverState === "interactive"
              ? 80
              : 28;
        ringRef.current.style.width = `${s}px`;
        ringRef.current.style.height = `${s}px`;
        ringRef.current.style.opacity =
          hoverState === "hide-ring" || hoverState === "text" ? "0" : "1";
        ringRef.current.style.transform = `translate3d(${ring.x - s / 2}px, ${ring.y - s / 2}px, 0) rotate(${angle}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.documentElement.style.cursor = "none";

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block border-2 border-white"
        style={{ mixBlendMode: "difference", willChange: "transform, width, height" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block rounded-full bg-white"
        style={{ mixBlendMode: "difference", willChange: "transform, width, height" }}
      />
    </>
  );
}
