// ---------------------------------------------------------------------------
// services.ts – Restructured per UX Writing specs (Feb 2026)
// 2 services (Automatización, Ingeniería) + InHouse transversal constant
// ---------------------------------------------------------------------------

export interface FeatureBlock {
  title: { es: string; en: string };
  detail: { es: string; en: string };
  icon: string;
}

export interface ServiceBenefit {
  title: { es: string; en: string };
  description?: { es: string; en: string };
}

export interface InHouseSection {
  h2: { es: string; en: string };
  body: { es: string; en: string };
  benefitKey?: { es: string; en: string };
  promise?: { es: string; en: string };
}

export interface ProcessStep {
  order: number;
  name: { es: string; en: string };
  description: { es: string; en: string };
}

export interface FAQ {
  question: { es: string; en: string };
  answer: { es: string; en: string };
}

export interface Service {
  slug: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  icon: string;
  image: string;
  // Hero
  heroH1: { es: string; en: string };
  heroH2: { es: string; en: string };
  ctaHero: { es: string; en: string };
  // Introduction
  introduction: {
    h2: { es: string; en: string };
    body: { es: string; en: string };
  };
  // Features (4 blocks)
  featureBlocks: FeatureBlock[];
  // In-House differential
  inHouse: InHouseSection;
  // Benefits
  benefits: ServiceBenefit[];
  // CTA Final
  ctaFinal: {
    h2: { es: string; en: string };
    subtexto: { es: string; en: string };
    cta: { es: string; en: string };
  };
  // Legacy process steps (kept for compatibility)
  processSteps: ProcessStep[];
  // FAQs
  faqs?: FAQ[];
  // Cross-references
  relatedProducts: string[];
  relatedIndustries: string[];
}

// ---------------------------------------------------------------------------
// Hub-level copy (for Servicios General page)
// ---------------------------------------------------------------------------
export const serviciosHub = {
  heroH1: {
    es: 'Ingeniería y automatización para proteger su eficiencia operativa.',
    en: 'Engineering and automation to protect your operational efficiency.',
  },
  heroH2: {
    es: 'Sistemas inteligentes y flujos de alta precisión, con especialistas en su propia planta.',
    en: 'Intelligent systems and high-precision workflows, with specialists at your own plant.',
  },
  ctaHero: {
    es: 'Explorar Capacidades',
    en: 'Explore Capabilities',
  },
  // Línea A summary (for hub card)
  lineaA: {
    h2: {
      es: 'Sistemas inteligentes: Menos error humano, más tiempo de actividad.',
      en: 'Intelligent systems: Less human error, more uptime.',
    },
    body: {
      es: 'Arquitecturas de control con monitoreo en tiempo real y escalabilidad. Blindamos su producción contra la obsolescencia.',
      en: 'Control architectures with real-time monitoring and scalability. We safeguard your production against obsolescence.',
    },
    features: {
      es: [
        'Integración experta de PLC y sistemas SCADA.',
        'Migración fluida de sistemas de control heredados.',
        'Conectividad total mediante sensores y actuadores de última generación.',
      ],
      en: [
        'Expert PLC and SCADA system integration.',
        'Seamless migration of legacy control systems.',
        'Full connectivity through state-of-the-art sensors and actuators.',
      ],
    },
    cta: {
      es: 'Ver soluciones de Automatización',
      en: 'View Automation Solutions',
    },
  },
  // Línea B summary (for hub card)
  lineaB: {
    h2: {
      es: 'Optimización de infraestructura para una rentabilidad constante.',
      en: 'Infrastructure optimization for constant profitability.',
    },
    body: {
      es: 'Reconfiguramos flujos de trabajo para eliminar cuellos de botella. Cada activo al máximo de capacidad bajo cumplimiento normativo.',
      en: 'We reconfigure workflows to eliminate bottlenecks. Every asset at maximum capacity under regulatory compliance.',
    },
    features: {
      es: [
        'Diseño avanzado de layouts industriales y líneas de producción.',
        'Gestión integral de activos y mejora continua de flujos.',
        'Auditoría y aseguramiento de cumplimiento normativo internacional.',
      ],
      en: [
        'Advanced industrial layout and production line design.',
        'Comprehensive asset management and continuous flow improvement.',
        'Auditing and international regulatory compliance assurance.',
      ],
    },
    cta: {
      es: 'Consultar Consultoría en Ingeniería',
      en: 'Request Engineering Consulting',
    },
  },
  // In-House Transversal (hub level)
  inHouse: {
    h2: {
      es: 'Especialistas de IPSA en su planta: Respuesta inmediata en sitio.',
      en: 'IPSA specialists at your plant: Immediate on-site response.',
    },
    body: {
      es: 'Consultores y técnicos residentes que eliminan tiempos de traslado y comprenden su operación desde adentro.',
      en: 'Resident consultants and technicians who eliminate travel times and understand your operation from the inside.',
    },
    enAutomatizacion: {
      es: 'Programadores en sitio para ajustes críticos y mantenimiento preventivo.',
      en: 'On-site programmers for critical adjustments and preventive maintenance.',
    },
    enIngenieria: {
      es: 'Supervisión residente de proyectos y gestión de activos en tiempo real.',
      en: 'Resident project supervision and real-time asset management.',
    },
    impactPhrase: {
      es: 'No somos un proveedor externo; somos una extensión técnica de su equipo de confianza.',
      en: 'We\'re not an external supplier; we\'re a technical extension of your trusted team.',
    },
  },
  ctaFinal: {
    h2: {
      es: '¿Listo para elevar el estándar de su operación?',
      en: 'Ready to raise the standard of your operation?',
    },
    subtexto: {
      es: 'Solicite un diagnóstico técnico con nuestros especialistas residentes.',
      en: 'Request a technical diagnosis with our resident specialists.',
    },
    cta: {
      es: 'Agendar Consultoría Técnica',
      en: 'Schedule Technical Consulting',
    },
  },
};

