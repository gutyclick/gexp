import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { crealySteps, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return project ? { title: `${project.name} — Gustavo Ramos Polo`, description: project.description } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><Header /><main className="case-study">
    <section className="case-hero" style={{ "--tone": project.tone } as React.CSSProperties}>
      <p className="utility">{project.category} · {project.year}</p><h1>{project.name}</h1><p className="case-lead">{project.shortDescription}</p>
      <div className="case-image"><Image src={project.heroImage} alt={`Vista conceptual de ${project.name}`} fill priority sizes="100vw" /></div>
    </section>
    <section className="case-intro"><p className="section-kicker utility">El proyecto</p><h2>{project.description}</h2><div className="case-facts"><div><span className="utility">Rol</span>{project.role.map(x => <p key={x}>{x}</p>)}</div><div><span className="utility">Herramientas</span><p>{project.tools.join(" · ")}</p></div>{project.url && <div><span className="utility">En línea</span><a href={project.url} target="_blank" rel="noreferrer">{project.url.replace("https://", "")} ↗</a></div>}</div></section>
    {project.slug === "crealy" && <section className="build-sequence"><p className="section-kicker utility">Del concepto al producto</p><h2>TODO LO NECESARIO<br />PARA HACERLO REAL.</h2><div>{crealySteps.map((step, i) => <div key={step}><span className="utility">{String(i + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}</div><p className="disclosure">El desarrollo se implementó principalmente con herramientas de desarrollo asistido por IA, bajo mi dirección de producto, pruebas e iteración.</p></section>}
    <section className="case-metrics">{project.metrics.map(metric => <p key={metric}>{metric}</p>)}</section>
    {project.slug === "post-produccion" && <section className="media-placeholder"><p className="utility">Galería audiovisual preparada</p><h2>TV · REELS · MOTION<br />COMERCIAL · CONTENIDO</h2><p>Los videos se cargarán bajo demanda cuando estén disponibles.</p></section>}
    <Link className="next-project" href={`/proyectos/${next.slug}`}><span className="utility">Siguiente proyecto</span><strong>{next.name}</strong><i>↗</i></Link>
  </main></>;
}
