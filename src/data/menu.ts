// Menú oficial "Asian Fusion Food" publicado por el restaurante en Facebook (15 abr 2025).
// ⚠️ Confirmar precios vigentes con el restaurante. Precios en lempiras (L).

export type PhotoKey =
  | 'dimSum'
  | 'polloAgridulce'
  | 'costillaSalPimienta'
  | 'sopaHongShao'
  | 'polloArvejas'
  | 'pancetaCombo';

export type MenuItem = {
  name: string;
  /** null = precio no publicado */
  price: number | null;
  note?: string;
  house?: boolean;
  photo?: PhotoKey;
};

export type MenuCategory = {
  id: string;
  label: string;
  /** Foto que se muestra al elegir la categoría */
  photo?: PhotoKey;
  /** Una línea opcional bajo el título de la categoría */
  intro?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'entradas',
    label: 'Entradas y dim sum',
    photo: 'dimSum',
    items: [
      { name: 'Wantán fritos', price: 220, note: 'Con salsa agridulce' },
      { name: 'Tacos fritos', price: 220, note: 'Rollitos crujientes con salsa agridulce' },
      { name: 'Shao mai al vapor', price: 240, note: '8 unidades', photo: 'dimSum' },
      { name: 'Dumplings fritos', price: 300, note: 'Se preparan al momento, de 15 a 20 minutos', photo: 'dimSum' },
    ],
  },
  {
    id: 'arroces',
    label: 'Arroces y fideos',
    items: [
      { name: 'Arroz frito de la casa', price: 280 },
      { name: 'Tallarín chop suey', price: 300 },
      { name: 'Fideos de arroz fritos', price: 300 },
      { name: 'Arroz frito de camarones', price: 320 },
    ],
  },
  {
    id: 'carnes',
    label: 'Carnes y aves',
    photo: 'costillaSalPimienta',
    items: [
      { name: 'Pollo agridulce', price: 350, photo: 'polloAgridulce' },
      { name: 'Costilla agridulce', price: 350 },
      { name: 'Res a la plancha', price: 350 },
      { name: 'Costilla a la sal pimienta', price: 450, photo: 'costillaSalPimienta' },
    ],
  },
  {
    id: 'mariscos',
    label: 'Mariscos',
    items: [
      { name: 'Filete de pescado empanizado', price: 320 },
      { name: 'Camarones al vapor', price: 420, note: 'Con brócoli' },
      { name: 'Camarón a la sal pimienta', price: 580 },
      { name: 'Camarón estilo Moon', price: 620, house: true },
      { name: 'Camarones jumbo empanizados', price: 620 },
      { name: 'Langosta a la sal pimienta o a la margarina', price: 880, note: 'Porción para dos' },
    ],
  },
  {
    id: 'especiales',
    label: 'Especiales',
    photo: 'sopaHongShao',
    intro: 'Platos que salen en nuestras redes. Pregunta por precio y disponibilidad.',
    items: [
      { name: 'Sopa de res Hong Shao', price: null, note: 'Res estofada, fideos y huevo frito', photo: 'sopaHongShao' },
      { name: 'Ramen de res', price: null },
      { name: 'Pollo salteado con arvejas chinas', price: null, photo: 'polloArvejas' },
      { name: 'Combo de panceta de cerdo', price: null, note: 'Con arroz, pepino y kimchi', photo: 'pancetaCombo' },
    ],
  },
];

export const formatPrice = (p: number | null) => (p === null ? 'Consultar' : `L ${p}`);
