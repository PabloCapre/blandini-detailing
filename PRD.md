# PRD — BLANDINI DETAILING (Documento de Requerimientos de Producto)

**Agencia:** WAFLERS  
**Rol Responsable:** Agente Orquestador (Lead Project Manager, UX/UI Architect & Estratega Global)  
**Proyecto:** Sitio Web Comercial de Alta Conversión — Blandini Detailing  
**Fecha de Emisión:** 13 de Octubre de 2026  
**Estado:** Documento Maestro y Vinculante (Aprobado para Delegación)  

---

## 1. Ingesta de Kickoff & Resumen Ejecutivo

### 1.1. Perfil del Negocio
- **Razón Comercial:** Blandini Detailing.
- **Actividad Central:** Taller boutique especializado en estética, protección de pintura de alto rendimiento y restauración vehicular integral en Mendoza.
- **Ubicación Física:** Patricios 1868, Luján de Cuyo, Mendoza, Argentina (Coordenadas Gran Mendoza).
- **Área de Cobertura Principal:** Luján de Cuyo, Chacras de Coria, Godoy Cruz, Ciudad de Mendoza, Guaymallén, Maipú y Gran Mendoza integral.
- **Punto de Contacto y Venta Primario:** WhatsApp Oficial (+54 9 261 337-1061) y perfil de Instagram (@blandini.detailing).
- **Régimen de Operación:** Lunes a viernes de 09:00 a 18:00 hs (horario corrido). Todos los servicios se ejecutan **exclusivamente con turno previo y diagnóstico personalizado**.
- **Perfil de Clientes Objetivo:**
  1. *Propietarios de vehículos 0 km / Alta Gama:* Buscan protección definitiva desde el primer día (PPF y cerámico) para evitar deterioro y preservar el valor de reventa.
  2. *Entusiastas y Coleccionistas de Autos:* Exigen corrección milimétrica de barniz, acondicionamiento minucioso de interiores y puesta en valor estética de vehículos clásicos con criterio de conservación.

### 1.2. Objetivos del Sitio Web
1. **Conversión y Generación de Leads (CRO):** Transformar visitantes locales en conversaciones cualificadas de WhatsApp con un proceso de solicitud de diagnóstico/turno sin fricciones.
2. **Autoridad y Diferenciación:** Establecer a Blandini Detailing como el referente técnico en Mendoza mediante la exhibición de su **Certificación Oficial 3M Scotchgard PPF Serie Pro 200** y casos de estudio reales documentados.
3. **Estrategia AEO / GEO (Search & Answer Engines):** Posicionar la entidad ante Google Local, Knowledge Graphs y motores de búsqueda generativa (ChatGPT, Perplexity, Gemini, Claude) mediante contenido enriquecido, datos estructurados y anclaje geográfico.
4. **Experiencia Móvil Ultra Rápida (Mobile-First):** Lograr tiempos de carga inferiores a 1.8s (LCP) en redes 4G mediante optimización de imágenes (WebP) y maquetación liviana sin dependencias pesadas.

---

## 2. Jerarquía Creativa

Esta sección fija la frontera estricta entre las restricciones no negociables impuestas por el cliente y las libertades técnicas/estratégicas asumidas por la agencia WAFLERS.

```
┌────────────────────────────────────────────────────────────────────────┐
│                      RESTRICCIONES DEL CLIENTE                         │
│  (Identidad de marca, ubicación, horarios, canales, activos oficiales)│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Prevalecen sobre cualquier decisión
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        LIBERTADES WAFLERS                              │
│   (Arquitectura CRO, UX/UI Mobile-First, SEO/AEO, Schema Markup, QA)   │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1. Restricciones del Cliente (No Negociables)
- **Identidad de Marca:** Respeto irrestricto del manual de identidad visual (`manual-de-marca-blandini.pdf`).
  - **Color Primario (Amarillo Institucional):** HEX `#F0B400` | RGB `(240, 180, 0)` | CMYK `(5, 30, 95, 0)`.
  - **Neutro de Fondo (Negro Puro):** HEX `#000000` | RGB `(0, 0, 0)` | CMYK `(100, 100, 100, 100)`.
  - **Neutro de Superficie / Contraste (Gris Oscuro):** HEX `#232323` | RGB `(35, 35, 35)` | CMYK `(75, 65, 60, 80)`.
  - **Color de Luz / Lectura (Blanco Puro):** HEX `#FFFFFF` | RGB `(255, 255, 255)` | CMYK `(0, 0, 0, 0)`.
  - **Tipografía de Logotipo / Display:** Paladins Super-Italic (utilizada en imagotipo y assets vectoriales de marca).
  - **Tipografía Institucional para Web y Textos:** `Roboto` (Google Fonts), especificada en el manual de marca para cuerpo de texto y jerarquías legibles.
  - **Eslogan Oficial de Marca:** *"Expertos en estética automotriz."*
