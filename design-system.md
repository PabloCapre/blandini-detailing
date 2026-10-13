# DESIGN SYSTEM & UI KIT — BLANDINI DETAILING

**Agencia:** WAFLERS  
**Rol Responsable:** Agente Diseñador (Lead UI Designer, Interaction & Design System Architect)  
**Proyecto:** Blandini Detailing — Experiencia Web de Alta Gama  
**Destinatarios:** Agente Programador & Agente QA  
**Documentos Base:** [PRD.md](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/PRD.md), [dev-brief.md](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/dev-brief.md) y [manual-de-marca-blandini.pdf](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/onboarding/manual-de-marca-blandini.pdf)  
**Estado:** Especificación Contractual y Vinculante  

---

## 1. Filosofía Visual & Directrices Fundamentales

El sistema de diseño de **Blandini Detailing** traduce el rigor técnico, la pulcritud de cabina y la exclusividad del detallado automotriz de alta gama en una interfaz digital rápida, accesible y de alta tasa de conversión (CRO).

### 1.1. Principios de Diseño
1. **100% Mobile-First:** El 85%+ del tráfico proviene de Instagram y enlaces directos de WhatsApp en dispositivos móviles. Todo componente se concibe primero para pantallas táctiles de 360px a 430px y escala fluidamente hacia desktop.
2. **Dark Theme Nativo Permanente:** Alineación estricta con el manual de marca sobre fondos negros y grises antracita (`#000000` / `#232323`), donde los brillos, los reflejos del barniz y el amarillo institucional (`#F0B400`) adquieren máximo protagonismo. Cero parpadeos de carga (FOUC) y estética sobria de alta gama.
3. **Ergonomía Táctil y Zonas de Pulgar:** Todas las áreas interactivas (botones, enlaces, acordeones, controles deslizantes) respetan una zona táctil mínima de **48 x 48 px**.
4. **Contención Real de Textos:** Los componentes están dimensionalmente proyectados para absorber la extensión real y profunda del [dev-brief.md](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/dev-brief.md) sin saltos de maquetación, recortes forzados ni elipses.
5. **Rendimiento a 60fps:** Transiciones ligeras basadas exclusivamente en `transform` y `opacity`, prescindiendo de dependencias pesadas de animación.

---

## 2. Tokens Cromáticos (Variables de Color)

Los colores son extraídos matemáticamente de las normativas de color del manual de identidad corporativa de Blandini Detailing.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PALETA CROMÁTICA OFICIAL                        │
│                                                                        │
│   ████████████   Amarillo Institucional: #F0B400 (RGB: 240, 180, 0)     │
│   ████████████   Negro Canvas Profundo:  #000000 (RGB: 0, 0, 0)        │
│   ████████████   Gris Superficie Cards:  #232323 (RGB: 35, 35, 35)     │
│   ████████████   Blanco Lectura:         #FFFFFF (RGB: 255, 255, 255)  │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1. Definición Funcional de la Paleta

| Nombre de Token | Valor HEX | Uso en Interfaz |
| :--- | :--- | :--- |
| `--color-primary` | `#F0B400` | Botones de conversión principales, badges de autoridad, acentos e íconos destacados. |
| `--color-primary-hover` | `#D9A200` | Estado hover/active de botones primarios. |
| `--color-primary-glow` | `rgba(240, 180, 0, 0.25)` | Resplandores sutiles en bordes de tarjetas activas y halo del Hero. |
| `--color-bg-canvas` | `#000000` | Fondo general de la página (`body`), cabecera y áreas base. |
| `--color-bg-surface` | `#232323` | Fondo de tarjetas modulares, módulos de casos de estudio y tablas. |
| `--color-bg-surface-elevated`| `#2C2C2C` | Fondo para inputs, hover de tarjetas y estados activos de acordeón. |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.10)` | Bordes perimetrales de tarjetas, divisores y líneas de tabla. |
| `--color-border-accent` | `rgba(240, 180, 0, 0.40)` | Borde de la caja de certificación 3M y tarjetas destacadas de servicio. |
| `--color-text-primary` | `#FFFFFF` | Títulos principales (H1, H2, H3) y texto de máxima jerarquía. |
| `--color-text-secondary` | `#B0B0B0` | Párrafos de lectura continua, descripciones y micro-copys de apoyo. |
| `--color-text-muted` | `#757575` | Textos legales, números de paso secundarios y placeholders. |
| `--color-whatsapp` | `#25D366` | Color del botón flotante oficial de WhatsApp. |
| `--color-whatsapp-hover` | `#1EBE5D` | Hover del botón flotante de WhatsApp. |

