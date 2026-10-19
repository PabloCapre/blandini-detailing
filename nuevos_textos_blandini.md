# BLANDINI DETAILING — NUEVOS TEXTOS COMERCIALES & TÉCNICOS
**Agencia:** WAFLERS  
**Rol:** Lead Copywriter & Local SEO Strategist  
**Proyecto:** Blandini Detailing (Mendoza, Argentina)  
**Documento:** `nuevos_textos_blandini.md`  
**Destinatarios:** Agente Programador & Agente Diseñador  
**Enfoque:** Tono de taller técnico, crudo, transparente, sin humo publicitario y orientado a conversión de alto valor (CRO + AEO/GEO).

---

## 1. SERVICIO PPF: Viñeta de "Qué incluye" con Inyección Orgánica de "Premium Star" y 3M

### 1.1. Viñeta Específica Requerida
> **Lámina de protección instalada:**  
> `Instalación de láminas de poliuretano de alta gama —3M Scotchgard™ Pro 200 y Premium Star— con propiedades autorregenerativas, montadas en cabina libre de impurezas.`

### 1.2. Bloque Completo de Viñetas para la Tarjeta de Servicio PPF (`index.html`)
Para mantener la coherencia semántica en la tarjeta del servicio estrella, esta es la lista completa lista para producción:

```html
<div class="service-includes-title">Qué incluye este servicio:</div>
<ul class="service-checklist">
  <li><span class="chk">✔</span> Descontaminado químico y mecánico profundo de chapa previo a la instalación.</li>
  <li><span class="chk">✔</span> Corrección de barniz puntual para asegurar una superficie libre de defectos.</li>
  <li><span class="chk">✔</span> Instalación de láminas homologadas 3M Scotchgard™ Serie Pro 200 y Premium Star en cabina limpia.</li>
  <li><span class="chk">✔</span> Propiedad autorregenerativa activa ante exposición solar o agua tibia (las micro-rayas cierran solas).</li>
  <li><span class="chk">✔</span> Configuración personalizada: Kit Frontal de Alto Impacto o Cobertura Completa de Carrocería.</li>
  <li><span class="chk">✔</span> Sellado térmico perimetral y ajuste de bordes para evitar desprendimientos por lavado a presión.</li>
</ul>
```

---

## 2. NUEVO SERVICIO: "Preparación para la Venta" (Detailing Comercial)

### 2.1. Metadatos de la Tarjeta de Servicio
- **Insignia / Badge:** `VALOR DE REVENTA • EVALUACIÓN COSTO-BENEFICIO`
- **Título (H3):** `Preparación para la Venta`
- **Subtítulo / Bajada Rápida:** `Puesta a punto estética estratégica para defender el precio de tu auto y acelerar la operación sin sobrefacturar tratamientos innecesarios.`

### 2.2. Descripción Corta
> Un servicio a medida enfocado en el retorno de inversión. Evaluamos con honestidad técnica qué puntos del vehículo castigan el valor de tasación y concentramos el trabajo exclusivamente en lo que un comprador inspecciona: brillo general parejo, vano motor limpio y seco sin sospecha de pérdidas, e interior higienizado sin olores. Ni un peso gastado de más, ni un detalle descuidado frente a la negociación.

### 2.3. Beneficios Técnicos y Comerciales (Qué incluye)
1. **Evaluación de costo vs. impacto visual:** Diagnóstico honesto para no cobrarte pulidos multicapa ni cerámicos costosos que no recuperarás al vender. Intervenimos solo lo que suma valor real.
2. **Corrección de pintura en 1 paso (One-Step Gloss):** Remoción de opacidad y marcas de lavado superficiales para devolver profundidad y brillo parejo a la chapa, sin desgaste agresivo del barniz.
3. **Limpieza y desengrase técnico de vano motor:** Desengrasantes dieléctricos con terminación mate de fábrica. Motor prolijo y presentable que transmite mantenimiento responsable, sin siliconas grasosas que parezcan tapar pérdidas de fluidos.
4. **Desmanchado e higienización de interiores:** Limpieza profunda de tapicería, paneles, cinturones y alfombras, eliminando manchas visibles y neutralizando olores persistentes (tabaco, humedad, mascotas).
5. **Acondicionamiento exterior de molduras y neumáticos:** Hidratación sobria de plásticos secos y gomas con terminación mate satinada, lista para sesiones de fotos de alto impacto comercial en portales de venta.
6. **Descontaminación óptica de cristales:** Eliminación de marcas de agua dura y sarro en parabrisas y luneta para garantizar transparencia impecable durante la prueba de manejo.

