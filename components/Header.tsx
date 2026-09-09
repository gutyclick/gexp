"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="logo" aria-label="Inicio">GRP<span>•</span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">{open ? "Cerrar" : "Menú"}</button>
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
