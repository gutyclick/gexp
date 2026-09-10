"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { experiments, projects } from "@/data/projects";
import { chapters, experiences, metrics, portraitConfig, skillGroups } from "@/data/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeExperience() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mobile = matchMedia("(max-width: 760px)").matches;
    gsap.from(".hero-line > span", { yPercent: 115, duration: 1.1, stagger: .08, ease: "power4.out", delay: 1 });
    if (!mobile) {
      gsap.to(".hero-portrait", { yPercent: 22, scale: 1.08, opacity: .3, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
      gsap.utils.toArray<HTMLElement>(".manifesto-line").forEach((el) => gsap.fromTo(el, { opacity: .12 }, { opacity: 1, scrollTrigger: { trigger: el, start: "top 68%", end: "bottom 45%", scrub: true } }));
    }
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => gsap.from(el, { y: mobile ? 24 : 70, opacity: 0, duration: mobile ? .55 : 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } }));
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
      <div className="playhead" aria-hidden="true"><span /></div>
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

      <section className="manifesto" aria-labelledby="manifesto-title">
        <p className="section-kicker utility">01 / Manifiesto</p>
        <h2 id="manifesto-title" data-reveal>TRANSFORMO IDEAS<br />EN EXPERIENCIAS.</h2>
        <div className="manifesto-copy">
          {["Empecé con video.", "Después, diseño.", "Después, sitios web.", "Después, negocios.", "Después, productos digitales.", "La IA cambió cuánto podía construir.", "Hoy, creatividad, producto y tecnología viven en un mismo flujo de trabajo."].map(line => <p className="manifesto-line" key={line}>{line}</p>)}
        </div>
      </section>

      <section className="chapters" aria-labelledby="chapters-title">
        <div className="section-top"><p className="section-kicker utility">02 / Recorrido</p><h2 id="chapters-title">UNA HERRAMIENTA<br />LLEVÓ A LA SIGUIENTE.</h2></div>
        <div className="chapter-track">{chapters.map((chapter) => <article className="chapter" key={chapter.year} data-reveal><time>{chapter.year}</time><div><h3>{chapter.title}</h3><p>{chapter.text}</p></div></article>)}</div>
      </section>

      <section className="proof" aria-labelledby="proof-title">
        <div className="section-top"><p className="section-kicker utility">03 / Evidencia</p><h2 id="proof-title">Los adjetivos no.<br />Los resultados.</h2></div>
        <div className="metrics">{metrics.map((metric, index) => <div className="metric" key={metric.label} data-reveal><span className="utility">0{index + 1}</span><strong>{metric.value}<sup>{metric.suffix}</sup></strong><div><p>{metric.label}</p><small className="utility">{metric.note}</small></div></div>)}</div>
      </section>

      <section className="work" id="trabajo" aria-labelledby="work-title">
        <div className="work-heading"><p className="section-kicker utility">04 / Trabajo seleccionado</p><h2 id="work-title" data-reveal>TRABAJO<br />SELECCIONADO</h2></div>
        <div className="project-list">{projects.map((project, index) => (
          <Link href={`/proyectos/${project.slug}`} className="project-row" key={project.slug} data-cursor>
            <span className="project-index utility">0{index + 1}</span>
            <div><h3>{project.name}</h3><p>{project.shortDescription}</p></div>
            <div className="project-meta utility"><span>{project.category}</span><span>{project.year}</span></div>
            <div className="project-preview" style={{ "--tone": project.tone } as React.CSSProperties}><Image src={project.thumbnail} alt="" fill sizes="38vw" /></div>
          </Link>
        ))}</div>
      </section>

      <section className="experiments" aria-labelledby="experiments-title">
        <div className="section-top"><p className="section-kicker utility">05 / Experimentos</p><h2 id="experiments-title">COSAS QUE<br />HE CONSTRUIDO</h2></div>
        <div>{experiments.map(([name, detail]) => <div className="experiment-row" key={name}><strong>{name}</strong><span>{detail}</span><i aria-hidden="true">↗</i></div>)}</div>
      </section>

      <section className="experience" id="experiencia" aria-labelledby="experience-title">
        <div className="section-top"><p className="section-kicker utility">06 / Experiencia</p><h2 id="experience-title">TRABAJO REAL.<br />CONTEXTOS DISTINTOS.</h2></div>
        <div className="timeline">{experiences.map(item => <details key={item.company}><summary><span className="utility">{item.period}</span><strong>{item.company}</strong><span>{item.role}</span><i aria-hidden="true">+</i></summary><div className="experience-detail"><p>{item.detail}</p><div>{item.tags.map(tag => <span className="utility" key={tag}>{tag}</span>)}</div></div></details>)}</div>
      </section>

      <section className="skills" aria-labelledby="skills-title">
        <p className="section-kicker utility">07 / Práctica</p><h2 id="skills-title">UNA PRÁCTICA.<br />TRES DISCIPLINAS.</h2>
        <div className="skill-groups">{skillGroups.map(group => <div key={group.name}><h3 className="utility">{group.name}</h3>{group.items.map(item => <p key={item}>{item}</p>)}</div>)}</div>
        <div className="marquee" aria-label="Herramientas"><div>PREMIERE · AFTER EFFECTS · PHOTOSHOP · NEXT.JS · SUPABASE · VERCEL · STRIPE · CODEX · GITHUB ·&nbsp;</div></div>
      </section>

      <section className="about" id="sobre-mi" aria-labelledby="about-title">
        <p className="section-kicker utility">08 / Sobre mí</p><h2 id="about-title">ME INTERESA LO QUE PASA ENTRE:</h2>
        <div className="about-statements"><p>«Tengo una idea».</p><span>Y</span><p>«Está funcionando».</p></div>
        <div className="about-body"><p>Ese espacio es donde hago mi mejor trabajo.</p><p>Soy un profesional híbrido entre postproducción, producto digital y tecnología. No me presento como ingeniero de software: uso herramientas de IA para ampliar lo que puedo construir bajo mi dirección, pruebas e iteración.</p><p>Mi recorrido comenzó en producción visual y se extendió hacia diseño, e-commerce, aplicaciones y productos digitales. Aprendo lo que cada problema exige y construyo desde ahí.</p></div>
        <div className="education"><div><span className="utility">Título obtenido · 2018—2024</span><strong>Universidad Latina de Panamá</strong><p>Licenciatura en Producción Gráfica Digital para Televisión</p></div><div><span className="utility">2020 · 8 meses · C1 reportado</span><strong>Centre of English Studies</strong><p>Worthing, West Sussex, Reino Unido · Estudios de inglés</p></div></div>
      </section>

      <section className="currently"><p className="section-kicker utility">Ahora mismo</p><div className="currently-lines"><p>Postproduciendo para televisión.</p><p>Construyendo e iterando Crealy.</p><p>Enseñando edición en español e inglés.</p><p>Explorando flujos creativos asistidos por IA.</p><p>Abierto a oportunidades en Panamá y mercados internacionales.</p></div></section>

      <footer className="contact" id="contacto"><p className="section-kicker utility">09 / Contacto · Panamá</p><h2>¿TIENES UN<br />PROBLEMA<br />INTERESANTE?</h2><div className="contact-links"><a href="mailto:contacto@gustavorpolo.com">contacto@gustavorpolo.com ↗</a><a href="#">LinkedIn ↗</a><a href="#">YouTube ↗</a><a href="/Gustavo-Ramos-Polo-CV.pdf" download>Descargar CV ↘</a></div><div className="footer-bottom utility"><span>Gustavo Ramos Polo © 2026</span><a href="#top">Volver arriba ↑</a></div></footer>
    </main>
  );
}
