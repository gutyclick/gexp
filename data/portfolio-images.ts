import type { PortfolioMedia } from "./postproduction";

/**
 * ARCHIVO FÁCIL DE EDITAR
 *
 * Para agregar otra imagen:
 * 1. Copia uno de los bloques entre llaves.
 * 2. Cambia id, title, client, year, format, image y description.
 * 3. Guarda tu archivo dentro de /public/img/. La ruta siempre empieza con /img/.
 *
 * format puede ser: "wide", "portrait" o "square".
 */
export const portfolioImages: PortfolioMedia[] = [
  {
    id: "flyer-guzzfx",
    kind: "image",
    title: "Identidad GuzzFX",
    client: "GuzzFX",
    category: "Diseño gráfico",
    year: "2025",
    duration: "FLYER",
    format: "wide",
    image: "/img/flyers/HERO-GUZZFX.png",
    description: "Composición visual principal para presentar un producto con una estética clara, digital y reconocible.",
  },
  {
    id: "flyer-seminario",
    kind: "image",
    title: "Seminario",
    client: "Comunicación institucional",
    category: "Diseño gráfico",
    year: "2025",
    duration: "FLYER",
    format: "portrait",
    image: "/img/flyers/SEMINARIO.png",
    description: "Pieza gráfica creada para promocionar un seminario y organizar su información de forma directa y atractiva.",
  },
];
