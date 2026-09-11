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
  thumbnail?: string;
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
  {
    id: "daleclick-box",
    title: "DaleClick Box",
    client: "Proyecto propio",
    category: "Motion",
    year: "2024",
    duration: "00:24",
    format: "wide",
    platform: "vimeo",
    videoId: "1026208654",
    thumbnail: "https://i.vimeocdn.com/video/1945946581-fdceb0ecb44686829ec0616961e38866fbc05142982cc81cf7e2e61055cfc9e5-d_1280x720",
    description: "Video promocional para mi empresa DaleClick Box, desarrollado con motion graphics en Adobe After Effects e ilustraciones creadas en Adobe Illustrator.",
  },
  {
    id: "intro-docuserie",
    title: "Intro para docuserie",
    client: "Canal de YouTube",
    category: "Motion",
    year: "2022",
    duration: "00:17",
    format: "wide",
    platform: "vimeo",
    videoId: "681504747",
    thumbnail: "https://i.vimeocdn.com/video/1381299626-33e5d0517ef3b6bac200e2b1e9aba16c52bf0403901e2c82013a97cf455b15ee-d_1280x720",
    description: "Intro creada para un canal de YouTube dedicado a docuseries de misterio y crimen.",
  },
  {
    id: "producto-calzado",
    title: "Producto · Calzado",
    client: "Tienda de calzado",
    category: "Comerciales",
    year: "2022",
    duration: "00:13",
    format: "square",
    platform: "vimeo",
    videoId: "681505240",
    thumbnail: "https://i.vimeocdn.com/video/1381300820-4082e5c372caa63640189d95c2c976b91957df6a94f0319f6e8ceda84f996ef3-d_720x720",
    description: "Video promocional de producto desarrollado para una tienda de calzado.",
  },
  {
    id: "atypical-culture",
    title: "Atypical Culture",
    client: "Marca de ropa",
    category: "Comerciales",
    year: "2022",
    duration: "00:14",
    format: "wide",
    platform: "vimeo",
    videoId: "735307236",
    thumbnail: "https://i.vimeocdn.com/video/1479670484-3dd0cf21355ae1a96cad4dcc535c26ce02a70d671ef818e7d0830ba5cb5bae48-d_1280x792",
    description: "Pieza promocional creada para la marca de ropa Atypical Culture.",
  },
];

export const mediaCategories = ["Todo", "Televisión", "Comerciales", "Motion", "Social", "Diseño gráfico"] as const;