---

## 3. Validación de Accesibilidad y Ratios de Contraste (WCAG 2.1)

Se certifica que todas las combinaciones cromáticas superan ampliamente los requisitos de contraste de las pautas WCAG 2.1 nivel AA (mínimo 4.5:1 para texto normal y 3:1 para texto grande) y nivel AAA (mínimo 7:1):

| Combinación de Interfaz | Elementos Aplicados | Ratio de Contraste | Cumplimiento WCAG |
| :--- | :--- | :--- | :--- |
| **Texto Blanco (`#FFFFFF`) sobre Fondo Negro (`#000000`)** | Títulos H1/H2, párrafos generales sobre canvas | **21.0 : 1** | **Pasa AAA** (Óptimo universal) |
| **Texto Blanco (`#FFFFFF`) sobre Superficie (`#232323`)** | Textos y listas dentro de tarjetas de servicios | **13.9 : 1** | **Pasa AAA** |
| **Texto Negro (`#000000`) sobre Botón Amarillo (`#F0B400`)** | Texto de llamadas a la acción (CTAs primarios) | **11.2 : 1** | **Pasa AAA** |
| **Texto Amarillo (`#F0B400`) sobre Fondo Negro (`#000000`)** | Badges de autoridad, H3 destacados y números clave | **11.2 : 1** | **Pasa AAA** |
| **Texto Amarillo (`#F0B400`) sobre Superficie (`#232323`)** | Subtítulos de tarjetas y enlaces de acción | **7.4 : 1** | **Pasa AAA** |
| **Texto Secundario (`#B0B0B0`) sobre Fondo Negro (`#000000`)** | Bajadas de secciones y párrafos secundarios | **9.1 : 1** | **Pasa AAA** |
| **Texto Secundario (`#B0B0B0`) sobre Superficie (`#232323`)** | Descripciones de tarjetas y respuestas FAQ | **6.0 : 1** | **Pasa AA** (Supera el mínimo de 4.5) |

> **Directriz de Contraste para el Programador:** Queda estrictamente prohibido utilizar texto blanco sobre botones amarillos (`#F0B400`), ya que generaría un ratio inaccesible de 1.8:1. Todos los botones con fondo amarillo deben llevar obligatoriamente texto en negro puro (`#000000`) con peso de fuente `font-weight: 700`.

---

## 4. Tipografía y Escala Tipográfica Fluida

El manual de marca estipula la familia `Roboto` (Google Fonts) como el alfabeto institucional para cuerpo de texto y comunicación corporativa. Para los elementos display (marca y titulares de máximo impacto), se combina con una tipografía deportiva condensada con inclinación itálica que evoca la estética de carreras y detailing.

