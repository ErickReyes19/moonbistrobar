// Fuente única de datos del restaurante. Origen y fecha de cada dato: RESTAURANT_DATA.md.

export type DayHours = {
  /** 0 = domingo … 6 = sábado (igual que Date#getDay) */
  dow: number;
  day: string;
  /** "HH:MM" en hora de Honduras; null = cerrado */
  open: string | null;
  /** "24:00" = medianoche */
  close: string | null;
};

const whatsappNumber = '50492330243';
const whatsappText = 'Hola, quiero reservar una mesa en Moon Bistro Bar.';

export const site = {
  name: 'Moon Bistro • Bar',
  legalName: 'Moon Bistro Bar',
  tagline: 'En Moon todo sabe mejor',
  description:
    'Bistro y bar de fusión asiática en Barrio Los Andes, San Pedro Sula: dim sum, wok, mariscos y coctelería de autor bajo la luna. Reservas por WhatsApp al 9233-0243.',
  locale: 'es-HN',
  timeZone: 'America/Tegucigalpa',

  phone: {
    display: '9233-0243',
    intl: '+50492330243',
    href: 'tel:+50492330243',
  },
  whatsapp: {
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
  },
  email: 'moonbistrobar@gmail.com',

  address: {
    line1: '13 Avenida, entre 5 y 6 Calle S',
    line2: 'Barrio Los Andes, San Pedro Sula',
    street: 'Bo. Los Andes 13 Ave, 6 Calle S',
    city: 'San Pedro Sula',
    region: 'Cortés',
    postalCode: '21101',
    country: 'HN',
  },
  geo: { lat: 15.5106297, lng: -88.0331523 },
  maps: {
    link: 'https://maps.app.goo.gl/qKjwsfcDaaZRSz8T7',
    reviews:
      'https://www.google.com/maps/place/Moon+Bistro+bar/@15.5106297,-88.0331523,17z/data=!4m6!3m5!1s0x8f665b0042cbab81:0xb58bca59debae5b8!8m2!3d15.5106297!4d-88.0331523!16s%2Fg%2F11m6w_p9rn',
    embed: 'https://maps.google.com/maps?q=15.5106297,-88.0331523&z=17&hl=es&output=embed',
  },

  social: {
    instagram: { handle: '@moonbistrobarsps', href: 'https://www.instagram.com/moonbistrobarsps/' },
    facebook: { handle: 'MOON Bistró Bar', href: 'https://www.facebook.com/people/MOON-Bistr%C3%B3-Bar/61575039210300/' },
    tiktok: { handle: '@moonbistro888', href: 'https://www.tiktok.com/@moonbistro888' },
  },

  // Horario según Google (nov 2026). ⚠️ Confirmar con el restaurante: un video de 2025 daba horarios más largos.
  hours: [
    { dow: 2, day: 'Martes', open: '12:00', close: '22:00' },
    { dow: 3, day: 'Miércoles', open: '12:00', close: '22:00' },
    { dow: 4, day: 'Jueves', open: '12:00', close: '22:00' },
    { dow: 5, day: 'Viernes', open: '12:00', close: '24:00' },
    { dow: 6, day: 'Sábado', open: '12:00', close: '24:00' },
    { dow: 0, day: 'Domingo', open: '12:00', close: '21:00' },
    { dow: 1, day: 'Lunes', open: null, close: null },
  ] satisfies DayHours[],
} as const;

/** "22:00" -> "10:00 p. m."; "24:00" -> "medianoche" (formato hondureño de 12 horas) */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  if (h === 24 || (h === 0 && m === 0)) return 'medianoche';
  const h24 = h % 24;
  const suffix = h24 < 12 ? 'a. m.' : 'p. m.';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${suffix}`;
}

export function formatRange(d: DayHours): string {
  return d.open && d.close ? `${formatTime(d.open)} – ${formatTime(d.close)}` : 'Cerrado';
}

export const navLinks = [
  { href: '#concepto', label: 'Concepto' },
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#visitanos', label: 'Visítanos' },
] as const;
