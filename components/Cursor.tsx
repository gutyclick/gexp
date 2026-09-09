"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    const cursor = ref.current;
    const move = (event: MouseEvent) => { if (cursor) cursor.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; };
    const over = (event: MouseEvent) => { if ((event.target as HTMLElement).closest("a,button,[data-cursor]")) cursor?.classList.add("active"); };
    const out = () => cursor?.classList.remove("active");
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); document.removeEventListener("mouseout", out); };
  }, []);
  return <div ref={ref} className="custom-cursor" aria-hidden="true"><span>VER</span></div>;
}
