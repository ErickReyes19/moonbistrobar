# Moon Bistro • Bar — Sistema de diseño y arquitectura UX

> Fase 3 · 20 nov 2026 · Stack: **Astro 7 + Tailwind CSS 4**, sin frameworks de UI.
> Fuente de verdad de marca: `RESTAURANT_DATA.md` §2. Activos: `ASSETS.md`.
> Skills aplicadas: firecrawl-website-design-clone (método de análisis de referencia), frontend-design, ui-ux-pro-max, design-taste-frontend (taste-skill), astro y astro-best-practices.

---

## 0. Brief en una línea

**Qué:** un bistro y bar de fusión asiática con temática lunar en Barrio Los Andes, San Pedro Sula.
**Para quién:** parejas, grupos de amigos y celebraciones locales que buscan una cena distinta y un lugar para fotos.
**La acción principal:** **Reservar por WhatsApp** (+504 9233-0243). La secundaria es ver el menú.
**Tipo de sitio:** *place* (un lugar al que la gente va), según la clasificación de taste-skill.

---

## 1. Análisis del sitio de referencia (solo UX)

**Referencia:** https://anejotribeca.com (Añejo Tribeca, NYC). Lo capturé el 20 nov 2026 con el navegador integrado, a 800×455 y recorriendo todo el scroll, porque la CLI de Firecrawl no está instalada y seguí el método de la skill a mano.
**Qué tomé:** la estructura, el orden de las secciones y el flujo de navegación. **No tomé** sus colores, tipografías, textos, fotos ni efectos.

### Patrones observados → decisión para Moon

| Patrón en la referencia | Lo que se ve | Cómo lo adapto en Moon |
|---|---|---|
| Header fijo con logo a la izquierda, navegación en el centro y CTA de reserva siempre visible a la derecha | Botón sólido "Reserve now" que nunca sale de la pantalla | ✅ Lo adopto. Botón **Reservar** (WhatsApp) siempre visible y, en móvil, una **barra de acción inferior** (Reservar + Llamar) |
| Hero a pantalla completa, con una sola frase y un solo CTA | Video del patio, H1 centrado y "View menu" | ✅ Adaptado: el hero muestra **la luna real del local**, que es lo que más los distingue, con H1 a la izquierda y dos acciones como máximo |
| La información práctica (horario y "Directions") justo después del hero | Bloque "Visit us" con foto y horario | ✅ Adaptado: el hero ya trae el estado del día ("Abierto hoy hasta las 22:00") y la dirección. La sección completa de visita va al cierre, junto a la reserva, porque **tu brief fija ese orden** |
| "Our story" en dos columnas, foto y texto | Bloque editorial con "Learn more" | ✅ Sección **Concepto**: dos fotos del local en composición desigual y el texto |
| Banda de galería con título grande | Una banda con imágenes | ✅ Sección **Galería** con fotos reales en un mosaico asimétrico |
| Testimonio grande con autor | Una cita centrada sobre negro | ✅ Sección **Reseñas** con un resumen honesto de la calificación de Google |
| Mapa ancho antes del footer | Mapa a todo el ancho | ✅ Mapa junto al CTA de reserva, en tonos noche |
| Footer en 4 columnas (marca y redes · visítanos · contacto · newsletter) | Navegación repetida abajo | ✅ Footer en 3 columnas (marca y redes · horario · contacto). **No hay newsletter**, porque el restaurante no tiene una |
| Menú en una página aparte, como PDF o subpágina | Fricción: obliga a salir de la home | ❌ Lo mejoro: **el menú va dentro de la home, como texto**, con filtro por categoría y precios visibles |

---

## 2. Concepto de diseño

### "La luna como anfitriona"
El restaurante ya tiene una idea fuerte: **su luna**. La de la pared, la del logo y la del menú impreso. El sitio no inventa otra estética: **sigue el sistema que el restaurante ya usa**.