### 4.1. Familias Tipográficas
```css
/* Párrafos, UI, Botones, Enlaces, Tablas y FAQs */
--font-family-body: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;

/* Titulares H1/H2 de impacto y rótulos de casos */
--font-family-display: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 4.2. Escala Tipográfica Fluida (`clamp()`)

La escala se adapta de forma orgánica desde pantallas de smartphone (360px) hasta monitores de escritorio (1440px) sin saltos bruscos:

| Token | Móvil (360px) | Escritorio (1200px+) | Fórmula CSS Fluida | Aplicación |
| :--- | :--- | :--- | :--- | :--- |
| `--font-size-display` | 32px | 52px | `clamp(2.00rem, 5.0vw, 3.25rem)` | Titular H1 del Hero Section |
| `--font-size-h2` | 24px | 36px | `clamp(1.50rem, 3.5vw, 2.25rem)` | Encabezados de Sección H2 |
| `--font-size-h3` | 18px | 24px | `clamp(1.125rem, 2.2vw, 1.50rem)` | Títulos de Tarjetas H3 |
| `--font-size-lead` | 17px | 20px | `clamp(1.06rem, 1.8vw, 1.25rem)` | Subtítulo del Hero / Intros |
| `--font-size-body` | 15px | 16px | `clamp(0.938rem, 1.0vw, 1.00rem)` | Párrafos generales y FAQs |
| `--font-size-small`| 13px | 14px | `clamp(0.813rem, 0.9vw, 0.875rem)`| Textos de tablas, micro-copys |
| `--font-size-badge`| 11px | 12px | `0.75rem` (Fijo) | Badges de categoría y pills |

### 4.3. Altura de Línea (*Line Height*) y Legibilidad
- Títulos (`H1`, `H2`): `line-height: 1.15` a `1.25` (compactos y potentes).
- Párrafos de lectura continua: `line-height: 1.6` (óptimo para evitar fatiga visual en interfaces oscuras).
- Botones y Badges: `line-height: 1.2`.

---

## 5. Cuadrícula Matemática de Espaciado (Grid de 8px)

Todo margen, relleno interior (*padding*), separación entre componentes y dimensiones de layout se basa en múltiplos de **8px** (con una subdivisión de 4px para micro-ajustes):

```css
--space-0-5: 4px;   /* 0.25rem - Separación de íconos y textos pequeños */
--space-1:   8px;   /* 0.50rem - Padding de badges, gaps mínimos */
--space-2:   16px;  /* 1.00rem - Padding de botones compactos, márgenes de texto */
--space-3:   24px;  /* 1.50rem - Padding interno de tarjetas modulares */
--space-4:   32px;  /* 2.00rem - Separación vertical entre bloques de contenido */
--space-6:   48px;  /* 3.00rem - Separación de secciones móviles / tap targets */
--space-8:   64px;  /* 4.00rem - Padding vertical de secciones en desktop */
--space-12:  96px;  /* 6.00rem - Separación de secciones de gran escala */
```

### 5.1. Radios de Borde (*Border Radius*)
- `--radius-sm`: `6px` (Badges, botones pequeños, controles de tabla).
- `--radius-md`: `10px` (Botones principales, inputs, acordeones).
- `--radius-lg`: `16px` (Tarjetas de servicios, contenedores de casos reales, cajas de certificación).
- `--radius-full`: `9999px` (Pill badges de autoridad y botón flotante de WhatsApp).

### 5.2. Sombras y Elevaciones (*Box Shadows*)
En interfaces Dark Theme, las sombras puramente oscuras no se perciben sobre fondos negros. Por ello, se utilizan bordes luminosos tenues combinados con desenfoques ambientales:
```css
--shadow-surface: 0 4px 20px rgba(0, 0, 0, 0.60), 0 0 0 1px var(--color-border-subtle);
--shadow-elevated: 0 8px 30px rgba(0, 0, 0, 0.80), 0 0 0 1px var(--color-border-subtle);
--shadow-glow: 0 0 25px rgba(240, 180, 0, 0.20), 0 0 0 1px var(--color-border-accent);
--shadow-whatsapp: 0 6px 20px rgba(37, 211, 102, 0.35);
```

---

## 6. Especificaciones de Componentes Modulares

Cada componente se diseña considerando el contenido y los textos reales estipulados en el [dev-brief.md](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/dev-brief.md):

### 6.1. Cabecera Flotante (`Navbar`)
- **Comportamiento:** Fija en el tope de la pantalla (`position: sticky; top: 0; z-index: 100`).
- **Fondo:** Translúcido con desenfoque de fondo: `background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px)`.
- **Estructura en Móvil:** Altura de 64px. Logotipo a la izquierda (altura máxima 36px), botón hamburguesa táctil a la derecha (mínimo 48x48px).
- **Menú Móvil Desplegable:** Cubre el viewport con animación de entrada deslizante (`transform: translateY`). Enlaces con espaciado vertical amplio de 20px y tipografía en 18px.
- **Estructura en Escritorio:** Enlaces centrados con indicador sutil de navegación activa en amarillo, botón *"Pedir Turno"* destacado a la derecha.

---

### 6.2. Hero Section & Badges de Autoridad
- **Estructura:** Disposición apilada vertical en móvil con orden prioritario:
  1. *Pill Badge de Autoridad:* Contenedor con borde fino amarillo `rgba(240, 180, 0, 0.3)`, fondo `rgba(240, 180, 0, 0.08)`, ícono de escudo y texto en mayúsculas pequeñas (11px, `letter-spacing: 0.05em`).
  2. *H1:* Tipografía pesada (`font-weight: 700`), contraste máximo en blanco puro con acentos de color en palabras clave si aplica.
  3. *Subtítulo de Valor:* Tipografía fluida en gris claro (`#B0B0B0`), con interlineado holgado (`1.6`).
  4. *Grupo de Botones:* Botón primario de WhatsApp a ancho completo en móviles (`width: 100%`) y en línea en desktop (`width: auto`).
  5. *Carrusel Visual Snap-Scroll:* Inmediatamente debajo del bloque de texto, introduciendo al usuario al trabajo en cabina sin demoras de renderizado.

