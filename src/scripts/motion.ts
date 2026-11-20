/**
 * Moon Bistro • Bar — sistema de movimiento (Fase 4)
 *
 * Personalidad: lounge nocturno, elegante y suave. Un único momento orquestado (la entrada del hero),
 * revelados con máscara en los títulos y parallax solo en fotografías (nunca en el texto).
 * Solo se animan `transform` y `opacity`; todo depende de `prefers-reduced-motion: no-preference`.
 *
 * Capas de profundidad del parallax (scroll-experience):
 *   cielo estrellado 0.2x  ·  luna 0.5x  ·  fotos 0.7x–1.6x  ·  texto 1x (sin parallax)
 */
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

declare global {
  interface Window {
    __moonLenis?: Lenis;
  }
}

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const q = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => scope.querySelector<T>(sel);
const qa = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => [...scope.querySelectorAll<T>(sel)];
const markReady = () => root.classList.add('motion-ready');

/** Curvas: salida larga y suave para entradas (Emil: ease-out fuerte, nunca ease-in). */
const EASE_REVEAL = 'expo.out';
const EASE_SOFT = 'power3.out';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
  // Sin smooth scroll ni parallax: todo queda en su estado final y visible.
  markReady();
} else {
  init();
}

function init() {
  /* ── 1. Smooth scroll (Lenis) sincronizado con ScrollTrigger ─────────────────────── */
  const lenis = new Lenis({
    lerp: 0.085, // inercia suave, sin secuestrar el scroll
    smoothWheel: true,
    syncTouch: false, // en táctil se respeta el scroll nativo (mejor rendimiento y control)
    autoRaf: false,
    stopInertiaOnNavigate: true,
  });
  window.__moonLenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const header = q('#site-header');

  // Anclas internas con Lenis; el foco va al destino para que el teclado y los lectores de pantalla lo sigan.
  // El margen del header lo pone `scroll-padding-top` en CSS (Lenis lo respeta), así no se suma dos veces.
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    const hash = link?.getAttribute('href');
    if (!link || !hash || hash.length < 2) return;
    const target = q(hash);
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target, {
      duration: 1.4,
      onComplete: () => {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      },
    });
    history.pushState(null, '', hash);
  });

  // Header: se esconde al bajar y vuelve al subir (más pantalla para las fotos).
  lenis.on('scroll', ({ scroll, direction }: Lenis) => {
    if (!header || root.dataset.menuOpen === 'true') return;
    header.dataset.hidden = String(direction === 1 && scroll > window.innerHeight * 0.9);
  });

  /* ── 2. Entrada del hero (una sola vez, al cargar) ───────────────────────────────── */
  heroIntro();

  /* ── 3. Revelado tipográfico de títulos (máscara por línea) ─────────────────────── */
  qa('[data-reveal]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true, // re-divide al cambiar el ancho o al cargar las fuentes
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 105,
          duration: 1.25,
          stagger: 0.09,
          ease: EASE_REVEAL,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }),
    });
  });

  // La dirección (momento tipográfico) entra como bloque: es un enlace y no conviene partirlo.
  qa('[data-reveal-block]').forEach((el) => {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 1.2,
      ease: EASE_REVEAL,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  /* ── 4. Barras de calificación: crecen una vez, desde la izquierda ──────────────── */
  const bars = qa('[data-bar]');
  if (bars.length) {
    gsap.from(bars, {
      scaleX: 0,
      duration: 1.4,
      stagger: 0.07,
      ease: EASE_REVEAL,
      scrollTrigger: { trigger: bars[0].closest('dl') ?? bars[0], start: 'top 85%', once: true },
    });
  }

  /* ── 5. Parallax multicapa (scrub), con amplitud menor en móvil ──────────────────── */
  const mm = gsap.matchMedia();
  mm.add({ desktop: '(min-width: 1024px)', mobile: '(max-width: 1023.98px)' }, (ctx) => {
    const desktop = Boolean(ctx.conditions?.desktop);
    const scrub = true; // Lenis ya suaviza: scrub directo evita doble retardo

    // Hero: el cielo (0.2x) y la luna (0.5x) se quedan atrás mientras el texto sube a velocidad normal.
    const hero = q('#inicio');
    if (hero) {
      const range = { trigger: hero, start: 'top top', end: 'bottom top', scrub };
      gsap.to('[data-hero-stars]', { yPercent: 10, ease: 'none', scrollTrigger: range });
      gsap.to('.hero-moon', { yPercent: desktop ? 26 : 18, scale: 1.06, ease: 'none', scrollTrigger: range });
    }

    // Fotografías: la capa interna se desplaza dentro de su marco según su profundidad (data-speed).
    // La capa sobra un 12% arriba y abajo, así que el desplazamiento se limita a ±9.5% para no mostrar bordes.
    const base = desktop ? 6 : 4;
    qa('[data-parallax]').forEach((frame) => {
      const inner = q('[data-parallax-inner]', frame);
      if (!inner) return;
      const amp = Math.min(9.5, base * Number(frame.dataset.speed ?? 1));
      gsap.fromTo(
        inner,
        { yPercent: -amp },
        { yPercent: amp, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub } },
      );
    });

    // Menú: la luna gris de la carta impresa gira ~110° y se traslada un poco hacia la derecha.
    // El recorrido va ligado a la propia luna (no a toda la carta) para que el giro completo ocurra mientras se ve.
    // El desplazamiento es corto para que se lea como deriva, no como salto.
    gsap.fromTo(
      '[data-menu-moon]',
      { xPercent: 0, yPercent: -4, rotate: -40 },
      {
        xPercent: desktop ? 9 : 6,
        yPercent: 8,
        rotate: 70,
        ease: 'none',
        scrollTrigger: { trigger: '[data-menu-moon]', start: 'top bottom', end: 'bottom top', scrub },
      },
    );

    // Visítanos: el cielo de fondo, a menos velocidad que el contenido.
    gsap.fromTo(
      '[data-stars-layer]',
      { yPercent: -6 },
      { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '#visitanos', start: 'top bottom', end: 'bottom top', scrub } },
    );
  });

  /* ── 6. Microinteracción del menú: al filtrar, las filas entran escalonadas ─────── */
  document.addEventListener('menu:filtered', () => {
    lenis.resize();
    ScrollTrigger.refresh();
    const rows = qa('#menu [data-cat]:not([hidden]) li');
    gsap.fromTo(
      rows,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.03, ease: EASE_SOFT, overwrite: true, clearProps: 'transform,opacity' },
    );
  });

  // Recalcular cuando cambian las medidas (fuentes e imágenes ya cargadas).
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

  markReady();
}

function heroIntro() {
  const title = q('[data-hero-title]');
  const moon = q('[data-hero-moon]');
  const stars = q('[data-hero-stars]');
  const items = qa('[data-hero-enter]');
  const header = q('#site-header');
  if (!title || !moon) return;

  const split = SplitText.create(title, { type: 'lines', mask: 'lines' });
  const tl = gsap.timeline({
    defaults: { ease: EASE_REVEAL },
    // Al terminar se deshace la división: el titular vuelve a ser texto normal y fluye al redimensionar.
    onComplete: () => split.revert(),
  });

  tl.from(stars, { opacity: 0, duration: 2.2, ease: 'power2.out' }, 0)
    .from(moon, { yPercent: 14, scale: 0.94, opacity: 0, duration: 2.4 }, 0.1)
    .from(split.lines, { yPercent: 105, duration: 1.4, stagger: 0.1 }, 0.35)
    .from(items, { y: 18, opacity: 0, duration: 1.1, stagger: 0.09, ease: EASE_SOFT }, 0.8)
    .from(header, { opacity: 0, duration: 1, ease: EASE_SOFT }, 0.6);
}
