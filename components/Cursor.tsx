"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    const cursor = ref.current;
    const move = (event: MouseEvent) => { if (cursor) cursor.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; };
    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      cursor?.classList.toggle("active", Boolean(target.closest("a,button")));
      cursor?.classList.toggle("project", Boolean(target.closest("[data-cursor]")));
      cursor?.classList.toggle("media", Boolean(target.closest(".media-poster,.player-overlay")));
    };
    const out = () => { cursor?.classList.remove("active", "project", "media"); };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); document.removeEventListener("mouseout", out); };
  }, []);
  return <div ref={ref} className="custom-cursor" aria-hidden="true"><span>VER</span></div>;
}
