export type MediaPlatform = "youtube" | "vimeo";
export type MediaCategory = "Televisión" | "Comerciales" | "Motion" | "Social" | "Diseño gráfico";

export type PortfolioMedia = {
  id: string;
  title: string;
  client: string;
  category: MediaCategory;
  year: string;
  duration: string;
  format: "wide" | "portrait" | "square";
  kind?: "video" | "image";
  platform?: MediaPlatform;
  videoId?: string;
  image?: string;
  description: string;
};

// Pega únicamente el ID de YouTube o Vimeo en `videoId`.
// YouTube: youtube.com/watch?v=ESTE_ES_EL_ID
// Vimeo: vimeo.com/ESTE_ES_EL_ID
export const postproductionMedia: PortfolioMedia[] = [
  {
    id: "insomnio",
    title: "Inmsomnio",
    client: "Pieza personal",
    category: "Social",
    year: "2026",
    duration: "REEL",
    format: "portrait",
    platform: "youtube",
    videoId: "8YOBSCOrwM8",
    description: "Reel conceptual creado como una pieza personal para redes sociales, inspirado en la experiencia del insomnio y la sensación de permanecer mentalmente activo durante la noche. La pieza utiliza técnicas de superposición y exposición para integrar mi silueta con diferentes momentos del video, creando una narrativa más introspectiva y experimental. El trabajo fue realizado en Adobe Premiere Pro, incluyendo edición, colorización, composición y efectos visuales.",
  },
  {
    id: "levitating",
    title: "Levitating",
    client: "Pieza personal",
    category: "Motion",
    year: "2026",
    duration: "REEL",
    format: "portrait",
    platform: "youtube",
    videoId: "_CUnv93Xq3s",
    description: "Pieza audiovisual experimental creada para redes sociales, combinando generación de imágenes con inteligencia artificial, composición y edición de video. A partir de una fotografía se generaron diferentes ángulos y perspectivas del personaje mediante Higgsfield AI, simulando movimientos de cámara alrededor del sujeto. Posteriormente trabajé la composición en Adobe Premiere Pro, incorporando rotoscopía, integración de textos en profundidad, efectos de ruido, glow, colorización y diseño de efectos de sonido. La música utilizada pertenece a terceros y la pieza fue realizada con fines artísticos.",
  },
  {
    id: "cumbre-global-2025",
    title: "Cumbre Global 2025",
    client: "Segunda Cumbre Global de Inteligencia + Estrategia",
    category: "Comerciales",
    year: "2025",
    duration: "REEL",
    format: "portrait",
    platform: "youtube",
    videoId: "K5A6lHW7rJo",
    description: "Pieza promocional en formato reel desarrollada para la Segunda Cumbre Global de Inteligencia + Estrategia Panamá 2025. El video fue creado para promocionar el evento en redes sociales y campañas publicitarias, con un enfoque directo en impulsar la reserva y compra de entradas. Me encargué de la edición, ritmo visual y composición de la pieza, complementando el material con elementos gráficos desarrollados en Adobe Photoshop. La edición final y adaptación para redes sociales se realizó en Adobe Premiere Pro.",
  },
];

export const mediaCategories = ["Todo", "Televisión", "Comerciales", "Motion", "Social", "Diseño gráfico"] as const;
