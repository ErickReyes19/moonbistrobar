# Moon Bistro • Bar — Datos del restaurante

> Investigación de Fase 2 · 20 nov 2026
> Fuentes: ficha de Google Maps/Búsqueda, Instagram oficial, Facebook oficial, TikTok y Restaurant Guru (enlaces al final).
> Los datos marcados con ⚠️ son contradictorios o hay que confirmarlos con el restaurante.

---

## 1. Identidad básica

| Campo | Valor |
|---|---|
| Nombre comercial | **Moon Bistro • Bar** (en el logo dice "MOON / BISTRO • BAR") |
| Variantes en redes | "MOON Bistró Bar" (Facebook), "Moon Bistro Bar" (Google, Instagram), "Moon Bistro + Bar" y "Moon Bistro & Bar" (posts) |
| Concepto | Restaurante y bar de **fusión asiática** con **temática lunar y espacial**. Facebook lo describe como un restaurante asiático y bistro bar que mezcla sabores auténticos con platos de fusión. |
| Gancho más repetido | "El restaurante con **la luna más grande de Honduras**" (lo dicen creadores locales en TikTok y Facebook) |
| Apertura | 21 de marzo (según la bio de Instagram; el año tiene que ser 2025 por la fecha del primer post del menú, abril 2025) ⚠️ confirmar |
| Ciudad | San Pedro Sula, Cortés, Honduras |

### Lemas reales de la marca
- Portada de Facebook: **"En Moon todo sabe mejor"**. La luna llena hace de "Moon" en la frase.
- Bio de Instagram (en inglés): *"Authentic food, innovative drinks and unparalleled atmosphere."*
- Texto que repiten en sus posts: "Oriente se encuentra con la luna" y "La luna ilumina tus noches".
- Hashtags propios: `#MoonBistroBar` `#FusiónAsiática` `#SaboresConMagia` `#NocheMoon` `#moonbistro888`

---

## 2. Paleta de colores y línea gráfica ⭐

> Medí los colores **con muestreo de píxeles** sobre los archivos oficiales: el logo de Facebook a 720px, la portada de Facebook, el menú oficial y las fotos del local. Como son JPG comprimidos, hay un margen de ±3–5% en cada canal. Si el restaurante tiene un manual de marca o archivos vectoriales, esos valores mandan.

### 2.1 Cómo se ve la marca
**Oscura, nocturna, elegante y celeste.** Todo gira en torno a una luna dorada sobre un cielo nocturno con estrellas. Es una estética de *lujo nocturno* (lounge o fine-casual), no minimalista ni rústica. Hay dos niveles:

1. **Identidad base (premium):** logo, menú y portada. Usan oro sobre azul noche o negro, serif clásica con mucho contraste, mucho espacio negativo y la textura de la luna como fondo. **El sitio debe seguir este nivel.**
2. **Piezas promocionales (vibrantes):** flyers de Semana Santa, Semana Morazánica y el Día de la Madre. Usan rojos, banderas de Honduras, sans condensada gruesa y script dorada. Sirven como referencia de tono, pero **no hay que copiarlas en el sitio**.

### 2.2 Colores principales (de la identidad base)

| Token propuesto | HEX | De dónde sale | Uso recomendado |
|---|---|---|---|
| `moon-night` | **#101A27** | Fondo del logo oficial (cielo estrellado), mediana de píxeles | Fondo principal del sitio |
| `moon-night-deep` | **#0A121E** | Zonas más oscuras del cielo del logo | Fondos profundos, footer |
| `moon-night-raised` | **#182433** | Zonas claras del cielo del logo y de la portada (#14202E–#1C2631) | Tarjetas, superficies elevadas |
| `ink` | **#0E0E0E** | Fondo negro del menú oficial | Sección de menú, alternancia de fondos |
| `moon-gold` | **#D9B773** | Color base del oro del monograma "M" y del anillo lunar | Color de marca: titulares destacados, íconos, líneas |
| `moon-gold-shadow` | **#B7854A** | Sombra o bronce del degradado dorado del logo | Bordes, estados hover y extremo oscuro del degradado |
| `moon-gold-bright` | **#EBC16F** | Tono medio brillante del degradado del logo | Extremo claro del degradado, CTAs |
| `moon-gold-highlight` | **#FFDE88** | Brillo especular del metal dorado | Destellos y highlights puntuales, nunca como fondo |