### 2.4. Código de Maquetación Listo para `index.html` (Servicios Grid)
```html
<!-- SERVICIO: PREPARACIÓN PARA LA VENTA -->
<article class="service-card">
  <span class="service-badge">VALOR DE REVENTA • COSTO-BENEFICIO</span>
  <h3 class="service-title">Preparación para la Venta</h3>
  <p class="service-summary">
    Servicio a medida enfocado en el retorno de inversión comercial. Realizamos una justa evaluación entre costo y calidad de presentación para defender el precio de tu auto: eliminamos los defectos visuales que bajan la cotización sin sobrefacturar procesos que no vas a recuperar en la operación.
  </p>
  <div class="service-includes-title">Detalles de ejecución:</div>
  <ul class="service-checklist">
    <li><span class="chk">✔</span> Diagnóstico comercial honesto: intervenimos solo lo que suma valor real.</li>
    <li><span class="chk">✔</span> Corrección de pintura en 1 paso para recuperar brillo sin desgastar barniz.</li>
    <li><span class="chk">✔</span> Limpieza de vano motor segura, sin siliconas grasosas que oculten fallas.</li>
    <li><span class="chk">✔</span> Desmanchado y neutralización profunda de olores en habitáculo.</li>
    <li><span class="chk">✔</span> Acondicionado de gomas y plásticos para fotos y prueba de manejo.</li>
  </ul>
  <a href="https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20quiero%20cotizar%20la%20preparación%20para%20la%20venta%20de%20mi%20auto." class="btn-card-action" target="_blank" rel="noopener noreferrer">
    Cotizar Preparación para Venta →
  </a>
</article>
```

---

## 3. RECUPERACIÓN PROFUNDA (Caso 2: Chevrolet Blazer)

### 3.1. Reescritura Técnica Estricta
Reescritura de las especificaciones técnicas del Caso 2 (`#caso-antes-despues`), incorporando **ESTRICTAMENTE** los datos técnicos solicitados:

- **Limpieza de Vano Motor:** Desengrasantes específicos dieléctricos y cepillado manual pieza por pieza, con terminación mate no pegajosa.
- **Corrección de Pintura en 3 Pasos:** Lijado suave localizado, corte pesado para remover el 90% de marcas circulares y abrillantado final.
- **Resultado:** Motor seguro con aspecto de fábrica y pintura con profundidad de espejo restaurada.

### 3.2. Bloque de Texto Completo para la Ficha en `index.html`
```html
<div class="case-info">
  <div class="case-badge">ANTES Y DESPUÉS • RECUPERACIÓN PROFUNDA</div>
  <h3 class="case-title">Detallado de motor y corrección de pintura</h3>
  <p class="case-desc">
    Una camioneta clásica con años de acumulación de grasa reseca y polvo en el vano motor, sumado a una carrocería con barniz opaco y severamente micro-rayado por lavados incorrectos.
  </p>
  <ul class="case-specs-list">
    <li><strong>Limpieza de Vano Motor:</strong> Desengrasantes específicos dieléctricos y cepillado manual pieza por pieza, con terminación mate no pegajosa.</li>
    <li><strong>Corrección de Pintura en 3 Pasos:</strong> Lijado suave localizado, corte pesado para remover el 90% de marcas circulares y abrillantado final.</li>
    <li><strong>Resultado:</strong> Motor seguro con aspecto de fábrica y pintura con profundidad de espejo restaurada.</li>
  </ul>
  <a href="https://wa.me/5492613371061?text=Hola,%20quiero%20hacerle%20una%20recuperación%20profunda%20de%20pintura%20y%20motor%20a%20mi%20vehículo." class="btn-primary" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="24" height="24" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.7c-33 0-65.3-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-2.1-3.6 2.1-3.2 7.6-14.2 2.7-5.1 1.4-9.7-.1-12.5-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
    Pedir Diagnóstico para mi Vehículo
  </a>
</div>
```

