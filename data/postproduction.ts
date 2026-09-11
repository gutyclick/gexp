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
  { id: "tv-reportajes", title: "Reportajes e historias", client: "C11 Films · Tu Mañana", category: "Televisión", year: "2026", duration: "03:40", format: "wide", platform: "vimeo", videoId: "", description: "Construcción narrativa, edición, mezcla y acabado de piezas semanales para televisión nacional." },
  { id: "calle7-kids", title: "Calle 7 Kids", client: "C11 Films", category: "Motion", year: "2026", duration: "00:45", format: "portrait", platform: "youtube", videoId: "", description: "Animación y recursos visuales asistidos por IA para una pieza emitida en televisión." },
  { id: "promo-navidad", title: "Promo de Navidad", client: "MEDCOM · Tu Mañana", category: "Comerciales", year: "2023", duration: "00:30", format: "wide", platform: "vimeo", videoId: "", description: "Chroma key, composición, efectos y diseño gráfico para una promoción especial." },
  { id: "identidad-promos", title: "Sistema visual de promos", client: "MEDCOM", category: "Motion", year: "2023", duration: "01:10", format: "square", platform: "youtube", videoId: "", description: "Rediseño del lenguaje de promos con iconografía, animación y elementos reutilizables." },
  { id: "contenido-comercial", title: "Contenido comercial", client: "Army Supplements", category: "Social", year: "2022—2025", duration: "00:24", format: "portrait", platform: "youtube", videoId: "", description: "Edición de reels y piezas promocionales adaptadas al ritmo de plataformas sociales." },
  { id: "eventos-especiales", title: "Eventos y segmentos", client: "Selección freelance", category: "Televisión", year: "2021—2026", duration: "02:15", format: "wide", platform: "vimeo", videoId: "", description: "Entrevistas, eventos, contenido institucional y piezas especiales construidas desde material bruto." },
];

export const mediaCategories = ["Todo", "Televisión", "Comerciales", "Motion", "Social", "Diseño gráfico"] as const;