**Degradado dorado oficial (aproximado):** `linear-gradient(135deg, #B7854A 0%, #EBC16F 45%, #FFDE88 60%, #D9B773 100%)`

### 2.3 Colores secundarios

| Token propuesto | HEX | De dónde sale | Uso recomendado |
|---|---|---|---|
| `champagne` | **#DFC1A8** | Letras "MOON BISTRO • BAR" del logo de Instagram (versión rosé-champagne) | Subtítulos, texto de acento sobre fondo oscuro |
| `rose-champagne` | **#CAB9B4** | Subtítulos "Asian Fusion" del menú oficial | Categorías del menú, eyebrows |
| `lunar-grey` | **#2A2829** | Textura de la luna gris de fondo del menú | Texturas y fondos de la luna |
| `moon-white` | **#FDFCFD** | Título "MENU" del menú oficial | Texto principal sobre fondo oscuro |
| `price-grey` | **#938D8D** | Precios del menú oficial (aprox.) | Texto secundario. Ojo: tiene poco contraste en tamaños chicos, ver 2.6 |

### 2.4 Colores de acento (del local real y la publicidad)

| Token propuesto | HEX | De dónde sale | Uso recomendado |
|---|---|---|---|
| `terracotta` | **#CB4B28** | Tejas del techo de la fachada (portada de Facebook) | Acento arquitectónico muy puntual (mapa, sección "Visítanos") |
| `promo-gold` | **#F6BF50** | Script "Mejor" de la portada de Facebook | Solo en microacentos promocionales |
| `velvet-rose` | **#D8797D** | Sillones de terciopelo rosa del salón | Acento de interiorismo (galería) |
| `emerald` | **#415B50** | Cabinas (booths) verde esmeralda del salón | Acento de interiorismo (galería) |
| `mural-amber` | **#DA8D4F** | Mural de la luna en el techo del salón | Brillos cálidos en las fotos |

### 2.5 Tipografía que se observa

| Dónde aparece | Estilo | La más parecida (Google Fonts) | Seguridad |
|---|---|---|---|
| Palabra **"MOON"** del logo | Capitales romanas inscripcionales, serif clásica con mucho espacio entre letras (estilo Trajan) | **Cinzel** | Alta (por estilo; el original puede ser Trajan Pro) |
| **"BISTRO • BAR"** | Versalitas serif, espaciado amplio | **Cinzel** (Regular) | Alta |
| Monograma **"M"** | Serif de alto contraste (Didone) con dos M o una M y una V entrelazadas | Es un dibujo propio: se usa como logo, no como fuente | — |
| **Menú oficial** ("MENU", categorías, platillos) | Serif transicional de alto contraste con terminales en gota | **Playfair Display** (Bold para títulos y Regular para ítems) | **Muy alta**, coincide visualmente |
| Promos ("En … Todo sabe") | Sans grotesca condensada y gruesa, en blanco | Bebas Neue / Oswald | Media (solo promo) |
| Promos ("Mejor", "Sangría Moon") | Script de pincel dorada | Cercana a Allura o Great Vibes | Baja (solo promo) |

**Propuesta tipográfica para el sitio** (se valida en la Fase 3):
- Display y logo: **Cinzel**, para titulares grandes en mayúsculas con letterspacing.
- Títulos editoriales y menú: **Playfair Display**, la misma del menú impreso, para mantener la continuidad.
- Cuerpo y UI: una sans neutra y legible, por ejemplo **Jost** o **Inter**. *Es una propuesta: la marca no tiene una sans de cuerpo definida.*
- La script de pincel **no se usa** en el sitio, o se usa una sola vez como guiño.

### 2.6 Contraste (WCAG) de la paleta propuesta

