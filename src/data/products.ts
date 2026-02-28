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
    logo: '/images/logos/dhv.svg',
    country: 'International',
    website: 'https://www.dhvindustries.com',
  },
  'della-foglia': {
    name: 'Della Foglia',
    slug: 'della-foglia',
    image: '/images/products/df-trunnion-automated.jpg',
    logo: '/images/logos/della-foglia.svg',
    country: 'Italia',
    website: 'https://www.dellafoglia.it',
  },
  perar: {
    name: 'Perar',
    slug: 'perar',
    image: '/images/products/df-trunnion-wb-coated.jpg',
    logo: '/images/logos/perar.svg',
    country: 'Italia',
    website: 'https://www.pfrvalves.com',
  },
  versa: {
    name: 'Versa Valves',
    slug: 'versa',
    image: '/images/products/versa-e4-solenoid.png',
    logo: '/images/logos/versa.svg',
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
    logo: '/images/logos/bakerhughes.svg',
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
    es: 'Portafolio de Productos IPSA: Soluciones de Alta Ingeniería en Control de Fluidos.',
    en: 'IPSA Product Portfolio: High-Engineering Solutions in Fluid Control.',
  },
  heroH2: {
    es: 'Desde el aislamiento confiable en líneas submarinas hasta el pilotaje neumático de precisión. Integramos las mejores marcas globales con el respaldo de nuestra División de Ingeniería y Automatización.',
    en: 'From reliable isolation in subsea lines to precision pneumatic piloting. We integrate the best global brands with the support of our Engineering and Automation Division.',
  },
  ctaPrimary: { es: 'Hablar con un Ingeniero', en: 'Talk to an Engineer' },
  ctaSecondary: { es: 'Descargar Catálogo General', en: 'Download General Catalog' },
};

// --- Product Categories (10 categories) ------------------------------------