- **Modelo de Negocio:** No se venden servicios como paquetes cerrados automáticos con pago online. La atención y presupuesto requieren evaluación del estado del vehículo; la web debe canalizar todo hacia WhatsApp.
- **Regla Operativa:** Obligatoriedad de aclarar que la atención es **100% con turno previo**.
- **Servicios Estrella Obligatorios:** Tratamientos Cerámicos y Protección de Pintura con PPF (Paint Protection Film).
- **Prueba de Autoridad Ineludible:** Exhibición destacada de la Certificación Oficial 3M Scotchgard PPF Pro Series 200 otorgada a Renzo Blandini y Gino Lanzillotta.
- **Casos de Éxito Específicos:** Muestra obligatoria de los 3 casos provistos:
  1. *Caso 0km:* BMW X6M Competition (Instalación de PPF, tratamiento cerámico y polarizado nano cerámico).
  2. *Caso Antes y Después:* Chevrolet Blazer Clásica (Limpieza profunda de motor y corrección/pulido de chapa).
  3. *Caso Restauración Clásica:* Siambretta 125cc de 1954 (Puesta en valor histórica y preservación sin repintado).

### 2.2. Libertades WAFLERS (Autonomía de la Agencia)
- **Estrategia CRO & Funnel:** Definición de la disposición del contenido, jerarquía visual, micro-interacciones, botones flotantes de WhatsApp con mensaje pre-rellenado y llamadas a la acción (CTAs) de alta conversión.
- **Diseño Mobile-First & Micro-UX:** Arquitectura visual optimizada para interacción con pulgar en pantallas móviles, zonas táctiles de 48px mínimo, comparadores de imagen antes/después interactivos y carrusel liviano sin JavaScript pesado.
- **Estrategia AEO / GEO / SEO:** Estructuración de títulos semánticos, entidades de Knowledge Graph para Gran Mendoza, tablas comparativas técnicas y expansión obligatoria de preguntas frecuentes orientadas a la intención de búsqueda del usuario.
- **Técnica de Desarrollo:** Adopción de HTML5 semántico, variables nativas en `:root`, carga diferida (`loading="lazy"`), scripts no bloqueantes y arquitectura Schema Markup JSON-LD rigurosa.

---

## 3. Decisiones Globales Críticas

### 3.1. Arquitectura Multi-Idioma (i18n)
- **Decisión:** **NO se implementa multi-idioma (Monoidioma Español - `es-AR`).**
- **Justificación Estratégica:** Blandini Detailing opera un taller físico de servicios artesanales de alta precisión en Patricios 1868, Luján de Cuyo. Su demanda es 100% geográfica y provincial (Gran Mendoza). Añadir inglés u otros idiomas diluiría el presupuesto de rastreo (*crawl budget*), aumentaría la complejidad del DOM innecesariamente y no aporta valor comercial a la captación de leads en la región.

### 3.2. Soporte de Modo Claro / Oscuro (Dark Mode)
- **Decisión:** **Dark Mode Nativo Permanente (Dark Theme First, sin toggle dinámico).**
- **Justificación Estratégica:** 
  1. *Alineación de Marca:* El manual de identidad visual de Blandini Detailing define su presencia de marca sobre fondos negros y grises antracita (`#000000`, `#232323`), donde el amarillo vibrante (`#F0B400`) y el blanco (`#FFFFFF`) adquieren su máxima expresión y contraste visual.
  2. *Psicología del Nicho:* En la industria global del detailing automotriz y cuidado de hiperdeportivos/0km, las interfaces oscuras transmiten lujo, tecnología, precisión de cabina de detallado e iluminación técnica.
  3. *Performance & FOUC:* Eliminar scripts de alternancia de temas previene el clásico parpadeo de carga (*Flash of Unstyled Content*) y ahorra bytes críticos para el rendimiento web en móviles.