| Texto sobre fondo | `moon-night` #101A27 | `ink` #0E0E0E |
|---|---|---|
| `moon-white` #FDFCFD | 17.1 ✅ | 18.9 ✅ |
| `moon-gold` #D9B773 | 9.2 ✅ | 10.1 ✅ |
| `moon-gold-bright` #EBC16F | 10.3 ✅ | 11.4 ✅ |
| `champagne` #DFC1A8 | 10.3 ✅ | 11.3 ✅ |
| `rose-champagne` #CAB9B4 | 9.3 ✅ | 10.2 ✅ |
| `moon-gold-shadow` #B7854A | 5.4 ✅ AA | 6.0 ✅ AA |
| `velvet-rose` #D8797D | 5.8 ✅ AA | 6.4 ✅ AA |
| `terracotta` #CB4B28 | 3.8 ⚠️ solo texto grande | 4.2 ⚠️ solo texto grande |

### 2.7 Logo
- **No hay versión SVG ni vectorial pública.** Las mejores fuentes disponibles están en `ASSETS.md`: el monograma dorado a 720×720 y el lockup completo en blanco a 1264×1600 (proyección en el piso).
- Hay tres versiones del logo en uso:
  1. **Monograma dorado** "M" con anillo lunar texturizado (cráteres) sobre cielo estrellado azul noche. Es la versión principal (Facebook).
  2. **Lockup completo** con el monograma, "MOON" y "BISTRO • BAR" en rosé-champagne sobre negro y la luna texturizada detrás (Instagram y menú).
  3. **Lockup monocromo blanco**, que se usa como proyección gobo en el piso y en la señalización.
- **Acción recomendada:** pedirle al restaurante el archivo original (AI, SVG o PDF). Si no existe, en la Fase 3 se vectoriza el lockup blanco (`gmaps-07.jpg`) y el monograma (`logo-profile-720.jpg`).

### 2.8 Ambiente del local (para la dirección de arte)
- **Salón principal:** techo pintado de espacio profundo con una **luna gigante** y planetas en tonos ámbar, cielo de fibra óptica con estrellas, **sillones de terciopelo rosa**, **cabinas verde esmeralda**, mesas con cubierta dorada, guitarras en vitrinas en la pared y pantallas o proyector.
- **"La luna más grande de Honduras":** una luna iluminada y retroiluminada en la pared, junto a una galaxia en espiral. Es el lugar donde la gente se toma fotos.
- **Terraza:** fuente central, jardín vertical tropical e iluminación de neón rosa y magenta de noche.
- **Fachada:** casa de estilo colonial con **tejas terracota**, letrero "MOON BISTRO BAR" en dorado sobre fachada oscura y proyección del logo en el piso de la entrada.
- **Cómo se siente:** nocturno, romántico, "instagrameable", entre lounge y bistro. Funciona para citas, grupos de amigos y celebraciones.

### 2.9 Tono de voz
- **Español cálido y poético-lunar:** metáforas de luna, noche y magia ("servida bajo la luna", "la luna ilumina tus noches").
- Toques en inglés (la bio de Instagram).
- Emojis frecuentes: 🌙 ✨ 🍸 🍾 🥢.
- Tuteo y cercanía ("ven a disfrutar", "te esperamos").
- Para el sitio: **elegante y evocador, sin exagerar**. Frases cortas con imágenes nocturnas.

---

## 3. Ubicación y contacto

| Campo | Valor |
|---|---|
| Dirección (Google) | **Bo. Los Andes, 13 Ave, 6 Calle S, 21101 San Pedro Sula** |
| Dirección (Instagram) | Barrio Los Andes, 13 ave, entre 5 y 6 calle S |
| Coordenadas | **15.5106297, -88.0331523** |
| Plus Code | GX68+7P San Pedro Sula |
| Enlace de Maps (oficial, desde Facebook) | https://maps.app.goo.gl/qKjwsfcDaaZRSz8T7 |
| Enlace de Maps (ficha) | https://www.google.com/maps/place/Moon+Bistro+bar/@15.5106297,-88.0331523,17z/data=!4m6!3m5!1s0x8f665b0042cbab81:0xb58bca59debae5b8!8m2!3d15.5106297!4d-88.0331523!16s%2Fg%2F11m6w_p9rn |
| Embed sugerido | `https://www.google.com/maps?q=15.5106297,-88.0331523&z=17&output=embed` |
| Teléfono y reservas | **+504 9233-0243** |
| WhatsApp | **https://wa.me/50492330243**. El enlace de la bio, `wa.link/lyufz3`, redirige a ese mismo número. |
| Email (pedidos y reservas) | **moonbistrobar@gmail.com** |
| Sitio web | No tiene (Google muestra "Agregar sitio web") |
| Referencia | Cerca de Coffeelab • Los Andes. Hay estacionamiento gratuito en la calle (según reseñas). |

