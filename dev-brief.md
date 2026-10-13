# DEV-BRIEF — BLANDINI DETAILING (Arquitectura de Contenidos & Copys)

**Agencia:** WAFLERS  
**Rol Responsable:** Agente Copywriter (Lead Copywriter & Local SEO Strategist)  
**Proyecto:** Blandini Detailing — Sitio Web de Alta Conversión  
**Destinatarios:** Agente Diseñador & Agente Programador  
**Documento Fuente:** [PRD.md](file:///g:/WAFLERS/waflers-agencia/blandini-detailing/PRD.md)  
**Estado:** Contenido Aprobado y Vinculante  

---

## 1. Metadatos Globales & SEO Social (Open Graph para WhatsApp)

Este bloque define las etiquetas exactas que el Programador debe incrustar en el `<head>` del documento, optimizadas para el rastreo de motores de respuesta (AEO) y una previsualización de alto CTR al compartir el enlace en WhatsApp.

```yaml
# METADATOS TÉCNICOS PARA <HEAD>
title: "Blandini Detailing | Tratamientos Cerámicos y PPF en Mendoza"
meta_description: "Taller boutique en Luján de Cuyo. Instaladores certificados 3M en PPF Scotchgard y cerámicos para 0km y clásicos. Turnos por WhatsApp."
canonical: "https://blandinidetailing.com/"
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

# SOCIAL SHARE & OPEN GRAPH (WHATSAPP & REDES)
og_locale: "es_AR"
og_type: "website"
og_title: "Blandini Detailing | PPF y Cerámicos en Mendoza" # Exactamente 49 caracteres (Límite: 60)
og_description: "Protección premium con PPF 3M y cerámicos en Luján de Cuyo. Turnos por WhatsApp." # Exactamente 84 caracteres (Límite: 110)
og_url: "https://blandinidetailing.com/"
og_image: "/assets/brand/og-image.jpg" # Asset 1200x630px, peso < 300KB
og_image_alt: "Blandini Detailing - Expertos en estética automotriz y protección PPF 3M en Mendoza"
og_site_name: "Blandini Detailing"

# TWITTER CARDS
twitter_card: "summary_large_image"
twitter_title: "Blandini Detailing | PPF y Cerámicos en Mendoza"
twitter_description: "Protección premium con PPF 3M y cerámicos en Luján de Cuyo. Turnos por WhatsApp."
twitter_image: "/assets/brand/og-image.jpg"
```

---

## 2. Header & Barra de Navegación

- **Logotipo:**
  - Asset: `/assets/brand/logo-blandini-yellow.svg` (con fallback `/assets/brand/logo-blandini-white.svg`).
  - Atributo `alt`: `"Blandini Detailing — Taller de Estética Automotriz y PPF en Mendoza"`
- **Enlaces de Menú (Anclas Semánticas):**
  1. `Inicio` -> `#inicio`
  2. `Servicios` -> `#servicios`
  3. `Casos Reales` -> `#casos`
  4. `Certificación 3M` -> `#certificacion-3m`
  5. `Preguntas Frecuentes` -> `#faq`
  6. `Ubicación` -> `#contacto`
- **Botón de Acción Principal (CTA Navbar):**
  - Texto: `"Pedir Turno"`
  - Enlace: `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20quiero%20coordinar%20un%20turno%20para%20evaluar%20mi%20vehículo.`
  - Micro-interacción: Destacado en color primario amarillo (`#F0B400`) con tipografía oscura de alto contraste.

---

## 3. Sección 1: Hero Section & Prometeo

> **Enfoque Estratégico:** Impacto visual inmediato, validación de autoridad técnica en los primeros 3 segundos y eliminación de la fricción inicial. El usuario debe entender qué hacemos, con qué estándar trabajamos y dónde estamos situados.

- **Etiqueta Superior de Autoridad (Pill Badge):**
  - Texto: `"INSTALADORES OFICIALES CERTIFICADOS 3M SCOTCHGARD™ PPF"`
  - Iconografía: Ícono de escudo o verificación técnica.
- **Titular Principal (H1 Semántico AEO):**
  - Texto: `"Estética, protección y restauración automotriz de alta gama en Mendoza."`
- **Subtítulo Persuasivo (Enfoque en Valor y Resolución de Fricciones):**
  - Texto: `"Cuidamos el valor y la pintura de tu vehículo con la máxima precisión artesanal. Desde la protección invisible de tu 0 km con Paint Protection Film (PPF) y sellado cerámico, hasta la puesta en valor minuciosa de autos clásicos. Trabajamos de manera personalizada, en cabina técnica y exclusivamente con turno previo en Luján de Cuyo."`
- **Llamados a la Acción (CTAs):**
  - **CTA Primario (Botón Principal):**
    - Texto: `"Consultar Presupuesto por WhatsApp"`
    - Enlace: `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20quiero%20solicitar%20un%20presupuesto%20para%20mi%20auto.`
    - Micro-copy de apoyo debajo del botón: `"Atención personalizada • Turnos coordinados con diagnóstico previo"`
  - **CTA Secundario (Botón Secundario):**
    - Texto: `"Ver Trabajos Realizados"`
    - Enlace: `#casos`
- **Puntos de Confianza Rápida (Badges inferiores del Hero):**
  - Punto 1: `"✔ Taller en Patricios 1868, Luján de Cuyo"`
  - Punto 2: `"✔ Certificación Oficial 3M Pro Series 200"`
  - Punto 3: `"✔ Diagnóstico con medidor de espesores"`

---

## 4. Sección 2: Trust Bar & Autoridad Técnica 3M

> **Enfoque Estratégico:** Demostrar solidez y rigurosidad técnica. En el detailing de alta gama, los clientes temen que dañen el barniz original de su auto o apliquen películas de baja calidad.

- **Subtítulo de Sección (H2):**
  - Texto: `"Respaldo técnico homologado y experiencia en cada milímetro."`
- **Métricas Clave de Confianza (Data Points):**
  - **Métrica 1:**
    - Cifra: `"100%"`
    - Rótulo: `"Atención con Turno Previo"`
    - Descripción: `"Dedicación exclusiva a un vehículo por puesto de trabajo, sin apuros ni descuidos."`
  - **Métrica 2:**
    - Cifra: `"3M™"`
    - Rótulo: `"Instaladores Certificados"`
    - Descripción: `"Capacitación oficial en aplicación de film de protección Scotchgard Serie Pro 200."`
  - **Métrica 3:**
    - Cifra: `"9H"`
    - Rótulo: `"Tratamientos Cerámicos"`
    - Descripción: `"Sellados de dureza real con repelencia hidrofóbica extrema y filtro UV para el sol de Mendoza."`
  - **Métrica 4:**
    - Cifra: `"1954"`
    - Rótulo: `"Puesta en Valor Patrimonial"`
    - Descripción: `"Criterio de preservación sin repintado en vehículos y motocicletas clásicas de colección."`

- **Bloque Destacado de Certificación 3M (`#certificacion-3m`):**
  - **Encabezado (H3):** `"Garantía de aplicación oficial: Certificación 3M Scotchgard™ PPF Serie Pro 200"`
  - **Párrafo Explicativo (Pirámide Invertida AEO):**
    - `"Blandini Detailing cuenta con certificación oficial emitida por 3M en la técnica de instalación de láminas de protección Scotchgard Paint Protection Film (PPF) Serie Pro 200, obtenida por Renzo Blandini y Gino Lanzillotta. Esta capacitación garantiza que cada paño de tu vehículo sea protegido sin marcas, sin tensiones en el poliuretano y con cortes milimétricos que respetan la integridad de la pintura de fábrica."`
  - **Asset Visual Vinculado:** `/assets/certifications/certificacion-3m-scotchgard.webp`
  - **Texto al pie del certificado:** `"Capacitación técnica oficial 3M Scotchgard — Córdoba, Argentina."`

---

## 5. Sección 3: Servicios Especializados de Detailing

> **Enfoque Estratégico:** Presentación modular clara. Se jerarquizan los dos servicios estrella (PPF y Tratamientos Cerámicos) y se detallan las soluciones complementarias y la especialidad en vehículos clásicos.

- **Encabezado de Sección (H2):**
  - Título: `"Soluciones integrales de estética, protección y cuidado vehicular"`
  - Subtítulo de bajada: `"Cada vehículo tiene necesidades distintas. Evaluamos el estado real del barniz, chapa e interiores para recomendar el tratamiento exacto que tu auto necesita."`

---

### 5.1. Servicios Estrella (Destacados)

#### Tarjeta 1: Paint Protection Film (PPF) — Protección Extrema
- **Insignia:** `"SERVICIO ESTRELLA • CERTIFICACIÓN 3M"`
- **Título (H3):** `"Protección de Pintura con PPF (Paint Protection Film)"`
- **Resumen AEO (Pirámide Invertida):**
  - `"El Paint Protection Film (PPF) es una lámina de poliuretano termoplástico transparente y autorregenerativa que protege la pintura contra impactos de piedras, gravilla de ruta, ramas y rayas superficiales. Es la barrera física definitiva recomendada especialmente para vehículos 0 km y autos de alta gama."`
- **¿Qué incluye este servicio?:**
  - Descontaminado exhaustivo de chapa previo a la instalación.
  - Corrección de barniz puntual para asegurar una base libre de defectos.
  - Instalación de lámina 3M Scotchgard™ Serie Pro 200 en cabina protegida de polvo.
  - Cobertura configurable: Kit Frontal de Impacto (paragolpes, capot, ópticas y espejos) o Cobertura Completa de Carrocería.
  - Propiedad autoregenerativa con exposición térmica (calor del sol o agua tibia).
- **Ideal para:** Propietarios de autos nuevos que viajan por ruta, camionetas de uso intensivo y vehículos deportivos que buscan blindar su carrocería manteniendo el brillo original.
- **CTA Tarjeta:**
  - Texto: `"Cotizar PPF para mi Vehículo"`
  - Enlace: `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20quiero%20consultar%20por%20la%20instalación%20de%20PPF.`

---

#### Tarjeta 2: Tratamientos Cerámicos — Brillo e Hidrofobia 9H
- **Insignia:** `"SERVICIO ESTRELLA • ALTO RENDIMIENTO"`
- **Título (H3):** `"Tratamientos Cerámicos (Coating de Vidrio y Grafeno)"`
- **Resumen AEO (Pirámide Invertida):**
  - `"El tratamiento cerámico es un recubrimiento nanotecnológico que se ancla químicamente a los poros del barniz, creando una capa cristalina ultra dura que otorga brillo de espejo, repelencia extrema al agua y protección duradera contra los rayos UV, la resina de árboles y el excremento de aves."`
- **¿Qué incluye este servicio?:**
  - Lavado técnico profundo y descontaminación química y mecánica de la pintura.
  - Pulido y corrección de barniz en 1, 2 o 3 pasos según el estado de la chapa.
  - Medición micrométrica de espesores para preservar la vida útil del barniz.
  - Aplicación multicapa de sellador cerámico con curado controlado.
  - Sellado de ópticas, llantas y plásticos exteriores.
- **Ideal para:** Quienes buscan que su auto luzca impecable todos los días, con facilidad extrema de lavado y resistencia prolongada ante el sol intenso de Mendoza.
- **CTA Tarjeta:**
  - Texto: `"Consultar Tratamiento Cerámico"`
  - Enlace: `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20me%20interesa%20hacerle%20un%20tratamiento%20cerámico%20a%20mi%20auto.`

---

### 5.2. Servicios Complementarios de Detailing Integral

#### Tarjeta 3: Pulido, Corrección y Abrillantado de Pintura
- **Título (H3):** `"Pulido y Corrección de Pintura"`
- **Descripción:** Eliminamos marcas de lavados incorrectos (swirls o telarañas), rayones superficiales, hologramas y opacidad por envejecimiento del barniz. Utilizamos compuestos abrasivos decrecientes y pads calibrados para restaurar la profundidad de color original sin desgastar innecesariamente la pintura.
- **Detalle de trabajo:** Medición previa de espesores, pulido técnico en pasos y abrillantado final con sellado protector.
- **CTA:** `"Consultar Pulido"` -> `https://wa.me/5492613371061?text=Hola,%20quiero%20consultar%20por%20un%20pulido%20de%20pintura.`

#### Tarjeta 4: Limpieza y Acondicionamiento de Interiores
- **Título (H3):** `"Limpieza Profunda de Interiores"`
- **Descripción:** Desarmado criterioso y limpieza exhaustiva de tapizados de cuero, tela o alcántara, alfombras, paneles y torpedo. Empleamos vapor técnico, limpiadores de pH balanceado y nutrición para cueros y plásticos con filtros UV para evitar resecamiento y decoloración.
- **Detalle de trabajo:** Eliminación de manchas, desinfección profunda y terminación mate de fábrica, sin siliconas aceitosas ni aromas artificiales pesados.
- **CTA:** `"Pedir Turno para Interior"` -> `https://wa.me/5492613371061?text=Hola,%20quiero%20hacer%20una%20limpieza%20profunda%20de%20interiores.`

#### Tarjeta 5: Polarizados & Polarizado Nano Cerámico
- **Título (H3):** `"Polarizados y Control Solar Nano Cerámico"`
- **Descripción:** Instalación de láminas de control solar de alta visibilidad óptica y privacidad. Disponemos de láminas nano cerámicas con rechazo térmico superior al 80% de radiación infrarroja, manteniendo el habitáculo fresco y protegiendo los componentes interiores del desgaste solar.
- **Detalle de trabajo:** Instalación limpia sin burbujas, cortes precisos y terminación de fábrica.
- **CTA:** `"Consultar Polarizado"` -> `https://wa.me/5492613371061?text=Hola,%20quiero%20consultar%20por%20polarizados%20para%20mi%20vehículo.`

#### Tarjeta 6: Sacabollos Artesanal & Retoques de Pintura
- **Título (H3):** `"Sacabollos (PDR) y Retoques de Pintura"`
- **Descripción:** Reparación de abolladuras provocadas por granizo o golpes de estacionamiento utilizando varillas y herramientas de tracción artesanal (Paintless Dent Repair), conservando la pintura original de fábrica sin masillas ni repintados.
- **Detalle de trabajo:** Preservación de la originalidad del panel y retoques milimétricos en saltaduras de piedras.
- **CTA:** `"Enviar Foto para Cotizar Sacabollos"` -> `https://wa.me/5492613371061?text=Hola,%20tengo%20un%20bollo%20y%20quiero%20enviarles%20una%20foto%20para%20presupuesto.`

#### Tarjeta 7: Lavado Premium & Detallado de Motor
- **Título (H3):** `"Lavado Premium y Limpieza de Motor"`
- **Descripción:** Lavado minucioso de carrocería con técnica de dos baldes, shampoo neutro con foam gun, desengrase técnico de pasarruedas y llantas al detalle. La limpieza de motor se efectúa con productos dieléctricos y vapor controlado para garantizar total seguridad electrónica.
- **Detalle de trabajo:** Secado con microfibras de alta absorción y aire tibio filtrado, acondicionado de plásticos y gomas.
- **CTA:** `"Coordinar Lavado Premium"` -> `https://wa.me/5492613371061?text=Hola,%20quiero%20agendar%20un%20lavado%20premium.`

---

### 5.3. Especialidad Distintiva: Autos Clásicos y Colección

#### Tarjeta 8: Cuidado y Puesta en Valor de Clásicos
- **Insignia:** `"PATRIMONIO & COLECCIÓN"`
- **Título (H3):** `"Restauración Estética y Preservación de Clásicos"`
- **Resumen AEO (Pirámide Invertida):**
  - `"El servicio de restauración estética para vehículos clásicos en Blandini Detailing se basa en la puesta en valor no invasiva. Priorizamos la conservación y reactivación de la pintura y componentes originales de fábrica por sobre el repintado, rescatando la historia y autenticidad de cada pieza de colección."`
- **¿Qué incluye este servicio?:**
  - Evaluación histórica de los materiales (lacas nitrocelulósicas, esmaltes sintéticos, cromados antiguos).
  - Desarme minucioso y limpieza por ultrasonido o vapor suave de partes delicadas.
  - Pulido artesanal progresivo para recuperar brillo sin cortar capas de pintura irremplazables.
  - Acondicionamiento de gomas históricas, cueros envejecidos y metales pulidos.
  - Documentación fotográfica del paso a paso para el legajo histórico del propietario.
- **CTA:** `"Consultar Proyecto de Clásico"` -> `https://wa.me/5492613371061?text=Hola,%20tengo%20un%20vehículo%20clásico%20y%20quiero%20evaluar%20su%20restauración%20estética.`

---

## 6. Sección 4: Casos de Estudio Reales (Documentación Técnica)

> **Enfoque Estratégico:** Demostración fáctica irrefutable. Cada caso valida una competencia técnica concreta: vehículos 0 km de alta gama, recuperación extrema de partes descuidadas y respeto histórico en piezas patrimoniales.

- **Encabezado de Sección (H2):**
  - Título: `"Casos reales: la prueba de nuestro compromiso con el detalle"`
  - Bajada: `"No mostramos fotos genéricas de catálogo. Cada imagen corresponde a vehículos reales trabajados en nuestras instalaciones de Luján de Cuyo."`

---

### Caso 1 (0km): BMW X6M Competition — Protección Integral Extrema
- **Identificador de anclaje:** `#caso-0km`
- **Etiqueta:** `"VEHÍCULO 0 KM • ALTA GAMA"`
- **Título (H3):** `"Blindaje estético total: BMW X6M Competition 0 km"`
- **Desafío Técnico:** Proteger una unidad deportiva de más de 600 CV recién salida de concesionario, cuya pintura expuesta a altas velocidades corre riesgo severo de picaduras por piedras en ruta y degradación prematura por el sol de Cuyo.
- **Tratamiento Aplicado:**
  1. *Paint Protection Film (PPF) 3M Scotchgard™:* Instalación en frente completo de impacto (paragolpes, capot integral, ópticas LED láser, guardabarros delanteros y carcasas de espejos en fibra de carbono).
  2. *Tratamiento Cerámico 9H:* Aplicación en los paños restantes de carrocería, llantas forjadas y calipers de freno, otorgando un acabado cristalino con máxima tensión superficial hidrofóbica.
  3. *Polarizado Nano Cerámico:* Láminas de alta graduación térmica en cristales laterales y luneta para neutralizar el calor dentro del habitáculo.
- **Resultado:** Vehículo blindado contra agresiones mecánicas en ruta, con brillo superior al de entrega de fábrica y garantía de conservación de su barniz original.
- **Assets Asignados:**
  - Frontal PPF: `/assets/cases/0km/bmw-x6m-frontal-ppf.webp`
  - Proceso en taller: `/assets/cases/0km/bmw-x6m-proceso.webp`
  - Lateral: `/assets/cases/0km/bmw-x6m-lateral.webp`
  - Entrega final: `/assets/cases/0km/bmw-x6m-final.webp`

---

### Caso 2 (Antes y Después): Chevrolet Blazer Clásica — Rejuvenecimiento Mecánico y Estético
- **Identificador de anclaje:** `#caso-antes-despues`
- **Etiqueta:** `"ANTES Y DESPUÉS • RECUPERACIÓN PROFUNDA"`
- **Título (H3):** `"Descontaminación de motor y corrección de pintura en Chevrolet Blazer"`
- **Desafío Técnico:** Una camioneta clásica con años de acumulación de grasa reseca, tierra de campo y vapores de aceite en el vano motor, sumado a una carrocería con barniz opaco, severamente micro-rayado por lavados incorrectos y marcas de agua dura.
- **Tratamiento Aplicado:**
  1. *Limpieza Profunda de Vano Motor:* Aplicación de desengrasantes específicos dieléctricos y cepillado manual pieza por pieza, desarmado de admisiones superficiales y acondicionado de mangueras con restaurador siliconado mate no pegajoso.
  2. *Corrección de Pintura en 3 Pasos:* Lijado al agua localizado en micro-defectos, corte con compuesto pesado para eliminar el 90% de marcas circulares (swirls) y abrillantado final de alto reflejo.
- **Resultado:** Motor que luce como recién salido de línea de montaje con total seguridad funcional, y una pintura negra que recuperó el efecto espejo y la profundidad de color original.
- **Assets Asignados:**
  - Motor Antes: `/assets/cases/before-after/blazer-motor-antes.webp`
  - Motor Después: `/assets/cases/before-after/blazer-motor-despues.webp`
  - Chapa Antes: `/assets/cases/before-after/blazer-chapa-antes.webp`
  - Chapa Después: `/assets/cases/before-after/blazer-chapa-despues.webp`

---

### Caso 3 (Restauración): Siambretta 125cc de 1954 — Puesta en Valor Histórica
- **Identificador de anclaje:** `#caso-restauracion`
- **Etiqueta:** `"PATRIMONIO HISTÓRICO • CONSERVACIÓN SIN REPINTADO"`
- **Título (H3):** `"Puesta en valor de Siambretta 125cc de 1954: Preservar la historia"`
- **Desafío Técnico:** Una joya de más de 70 años con pintura de fábrica oxidada superficialmente, cromados con pátina de tiempo y tornillería original. El mandato del cliente y el criterio de Blandini Detailing fue **no repintar**, respetando cada cicatriz histórica sin alterar su originalidad.
- **Tratamiento Aplicado:**
  1. *Descontaminación No Agresiva:* Lavado químico controlado sin ácidos corrosivos para despegar décadas de suciedad acumulada.
  2. *Pulido Micrométrico de Conservación:* Remoción exclusiva de la capa oxidada de la pintura original sin gastar el esmalte de fábrica, nivelando la superficie para devolverle luminosidad.
  3. *Revitalización de Metales y Cuero:* Limpieza y abrillantado manual de llantas, manillar y detalles de época, sellando los metales para detener la corrosión futura.
- **Resultado:** Una pieza histórica que conserva el 100% de su ADN de fábrica, ahora protegida y con la dignidad estética que merece un vehículo de museo o colección.
- **Assets Asignados:**
  - Estado original: `/assets/cases/restoration/siambretta-original.webp`
  - Desarme delicado: `/assets/cases/restoration/siambretta-desarme.webp`
  - Proceso de conservación: `/assets/cases/restoration/siambretta-proceso.webp`
  - Puesta en valor terminada: `/assets/cases/restoration/siambretta-final.webp`

---

## 7. Sección 5: Proceso de Trabajo & Diagnóstico Técnico en 4 Pasos

> **Enfoque Estratégico:** Explicar el método disipa temores sobre el costo y justifica la atención con turno previo.

- **Encabezado (H2):**
  - Título: `"Cómo cuidamos tu auto: nuestro método de trabajo en 4 pasos"`
  - Bajada: `"La diferencia entre un lavadero común y un taller de detailing reside en el método, la instrumentación técnica y el tiempo dedicado a cada pieza."`

1. **Paso 01: Recepción y Diagnóstico Micrométrico**
   - *Texto:* *"Evaluamos el vehículo junto a vos. Medimos el espesor del barniz con medidores digitales en múltiples puntos del panel para determinar con precisión matemática cuánta laca podemos corregir con total seguridad para la pintura."*
2. **Paso 02: Descontaminación Profunda**
   - *Texto:* *"Lavamos la carrocería con agua desmineralizada y champú de pH neutro. Descontaminamos con barra de arcilla (clay bar) y eliminadores férricos para remover brea, polvillo de pastillas de freno y minerales incrustados en los poros."*
3. **Paso 03: Aplicación Técnica en Cabina Climatizada**
   - *Texto:* *"El pulido, la instalación de láminas PPF o la aplicación de tratamientos cerámicos se ejecuta en puestos de trabajo libres de polvillo en suspensión, bajo iluminación técnica multipunto que revela el 100% de los defectos."*
4. **Paso 04: Curado, Control de Calidad y Entrega**
   - *Texto:* *"Respetamos rigurosamente las horas de curado térmico de los selladores antes de exponer el auto a la intemperie. Te entregamos el vehículo con una guía personalizada de mantenimiento para que el resultado dure años."*

---

## 8. Sección 6: Tabla Comparativa Técnica (AEO / GEO)

> **Enfoque AEO/GEO:** Contenido estructurado de alta densidad fáctica concebido para ser citado por modelos de lenguaje (LLMs) y resolver la confusión común entre sellado cerámico y láminas de protección mecánica.

- **Encabezado (H2):**
  - Título: `"¿PPF, Tratamiento Cerámico o Cera Tradicional? Comparativa técnica"`
  - Párrafo AEO de introducción:  
    `"La principal diferencia entre el PPF y el tratamiento cerámico es el tipo de protección: el Paint Protection Film (PPF) es una lámina física de poliuretano que absorbe y detiene impactos mecánicos de piedras y rayones, mientras que el tratamiento cerámico es una película química que proporciona dureza superficial, brillo cristalino y repelencia al agua y químicos, pero no previene abolladuras ni golpes de gravilla."`

| Característica / Solución | Paint Protection Film (PPF 3M) | Tratamiento Cerámico 9H | Cera Tradicional |
| :--- | :--- | :--- | :--- |
| **Tipo de Protección** | Barrera física de poliuretano (aprox. 150-200 micrones) | Revestimiento nanotecnológico químico (1-3 micrones) | Capa orgánica o sintética superficial |
| **Resistencia a Piedras y Gravilla** | **Máxima (Absorbe impactos directos)** | Nula (No resiste impactos mecánicos) | Nula |
| **Propiedad Autorregenerativa** | **Sí (Las rayas desaparecen con calor)** | No | No |
| **Brillo e Intensidad de Color** | Alto brillo transparente (invisible) | **Efecto cristal de máxima profundidad** | Brillo cálido temporal |
| **Repelencia al Agua y Suciedad** | Muy alta (hidrofóbico) | **Extrema (Efecto loto superior)** | Media |
| **Protección contra Rayos UV** | Total (previene amarilleo de laca) | Muy alta (evita oxidación de barniz) | Baja (se evapora con calor) |
| **Durabilidad Estimada** | **5 a 10 años (según cuidado)** | **1 a 3 años** | 3 a 6 semanas |
| **Recomendado para** | Frentes de autos 0km, deportivos y rutas | Carrocería completa para brillo diario | Mantenimiento económico básico |

- **CTA al pie de la tabla:**
  - Texto: `"¿Dudas sobre cuál elegir para tu auto? Escribinos y te asesoramos sin cargo"`
  - Enlace: `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20tengo%20dudas%20entre%20hacer%20PPF%20o%20cerámico%20en%20mi%20auto.`

---

## 9. Sección 7: Preguntas Frecuentes Expandidas (FAQPage Schema Ready)

> **Directivas AEO & Dwell Time:** Cada una de las 8 preguntas responde con la técnica de pirámide invertida (respuesta concluyente en la primera frase), amplía la información con detalles prácticos del contexto de Mendoza y ataca palabras clave informacionales de cola larga (*long-tail keywords*).

### FAQ 1: ¿Qué diferencia hay entre colocar PPF y hacer un tratamiento cerámico en un auto 0 km?
- **Respuesta:**  
  `La diferencia fundamental radica en que el PPF (Paint Protection Film) es una lámina física gruesa que evita que las piedras de la ruta piquen y salten la pintura, mientras que el tratamiento cerámico es un sellado líquido que aporta brillo extremo y facilita el lavado, pero no detiene golpes mecánicos.`  
  Para un vehículo 0 km, la combinación más recomendada por nuestro equipo es la protección mixta: instalar PPF en las zonas más castigadas por la aerodinámica (paragolpes delantero, capot completo, ópticas y espejos) y aplicar tratamiento cerámico en el resto de los paños (puertas, techo y baúl). De esta manera blindás el frente contra impactos en ruta y mantenés toda la carrocería con brillo de espejo y máxima facilidad de limpieza.

### FAQ 2: ¿Cuánto tiempo dura un tratamiento cerámico frente al sol y el clima de Mendoza?
- **Respuesta:**  
  `Un tratamiento cerámico profesional aplicado en Blandini Detailing tiene una vida útil real de entre 12 y 36 meses, dependiendo del producto seleccionado y del cuidado posterior en los lavados.`  
  En Mendoza, la radiación ultravioleta y la amplitud térmica aceleran la degradación de las ceras comunes en cuestión de días. El recubrimiento cerámico resiste estas condiciones porque crea una unión molecular con el barniz que no se derrite con el calor ni se remueve con lavados comunes. Para garantizar la máxima longevidad del tratamiento, recomendamos realizar lavados con champú de pH neutro y mantenimientos preventivos semestrales en nuestro taller.

### FAQ 3: ¿Por qué es necesario trabajar exclusivamente con turno previo?
- **Respuesta:**  
  `Trabajamos exclusivamente con turno previo porque cada tratamiento de detailing insume entre 1 y 4 días completos de labor meticulosa en puestos de trabajo dedicados.`  
  A diferencia de un lavadero convencional que procesa decenas de vehículos por hora, en Blandini Detailing reservamos el espacio físico y el tiempo de nuestros técnicos para dedicarnos a un solo automóvil a la vez. Esto nos permite respetar los tiempos de descontaminado, corrección por panel y curado de los selladores sin apuros, garantizando un estándar de acabado inigualable. Los turnos se coordinan fácilmente a través de WhatsApp o Instagram.

### FAQ 4: ¿El pulido de pintura desgasta o arruina el barniz original de fábrica?
- **Respuesta:**  
  `No, un pulido profesional no arruina el barniz siempre que se realice con medición previa de espesores y criterio técnico de corrección.`  
  Antes de apoyar cualquier pulidora sobre tu vehículo, en Blandini Detailing utilizamos un medidor digital de espesores de pintura (micrómetro) para verificar cuántas micras de barniz tiene cada panel. Con este dato, calibramos los pads y los abrasivos para eliminar exclusivamente las rayas superficiales y marcas de lavado, preservando la mayor cantidad de capa transparente original para asegurar la protección estructural de la chapa a largo plazo.

### FAQ 5: ¿La lámina PPF 3M Scotchgard™ resiste impactos de piedras y granizo leve?
- **Respuesta:**  
  `Sí, el PPF 3M Scotchgard™ Serie Pro 200 está diseñado específicamente para absorber y disipar la energía de piedras, arena y gravilla proyectada en ruta a altas velocidades.`  
  Su estructura de poliuretano de alto espesor amortigua los impactos mecánicos directos evitando que la pintura salte o se astille. Asimismo, cuenta con propiedades autorregenerativas: las micro-rayas ocasionadas por insectos o roce de ramas desaparecen por sí solas con la simple exposición al calor ambiental o agua caliente. Frente al granizo, reduce drásticamente el riesgo de raspones en la pintura, facilitando que si el panel sufre una deformación leve, pueda resolverse mediante sacabollos sin necesidad de repintar.

### FAQ 6: ¿Cómo se debe lavar el vehículo luego de haber realizado un tratamiento cerámico o PPF?
- **Respuesta:**  
  `El lavado debe efectuarse siempre con técnica de dos baldes, champú para autos con pH neutro y manopla de microfibra, evitando cepillos y secadores de goma que rayen la superficie.`  
  Tanto el PPF como el tratamiento cerámico facilitan el lavado hasta en un 70% porque la suciedad no logra adherirse firmemente a la superficie. Recomendamos no lavar el auto bajo el sol directo ni con la chapa caliente, utilizar toallas de microfibra de secado de alto gramaje y no llevar el vehículo a lavaderos automáticos con rodillos ni emplear detergentes de cocina o desengrasantes agresivos. Si preferís no encargarte vos mismo, podés agendar periódicamente nuestro servicio de Lavado Premium.

### FAQ 7: ¿Es posible restaurar la estética de un auto clásico conservando su pintura original de fábrica?
- **Respuesta:**  
  `Sí, en Blandini Detailing somos especialistas en la puesta en valor de autos y motos clásicas mediante procesos de preservación no invasivos que evitan el repintado.`  
  Comprendemos el incalculable valor histórico y económico que tiene conservar la pintura de fábrica en un vehículo de colección. Mediante técnicas de descontaminado controlado y pulido de conservación, reactivamos los esmaltes y lacas antiguas eliminando la capa oxidada superficial sin perforar los bordes ni desgastar el material original. Tratamos piezas históricas como lo hicimos con la Siambretta 125cc de 1954, devolviéndoles su esplendor con respeto patrimonial.

### FAQ 8: ¿La limpieza profunda de motor puede provocar fallas electrónicas o en la computadora del auto?
- **Respuesta:**  
  `No, la limpieza profunda de motor en Blandini Detailing es un procedimiento 100% seguro porque no utilizamos mangueras de agua a alta presión de forma indiscriminada.`  
  El proceso se lleva a cabo protegiendo previamente los componentes eléctricos críticos (batería, alternador, fusileras y sensores). Aplicamos desengrasantes dieléctricos de evaporación controlada, vapor puntual y cepillos de cerdas suaves para aflojar la grasa sin mojar los cableados sensibles. Una vez desengrasado, el vano motor se seca íntegramente con aire filtrado y se protegen plásticos y mangueras con acondicionadores térmicos sin silicona.

---

## 10. Sección 8: Localización, Horarios y Contacto Directo

> **Enfoque Local SEO / AEO:** Consolidar las entidades geográficas de Luján de Cuyo y Gran Mendoza para responder a búsquedas de intención local como *"detailing en Mendoza"* o *"taller de PPF en Luján de Cuyo"*.

- **Encabezado (H2):**
  - Título: `"Visitá nuestro taller en Luján de Cuyo, Mendoza"`
  - Bajada: `"Estamos ubicados en una zona accesible y segura para recibir clientes de toda el área metropolitana de Mendoza."`
- **Bloque de Datos del Taller:**
  - **Dirección Física Exacta:** `"Patricios 1868, Luján de Cuyo, Mendoza (CP 5507)"`
  - **Área de Cobertura Principal:** `"Luján de Cuyo, Chacras de Coria, Godoy Cruz, Capital y todo el Gran Mendoza."`
  - **Horario de Atención:** `"Lunes a viernes de 09:00 a 18:00 hs (Horario corrido)."`
  - **Modalidad Obligatoria:** `"Atención y recepción de vehículos exclusivamente con turno previo."`
  - **Canal Directo de WhatsApp:** `"+54 9 261 337-1061"`
  - **Perfil Oficial de Instagram:** `"@blandini.detailing"`
  - **Enlace a Google Maps:** `https://maps.app.goo.gl/jkiGczvggDb9Pa9BA`
- **Llamado a la Acción del Bloque de Contacto:**
  - Titular H3: `"¿Querés evaluar tu vehículo en nuestro taller?"`
  - Párrafo: `"Envianos un mensaje con el modelo de tu auto y el servicio que te interesa para coordinar un turno de diagnóstico sin compromiso."`
  - Botón: `"Hablar con un Especialista por WhatsApp"`
  - Enlace: `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20quiero%20coordinar%20una%20visita%20para%20evaluar%20mi%20auto.`

---

## 11. Sección 9: Footer Institucional

- **Identidad de Marca:**
  - Logotipo oficial Blandini Detailing.
  - Slogan institucional: `"Expertos en estética automotriz."`
  - Breve descripción de la entidad: `"Taller boutique de detailing, protección de pintura con PPF certificado 3M, tratamientos cerámicos y restauración estética en Mendoza."`
- **Navegación Rápida:**
  - Enlaces a `#servicios`, `#casos`, `#certificacion-3m`, `#faq`, `#contacto`.
- **Datos Legales y de Operación:**
  - Dirección: `"Patricios 1868, Luján de Cuyo, Mendoza, Argentina."`
  - Teléfono: `"+54 9 261 337-1061"`
  - Horarios: `"Lunes a viernes de 09:00 a 18:00 hs — Turnos programados."`
- **Copyright & Créditos:**
  - `"© 2026 Blandini Detailing. Todos los derechos reservados."`
  - `"Diseño y Estrategia Digital por WAFLERS."`

---

## 12. Botón Flotante Persistente de WhatsApp

- **Micro-Copy en Tooltip / Burbuja de atención:**
  - `"¿Consultas o turnos? Chateá con nosotros"`
- **Enlace con Parámetro Preconfigurado:**
  - URL: `https://wa.me/5492613371061?text=Hola%20Blandini%20Detailing,%20quiero%20consultar%20un%20presupuesto%20para%20mi%20vehículo.`
- **Directiva de Accesibilidad (A11y):**
  - Atributo `aria-label`: `"Contactar a Blandini Detailing por WhatsApp"`
  - Atributo `title`: `"Chatear por WhatsApp con Blandini Detailing"`

---
*Fin del dev-brief.md — Archivo de especificación integral para el Diseñador y el Programador.*