---

## 4. PROCESO DE TRABAJO: Los 4 Pasos Crudos y Reales

### 4.1. Encabezado de Sección
- **Título (H2):** `Cómo trabajamos: nuestro proceso técnico en 4 pasos reales`
- **Bajada:** `Cero promesas vacías, cero atajos. Así tratamos cada vehículo desde que ingresa al taller hasta que vuelve a tus manos.`

### 4.2. Redacción de los 4 Pasos

#### Paso 01: Recepción y evaluación real
> Miramos el auto con vos bajo iluminación técnica y con medidor digital de espesores de barniz (micrómetro). Te decimos la verdad cruda sobre cada panel: qué marcas salen con corrección, qué rayas ya tocaron la chapa y exigen pintura, y cuánto barniz útil le queda al vehículo antes de meter una máquina. Sin falsas expectativas.

#### Paso 02: Presupuesto sin sorpresas
> Cotizamos el trabajo en función del estado exacto del vehículo y de lo que técnicamente conviene hacer, no con paquetes cerrados arbitrarios. Sabés de antemano el precio final en pesos o dólares, los productos específicos que vamos a usar y los días que demandará el proceso. El valor pactado es el que pagás; no existen cargos extra al retirar.

#### Paso 03: Ejecución técnica
> Operamos a puerta cerrada, panel por panel y con un solo vehículo por puesto de trabajo. Descontaminación química y mecánica profunda, enmascarado minucioso de gomas y aristas vivas, corrección con abrasivos calibrados o instalación de láminas en cabina libre de polvo. Respetamos los tiempos de anclaje y curado de cada producto sin acelerar etapas para liberar espacio.

#### Paso 04: Entrega
> Inspeccionamos la unidad terminada junto a vos, bajo luz directa y comparando contra las observaciones del ingreso. Te mostramos los espesores de barniz conservados y te explicamos cómo lavar el auto para no destruir el trabajo en el primer fin de semana.

### 4.3. Código de Maquetación para `index.html` (`#proceso`)
```html
<div class="process-grid">
  <div class="process-card">
    <div class="process-step-num">01</div>
    <h3 class="process-title">Recepción y evaluación real</h3>
    <p class="process-desc">
      Miramos el auto con vos bajo iluminación técnica y micrómetro digital. Te decimos la verdad cruda sobre cada panel: qué rayas salen con corrección, qué defectos tocaron la chapa y cuánto barniz útil queda antes de tocar el auto. Sin falsas expectativas.
    </p>
  </div>

  <div class="process-card">
    <div class="process-step-num">02</div>
    <h3 class="process-title">Presupuesto sin sorpresas</h3>
    <p class="process-desc">
      Cotizamos según el estado real del vehículo y lo que técnicamente conviene hacer, sin paquetes cerrados arbitrarios. Sabés el costo final, los materiales exactos y los días de trabajo antes de dejar la llave. Lo pactado es lo que pagás; cero costos ocultos al retirar.
    </p>
  </div>

  <div class="process-card">
    <div class="process-step-num">03</div>
    <h3 class="process-title">Ejecución técnica</h3>
    <p class="process-desc">
      Trabajamos a puerta cerrada, panel por panel y con un solo auto por puesto. Descontaminación profunda, enmascarado riguroso, corrección calibrada o instalación de PPF en cabina limpia. Respetamos las horas de curado de cada químico, sin apurar etapas.
    </p>
  </div>

  <div class="process-card">
    <div class="process-step-num">04</div>
    <h3 class="process-title">Entrega</h3>
    <p class="process-desc">
      Revisamos el auto juntos bajo luz directa para contrastar el resultado contra el ingreso. Te mostramos los espesores de pintura conservados y te enseñamos la técnica correcta de lavado para no arruinar el tratamiento en el primer fin de semana.
    </p>
  </div>
</div>
```

---

## 5. TABLA COMPARATIVA: Rigor Técnico Absoluto