### 3.3. Gestión de Datos Dinámicos (Google Sheets DB)
- **Decisión:** **No se requiere integración de base de datos dinámica Google Sheets DB en esta fase.**
- **Justificación:** Los servicios de detailing automotriz de alta gama no manejan precios fijos universales ni inventario con stock rotativo. Cada presupuesto varía según el tamaño del chasis (hatchback, sedán, SUV, pickup), el nivel de descontaminación de la pintura y el tipo de película o sellador requerido. Los servicios se estructuran como módulos semánticos estáticos de alta velocidad con trigger de cotización hacia WhatsApp. Se deja proyectada la arquitectura en el código por si a futuro el cliente solicita un listado público de precios de lavado de mantenimiento.

---

## 4. Arquitectura de Información & Mapa del Sitio

El sitio se estructura como una **Landing Page de Alta Conversión (One-Page Modular)** con navegación fluida por anclajes semánticos, garantizando un recorrido ágil sin saltos de página ni tiempos de espera.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HEADER / NAVBAR STICKY                          │
│     [Logo Blandini] | Servicios | Casos | Certificación | FAQ | [Turno] │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        1. HERO SECTION & PROMETEO                      │
│     H1 AEO + Subtítulo + Badges de Autoridad (3M) + CTAs Principales   │
│     + Carrusel Visual Liviano Mobile-First                             │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        2. TRUST BAR & AUTORIDAD 3M                     │
│     Instaladores Oficiales 3M Scotchgard Pro Series + Métricas Clave    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        3. SERVICIOS ESPECIALIZADOS                     │
│     - Servicios Estrella: PPF (3M) & Tratamientos Cerámicos            │
│     - Detailing General: Pulido, Interiores, Polarizados, Sacabollos    │
│     - Especialidad: Cuidado y Puesta en Valor de Autos Clásicos        │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        4. CASOS DE ESTUDIO REALES                      │
│     - Caso 0km: BMW X6M Competition (PPF + Cerámico + Nano Polarizado) │
│     - Caso Antes & Después: Chevrolet Blazer (Motor & Corrección)      │
│     - Caso Restauración: Siambretta 125cc 1954 (Preservación histórica)│
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        5. METODOLOGÍA & PROCESO WAFLERS                │
│     Recepción -> Diagnóstico y Espesímetro -> Aplicación -> Garantía    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        6. TABLA TÉCNICA COMPARATIVA                    │
│     PPF Scotchgard Pro Series vs Tratamiento Cerámico vs Cera Tradic.  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        7. PREGUNTAS FRECUENTES (FAQ EXPANDIDAS)        │
│     Acordeón Interactivo con Marcado JSON-LD FAQPage (Dwell Time CRO)  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        8. LOCALIZACIÓN, HORARIOS Y CONTACTO            │
│     Mapa Patricios 1868 Luján de Cuyo + Horarios + Trigger WhatsApp    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        FOOTER & FLOATING CTA WHATSAPP                  │
│     Datos de la Entidad + Enlaces Legales + Botón Flotante Persistente │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Árbol de Directorios y Mapeo Definitivo de Assets

El Programador debe implementar la siguiente estructura formal dentro del directorio `/assets/`. Todos los assets crudos provistos en `/onboarding/` deben procesarse y mapearse formalmente a las rutas indicadas a continuación:

```
/assets/
  ├── brand/
  │     ├── logo-blandini-yellow.svg      <-- Imagotipo principal (Amarillo #F0B400)
  │     ├── logo-blandini-white.svg       <-- Imagotipo secundario en negativo (Blanco)
  │     ├── favicon.ico                   <-- Ícono de navegación estándar
  │     ├── apple-touch-icon.png          <-- Ícono táctil para iOS (180x180 px)
  │     └── og-image.jpg                  <-- Imagen de alta resolución para Social Share (1200x630 px, <300KB)
  │
  ├── carousel/
  │     ├── carousel-01.webp              <-- Mapeado de onboarding/carrousel/IMG_0177.JPG (Taller/Acción)
  │     ├── carousel-02.webp              <-- Mapeado de onboarding/carrousel/IMG_0221.JPG (Reflejo/Pulido)
  │     ├── carousel-03.webp              <-- Mapeado de onboarding/carrousel/IMG_0356.JPG (Detalle de terminación)
  │     ├── carousel-04.webp              <-- Mapeado de onboarding/carrousel/IMG_0766.JPG (Proceso técnico)
  │     ├── carousel-05.webp              <-- Mapeado de onboarding/carrousel/IMG_4673.JPG (Línea de chapa)
  │     └── carousel-06.webp              <-- Mapeado de onboarding/carrousel/IMG_9467.JPG (Entrega final)
  │
  ├── cases/
  │     ├── 0km/
  │     │     ├── bmw-x6m-frontal-ppf.webp  <-- Mapeado de onboarding/caso okm/IMG_4112.JPG
  │     │     ├── bmw-x6m-proceso.webp      <-- Mapeado de onboarding/caso okm/IMG_4135.JPG
  │     │     ├── bmw-x6m-lateral.webp      <-- Mapeado de onboarding/caso okm/IMG_4148.JPG
  │     │     └── bmw-x6m-final.webp        <-- Mapeado de onboarding/caso okm/IMG_4169.JPG
  │     │
  │     ├── before-after/
  │     │     ├── blazer-motor-antes.webp   <-- Mapeado de onboarding/caso antes y despues/IMG_5332.jpeg
  │     │     ├── blazer-motor-despues.webp <-- Mapeado de onboarding/caso antes y despues/IMG_5334.jpeg
  │     │     ├── blazer-chapa-antes.webp   <-- Mapeado de onboarding/caso antes y despues/IMG_6052.jpeg
  │     │     └── blazer-chapa-despues.webp <-- Mapeado de onboarding/caso antes y despues/IMG_6056.jpeg
  │     │
  │     └── restoration/
  │           ├── siambretta-original.webp  <-- Mapeado de onboarding/caso restauracion/IMG_1009.JPG
  │           ├── siambretta-desarme.webp   <-- Mapeado de onboarding/caso restauracion/IMG_2240.JPG
  │           ├── siambretta-proceso.webp   <-- Mapeado de onboarding/caso restauracion/IMG_3117.JPG
  │           └── siambretta-final.webp     <-- Mapeado de onboarding/caso restauracion/IMG_3140.JPG
  │
  └── certifications/
        └── certificacion-3m-scotchgard.webp <-- Mapeado de onboarding/certificacion3M.jpeg (Optimizado WebP)
```

> **Regla de Optimización para el Programador:** Todas las imágenes rasterizadas de la web deben cargarse en formato moderno WebP, con dimensiones estandarizadas según viewport, relaciones de aspecto fijas para evitar CLS y atributo `loading="lazy"` obligatorio para todas las imágenes ubicadas *below the fold*.

---

## 6. Arquitectura Modular de Componentes

Para asegurar máxima mantenibilidad, escalabilidad futura y cero roturas de layout, la interfaz debe construirse a partir de componentes modulares encapsulados:

1. **`Navbar` (Cabecera Flotante):**
   - Comportamiento: Sticky con fondo difuminado en negro translúcido (`backdrop-filter: blur(12px)`).
   - Elementos: Logotipo vectorial Blandini, enlaces ancla de salto suave (`#servicios`, `#casos`, `#autoridad`, `#faq`, `#contacto`) y botón CTA destacado *"Turnos WhatsApp"*.
   - Mobile: Menú desplegable hamburguesa accesible, sin bloqueos y con target táctil mínimo de 48px.

2. **`HeroBanner` (Impacto y Conversión Inmediata):**
   - Comportamiento: 100% viewport height en móvil (`100dvh` o adaptable).
   - Componentes internos: Tag de autoridad (`Pill Badge`: *"Instaladores Oficiales Certificados 3M PPF"*), Titular H1 semántico directo, Párrafo con valor fáctico, botones de acción primario y secundario.

3. **`CarouselTrack` (Carrusel Mobile-First de Alto Desempeño):**
   - Comportamiento: Carrusel táctil con scroll-snap horizontal CSS nativo, ultra fluido a 60fps, sin librerías pesadas externas. Indicadores de puntos de paginación sutiles y tarjetas con bordes redondeados y sombra suave.

4. **`ServiceCard` (Tarjeta de Servicio Modular):**
   - Propiedades: Ícono SVG minimalista, Título H3 del servicio, Insignia de categoría (`Estrella`, `Protección`, `Restauración`), Descripción sintética orientada a beneficios, Lista de qué incluye, y enlace directo con trigger de mensaje preconfigurado a WhatsApp.

5. **`CaseStudyCard` (Módulo de Casos Reales):**
   - Variante 0km: Galería visual de detalles con etiquetas técnicas (Micronaje, Tipo de PPF Scotchgard, Curado cerámico).
   - Variante Antes/Después: Slider comparador interactivo o display bilateral lado a lado con switch táctil.
   - Variante Restauración: Ficha técnica patrimonial (Año 1954, Conservación de pintura de fábrica, Tratamiento no invasivo).