export const productCategories: Record<string, ProductCategory> = {
  // =========================================================================
  // BLOCK A: AISLAMIENTO Y BLOQUEO
  // =========================================================================

  // A1 - Válvulas de Bola Trunnion
  'valvulas-bola-trunnion': {
    slug: 'valvulas-bola-trunnion',
    es: { name: 'Válvulas de Bola Trunnion', desc: 'Válvulas de bola con montaje trunnion para aislamiento crítico en ductos, estaciones de compresión y aplicaciones subsea. Cuerpo atornillado y soldado.' },
    en: { name: 'Trunnion Ball Valves', desc: 'Trunnion mounted ball valves for critical isolation in pipelines, compression stations, and subsea applications. Bolted and welded body.' },
    image: '/images/products/dhv-trunnion-2pc.jpg',
    sizes: '2" a 48"',
    pressureClasses: 'ANSI 150–2500',
    standards: ['API 6D', 'API 6A', 'API 6DSS', 'API 607', 'NACE MR0175', 'ISO 15848'],
    suppliers: ['perar', 'della-foglia', 'dhv'],
    industries: ['oil-gas', 'energetico'],
    services: ['automatizacion', 'ingenieria'],
    block: 'A',
    blockLabel: { es: 'Aislamiento y Bloqueo', en: 'Isolation & Shutoff' },
    heroH1: {
      es: 'Válvulas de Bola Trunnion: El Estándar de Aislamiento Crítico.',
      en: 'Trunnion Ball Valves: The Critical Isolation Standard.',
    },
    heroH2: {
      es: 'Ingeniería de aislamiento para los entornos más hostiles. Tecnología probada para alta presión, corrosión extrema y aplicaciones submarinas con certificación API 6D y 6DSS.',
      en: 'Isolation engineering for the most hostile environments. Proven technology for high pressure, extreme corrosion, and subsea applications with API 6D and 6DSS certification.',
    },
    ctaPrimary: { es: 'Consultar Inventario Trunnion', en: 'Check Trunnion Inventory' },
    ctaSecondary: { es: 'Solicitar Ingeniería de Aplicación', en: 'Request Application Engineering' },
    definition: {
      es: 'Una válvula de bola trunnion es un dispositivo de aislamiento donde la bola está soportada por un eje (trunnion) superior e inferior, reduciendo el torque de operación y permitiendo operar en diámetros y presiones mayores. Su diseño robusto la convierte en la elección principal para ductos de transporte, estaciones de compresión y aplicaciones donde la integridad del sello es crítica.',
      en: 'A trunnion ball valve is an isolation device where the ball is supported by upper and lower shafts (trunnion), reducing operating torque and enabling operation at larger diameters and higher pressures. Its robust design makes it the primary choice for transportation pipelines, compression stations, and applications where seal integrity is critical.',
    },
    pas: {
      problema: {
        es: 'Los proyectos de ductos y plataformas enfrentan tiempos de espera de hasta 40 semanas para obtener válvulas trunnion certificadas desde Europa.',
        en: 'Pipeline and platform projects face lead times of up to 40 weeks to obtain certified trunnion valves from Europe.',
      },
      agitacion: {
        es: 'Cada semana de retraso compromete los cronogramas de puesta en marcha y genera costos millonarios por inactividad de equipos y personal.',
        en: 'Every week of delay compromises commissioning schedules and generates millions in costs due to equipment and personnel downtime.',
      },
      solucion: {
        es: 'IPSA mantiene stock estratégico de válvulas Trunnion Perar y Della Foglia en México, con certificación API 6D/6DSS y trazabilidad completa.',
        en: 'IPSA maintains strategic stock of Perar and Della Foglia Trunnion valves in Mexico, with API 6D/6DSS certification and full traceability.',
      },
    },
    certChecklist: ['API 6D', 'API 6A', 'API 6DSS', 'NACE MR0175', 'ISO 15848', 'SIL 3'],
    relatedBrands: ['perar', 'della-foglia'],
    subtypes: [
      {
        slug: 'atornillado',
        es: { name: 'Trunnion Cuerpo Atornillado', desc: 'Válvulas trunnion con cuerpo atornillado (bolted body) para mantenimiento en campo sin necesidad de soldadura.' },
        en: { name: 'Bolted Body Trunnion', desc: 'Trunnion valves with bolted body for field maintenance without welding.' },
        manufacturers: ['perar', 'della-foglia', 'dhv'],
        image: '/images/products/dhv-trunnion-2pc.jpg',
        sizes: '2" to 48"',
        pressureClasses: 'ANSI 150-2500',
      },
      {
        slug: 'soldado',
        es: { name: 'Trunnion Cuerpo Soldado', desc: 'Válvulas trunnion con cuerpo totalmente soldado que elimina posibles puntos de fuga. Ideal para líneas de transmisión de gas y oleoductos.' },
        en: { name: 'Welded Body Trunnion', desc: 'Trunnion valves with fully welded body eliminating potential leak points. Ideal for gas transmission lines and pipelines.' },
        manufacturers: ['perar', 'della-foglia'],
        image: '/images/products/df-trunnion-wb.jpg',
        sizes: '2" to 48"',
        pressureClasses: 'ANSI 150-900',
      },
      {
        slug: 'subsea',
        es: { name: 'Trunnion Subsea (API 6DSS)', desc: 'Válvulas diseñadas para instalación en el fondo marino. Operación remota mediante ROV bajo presiones hidrostáticas extremas.' },
        en: { name: 'Subsea Trunnion (API 6DSS)', desc: 'Valves designed for seabed installation. Remote ROV operation under extreme hydrostatic pressures.' },
        manufacturers: ['della-foglia', 'perar'],
        image: '/images/products/df-product-3.jpg',
        standards: ['API 6DSS'],
      },
    ],
  },

  // A2 - Válvulas de Bola Flotante
  'valvulas-bola-flotante': {
    slug: 'valvulas-bola-flotante',
    es: { name: 'Válvulas de Bola Flotante', desc: 'Válvulas de bola flotante para aislamiento en líneas auxiliares, servicios generales e instrumentación. Diseño compacto y económico.' },
    en: { name: 'Floating Ball Valves', desc: 'Floating ball valves for isolation in auxiliary lines, general services, and instrumentation. Compact and economical design.' },
    image: '/images/products/dhv-floater.jpg',
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

  // A3 - Válvulas de Compuerta
  'valvulas-compuerta': {
    slug: 'valvulas-compuerta',
    es: { name: 'Válvulas de Compuerta', desc: 'Válvulas de compuerta para aislamiento principal en refinerías, ductos e infraestructura de generación. Flujo total sin obstrucción.' },
    en: { name: 'Gate Valves', desc: 'Gate valves for primary isolation in refineries, pipelines, and power generation infrastructure. Full bore unobstructed flow.' },
    image: '/images/products/dhv-gate.jpg',
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
        image: '/images/products/dhv-gate.jpg',
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
    es: { name: 'Válvulas Check', desc: 'Válvulas de retención para prevenir el reflujo en sistemas de bombeo, compresión y distribución.' },
    en: { name: 'Check Valves', desc: 'Check valves to prevent backflow in pumping, compression, and distribution systems.' },
    image: '/images/products/dhv-check.jpg',
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
        image: '/images/products/dhv-check.jpg',
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
        image: '/images/products/masoneilan-control.jpg',
      },
    ],
  },

  // C2 - Válvulas de Seguridad
  'valvulas-seguridad': {
    slug: 'valvulas-seguridad',
    es: { name: 'Válvulas de Seguridad', desc: 'Válvulas de alivio de presión para la protección de equipos y procesos contra sobrepresiones catastróficas.' },
    en: { name: 'Safety Valves', desc: 'Pressure relief valves for equipment and process protection against catastrophic overpressure.' },
    image: '/images/products/consolidated-safety.jpg',
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
        image: '/images/products/versa-namur.webp',
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
        image: '/images/products/masoneilan-control.jpg',
      },
    ],
  },

  // D2 - Válvulas de Bola Soldadas (Transmisión)
  'valvulas-bola-soldadas': {
    slug: 'valvulas-bola-soldadas',
    es: { name: 'Válvulas de Bola Soldadas', desc: 'Válvulas de bola con cuerpo totalmente soldado para líneas de transmisión de gas y oleoductos. Máxima integridad estructural.' },
    en: { name: 'Welded Ball Valves', desc: 'Ball valves with fully welded body for gas transmission lines and pipelines. Maximum structural integrity.' },
    image: '/images/products/df-trunnion-wb.jpg',
    sizes: '2" a 48"',
    pressureClasses: 'ANSI 150–900',
    standards: ['API 6D', 'NACE MR0175', 'ISO 15848'],
    suppliers: ['perar'],
    industries: ['oil-gas'],
    services: ['ingenieria'],
    block: 'D',
    blockLabel: { es: 'Soluciones Integradas', en: 'Integrated Solutions' },
    heroH1: {
      es: 'Válvulas de Bola Soldadas: Integridad Absoluta en Líneas de Transmisión.',
      en: 'Welded Ball Valves: Absolute Integrity in Transmission Lines.',
    },
    heroH2: {
      es: 'Cuerpo totalmente soldado que elimina puntos de fuga. La solución definitiva para líneas de transmisión de gas, oleoductos y aplicaciones donde la seguridad estructural es innegociable.',
      en: 'Fully welded body that eliminates leak points. The definitive solution for gas transmission lines, pipelines, and applications where structural safety is non-negotiable.',
    },
    ctaPrimary: { es: 'Consultar Inventario Soldadas', en: 'Check Welded Valve Inventory' },
    ctaSecondary: { es: 'Solicitar Ingeniería de Ductos', en: 'Request Pipeline Engineering' },
    definition: {
      es: 'Una válvula de bola soldada (fully welded body) es una válvula trunnion cuyo cuerpo está sellado permanentemente mediante soldadura, eliminando completamente las juntas bridadas y los posibles puntos de fuga en la envolvente de presión. Su construcción compacta y ligera la hace ideal para enterramiento directo y líneas de transmisión.',
      en: 'A welded ball valve (fully welded body) is a trunnion valve whose body is permanently sealed by welding, completely eliminating flanged joints and potential leak points on the pressure envelope. Its compact and lightweight construction makes it ideal for direct burial and transmission lines.',
    },
    certChecklist: ['API 6D', 'NACE MR0175', 'ISO 15848'],
    relatedBrands: ['perar'],
    subtypes: [
      {
        slug: 'enterramiento',
        es: { name: 'Soldada para Enterramiento', desc: 'Diseño con protección anticorrosiva para instalación subterránea directa en ductos de transmisión.' },
        en: { name: 'Buried Welded Valve', desc: 'Design with anti-corrosion protection for direct underground installation in transmission pipelines.' },
        manufacturers: ['perar'],
        image: '/images/products/df-trunnion-wb.jpg',
        sizes: '4" to 48"',
      },
      {
        slug: 'aerea',
        es: { name: 'Soldada Instalación Aérea', desc: 'Configuración para instalación aérea en estaciones de regulación y medición.' },
        en: { name: 'Above Ground Welded', desc: 'Configuration for above-ground installation at regulation and metering stations.' },
        manufacturers: ['perar'],
        image: '/images/products/df-trunnion-wb-coated.jpg',
        sizes: '2" to 36"',
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
