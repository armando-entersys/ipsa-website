// ---------------------------------------------------------------------------
// products.ts – Restructured per UX Writing specs (Feb 2026)
// 10 categories in 4 macro-blocks, with UX copy fields
// ---------------------------------------------------------------------------

// --- Types -----------------------------------------------------------------

export interface SubType {
  slug: string;
  es: { name: string; desc: string };
  en: { name: string; desc: string };
  manufacturers: string[];
  image: string;
  sizes?: string;
  pressureClasses?: string;
  standards?: string[];
}

export type MacroBlock = 'A' | 'B' | 'C' | 'D';

export interface FAQ {
  question: { es: string; en: string };
  answer: { es: string; en: string };
}

export interface ProductPAS {
  problema: { es: string; en: string };
  agitacion: { es: string; en: string };
  solucion: { es: string; en: string };
}

export interface ProductCategory {
  slug: string;
  es: { name: string; desc: string };
  en: { name: string; desc: string };
  image: string;
  heroImage: string;
  sizes: string;
  pressureClasses: string;
  standards: string[];
  suppliers: string[];
  industries: string[];
  services: string[];
  subtypes: SubType[];
  // UX Writing additions
  block: MacroBlock;
  blockLabel: { es: string; en: string };
  heroH1: { es: string; en: string };
  heroH2: { es: string; en: string };
  ctaPrimary: { es: string; en: string };
  ctaSecondary: { es: string; en: string };
  definition: { es: string; en: string };
  pas?: ProductPAS;
  certChecklist?: string[];
  relatedBrands: string[];
  ctaFinal?: {
    h2: { es: string; en: string };
    subtexto: { es: string; en: string };
    cta: { es: string; en: string };
  };
  automationBanner?: {
    h2: { es: string; en: string };
    body: { es: string; en: string };
  };
  faqs?: FAQ[];
}

// --- Macro-Block labels ---------------------------------------------------

export const macroBlockLabels: Record<MacroBlock, { es: string; en: string; copy: { es: string; en: string } }> = {
  A: {
    es: 'Válvulas de Aislamiento y Bloqueo (On/Off)',
    en: 'Isolation & Shutoff Valves (On/Off)',
    copy: {
      es: 'Diseñadas para garantizar un cierre hermético y seguro, deteniendo o permitiendo el paso del fluido en líneas principales, cabezales y trampas de diablos.',
      en: 'Designed to ensure a tight and secure closure, stopping or allowing fluid flow in main lines, headers, and pig traps.',
    },
  },
  B: {
    es: 'Válvulas de Regulación y Retención',
    en: 'Regulation & Retention Valves',
    copy: {
      es: 'Equipos fundamentales para direccionar el flujo en un solo sentido protegiendo equipos críticos, o para estrangular y dosificar manualmente los caudales de proceso.',
      en: 'Essential equipment for directing flow in one direction to protect critical equipment, or for manually throttling and dosing process flow rates.',
    },
  },
  C: {
    es: 'Control, Seguridad y Automatización',
    en: 'Control, Safety & Automation',
    copy: {
      es: 'Componentes de precisión que regulan y protegen automáticamente las variables críticas de presión, flujo y temperatura, integrándose con los sistemas de seguridad funcional.',
      en: 'Precision components that automatically regulate and protect critical pressure, flow, and temperature variables, integrating with functional safety systems.',
    },
  },
  D: {
    es: 'Soluciones Integradas',
    en: 'Integrated Solutions',
    copy: {
      es: 'Ensambles de ingeniería que combinan válvulas, actuadores y controles en paquetes listos para instalar, reduciendo tiempos de proyecto y asegurando la compatibilidad total.',
      en: 'Engineering assemblies that combine valves, actuators, and controls in ready-to-install packages, reducing project timelines and ensuring total compatibility.',
    },
  },
};

// --- Manufacturers ---------------------------------------------------------

export const manufacturers: Record<
  string,
  { name: string; slug: string; image: string; logo: string; country: string; website: string }
> = {
  dhv: {
    name: 'DHV Valve Group',
    slug: 'dhv',
    image: '/images/products/dhv-trunnion-2pc.jpg',
    logo: '/images/logos/dhv-official.png',
    country: 'International',
    website: 'https://www.dhvindustries.com',
  },
  'della-foglia': {
    name: 'Della Foglia',
    slug: 'della-foglia',
    image: '/images/products/df-trunnion-automated.jpg',
    logo: '/images/logos/della-foglia-official.svg',
    country: 'Italia',
    website: 'https://www.dellafoglia.it',
  },
  perar: {
    name: 'Perar',
    slug: 'perar',
    image: '/images/products/df-trunnion-wb-coated.jpg',
    logo: '/images/logos/perar-official.png',
    country: 'Italia',
    website: 'https://www.pfrvalves.com',
  },
  versa: {
    name: 'Versa Valves',
    slug: 'versa',
    image: '/images/products/versa-e4-solenoid.png',
    logo: '/images/logos/versa-official.png',
    country: 'USA',
    website: 'https://www.versaproducts.com',
  },
  consolidated: {
    name: 'Consolidated (Emerson)',
    slug: '',
    image: '',
    logo: '/images/logos/consolidated.svg',
    country: 'USA',
    website: 'https://www.emerson.com',
  },
  masoneilan: {
    name: 'Masoneilan (Baker Hughes)',
    slug: '',
    image: '',
    logo: '/images/logos/bakerhughes.webp',
    country: 'USA',
    website: 'https://www.bakerhughes.com',
  },
  yokogawa: {
    name: 'Yokogawa',
    slug: '',
    image: '',
    logo: '/images/logos/yokogawa.svg',
    country: 'Japan',
    website: 'https://www.yokogawa.com',
  },
  emerson: {
    name: 'Emerson / Bettis / Shafer',
    slug: '',
    image: '',
    logo: '/images/logos/emerson.svg',
    country: 'USA',
    website: 'https://www.emerson.com',
  },
};

// --- Hub-level copy --------------------------------------------------------

export const productosHub = {
  heroH1: {
    es: 'Soluciones de Alta Ingeniería en Control de Fluidos.',
    en: 'High-Engineering Fluid Control Solutions.',
  },
  heroH2: {
    es: 'Desde aislamiento subsea hasta pilotaje neumático de precisión. Las mejores marcas globales con respaldo de ingeniería y automatización.',
    en: 'From subsea isolation to precision pneumatic piloting. Top global brands backed by engineering and automation.',
  },
  ctaPrimary: { es: 'Hablar con un Ingeniero', en: 'Talk to an Engineer' },
  ctaSecondary: { es: 'Descargar Catálogo', en: 'Download Catalog' },
};

// --- Product Categories (10 categories) ------------------------------------