6. **`AuthorityBadge` (Caja de Certificación Oficial 3M):**
   - Contenedor con borde acentuado en amarillo `#F0B400`, exhibición del diploma de Renzo Blandini y Gino Lanzillotta (Certificación Scotchgard PPF Pro Series 200), y texto de respaldo legal/técnico.

7. **`ComparisonTable` (Tabla Comparativa AEO/GEO):**
   - Componente responsive con scroll horizontal en móvil que compara: *PPF 3M Scotchgard* vs *Tratamiento Cerámico 9H* vs *Encerado Tradicional*. Factores: Resistencia a impactos de piedra, durabilidad, autocuración térmica, brillo hidrofóbico.

8. **`AccordionFAQ` (Preguntas Frecuentes):**
   - Elementos semánticos `<details>` y `<summary>` o estructura JS accesible con ARIA expandida. Respuestas estructuradas con la técnica de pirámide invertida para captura de fragmentos destacados de Google.

9. **`FloatingWhatsApp` (Botón Flotante Persistente):**
   - Posición fija inferior derecha (`bottom: 24px; right: 24px; z-index: 100`). Efecto pulso sutil para captar atención sin interrumpir la lectura, con enlace directo con mensaje personalizado:  
     `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20quiero%20consultar%20un%20presupuesto%20para%20mi%20vehículo.`

---

## 7. Estrategia de Contenidos, AEO & GEO (Search & Answer Engines)

### 7.1. Directivas para el Agente Copywriter
El Copywriter debe procesar los requerimientos de Blandini Detailing bajo la óptica de **AEO (Answer Engine Optimization)** y **GEO (Generative Engine Optimization)**:

1. **Principio de Pirámide Invertida en Párrafos Clave:**
   - Cada sección y respuesta de FAQ debe comenzar con la respuesta fáctica y directa en la primera línea, facilitando que ChatGPT, Gemini, Perplexity y Google extraigan la cita textual sin ambigüedades.
2. **Anclaje de Entidades Verificables (Evitar Adjetivos Vacíos):**
   - Queda prohibido redactar generalidades como "somos los mejores de la zona". Se debe utilizar precisión fáctica: *"Taller de detailing ubicado en Patricios 1868, Luján de Cuyo, con instaladores certificados por 3M en láminas Scotchgard PPF Serie Pro 200, brindando cobertura especializada a todo el Gran Mendoza."*
3. **Optimización para Consultas Conversacionales Complejas (Prompts de IA):**
   - El contenido debe responder directamente a consultas como:
     - *"¿Cuánto dura un tratamiento cerámico frente al sol de Mendoza?"*
     - *"¿Qué diferencia hay entre poner PPF o hacer tratamiento cerámico a un auto 0km?"*
     - *"¿Se puede restaurar la pintura original de un vehículo clásico sin repintar?"*
4. **Expansión Obligatoria de Preguntas Frecuentes (Dwell Time & Long-Tail):**
   - El Copywriter no debe limitarse a las 3 preguntas comerciales del onboarding. Debe redactar un mínimo de **8 preguntas frecuentes exhaustivas**, abarcando:
     - Diferencias técnicas entre PPF y sellado cerámico.
     - Resistencia del PPF contra el granizo y gravilla en las rutas de Mendoza.
     - Mantenimiento y lavado posterior de un auto con tratamiento cerámico.
     - Tiempos de curado y por qué se atiende exclusivamente con turno previo.
     - Recuperación de interiores de cuero y limpieza profunda de motor sin riesgo electrónico.
     - Criterio de preservación en vehículos históricos (sin repintado).

### 7.2. Tabla de Entidades Semánticas y Relaciones
| Entidad Primaria | Tipo de Entidad | Propiedades Clave Asociadas | Relación Semántica |
| :--- | :--- | :--- | :--- |
| **Blandini Detailing** | `LocalBusiness` / `AutoRepair` | Patricios 1868, Luján de Cuyo, Mendoza, +5492613371061 | Entidad Central del Negocio |
| **Gran Mendoza** | `Place` / `AdministrativeArea` | Luján de Cuyo, Chacras de Coria, Godoy Cruz, Capital | Área de Servicio (`areaServed`) |
| **3M Scotchgard PPF** | `Product` / Insumo Técnico | Serie Pro 200, Poliuretano autorregenerativo | Insumo Certificado (`knowsAbout`) |
| **Tratamiento Cerámico** | `Service` | Protección hidrofóbica 9H, corrección de barniz | Oferta de Servicio (`hasOfferCatalog`) |
| **Restauración Clásica**| `Service` | Preservación de pintura de fábrica, puesta en valor | Oferta Especializada |