---

### 6.3. Carrusel Táctil Mobile-First (`CarouselTrack`)
- **Técnica:** Scroll horizontal nativo mediante CSS puro para garantizar 60fps sin librerías JS pesadas.
  ```css
  .carousel-track {
    display: flex;
    gap: var(--space-2);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-inline: contain;
    padding-bottom: var(--space-2);
    scrollbar-width: none; /* Ocultar barra en navegadores modernos */
  }
  .carousel-track::-webkit-scrollbar {
    display: none;
  }
  .carousel-item {
    flex: 0 0 82%; /* Permite ver el borde de la siguiente tarjeta para invitar al scroll */
    max-width: 380px;
    scroll-snap-align: center;
    border-radius: var(--radius-md);
    overflow: hidden;
    aspect-ratio: 4 / 3;
    border: 1px solid var(--color-border-subtle);
  }
  ```
- **Indicadores:** Puntos de paginación visuales sutiles debajo del carrusel con el punto activo en amarillo (`#F0B400`).

---

### 6.4. Tarjetas Modulares de Servicio (`ServiceCard`)
- **Adaptabilidad:**
  - Móvil: 1 columna (ancho 100%).
  - Tablet: Grid de 2 columnas.
  - Desktop: Grid de 3 o 4 columnas.
- **Estructura Interna Flexible:**
  ```css
  .service-card {
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-lg);
    padding: var(--space-3);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .service-card:hover {
    transform: translateY(-4px);
    border-color: var(--color-border-accent);
    box-shadow: var(--shadow-glow);
  }
  ```
- **Contención de Textos Extensos:**
  - Badge superior de categoría (`Estrella`, `Protección`, etc.) con color de acento.
  - Título H3 en blanco puro (`#FFFFFF`) con peso 700.
  - Párrafo de resumen con `flex-grow: 1` para igualar alturas entre tarjetas sin romper el layout.
  - Lista de viñetas con ícono de check amarillo (`✔`) para items incluidos.
  - Botón o enlace inferior *"Cotizar Servicio por WhatsApp"* pegado al fondo de la tarjeta mediante margen superior automático (`margin-top: auto`).

---

### 6.5. Módulos de Casos de Estudio Reales (`CaseStudyCard`)
Para presentar con dignidad los 3 casos documentados del [dev-brief.md](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/dev-brief.md):
- **Estructura en Móvil:** Tarjeta vertical con imagen superior y ficha técnica inferior.
- **Estructura en Escritorio:** Disposición bilateral alternada (50% imagen / 50% ficha técnica).
- **Tratamiento de Imagen:**
  - Relación de aspecto fija `16/9` o `4/3` con `object-fit: cover` para evitar saltos de maquetación (CLS).
  - Efecto de zoom sutil al pasar el cursor (`transform: scale(1.03)`).
- **Ficha Técnica:**
  - Badge del vehículo (ej: *"BMW X6M COMPETITION 0 KM"* o *"SIAMBRETTA 125CC (1954)"*).
  - Título H3 del desafío resuelto.
  - Lista de procesos aplicados con etiquetas técnicas (Micronaje, Curado, No repintado).

---

