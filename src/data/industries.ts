// ---------------------------------------------------------------------------
// industries.ts – Restructured per UX Writing specs (Feb 2026)
// 3 industries: Oil & Gas, Energetico, Privado
// ---------------------------------------------------------------------------

export interface EcosystemBlock {
  title: { es: string; en: string };
  copy: { es: string; en: string };
  cta: { es: string; en: string };
  ctaLink: string;
}

export interface MatrixRow {
  proceso: { es: string; en: string };
  tecnologia: { es: string; en: string };
  marca: string;
  servicio: { es: string; en: string };
  servicioLink: string;
}

export interface IndustryPAS {
  h2: { es: string; en: string };
  body: { es: string; en: string };
  ctaInterconnect?: { es: string; en: string };
  ctaInterconnectLink?: string;
}

export interface InHouseDifferential {
  h2: { es: string; en: string };
  body: { es: string; en: string };
  cta: { es: string; en: string };
  ctaLink: string;
}

export interface Industry {
  slug: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  icon: string;
  image: string;
  // Hero
  heroH1: { es: string; en: string };
  heroH2: { es: string; en: string };
  ctaPrimary: { es: string; en: string };
  ctaPrimaryLink: string;
  ctaSecondary: { es: string; en: string };
  ctaSecondaryLink: string;
  // Hub card summary
  summary: { es: string; en: string };
  criticalSolution: { es: string; en: string };
  certifications: string[];
  ctaCard: { es: string; en: string };
  // PAS section
  pas: IndustryPAS;
  // Ecosystem
  ecosystem: EcosystemBlock[];
  // Matrix
  matrix: MatrixRow[];
  // In-House banner
  inHouseDifferential: InHouseDifferential;
  // CTA Final
  ctaFinal: {
    h2: { es: string; en: string };
    subtexto: { es: string; en: string };
    cta: { es: string; en: string };
  };
  // Cross-references
  relatedProducts: string[];
  relatedServices: string[];
}

