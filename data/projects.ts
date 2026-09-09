export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  thumbnail: string;
  gallery: string[];
  video?: string;
  role: string[];
  tools: string[];
  metrics: string[];
  url?: string;
  featured: boolean;
  tone: string;
};

export const projects: Project[] = [
  {
    slug: "crealy", name: "CREALY", category: "Producto con IA", year: "2026",
    shortDescription: "De una idea a un producto de IA funcional.",
    description: "Plataforma impulsada por IA para ayudar a creadores y negocios a producir contenido visual atractivo sin dominar prompts ni herramientas de diseño.",
    heroImage: "/images/projects/crealy.svg", thumbnail: "/images/projects/crealy.svg", gallery: [],
    role: ["Fundador", "Product builder", "Dirección creativa"],
    tools: ["Next.js", "Supabase", "Vercel", "Cloudflare R2", "Stripe", "Sentry", "GitHub", "Codex", "APIs de IA"],
    metrics: ["Producto de extremo a extremo", "Pagos y sistema de créditos", "Generación y almacenamiento de imágenes"],
    url: "https://crealy.app", featured: true, tone: "#d8ff3e",
  },
  {
    slug: "post-produccion", name: "TELEVISIÓN / POST", category: "Narrativa audiovisual", year: "2018—2026",
    shortDescription: "Historias hechas con ritmo, imagen y sonido.",
    description: "Una práctica audiovisual construida entre televisión, reels, motion, comerciales y contenido digital.",
    heroImage: "/images/projects/post.svg", thumbnail: "/images/projects/post.svg", gallery: [],
    role: ["Editor", "Postproductor", "Diseño de movimiento"], tools: ["Premiere Pro", "After Effects", "Photoshop", "CapCut"],
    metrics: ["7–8 piezas semanales", "C11 Films", "MEDCOM · Tu Mañana"], featured: true, tone: "#ff542e",
  },
  {
    slug: "web", name: "WEB & E-COMMERCE", category: "Experiencias digitales", year: "2021—2026",
    shortDescription: "Sitios que convierten ideas en presencia y ventas.",
    description: "Diseño, construcción e iteración de experiencias web y comercio electrónico con foco en claridad y resultados.",
    heroImage: "/images/projects/web.svg", thumbnail: "/images/projects/web.svg", gallery: [],
    role: ["Diseño", "Construcción", "Iteración"], tools: ["Next.js", "WordPress", "WooCommerce", "Vercel"],
    metrics: ["Diseño a despliegue", "E-commerce", "Sistemas editables"], featured: true, tone: "#6e8cff",
  },
  {
    slug: "apps", name: "APPS / EXPERIMENTOS", category: "Prototipos funcionales", year: "2023—2026",
    shortDescription: "Ideas pequeñas llevadas hasta una pantalla real.",
    description: "Aplicaciones y prototipos nacidos de una pregunta simple: ¿qué hace falta para que esto funcione?",
    heroImage: "/images/projects/apps.svg", thumbnail: "/images/projects/apps.svg", gallery: [],
    role: ["Concepto", "Producto", "Publicación"], tools: ["Android", "AdMob", "IA asistida", "Google Play"],
    metrics: ["Decide Me · 100+ instalaciones", "Wallpaper Drop · 200+ instalaciones", "Contrato · prototipo"], featured: true, tone: "#ef83b2",
  },
];

export const experiments = [
  ["DECIDE ME", "App Android · 100+ instalaciones"],
  ["WALLPAPER DROP", "App Android · 200+ instalaciones"],
  ["CONTRATO", "Marketplace freelance para Panamá"],
  ["LOEDITAMOS.COM", "Experimento de edición productizada"],
  ["INSPO.BOOST", "36K seguidores · múltiples videos de 1M+"],
  ["YOUTUBE", "≈2M visualizaciones históricas"],
];

export const crealySteps = ["Idea", "Diseño de producto", "Desarrollo asistido por IA", "Autenticación", "Generación de imágenes", "Créditos", "Pagos", "Almacenamiento", "Administración", "Despliegue"];
