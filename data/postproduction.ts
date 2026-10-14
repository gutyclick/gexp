export type MediaPlatform = "youtube" | "vimeo";
export type MediaCategory = "Televisión" | "Comerciales" | "Motion" | "Social" | "Diseño gráfico" | "Creaciones con IA";

export type MediaCaseStudy = {
  objective: string;
  responsibility: string;
  tools: string[];
  creativeDecision: string;
  outcome: string;
};

export type PortfolioMedia = {
  id: string;
  title: string;
  client: string;
  category: MediaCategory;
  additionalCategories?: MediaCategory[];
  year: string;
  duration: string;
  format: "wide" | "portrait" | "square";
  kind?: "video" | "image";
  platform?: MediaPlatform;
  videoId?: string;
  image?: string;
  thumbnail?: string;
  description: string;
  caseStudy?: MediaCaseStudy;
};

// Pega únicamente el ID de YouTube o Vimeo en `videoId`.
// YouTube: youtube.com/watch?v=ESTE_ES_EL_ID
// Vimeo: vimeo.com/ESTE_ES_EL_ID
export const postproductionMedia: PortfolioMedia[] = [
  {
    id: "preventa-tu-manana",
    title: "Preventa · Tu Mañana",
    client: "MEDCOM · Tu Mañana",
    category: "Comerciales",
    year: "2023",
    duration: "PROMO",
    format: "wide",
    platform: "youtube",
    videoId: "yCBR3v52JCQ",
    description: "Promo creada para la preventa de Tu Mañana, un encuentro en el que clientes estratégicos conocen el programa y reservan espacios comerciales. Me encargué de construir una pieza clara y dinámica para presentar la propuesta del show, combinando edición, composición y motion graphics en Adobe Premiere Pro y After Effects.",
  },
  {
    id: "navidad-tu-manana-2023",
    title: "Navidad · Tu Mañana",
    client: "MEDCOM · Tu Mañana",
    category: "Televisión",
    year: "2023",
    duration: "PROMO",
    format: "wide",
    platform: "youtube",
    videoId: "e1wta3hpH_Q",
    description: "Promo navideña de Tu Mañana 2023. Estuve a cargo de la postproducción y de los efectos visuales que construyen la atmósfera festiva de la pieza, trabajando la edición y composición con Adobe Premiere Pro y After Effects.",
  },
  {
    id: "promo-presets",
    title: "Promo de presets",
    client: "Producto digital",
    category: "Comerciales",
    year: "2023",
    duration: "REEL",
    format: "portrait",
    platform: "youtube",
    videoId: "RvkkQsGBsWc",
    description: "Reel promocional para un producto digital compuesto por presets fotográficos y recursos dirigidos a diseñadores gráficos. La pieza presenta el producto con un ritmo ágil, demostraciones visuales y motion graphics desarrollados en Adobe Premiere Pro y After Effects.",
  },
  {
    id: "photoshop-layers",
    title: "Photoshop Layers",
    client: "Proyecto personal",
    category: "Motion",
    year: "2023",
    duration: "REEL",
    format: "portrait",
    platform: "youtube",
    videoId: "3Flc1aDeoJ0",
    description: "Proyecto personal que transforma la interfaz de Adobe Photoshop en parte de la narrativa. Utilicé Photoshop como base gráfica y reimaginé el proceso de composición mediante capas, controles y elementos animados posteriormente en Adobe After Effects.",
  },
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
    additionalCategories: ["Creaciones con IA"],
    description: "Pieza audiovisual experimental creada para redes sociales, combinando generación de imágenes con inteligencia artificial, composición y edición de video. A partir de una fotografía se generaron diferentes ángulos y perspectivas del personaje mediante Higgsfield AI, simulando movimientos de cámara alrededor del sujeto. Posteriormente trabajé la composición en Adobe Premiere Pro, incorporando rotoscopía, integración de textos en profundidad, efectos de ruido, glow, colorización y diseño de efectos de sonido. La música utilizada pertenece a terceros y la pieza fue realizada con fines artísticos.",
  },
  {
    id: "ugc-fitness-ia",
    title: "UGC fitness · Demo con IA",
    client: "Campaña conceptual · Producto ficticio",
    category: "Creaciones con IA",
    additionalCategories: ["Social", "Comerciales"],
    year: "2026",
    duration: "REEL",
    format: "portrait",
    platform: "youtube",
    videoId: "W676D2oea34",
    description: "Demo de anuncio UGC nativo para redes sociales. Construí una historia cotidiana alrededor de un producto ficticio generado con IA: una corredora comparte su rutina en un parque y, después, muestra el producto durante un descanso. La pieza busca reconocimiento de marca con el tono espontáneo de una historia personal, sin recurrir a una venta directa.",
    caseStudy: {
      objective: "Explorar cómo presentar un producto ficticio a una audiencia joven mediante una pieza de reconocimiento de marca que se sienta como contenido cotidiano de redes sociales, no como un anuncio de venta directa.",
      responsibility: "Desarrollé el concepto, el guion visual y la secuencia de dos escenas. Definí el encuadre en primera persona, los textos nativos que funcionan como gancho y transición, la narración de estilo diario y la integración del producto. Generé los recursos con IA y realicé la edición final en Adobe Premiere Pro.",
      tools: ["Veo 3.1 · video", "GPT Image 2.5 vía API · imágenes", "ElevenLabs · voz personalizada", "Suno AI · música", "Adobe Premiere Pro · edición"],
      creativeDecision: "La primera escena presenta a una chica fitness corriendo de forma casual en un parque. El punto de vista y el texto sobreimpreso imitan una historia de Instagram para captar la atención sin interrumpir la experiencia. En la segunda escena, ella descansa junto a un árbol y toma el producto; otro texto sugiere que encontró una solución. La voz conecta ambos momentos como si fueran parte de su diario, mientras el entorno natural mantiene la pieza cercana y creíble.",
      outcome: "Pieza conceptual terminada como demostración de un formato UGC para redes sociales. El producto y la campaña son ficticios; no se atribuyen ventas, alcance ni resultados de publicación.",
    },
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

export const favoriteMediaIds = [
  "preventa-tu-manana",
  "navidad-tu-manana-2023",
  "levitating",
  "daleclick-box",
  "promo-presets",
] as const;

export const featuredMediaIds = [
  "preventa-tu-manana",
  "navidad-tu-manana-2023",
  "ugc-fitness-ia",
] as const;

export const mediaCategories = ["Todo", "Televisión", "Comerciales", "Motion", "Social", "Diseño gráfico", "Creaciones con IA"] as const;
