// Datos reales de la ficha de Google (consultada el 20 nov 2026).
// Las citas textuales completas necesitan permiso del dueño o la API de Google Places:
// el campo `quote` queda vacío salvo la frase corta ya verificada.

export const rating = {
  value: 4.3,
  total: 61,
  /** estrellas -> número de reseñas */
  distribution: [
    { stars: 5, count: 40 },
    { stars: 4, count: 11 },
    { stars: 3, count: 4 },
    { stars: 2, count: 1 },
    { stars: 1, count: 5 },
  ],
};

export const featuredQuote = {
  text: 'una atención al cliente 1000/10',
  author: 'Karla P.',
};

export type Review = {
  author: string;
  year: number;
  stars: number;
  context: string;
  scores: { food: number; service: number; atmosphere: number };
  quote?: string;
};

export const reviews: Review[] = [
  { author: 'Gustavo S.', year: 2026, stars: 5, context: 'Cena · L 400–500 por persona', scores: { food: 5, service: 5, atmosphere: 5 } },
  { author: 'Karla P.', year: 2025, stars: 5, context: 'L 400–500 por persona', scores: { food: 4, service: 5, atmosphere: 5 } },
  { author: 'Carlos G.', year: 2026, stars: 5, context: 'Cena · L 300–400 por persona', scores: { food: 5, service: 5, atmosphere: 5 } },
  { author: 'Elvia P.', year: 2025, stars: 5, context: 'Cena · L 300–400 por persona', scores: { food: 5, service: 5, atmosphere: 5 } },
];

/** Temas que Google detecta en las reseñas (con su número de menciones). */
export const topics = [
  { label: 'Comida', count: 10 },
  { label: 'Ambiente', count: 4 },
  { label: 'Atención al cliente', count: 2 },
  { label: 'Bebidas', count: 2 },
  { label: 'Ramen', count: 2 },
];