1. **El hero** usa **la luna real del local**, recortada de la foto del salón y retroiluminada. Es el único elemento llamativo de la página, y lo demás queda en silencio alrededor.
2. **El menú repite la carta impresa:** fondo negro (#0E0E0E), una luna gris enorme a medias detrás del texto, títulos en Playfair Display y precios en lempiras. Quien ya conoce la carta la reconoce.
3. **El anillo lunar del logo**, el círculo con cráteres, es el único ornamento. Se usa como separador y como marca de agua, en lugar de las filigranas genéricas.
4. **El cielo nocturno del logo** (azul #101A27 con estrellas) es el fondo general.

### Revisión contra los "defaults" genéricos (frontend-design)
| Riesgo de plantilla | Decisión |
|---|---|
| "Restaurante de lujo = negro con dorado y serif" (de cualquier restaurante) | Es la **marca real** del cliente, no una elección mía. La distinguen la luna fotográfica real, el eco exacto de la carta impresa y el anillo de cráteres del logo como único ornamento |
| Etiquetas en MAYÚSCULAS espaciadas sobre cada título | ❌ No las uso. Las únicas versalitas son las del logo ("BISTRO • BAR"), porque son de la marca |
| Una palabra del titular en otro color o en itálica | ❌ No |
| Marcadores 01 / 02 / 03 | ❌ No, porque el contenido no es una secuencia |
| Todo en tarjetas redondeadas con sombra | ❌ No. El menú son filas con líneas finas, la galería son fotos con esquinas rectas y las reseñas son texto |
| Degradados decorativos | Solo el **dorado metálico del monograma**, que es parte del logo. Ningún fondo usa degradado |
| Animaciones de aparición en cada sección | Quedan para la Fase 4, y se usan con mesura |

---

## 3. Tokens

### 3.1 Color
Todos los colores salen de `RESTAURANT_DATA.md` §2. En Tailwind 4 se declaran en `@theme` (`src/styles/global.css`).

| Token (CSS) | HEX | Rol |
|---|---|---|
| `--color-night` | #101A27 | Fondo principal (el cielo del logo) |
| `--color-night-deep` | #0A121E | Footer y franjas profundas |
| `--color-night-raised` | #182433 | Superficies elevadas (panel de visita, chips) |
| `--color-ink` | #0E0E0E | Fondo del menú (el negro de la carta impresa) |
| `--color-lunar` | #2A2829 | Líneas finas sobre el negro, la luna gris |
| `--color-gold` | #D9B773 | **Acento de marca**: CTA principal, enlaces activos, anillo de foco |
| `--color-gold-shadow` | #B7854A | Hover del CTA y bordes dorados |
| `--color-gold-bright` | #EBC16F | Extremo claro del degradado del monograma |
| `--color-gold-highlight` | #FFDE88 | Brillo del monograma (nunca en texto) |
| `--color-champagne` | #DFC1A8 | Texto secundario, subtítulos |
| `--color-rose` | #CAB9B4 | Categorías del menú, metadatos |
| `--color-moon` | #FDFCFD | Texto principal |
| `--color-terracotta` | #CB4B28 | Solo decorativo: el marcador del mapa. Nunca en texto pequeño |

**Contraste comprobado:** todos los textos pasan AA sobre `night` y `ink` (ver la tabla de `RESTAURANT_DATA.md` §2.6). El texto oscuro sobre el CTA dorado (#101A27 sobre #D9B773) da **9.2:1**.

### 3.2 Tipografía
| Rol | Familia | Por qué |
|---|---|---|
| Títulos, menú y cifras grandes | **Playfair Display** (variable, 400–600) | Es **la tipografía de la carta impresa** del restaurante |
| Texto corrido, UI y botones | **Karla** (variable, 400–500) | Una sans humanista con carácter que ui-ux-pro-max recomienda para hospitalidad. Es menos genérica que Inter |
| Logotipo ("MOON / BISTRO • BAR") | **Cinzel** (solo en el logo) | Es la más parecida a las capitales romanas del logo |

Las fuentes vienen autoalojadas desde `@fontsource-variable/*`, sin Google Fonts en tiempo de ejecución.

**Escala** (modular con ratio 4:3, inspirada en *The Elements of Typographic Style*):

| Token | Tamaño | Uso |
|---|---|---|
| `text-display` | clamp(2.75rem, 1.6rem + 4.6vw, 5.75rem) / 1.02 | H1 del hero |
| `text-h2` | clamp(2.25rem, 1.5rem + 3vw, 4.25rem) / 1.05 | Títulos de sección |
| `text-h3` | clamp(1.375rem, 1.2rem + .6vw, 1.75rem) / 1.2 | Subtítulos (categorías del menú) |
| `text-lead` | clamp(1.125rem, 1.05rem + .35vw, 1.3125rem) / 1.6 | Bajadas |
| `text-base` | 1.0625rem (17px) / 1.65 | Texto corrido |
| `text-sm` | 0.9375rem (15px) / 1.5 | Metadatos. Nunca menos de 15px para texto con contenido |

- Las líneas de texto miden **como máximo 65ch**.
- Las cifras usan `font-variant-numeric: tabular-nums` (precios y horarios).
- Los titulares van en **sentence case**.

### 3.3 Espacio, radios y líneas
- La escala de espacio es la de Tailwind. Entre secciones hay **clamp(6rem, 12vw, 10rem)** de aire, porque el sitio es espacioso (densidad 3/10 en ui-ux-pro-max).
- Contenedor: `max-w-[1240px]` con márgenes laterales `px-5` en móvil, `sm:px-8` y `lg:px-12`. **Los dos bordes de contenido son iguales** (regla de taste-skill).
- Radios: **0 en fotos** (esquinas rectas, como en una galería), **9999px en los botones** (píldora, como la de "Regresamos el martes" de sus promos) y 2px en los chips de foco.
- Líneas: 1px en `gold / 20%` sobre `night` y en `lunar` sobre `ink`.

### 3.4 Movimiento (en la Fase 3 solo hay estados de interacción)
- Botones: hover con `translateY(-1px)` y el fondo pasando a `gold-shadow`, y `scale(.98)` al pulsar. Duración de 180ms con `cubic-bezier(.2,.8,.2,1)`.
- Fotos enlazadas: zoom de 1.03 **dentro de su marco** en 600ms.
- Enlaces: un subrayado que se dibuja de izquierda a derecha.
- `prefers-reduced-motion`: se quitan las transformaciones. El parallax, Lenis y el revelado de texto quedan para la **Fase 4**.

---

## 4. Arquitectura de la página (home de una sola página)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER fijo · logo ─────────────── nav ─────── [Reservar]   │  transparente sobre el hero y navy al hacer scroll
├─────────────────────────────────────────────────────────────┤
│ #inicio  HERO (100svh)                                      │
│  H1: Fusión asiática                 ╭──────────────╮       │
│      bajo la luna                    │   LA LUNA    │◀ la luna real
│  Bajada: dónde, qué y desde cuándo   │ (foto real)  │  sangrando hacia
│  ● Abierto hoy hasta las 22:00       ╰──────────────╯  el borde derecho
│  [Reservar por WhatsApp]  Ver el menú                       │
├─────────────────────────────────────────────────────────────┤
│ #concepto  "Oriente se encuentra con la luna"               │
│  ┌──────────────┐   Texto (2 párrafos)                      │
│  │ salón (4:3)  │   Datos clave en lista con líneas finas   │
│  └──────────────┘ ┌────────┐                                │
│                   │ jardín │  ← composición desigual        │
├─────────────────────────────────────────────────────────────┤
│ #menu  (fondo ink, eco de la carta impresa)                 │
│  ◐ luna gris a medias detrás   Menú / Fusión asiática       │
│  [Todo][Entradas y dim sum][Arroces y fideos][Carnes][Mar.] │
│  ┌────────────────────────────┐  ┌──────────────┐           │
│  │ Wantán fritos ...... L 220 │  │ foto del     │ ← fija,   │
│  │ Shao mai (8) ....... L 240 │  │ platillo     │ cambia con│
│  │ ...                        │  │ (hover/foco) │ hover/foco│
│  └────────────────────────────┘  └──────────────┘           │
│  De la barra: Sangría Moon + coctelería de autor            │
├─────────────────────────────────────────────────────────────┤
│ #galeria  mosaico asimétrico de 6 fotos reales              │
├─────────────────────────────────────────────────────────────┤
│ #resenas  4.3 ★ · 61 reseñas (distribución real)            │
│           cita corta real + temas que más se repiten        │
├─────────────────────────────────────────────────────────────┤
│ #visitanos  "En Moon todo sabe mejor"                       │
│  Dirección en grande (enlazada al mapa)                     │
│  [Reservar por WhatsApp] [Llamar]   │  mapa (tonos noche)   │
│  Horario semanal con hoy marcado    │                       │
├─────────────────────────────────────────────────────────────┤
│ FOOTER · logo · redes · horario · contacto · créditos       │
└─────────────────────────────────────────────────────────────┘
 Móvil: barra fija inferior [Reservar] [Llamar] cuando el hero ya salió de pantalla
```

**Alineación:** todo el texto va **alineado a la izquierda** sobre la línea del contenedor. Solo el bloque de la cita de reseñas va centrado.

### Navegación
- Anclas: `#concepto`, `#menu`, `#galeria`, `#resenas`, `#visitanos`. El enlace activo se marca con `aria-current` (JS mínimo).
- Móvil: botón de menú con `aria-expanded` que abre un panel a pantalla completa. Se cierra con Esc o al tocar un enlace, y el foco vuelve al botón.
- Enlace "Saltar al contenido" como primer elemento enfocable.

---

## 5. Componentes

| Componente | Archivo | Notas |
|---|---|---|
| `Logo` | `src/components/Logo.astro` | El monograma en SVG vectorizado desde el logo oficial, con el degradado dorado, y "MOON / BISTRO • BAR" en Cinzel. Variantes: `full` y `mark` |
| `Header` | `src/components/Header.astro` | Fijo. Cambia de estado con `IntersectionObserver` sobre el hero. Incluye el menú móvil |
| `Hero` | `src/components/Hero.astro` | La luna en `<Image>` con `loading="eager"` y `fetchpriority="high"`. El estado "abierto hoy" se calcula con la zona horaria `America/Tegucigalpa` |
| `Concept` | `src/components/Concept.astro` | Composición desigual de 2 fotos con el texto |
| `Menu` | `src/components/Menu.astro` | Datos en `src/data/menu.ts`. Filtro accesible con botones `aria-pressed`. **Sin JS, todo el menú queda visible.** Foto de vista previa que cambia con hover o foco |
| `Gallery` | `src/components/Gallery.astro` | Mosaico con CSS grid. `<Picture>` en AVIF/WebP con `loading="lazy"` |
| `Reviews` | `src/components/Reviews.astro` | Datos en `src/data/reviews.ts` |
| `Visit` | `src/components/Visit.astro` | CTA, dirección en grande, horario con hoy marcado y mapa en `iframe` con carga diferida y filtro nocturno |
| `Footer` | `src/components/Footer.astro` | |
| `ActionBar` | `src/components/ActionBar.astro` | Solo en móvil (<768px), con `env(safe-area-inset-bottom)` |
| `Button` | `src/components/Button.astro` | Variantes `primary` (dorado) y `ghost` (borde dorado al 40%). Mínimo 44px de alto |
| `site.ts` | `src/data/site.ts` | Fuente única de datos de contacto, horarios, redes y coordenadas |

**SEO:** JSON-LD `Restaurant` con dirección, coordenadas, teléfono, `openingHoursSpecification`, `servesCuisine`, `priceRange` y `menu`. **No lleva `aggregateRating`**, porque Google no admite reseñas autopublicadas de un LocalBusiness. También título, descripción y Open Graph.

---

## 6. Responsive

| Ancho | Cambios |
|---|---|
| ≥1280 | Grid de 12 columnas y la luna del hero a ~78vh |
| 1024–1279 | Igual, con menos aire |
| 768–1023 | El hero se apila con la luna arriba a la derecha. El menú pasa a una columna con la foto de vista previa arriba |
| <768 | Una columna, menú móvil, chips del menú con scroll horizontal (con su indicador), botones a todo el ancho y la barra de acción inferior |
| 320 | Sin scroll horizontal. Los tamaños de letra se ajustan solos con `clamp()` |

---

## 7. Accesibilidad (piso de calidad)
- Landmarks: `header`, `nav`, `main`, `section[aria-labelledby]` y `footer`.
- Foco visible: anillo de 2px en `gold` con 3px de separación.
- Áreas de toque de al menos 44×44.
- `alt` descriptivo en todas las fotos, y `alt=""` en la luna decorativa del menú.
- El filtro del menú usa `role="group"`, `aria-pressed` y un anuncio `aria-live` con el número de platillos.
- El mapa lleva `title`, y hay un enlace alternativo para abrirlo en Google Maps.
- Idioma `es-HN`.

---

## 8. Conflictos entre skills y brief, y cómo los resolví

| Regla de una skill | Conflicto | Decisión |
|---|---|---|
| taste-skill: un *place* va en fondo claro y sin secciones oscuras | La marca es azul noche y negro | **Manda la marca** (tu brief: "respetar estrictamente la línea gráfica") |
| taste-skill: sin parallax, sin smooth scroll ni revelados | La Fase 4 los pide explícitamente | **Manda tu brief**. En la Fase 4 se aplican solo a fotografías, nunca al texto corrido, y se respeta `reduced-motion` |
| taste-skill: sin tabs en el menú | Tu brief pide un "menú interactivo" | El filtro es una **mejora progresiva**: sin JS se ve todo el menú en texto y con precios |
| taste-skill: sin teléfono ni dirección exacta (regla para datos inventados) | Los datos son reales y tu brief pide WhatsApp y mapa | Uso los **datos reales verificados** |
| taste-skill: un mapa nunca va embebido | Tu brief pide mapa | `iframe` con carga diferida y un enlace para abrirlo |
| ui-ux-pro-max: paleta índigo y violeta | No es la marca | La descarto. Me quedo con su recomendación de tipografía (Playfair + Karla) y con su checklist |
| taste-skill: gate automático con Chrome headless | Sus reglas chocan con las decisiones anteriores | No lo armo. Verifico con el navegador integrado, `astro check` y `astro build` |

---

## 9. Reseñas: cómo las muestro sin inventar
- La calificación (4.3), el total (61) y la distribución (40/11/4/1/5) son datos reales de Google.
- Muestro **una cita textual corta** con nombre e inicial ("una atención al cliente 1000/10", Karla P.).
- El resto son **temas que se repiten** en las reseñas (atención, ambiente, sangría y ramen) con su recuento real. **No hay citas parafraseadas atribuidas a personas.**
- Pendiente: mostrar citas textuales completas, ya sea con permiso del dueño o con la API de Google Places. `src/data/reviews.ts` ya tiene el campo `quote` para eso.

---

## 10. Imágenes usadas (temporales hasta tener las originales)

| Slot | Archivo de origen | Tratamiento |
|---|---|---|
| Hero (luna) | `google-maps/gmaps-04.jpg` | Recorte circular **solo de la luna** (sin la persona) |
| Concepto | `gmaps-01.jpg` (salón) y `gmaps-08.jpg` (jardín) | |
| Menú (vista previa) | `gmaps-09` (dim sum), `gmaps-02` recortado (pollo con arvejas y sopa), `gmaps-05` (costilla), `gmaps-10` (agridulce), `gmaps-03` (ambiente, para mariscos) | Mariscos **no tiene foto propia**: está pendiente |
| Barra | `instagram/reel-2026-05-06-a.jpg` (Sangría Moon) | Baja resolución (360px) |
| Galería | `gmaps-06`, `gmaps-07`, `instagram/reel-…-e` (bar), `reel-…-26-a` (entrada), `reel-…-26-b` (gobo), `facebook/cover-960` (recorte de la fachada) | |

⚠️ Las fotos de `google-maps/` son de usuarios. **Antes de publicar hay que reemplazarlas o conseguir permiso** (ver `ASSETS.md`).

---

## 12. Movimiento (Fase 4)

**Archivo:** `src/scripts/motion.ts`, cargado desde `src/layouts/Base.astro` en un `<script>` nativo de Astro (es un módulo diferido).
**Librerías:** Lenis 1.3 (smooth scroll) y GSAP 3.15 con ScrollTrigger y SplitText. Pesan 52 KB comprimidos.
**Personalidad:** un lounge nocturno, *elegante y suave*. Hay un solo momento orquestado, que es la entrada del hero. El resto son revelados discretos y parallax solo en fotografías.

| Elemento | Qué hace | Detonante | Duración / curva |
|---|---|---|---|
| Lenis | Scroll suave con `lerp` de 0.085. En táctil se usa el scroll nativo (`syncTouch: false`) | Rueda del mouse | Sincronizado con el ticker de GSAP |
| Entrada del hero | El cielo aparece, la luna "sale" (sube, escala de 0.94 a 1 y opacidad), el H1 se revela línea por línea con máscara y luego entran la bajada, el estado y los botones | Al cargar, una sola vez | 2.4 s en total, `expo.out`. Al terminar, el H1 vuelve a ser texto normal |
| Parallax del hero | Cielo a 0.2x y luna a 0.5x (sube y escala a 1.06). **El texto no lleva parallax** | Scroll (scrub) | Lineal, ligado al scroll |
| Parallax de fotos | La capa interna de cada `Photo` se mueve dentro de su marco según `data-speed`: el salón a 0.8, el jardín a 1.6 y la galería alterna entre 0.7 y 1.5 | Scroll (scrub) | Amplitud máxima de ±9.5%, que nunca deja ver bordes. En móvil es un 33% menor |
| Luna gris del menú | Gira de -40° a 70° (unos 110° en todo el recorrido), se traslada un poco a la derecha (9% en escritorio, 6% en móvil) y baja despacio | Scroll (scrub) | Lineal |
| Títulos H2 | Se revelan por línea con máscara (SplitText con `autoSplit`) | Al entrar en pantalla, una vez | 1.25 s, `expo.out`, con 90 ms de escalonado |
| Dirección grande | Sube 28px con opacidad | Al entrar, una vez | 1.2 s, `expo.out` |
| Barras de reseñas | Crecen desde la izquierda (`scaleX`) | Al entrar, una vez | 1.4 s, con 70 ms de escalonado |
| Header | Se esconde al bajar y vuelve al subir. Siempre está visible si tiene el foco | Dirección del scroll | 400 ms |
| Filtro del menú | Las filas visibles entran escalonadas | Al hacer clic en una categoría | 450 ms, con 30 ms de escalonado |
| Vista previa del menú | La foto nueva se revela con opacidad y escala de 1.04 a 1. La anterior sale más rápido | Al pasar el puntero sobre un platillo | 480/900 ms al entrar y 260 ms al salir |
| Botones y fotos | Hover: subida de 1px y zoom de 1.03 dentro del marco. Al presionar: escala de 0.98 | Puntero | 180 ms / 700 ms, solo con `(hover: hover) and (pointer: fine)` |
| Anclas | Scroll con Lenis, con el foco en la sección destino y actualización de la URL | Clic | 1.4 s |

**Reglas que seguí:**
- Solo animo `transform` y `opacity`.
- El zoom del hover (sobre `<img>`) y el parallax (sobre la capa interna) van en elementos distintos, para que los transforms no choquen.
- Mientras el menú móvil está abierto, Lenis se pausa.
- **`prefers-reduced-motion: reduce`:** no se inician Lenis, el parallax ni las entradas. Todo queda en su estado final y visible, y las transiciones de CSS se anulan.
- **Sin JS:** el contenido se ve igual. El ocultamiento previo solo aplica con `html.js-motion` y se libera a los 3 s en cualquier caso.

### Mediciones (20 nov 2026, navegador integrado, build de producción en `localhost:4322`)
| Prueba | Resultado |
|---|---|
| Recorrido completo a 1440×900 en la primera visita, 8 s | **60.2 fps**. p95 de 16.8 ms, p99 de 17.0 ms, peor frame de 17.2 ms. **0 tareas largas.** CLS de 0 |
| Recorrido completo a 375×812 | **60.2 fps**. p95 de 16.9 ms, peor frame de 17.1 ms. 0 tareas largas |
| Carga | FCP de 164 ms y **LCP de 216 ms** (la luna) |
| Imágenes | 17 de 18 en AVIF y 531 KB para toda la página. `decoding="async"` en todas salvo la del hero |
| Responsive | Sin scroll horizontal a 1440, 375 y 320. Los 5 títulos terminan revelados en todos los anchos |
| Movimiento reducido (Chrome headless con `--reduced`) | Todo visible y estático |

⚠️ Las cifras se midieron en un equipo de escritorio con un servidor local. Faltan una prueba en un teléfono de gama media real y un Lighthouse con la red simulada.

---

## 11. Pendientes para cerrar la Fase 3
- [ ] El logo SVG oficial (hoy hay una vectorización automática que hay que revisar).
- [ ] Fotos originales: la luna, el salón, los 5 platillos estrella y mariscos.
- [ ] Confirmar el horario y los precios vigentes (ver `RESTAURANT_DATA.md` §7).
- [ ] El dominio final, para `site` en `astro.config.mjs` y las URLs canónicas y OG.