### 5.1. Criterios Técnicos Mandatarios
- **Cera Tradicional:** Máximo brillo y profundidad cálida (ideal clásicos y autos de colección para exposiciones). Cero protección mecánica contra piedras o ramas; durabilidad efímera ante el sol de Mendoza.
- **Tratamiento Cerámico (9H):** Repelencia hidrofóbica extrema y máxima facilidad de lavado cotidiano. Protege químicamente contra rayos UV, savia de árboles y excremento de aves, pero **no detiene impactos mecánicos ni gravilla**.
- **PPF (Paint Protection Film):** Protección física superficial contra impactos de gravilla de ruta y rayas (lámina elástica de poliuretano de 150-200 micrones autorregenerativa).  
  > ⚠️ **Aclaración técnica explícita y obligatoria:**  
  > **El PPF protege la pintura y previene que el esmalte salte o se raye, pero NO previene abolladuras ni deformaciones de la chapa si el impacto mecánico o granizo es de magnitud suficiente.**

### 5.2. Tabla Técnica Comparativa Actualizada

| Característica / Criterio | Paint Protection Film (PPF 3M / Premium Star) | Tratamiento Cerámico (Coating 9H) | Cera Tradicional (Carnauba / Sintética) |
| :--- | :--- | :--- | :--- |
| **Función Primaria Real** | **Protección superficial contra impactos de gravilla y rayas** | **Repelencia hidrofóbica extrema y facilidad de lavado** | **Máximo brillo y profundidad cálida (ideal clásicos)** |
| **Tipo de Protección** | Barrera física de poliuretano termoplástico (150 a 200 micrones) | Revestimiento nanotecnológico químico curado (1 a 3 micrones) | Capa orgánica o polimérica superficial (fracción de micrón) |
| **Resistencia a Gravilla y Piedras de Ruta** | **Máxima:** Disipa la energía de impacto y evita que salte la pintura | **Nula:** No tiene masa física para frenar impactos mecánicos | **Nula:** No ofrece resistencia mecánica alguna |
| **¿Previene Abolladuras de Chapa?** | **NO:** Salva la pintura de saltaduras, pero **no evita abolladuras ni deformación de chapa** ante golpes fuertes | **NO:** Ninguna resistencia ante deformación estructural | **NO:** Ninguna resistencia ante deformación estructural |
| **Propiedad Autorregenerativa** | **Sí:** Las micro-rayas y marcas leves cierran con calor del sol o agua tibia | **No:** Si el cerámico se raya, requiere pulido técnico correctivo | **No:** No se regenera |
| **Acabado Estético y Brillo** | Brillo transparente neutro y fiel al tono original (invisible) | Brillo vidriado de alta refracción, efecto espejo continuo | **Máxima profundidad de color y reflejo cálido artesanal** |
| **Facilidad de Lavado e Hidrofobia** | Alta tensión superficial (repele suciedad y agua) | **Extrema:** Ángulo de contacto > 110°, efecto loto autolimpiante | Moderada durante las primeras semanas |
| **Protección Química y Filtro UV** | Total: Bloquea radiación UV y previene decoloración del barniz | Muy alta: Resiste ácidos de aves, brea y químicos de pH 2 a 12 | Baja: Se oxida y evapora rápidamente con el calor ambiental |
| **Durabilidad Real Comprobable** | **5 a 10 años** (según cuidado y exposición) | **1 a 3 años** (según mantenimiento con champú neutro) | **3 a 6 semanas** (requiere encerado mensual continuo) |
| **Uso Ideal / Recomendado** | Autos 0 km, vehículos que viajan por ruta y deportivos | Uso diario integral para mantener el auto impecable sin esfuerzo | Autos clásicos, de colección, fin de semana o eventos |

### 5.3. Párrafo Introductorio AEO para la Sección Comparativa
> `La diferencia técnica entre estas tres soluciones reside en su función física y molecular: el Paint Protection Film (PPF) es una lámina elástica gruesa que frena impactos de piedras y rayas superficiales salvando la pintura de fábrica (aunque no evita abolladuras si el golpe deforma el panel); el tratamiento cerámico es un sellador nanotecnológico que maximiza la repelencia al agua y la facilidad de lavado sin resistencia mecánica; y la cera tradicional es un consumible estético que ofrece el máximo brillo y profundidad cálida sobre la chapa, siendo ideal para autos clásicos pero con una durabilidad de pocas semanas ante el clima de Mendoza.`

