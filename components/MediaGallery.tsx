"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { PortfolioMedia } from "@/data/postproduction";
import { mediaCategories } from "@/data/postproduction";

function embedUrl(item: PortfolioMedia) {
  if (item.kind === "image" || !item.videoId) return null;
  return item.platform === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`
    : `https://player.vimeo.com/video/${item.videoId}?autoplay=1&title=0&byline=0&portrait=0`;
}

function posterUrl(item: PortfolioMedia) {
  if (item.image) return item.image;
  if (item.thumbnail) return item.thumbnail;
  if (item.platform === "youtube" && item.videoId) return `https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`;
  return null;
}

export function MediaGallery({ items }: { items: PortfolioMedia[] }) {
  const [filter, setFilter] = useState<(typeof mediaCategories)[number]>("Todo");
  const [active, setActive] = useState<PortfolioMedia | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const visible = useMemo(() => filter === "Todo" ? items : items.filter(item => item.category === filter), [filter, items]);

  useEffect(() => {
    document.body.classList.toggle("player-open", Boolean(active));
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", close);
    if (active) requestAnimationFrame(() => closeButton.current?.focus());
    return () => { document.body.classList.remove("player-open"); window.removeEventListener("keydown", close); };
  }, [active]);

  return <>
    <div className="media-filters" role="group" aria-label="Filtrar portafolio">
      {mediaCategories.map(category => <button key={category} className={filter === category ? "selected" : ""} onClick={() => setFilter(category)}>{category}</button>)}
    </div>
    <div className="media-grid">
      {visible.map((item, index) => <article className={`media-item media-${item.format}`} key={item.id}>
        <button className={`media-poster ${posterUrl(item) ? "has-image" : ""}`} onClick={() => setActive(item)} aria-label={`${item.videoId ? "Reproducir" : "Ver"} ${item.title}`}>
          {posterUrl(item) && <Image src={posterUrl(item)!} alt="" fill sizes="(max-width: 760px) 100vw, 60vw" unoptimized={posterUrl(item)!.startsWith("https://")} />}
          <span className="media-no utility">{String(index + 1).padStart(2, "0")}</span>
          <span className="media-frame" aria-hidden="true"><i /><i /><i /><i /></span>
          <span className="media-play">{item.videoId ? "PLAY" : item.image ? "VER" : "+ INFO"}</span>
          <span className="media-time utility">{item.duration}</span>
        </button>
        <div className="media-caption"><div><h2>{item.title}</h2><p>{item.client}</p></div><div className="utility"><span>{item.category}</span><span>{item.year}</span></div></div>
      </article>)}
    </div>
    {active && <div className="player-overlay" role="dialog" aria-modal="true" aria-label={active.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
      <div className="player-shell">
        <div className="player-top"><div><span className="utility">{active.category} · {active.year}</span><h2>{active.title}</h2></div><button ref={closeButton} onClick={() => setActive(null)}>Cerrar ×</button></div>
        <div className={`player-stage player-stage-${active.format}`}>
          {active.image ? <div className="player-image"><Image src={active.image} alt={active.title} fill sizes="100vw" priority /></div> : embedUrl(active) ? <iframe src={embedUrl(active)!} title={active.title} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen /> : <div className="player-empty"><span className="utility">Media pendiente</span><strong>LISTO PARA<br />{active.platform?.toUpperCase()}</strong><p>Añade el ID del video en <code>data/postproduction.ts</code>.</p></div>}
        </div>
        <div className="player-info"><p>{active.description}</p><span className="utility">{active.client} · {active.duration}</span></div>
      </div>
    </div>}
  </>;
}