---

## 8. Separación Estricta de Entidades para Schema Markup

> **DIRECTIVA VINCULANTE PARA EL PROGRAMADOR:**  
> Queda estrictamente prohibido contaminar o suplantar la identidad de `Blandini Detailing` con marcas de terceros en los bloques de datos estructurados JSON-LD.  
> - **Blandini Detailing** es la entidad jurídica y comercial local (`LocalBusiness` o `AutoRepair`).
> - **3M**, **Scotchgard**, **BMW**, **Chevrolet** o **Siambretta** son marcas registradas externas. No deben figurar como nombres de la organización ni en su `@id`.
> - La relación con 3M debe representarse estrictamente como credencial técnica del equipo (`hasCredential` o mención en `knowsAbout`) o como especificación del material dentro del catálogo de servicios (`Service` / `hasOfferCatalog`), nunca como el negocio en sí.

### Estructura de Schemas Requeridos:
1. **`LocalBusiness` / `AutoRepair`:**
   - Nombre: Blandini Detailing
   - Dirección: Calle Patricios 1868, CP 5507, Luján de Cuyo, Mendoza, Argentina
   - Teléfono: `+5492613371061`
   - Geo: Coordenadas precisas de Patricios 1868, Luján de Cuyo
   - OpeningHours: Mo-Fr 09:00-18:00
   - PriceRange: `$$$`
   - Image: URL canónica de `/assets/brand/og-image.jpg`
   - SameAs: Enlace a Instagram (`https://www.instagram.com/blandini.detailing`) y Google Maps (`https://maps.app.goo.gl/jkiGczvggDb9Pa9BA`)
2. **`FAQPage`:**
   - Estructuración JSON-LD con cada pregunta y respuesta redactada por el Copywriter.
3. **`Service` (Individuales o Catalog):**
   - Servicio 1: *"Instalación de Paint Protection Film (PPF)"*
   - Servicio 2: *"Tratamiento Cerámico y Corrección de Pintura"*
   - Servicio 3: *"Restauración Estética de Vehículos Clásicos"*
   - Servicio 4: *"Limpieza Detallada de Interiores y Motor"*

---

## 9. Metadatos y Social Share (Optimización para WhatsApp)

El preview al compartir enlaces en WhatsApp es el primer punto de contacto en la prospección comercial del taller. La configuración debe seguir estos parámetros matemáticos:

### 9.1. Especificación del Asset `og:image`
- **Ruta Oficial del Asset:** `/assets/brand/og-image.jpg`
- **Dimensiones Exactas:** 1200 x 630 píxeles (proporción 1.91:1) con zona segura centrada de 630 x 630 píxeles para visualizadores cuadrados en WhatsApp.
- **Peso Máximo del Archivo:** Menor a **300 KB** (WhatsApp rechaza o muestra grisáceas las imágenes de Open Graph que superen los 300KB).
- **Diseño del Banner:** Fondo grafito oscuro (`#232323`), logotipo oficial de Blandini Detailing en amarillo institucional (`#F0B400`) y blanco, con la leyenda *"Detallado, Cerámicos & PPF Certificado en Mendoza"* y el sello de Certificación 3M.

### 9.2. Reglas de Metadatos Open Graph
- **`og:title`:** Máximo **60 caracteres**. Conciso, sin relleno, con alta intención comercial local.  
  *Directriz para el Copywriter:* Debe condensar marca, especialidad y localidad (ej: *"Blandini Detailing | PPF y Tratamientos Cerámicos en Mendoza"*).
- **`og:description`:** Máximo **110 caracteres**. Llamado a la acción directo y propuesta de valor enfocada en turnos.  
  *Directriz para el Copywriter:* Mensaje enfocado en protección 0km y turnos (ej: *"Protección premium con PPF 3M y cerámicos para 0km y clásicos en Luján de Cuyo. Turnos por WhatsApp."*).
- **`og:url`:** URL canónica de producción del sitio.
- **`og:type`:** `website`.
- **`twitter:card`:** `summary_large_image`.

---