---

## 6. PREGUNTAS FRECUENTES (FAQ): Nueva FAQ Semántica "¿Qué es el PPF?"

### 6.1. Formulación de la Pregunta
- **Pregunta:** `¿Qué es el PPF (Paint Protection Film) y cómo funciona?`

### 6.2. Respuesta Técnica y Digerible (Formato AEO / Pirámide Invertida)
> **El Paint Protection Film (PPF) es una lámina de poliuretano termoplástico transparente y elástica (de entre 150 y 200 micrones de espesor) que se aplica sobre la carrocería para actuar como un escudo físico que absorbe impactos de piedras de ruta, gravilla, ramas y rayones superficiales.**
> 
> A diferencia de los tratamientos cerámicos o las ceras —que son películas líquidas microscópicas enfocadas en el brillo y la repelencia al agua—, el PPF es una barrera tangible con propiedades autorregenerativas (*self-healing*): cuando recibe micro-rayas por roce o lavados, la película vuelve a su forma original al exponerse al calor del sol o agua tibia, haciendo desaparecer los defectos por sí sola.
> 
> En Blandini Detailing instalamos láminas líderes del mercado como **3M Scotchgard™ Pro Serie 200** y **Premium Star**, cortadas a medida y montadas en cabina libre de impurezas. Protege la pintura original de fábrica sin alterar el color ni la textura del vehículo. 
> 
> **Aclaración técnica honesta:** el PPF es la mejor protección existente contra piedrazos y raspones de estacionamiento, pero *no es un blindaje contra abolladuras*. Si el impacto de una piedra o de granizo severo es lo suficientemente contundente como para hundir la chapa, el panel se abollará, aunque la pintura permanecerá intacta debajo del film, permitiendo una reparación limpia mediante sacabollos sin necesidad de repintar.
> 
> Es la inversión más recomendada para autos 0 km recién salidos de concesionario, frentes de camionetas de ruta y deportivos de alta gama que buscan preservar intacto el valor de reventa.

---

## 7. MATRIZ DE INTEGRACIÓN RÁPIDA PARA EL PROGRAMADOR

| Elemento en `index.html` | Ubicación / Selector | Texto Anterior | Acción Requerida |
| :--- | :--- | :--- | :--- |
| **Servicio PPF** | `.service-card:nth-child(1) .service-checklist` | Lámina 3M Scotchgard Pro 200 | Reemplazar viñeta por 3M Scotchgard Pro 200 + Premium Star (Ver §1.2) |
| **Nuevo Servicio** | `#servicios .services-grid` | 8 servicios existentes | Insertar tarjeta "Preparación para la Venta" (Ver §2.4) |
| **Caso 2 (Blazer)** | `#caso-antes-despues .case-specs-list` | 3 viñetas con redacción genérica | Pegar los 3 ítems técnicos literales: Vano Motor, Pintura en 3 Pasos y Resultado (Ver §3.1) |
| **Proceso 4 Pasos** | `#proceso .process-grid` | 01. Diagnóstico Micrométrico / 02. Descontaminación / 03. Aplicación / 04. Curado | Actualizar a: 01. Recepción y evaluación real / 02. Presupuesto sin sorpresas / 03. Ejecución técnica / 04. Entrega (Ver §4.3) |
| **Tabla Comparativa** | `#comparativa .comparison-table` | Datos previos de PPF, Cerámico y Cera | Ajustar columnas con los 3 ejes: Cera = brillo clásicos, Cerámico = repelencia/lavado, PPF = piedras/rayas sin evitar abolladuras (Ver §5.2) |
| **FAQ Semántica** | `#faq .faq-container` | 8 preguntas existentes | Insertar la nueva FAQ "¿Qué es el PPF?" en la primera o segunda posición para maximizar SEO y AEO (Ver §6.2) |

---
*Fin del documento `nuevos_textos_blandini.md` — Elaborado por WAFLERS Lead Copywriter.*