### Redes oficiales
| Red | Usuario | Seguidores |
|---|---|---|
| Instagram | [@moonbistrobarsps](https://www.instagram.com/moonbistrobarsps/) | 17.8 mil · 73 posts |
| Facebook | [MOON Bistró Bar](https://www.facebook.com/people/MOON-Bistr%C3%B3-Bar/61575039210300/) | 1.4 mil |
| TikTok | [@moonbistro888](https://www.tiktok.com/@moonbistro888) | ~4.2 mil. Es la misma marca de agua que aparece en las fotos de platillos de Instagram. |

---

## 4. Horarios

**Horario actual según Google (nov 2026):**

| Día | Horario |
|---|---|
| Lunes | **Cerrado** |
| Martes | 12:00 p.m. – 10:00 p.m. |
| Miércoles | 12:00 p.m. – 10:00 p.m. |
| Jueves | 12:00 p.m. – 10:00 p.m. |
| Viernes | 12:00 p.m. – 12:00 a.m. |
| Sábado | 12:00 p.m. – 12:00 a.m. |
| Domingo | 12:00 p.m. – 9:00 p.m. |

⚠️ Un video de TikTok de mayo de 2025 ([@kevinmendozahn](https://www.tiktok.com/@kevinmendozahn/video/7507409757670558981)) daba horarios más largos: Mar–Jue 12 p.m.–12 a.m., Vie–Sáb 12 p.m.–2 a.m. y Dom 12 p.m.–10 p.m. **Hay que confirmar con el restaurante cuál está vigente.** Usé el de Google por ser el más reciente.

- **Horas pico (Google):** de noche. Las personas se quedan en promedio entre 1.5 y 3.5 horas.
- **Eventos:** noches con DJ (por ejemplo, Afro House con "Dj Vini", octubre 2026), fechas especiales (Día de la Madre) y cierres por feriados (Semana Morazánica, del 10 al 12 de octubre).

---

## 5. Calificación y reseñas

### Resumen de Google
- **4.3 ★ · 61 reseñas**
- Distribución: 5★ 40 · 4★ 11 · 3★ 4 · 2★ 1 · 1★ 5
- Temas que Google detecta: comida (10), ambiente (4), "fantastic place" (3), ramen (2), bebidas (2), atención al cliente (2).
- Gasto por persona que reportan los comensales: **L 300–700** lo más común (algunos pasan de L 1,000).
- Atributos: comida para llevar, consumo en el local, terraza o mesas al aire libre, acepta tarjetas, **se recomienda reservar**, asientos tipo cabina y estacionamiento gratuito en la calle.

### Reseñas destacadas (5★) para la sección de testimonios
> Por derechos de autor, aquí van **resumidas**, no copiadas. Para publicarlas en el sitio hay dos opciones: mostrar el texto original con el **widget o API oficial de Google** (Places API, de la ficha del propio negocio), o copiarlas con el consentimiento del dueño desde su Perfil de Negocio. Muestra los nombres como **nombre + inicial** por privacidad.

| Autor (como mostrarlo) | ★ | Hace | Gasto | Lo que dice, resumido |
|---|---|---|---|---|
| Karla P. | 5 (Comida 4 · Servicio 5 · Ambiente 5) | ~1 año | L 400–500 | La reseña más completa. Atención excepcional de todas las meseras, muy atentas con su hija. El ramen estaba delicioso y el ambiente es bonito y fuera de lo común. Volvería. |
| Gustavo S. | 5/5/5 | ~3 semanas | L 400–500 | Atención muy buena, comida deliciosa y lugar muy bonito. Lo recomienda. |
| Reina P. | 5 | ~4 meses | L 600–700 | Servicio amable, mesera atenta y cordial, comida rica y lugar acogedor y elegante. |
| Elvia P. | 5/5/5 | ~1 año | L 300–400 | Buen precio, comida espectacular y cócteles muy sabrosos. |
| Eliza C. | 5/5/5 | ~1 año | — | Destaca la amabilidad de la camarera Jade, el lugar fantástico y la comida exquisita. Volvería sin duda. |
| Carlos G. | 5/5/5 | ~6 meses | L 300–400 | Ideal para compartir con familia y amigos. Recomienda reservar; tiene salón cubierto y terraza. |
| katherine O. | 5/5/5 | ~8 meses | — | Experiencia muy linda, comida buenísima y atención 10/10. |
| Lety R. | 5/5/5 | ~9 meses | L 300–400 | Comida deliciosa y excelente servicio. Muy recomendado. |

**Frase corta que se puede usar como titular de testimonios:** "una atención al cliente 1000/10" (Karla P., Google).

### Críticas recurrentes (para que el restaurante las conozca, no para el sitio)
- Comida irregular: algunos encontraron el ramen aguado o un plato al vapor demasiado grasoso.
- Demoras cuando el local está lleno. El salón principal es pequeño.
- Menú corto, aunque se ve como algo neutral o incluso positivo ("reducido menú").
- La **sangría** sale elogiada incluso en reseñas negativas, así que conviene destacarla.

---

## 6. Menú real

> **Fuente principal:** el menú oficial "Asian Fusion Food" que publicaron en Facebook el 15 de abril de 2025 (5 páginas; las imágenes están en `assets/raw/menu/`).
> ⚠️ **Tiene más de un año y medio**, así que los precios pueden haber cambiado. **Hay que pedirle al restaurante el menú vigente**, que incluya bebidas, coctelería y postres (no los encontré publicados).
> Precios en **lempiras (L)**.

### 6.1 Entradas y dim sum
| Platillo | Precio | Nota |
|---|---|---|
| Wantán Fritos | **L 220** | Wontons fritos con salsa agridulce |
| Tacos Fritos | **L 220** | Rollitos fritos con salsa agridulce |
| Shao Mai al Vapor (8 unidades) | **L 240** | Dim sum al vapor |
| Dumplings Fritos | **L 300** | Preparación de 15 a 20 minutos |

### 6.2 Arroces y fideos
| Platillo | Precio |
|---|---|
| Arroz Frito de la Casa | **L 280** |
| Arroz Frito de Camarones | **L 320** |
| Tallarín (Chop Suey) | **L 300** |
| Fideos de Arroz Fritos | **L 300** |

### 6.3 Carnes y aves
| Platillo | Precio |
|---|---|
| Pollo Agridulce | **L 350** |
| Costilla Agridulce | **L 350** |
| Res a la Plancha | **L 350** |
| Costilla a la Sal Pimienta | **L 450** |

### 6.4 Mariscos
| Platillo | Precio | Nota |
|---|---|---|
| Filete de Pescado Empanizado | **L 320** | |
| Camarones al Vapor | **L 420** | Con brócoli |
| Camarón a la Sal Pimienta | **L 580** | |
| Camarón Estilo MOON ⭐ | **L 620** | Es el platillo con el nombre de la casa. Por la foto, parecen camarones en bolitas con una costra crujiente desmenuzada (hay que confirmar la descripción) |
| Camarones Jumbo Empanizados | **L 620** | |
| Langosta a la Sal Pimienta o a la Margarina (porción para 2) | **L 880** | El plato premium |

### 6.5 Platillos que se ven en redes pero sin precio publicado
(De Instagram, TikTok y Google, entre 2025 y 2026. Hay que confirmar si siguen en la carta.)
- **Sopa de res Hong Shao** (紅燒牛肉麵, sopa china de res estofada con fideos y huevo frito). Aparece en Instagram y Google Maps.
- **Ramen de res.** Lo mencionan en varias reseñas.
- **Sopa wantán**
- **Combos de Panceta de Cerdo** (con arroz, pepino y kimchi)
- **Pollo salteado con arvejas chinas y espárragos**
- **Alitas** (en una reseña: "muy ricas")
- **Fajitas**, **filete o carne a la plancha**, **calamar**
- **Espaguetis con albóndigas**, **pasta de mariscos**, **piernitas empanizadas**
- **Promos de temporada (Semana Santa 2026):** Pasta Rotini con Pollo 2×1 a **L 390**, Hamburguesa de Pollo 2×1 y Pollo con Espárragos, de martes a viernes.

### 6.6 Bebidas (sin precios publicados)
- **Sangría Moon** ⭐. Es su bebida insignia: aparece en reels y una reseña negativa le da "un 10".
- Coctelería de autor ("innovative drinks"), limonadas, cócteles servidos con fuego o ahumados (se ven en los reels del bar).

### 6.7 Platillos estrella sugeridos para el sitio
1. **Camarón Estilo MOON** (lleva el nombre de la casa, L 620)
2. **Sopa de res Hong Shao / Ramen de res** (los más mencionados)
3. **Langosta a la Sal Pimienta** (porción para 2, L 880, el plato premium)
4. **Shao Mai y Dumplings** (dim sum, fotogénicos)
5. **Sangría Moon** (la bebida insignia)

---

## 7. Datos pendientes de confirmar con el restaurante

1. ⚠️ **Horario vigente** (Google y TikTok de 2025 no coinciden).
2. ⚠️ **Menú y precios actuales** (el menú publicado es de abril de 2025), más carta de bebidas, coctelería y postres.
3. ⚠️ **Logo vectorial** (SVG, AI o PDF) y, si existe, un manual de marca con los HEX oficiales.
4. ⚠️ **Fotos originales en alta resolución** de platillos y del local. Lo que hay en redes viene comprimido a 360–720px.
5. ⚠️ **Permiso para usar fotos de Google Maps**: son de usuarios, no del restaurante (ver `ASSETS.md`).
6. Año de apertura (21 de marzo de 2025, según lo que se deduce).
7. Qué sistema de reservas prefieren: WhatsApp, llamada o un formulario. Hoy usan WhatsApp y teléfono.
8. Si el salón grande se renta para eventos privados (una reseña lo menciona).

> Nota: en TikTok aparece otro "restaurante en forma de luna" en colonia Figueroa, 28 avenida (sep. 2026). **No es este negocio** por la dirección; lo descarté.

---

## 8. Fuentes consultadas
- Google Búsqueda / Knowledge Panel: "Moon Bistro bar", ficha 4.3★ (61 reseñas), horarios y atributos.
- [Google Maps — Moon Bistro bar](https://www.google.com/maps/place/Moon+Bistro+bar/@15.5106297,-88.0331523,17z/data=!4m6!3m5!1s0x8f665b0042cbab81:0xb58bca59debae5b8!8m2!3d15.5106297!4d-88.0331523!16s%2Fg%2F11m6w_p9rn)
- [Instagram @moonbistrobarsps](https://www.instagram.com/moonbistrobarsps/)
- [Facebook — MOON Bistró Bar](https://www.facebook.com/people/MOON-Bistr%C3%B3-Bar/61575039210300/)
- [Facebook — Post del menú "Oriente se encuentra con la luna" (15 abr 2025)](https://www.facebook.com/61575039210300/posts/oriente-se-encuentra-con-la-lunaen-moon-bistro-bar-la-fusi%C3%B3n-asi%C3%A1tica-cobra-vida/122104265234834640/)
- [TikTok — Menu Moon San Pedro Sula](https://www.tiktok.com/discover/menu-moon-san-pedro-sula)
- [TikTok — @kevinmendozahn](https://www.tiktok.com/@kevinmendozahn/video/7507409757670558981)
- [Restaurant Guru — Moon Bistro bar](https://es.restaurantguru.com/Moon-Bistro-bar-San-Pedro-Sula)
- [Allrestaurants — Moon Bistro Bar](https://allrestaurants.eu/es/restaurantes/es-club-y-bar/es-honduras/es-san-pedro-sula/moon-bistro-bar)
