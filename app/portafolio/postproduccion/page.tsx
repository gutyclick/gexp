import type { Metadata } from "next";
import Link from "next/link";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { MediaGallery } from "@/components/MediaGallery";
import { postproductionMedia } from "@/data/postproduction";

export const metadata: Metadata = {
  title: "Portafolio de postproducción — Gustavo R. Polo",
  description: "Selección de edición, televisión, motion graphics, comerciales y contenido social de Gustavo R. Polo.",
};

export default function PostproductionPortfolio() {
  return <><Header /><Cursor /><main className="portfolio-page">
    <section className="portfolio-hero">
      <p className="utility">Portafolio / Postproducción · 2018—2026</p>
      <h1>IMAGEN.<br />RITMO.<br />HISTORIA.</h1>
      <div className="portfolio-intro"><p>Una selección de piezas construidas para televisión, marcas y plataformas digitales.</p><div className="portfolio-reel"><span className="utility">Showreel</span><strong>01:30</strong><i>▶</i></div></div>
    </section>
    <section className="portfolio-gallery" aria-labelledby="gallery-title">
      <div className="portfolio-gallery-head"><p className="utility">Selección de trabajo</p><h2 id="gallery-title">LA EDICIÓN<br />COMO LENGUAJE.</h2><p>Filtra por disciplina. Cada pieza abre en un reproductor integrado sin abandonar el sitio.</p></div>
      <MediaGallery items={postproductionMedia} />
    </section>
    <section className="portfolio-services"><p className="utility">Capacidades</p><div>{["Edición narrativa", "Motion graphics", "Composición", "Tracking", "Rotoscopia", "Adaptación multiplataforma"].map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}</div></section>
    <footer className="portfolio-next"><p className="utility">¿Tienes material que necesita una historia?</p><h2>HAGAMOS<br />EL CORTE.</h2><div><a href="mailto:contacto@gustavorpolo.com">Contacto ↗</a><Link href="/">Volver al portafolio general ↑</Link></div></footer>
  </main></>;
}