## 10. Interlinking Estratégico (Red de Enlaces Internos)

Para orientar el flujo del usuario y transferir autoridad temática dentro de la página, se definen los siguientes enlaces y anclas internas obligatorias:

1. **Del Hero a Casos de Éxito:** El botón secundario *"Ver Trabajos"* enlaza directamente a `#casos`.
2. **De Servicios Estrella a Casos Reales:**
   - La tarjeta de *PPF y Cerámico* contiene un link textual: *"Ver instalación en BMW X6M 0km →"* con anclaje a `#caso-0km`.
   - La tarjeta de *Autos Clásicos y Restauración* contiene un link: *"Conocer restauración Siambretta 1954 →"* con anclaje a `#caso-restauracion`.
   - La tarjeta de *Pulido y Motor* contiene un link: *"Ver antes y después en Blazer clásica →"* con anclaje a `#caso-antes-despues`.
3. **De Casos Reales a la Prueba de Autoridad:** Desde el caso del BMW X6M hacia `#certificacion-3m` destacando la formación oficial de los instaladores.
4. **De la Tabla Comparativa a Preguntas Frecuentes:** Desde la comparativa técnica hacia `#faq` para resolver dudas específicas de durabilidad y mantenimiento.
5. **De todas las secciones a Contacto / Turnos:** Botones contextuales que dirigen al bloque de contacto `#contacto` o abren directamente la conversación de WhatsApp.

---

## 11. Transparencia Analítica & Preparación Técnica

### 11.1. Rastreo e Infraestructura de Búsqueda
- **`robots.txt`:** Debe crearse en la raíz con permisos explícitos de rastreo para bots tradicionales y agentes de inteligencia artificial:
  ```txt
  User-agent: *
  Allow: /

  User-agent: GPTBot
  Allow: /

  User-agent: Google-Extended
  Allow: /

  User-agent: PerplexityBot
  Allow: /

  Sitemap: https://blandinidetailing.com/sitemap.xml
  ```
- **`sitemap.xml`:** Generación del archivo con la URL canónica principal, frecuencia de actualización mensual y prioridad 1.0.

### 11.2. Placeholders Analíticos en `<head>`
- **Google Analytics 4 (GA4):** El Programador debe insertar la estructura estándar de `gtag.js` utilizando estrictamente el identificador de prueba placeholder `G-XXXXX`.
- **Google Search Console (GSC):** El Programador debe incluir un comentario HTML nítido y visible señalando la posición exacta donde el cliente o el equipo pegará el token de verificación:
  `<!-- [GSC_VERIFICATION_TAG_HERE] Inserte la metaetiqueta de Google Search Console provista por el cliente -->`