// ---------------------------------------------------------------------------
// In-House Transversal constant (for banner component across all pages)
// ---------------------------------------------------------------------------
export interface InHouseTransversal {
  defaultH2: { es: string; en: string };
  defaultBody: { es: string; en: string };
  impactPhrase: { es: string; en: string };
  contexts: Record<string, {
    h2: { es: string; en: string };
    body: { es: string; en: string };
    cta: { es: string; en: string };
    ctaLink: string;
  }>;
}

export const inHouseTransversal: InHouseTransversal = {
  defaultH2: {
    es: 'Especialistas de IPSA dentro de su planta.',
    en: 'IPSA specialists inside your plant.',
  },
  defaultBody: {
    es: 'Nuestra mayor ventaja competitiva es la presencia. Desplegamos consultores y técnicos residentes que eliminan los tiempos de traslado y comprenden su operación desde adentro.',
    en: 'Our greatest competitive advantage is presence. We deploy resident consultants and technicians who eliminate travel times and understand your operation from the inside.',
  },
  impactPhrase: {
    es: 'No somos un proveedor externo; somos una extensión técnica de su equipo de confianza.',
    en: 'We\'re not an external supplier; we\'re a technical extension of your trusted team.',
  },
  contexts: {
    home: {
      h2: {
        es: 'Nuestra misión es proteger la integridad de su infraestructura.',
        en: 'Our mission is to protect the integrity of your infrastructure.',
      },
      body: {
        es: 'En IPSA, la excelencia reside en la selección de lo que ponemos a su disposición. Actuamos como el filtro de calidad y el seguro logístico que el mercado mexicano requiere.',
        en: 'At IPSA, excellence resides in the selection of what we put at your disposal. We act as the quality filter and logistical insurance that the Mexican market requires.',
      },
      cta: { es: 'Hablar con un Especialista', en: 'Talk to a Specialist' },
      ctaLink: '/contacto',
    },
    industrias: {
      h2: {
        es: 'Presencia física en cada sector.',
        en: 'Physical presence in every sector.',
      },
      body: {
        es: 'Nuestros especialistas residen donde su industria lo necesita. Ya sea en una refinería o en una planta de manufactura, el Soporte In-House de IPSA garantiza que la ingeniería de detalle y el mantenimiento preventivo ocurran en tiempo real.',
        en: 'Our specialists are stationed where your industry needs them. Whether at a refinery or a manufacturing plant, IPSA In-House Support ensures detailed engineering and preventive maintenance happen in real time.',
      },
      cta: { es: 'Conozca nuestro Soporte In-House', en: 'Learn about our In-House Support' },
      ctaLink: '/servicios',
    },
    marcas: {
      h2: {
        es: 'Más que un distribuidor, somos su aliado técnico oficial.',
        en: 'More than a distributor, we are your official technical partner.',
      },
      body: {
        es: 'Al adquirir marcas a través de IPSA, usted obtiene el respaldo de garantía directa de fábrica, soporte in-house para la selección de materiales y el compromiso de disponibilidad en nuestro almacén central.',
        en: 'When acquiring brands through IPSA, you get direct factory warranty support, in-house support for material selection, and the commitment of availability in our central warehouse.',
      },
      cta: { es: 'Conozca nuestro Soporte In-House', en: 'Learn about our In-House Support' },
      ctaLink: '/servicios',
    },
  },
};

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export const services: Service[] = [
  // =========================================================================
  // AUTOMATIZACION
  // =========================================================================
  {
    slug: 'automatizacion',
    name: {
      es: 'Automatización Técnica',
      en: 'Technical Automation',
    },
    description: {
      es: 'Sistemas de control inteligente, integración PLC/SCADA, y migración de sistemas obsoletos.',
      en: 'Intelligent control systems, PLC/SCADA integration, and legacy system migration.',
    },
    icon: 'Settings',
    image: '/images/heroes/df-actuator-test.jpg',

    heroH1: {
      es: 'Control inteligente: Menos error humano, más producción.',
      en: 'Intelligent control: Less human error, more production.',
    },
    heroH2: {
      es: 'Arquitecturas de automatización que transforman datos en decisiones en tiempo real para una operación segura y escalable.',
      en: 'Automation architectures that transform data into real-time decisions for safe and scalable operations.',
    },
    ctaHero: {
      es: 'Solicitar Diagnóstico',
      en: 'Request Diagnosis',
    },

    introduction: {
      h2: {
        es: 'Inteligencia al servicio de su planta.',
        en: 'Intelligence at the service of your plant.',
      },
      body: {
        es: 'No solo instalamos componentes; diseñamos ecosistemas inteligentes para el monitoreo total de sus procesos. Integramos tecnología de vanguardia con su infraestructura existente, asegurando una transición al Smart Manufacturing sin riesgos.',
        en: 'We don\'t just install components; we design intelligent ecosystems for total process monitoring. We integrate cutting-edge technology with your existing infrastructure, ensuring a risk-free Smart Manufacturing transition.',
      },
    },

    featureBlocks: [
      {
        title: { es: 'Control Lógico Programable (PLC)', en: 'Programmable Logic Control (PLC)' },
        detail: {
          es: 'Programación y configuración de arquitecturas lógicas para el control preciso de maquinaria y procesos críticos.',
          en: 'Programming and configuration of logic architectures for precise control of machinery and critical processes.',
        },
        icon: 'Cpu',
      },
      {
        title: { es: 'Sistemas SCADA y HMI', en: 'SCADA & HMI Systems' },
        detail: {
          es: 'Interfaces intuitivas para el monitoreo en tiempo real, permitiendo una supervisión total desde cualquier punto de la planta.',
          en: 'Intuitive interfaces for real-time monitoring, enabling total supervision from any point in the plant.',
        },
        icon: 'Monitor',
      },
      {
        title: { es: 'Integración de Sensores y Actuadores', en: 'Sensor & Actuator Integration' },
        detail: {
          es: 'Despliegue de instrumentación avanzada para la captura de datos y ejecución de comandos con precisión quirúrgica.',
          en: 'Deployment of advanced instrumentation for data capture and command execution with surgical precision.',
        },
        icon: 'Radio',
      },
      {
        title: { es: 'Migración de Sistemas Obsoletos', en: 'Legacy System Migration' },
        detail: {
          es: 'Actualizamos su tecnología heredada a plataformas modernas sin interrumpir la continuidad de su negocio.',
          en: 'We upgrade your legacy technology to modern platforms without disrupting your business continuity.',
        },
        icon: 'RefreshCw',
      },
    ],

    inHouse: {
      h2: {
        es: 'Programadores residentes: El cerebro de su automatización, siempre en sitio.',
        en: 'Resident programmers: The brain of your automation, always on-site.',
      },
      body: {
        es: 'La automatización requiere ajustes finos y respuestas inmediatas. Por ello, nuestros programadores y técnicos se integran físicamente en sus instalaciones.',
        en: 'Automation requires fine-tuning and immediate responses. That\'s why our programmers and technicians physically integrate into your facilities.',
      },
      benefitKey: {
        es: 'Mantenimiento preventivo de sistemas de control y ajustes de lógica en tiempo real para evitar paros no programados.',
        en: 'Preventive maintenance of control systems and real-time logic adjustments to prevent unplanned shutdowns.',
      },
      promise: {
        es: 'Presencia física para una disponibilidad digital del 100%.',
        en: 'Physical presence for 100% digital availability.',
      },
    },

    benefits: [
      {
        title: { es: 'Escalabilidad', en: 'Scalability' },
        description: {
          es: 'Sistemas diseñados para crecer a la par de su demanda.',
          en: 'Systems designed to grow alongside your demand.',
        },
      },
      {
        title: { es: 'Seguridad Industrial', en: 'Industrial Safety' },
        description: {
          es: 'Reducción drástica de riesgos mediante protocolos de seguridad funcional.',
          en: 'Drastic risk reduction through functional safety protocols.',
        },
      },
      {
        title: { es: 'Eficiencia Energética', en: 'Energy Efficiency' },
        description: {
          es: 'Optimización del consumo de recursos a través de algoritmos de control inteligente.',
          en: 'Resource consumption optimization through intelligent control algorithms.',
        },
      },
    ],

    ctaFinal: {
      h2: {
        es: '¿Su sistema actual está limitando su crecimiento?',
        en: 'Is your current system limiting your growth?',
      },
      subtexto: {
        es: 'Hable con un especialista en automatización residente y descubra cómo optimizar su arquitectura.',
        en: 'Talk to a resident automation specialist and discover how to optimize your architecture.',
      },
      cta: {
        es: 'Iniciar Diagnóstico Técnico',
        en: 'Start Technical Diagnosis',
      },
    },

    processSteps: [
      {
        order: 1,
        name: { es: 'Análisis de Requerimientos', en: 'Requirement Analysis' },
        description: {
          es: 'Revisión detallada de las especificaciones del proyecto, condiciones de operación, normas aplicables y requerimientos del cliente.',
          en: 'Detailed review of project specifications, operating conditions, applicable standards, and client requirements.',
        },
      },
      {
        order: 2,
        name: { es: 'Diseño de Ingeniería', en: 'Engineering Design' },
        description: {
          es: 'Dimensionamiento de válvulas y actuadores, selección de materiales, diseño de paneles de control y elaboración de planos.',
          en: 'Valve and actuator sizing, material selection, control panel design, and drawing preparation.',
        },
      },
      {
        order: 3,
        name: { es: 'Procura y Ensamble', en: 'Procurement & Assembly' },
        description: {
          es: 'Adquisición de equipos con los mejores fabricantes internacionales, ensamble de paquetes y documentación técnica.',
          en: 'Equipment procurement from top international manufacturers, package assembly, and technical documentation.',
        },
      },
      {
        order: 4,
        name: { es: 'Pruebas', en: 'Testing' },
        description: {
          es: 'Pruebas funcionales, hidrostáticas, de torque, de fugas y verificación de tiempos de operación.',
          en: 'Functional, hydrostatic, torque, leak tests, and operation time verification.',
        },
      },
      {
        order: 5,
        name: { es: 'Puesta en Marcha', en: 'Commissioning' },
        description: {
          es: 'Instalación en sitio, ajustes finales, pruebas de aceptación y capacitación al personal.',
          en: 'On-site installation, final adjustments, acceptance tests, and personnel training.',
        },
      },
    ],

    faqs: [
      {
        question: {
          es: '¿Qué incluye el servicio de automatización industrial de IPSA?',
          en: 'What does IPSA\'s industrial automation service include?',
        },
        answer: {
          es: 'Nuestro servicio abarca programación de PLC, sistemas SCADA/HMI, integración de sensores y actuadores, migración de sistemas heredados y diseño y ensamble de paneles de control. Cada proyecto se adapta a la arquitectura existente de su planta.',
          en: 'Our service covers PLC programming, SCADA/HMI systems, sensor and actuator integration, legacy system migration, and control panel design and assembly. Each project is tailored to your plant\'s existing architecture.',
        },
      },
      {
        question: {
          es: '¿IPSA puede migrar sistemas de control obsoletos?',
          en: 'Can IPSA migrate legacy control systems?',
        },
        answer: {
          es: 'Sí, nos especializamos en migrar sistemas DCS y PLC heredados a plataformas modernas sin interrumpir la producción. Realizamos un diagnóstico previo para garantizar una transición fluida y sin riesgos operativos.',
          en: 'Yes, we specialize in migrating legacy DCS and PLC systems to modern platforms without production interruption. We perform a prior diagnosis to ensure a smooth transition with no operational risks.',
        },
      },
      {
        question: {
          es: '¿Qué marcas de instrumentación y control manejan?',
          en: 'What instrumentation and control brands do you work with?',
        },
        answer: {
          es: 'Integramos equipos de Versa (válvulas solenoides), Masoneilan (válvulas de control), Perar (actuadores), además de las principales plataformas de PLC y SCADA del mercado. Nuestra representación exclusiva garantiza soporte técnico directo de fábrica.',
          en: 'We integrate equipment from Versa (solenoid valves), Masoneilan (control valves), Perar (actuators), plus major PLC and SCADA platforms in the market. Our exclusive representation guarantees direct factory technical support.',
        },
      },
      {
        question: {
          es: '¿Ofrecen soporte técnico en planta (in-house)?',
          en: 'Do you offer in-plant (in-house) technical support?',
        },
        answer: {
          es: 'Sí, desplegamos programadores y técnicos residentes directamente en las instalaciones de nuestros clientes. Esto permite ajustes en tiempo real, mantenimiento preventivo y respuesta inmediata ante cualquier eventualidad.',
          en: 'Yes, we deploy resident programmers and technicians directly at client facilities. This enables real-time adjustments, preventive maintenance, and immediate response to any eventuality.',
        },
      },
      {
        question: {
          es: '¿En qué industrias aplica el servicio de automatización?',
          en: 'What industries does the automation service apply to?',
        },
        answer: {
          es: 'Nuestras soluciones de automatización se aplican en Oil & Gas (upstream, midstream, downstream), generación de energía, petroquímica y manufactura privada. Adaptamos cada arquitectura al entorno normativo y operativo de cada sector.',
          en: 'Our automation solutions apply to Oil & Gas (upstream, midstream, downstream), power generation, petrochemical, and private manufacturing. We adapt each architecture to the regulatory and operational environment of each sector.',
        },
      },
      {
        question: {
          es: '¿Qué certificaciones cumplen los sistemas automatizados?',
          en: 'What certifications do automated systems comply with?',
        },
        answer: {
          es: 'Nuestras soluciones de automatización cumplen con IEC 61511 (SIL 3), ISA-84 y NFPA 85 para seguridad funcional en procesos críticos. Cada proyecto incluye documentación de cumplimiento normativo.',
          en: 'Our automation solutions comply with IEC 61511 (SIL 3), ISA-84, and NFPA 85 for functional safety in critical processes. Each project includes regulatory compliance documentation.',
        },
      },
    ],

    relatedProducts: [
      'valvulas-neumaticas-solenoides',
      'valvulas-control',
      'valvulas-automatizadas',
    ],
    relatedIndustries: ['oil-gas', 'energetico', 'privado'],
  },

  // =========================================================================
  // INGENIERIA Y PROCESOS
  // =========================================================================
  {
    slug: 'ingenieria',
    name: {
      es: 'Ingeniería y Procesos',
      en: 'Engineering & Processes',
    },
    description: {
      es: 'Diseño de infraestructura crítica, gestión de activos y aseguramiento normativo.',
      en: 'Critical infrastructure design, asset management, and regulatory compliance.',
    },
    icon: 'PenTool',
    image: '/images/heroes/df-cnc-machining.jpg',

    heroH1: {
      es: 'Infraestructura crítica: Su ingeniería como activo rentable.',
      en: 'Critical infrastructure: Your engineering as a profitable asset.',
    },
    heroH2: {
      es: 'Optimizamos líneas de producción y flujos de trabajo con análisis técnico avanzado, cumplimiento normativo y máxima eficiencia.',
      en: 'We optimize production lines and workflows with advanced technical analysis, regulatory compliance, and maximum efficiency.',
    },
    ctaHero: {
      es: 'Optimizar Infraestructura',
      en: 'Optimize Infrastructure',
    },

    introduction: {
      h2: {
        es: 'Ingeniería de detalle: Cero fallos, máxima eficiencia.',
        en: 'Detailed engineering: Zero failures, maximum efficiency.',
      },
      body: {
        es: 'Abordamos cada proyecto bajo Mejora Continua. Diseñamos layouts que maximizan el flujo de materiales y energía, reduciendo costos operativos y extendiendo la vida útil de sus activos.',
        en: 'We approach every project under Continuous Improvement. We design layouts that maximize material and energy flow, reducing operating costs and extending asset lifespan.',
      },
    },

    featureBlocks: [
      {
        title: { es: 'Diseño de Layouts Industriales', en: 'Industrial Layout Design' },
        detail: {
          es: 'Reconfiguramos su espacio físico para optimizar la logística interna y los tiempos de ciclo en líneas de producción.',
          en: 'We reconfigure your physical space to optimize internal logistics and cycle times in production lines.',
        },
        icon: 'Layout',
      },
      {
        title: { es: 'Gestión y Mapeo de Activos', en: 'Asset Management & Mapping' },
        detail: {
          es: 'Análisis profundo de la salud de sus componentes y equipos críticos para prevenir fallas catastróficas.',
          en: 'Deep analysis of your critical component and equipment health to prevent catastrophic failures.',
        },
        icon: 'Database',
      },
      {
        title: { es: 'Ingeniería de Detalle y EPC', en: 'Detailed Engineering & EPC' },
        detail: {
          es: 'Ejecutamos proyectos desde la ingeniería conceptual hasta la entrega de instalaciones funcionales listas para operar.',
          en: 'We execute projects from conceptual engineering to the delivery of functional facilities ready to operate.',
        },
        icon: 'HardHat',
      },
      {
        title: { es: 'Aseguramiento Normativo', en: 'Regulatory Compliance' },
        detail: {
          es: 'Garantizamos que cada proceso e infraestructura cumpla con las auditorías y estándares internacionales de seguridad y calidad.',
          en: 'We ensure every process and infrastructure meets international safety and quality audits and standards.',
        },
        icon: 'ShieldCheck',
      },
    ],

    inHouse: {
      h2: {
        es: 'Consultores Residentes: Ingeniería de campo que vive su operación.',
        en: 'Resident Consultants: Field engineering that lives your operation.',
      },
      body: {
        es: 'El verdadero valor de IPSA reside en nuestra capacidad de integración. Desplegamos consultores especializados directamente en sus instalaciones para supervisar proyectos de mejora en tiempo real.',
        en: 'IPSA\'s true value lies in our integration capability. We deploy specialized consultants directly at your facilities to supervise improvement projects in real time.',
      },
      benefitKey: {
        es: 'Gestión de planos, supervisión de montaje y ajustes de procesos sin demoras por traslados o falta de contexto operativo.',
        en: 'Drawing management, installation supervision, and process adjustments without delays from travel or lack of operational context.',
      },
      promise: {
        es: 'Su visión técnica, respaldada por nuestro capital humano en sitio.',
        en: 'Your technical vision, backed by our on-site human capital.',
      },
    },

    benefits: [
      {
        title: { es: 'Maximización del ROI', en: 'ROI Maximization' },
        description: {
          es: 'Cada rediseño está enfocado en recuperar la inversión mediante ahorros operativos.',
          en: 'Every redesign is focused on recovering investment through operational savings.',
        },
      },
      {
        title: { es: 'Calidad Estandarizada', en: 'Standardized Quality' },
        description: {
          es: 'Procesos repetibles que eliminan la variabilidad y el desperdicio.',
          en: 'Repeatable processes that eliminate variability and waste.',
        },
      },
      {
        title: { es: 'Escalabilidad Física', en: 'Physical Scalability' },
        description: {
          es: 'Infraestructura preparada para expansiones futuras sin re-trabajos costosos.',
          en: 'Infrastructure prepared for future expansions without costly rework.',
        },
      },
    ],

    ctaFinal: {
      h2: {
        es: '¿Su infraestructura está lista para el siguiente nivel de producción?',
        en: 'Is your infrastructure ready for the next level of production?',
      },
      subtexto: {
        es: 'Hable con nuestros consultores residentes y obtenga un mapa de ruta para su optimización.',
        en: 'Talk to our resident consultants and get a roadmap for your optimization.',
      },
      cta: {
        es: 'Iniciar Proyecto de Ingeniería',
        en: 'Start Engineering Project',
      },
    },

    processSteps: [
      {
        order: 1,
        name: { es: 'Ingeniería Conceptual', en: 'Conceptual Engineering' },
        description: {
          es: 'Definición del alcance, estudios de factibilidad, estimación de costos y cronogramas preliminares.',
          en: 'Scope definition, feasibility studies, cost estimation, and preliminary schedules.',
        },
      },
      {
        order: 2,
        name: { es: 'Ingeniería Básica', en: 'Basic Engineering' },
        description: {
          es: 'Desarrollo de PFD, P&ID, especificaciones técnicas y hojas de datos.',
          en: 'Development of PFDs, P&IDs, technical specifications, and data sheets.',
        },
      },
      {
        order: 3,
        name: { es: 'Ingeniería de Detalle', en: 'Detailed Engineering' },
        description: {
          es: 'Planos constructivos, isométricos de tubería, listas de materiales y procedimientos de construcción.',
          en: 'Construction drawings, piping isometrics, bills of materials, and construction procedures.',
        },
      },
      {
        order: 4,
        name: { es: 'Procura y Construcción', en: 'Procurement & Construction' },
        description: {
          es: 'Gestión de compras, inspección en fábrica, construcción en sitio y supervisión de montaje.',
          en: 'Purchasing management, factory inspection, site construction, and installation supervision.',
        },
      },
      {
        order: 5,
        name: { es: 'Entrega y Cierre', en: 'Delivery & Closeout' },
        description: {
          es: 'Pruebas de aceptación, documentación as-built, capacitación y cierre administrativo.',
          en: 'Acceptance tests, as-built documentation, training, and administrative closeout.',
        },
      },
    ],

    faqs: [
      {
        question: {
          es: '¿Qué tipo de ingeniería ofrece IPSA?',
          en: 'What type of engineering does IPSA offer?',
        },
        answer: {
          es: 'Ofrecemos ingeniería conceptual, básica y de detalle para infraestructura industrial. Cubrimos diseño de layouts, gestión de activos, proyectos EPC completos y aseguramiento de cumplimiento normativo bajo estándares internacionales.',
          en: 'We offer conceptual, basic, and detailed engineering for industrial infrastructure. We cover layout design, asset management, complete EPC projects, and regulatory compliance assurance under international standards.',
        },
      },
      {
        question: {
          es: '¿IPSA ejecuta proyectos EPC completos?',
          en: 'Does IPSA execute complete EPC projects?',
        },
        answer: {
          es: 'Sí, gestionamos proyectos desde la ingeniería conceptual hasta la procura, construcción y puesta en marcha, incluyendo documentación as-built. Cada fase se ejecuta con supervisión técnica especializada.',
          en: 'Yes, we manage projects from conceptual engineering through procurement, construction, and commissioning, including as-built documentation. Each phase is executed with specialized technical supervision.',
        },
      },
      {
        question: {
          es: '¿Pueden auditar mi planta para cumplimiento normativo?',
          en: 'Can you audit my plant for regulatory compliance?',
        },
        answer: {
          es: 'Sí, realizamos auditorías contra estándares API, ASME e ISO, identificando brechas y proporcionando planes de acción correctiva. Nuestro objetivo es que su planta cumpla con los más altos estándares de seguridad y calidad.',
          en: 'Yes, we perform audits against API, ASME, and ISO standards, identifying gaps and providing corrective action plans. Our goal is to ensure your plant meets the highest safety and quality standards.',
        },
      },
      {
        question: {
          es: '¿Qué es el servicio de gestión de activos de IPSA?',
          en: 'What is IPSA\'s asset management service?',
        },
        answer: {
          es: 'Consiste en un análisis profundo de la salud de equipos críticos, planificación de mantenimiento preventivo y optimización de costos de ciclo de vida para prevenir fallas catastróficas y extender la vida útil de sus activos.',
          en: 'It consists of deep analysis of critical equipment health, preventive maintenance planning, and lifecycle cost optimization to prevent catastrophic failures and extend the useful life of your assets.',
        },
      },
      {
        question: {
          es: '¿Ofrecen consultores residentes para proyectos?',
          en: 'Do you offer resident consultants for projects?',
        },
        answer: {
          es: 'Sí, desplegamos ingenieros de campo especializados directamente en sus instalaciones para supervisión de proyectos en tiempo real, gestión de planos y optimización de procesos sin demoras por traslados.',
          en: 'Yes, we deploy specialized field engineers at your facilities for real-time project supervision, drawing management, and process optimization without delays from travel.',
        },
      },
      {
        question: {
          es: '¿En qué se diferencia IPSA de otras empresas de ingeniería?',
          en: 'What differentiates IPSA from other engineering firms?',
        },
        answer: {
          es: 'Nuestros más de 38 años de experiencia especializada en válvulas y equipos de proceso, combinados con representaciones exclusivas de fabricantes, nos dan una profundidad técnica única. No somos solo consultores: somos una extensión de su equipo técnico.',
          en: 'Our 38+ years of specialized experience in valves and process equipment, combined with exclusive manufacturer representations, gives us unique technical depth. We\'re not just consultants—we\'re an extension of your technical team.',
        },
      },
    ],

    relatedProducts: [
      'valvulas-bola-trunnion-atornillado',
      'valvulas-compuerta',
      'valvulas-seguridad',
      'valvulas-globo',
    ],
    relatedIndustries: ['oil-gas', 'energetico', 'privado'],
  },
];
