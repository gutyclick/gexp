"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MediaGallery } from "@/components/MediaGallery";
import { favoriteMediaIds, postproductionMedia } from "@/data/postproduction";
import { experiences, portraitConfig } from "@/data/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const featuredWork = favoriteMediaIds
  .slice(0, 3)
  .map(id => postproductionMedia.find(item => item.id === id))
  .filter(item => item !== undefined);

export function HomeExperience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mobile = matchMedia("(max-width: 760px)").matches;
    gsap.from(".hero-line > span", { yPercent: 115, duration: 1.1, stagger: .08, ease: "power4.out", delay: 1 });
    if (!mobile) {
      gsap.to(".hero-portrait", { yPercent: 18, scale: 1.06, opacity: .38, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
      gsap.fromTo(".edit-sequence-rail span", { scaleY: 0 }, { scaleY: 1, transformOrigin: "top", ease: "none", scrollTrigger: { trigger: ".home-featured", start: "top 70%", end: "bottom 75%", scrub: true } });
    }
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => gsap.from(el, { y: mobile ? 24 : 64, opacity: 0, duration: mobile ? .55 : .9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } }));
  }, { scope: root });

  const movePortrait = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!matchMedia("(pointer: fine)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 8;
    gsap.to(".portrait-inner", { x, y, rotateY: x / 5, rotateX: -y / 5, duration: .8, ease: "power2.out" });
  };

  return (
    <main ref={root}>
      <section className="hero" onMouseMove={movePortrait}>
        <div className="hero-meta utility"><span>Panamá · 2026</span><span>Disponible para oportunidades seleccionadas</span></div>
        <div className="hero-name" aria-label="Gustavo R. Polo">
          <h1 className="hero-line back"><span>GUSTAVO</span></h1>
          <h1 className="hero-line front"><span>R. POLO</span></h1>
        </div>
        <div className="hero-portrait">
          <div className="portrait-inner" style={{ transform: `translate(${portraitConfig.x}px, ${portraitConfig.y}px) scale(${portraitConfig.scale}) rotate(${portraitConfig.rotation}deg)` }}>
            <Image src={portraitConfig.src} alt="Retrato de Gustavo Ramos Polo" fill priority sizes="(max-width: 900px) 64vw, 43vw" />
          </div>
        </div>
        <div className="hero-bottom">
          <p className="hero-title">Postproductor creativo<br />y creador de productos digitales</p>
          <p className="hero-copy">Convierto ideas poco definidas en experiencias visuales y productos funcionales: aprendo lo necesario, construyo, pruebo y mejoro.</p>
          <div className="hero-actions utility"><a href="#trabajo">Ver mi trabajo ↓</a><a href="/Gustavo-Ramos-Polo-CV.pdf" download>Descargar CV ↘</a></div>
        </div>
      </section>

      <section className="home-featured" id="trabajo" aria-labelledby="featured-title">
        <div className="home-featured-head">
          <p className="section-kicker utility">Portafolio destacado / 03 cortes</p>
          <h2 id="featured-title" data-reveal>EL TRABAJO<br />HABLA PRIMERO.</h2>
          <p>Tres piezas que reúnen edición, dirección visual y motion graphics.</p>
        </div>
        <MediaGallery items={featuredWork} showFilters={false} />
        <div className="featured-actions">
          <p>Cinco trabajos forman mi selección personal para clientes.</p>
          <Link href="/portafolio/postproduccion">Ver todo el portafolio <span>↗</span></Link>
        </div>
      </section>

      <section className="profile-home" id="sobre-mi" aria-labelledby="profile-title">
        <p className="section-kicker utility">Perfil profesional</p>
        <div className="profile-home-grid">
          <h2 id="profile-title" data-reveal>DE LA IDEA<br />A LA PIEZA<br /><em>TERMINADA.</em></h2>
          <div className="profile-home-copy">
            <p>Ese espacio entre «tengo una idea» y «está funcionando» es donde hago mi mejor trabajo.</p>
            <p>Soy un profesional híbrido entre postproducción, producto digital y tecnología. Mi recorrido comenzó en producción visual y se extendió hacia diseño, e-commerce, aplicaciones y productos digitales.</p>
            <p>Uso herramientas de IA para ampliar lo que puedo construir bajo mi dirección, pruebas e iteración.</p>
          </div>
        </div>
        <div className="profile-disciplines utility"><span>Postproducción</span><span>Dirección visual</span><span>Producto digital</span></div>
      </section>

      <section className="experience home-experience" id="experiencia" aria-labelledby="experience-title">
        <div className="section-top"><p className="section-kicker utility">Experiencia</p><h2 id="experience-title">TRABAJO REAL.<br />CONTEXTOS DISTINTOS.</h2></div>
        <div className="timeline">{experiences.map(item => <details key={item.company}><summary><span className="utility">{item.period}</span><strong>{item.company}</strong><span>{item.role}</span><i aria-hidden="true">+</i></summary><div className="experience-detail"><p>{item.detail}</p><div>{item.tags.map(tag => <span className="utility" key={tag}>{tag}</span>)}</div></div></details>)}</div>
      </section>

      <footer className="contact" id="contacto"><p className="section-kicker utility">Contacto · Panamá</p><h2>¿TIENES UN<br />PROBLEMA<br />INTERESANTE?</h2><div className="contact-links"><a href="mailto:contacto@gustavorpolo.com">contacto@gustavorpolo.com ↗</a><a href="#">LinkedIn ↗</a><a href="#">YouTube ↗</a><a href="/Gustavo-Ramos-Polo-CV.pdf" download>Descargar CV ↘</a></div><div className="footer-bottom utility"><span>Gustavo Ramos Polo © 2026</span><a href="#top">Volver arriba ↑</a></div></footer>
    </main>
  );
}