### 11.3. Cláusula de Transparencia Analítica
> **CLÁUSULA DE CERO PROMESAS DE RANKING GARANTIZADO:**  
> La agencia WAFLERS aplica las mejores prácticas de la industria en SEO On-Page, Schema Markup, optimización semántica para motores de respuesta (AEO) y rastreo por LLMs (GEO). Sin embargo, bajo ningún concepto se promete, asegura ni garantiza una posición específica (#1 o primera página) en los resultados orgánicos de Google ni en índices de terceros, ya que los algoritmos de búsqueda y los resultados locales dependen de factores externos dinámicos fuera del control de la agencia.

---

## 12. Matriz de Delegación de Tareas

A continuación se formaliza la matriz técnica que rige los entregables de cada especialista del equipo:

```json
{
  "project": "BLANDINI DETAILING",
  "orchestrator_version": "1.0",
  "delegation_matrix": [
    {
      "agent": "Copywriter",
      "status": "PENDIENTE_DE_ACTIVACION",
      "priority": 1,
      "input_documents": ["PRD.md", "onboarding/onboarding-form.txt"],
      "output_deliverables": ["dev-brief.md", "google-business.md"],
      "mandatory_directives": [
        "Redactar todos los textos seccionados para dev-brief.md en tono profesional, de alta autoridad y cercano sin caer en Spanglish ni tecnicismos confusos.",
        "Generar og:title (máximo 60 caracteres) y og:description (máximo 110 caracteres) orientados al CTR en WhatsApp.",
        "Formular un mínimo de 8 preguntas frecuentes expandidas de nicho (AEO) con técnica de pirámide invertida y respuestas de alta densidad semántica para maximizar dwell time.",
        "Redactar copys contextuales para los 3 casos reales: BMW X6M (0km), Chevrolet Blazer (Antes/Después motor y chapa) y Siambretta 1954 (Puesta en valor histórica sin repintado).",
        "Destacar la Certificación Oficial 3M Scotchgard Serie Pro 200 de Renzo Blandini y Gino Lanzillotta como prueba inexpugnable de autoridad.",
        "Aclarar en cada llamado a la acción la modalidad obligatoria de 'Atención exclusivamente con turno previo'."
      ]
    },
    {
      "agent": "Diseñador",
      "status": "PENDIENTE_DE_ACTIVACION",
      "priority": 2,
      "input_documents": ["PRD.md", "onboarding/manual-de-marca-blandini.pdf"],
      "output_deliverables": ["design-system.md"],
      "mandatory_directives": [
        "Estructurar el UI Kit y Design System bajo enfoque 100% Mobile-First y estética Dark Theme permanente.",
        "Fijar tokens cromáticos exactos: Primario Amarillo (#F0B400), Fondo (#000000), Superficie (#232323), Texto (#FFFFFF).",
        "Auditar y certificar contraste WCAG AA/AAA (mínimo 4.5:1) en todas las combinaciones de botones y textos.",
        "Emparejar tipografía Roboto (Google Fonts) para textos y navegación, respetando la identidad Display del manual de marca.",
        "Definir especificaciones de componentes modulares: ServiceCards, Before/After Slider, Carrusel táctil snap-scroll, y botón flotante de WhatsApp.",
        "Establecer la cuadrícula matemática de espaciado en múltiplos de 8px (8, 16, 24, 32, 48, 64)."
      ]
    },
    {
      "agent": "Programador",
      "status": "PENDIENTE_DE_ACTIVACION",
      "priority": 3,
      "input_documents": ["PRD.md", "dev-brief.md", "design-system.md"],
      "output_deliverables": ["index.html", "styles.css", "main.js", "robots.txt", "sitemap.xml", "assets/"],
      "mandatory_directives": [
        "Construir la web en HTML5 semántico limpio, Vanilla CSS y Vanilla JS modular a 60fps.",
        "Centralizar el 100% de variables de diseño en el bloque :root de styles.css sin valores hardcodeados.",
        "Implementar la estructura completa de /assets/ procesando y optimizando las imágenes crudas de /onboarding/ a formato WebP liviano.",
        "Configurar metaetiquetas Open Graph completas en el <head> vinculando /assets/brand/og-image.jpg (<300KB) para previsualización impecable en WhatsApp.",
        "Implementar Schema Markup JSON-LD riguroso para LocalBusiness, Service y FAQPage, respetando la Separación Estricta de Entidades (prohibido asociar marcas de terceros como 3M o BMW a la entidad del taller).",
        "Configurar robots.txt habilitando GPTBot, Google-Extended y PerplexityBot, y sitemap.xml.",
        "Insertar scripts de prueba GA4 ('G-XXXXX') y comentario visible para el token de Google Search Console.",
        "Asegurar loading='lazy' en imágenes fuera del primer scroll y rendimiento Core Web Vitals (LCP < 1.8s)."
      ]
    },
    {
      "agent": "QA",
      "status": "PENDIENTE_DE_ACTIVACION",
      "priority": 4,
      "input_documents": ["PRD.md", "dev-brief.md", "design-system.md", "Código Fuente Final"],
      "output_deliverables": ["qa-report.md", "Veredicto OK de Producción"],
      "mandatory_directives": [
        "Realizar auditoría estática exhaustiva de bajo consumo sobre HTML, CSS, JS y metadatos.",
        "Verificar ausencia total de desborde horizontal (overflow-x) en viewports móviles desde 320px hasta 430px.",
        "Comprobar cumplimiento de tap targets mínimos de 48px en botones y enlaces de navegación.",
        "Validar validez sintáctica de esquemas JSON-LD (LocalBusiness, FAQPage) y separación de entidades.",
        "Certificar que el archivo og:image existe, no supera los 300KB y cuenta con etiquetas og:title (<=60) y og:description (<=110).",
        "Auditar presencia de placeholders analíticos (GA4 G-XXXXX y comentario GSC) y directivas en robots.txt.",
        "Emitir reporte consolidado único de correcciones o dictaminar visto bueno definitivo para pase a producción."
      ]
    }
  ]
}
```

---
*Fin del Documento Maestro PRD.md — Proceder con la delegación formal de la Fase Uno hacia el Agente Copywriter.*