// ---------------------------------------------------------------------------
// Hub-level copy (for the Industrias General page)
// ---------------------------------------------------------------------------
export const industriasHub = {
  heroH1: {
    es: 'Soluciones de ingeniería para los entornos más exigentes de México.',
    en: 'Engineering solutions for the most demanding environments in Mexico.',
  },
  heroH2: {
    es: 'Desde aplicaciones subsea hasta la industria alimentaria: tecnología certificada y presencia experta en sitio.',
    en: 'From subsea applications to the food industry: certified technology and expert on-site presence.',
  },
  ctaHero: {
    es: 'Explorar Sectores',
    en: 'Explore Sectors',
  },
  enfoqueH2: {
    es: 'Dominio técnico para industrias donde el fallo no es una opción.',
    en: 'Technical mastery for industries where failure is not an option.',
  },
  enfoqueCuerpo: {
    es: 'Dos fuerzas: Automatización e Ingeniería de Procesos. Cada válvula, solenoide o sistema de control cumple con las normativas internacionales más estrictas.',
    en: 'Two forces: Automation and Process Engineering. Every valve, solenoid, or control system meets the most stringent international standards.',
  },
  matrizH2: {
    es: 'El respaldo de las marcas líderes en el mundo.',
    en: 'Backed by the world\'s leading brands.',
  },
  matrizMicrocopy: {
    es: 'Integramos el sistema de control y la seguridad del proceso bajo un mismo sello de confianza.',
    en: 'We integrate the control system and process safety under a single seal of trust.',
  },
  inHouseH2: {
    es: 'Presencia física en cada sector.',
    en: 'Physical presence in every sector.',
  },
  inHouseCuerpo: {
    es: 'Especialistas donde su industria lo necesita. En refinería o planta de manufactura, ingeniería de detalle y mantenimiento preventivo en tiempo real.',
    en: 'Specialists where your industry needs them. At refinery or manufacturing plant, detailed engineering and preventive maintenance in real time.',
  },
  ctaFinalH2: {
    es: '¿Su industria exige el más alto estándar de seguridad?',
    en: 'Does your industry demand the highest safety standard?',
  },
  ctaFinalSubtexto: {
    es: 'Hable con un experto en su sector y asegure su continuidad operativa.',
    en: 'Talk to an expert in your sector and secure your operational continuity.',
  },
  ctaFinal: {
    es: 'Contactar a un Especialista de Industria',
    en: 'Contact an Industry Specialist',
  },
};

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------
export const industries: Industry[] = [
  // =========================================================================
  // OIL & GAS
  // =========================================================================
  {
    slug: 'oil-gas',
    name: {
      es: 'Oil & Gas',
      en: 'Oil & Gas',
    },
    description: {
      es: 'Especialistas en condiciones severas: alta presión, corrosión y aplicaciones Subsea.',
      en: 'Specialists in severe conditions: high pressure, corrosion, and Subsea applications.',
    },
    icon: 'Droplets',
    image: '/images/industries/oil-gas-card.webp',

    heroH1: {
      es: 'Continuidad operativa en los entornos más hostiles del sector energético.',
      en: 'Operational continuity in the most hostile environments of the energy sector.',
    },
    heroH2: {
      es: 'Suministramos tecnología de control y aislamiento diseñada para resistir alta presión y corrosión extrema. Disponibilidad inmediata para aplicaciones terrestres y submarinas.',
      en: 'We supply control and isolation technology designed to withstand high pressure and extreme corrosion. Immediate availability for onshore and subsea applications.',
    },
    ctaPrimary: {
      es: 'Consultar Inventario API 6D',
      en: 'Check API 6D Inventory',
    },
    ctaPrimaryLink: '/productos',
    ctaSecondary: {
      es: 'Solicitar Ingeniería en Sitio',
      en: 'Request On-Site Engineering',
    },
    ctaSecondaryLink: '/servicios',

    summary: {
      es: 'Especialistas en condiciones severas: alta presión, corrosión y aplicaciones Subsea.',
      en: 'Specialists in severe conditions: high pressure, corrosion, and Subsea applications.',
    },
    criticalSolution: {
      es: 'Válvulas Trunnion y sistemas de cierre de emergencia (ESD) certificados para servicios amargos.',
      en: 'Trunnion valves and emergency shutdown (ESD) systems certified for sour service.',
    },
    certifications: ['API 6D', 'API 6A', 'API 6DSS', 'SIL 3'],
    ctaCard: {
      es: 'Ver soluciones Oil & Gas',
      en: 'View Oil & Gas Solutions',
    },

    pas: {
      h2: {
        es: 'Donde la presión es extrema, nuestra fiabilidad es absoluta.',
        en: 'Where pressure is extreme, our reliability is absolute.',
      },
      body: {
        es: 'En el sector Oil & Gas, un tiempo de espera de 40 semanas o un componente sin certificación es un riesgo inaceptable. IPSA mitiga este peligro mediante el suministro de válvulas Trunnion y sistemas de alivio con Seguridad Funcional SIL 3.',
        en: 'In the Oil & Gas sector, a 40-week lead time or an uncertified component is an unacceptable risk. IPSA mitigates this danger by supplying Trunnion valves and relief systems with SIL 3 Functional Safety.',
      },
      ctaInterconnect: {
        es: 'Descubra cómo nuestra División de Ingeniería dimensiona materiales para servicios amargos',
        en: 'Discover how our Engineering Division sizes materials for sour service',
      },
      ctaInterconnectLink: '/servicios/automatizacion',
    },

    ecosystem: [
      {
        title: {
          es: 'Aislamiento y Control (Perar / Della Foglia)',
          en: 'Isolation & Control (Perar / Della Foglia)',
        },
        copy: {
          es: 'Válvulas de Bola Trunnion para alta presión y aplicaciones Subsea (API 6DSS).',
          en: 'Trunnion Ball Valves for high pressure and Subsea applications (API 6DSS).',
        },
        cta: {
          es: 'Ver Ficha Técnica de Válvulas Trunnion',
          en: 'View Trunnion Valves Data Sheet',
        },
        ctaLink: '/productos/valvulas-bola-trunnion-atornillado',
      },
      {
        title: {
          es: 'Instrumentación y Solenoides (Versa)',
          en: 'Instrumentation & Solenoids (Versa)',
        },
        copy: {
          es: 'Control de actuadores en ambientes explosivos con certificación de seguridad funcional.',
          en: 'Actuator control in explosive environments with functional safety certification.',
        },
        cta: {
          es: 'Explorar Soluciones de Automatización',
          en: 'Explore Automation Solutions',
        },
        ctaLink: '/productos/valvulas-neumaticas-solenoides',
      },
      {
        title: {
          es: 'Alivio y Seguridad (Consolidated / Masoneilan)',
          en: 'Relief & Safety (Consolidated / Masoneilan)',
        },
        copy: {
          es: 'Protección crítica contra sobrepresión y control preciso de flujo en estaciones de bombeo.',
          en: 'Critical overpressure protection and precise flow control at pumping stations.',
        },
        cta: {
          es: 'Ver Sistemas de Alivio y Control',
          en: 'View Relief & Control Systems',
        },
        ctaLink: '/productos/valvulas-seguridad',
      },
    ],

    matrix: [
      {
        proceso: { es: 'Transporte (Ductos)', en: 'Transportation (Pipelines)' },
        tecnologia: { es: 'Válvulas Trunnion API 6D', en: 'Trunnion Valves API 6D' },
        marca: 'Perar',
        servicio: { es: 'Ingeniería de Layouts', en: 'Layout Engineering' },
        servicioLink: '/servicios/automatizacion',
      },
      {
        proceso: { es: 'Control de Actuadores', en: 'Actuator Control' },
        tecnologia: { es: 'Solenoides SIL 3', en: 'SIL 3 Solenoids' },
        marca: 'Versa',
        servicio: { es: 'Sistemas de Automatización', en: 'Automation Systems' },
        servicioLink: '/servicios/automatizacion',
      },
      {
        proceso: { es: 'Protección de Activos', en: 'Asset Protection' },
        tecnologia: { es: 'Válvulas de Seguridad', en: 'Safety Valves' },
        marca: 'Consolidated',
        servicio: { es: 'Auditoría de Alivio', en: 'Relief Auditing' },
        servicioLink: '/servicios/automatizacion',
      },
    ],

    inHouseDifferential: {
      h2: {
        es: 'Ingeniería residente: Presencia física donde ocurre la operación.',
        en: 'Resident engineering: Physical presence where operations happen.',
      },
      body: {
        es: 'No solo entregamos el equipo; desplegamos especialistas en su planta para la configuración de tableros de control y sistemas de cierre de emergencia (ESD).',
        en: 'We don\'t just deliver the equipment; we deploy specialists at your plant for control panel configuration and emergency shutdown (ESD) systems.',
      },
      cta: {
        es: 'Conozca las ventajas de nuestro Soporte In-House',
        en: 'Learn about our In-House Support advantages',
      },
      ctaLink: '/servicios',
    },

    ctaFinal: {
      h2: {
        es: '¿Listo para asegurar el suministro de su próximo proyecto?',
        en: 'Ready to secure the supply for your next project?',
      },
      subtexto: {
        es: 'Consulte con nuestros Ingenieros de Aplicación disponibilidad de stock y soporte técnico en sitio.',
        en: 'Consult with our Application Engineers on stock availability and on-site technical support.',
      },
      cta: {
        es: 'Iniciar Cotización de Proyecto',
        en: 'Start Project Quote',
      },
    },

    relatedProducts: [
      'valvulas-bola-trunnion-atornillado',
      'valvulas-bola-flotante',
      'valvulas-compuerta',
      'valvulas-seguridad',
      'valvulas-neumaticas-solenoides',
      'valvulas-automatizadas',
    ],
    relatedServices: ['automatizacion', 'ingenieria'],
  },

  // =========================================================================
  // ENERGETICO
  // =========================================================================
  {
    slug: 'energetico',
    name: {
      es: 'Sector Energético',
      en: 'Energy Sector',
    },
    description: {
      es: 'Gestión de fluidos críticos en generación de energía y la nueva frontera del Hidrógeno.',
      en: 'Critical fluid management in power generation and the new Hydrogen frontier.',
    },
    icon: 'Zap',
    image: '/images/industries/energetico-hero.webp',

    heroH1: {
      es: 'Ingeniería de alta precisión para la estabilidad del sector eléctrico.',
      en: 'High-precision engineering for the stability of the power sector.',
    },
    heroH2: {
      es: 'Gestionamos fluidos críticos en plantas de generación de energía, hidroeléctricas y nuevas fronteras energéticas. Tecnología certificada para garantizar el suministro sin interrupciones.',
      en: 'We manage critical fluids in power generation plants, hydroelectric facilities, and new energy frontiers. Certified technology to ensure uninterrupted supply.',
    },
    ctaPrimary: {
      es: 'Explorar Válvulas de Control y Alivio',
      en: 'Explore Control & Relief Valves',
    },
    ctaPrimaryLink: '/productos/valvulas-control',
    ctaSecondary: {
      es: 'Agendar Auditoría de Eficiencia',
      en: 'Schedule Efficiency Audit',
    },
    ctaSecondaryLink: '/servicios/automatizacion',

    summary: {
      es: 'Gestión de fluidos críticos en generación de energía y la nueva frontera del Hidrógeno.',
      en: 'Critical fluid management in power generation and the new Hydrogen frontier.',
    },
    criticalSolution: {
      es: 'Control preciso de flujo y temperatura con válvulas de seguridad para alta presión.',
      en: 'Precise flow and temperature control with high-pressure safety valves.',
    },
    certifications: ['ASME B16.34', 'SIL 3', 'ISO 9001'],
    ctaCard: {
      es: 'Ver soluciones Energía',
      en: 'View Energy Solutions',
    },

    pas: {
      h2: {
        es: 'Control total sobre el vapor y la presión: El corazón de su planta.',
        en: 'Total control over steam and pressure: The heart of your plant.',
      },
      body: {
        es: 'La inestabilidad en el control de presión y temperatura en ciclos de vapor reduce drásticamente el ROI y pone en riesgo la vida útil de las turbinas. Un fallo en una válvula de seguridad de caldera puede derivar en paros de emergencia costosos. Integramos sistemas de control Masoneilan y alivio Consolidated, diseñados específicamente para las demandas térmicas más extremas.',
        en: 'Instability in pressure and temperature control in steam cycles drastically reduces ROI and puts turbine lifespan at risk. A boiler safety valve failure can lead to costly emergency shutdowns. We integrate Masoneilan control and Consolidated relief systems, specifically designed for the most extreme thermal demands.',
      },
      ctaInterconnect: {
        es: 'Vea cómo nuestra División de Automatización optimiza el diagnóstico de válvulas en tiempo real',
        en: 'See how our Automation Division optimizes real-time valve diagnostics',
      },
      ctaInterconnectLink: '/servicios/automatizacion',
    },

    ecosystem: [
      {
        title: {
          es: 'Control de Procesos Críticos (Masoneilan)',
          en: 'Critical Process Control (Masoneilan)',
        },
        copy: {
          es: 'Control preciso de flujo y temperatura para sistemas de vapor y enfriamiento. Estabilidad garantizada.',
          en: 'Precise flow and temperature control for steam and cooling systems. Guaranteed stability.',
        },
        cta: {
          es: 'Ver Catálogo Masoneilan',
          en: 'View Masoneilan Catalog',
        },
        ctaLink: '/productos/valvulas-control',
      },
      {
        title: {
          es: 'Seguridad en Calderas y Vapor (Consolidated)',
          en: 'Boiler & Steam Safety (Consolidated)',
        },
        copy: {
          es: 'Válvulas de seguridad de alta presión certificadas bajo ASME para la protección de activos térmicos.',
          en: 'High-pressure safety valves certified under ASME for thermal asset protection.',
        },
        cta: {
          es: 'Explorar Sistemas de Alivio',
          en: 'Explore Relief Systems',
        },
        ctaLink: '/productos/valvulas-seguridad',
      },
      {
        title: {
          es: 'Transición Energética (Della Foglia / Versa)',
          en: 'Energy Transition (Della Foglia / Versa)',
        },
        copy: {
          es: 'Válvulas especiales para Hidrógeno y captura de CO2. Soluciones para la descarbonización industrial.',
          en: 'Special valves for Hydrogen and CO2 capture. Solutions for industrial decarbonization.',
        },
        cta: {
          es: 'Ver Tecnologías para Renovables',
          en: 'View Renewable Technologies',
        },
        ctaLink: '/productos/valvulas-bola-flotante',
      },
    ],

    matrix: [
      {
        proceso: { es: 'Turbinas de Gas', en: 'Gas Turbines' },
        tecnologia: { es: 'Solenoides de Alta Confiabilidad', en: 'High-Reliability Solenoids' },
        marca: 'Versa',
        servicio: { es: 'Soporte de Automatización', en: 'Automation Support' },
        servicioLink: '/servicios/automatizacion',
      },
      {
        proceso: { es: 'Ciclos de Vapor', en: 'Steam Cycles' },
        tecnologia: { es: 'Válvulas de Control de Proceso', en: 'Process Control Valves' },
        marca: 'Masoneilan',
        servicio: { es: 'Optimización de Procesos', en: 'Process Optimization' },
        servicioLink: '/servicios/automatizacion',
      },
      {
        proceso: { es: 'Protección Térmica', en: 'Thermal Protection' },
        tecnologia: { es: 'Válvulas de Seguridad', en: 'Safety Valves' },
        marca: 'Consolidated',
        servicio: { es: 'Auditoría de Activos', en: 'Asset Auditing' },
        servicioLink: '/servicios/automatizacion',
      },
    ],

    inHouseDifferential: {
      h2: {
        es: 'Ingeniería In-House para la optimización de activos térmicos.',
        en: 'In-House Engineering for thermal asset optimization.',
      },
      body: {
        es: 'Nuestros consultores residentes supervisan la instalación y el mantenimiento de sistemas de alivio, eliminando cuellos de botella en la generación.',
        en: 'Our resident consultants supervise the installation and maintenance of relief systems, eliminating bottlenecks in power generation.',
      },
      cta: {
        es: 'Conozca nuestra Ingeniería de Procesos',
        en: 'Learn about our Process Engineering',
      },
      ctaLink: '/servicios/automatizacion',
    },

    ctaFinal: {
      h2: {
        es: '¿Busca maximizar la eficiencia de sus ciclos térmicos?',
        en: 'Looking to maximize the efficiency of your thermal cycles?',
      },
      subtexto: {
        es: 'Consulte con nuestros especialistas en generación y asegure la disponibilidad de su infraestructura.',
        en: 'Consult with our power generation specialists and secure your infrastructure availability.',
      },
      cta: {
        es: 'Solicitar Consultoría Técnica',
        en: 'Request Technical Consulting',
      },
    },

    relatedProducts: [
      'valvulas-control',
      'valvulas-seguridad',
      'valvulas-neumaticas-solenoides',
      'valvulas-bola-flotante',
      'valvulas-globo',
    ],
    relatedServices: ['automatizacion', 'ingenieria'],
  },

  // =========================================================================
  // PRIVADO
  // =========================================================================
  {
    slug: 'privado',
    name: {
      es: 'Sector Privado',
      en: 'Private Sector',
    },
    description: {
      es: 'Industria alimenticia, farmacéutica, pulpa y papel, minería, metalmecánica, plantas de proceso y tratamiento de aguas.',
      en: 'Food, pharmaceutical, pulp and paper, mining, metalworking, process plants, and water treatment.',
    },
    icon: 'Factory',
    image: '/images/industries/privado-hero.webp',

    heroH1: {
      es: 'Suministro inmediato y modernización para la industria privada en México.',
      en: 'Immediate supply and modernization for the private industry in Mexico.',
    },
    heroH2: {
      es: 'Optimizamos sus líneas de producción con tecnología de control y flujo de alta disponibilidad. Soluciones costo-eficientes con el respaldo de las normativas ASME e ISO.',
      en: 'We optimize your production lines with high-availability flow and control technology. Cost-efficient solutions backed by ASME and ISO standards.',
    },
    ctaPrimary: {
      es: 'Ver Stock de Entrega Inmediata',
      en: 'View Immediate Delivery Stock',
    },
    ctaPrimaryLink: '/productos',
    ctaSecondary: {
      es: 'Solicitar Modernización de Línea',
      en: 'Request Line Modernization',
    },
    ctaSecondaryLink: '/servicios/automatizacion',

    summary: {
      es: 'Industria alimenticia, farmacéutica, pulpa y papel, minería, metalmecánica, plantas de proceso y tratamiento de aguas.',
      en: 'Food, pharmaceutical, pulp and paper, mining, metalworking, process plants, and water treatment.',
    },
    criticalSolution: {
      es: 'Modernización de líneas con control neumático y reguladores de presión de alta disponibilidad.',
      en: 'Line modernization with pneumatic control and high-availability pressure regulators.',
    },
    certifications: ['ASME', 'ISO 9001'],
    ctaCard: {
      es: 'Ver soluciones Sector Privado',
      en: 'View Private Sector Solutions',
    },

    pas: {
      h2: {
        es: 'Cero cuellos de botella: La respuesta que su manufactura necesita.',
        en: 'Zero bottlenecks: The answer your manufacturing needs.',
      },
      body: {
        es: 'Los paros imprevistos y la falta de refaccionamiento local en válvulas y solenoides elevan sus costos operativos día con día. Utilizar componentes genéricos sin certificación suele derivar en fallas prematuras y riesgos de seguridad industrial. Ofrecemos un ecosistema de marcas líderes con entrega inmediata y soporte técnico residente para asegurar que su planta nunca se detenga.',
        en: 'Unplanned shutdowns and the lack of local valve and solenoid spare parts increase your operating costs day after day. Using generic uncertified components often leads to premature failures and industrial safety risks. We offer a leading brand ecosystem with immediate delivery and resident technical support to ensure your plant never stops.',
      },
      ctaInterconnect: {
        es: 'Descubra cómo nuestra División de Ingeniería rediseña sus flujos de trabajo',
        en: 'Discover how our Engineering Division redesigns your workflows',
      },
      ctaInterconnectLink: '/servicios/automatizacion',
    },

    ecosystem: [
      {
        title: {
          es: 'Control Neumático y Direccional (Versa)',
          en: 'Pneumatic & Directional Control (Versa)',
        },
        copy: {
          es: 'Válvulas solenoides y pilotos para la automatización precisa de actuadores en líneas de producción continua.',
          en: 'Solenoid and pilot valves for precise actuator automation in continuous production lines.',
        },
        cta: {
          es: 'Explorar Soluciones Versa',
          en: 'Explore Versa Solutions',
        },
        ctaLink: '/marcas/versa',
      },
      {
        title: {
          es: 'Manejo de Fluidos y Retención (DHV / Perar)',
          en: 'Fluid Handling & Retention (DHV / Perar)',
        },
        copy: {
          es: 'Válvulas de bola flotante y check para tratamiento de aguas y procesos químicos generales. Stock masivo.',
          en: 'Floating ball and check valves for water treatment and general chemical processes. Massive stock.',
        },
        cta: {
          es: 'Ver Inventario de Válvulas',
          en: 'View Valve Inventory',
        },
        ctaLink: '/productos',
      },
      {
        title: {
          es: 'Regulación de Procesos (Masoneilan)',
          en: 'Process Regulation (Masoneilan)',
        },
        copy: {
          es: 'Reguladores de presión e instrumentación para la estabilización de líneas de vapor y gases industriales.',
          en: 'Pressure regulators and instrumentation for the stabilization of steam and industrial gas lines.',
        },
        cta: {
          es: 'Ver Instrumentación Masoneilan',
          en: 'View Masoneilan Instrumentation',
        },
        ctaLink: '/productos/valvulas-control',
      },
    ],

    matrix: [
      {
        proceso: { es: 'Líneas de Producción', en: 'Production Lines' },
        tecnologia: { es: 'Válvulas de Control Direccional', en: 'Directional Control Valves' },
        marca: 'Versa',
        servicio: { es: 'Modernización de Líneas', en: 'Line Modernization' },
        servicioLink: '/servicios/automatizacion',
      },
      {
        proceso: { es: 'Tratamiento de Aguas', en: 'Water Treatment' },
        tecnologia: { es: 'Válvulas Check y Bola', en: 'Check & Ball Valves' },
        marca: 'DHV / Perar',
        servicio: { es: 'Auditoría de Flujos', en: 'Flow Auditing' },
        servicioLink: '/servicios/automatizacion',
      },
      {
        proceso: { es: 'Servicios Generales', en: 'General Services' },
        tecnologia: { es: 'Reguladores de Presión', en: 'Pressure Regulators' },
        marca: 'Masoneilan',
        servicio: { es: 'Mantenimiento Preventivo', en: 'Preventive Maintenance' },
        servicioLink: '/servicios/automatizacion',
      },
    ],

    inHouseDifferential: {
      h2: {
        es: 'Soporte In-House: Modernización sin interrumpir su negocio.',
        en: 'In-House Support: Modernization without disrupting your business.',
      },
      body: {
        es: 'Desplegamos técnicos especialistas directamente en sus instalaciones para realizar auditorías de eficiencia y modernizar sistemas de control neumáticos y electrónicos.',
        en: 'We deploy specialized technicians directly at your facilities to conduct efficiency audits and modernize pneumatic and electronic control systems.',
      },
      cta: {
        es: 'Ver Servicios de Automatización',
        en: 'View Automation Services',
      },
      ctaLink: '/servicios/automatizacion',
    },

    ctaFinal: {
      h2: {
        es: '¿Necesita componentes certificados para entrega hoy mismo?',
        en: 'Need certified components for delivery today?',
      },
      subtexto: {
        es: 'Consulte nuestro inventario disponible y hable con un consultor residente.',
        en: 'Check our available inventory and speak with a resident consultant.',
      },
      cta: {
        es: 'Consultar Stock Ahora',
        en: 'Check Stock Now',
      },
    },

    relatedProducts: [
      'valvulas-neumaticas-solenoides',
      'valvulas-bola-flotante',
      'valvulas-check',
      'valvulas-control',
      'valvulas-globo',
    ],
    relatedServices: ['automatizacion', 'ingenieria'],
  },
];
