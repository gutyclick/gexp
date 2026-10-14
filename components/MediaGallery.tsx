"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { MediaCaseStudy, PortfolioMedia } from "@/data/postproduction";
import { favoriteMediaIds, featuredMediaIds, mediaCategories } from "@/data/postproduction";

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

function CaseIcon({ name }: { name: "objective" | "responsibility" | "tools" | "creativeDecision" | "outcome" }) {
  const paths = {
    objective: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /></>,
    responsibility: <><circle cx="12" cy="7" r="3" /><path d="M5 21v-2a7 7 0 0 1 14 0v2M3 21h18" /></>,
    tools: <><path d="m4 20 8-8m2-8 6 6m-7-7 8 8-3 3-8-8zM3 21l4-1-3-3z" /></>,
    creativeDecision: <><path d="M4 7h16M4 12h10M4 17h16M17 10l3 2-3 2" /></>,
    outcome: <><path d="M5 21V4m0 1h14l-3 5 3 5H5M3 21h5" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function CaseStudyDetails({ study }: { study: MediaCaseStudy }) {
  const rows = [
    { icon: "objective", label: "Objetivo", value: study.objective },
    { icon: "responsibility", label: "Mi responsabilidad", value: study.responsibility },
    { icon: "tools", label: "Herramientas", value: study.tools },
    { icon: "creativeDecision", label: "Decisión creativa", value: study.creativeDecision },
    { icon: "outcome", label: "Resultado o publicación", value: study.outcome },
  ] as const;
  return <dl className="player-case-study">{rows.map(row => <div className="case-detail" key={row.icon}>
    <dt><CaseIcon name={row.icon} /><span>{row.label}</span></dt>
    <dd>{Array.isArray(row.value) ? <span className="case-tools">{row.value.map(tool => <span key={tool}>{tool}</span>)}</span> : row.value}</dd>
  </div>)}</dl>;
}

export function MediaGallery({ items, showFilters = true, showDescriptions = false }: { items: PortfolioMedia[]; showFilters?: boolean; showDescriptions?: boolean }) {
  const [filter, setFilter] = useState<(typeof mediaCategories)[number]>("Todo");
  const [limit, setLimit] = useState(6);
  const [active, setActive] = useState<PortfolioMedia | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const visible = useMemo(() => {
    const ranks = new Map<string, number>([...new Set([...featuredMediaIds, ...favoriteMediaIds])].map((id, index) => [id, index]));
    const filtered = filter === "Todo" ? items : items.filter(item => item.category === filter || item.additionalCategories?.includes(filter));
    return [...filtered].sort((a, b) => (ranks.get(a.id) ?? 99) - (ranks.get(b.id) ?? 99));
  }, [filter, items]);
  const displayed = showFilters ? visible.slice(0, limit) : visible;
  const groups = showFilters
    ? [
        { label: "Formato horizontal", items: displayed.filter(item => item.format !== "portrait") },
        { label: "Reels verticales", items: displayed.filter(item => item.format === "portrait") },
      ].filter(group => group.items.length > 0)
    : [{ label: "", items: displayed }];

  useEffect(() => {
    document.body.classList.toggle("player-open", Boolean(active));
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", close);
    if (active) requestAnimationFrame(() => closeButton.current?.focus());
    return () => { document.body.classList.remove("player-open"); window.removeEventListener("keydown", close); };
  }, [active]);

  return <>
    {showFilters && <div className="media-toolbar">
      <span className="media-toolbar-title utility">Explorar</span>
      <div className="media-filters" role="group" aria-label="Filtrar portafolio">
        {mediaCategories.map(category => <button key={category} type="button" className={filter === category ? "selected" : ""} aria-pressed={filter === category} onClick={() => { setFilter(category); setLimit(6); }}>{category}</button>)}
      </div>
      <span className="media-count utility" aria-live="polite"><span>{Math.min(displayed.length, visible.length)} / {visible.length}</span> <span>piezas</span></span>
    </div>}
    <div className="media-groups">
      {groups.map(group => <section className={`media-format-group ${group.label === "Reels verticales" ? "media-format-portrait" : "media-format-wide"}`} key={group.label || "selection"} aria-label={group.label || undefined}>
        {group.label && <div className="media-format-head"><span className="utility">{group.label}</span><span className="utility"><span>{String(group.items.length).padStart(2, "0")}</span> <span>piezas</span></span></div>}
        <div className="media-grid edit-sequence">
          <div className="edit-sequence-rail" aria-hidden="true"><span /></div>
          {group.items.map(item => {
            const index = displayed.indexOf(item);
            return <article className={`media-item media-${item.format}`} key={item.id}>
              <div className="edit-cut" aria-hidden="true"><span>{`00:${String(index * 7).padStart(2, "0")}:00`}</span><i /></div>
              <button className={`media-poster ${posterUrl(item) ? "has-image" : ""}`} onClick={() => setActive(item)} aria-label={`${item.videoId ? "Reproducir" : "Ver"} ${item.title}`}>
                {posterUrl(item) && <Image src={posterUrl(item)!} alt="" fill sizes="(max-width: 760px) 100vw, 60vw" unoptimized={posterUrl(item)!.startsWith("https://")} />}
                <span className="media-no utility">{String(index + 1).padStart(2, "0")}</span>
                <span className="media-frame" aria-hidden="true"><i /><i /><i /><i /></span>
                <span className="media-play">{item.videoId ? "PLAY" : item.image ? "VER" : "+ INFO"}</span>
                <span className="media-time utility">{item.duration}</span>
              </button>
              <div className="media-caption"><div><h2>{item.title}</h2><p>{item.client}</p></div>{showDescriptions && <p className="media-description">{item.description}</p>}<div className="utility"><span>{item.category}</span></div></div>
            </article>;
          })}
        </div>
      </section>)}
    </div>
    {showFilters && displayed.length < visible.length && <div className="media-more"><button onClick={() => setLimit(current => current + 6)}>Ver más <span>{visible.length - displayed.length}</span></button></div>}
    {active && typeof document !== "undefined" && createPortal(<div className="player-overlay" role="dialog" aria-modal="true" aria-label={active.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
      <div className="player-shell">
        <div className="player-top"><div><span className="utility">{active.category}</span><h2>{active.title}</h2></div><button ref={closeButton} onClick={() => setActive(null)}>Cerrar ×</button></div>
        <div className={`player-stage player-stage-${active.format}`}>
          {active.image ? <div className="player-image"><Image src={active.image} alt={active.title} fill sizes="100vw" priority /></div> : embedUrl(active) ? <iframe src={embedUrl(active)!} title={active.title} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen /> : <div className="player-empty"><span className="utility">Media pendiente</span><strong>LISTO PARA<br />{active.platform?.toUpperCase()}</strong><p>Añade el ID del video en <code>data/postproduction.ts</code>.</p></div>}
        </div>
        <div className="player-info"><p>{active.description}</p><span className="utility">{active.client} · {active.duration}</span></div>
        {active.caseStudy && <CaseStudyDetails study={active.caseStudy} />}
      </div>
    </div>, document.body)}
  </>;
}
