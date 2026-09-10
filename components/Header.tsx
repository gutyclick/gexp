"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown", onKeyDown); };
  }, [open]);
  return (
    <header className="site-header">
      <Link href="/" className="logo" aria-label="Inicio">GRP<span>•</span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? "Cerrar ×" : "Menú +"}</button>
      <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Navegación principal">
        <Link href="/#trabajo" onClick={() => setOpen(false)}>Trabajo</Link>
        <Link href="/#sobre-mi" onClick={() => setOpen(false)}>Sobre mí</Link>
        <Link href="/#experiencia" onClick={() => setOpen(false)}>Experiencia</Link>
        <Link href="/#contacto" onClick={() => setOpen(false)}>Contacto</Link>
        <a href="/Gustavo-Ramos-Polo-CV.pdf" download>CV ↘</a>
      </nav>
    </header>
  );
}
