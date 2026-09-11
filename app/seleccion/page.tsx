import type { Metadata } from "next";
import Link from "next/link";
import { Cursor } from "@/components/Cursor";
import { MediaGallery } from "@/components/MediaGallery";
import { favoriteMediaIds, postproductionMedia } from "@/data/postproduction";

export const metadata: Metadata = {
  title: "Selección personal — Gustavo R. Polo",
  description: "Cinco proyectos audiovisuales seleccionados por Gustavo R. Polo.",
  robots: { index: false, follow: false, nocache: true },
};

const selectedWork = favoriteMediaIds
  .map(id => postproductionMedia.find(item => item.id === id))
  .filter(item => item !== undefined);

export default function SelectedWorkPage() {
  return <main className="favorites-page">
    <Cursor />
    <header className="favorites-nav"><Link href="/" aria-label="Volver al inicio">GRP.</Link></header>
    <section className="favorites-hero">
      <div className="favorites-count" aria-hidden="true">05</div>
      <div><p className="utility">El corte del editor / 2026</p><h1>CINCO PIEZAS<br />QUE ME<br />REPRESENTAN.</h1></div>
      <p>Una selección breve de trabajos donde la edición, el ritmo y la intención visual se encuentran.</p>
    </section>
    <section className="favorites-work" aria-label="Cinco proyectos seleccionados">
      <MediaGallery items={selectedWork} showFilters={false} showDescriptions />
    </section>
    <footer className="favorites-footer"><p className="utility">Fin de la selección</p><a href="mailto:contacto@gustavorpolo.com">Hablemos ↗</a></footer>
  </main>;
}