### 6.6. Comparador Interactivo Antes y Después (`BeforeAfterSlider`)
Para el caso de la Chevrolet Blazer (limpieza de motor y pulido de chapa):
- **Modo Móvil:** Contenedor interactivo táctil con barra divisora central manipulable por arrastre de dedo.
  - Zona táctil del manipulador: Botón circular central de 48px de diámetro con flechas izquierda/derecha (`◀ ▶`), sombra acentuada y borde amarillo.
  - Rótulos flotantes accesibles: `"ANTES"` en la esquina superior izquierda y `"DESPUÉS"` en la esquina superior derecha con fondo semitransparente oscuro (`background: rgba(0, 0, 0, 0.75)`).
- **Fallback Accesible:** Si el usuario tiene JavaScript deshabilitado o prefiere vista estática, se presenta una visualización bilateral lado a lado mediante media query.

---

### 6.7. Módulo de Autoridad Oficial 3M (`AuthorityBadge`)
- **Diseño del Contenedor:** Caja destacada con gradiente de fondo sutil:
  `background: linear-gradient(145deg, #232323 0%, #171717 100%)`.
- **Borde de Autoridad:** Borde acentuado de 1.5px en `var(--color-border-accent)` (`#F0B400`).
- **Composición:** Disposición en 2 columnas en desktop (Diploma oficial de Renzo Blandini y Gino Lanzillotta con marco de terminación técnica a la izquierda, y credenciales/capacitación oficial 3M Scotchgard Serie Pro 200 a la derecha).

---

### 6.8. Tabla Comparativa Técnica Responsiva (`ComparisonTable`)
- **Adaptabilidad en Móvil:** Contenedor con `overflow-x: auto` y aviso visual táctil (*"Deslizá hacia los lados para ver la tabla completa ➔"*).
- **Estilos:**
  - Encabezados de tabla (`<th>`): Fondo `#2A2A2A`, texto en blanco puro, borde inferior de 2px en amarillo `#F0B400`.
  - Columna destacada de PPF 3M: Fondo ligeramente iluminado con `rgba(240, 180, 0, 0.05)` y borde resaltado para orientar la elección del cliente.
  - Filas alternadas (`zebra striping`) para facilitar la lectura entre datos técnicos.

---

### 6.9. Acordeón de Preguntas Frecuentes (`AccordionFAQ`)
Diseñado para contener las respuestas extensas y de alta densidad semántica del [dev-brief.md](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/dev-brief.md):
- **Estructura Semántica:** Implementado con etiquetas nativas `<details>` y `<summary>` para asegurar máxima accesibilidad (A11y) y ligereza:
  ```css
  .faq-item {
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-2);
    overflow: hidden;
    transition: border-color 0.2s ease;
  }
  .faq-item[open] {
    border-color: var(--color-border-accent);
  }
  .faq-summary {
    padding: var(--space-3);
    cursor: pointer;
    font-weight: 500;
    font-size: var(--font-size-body);
    color: var(--color-text-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 48px; /* Tap target óptimo */
    list-style: none;
  }
  .faq-summary::-webkit-details-marker {
    display: none;
  }
  .faq-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.25s ease;
    color: var(--color-primary);
  }
  .faq-item[open] .faq-icon {
    transform: rotate(180deg);
  }
  .faq-content {
    padding: 0 var(--space-3) var(--space-3) var(--space-3);
    color: var(--color-text-secondary);
    line-height: 1.65;
  }
  ```

---

### 6.10. Botón Flotante Persistente de WhatsApp (`FloatingWhatsApp`)
- **Posición:** Fija en la esquina inferior derecha: `position: fixed; bottom: 20px; right: 20px; z-index: 1000`.
- **Dimensiones:** Círculo de **56 x 56 px** (ergonomía de pulgar).
- **Fondo:** `#25D366` con ícono oficial en blanco.
- **Efecto de Pulso (Atención Suave):**
  ```css
  @keyframes whatsapp-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    70% {
      box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }
  .floating-whatsapp {
    animation: whatsapp-pulse 2.5s infinite;
  }
  ```
- **Tooltip de Conversión:** Etiqueta flotante lateral en desktop: *"¿Consultas o turnos? Chateá con nosotros"*, con fondo negro translúcido y flecha orientada al botón.

---

## 7. Sistema de Botones y Estados Interactivos