export const productCategories: Record<string, ProductCategory> = {
  // =========================================================================
  // BLOCK A: AISLAMIENTO Y BLOQUEO
  // =========================================================================

  // A1 - Válvulas de Bola Trunnion Cuerpo Soldado
  'valvulas-bola-trunnion-soldado': {
    slug: 'valvulas-bola-trunnion-soldado',
    es: { name: 'Válvulas de Bola Trunnion Cuerpo Soldado', desc: 'Válvulas trunnion con cuerpo totalmente soldado para máxima integridad en ductos, oleoductos y aplicaciones subsea.' },
    en: { name: 'Welded Body Trunnion Ball Valves', desc: 'Trunnion valves with fully welded body for maximum integrity in pipelines, oil lines, and subsea applications.' },
    image: '/images/products/df-trunnion-wb.jpg',
    heroImage: '/images/products/df-fully-welded-body.jpg',
    sizes: '2" a 48"',
    pressureClasses: 'ANSI 150–900',
    standards: ['API 6D', 'API 6DSS', 'NACE MR0175', 'ISO 15848'],
    suppliers: ['perar', 'della-foglia'],
    industries: ['oil-gas', 'energetico'],
    services: ['automatizacion', 'ingenieria'],
    block: 'A',
    blockLabel: { es: 'Aislamiento y Bloqueo', en: 'Isolation & Shutoff' },
    heroH1: {
      es: 'Trunnion Cuerpo Soldado: Integridad Total en Líneas de Transmisión.',
      en: 'Welded Body Trunnion: Total Integrity in Transmission Lines.',
    },
    heroH2: {
      es: 'Cuerpo totalmente soldado que elimina puntos de fuga. Tecnología certificada para ductos, oleoductos y aplicaciones subsea.',
      en: 'Fully welded body that eliminates leak points. Certified technology for pipelines, oil lines, and subsea applications.',
    },
    ctaPrimary: { es: 'Consultar Inventario', en: 'Check Inventory' },
    ctaSecondary: { es: 'Solicitar Ingeniería', en: 'Request Engineering' },
    definition: {
      es: 'Una válvula trunnion de cuerpo soldado es un dispositivo de aislamiento donde la bola está soportada por ejes superior e inferior (trunnion) y el cuerpo está sellado permanentemente mediante soldadura, eliminando juntas bridadas y posibles puntos de fuga. Su construcción compacta la hace ideal para enterramiento directo y líneas de transmisión de gas y petróleo.',
      en: 'A welded body trunnion valve is an isolation device where the ball is supported by upper and lower shafts (trunnion) and the body is permanently sealed by welding, eliminating flanged joints and potential leak points. Its compact construction makes it ideal for direct burial and gas and oil transmission lines.',
    },
    pas: {
      problema: {
        es: 'Los proyectos de ductos enfrentan tiempos de espera de hasta 40 semanas para válvulas trunnion certificadas desde Europa.',
        en: 'Pipeline projects face lead times of up to 40 weeks for certified trunnion valves from Europe.',
      },
      agitacion: {
        es: 'Cada semana de retraso compromete cronogramas de puesta en marcha y genera costos millonarios por inactividad.',
        en: 'Every week of delay compromises commissioning schedules and generates millions in downtime costs.',
      },
      solucion: {
        es: 'IPSA mantiene stock estratégico de válvulas Trunnion Perar y Della Foglia en México, con certificación API 6D/6DSS y trazabilidad completa.',
        en: 'IPSA maintains strategic stock of Perar and Della Foglia Trunnion valves in Mexico, with API 6D/6DSS certification and full traceability.',
      },
    },
    certChecklist: ['API 6D', 'API 6DSS', 'NACE MR0175', 'ISO 15848'],
    relatedBrands: ['perar', 'della-foglia'],
    ctaFinal: {
      h2: { es: '¿Necesita integridad absoluta en sus líneas de transmisión?', en: 'Need absolute integrity in your transmission lines?' },
      subtexto: { es: 'Consulte disponibilidad de inventario soldado y especificaciones de ductos.', en: 'Check welded inventory availability and pipeline specifications.' },
      cta: { es: 'Contactar Ventas Técnicas', en: 'Contact Technical Sales' },
    },
    automationBanner: {
      h2: { es: 'Control remoto a lo largo de toda la línea.', en: 'Remote control along the entire line.' },
      body: { es: 'Las válvulas de transporte no pueden depender de operación manual. Integramos actuadores Gas-Over-Oil, neumáticos de alto torque o sistemas electrohidráulicos para cierre remoto desde el cuarto de control.', en: 'Transport valves cannot depend on manual operation. We integrate Gas-Over-Oil actuators, high-torque pneumatic, or electrohydraulic systems for remote closure from the control room.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula de bola trunnion de cuerpo soldado?', en: 'What is a welded body trunnion ball valve?' },
        answer: {
          es: 'Es una válvula de aislamiento donde la bola está soportada por ejes superiores e inferiores (trunnion) y el cuerpo está sellado permanentemente mediante soldadura, eliminando juntas bridadas y posibles puntos de fuga. Su construcción monolítica la hace ideal para enterramiento directo y líneas de transmisión de alta presión.',
          en: 'It is an isolation valve where the ball is supported by upper and lower shafts (trunnion) and the body is permanently sealed by welding, eliminating flanged joints and potential leak points. Its monolithic construction makes it ideal for direct burial and high-pressure transmission lines.',
        },
      },
      {
        question: { es: '¿Cuándo debo elegir cuerpo soldado en lugar de atornillado?', en: 'When should I choose welded body instead of bolted body?' },
        answer: {
          es: 'El cuerpo soldado se recomienda cuando la prioridad es la integridad hermética y no se requiere mantenimiento en campo: ductos enterrados, líneas de transmisión de gas, oleoductos y aplicaciones subsea. El atornillado se prefiere cuando se necesita acceso a los internos para mantenimiento in situ, como en refinerías y estaciones de compresión.',
          en: 'Welded body is recommended when hermetic integrity is the priority and field maintenance is not required: buried pipelines, gas transmission lines, oil pipelines, and subsea applications. Bolted body is preferred when access to internals for on-site maintenance is needed, such as in refineries and compression stations.',
        },
      },
      {
        question: { es: '¿Qué normas certifican las válvulas trunnion de cuerpo soldado?', en: 'What standards certify welded body trunnion valves?' },
        answer: {
          es: 'Las principales normas son API 6D para válvulas de ductos, API 6DSS para aplicaciones subsea, NACE MR0175/ISO 15156 para servicio amargo (sour service) e ISO 15848 para emisiones fugitivas. Adicionalmente pueden certificarse bajo API 607 para prueba de fuego.',
          en: 'The main standards are API 6D for pipeline valves, API 6DSS for subsea applications, NACE MR0175/ISO 15156 for sour service, and ISO 15848 for fugitive emissions. Additionally, they can be certified under API 607 for fire testing.',
        },
      },
      {
        question: { es: '¿Qué tamaños y clases de presión están disponibles?', en: 'What sizes and pressure classes are available?' },
        answer: {
          es: 'Las válvulas trunnion de cuerpo soldado que manejamos están disponibles en diámetros de 2" a 60" y clases de presión ANSI 150 a 2500. Para aplicaciones subsea, los rangos típicos son 4" a 36" en clases 600 a 2500 con recubrimientos especiales anticorrosión.',
          en: 'The welded body trunnion valves we supply are available in diameters from 2" to 60" and pressure classes ANSI 150 to 2500. For subsea applications, typical ranges are 4" to 36" in classes 600 to 2500 with special anti-corrosion coatings.',
        },
      },
      {
        question: { es: '¿Para qué aplicaciones se recomiendan las válvulas trunnion soldadas?', en: 'What applications are welded body trunnion valves recommended for?' },
        answer: {
          es: 'Se recomiendan para ductos de transmisión de gas y petróleo, oleoductos, gasoductos, plataformas offshore, aplicaciones subsea, estaciones de bombeo y trampas de diablos. Su diseño sin bridas en el cuerpo minimiza los puntos de fuga en instalaciones remotas o enterradas donde el mantenimiento es limitado.',
          en: 'They are recommended for gas and oil transmission pipelines, oil and gas pipelines, offshore platforms, subsea applications, pumping stations, and pig traps. Their flangeless body design minimizes leak points in remote or buried installations where maintenance access is limited.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'enterramiento',
        es: { name: 'Soldada para Enterramiento', desc: 'Diseño con protección anticorrosiva para instalación subterránea directa en ductos de transmisión.' },
        en: { name: 'Buried Welded Valve', desc: 'Design with anti-corrosion protection for direct underground installation in transmission pipelines.' },
        manufacturers: ['perar', 'della-foglia'],
        image: '/images/products/df-product-2.jpg',
        sizes: '4" to 48"',
      },
      {
        slug: 'aerea',
        es: { name: 'Soldada Instalación Aérea', desc: 'Configuración para instalación aérea en estaciones de regulación y medición.' },
        en: { name: 'Above Ground Welded', desc: 'Configuration for above-ground installation at regulation and metering stations.' },
        manufacturers: ['perar', 'della-foglia'],
        image: '/images/products/della-foglia-trunnion.jpg',
        sizes: '2" to 36"',
      },
      {
        slug: 'subsea',
        es: { name: 'Trunnion Subsea (API 6DSS)', desc: 'Válvulas para instalación en el fondo marino. Operación remota mediante ROV bajo presiones hidrostáticas extremas.' },
        en: { name: 'Subsea Trunnion (API 6DSS)', desc: 'Valves for seabed installation. Remote ROV operation under extreme hydrostatic pressures.' },
        manufacturers: ['della-foglia', 'perar'],
        image: '/images/products/df-product-3.jpg',
        standards: ['API 6DSS'],
      },
    ],
  },

  // A2 - Válvulas de Bola Trunnion Cuerpo Atornillado
  'valvulas-bola-trunnion-atornillado': {
    slug: 'valvulas-bola-trunnion-atornillado',
    es: { name: 'Válvulas de Bola Trunnion Cuerpo Atornillado', desc: 'Válvulas trunnion con cuerpo atornillado para mantenimiento en campo sin soldadura. Alta presión y diámetros grandes.' },
    en: { name: 'Bolted Body Trunnion Ball Valves', desc: 'Trunnion valves with bolted body for field maintenance without welding. High pressure and large diameters.' },
    image: '/images/products/dhv-trunnion-2pc.jpg',
    heroImage: '/images/products/df-trunnion-side-entry.jpg',
    sizes: '2" a 48"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['API 6D', 'API 6A', 'API 607', 'NACE MR0175', 'ISO 15848'],
    suppliers: ['perar', 'della-foglia', 'dhv'],
    industries: ['oil-gas', 'energetico'],
    services: ['automatizacion', 'ingenieria'],
    block: 'A',
    blockLabel: { es: 'Aislamiento y Bloqueo', en: 'Isolation & Shutoff' },
    heroH1: {
      es: 'Trunnion Cuerpo Atornillado: Aislamiento Crítico con Mantenimiento en Campo.',
      en: 'Bolted Body Trunnion: Critical Isolation with Field Maintenance.',
    },
    heroH2: {
      es: 'Diseño robusto que permite mantenimiento en sitio sin soldadura. Tecnología probada para estaciones de compresión, refinerías y alta presión.',
      en: 'Robust design enabling on-site maintenance without welding. Proven technology for compression stations, refineries, and high pressure.',
    },
    ctaPrimary: { es: 'Consultar Inventario', en: 'Check Inventory' },
    ctaSecondary: { es: 'Solicitar Ingeniería', en: 'Request Engineering' },
    definition: {
      es: 'Una válvula trunnion de cuerpo atornillado es un dispositivo de aislamiento donde la bola está soportada por ejes (trunnion) y el cuerpo se une mediante pernos, permitiendo el desmontaje en campo para mantenimiento de asientos y sellos sin necesidad de cortar la línea. Su diseño la hace ideal para refinerías, estaciones de compresión y aplicaciones donde el acceso para mantenimiento es prioritario.',
      en: 'A bolted body trunnion valve is an isolation device where the ball is supported by shafts (trunnion) and the body is joined by bolts, allowing field disassembly for seat and seal maintenance without cutting the line. Its design makes it ideal for refineries, compression stations, and applications where maintenance access is a priority.',
    },
    pas: {
      problema: {
        es: 'Los proyectos de plataformas y refinerías enfrentan tiempos de espera de hasta 40 semanas para válvulas trunnion certificadas desde Europa.',
        en: 'Platform and refinery projects face lead times of up to 40 weeks for certified trunnion valves from Europe.',
      },
      agitacion: {
        es: 'Cada semana de retraso compromete cronogramas de puesta en marcha y genera costos millonarios por inactividad.',
        en: 'Every week of delay compromises commissioning schedules and generates millions in downtime costs.',
      },
      solucion: {
        es: 'IPSA mantiene stock estratégico de válvulas Trunnion Perar, Della Foglia y DHV en México, con certificación API 6D y trazabilidad completa.',
        en: 'IPSA maintains strategic stock of Perar, Della Foglia, and DHV Trunnion valves in Mexico, with API 6D certification and full traceability.',
      },
    },
    certChecklist: ['API 6D', 'API 6A', 'API 607', 'NACE MR0175', 'ISO 15848', 'SIL 3'],
    relatedBrands: ['perar', 'della-foglia', 'dhv'],
    ctaFinal: {
      h2: { es: '¿Requiere aislamiento de alta presión con mantenimiento accesible?', en: 'Need high-pressure isolation with accessible maintenance?' },
      subtexto: { es: 'Consulte la configuración de 2 o 3 piezas adecuada para su proceso.', en: 'Check the right 2 or 3-piece configuration for your process.' },
      cta: { es: 'Contactar Ventas Técnicas', en: 'Contact Technical Sales' },
    },
    automationBanner: {
      h2: { es: 'Automatización de alto torque.', en: 'High-torque automation.' },
      body: { es: 'Las válvulas Trunnion requieren cajas de engranajes para operación manual. Nuestra División de Automatización integra actuadores neumáticos, eléctricos o electrohidráulicos. Entregamos paquetes ESD probados en nuestro taller.', en: 'Trunnion valves require gearboxes for manual operation. Our Automation Division integrates pneumatic, electric, or electrohydraulic actuators. We deliver ESD packages tested in our workshop.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula trunnion de cuerpo atornillado?', en: 'What is a bolted body trunnion ball valve?' },
        answer: {
          es: 'Es una válvula de bola de montaje trunnion donde el cuerpo se une mediante pernos de alta resistencia en lugar de soldadura. Esto permite desmontar la válvula en campo para inspeccionar o reemplazar asientos, sellos y la bola sin necesidad de cortar la línea, manteniendo la integridad estructural para presiones hasta ANSI 2500.',
          en: 'It is a trunnion-mounted ball valve where the body is joined by high-strength bolts instead of welding. This allows field disassembly to inspect or replace seats, seals, and the ball without cutting the line, maintaining structural integrity for pressures up to ANSI 2500.',
        },
      },
      {
        question: { es: '¿Cuáles son las ventajas del cuerpo atornillado para mantenimiento en campo?', en: 'What are the advantages of bolted body for field maintenance?' },
        answer: {
          es: 'El cuerpo atornillado permite desmontar la válvula in situ sin corte de tubería ni soldadura en caliente, reduciendo tiempos de paro y costos de mantenimiento. El reemplazo de asientos y sellos se realiza en horas en lugar de días, lo cual es crítico en refinerías y plantas de proceso donde los paros no programados cuestan millones.',
          en: 'Bolted body allows field disassembly without pipe cutting or hot welding, reducing downtime and maintenance costs. Seat and seal replacement is done in hours instead of days, which is critical in refineries and process plants where unplanned shutdowns cost millions.',
        },
      },
      {
        question: { es: '¿Qué configuraciones existen para las trunnion atornilladas?', en: 'What configurations exist for bolted trunnion valves?' },
        answer: {
          es: 'Existen tres configuraciones principales: 2 piezas (side entry) para mantenimiento estándar, 3 piezas para acceso completo a los internos sin retirar de la línea, y top entry para mantenimiento desde la parte superior sin desmontar la tubería. La elección depende del espacio disponible y la frecuencia de mantenimiento requerida.',
          en: 'There are three main configurations: 2-piece (side entry) for standard maintenance, 3-piece for full access to internals without removing from the line, and top entry for maintenance from above without dismantling piping. The choice depends on available space and required maintenance frequency.',
        },
      },
      {
        question: { es: '¿Qué normas aplican a las válvulas trunnion atornilladas?', en: 'What standards apply to bolted trunnion valves?' },
        answer: {
          es: 'Las normas principales son API 6D para diseño y pruebas de válvulas de ductos, API 6A para aplicaciones de cabezal de pozo, API 607 para prueba de fuego, NACE MR0175 para servicio amargo e ISO 15848 para emisiones fugitivas. También pueden certificarse SIL 3 conforme a IEC 61511 para lazos de seguridad.',
          en: 'The main standards are API 6D for pipeline valve design and testing, API 6A for wellhead applications, API 607 for fire testing, NACE MR0175 for sour service, and ISO 15848 for fugitive emissions. They can also be SIL 3 certified per IEC 61511 for safety loops.',
        },
      },
      {
        question: { es: '¿Qué tamaños están disponibles en trunnion atornilladas?', en: 'What sizes are available in bolted trunnion valves?' },
        answer: {
          es: 'Manejamos válvulas trunnion atornilladas de 2" a 48" en clases ANSI 150 a 2500, con fabricantes Perar, Della Foglia y DHV. Las configuraciones de 2 piezas cubren hasta 48", las de 3 piezas hasta 36", y las top entry de 4" a 36". Los materiales incluyen acero al carbono, inoxidable, dúplex y aleaciones especiales.',
          en: 'We supply bolted trunnion valves from 2" to 48" in ANSI classes 150 to 2500, from manufacturers Perar, Della Foglia, and DHV. 2-piece configurations cover up to 48", 3-piece up to 36", and top entry from 4" to 36". Materials include carbon steel, stainless steel, duplex, and special alloys.',
        },
      },
      {
        question: { es: '¿Cómo seleccionar entre 2 piezas, 3 piezas y top entry?', en: 'How to choose between 2-piece, 3-piece, and top entry?' },
        answer: {
          es: 'La selección depende del tipo de mantenimiento requerido: 2 piezas es la opción más económica para mantenimiento periódico estándar; 3 piezas permite acceso total a la bola y los asientos sin retirar la válvula de la línea; top entry es ideal cuando el espacio lateral es limitado o la tubería no puede desmontarse, como en plataformas offshore.',
          en: 'Selection depends on the type of maintenance required: 2-piece is the most economical option for standard periodic maintenance; 3-piece allows full access to ball and seats without removing the valve from the line; top entry is ideal when lateral space is limited or piping cannot be dismantled, such as on offshore platforms.',
        },
      },
    ],
    subtypes: [
      {
        slug: '2-piezas',
        es: { name: 'Trunnion 2 Piezas', desc: 'Cuerpo en dos piezas atornilladas para mantenimiento estándar en campo.' },
        en: { name: '2-Piece Trunnion', desc: 'Two-piece bolted body for standard field maintenance.' },
        manufacturers: ['perar', 'della-foglia', 'dhv'],
        image: '/images/products/dhv-trunnion-2pc.jpg',
        sizes: '2" to 48"',
        pressureClasses: 'ANSI 150-2500',
      },
      {
        slug: '3-piezas',
        es: { name: 'Trunnion 3 Piezas', desc: 'Cuerpo en tres piezas para acceso total al internado. Mantenimiento completo sin retirar de línea.' },
        en: { name: '3-Piece Trunnion', desc: 'Three-piece body for full access to internals. Complete maintenance without removing from line.' },
        manufacturers: ['della-foglia', 'dhv'],
        image: '/images/products/df-trunnion-coated.jpg',
        sizes: '2" to 36"',
        pressureClasses: 'ANSI 150-2500',
      },
      {
        slug: 'top-entry',
        es: { name: 'Trunnion Top Entry', desc: 'Acceso superior para mantenimiento en línea sin desmontaje de tubería.' },
        en: { name: 'Top Entry Trunnion', desc: 'Top access for in-line maintenance without pipe dismantling.' },
        manufacturers: ['della-foglia'],
        image: '/images/products/df-trunnion-side-entry.jpg',
        sizes: '4" to 36"',
      },
    ],
  },

  // A3 - Válvulas de Bola Flotante
  'valvulas-bola-flotante': {
    slug: 'valvulas-bola-flotante',
    es: { name: 'Válvulas de Bola Flotante', desc: 'Válvulas de bola flotante para aislamiento en líneas auxiliares, servicios generales e instrumentación. Diseño compacto y económico.' },
    en: { name: 'Floating Ball Valves', desc: 'Floating ball valves for isolation in auxiliary lines, general services, and instrumentation. Compact and economical design.' },
    image: '/images/products/dhv-floater.jpg',
    heroImage: '/images/products/df-floating-ball.jpg',
    sizes: '1/2" a 12"',
    pressureClasses: 'ANSI 150–600',
    standards: ['API 6D', 'API 607', 'ISO 17292'],
    suppliers: ['della-foglia', 'dhv'],
    industries: ['oil-gas', 'energetico', 'privado'],
    services: ['automatizacion', 'ingenieria'],
    block: 'A',
    blockLabel: { es: 'Aislamiento y Bloqueo', en: 'Isolation & Shutoff' },
    heroH1: {
      es: 'Válvulas de Bola Flotante: Versatilidad y Confiabilidad en Cada Línea.',
      en: 'Floating Ball Valves: Versatility and Reliability in Every Line.',
    },
    heroH2: {
      es: 'La solución confiable para aislamiento en líneas auxiliares, drenajes, venteos y servicios generales. Desde diámetros reducidos hasta configuraciones especiales con disponibilidad inmediata.',
      en: 'The reliable solution for isolation in auxiliary lines, drains, vents, and general services. From small diameters to special configurations with immediate availability.',
    },
    ctaPrimary: { es: 'Ver Inventario de Flotantes', en: 'View Floating Valve Inventory' },
    ctaSecondary: { es: 'Solicitar Asesoría Técnica', en: 'Request Technical Advice' },
    definition: {
      es: 'Una válvula de bola flotante es un dispositivo de aislamiento donde la bola no está fijada mecánicamente, sino que "flota" entre los asientos, siendo empujada contra el asiento aguas abajo por la presión del fluido para lograr el sello. Su diseño simple y económico la hace ideal para aplicaciones de baja a media presión.',
      en: 'A floating ball valve is an isolation device where the ball is not mechanically fixed but "floats" between the seats, being pushed against the downstream seat by fluid pressure to achieve the seal. Its simple and economical design makes it ideal for low to medium pressure applications.',
    },
    certChecklist: ['API 6D', 'API 607', 'ISO 17292'],
    relatedBrands: ['della-foglia', 'dhv'],
    ctaFinal: {
      h2: { es: '¿Necesita refaccionar sus líneas de servicio o purgas?', en: 'Need to refurbish your service or purge lines?' },
      subtexto: { es: 'Consulte con nuestros ingenieros disponibilidad de stock masivo para envío inmediato o solicite su ensamble automatizado.', en: 'Check with our engineers for bulk stock availability for immediate shipping or request your automated assembly.' },
      cta: { es: 'Contactar a Ventas Técnicas', en: 'Contact Technical Sales' },
    },
    automationBanner: {
      h2: { es: 'Transforme su operación manual en un sistema autónomo.', en: 'Transform your manual operation into an autonomous system.' },
      body: { es: 'Las válvulas de bola flotante son las candidatas perfectas para la modernización de su planta. Nuestra División de Automatización retira la palanca manual e integra actuadores neumáticos de cuarto de vuelta (rack and pinion) o actuadores eléctricos. Entregamos secuencias On/Off automatizadas, rápidas y seguras, listas para conectarse a su panel de control.', en: 'Floating ball valves are the perfect candidates for modernizing your plant. Our Automation Division removes the manual lever and integrates quarter-turn pneumatic actuators (rack and pinion) or electric actuators. We deliver automated, fast, and safe On/Off sequences ready to connect to your control panel.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula de bola flotante?', en: 'What is a floating ball valve?' },
        answer: {
          es: 'Es una válvula donde la bola no está fijada mecánicamente por ejes, sino que "flota" libremente entre los dos asientos. La presión del fluido empuja la bola contra el asiento aguas abajo, generando el sello. Su diseño simple y compacto la hace económica y adecuada para diámetros de 1/2" a 12" y presiones ANSI 150 a 600.',
          en: 'It is a valve where the ball is not mechanically fixed by shafts but "floats" freely between the two seats. Fluid pressure pushes the ball against the downstream seat, creating the seal. Its simple, compact design makes it economical and suitable for diameters from 1/2" to 12" and pressures ANSI 150 to 600.',
        },
      },
      {
        question: { es: '¿Cuál es la diferencia entre una válvula de bola flotante y una trunnion?', en: 'What is the difference between a floating and a trunnion ball valve?' },
        answer: {
          es: 'En la flotante, la bola se desplaza libremente y la presión del fluido genera el sello; en la trunnion, la bola está fijada por ejes superior e inferior y son los asientos los que se desplazan contra la bola. La flotante es ideal para diámetros menores y presiones bajas a medias; la trunnion es necesaria para diámetros grandes (>6") y altas presiones donde la fuerza sobre la bola sería excesiva.',
          en: 'In a floating design, the ball moves freely and fluid pressure creates the seal; in a trunnion, the ball is fixed by upper and lower shafts and the seats move against the ball. Floating is ideal for smaller diameters and low to medium pressures; trunnion is necessary for large diameters (>6") and high pressures where force on the ball would be excessive.',
        },
      },
      {
        question: { es: '¿Cuándo usar una válvula de bola flotante?', en: 'When should I use a floating ball valve?' },
        answer: {
          es: 'Se recomienda para líneas auxiliares, drenajes, venteos, servicios generales, instrumentación y aplicaciones donde se requiere un cierre rápido y económico en diámetros de 1/2" a 12" con presiones hasta ANSI 600. También es la opción ideal para proyectos de modernización masiva donde se reemplazan decenas o cientos de válvulas.',
          en: 'Recommended for auxiliary lines, drains, vents, general services, instrumentation, and applications requiring quick, economical shutoff in diameters from 1/2" to 12" with pressures up to ANSI 600. It is also the ideal choice for mass modernization projects replacing dozens or hundreds of valves.',
        },
      },
      {
        question: { es: '¿Qué normas aplican a las válvulas de bola flotante?', en: 'What standards apply to floating ball valves?' },
        answer: {
          es: 'Las principales normas son API 6D para válvulas de ductos, ISO 17292 para válvulas de bola metálicas, API 607 para prueba de fuego y ASME B16.34 para diseño de presión-temperatura. Para servicio criogénico se aplica adicionalmente la norma BS 6364.',
          en: 'The main standards are API 6D for pipeline valves, ISO 17292 for metal ball valves, API 607 for fire testing, and ASME B16.34 for pressure-temperature design. For cryogenic service, BS 6364 additionally applies.',
        },
      },
      {
        question: { es: '¿Qué materiales están disponibles para válvulas flotantes?', en: 'What materials are available for floating ball valves?' },
        answer: {
          es: 'Los materiales más comunes son acero al carbono (ASTM A216 WCB), acero inoxidable (CF8M/316), dúplex (CD3MN) y aleaciones especiales como Inconel y Monel para servicio corrosivo. Los asientos pueden ser de PTFE, RPTFE, PEEK o metálicos según la temperatura y el fluido de servicio.',
          en: 'The most common materials are carbon steel (ASTM A216 WCB), stainless steel (CF8M/316), duplex (CD3MN), and special alloys like Inconel and Monel for corrosive service. Seats can be PTFE, RPTFE, PEEK, or metallic depending on the temperature and service fluid.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'estandar',
        es: { name: 'Bola Flotante Estándar', desc: 'Válvulas flotantes estándar en diámetros de 1/2" a 12" para servicios generales y líneas auxiliares.' },
        en: { name: 'Standard Floating Ball', desc: 'Standard floating valves from 1/2" to 12" for general services and auxiliary lines.' },
        manufacturers: ['dhv', 'della-foglia'],
        image: '/images/products/dhv-floater.jpg',
        sizes: '1/2" to 12"',
        pressureClasses: 'ANSI 150-600',
      },
      {
        slug: 'top-entry',
        es: { name: 'Bola Flotante Top Entry', desc: 'Válvulas con acceso superior para mantenimiento en línea sin desmontaje de tubería.' },
        en: { name: 'Top Entry Floating Ball', desc: 'Valves with top access for in-line maintenance without pipe dismantling.' },
        manufacturers: ['della-foglia'],
        image: '/images/products/df-trunnion-coated.jpg',
        sizes: '2" to 24"',
      },
      {
        slug: 'criogenica',
        es: { name: 'Bola Flotante Criogénica', desc: 'Válvulas para servicio criogénico en GNL, etileno y gases licuados, con extensión de vástago conforme a BS 6364.' },
        en: { name: 'Cryogenic Floating Ball', desc: 'Valves for cryogenic service in LNG, ethylene, and liquefied gases, with stem extension per BS 6364.' },
        manufacturers: ['della-foglia'],
        image: '/images/products/df-trunnion-wb-coated.jpg',
      },
    ],
  },

  // A4 - Válvulas de Compuerta
  'valvulas-compuerta': {
    slug: 'valvulas-compuerta',
    es: { name: 'Válvulas de Compuerta', desc: 'Válvulas de compuerta para aislamiento principal en refinerías, ductos e infraestructura de generación. Flujo total sin obstrucción.' },
    en: { name: 'Gate Valves', desc: 'Gate valves for primary isolation in refineries, pipelines, and power generation infrastructure. Full bore unobstructed flow.' },
    image: '/images/products/dhv-gate.jpg',
    heroImage: '/images/products/dhv-gate-valve-wide.jpg',
    sizes: '2" a 36"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['API 600', 'API 6D', 'ASME B16.34'],
    suppliers: ['dhv'],
    industries: ['oil-gas', 'energetico'],
    services: ['ingenieria'],
    block: 'A',
    blockLabel: { es: 'Aislamiento y Bloqueo', en: 'Isolation & Shutoff' },
    heroH1: {
      es: 'Válvulas de Compuerta: Aislamiento Robusto para Infraestructura Crítica.',
      en: 'Gate Valves: Robust Isolation for Critical Infrastructure.',
    },
    heroH2: {
      es: 'El estándar de confiabilidad para aislamiento en refinerías, ductos y plantas de generación. Diseño que garantiza flujo total sin obstrucción y cierre hermético bajo los estándares API y ASME.',
      en: 'The reliability standard for isolation in refineries, pipelines, and power plants. Design that guarantees full unobstructed flow and tight shutoff under API and ASME standards.',
    },
    ctaPrimary: { es: 'Ver Stock de Compuerta DHV', en: 'View DHV Gate Valve Stock' },
    ctaSecondary: { es: 'Consultar Especificaciones', en: 'Check Specifications' },
    definition: {
      es: 'Una válvula de compuerta utiliza una compuerta (gate) que se desplaza perpendicularmente al flujo para abrir o cerrar el paso del fluido. Su diseño de paso completo la convierte en la opción principal cuando se requiere mínima caída de presión y flujo sin obstrucción.',
      en: 'A gate valve uses a gate that moves perpendicular to the flow to open or close fluid passage. Its full-bore design makes it the primary option when minimum pressure drop and unobstructed flow are required.',
    },
    certChecklist: ['API 600', 'API 6D', 'ASME B16.34'],
    relatedBrands: ['dhv'],
    ctaFinal: {
      h2: { es: '¿Requiere aislamiento absoluto para sus líneas de proceso?', en: 'Need absolute isolation for your process lines?' },
      subtexto: { es: 'Consulte con nuestros ingenieros disponibilidad de stock en forjado y fundido, o solicite la automatización de sus equipos.', en: 'Check with our engineers for forged and cast stock availability, or request the automation of your equipment.' },
      cta: { es: 'Contactar a Especialistas en DHV', en: 'Contact DHV Specialists' },
    },
    automationBanner: {
      h2: { es: 'Potencia para diámetros mayores y alta presión.', en: 'Power for larger diameters and high pressure.' },
      body: { es: 'Las válvulas de compuerta son dispositivos de múltiples vueltas (multi-turn) que, en diámetros grandes o presiones elevadas, requieren un esfuerzo humano extremo. Nuestra División de Automatización integra actuadores eléctricos de alto torque o sistemas de engranajes reductores (Gears), permitiendo la operación remota y segura de sus líneas de bloqueo principales.', en: 'Gate valves are multi-turn devices that, in large diameters or high pressures, require extreme human effort. Our Automation Division integrates high-torque electric actuators or gear reducer systems, enabling remote and safe operation of your main shutoff lines.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula de compuerta?', en: 'What is a gate valve?' },
        answer: {
          es: 'Es una válvula de aislamiento que utiliza un disco o compuerta que se desplaza perpendicularmente al flujo para abrir o cerrar completamente el paso del fluido. Su diseño de paso completo (full bore) ofrece mínima caída de presión cuando está abierta y es ideal para servicio on/off en líneas donde se requiere flujo sin obstrucción.',
          en: 'It is an isolation valve that uses a disc or gate that moves perpendicular to the flow to fully open or close fluid passage. Its full-bore design offers minimal pressure drop when open and is ideal for on/off service in lines requiring unobstructed flow.',
        },
      },
      {
        question: { es: '¿Cuándo usar una válvula de compuerta en lugar de una de bola?', en: 'When should I use a gate valve instead of a ball valve?' },
        answer: {
          es: 'La compuerta es preferida en líneas de gran diámetro (>12") donde el costo de una bola trunnion sería excesivo, en servicios de alta temperatura como vapor, y cuando el diseño del proceso requiere un sello bidireccional confiable. La válvula de bola se prefiere para ciclos de apertura/cierre frecuentes y cuando se necesita operación rápida de cuarto de vuelta.',
          en: 'Gate valves are preferred in large diameter lines (>12") where the cost of a trunnion ball valve would be excessive, in high-temperature services like steam, and when process design requires a reliable bidirectional seal. Ball valves are preferred for frequent open/close cycles and when quick quarter-turn operation is needed.',
        },
      },
      {
        question: { es: '¿Qué tipos de cuña existen en válvulas de compuerta?', en: 'What types of gate wedge exist in gate valves?' },
        answer: {
          es: 'Existen tres tipos principales: cuña sólida (single wedge), la más robusta y usada en servicio general; cuña flexible (flexible wedge), que compensa la desalineación térmica en servicios de alta temperatura como vapor; y cuña partida o paralela (split wedge/parallel disc), que ofrece sellado bidireccional y se usa en líneas de transmisión de gas.',
          en: 'There are three main types: solid wedge (single wedge), the most robust and used in general service; flexible wedge, which compensates for thermal misalignment in high-temperature services like steam; and split wedge or parallel disc, which offers bidirectional sealing and is used in gas transmission lines.',
        },
      },
      {
        question: { es: '¿Qué normas aplican a las válvulas de compuerta?', en: 'What standards apply to gate valves?' },
        answer: {
          es: 'Las principales normas son API 600 para válvulas de compuerta en acero fundido con bridas y extremos soldados, API 602 para válvulas de compuerta forjadas de tamaño reducido, API 6D para válvulas de ductos y ASME B16.34 para los límites de presión-temperatura. Para servicio amargo se aplica NACE MR0175.',
          en: 'The main standards are API 600 for flanged and butt-welded cast steel gate valves, API 602 for small forged gate valves, API 6D for pipeline valves, and ASME B16.34 for pressure-temperature ratings. NACE MR0175 applies for sour service.',
        },
      },
      {
        question: { es: '¿Quién fabrica las válvulas de compuerta que distribuye IPSA?', en: 'Who manufactures the gate valves distributed by IPSA?' },
        answer: {
          es: 'IPSA distribuye válvulas de compuerta DHV Valve Group, reconocido fabricante internacional con amplio portafolio en válvulas tipo slab para ductos y tipo cuña para refinerías. DHV fabrica en acero al carbono, inoxidable, aleaciones y materiales especiales, con certificaciones API 600, API 6D y ASME B16.34.',
          en: 'IPSA distributes DHV Valve Group gate valves, a recognized international manufacturer with a broad portfolio of slab-type valves for pipelines and wedge-type for refineries. DHV manufactures in carbon steel, stainless steel, alloys, and special materials, with API 600, API 6D, and ASME B16.34 certifications.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'slab',
        es: { name: 'Compuerta Tipo Slab', desc: 'Válvulas de compuerta con disco plano (slab) para servicio en ductos de transmisión de gas y petróleo.' },
        en: { name: 'Slab Gate Valve', desc: 'Gate valves with flat disc (slab) for service in gas and oil transmission pipelines.' },
        manufacturers: ['dhv'],
        image: '/images/products/dhv-gate.jpg',
        sizes: '2" to 36"',
        pressureClasses: 'ANSI 150-2500',
      },
      {
        slug: 'wedge',
        es: { name: 'Compuerta Tipo Cuña', desc: 'Válvulas de compuerta con cuña flexible o sólida para servicio en refinerías y plantas de proceso.' },
        en: { name: 'Wedge Gate Valve', desc: 'Gate valves with flexible or solid wedge for refinery and process plant service.' },
        manufacturers: ['dhv'],
        image: '/images/products/dhv-gate-valve.png',
        sizes: '2" to 24"',
        pressureClasses: 'ANSI 150-1500',
      },
    ],
  },

  // =========================================================================
  // BLOCK B: REGULACION Y RETENCION
  // =========================================================================

  // B1 - Válvulas de Globo
  'valvulas-globo': {
    slug: 'valvulas-globo',
    es: { name: 'Válvulas de Globo', desc: 'Válvulas de globo para regulación y estrangulación de flujo en servicios de vapor, líquidos y gases industriales.' },
    en: { name: 'Globe Valves', desc: 'Globe valves for flow regulation and throttling in steam, liquid, and industrial gas services.' },
    image: '/images/products/dhv-globe.jpg',
    heroImage: '/images/products/df-high-pressure.jpg',
    sizes: '2" a 24"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['API 600', 'ASME B16.34', 'BS 1873'],
    suppliers: ['dhv'],
    industries: ['energetico', 'privado'],
    services: ['ingenieria'],
    block: 'B',
    blockLabel: { es: 'Regulación y Retención', en: 'Regulation & Retention' },
    heroH1: {
      es: 'Válvulas de Globo: Regulación Precisa para Procesos Críticos.',
      en: 'Globe Valves: Precise Regulation for Critical Processes.',
    },
    heroH2: {
      es: 'Control manual de flujo y estrangulación en servicios de vapor, enfriamiento y procesos químicos. Diseñadas bajo estándares ASME para la máxima durabilidad en condiciones térmicas severas.',
      en: 'Manual flow control and throttling in steam, cooling, and chemical process services. Designed under ASME standards for maximum durability in severe thermal conditions.',
    },
    ctaPrimary: { es: 'Ver Inventario de Globo', en: 'View Globe Valve Inventory' },
    ctaSecondary: { es: 'Consultar Aplicaciones', en: 'Check Applications' },
    definition: {
      es: 'Una válvula de globo utiliza un disco que se mueve perpendicularmente al asiento para regular el caudal de fluido. Su diseño permite un control preciso del flujo, lo que la hace ideal para aplicaciones de estrangulación y regulación manual en servicios de vapor, líquidos calientes y gases.',
      en: 'A globe valve uses a disc that moves perpendicular to the seat to regulate fluid flow. Its design allows precise flow control, making it ideal for throttling and manual regulation in steam, hot liquid, and gas services.',
    },
    certChecklist: ['API 600', 'ASME B16.34', 'BS 1873'],
    relatedBrands: ['dhv'],
    ctaFinal: {
      h2: { es: '¿Necesita dosificar o estrangular un fluido crítico?', en: 'Need to dose or throttle a critical fluid?' },
      subtexto: { es: 'Consulte con nuestros especialistas para el cálculo del Coeficiente de Flujo (Cv) y verifique disponibilidad en stock.', en: 'Consult our specialists for Flow Coefficient (Cv) calculation and check stock availability.' },
      cta: { es: 'Contactar a Ventas Técnicas', en: 'Contact Technical Sales' },
    },
    automationBanner: {
      h2: { es: 'Evolucione hacia el control automático.', en: 'Evolve toward automatic control.' },
      body: { es: 'Una válvula de globo manual puede transformarse en el elemento final de un lazo de control continuo. Nuestra División de Automatización integra actuadores eléctricos de múltiples vueltas o neumáticos lineales, permitiendo que su sistema regule presión, nivel o temperatura de forma remota y autónoma.', en: 'A manual globe valve can be transformed into the final element of a continuous control loop. Our Automation Division integrates multi-turn electric or linear pneumatic actuators, allowing your system to regulate pressure, level, or temperature remotely and autonomously.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula de globo?', en: 'What is a globe valve?' },
        answer: {
          es: 'Es una válvula de regulación que utiliza un disco móvil perpendicular al asiento para controlar el caudal de fluido de forma proporcional. A diferencia de las válvulas de aislamiento (bola, compuerta), la globo está diseñada para operar en posiciones intermedias, permitiendo la estrangulación y dosificación manual del flujo.',
          en: 'It is a regulation valve that uses a disc moving perpendicular to the seat to proportionally control fluid flow. Unlike isolation valves (ball, gate), the globe valve is designed to operate in intermediate positions, allowing manual throttling and flow dosing.',
        },
      },
      {
        question: { es: '¿Para qué sirve una válvula de globo?', en: 'What is a globe valve used for?' },
        answer: {
          es: 'Sirve para regular y estrangular el flujo de forma manual en servicios de vapor, condensado, aceite térmico, agua caliente y gases industriales. Es la válvula estándar en bypass de estaciones de control, líneas de drenaje regulado, sistemas de enfriamiento y cualquier punto donde se necesite ajustar el caudal manualmente.',
          en: 'It is used to manually regulate and throttle flow in steam, condensate, thermal oil, hot water, and industrial gas services. It is the standard valve in control station bypasses, regulated drain lines, cooling systems, and any point where manual flow adjustment is needed.',
        },
      },
      {
        question: { es: '¿Cuál es la diferencia entre una válvula de globo y una de compuerta?', en: 'What is the difference between a globe valve and a gate valve?' },
        answer: {
          es: 'La compuerta es para aislamiento total (on/off) y ofrece flujo sin obstrucción; la globo es para regulación proporcional del flujo y genera mayor caída de presión por su trayectoria en forma de S. La compuerta nunca debe usarse para estrangulación porque el disco sufre desgaste acelerado; la globo está diseñada específicamente para operar parcialmente abierta.',
          en: 'Gate valves are for full isolation (on/off) and offer unobstructed flow; globe valves are for proportional flow regulation and generate higher pressure drop due to their S-shaped flow path. Gate valves should never be used for throttling because the disc suffers accelerated wear; globe valves are specifically designed to operate partially open.',
        },
      },
      {
        question: { es: '¿Qué normas aplican a las válvulas de globo?', en: 'What standards apply to globe valves?' },
        answer: {
          es: 'Las principales normas son API 600 para válvulas de globo en acero fundido con bridas y extremos soldados, API 602 para válvulas forjadas de tamaño reducido, BS 1873 para válvulas de globo con brida y ASME B16.34 para los límites de presión-temperatura. Para diseño de cuerpo y asientos se referencia también ASME B16.5 para las bridas.',
          en: 'The main standards are API 600 for flanged and butt-welded cast steel globe valves, API 602 for small forged globe valves, BS 1873 for flanged globe valves, and ASME B16.34 for pressure-temperature ratings. ASME B16.5 is also referenced for flange design.',
        },
      },
      {
        question: { es: '¿Qué tamaños y materiales están disponibles?', en: 'What sizes and materials are available?' },
        answer: {
          es: 'Las válvulas de globo DHV están disponibles en diámetros de 2" a 24" y clases ANSI 150 a 2500. Los materiales incluyen acero al carbono (WCB), cromo-molibdeno (WC6, WC9) para alta temperatura, acero inoxidable (CF8M) y aleaciones especiales. Los asientos pueden ser integrales o renovables según la aplicación.',
          en: 'DHV globe valves are available in diameters from 2" to 24" and ANSI classes 150 to 2500. Materials include carbon steel (WCB), chrome-moly (WC6, WC9) for high temperature, stainless steel (CF8M), and special alloys. Seats can be integral or renewable depending on the application.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'estandar',
        es: { name: 'Globo Estándar', desc: 'Válvulas de globo estándar para regulación de flujo en líneas de proceso y servicios generales.' },
        en: { name: 'Standard Globe', desc: 'Standard globe valves for flow regulation in process lines and general services.' },
        manufacturers: ['dhv'],
        image: '/images/products/dhv-globe.jpg',
        sizes: '2" to 24"',
        pressureClasses: 'ANSI 150-2500',
      },
    ],
  },

  // B2 - Válvulas Check
  'valvulas-check': {
    slug: 'valvulas-check',
    es: { name: 'Válvulas Check o Retención', desc: 'Válvulas de retención para prevenir el reflujo en sistemas de bombeo, compresión y distribución.' },
    en: { name: 'Check / Non-Return Valves', desc: 'Check valves to prevent backflow in pumping, compression, and distribution systems.' },
    image: '/images/products/dhv-check.jpg',
    heroImage: '/images/products/dhv-forged-wide.jpg',
    sizes: '2" a 36"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['API 6D', 'ASME B16.34', 'API 594'],
    suppliers: ['dhv'],
    industries: ['oil-gas', 'energetico', 'privado'],
    services: ['ingenieria'],
    block: 'B',
    blockLabel: { es: 'Regulación y Retención', en: 'Regulation & Retention' },
    heroH1: {
      es: 'Válvulas Check: La Línea de Defensa Contra el Reflujo.',
      en: 'Check Valves: The Defense Line Against Backflow.',
    },
    heroH2: {
      es: 'Protección esencial contra el golpe de ariete y el reflujo en sistemas de bombeo y compresión. El "comodín" de seguridad que previene daños catastróficos en sus equipos.',
      en: 'Essential protection against water hammer and backflow in pumping and compression systems. The safety "wildcard" that prevents catastrophic damage to your equipment.',
    },
    ctaPrimary: { es: 'Ver Inventario de Check', en: 'View Check Valve Inventory' },
    ctaSecondary: { es: 'Consultar Especificaciones', en: 'Check Specifications' },
    definition: {
      es: 'Una válvula check (retención) permite el flujo en una sola dirección, cerrándose automáticamente cuando el flujo se invierte. Es una pieza fundamental de seguridad en sistemas de bombeo, estaciones de compresión y cualquier instalación donde el reflujo pueda dañar equipos o comprometer la seguridad del proceso.',
      en: 'A check valve allows flow in only one direction, closing automatically when flow reverses. It is a fundamental safety piece in pumping systems, compression stations, and any installation where backflow could damage equipment or compromise process safety.',
    },
    certChecklist: ['API 6D', 'ASME B16.34', 'API 594'],
    relatedBrands: ['dhv'],
    ctaFinal: {
      h2: { es: '¿Requiere protección contra reflujo en sus sistemas de bombeo?', en: 'Need backflow protection in your pumping systems?' },
      subtexto: { es: 'Consulte a nuestros ingenieros para el dimensionamiento exacto y disponibilidad inmediata en stock.', en: 'Consult our engineers for exact sizing and immediate stock availability.' },
      cta: { es: 'Contactar a Ventas Técnicas', en: 'Contact Technical Sales' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula check o de retención?', en: 'What is a check valve or non-return valve?' },
        answer: {
          es: 'Es una válvula que permite el flujo del fluido en una sola dirección, cerrándose automáticamente cuando el flujo se invierte. No requiere operación manual ni actuador: la propia presión diferencial del sistema la abre y la cierra. Es una pieza fundamental de seguridad en sistemas de bombeo, compresión y distribución.',
          en: 'It is a valve that allows fluid flow in only one direction, closing automatically when flow reverses. It requires no manual operation or actuator: the system differential pressure itself opens and closes it. It is a fundamental safety component in pumping, compression, and distribution systems.',
        },
      },
      {
        question: { es: '¿Qué tipos de válvulas check existen?', en: 'What types of check valves exist?' },
        answer: {
          es: 'Los principales tipos son: swing check (bisagra), con un disco que pivota y ofrece baja caída de presión; dual plate (doble disco o wafer), compacta y liviana para instalación entre bridas; y piston check (pistón), con cierre rápido para servicios de alta presión y vapor donde se necesita minimizar el golpe de ariete.',
          en: 'The main types are: swing check, with a pivoting disc offering low pressure drop; dual plate (double disc or wafer), compact and lightweight for installation between flanges; and piston check, with fast closure for high-pressure and steam services where water hammer must be minimized.',
        },
      },
      {
        question: { es: '¿Cuándo se necesita una válvula check?', en: 'When is a check valve needed?' },
        answer: {
          es: 'Se necesita en toda instalación donde el flujo inverso pueda causar daños: aguas abajo de bombas (para prevenir retorno al paro), en sistemas de compresión, en paralelo con válvulas de alivio, en cabezales de distribución y en cualquier punto donde la inversión de flujo comprometa la seguridad del proceso o dañe equipos rotativos.',
          en: 'It is needed in any installation where reverse flow could cause damage: downstream of pumps (to prevent backflow at shutdown), in compression systems, in parallel with relief valves, in distribution headers, and at any point where flow reversal could compromise process safety or damage rotating equipment.',
        },
      },
      {
        question: { es: '¿Qué normas aplican a las válvulas check?', en: 'What standards apply to check valves?' },
        answer: {
          es: 'Las principales normas son API 594 para válvulas check tipo wafer y dual plate, API 6D para válvulas de ductos incluyendo check de tipo swing, ASME B16.34 para los límites de presión-temperatura y API 600 para diseño de válvulas de cuerpo fundido. Para servicio amargo se aplica NACE MR0175.',
          en: 'The main standards are API 594 for wafer and dual plate check valves, API 6D for pipeline valves including swing check type, ASME B16.34 for pressure-temperature ratings, and API 600 for cast body valve design. NACE MR0175 applies for sour service.',
        },
      },
      {
        question: { es: '¿Cómo seleccionar la válvula check correcta?', en: 'How to select the right check valve?' },
        answer: {
          es: 'La selección depende de la velocidad de cierre requerida (el piston check cierra más rápido que el swing), el espacio disponible (el dual plate es más compacto), la caída de presión permisible (el swing ofrece menor restricción), y el servicio (presión, temperatura, fluido). Para sistemas con riesgo de golpe de ariete, se recomienda check con resorte o amortiguador.',
          en: 'Selection depends on required closing speed (piston check closes faster than swing), available space (dual plate is more compact), permissible pressure drop (swing offers less restriction), and service conditions (pressure, temperature, fluid). For systems with water hammer risk, spring-loaded or dampened check valves are recommended.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'swing',
        es: { name: 'Check Tipo Swing', desc: 'Válvulas check tipo swing (bisagra) para líneas de proceso con baja caída de presión.' },
        en: { name: 'Swing Check', desc: 'Swing check valves for process lines with low pressure drop.' },
        manufacturers: ['dhv'],
        image: '/images/products/dhv-check.jpg',
        sizes: '2" to 36"',
        pressureClasses: 'ANSI 150-2500',
      },
      {
        slug: 'piston',
        es: { name: 'Check Tipo Pistón', desc: 'Válvulas check tipo pistón para servicios de alta presión y vapor.' },
        en: { name: 'Piston Check', desc: 'Piston check valves for high-pressure and steam services.' },
        manufacturers: ['dhv'],
        image: '/images/products/dhv-forged.png',
        sizes: '2" to 16"',
        pressureClasses: 'ANSI 150-2500',
      },
    ],
  },

  // =========================================================================
  // BLOCK C: CONTROL, SEGURIDAD Y AUTOMATIZACION
  // =========================================================================

  // C1 - Válvulas de Control
  'valvulas-control': {
    slug: 'valvulas-control',
    es: { name: 'Válvulas de Control', desc: 'Válvulas de control de proceso con posicionadores inteligentes para la regulación precisa de flujo, presión y temperatura.' },
    en: { name: 'Control Valves', desc: 'Process control valves with smart positioners for precise regulation of flow, pressure, and temperature.' },
    image: '/images/products/masoneilan-control.jpg',
    heroImage: '/images/products/masoneilan-camflex.jpg',
    sizes: '1" a 24"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['IEC 61131', 'IEC 61511', 'ASME B16.34', 'ISA 75.01'],
    suppliers: ['masoneilan'],
    industries: ['energetico', 'privado', 'oil-gas'],
    services: ['automatizacion'],
    block: 'C',
    blockLabel: { es: 'Control, Seguridad y Automatización', en: 'Control, Safety & Automation' },
    heroH1: {
      es: 'Válvulas de Control: Precisión Absoluta en la Regulación de Sus Procesos.',
      en: 'Control Valves: Absolute Precision in Your Process Regulation.',
    },
    heroH2: {
      es: 'Instrumentación inteligente y posicionadores de última generación para el control preciso de flujo, presión y temperatura. La tecnología que estabiliza sus operaciones más críticas.',
      en: 'Intelligent instrumentation and state-of-the-art positioners for precise flow, pressure, and temperature control. The technology that stabilizes your most critical operations.',
    },
    ctaPrimary: { es: 'Ver Catálogo Masoneilan', en: 'View Masoneilan Catalog' },
    ctaSecondary: { es: 'Solicitar Diagnóstico de Control', en: 'Request Control Diagnosis' },
    definition: {
      es: 'Una válvula de control es un actuador final en un lazo de regulación automática. Recibe una señal del sistema de control (4-20 mA, HART, Fieldbus) y ajusta su apertura para mantener la variable de proceso (flujo, presión, temperatura) en el valor deseado. Son el corazón de la automatización industrial.',
      en: 'A control valve is a final actuator in an automatic control loop. It receives a signal from the control system (4-20 mA, HART, Fieldbus) and adjusts its opening to maintain the process variable (flow, pressure, temperature) at the desired value. They are the heart of industrial automation.',
    },
    certChecklist: ['IEC 61511', 'ASME B16.34', 'SIL 3', 'ISA 75.01'],
    relatedBrands: ['masoneilan'],
    ctaFinal: {
      h2: { es: '¿Enfrenta problemas de cavitación o inestabilidad en su proceso?', en: 'Facing cavitation or instability issues in your process?' },
      subtexto: { es: 'Comparta sus condiciones de operación con nuestros especialistas y reciba una propuesta de dimensionamiento exacto.', en: 'Share your operating conditions with our specialists and receive an exact sizing proposal.' },
      cta: { es: 'Contactar a un Ingeniero de Control', en: 'Contact a Control Engineer' },
    },
    automationBanner: {
      h2: { es: 'Un lazo de control perfecto requiere integración total.', en: 'A perfect control loop requires total integration.' },
      body: { es: 'Una válvula de control excepcional no opera sola. A través de nuestra División de Automatización, entregamos ensambles calibrados que incluyen Preparación de Aire Neumático (Air Preparation de Versa) y Calibración de lazo (Loop Tuning) para que la respuesta de la válvula a la señal de control sea instantánea y sin oscilaciones.', en: 'An exceptional control valve does not operate alone. Through our Automation Division, we deliver calibrated assemblies that include Pneumatic Air Preparation (Versa Air Preparation) and Loop Tuning so that the valve\'s response to the control signal is instantaneous and oscillation-free.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula de control?', en: 'What is a control valve?' },
        answer: {
          es: 'Es el elemento final de un lazo de control automático que modula su apertura para mantener una variable de proceso (flujo, presión, temperatura, nivel) en un valor deseado. Recibe una señal del sistema de control distribuido (DCS) o PLC, típicamente 4-20 mA o protocolos digitales como HART y Foundation Fieldbus, y ajusta proporcionalmente la posición del obturador.',
          en: 'It is the final element of an automatic control loop that modulates its opening to maintain a process variable (flow, pressure, temperature, level) at a desired value. It receives a signal from the distributed control system (DCS) or PLC, typically 4-20 mA or digital protocols like HART and Foundation Fieldbus, and proportionally adjusts the plug position.',
        },
      },
      {
        question: { es: '¿Cómo funciona la regulación proporcional en una válvula de control?', en: 'How does proportional regulation work in a control valve?' },
        answer: {
          es: 'El posicionador inteligente recibe la señal del controlador y ajusta la presión neumática al actuador para posicionar el obturador con precisión. La relación entre la señal de entrada y el caudal resultante se define por la característica de flujo inherente (lineal, igual porcentaje o apertura rápida), seleccionada según la dinámica del proceso a controlar.',
          en: 'The smart positioner receives the controller signal and adjusts pneumatic pressure to the actuator to precisely position the plug. The relationship between input signal and resulting flow rate is defined by the inherent flow characteristic (linear, equal percentage, or quick opening), selected based on the dynamics of the process to be controlled.',
        },
      },
      {
        question: { es: '¿Qué es Masoneilan y por qué es relevante en válvulas de control?', en: 'What is Masoneilan and why is it relevant in control valves?' },
        answer: {
          es: 'Masoneilan (Baker Hughes) es uno de los fabricantes líderes mundiales de válvulas de control con más de 100 anos de experiencia. Su portafolio incluye las series 41005 (globo), Camflex (rotativa excéntrica) y variantes antisurge para compresores. IPSA es representante de Masoneilan en México, ofreciendo sizing, selección y soporte postventa.',
          en: 'Masoneilan (Baker Hughes) is one of the world leading control valve manufacturers with over 100 years of experience. Their portfolio includes the 41005 series (globe), Camflex (eccentric rotary), and anti-surge variants for compressors. IPSA is a Masoneilan representative in Mexico, offering sizing, selection, and after-sales support.',
        },
      },
      {
        question: { es: '¿Cómo se dimensiona una válvula de control con Cv?', en: 'How is a control valve sized using Cv?' },
        answer: {
          es: 'El coeficiente de flujo Cv indica los galones de agua por minuto que pasan a través de la válvula con una caída de presión de 1 psi. Se calcula a partir de las condiciones de operación (caudal, presión aguas arriba/abajo, temperatura, densidad del fluido) usando las ecuaciones de ISA 75.01/IEC 60534. El Cv requerido se compara con la curva del fabricante para seleccionar el tamaño correcto.',
          en: 'The flow coefficient Cv indicates the gallons of water per minute flowing through the valve with a 1 psi pressure drop. It is calculated from operating conditions (flow rate, upstream/downstream pressure, temperature, fluid density) using ISA 75.01/IEC 60534 equations. The required Cv is compared against the manufacturer curve to select the correct size.',
        },
      },
      {
        question: { es: '¿En qué aplicaciones se usan válvulas de control?', en: 'What applications use control valves?' },
        answer: {
          es: 'Se usan en cualquier proceso que requiera regulación continua: control de nivel en separadores y torres, regulación de presión en líneas de gas, control de temperatura en intercambiadores de calor, protección antisurge en compresores, dosificación en procesos químicos y control de flujo en calderas. Son esenciales en refinerías, petroquímicas, plantas de generación y procesos farmacéuticos.',
          en: 'They are used in any process requiring continuous regulation: level control in separators and towers, pressure regulation in gas lines, temperature control in heat exchangers, anti-surge protection in compressors, dosing in chemical processes, and flow control in boilers. They are essential in refineries, petrochemicals, power plants, and pharmaceutical processes.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'globo-control',
        es: { name: 'Control Tipo Globo', desc: 'Válvulas de control tipo globo para regulación precisa en servicios de vapor, líquidos y gases.' },
        en: { name: 'Globe Control Valve', desc: 'Globe-type control valves for precise regulation in steam, liquid, and gas services.' },
        manufacturers: ['masoneilan'],
        image: '/images/products/masoneilan-control.jpg',
        sizes: '1" to 24"',
      },
      {
        slug: 'rotativas',
        es: { name: 'Control Rotativas', desc: 'Válvulas de control rotativas (mariposa, bola V) para alto caudal y respuesta rápida.' },
        en: { name: 'Rotary Control Valve', desc: 'Rotary control valves (butterfly, V-ball) for high flow and fast response.' },
        manufacturers: ['masoneilan'],
        image: '/images/products/masoneilan-camflex.jpg',
      },
    ],
  },

  // C2 - Válvulas de Seguridad
  'valvulas-seguridad': {
    slug: 'valvulas-seguridad',
    es: { name: 'Válvulas de Seguridad, Alivio o Relevo', desc: 'Válvulas de alivio de presión para la protección de equipos y procesos contra sobrepresiones catastróficas.' },
    en: { name: 'Safety, Relief & Pressure Relief Valves', desc: 'Pressure relief valves for equipment and process protection against catastrophic overpressure.' },
    image: '/images/products/consolidated-safety.jpg',
    heroImage: '/images/products/df-hipps.jpg',
    sizes: '1" a 12"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['ASME Section VIII', 'API 520', 'API 526', 'API 527'],
    suppliers: ['consolidated'],
    industries: ['energetico', 'oil-gas'],
    services: ['ingenieria'],
    block: 'C',
    blockLabel: { es: 'Control, Seguridad y Automatización', en: 'Control, Safety & Automation' },
    heroH1: {
      es: 'Válvulas de Seguridad: La Última Línea de Defensa de Sus Activos.',
      en: 'Safety Valves: The Last Line of Defense for Your Assets.',
    },
    heroH2: {
      es: 'Protección certificada contra sobrepresión bajo los estándares ASME más estrictos. Tecnología Consolidated probada en las calderas, recipientes y líneas de mayor exigencia del sector energético.',
      en: 'Certified overpressure protection under the most stringent ASME standards. Consolidated technology proven in the most demanding boilers, vessels, and lines in the energy sector.',
    },
    ctaPrimary: { es: 'Ver Sistemas de Alivio', en: 'View Relief Systems' },
    ctaSecondary: { es: 'Solicitar Auditoría de Seguridad', en: 'Request Safety Audit' },
    definition: {
      es: 'Una válvula de seguridad (o de alivio de presión) se abre automáticamente cuando la presión del sistema excede un valor predeterminado (set pressure), aliviando el exceso de presión para proteger el equipo y el personal. Es la última barrera física contra una explosión o una falla catastrófica.',
      en: 'A safety valve (or pressure relief valve) automatically opens when system pressure exceeds a predetermined value (set pressure), relieving excess pressure to protect equipment and personnel. It is the last physical barrier against an explosion or catastrophic failure.',
    },
    certChecklist: ['ASME Section VIII', 'API 520', 'API 526', 'NACE MR0175'],
    relatedBrands: ['consolidated'],
    ctaFinal: {
      h2: { es: '¿Su planta cuenta con la protección de sobrepresión adecuada?', en: 'Does your plant have adequate overpressure protection?' },
      subtexto: { es: 'Hable con un especialista para auditar sus sistemas de alivio o cotizar refaccionamiento inmediato.', en: 'Talk to a specialist to audit your relief systems or quote immediate refurbishment.' },
      cta: { es: 'Solicitar Auditoría de Seguridad', en: 'Request Safety Audit' },
    },
    automationBanner: {
      h2: { es: 'Calibración exacta: La diferencia entre un paro y un desastre.', en: 'Exact calibration: The difference between a shutdown and a disaster.' },
      body: { es: 'El valor de una válvula de seguridad reside en su precisión. Nuestros especialistas no solo suministran el equipo, sino que garantizan su correcta integración: Calibración milimétrica del Set Point y ensamble de válvulas de alivio Versa en paquetes de preparación de aire para entregar tableros de control blindados.', en: 'The value of a safety valve lies in its precision. Our specialists not only supply the equipment but guarantee its correct integration: Millimetric Set Point calibration and assembly of Versa relief valves in air preparation packages to deliver armored control panels.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula de seguridad?', en: 'What is a safety valve?' },
        answer: {
          es: 'Es un dispositivo de protección que se abre automáticamente cuando la presión del sistema excede un valor predeterminado (set pressure o presión de ajuste), aliviando el exceso de presión hacia un sistema de desfogue o la atmósfera. Es la última barrera física contra una explosión o falla catastrófica en recipientes a presión, calderas y líneas de proceso.',
          en: 'It is a protective device that opens automatically when system pressure exceeds a predetermined value (set pressure), relieving excess pressure to a flare system or atmosphere. It is the last physical barrier against an explosion or catastrophic failure in pressure vessels, boilers, and process lines.',
        },
      },
      {
        question: { es: '¿Cuál es la diferencia entre válvula de seguridad, de alivio y de relevo?', en: 'What is the difference between safety, relief, and pressure relief valves?' },
        answer: {
          es: 'La válvula de seguridad (safety valve) se abre completamente con un pop rápido y se usa en servicio de gas/vapor. La válvula de alivio (relief valve) se abre gradualmente proporcionalmente a la sobrepresión y se usa en servicio de líquidos. La válvula de relevo de presión (PRV) es el término genérico que engloba ambas. La selección depende del fluido y del perfil de apertura requerido.',
          en: 'A safety valve opens fully with a quick pop and is used in gas/steam service. A relief valve opens gradually in proportion to overpressure and is used in liquid service. A pressure relief valve (PRV) is the generic term encompassing both. Selection depends on the fluid and required opening profile.',
        },
      },
      {
        question: { es: '¿Cuándo son obligatorias las válvulas de seguridad?', en: 'When are safety valves mandatory?' },
        answer: {
          es: 'Son obligatorias por código ASME BPVC (Boiler and Pressure Vessel Code) en todo recipiente a presión, caldera, intercambiador de calor y línea que pueda quedar sometida a presiones superiores a su presión de diseño. Las regulaciones OSHA, NOM en México y la directiva PED en Europa también exigen protección de sobrepresión certificada.',
          en: 'They are mandatory per ASME BPVC (Boiler and Pressure Vessel Code) on every pressure vessel, boiler, heat exchanger, and line that may be subjected to pressures above its design pressure. OSHA regulations, NOM in Mexico, and the PED directive in Europe also require certified overpressure protection.',
        },
      },
      {
        question: { es: '¿Qué normas aplican a las válvulas de seguridad?', en: 'What standards apply to safety valves?' },
        answer: {
          es: 'Las principales normas son API 520 para el dimensionamiento y selección, API 526 para las dimensiones estándar (orificio y brida), API 527 para pruebas de hermeticidad del asiento, ASME Section VIII para requisitos de recipientes a presión y ASME Section I para calderas. La certificación del National Board (NB) valida que el fabricante cumple ASME.',
          en: 'The main standards are API 520 for sizing and selection, API 526 for standard dimensions (orifice and flange), API 527 for seat tightness testing, ASME Section VIII for pressure vessel requirements, and ASME Section I for boilers. National Board (NB) certification validates that the manufacturer meets ASME requirements.',
        },
      },
      {
        question: { es: '¿Cómo se dimensiona una válvula de seguridad?', en: 'How is a safety valve sized?' },
        answer: {
          es: 'El dimensionamiento se realiza conforme a API 520 Part I, calculando el área de orificio efectiva requerida en función del fluido (gas, vapor, líquido), la presión de ajuste, la contrapresión, la temperatura y el caudal de alivio requerido. El orificio calculado se compara con los orificio estándar de API 526 (D, E, F, G, H, J, K, L, M, N, P, Q, R, T) para seleccionar el tamaño comercial adecuado.',
          en: 'Sizing is performed per API 520 Part I, calculating the required effective orifice area based on the fluid (gas, steam, liquid), set pressure, backpressure, temperature, and required relief flow rate. The calculated orifice is compared against API 526 standard orifices (D, E, F, G, H, J, K, L, M, N, P, Q, R, T) to select the appropriate commercial size.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'convencional',
        es: { name: 'Seguridad Convencional', desc: 'Válvulas de seguridad convencionales para servicios de vapor, aire y gases.' },
        en: { name: 'Conventional Safety', desc: 'Conventional safety valves for steam, air, and gas services.' },
        manufacturers: ['consolidated'],
        image: '/images/products/consolidated-safety.jpg',
        sizes: '1" to 12"',
      },
      {
        slug: 'balanceada',
        es: { name: 'Seguridad Balanceada', desc: 'Válvulas de seguridad con fuelle de balance para servicio con contrapresión variable.' },
        en: { name: 'Balanced Safety', desc: 'Safety valves with balanced bellows for service with variable backpressure.' },
        manufacturers: ['consolidated'],
        image: '/images/products/consolidated-safety.jpg',
      },
    ],
  },

  // C3 - Válvulas Neumáticas y Solenoides
  'valvulas-neumaticas-solenoides': {
    slug: 'valvulas-neumaticas-solenoides',
    es: { name: 'Válvulas Neumáticas y Solenoides', desc: 'Válvulas solenoides y de control direccional para la automatización precisa de actuadores y sistemas de seguridad.' },
    en: { name: 'Pneumatic & Solenoid Valves', desc: 'Solenoid and directional control valves for precise actuator automation and safety systems.' },
    image: '/images/products/versa-e4-solenoid.png',
    heroImage: '/images/products/versa-e8z-solenoid.png',
    sizes: '1/4" a 2"',
    pressureClasses: 'Hasta 6000 psi',
    standards: ['NAMUR', 'VDI/VDE 3845', 'IEC 61508', 'ATEX'],
    suppliers: ['versa'],
    industries: ['oil-gas', 'energetico', 'privado'],
    services: ['automatizacion'],
    block: 'C',
    blockLabel: { es: 'Control, Seguridad y Automatización', en: 'Control, Safety & Automation' },
    heroH1: {
      es: 'Válvulas Neumáticas y Solenoides: El Sistema Nervioso de Su Automatización.',
      en: 'Pneumatic & Solenoid Valves: The Nervous System of Your Automation.',
    },
    heroH2: {
      es: 'Control direccional de alta confiabilidad diseñado para operar sin fallas en ambientes corrosivos y explosivos. Certificación SIL 3 para la seguridad funcional de sus procesos automatizados.',
      en: 'High-reliability directional control designed to operate without failures in corrosive and explosive environments. SIL 3 certification for the functional safety of your automated processes.',
    },
    ctaPrimary: { es: 'Consultar Stock Versa', en: 'Check Versa Stock' },
    ctaSecondary: { es: 'Solicitar Ingeniería de Automatización', en: 'Request Automation Engineering' },
    definition: {
      es: 'Una válvula solenoide es un dispositivo electromecánico que utiliza un campo electromagnético para abrir o cerrar el paso de un fluido piloto (aire o hidráulico). Son el componente esencial para el control remoto de actuadores en procesos automatizados, sistemas de paro de emergencia (ESD) y aplicaciones de seguridad funcional.',
      en: 'A solenoid valve is an electromechanical device that uses an electromagnetic field to open or close the passage of a pilot fluid (air or hydraulic). They are the essential component for remote actuator control in automated processes, emergency shutdown (ESD) systems, and functional safety applications.',
    },
    certChecklist: ['SIL 3', 'ATEX', 'IEC 61508', 'NAMUR'],
    relatedBrands: ['versa'],
    ctaFinal: {
      h2: { es: '¿Requiere asegurar el control de sus actuadores críticos?', en: 'Need to secure the control of your critical actuators?' },
      subtexto: { es: 'Hable con un Ingeniero de Aplicación para definir la configuración de bobina y sellos adecuada para su zona.', en: 'Talk to an Application Engineer to define the right coil and seal configuration for your zone.' },
      cta: { es: 'Solicitar Asesoría en Automatización', en: 'Request Automation Advice' },
    },
    automationBanner: {
      h2: { es: 'No solo entregamos el componente, integramos la solución.', en: 'We don\'t just deliver the component, we integrate the solution.' },
      body: { es: 'Nuestra División de Automatización diseña y ensambla tableros de control y paneles electrohidráulicos utilizando estos componentes Versa, entregando equipos con Pruebas de Aceptación en Fábrica (FAT) documentadas.', en: 'Our Automation Division designs and assembles control panels and electrohydraulic panels using these Versa components, delivering equipment with documented Factory Acceptance Tests (FAT).' },
    },
    faqs: [
      {
        question: { es: '¿Qué es una válvula solenoide?', en: 'What is a solenoid valve?' },
        answer: {
          es: 'Es un dispositivo electromecánico que utiliza una bobina electromagnética para abrir o cerrar el paso de un fluido piloto (generalmente aire comprimido o aceite hidráulico). Al energizar la bobina, el émbolo se desplaza y permite o bloquea el flujo. Son el componente esencial para el control remoto de actuadores neumáticos e hidráulicos en sistemas automatizados y de seguridad.',
          en: 'It is an electromechanical device that uses an electromagnetic coil to open or close the passage of a pilot fluid (typically compressed air or hydraulic oil). When the coil is energized, the plunger moves and allows or blocks flow. They are the essential component for remote control of pneumatic and hydraulic actuators in automated and safety systems.',
        },
      },
      {
        question: { es: '¿Qué es el control direccional en válvulas neumáticas?', en: 'What is directional control in pneumatic valves?' },
        answer: {
          es: 'El control direccional define hacia dónde se dirige el fluido piloto para mover el actuador. Se especifica con nomenclatura de vías y posiciones: una válvula 3/2 tiene 3 puertos y 2 posiciones (para actuadores de simple efecto), y una 5/2 tiene 5 puertos y 2 posiciones (para actuadores de doble efecto). La configuración determina si el actuador falla abierto, cerrado o en última posición.',
          en: 'Directional control defines where the pilot fluid is directed to move the actuator. It is specified with port and position nomenclature: a 3/2 valve has 3 ports and 2 positions (for single-acting actuators), and a 5/2 has 5 ports and 2 positions (for double-acting actuators). The configuration determines whether the actuator fails open, closed, or in last position.',
        },
      },
      {
        question: { es: '¿Cuáles son las ventajas de la marca Versa?', en: 'What are the advantages of the Versa brand?' },
        answer: {
          es: 'Versa Valves (USA) se distingue por su construcción 100% en acero inoxidable 316 y aluminio anodizado, resistente a ambientes marinos y corrosivos. Ofrece certificaciones SIL 3 (IEC 61508), ATEX/IECEx para zonas clasificadas, y cumple NAMUR para montaje directo en actuadores. Sus tiempos de respuesta están entre los más rápidos del mercado (<50 ms).',
          en: 'Versa Valves (USA) stands out for its 100% 316 stainless steel and anodized aluminum construction, resistant to marine and corrosive environments. It offers SIL 3 certification (IEC 61508), ATEX/IECEx for classified zones, and meets NAMUR for direct actuator mounting. Its response times are among the fastest in the market (<50 ms).',
        },
      },
      {
        question: { es: '¿En qué aplicaciones de automatización se usan las válvulas solenoides?', en: 'What automation applications use solenoid valves?' },
        answer: {
          es: 'Se usan como piloto de actuadores neumáticos e hidráulicos en sistemas ESD (paro de emergencia), como válvulas de desfogue en paneles de control, en sistemas de preparación de aire (filtro-regulador-solenoide), en secuencias de lógica neumática y como elemento de disparo en sistemas instrumentados de seguridad (SIS) certificados SIL.',
          en: 'They are used as pilots for pneumatic and hydraulic actuators in ESD (emergency shutdown) systems, as vent valves in control panels, in air preparation systems (filter-regulator-solenoid), in pneumatic logic sequences, and as trip elements in SIL-certified Safety Instrumented Systems (SIS).',
        },
      },
      {
        question: { es: '¿Qué son las certificaciones NAMUR en válvulas solenoides?', en: 'What are NAMUR certifications in solenoid valves?' },
        answer: {
          es: 'NAMUR (VDI/VDE 3845) es un estándar de interfaz mecánica que permite el montaje directo de la válvula solenoide sobre el actuador sin tubería intermedia, reduciendo puntos de fuga y tiempos de respuesta. Las válvulas Versa NAMUR se montan directamente sobre actuadores Perar y otros, simplificando la instalación y mejorando la confiabilidad del paquete automatizado.',
          en: 'NAMUR (VDI/VDE 3845) is a mechanical interface standard that allows direct mounting of the solenoid valve on the actuator without intermediate piping, reducing leak points and response times. Versa NAMUR valves mount directly on Perar actuators and others, simplifying installation and improving the reliability of the automated package.',
        },
      },
      {
        question: { es: '¿Qué tamaños y presiones manejan las válvulas solenoides Versa?', en: 'What sizes and pressures do Versa solenoid valves handle?' },
        answer: {
          es: 'Las válvulas Versa están disponibles en conexiones de 1/4" a 2" NPT, con presiones de trabajo hasta 6,000 psi en modelos hidráulicos y hasta 300 psi en modelos neumáticos. Los cuerpos pueden ser de acero inoxidable 316, aluminio, latón o acero al carbono, con bobinas para voltajes de 24 VDC, 120 VAC y 240 VAC, disponibles en versiones a prueba de explosión.',
          en: 'Versa valves are available in 1/4" to 2" NPT connections, with working pressures up to 6,000 psi in hydraulic models and up to 300 psi in pneumatic models. Bodies can be 316 stainless steel, aluminum, brass, or carbon steel, with coils for 24 VDC, 120 VAC, and 240 VAC voltages, available in explosion-proof versions.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'solenoide-serie-v',
        es: { name: 'Solenoide Serie V', desc: 'Válvulas solenoides Serie V de Versa: estándar de la industria para control de actuadores en configuraciones de 3 y 4 vías.' },
        en: { name: 'Series V Solenoid', desc: 'Versa Series V solenoid valves: industry standard for actuator control in 3 and 4-way configurations.' },
        manufacturers: ['versa'],
        image: '/images/products/versa-e4-solenoid.png',
      },
      {
        slug: 'piloto-control',
        es: { name: 'Válvulas Piloto y Control Direccional', desc: 'Control neumático e hidráulico de alta velocidad con reset manual o automático para sistemas de seguridad.' },
        en: { name: 'Pilot & Directional Control Valves', desc: 'High-speed pneumatic and hydraulic control with manual or automatic reset for safety systems.' },
        manufacturers: ['versa'],
        image: '/images/products/versa-namur.webp',
      },
      {
        slug: 'paquete-aire-modular',
        es: { name: 'Paquetes de Aire Modular (MAP)', desc: 'Estaciones de control compactas que integran filtros, reguladores y válvulas en un solo bloque.' },
        en: { name: 'Modular Air Packages (MAP)', desc: 'Compact control stations integrating filters, regulators, and valves in a single block.' },
        manufacturers: ['versa'],
        image: '/images/products/versa-dmap.png',
      },
    ],
  },

  // =========================================================================
  // BLOCK D: SOLUCIONES INTEGRADAS
  // =========================================================================

  // D1 - Válvulas Automatizadas (Ensambles)
  'valvulas-automatizadas': {
    slug: 'valvulas-automatizadas',
    es: { name: 'Válvulas Automatizadas', desc: 'Ensambles completos de válvula + actuador + accesorios de control. Paquetes listos para instalar con ingeniería integrada.' },
    en: { name: 'Automated Valves', desc: 'Complete valve + actuator + control accessories assemblies. Ready-to-install packages with integrated engineering.' },
    image: '/images/products/df-trunnion-automated.jpg',
    heroImage: '/images/products/df-automated-valve.jpg',
    sizes: '1" a 48"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['API 6D', 'IEC 61511', 'ISA 75.01', 'NAMUR'],
    suppliers: ['perar', 'della-foglia', 'versa', 'masoneilan'],
    industries: ['oil-gas', 'energetico', 'privado'],
    services: ['automatizacion'],
    block: 'D',
    blockLabel: { es: 'Soluciones Integradas', en: 'Integrated Solutions' },
    heroH1: {
      es: 'Válvulas Automatizadas: Ingeniería Integrada Lista para Instalar.',
      en: 'Automated Valves: Integrated Engineering Ready to Install.',
    },
    heroH2: {
      es: 'Una válvula automatizada no es un producto individual, sino un ensamble de ingeniería. Combinamos el cuerpo mecánico, la fuerza motriz y el sistema nervioso en un paquete probado y certificado.',
      en: 'An automated valve is not an individual product but an engineering assembly. We combine the mechanical body, motive force, and nervous system into a tested and certified package.',
    },
    ctaPrimary: { es: 'Configurar Mi Paquete', en: 'Configure My Package' },
    ctaSecondary: { es: 'Hablar con un Ingeniero de Automatización', en: 'Talk to an Automation Engineer' },
    definition: {
      es: 'Una válvula automatizada es un ensamble de ingeniería compuesto por tres elementos fundamentales: la válvula de proceso (el cuerpo mecánico), el actuador (la fuerza motriz) y los accesorios de control (el sistema nervioso). Su propósito es permitir la operación remota, la regulación continua o el cierre seguro de un flujo sin intervención humana directa.',
      en: 'An automated valve is an engineering assembly composed of three fundamental elements: the process valve (mechanical body), the actuator (motive force), and the control accessories (nervous system). Its purpose is to enable remote operation, continuous regulation, or safe flow closure without direct human intervention.',
    },
    certChecklist: ['API 6D', 'IEC 61511', 'SIL 3', 'NAMUR', 'ATEX'],
    relatedBrands: ['perar', 'della-foglia', 'versa', 'masoneilan'],
    ctaFinal: {
      h2: { es: '¿Listo para automatizar su próximo proyecto crítico?', en: 'Ready to automate your next critical project?' },
      subtexto: { es: 'Hable con nuestros especialistas para el cálculo de torques y la selección del paquete de actuación adecuado.', en: 'Talk to our specialists for torque calculation and selection of the right actuation package.' },
      cta: { es: 'Cotizar Ensamble Automatizado', en: 'Quote Automated Assembly' },
    },
    automationBanner: {
      h2: { es: 'Validación total antes de la llegada a sitio.', en: 'Total validation before arrival at site.' },
      body: { es: 'En IPSA realizamos las Pruebas de Aceptación en Fábrica (FAT) en nuestro propio taller. Calibramos el conjunto completo para garantizar que la válvula abra y cierre exactamente en el tiempo requerido por su protocolo de seguridad.', en: 'At IPSA we perform Factory Acceptance Tests (FAT) in our own workshop. We calibrate the complete assembly to ensure the valve opens and closes exactly within the time required by your safety protocol.' },
    },
    faqs: [
      {
        question: { es: '¿Qué es un paquete de válvula automatizada?', en: 'What is an automated valve package?' },
        answer: {
          es: 'Es un ensamble de ingeniería que integra tres componentes fundamentales: la válvula de proceso (el cuerpo mecánico que controla el fluido), el actuador (la fuerza motriz que mueve la válvula) y los accesorios de control (solenoides, posicionadores, switches de posición, paneles de control). Se entrega probado y certificado como una unidad lista para instalar.',
          en: 'It is an engineering assembly integrating three fundamental components: the process valve (the mechanical body controlling the fluid), the actuator (the motive force moving the valve), and the control accessories (solenoids, positioners, position switches, control panels). It is delivered tested and certified as a ready-to-install unit.',
        },
      },
      {
        question: { es: '¿Qué componentes incluye un paquete automatizado?', en: 'What components does an automated package include?' },
        answer: {
          es: 'Un paquete típico incluye: la válvula (bola, compuerta, globo o control), el actuador (neumático, hidráulico o eléctrico), la válvula solenoide piloto (Versa), el posicionador o switch de posición, el panel de control con preparación de aire (filtro-regulador), instrumentación de diagnóstico y toda la bracketería y tubería de interconexión.',
          en: 'A typical package includes: the valve (ball, gate, globe, or control), the actuator (pneumatic, hydraulic, or electric), the pilot solenoid valve (Versa), the positioner or position switch, the control panel with air preparation (filter-regulator), diagnostic instrumentation, and all mounting brackets and interconnecting tubing.',
        },
      },
      {
        question: { es: '¿Qué tipos de actuadores se integran en los paquetes?', en: 'What types of actuators are integrated in the packages?' },
        answer: {
          es: 'Integramos actuadores hidráulicos Perar (scotch-yoke para alta presión y gran diámetro), actuadores neumáticos de cuarto de vuelta (rack and pinion) y de doble pistón (scotch-yoke), y actuadores eléctricos para operación remota sin suministro neumático. La selección depende del torque requerido, la velocidad de cierre, la disponibilidad de energía y los requisitos de seguridad funcional.',
          en: 'We integrate Perar hydraulic actuators (scotch-yoke for high pressure and large diameter), quarter-turn pneumatic actuators (rack and pinion) and double-piston (scotch-yoke), and electric actuators for remote operation without pneumatic supply. Selection depends on required torque, closing speed, available energy, and functional safety requirements.',
        },
      },
      {
        question: { es: '¿Qué es un actuador scotch-yoke?', en: 'What is a scotch-yoke actuator?' },
        answer: {
          es: 'Es un mecanismo que convierte el movimiento lineal de un pistón en movimiento rotatorio de 90 grados para operar válvulas de cuarto de vuelta. Su ventaja es que genera el máximo torque en las posiciones de apertura y cierre completo, exactamente donde la válvula más lo necesita. Los actuadores Perar utilizan este mecanismo con cilindros hidráulicos para torques de hasta 1,000,000 Nm.',
          en: 'It is a mechanism that converts the linear motion of a piston into 90-degree rotary motion to operate quarter-turn valves. Its advantage is generating maximum torque at the fully open and fully closed positions, exactly where the valve needs it most. Perar actuators use this mechanism with hydraulic cylinders for torques up to 1,000,000 Nm.',
        },
      },
      {
        question: { es: '¿Qué pruebas y certificaciones se realizan a los paquetes?', en: 'What testing and certification is performed on the packages?' },
        answer: {
          es: 'Cada paquete se somete a Pruebas de Aceptación en Fábrica (FAT) que incluyen: prueba de presión hidrostática del cuerpo, prueba de hermeticidad del asiento, verificación de torque del actuador, prueba de tiempo de carrera (stroke time), calibración de instrumentos y verificación del modo de falla seguro. Todo se documenta con certificados trazables conforme a API 6D e IEC 61511.',
          en: 'Each package undergoes Factory Acceptance Tests (FAT) that include: hydrostatic body pressure test, seat tightness test, actuator torque verification, stroke time test, instrument calibration, and fail-safe mode verification. Everything is documented with traceable certificates per API 6D and IEC 61511.',
        },
      },
      {
        question: { es: '¿Cuál es la ventaja de comprar un paquete integrado vs componentes separados?', en: 'What is the advantage of buying an integrated package vs separate components?' },
        answer: {
          es: 'El paquete integrado garantiza la compatibilidad mecánica y funcional entre todos los componentes, reduce tiempos de proyecto al eliminar la ingeniería de integración en campo, incluye pruebas FAT documentadas y ofrece un solo responsable técnico. Esto se traduce en menos errores de instalación, menor tiempo de puesta en marcha y una garantía unificada.',
          en: 'The integrated package guarantees mechanical and functional compatibility between all components, reduces project timelines by eliminating field integration engineering, includes documented FAT testing, and offers a single technical point of responsibility. This translates to fewer installation errors, shorter commissioning time, and a unified warranty.',
        },
      },
    ],
    subtypes: [
      {
        slug: 'paquete-esd',
        es: { name: 'Paquetes ESD', desc: 'Sistemas de paro de emergencia completos con válvula, actuador, solenoide y lógica de seguridad SIL 3.' },
        en: { name: 'ESD Packages', desc: 'Complete emergency shutdown systems with valve, actuator, solenoid, and SIL 3 safety logic.' },
        manufacturers: ['perar', 'versa'],
        image: '/images/products/df-trunnion-automated.jpg',
      },
      {
        slug: 'paquete-control',
        es: { name: 'Paquetes de Control', desc: 'Ensambles de válvula de control con posicionador inteligente y accesorios de diagnóstico integrados.' },
        en: { name: 'Control Packages', desc: 'Control valve assemblies with smart positioner and integrated diagnostic accessories.' },
        manufacturers: ['masoneilan'],
        image: '/images/products/masoneilan-41005.jpg',
      },
    ],
  },

};

// --- Convenience exports ---------------------------------------------------

/** Flat array of all product categories */
export const categoryList: ProductCategory[] = Object.values(productCategories);

/** Returns a flat array of all subtypes enriched with parent category info */
export function getAllSubtypes(): Array<
  SubType & { categorySlug: string; categoryName: { es: string; en: string } }
> {
  const result: Array<
    SubType & { categorySlug: string; categoryName: { es: string; en: string } }
  > = [];

  for (const category of categoryList) {
    for (const subtype of category.subtypes) {
      result.push({
        ...subtype,
        categorySlug: category.slug,
        categoryName: {
          es: category.es.name,
          en: category.en.name,
        },
      });
    }
  }

  return result;
}

/** Get categories by macro-block */
export function getCategoriesByBlock(block: MacroBlock): ProductCategory[] {
  return categoryList.filter((cat) => cat.block === block);
}