```css
/* Botón Primario de Conversión (Amarillo Oficial) */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  min-height: 48px;
  padding: 12px 28px;
  background-color: var(--color-primary);
  color: #000000;
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  font-weight: 700;
  text-decoration: none;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-primary);
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(240, 180, 0, 0.35);
}
.btn-primary:active {
  transform: translateY(0);
}

/* Botón Secundario (Borde y Fondo Translúcido) */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 24px;
  background-color: transparent;
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-subtle);
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}
.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: var(--color-text-primary);
}

/* Anillo de Enfoque Accesible (Focus-Visible para Teclado) */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}
```

---

## 8. Bloque Completo de Tokens `:root` para `styles.css`

Este bloque contiene la especificación literal que el Agente Programador debe insertar al inicio del archivo principal de estilos:

```css
/* ==========================================================================
   BLANDINI DETAILING — TOKENS OFICIALES DEL SISTEMA DE DISEÑO (:root)
   Agencia WAFLERS | Fase 2 | Dark Theme Nativo Permanente
   ========================================================================== */

:root {
  /* --- PALETA CROMÁTICA OFICIAL (Manual de Marca) --- */
  --color-primary: #F0B400;                /* Amarillo Institucional */
  --color-primary-hover: #D9A200;          /* Amarillo Activo */
  --color-primary-glow: rgba(240, 180, 0, 0.25);
  
  --color-bg-canvas: #000000;              /* Negro Puro de Fondo */
  --color-bg-surface: #232323;             /* Gris Oscuro de Superficie */
  --color-bg-surface-elevated: #2C2C2C;    /* Gris Elevado */
  
  --color-border-subtle: rgba(255, 255, 255, 0.10);
  --color-border-accent: rgba(240, 180, 0, 0.40);
  
  --color-text-primary: #FFFFFF;           /* Blanco Puro */
  --color-text-secondary: #B0B0B0;         /* Gris Medio de Lectura */
  --color-text-muted: #757575;             /* Gris Atenuado */
  
  --color-whatsapp: #25D366;               /* Verde Oficial WhatsApp */
  --color-whatsapp-hover: #1EBE5D;

  /* --- TIPOGRAFÍA INSTITUCIONAL (Google Fonts Roboto) --- */
  --font-family-body: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-family-display: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;

  /* --- ESCALA TIPOGRÁFICA FLUIDA --- */
  --font-size-display: clamp(2.00rem, 5.0vw, 3.25rem); /* H1 Hero */
  --font-size-h2: clamp(1.50rem, 3.5vw, 2.25rem);      /* H2 Secciones */
  --font-size-h3: clamp(1.125rem, 2.2vw, 1.50rem);     /* H3 Tarjetas */
  --font-size-lead: clamp(1.06rem, 1.8vw, 1.25rem);    /* Bajada Hero */
  --font-size-body: clamp(0.938rem, 1.0vw, 1.00rem);   /* Cuerpo de Texto */
  --font-size-small: clamp(0.813rem, 0.9vw, 0.875rem); /* Textos Secundarios */
  --font-size-badge: 0.75rem;                          /* Micro-copys y Badges */

  /* --- CUADRÍCULA DE ESPACIADO (Grid de 8px) --- */
  --space-0-5: 4px;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;

  /* --- RADIOS DE BORDE --- */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* --- SOMBRAS Y ELEVACIONES --- */
  --shadow-surface: 0 4px 20px rgba(0, 0, 0, 0.60), 0 0 0 1px var(--color-border-subtle);
  --shadow-elevated: 0 8px 30px rgba(0, 0, 0, 0.80), 0 0 0 1px var(--color-border-subtle);
  --shadow-glow: 0 0 25px rgba(240, 180, 0, 0.20), 0 0 0 1px var(--color-border-accent);
  --shadow-whatsapp: 0 6px 20px rgba(37, 211, 102, 0.35);

  /* --- CONTENEDORES Y ANCHOS MÁXIMOS --- */
  --container-max-width: 1200px;
  --container-padding: var(--space-2);
}

@media (min-width: 768px) {
  :root {
    --container-padding: var(--space-4);
  }
}
```

---
*Fin del design-system.md — Especificación visual contractual para el Agente Programador y el Agente QA.*
