export interface IndustryChallenge {
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface IndustrySolution {
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface Industry {
  slug: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  icon: string;
  image: string;
  segments: { es: string[]; en: string[] };
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  relatedProducts: string[];
  relatedServices: string[];
}

export const industries: Industry[] = [
  {
    slug: 'petroleras',
    name: {
      es: 'Petroleras',
      en: 'Oil & Gas',
    },
    description: {
      es: 'Soluciones integrales para la industria petrolera en los segmentos upstream, midstream y downstream. Válvulas, actuadores y sistemas de control para las condiciones más exigentes.',
      en: 'Comprehensive solutions for the oil and gas industry across upstream, midstream, and downstream segments. Valves, actuators, and control systems for the most demanding conditions.',
    },
    longDescription: {
      es: 'IPSA ha sido proveedor de la industria petrolera mexicana e internacional por más de 30 años. Nuestro profundo conocimiento de las condiciones extremas de presión, temperatura y corrosión que enfrentan las instalaciones petroleras nos permite ofrecer las soluciones más adecuadas para cada aplicación. Trabajamos con los principales operadores como PEMEX, y contamos con experiencia en plataformas offshore, refinerías, plantas de proceso y ductos de transporte.',
      en: 'IPSA has been a supplier to the Mexican and international oil industry for over 30 years. Our deep understanding of the extreme pressure, temperature, and corrosion conditions faced by oil facilities allows us to offer the most suitable solutions for each application. We work with major operators like PEMEX, and have experience in offshore platforms, refineries, process plants, and transportation pipelines.',
    },
    icon: 'Droplets',
    image: '/images/industries/petroleras.jpg',
    segments: {
      es: [
        'Upstream - Exploración y producción',
        'Midstream - Transporte y almacenamiento',
        'Downstream - Refinación y petroquímica',
      ],
      en: [
        'Upstream - Exploration and production',
        'Midstream - Transportation and storage',
        'Downstream - Refining and petrochemicals',
      ],
    },
    challenges: [
      {
        title: {
          es: 'Presión y temperatura extremas',
          en: 'Extreme pressure and temperature',
        },
        description: {
          es: 'Las aplicaciones upstream y de refinería enfrentan presiones que superan los 10,000 psi y temperaturas desde criogénicas hasta más de 500 grados C.',
          en: 'Upstream and refinery applications face pressures exceeding 10,000 psi and temperatures ranging from cryogenic to over 500 degrees C.',
        },
      },
      {
        title: {
          es: 'Corrosión y servicio amargo (H2S)',
          en: 'Corrosion and sour service (H2S)',
        },
        description: {
          es: 'La presencia de ácido sulfhídrico (H2S), CO2 y cloruros en el crudo requiere materiales resistentes a la corrosión y al agrietamiento bajo esfuerzo.',
          en: 'The presence of hydrogen sulfide (H2S), CO2, and chlorides in crude oil requires materials resistant to corrosion and stress cracking.',
        },
      },
      {
        title: {
          es: 'Seguridad y protección ambiental',
          en: 'Safety and environmental protection',
        },
        description: {
          es: 'Los derrames y fugas fugitivas representan riesgos críticos para la seguridad del personal y el medio ambiente, requiriendo tecnologías de sello avanzadas.',
          en: 'Spills and fugitive leaks represent critical risks to personnel safety and the environment, requiring advanced sealing technologies.',
        },
      },
    ],
    solutions: [
      {
        title: {
          es: 'Válvulas API 6D y API 6A',
          en: 'API 6D and API 6A Valves',
        },
        description: {
          es: 'Válvulas de bola trunnion mounted y compuerta diseñadas y fabricadas bajo los estándares API 6D y API 6A, con pruebas en fábrica y certificación completa.',
          en: 'Trunnion mounted ball valves and gate valves designed and manufactured under API 6D and API 6A standards, with factory testing and full certification.',
        },
      },
      {
        title: {
          es: 'Materiales NACE y aleaciones especiales',
          en: 'NACE materials and special alloys',
        },
        description: {
          es: 'Selección de materiales conforme a NACE MR0175 incluyendo acero inoxidable duplex, super duplex, Inconel, Monel y otras aleaciones especiales para servicio amargo y corrosivo.',
          en: 'Material selection per NACE MR0175 including duplex stainless steel, super duplex, Inconel, Monel, and other special alloys for sour and corrosive service.',
        },
      },
      {
        title: {
          es: 'Sistemas de paro de emergencia (ESD)',
          en: 'Emergency shutdown (ESD) systems',
        },
        description: {
          es: 'Diseño e implementación de sistemas ESD con actuadores auto-contenidos, paneles de control y lógica de seguridad conforme a IEC 61511 y API 14C.',
          en: 'Design and implementation of ESD systems with self-contained actuators, control panels, and safety logic per IEC 61511 and API 14C.',
        },
      },
    ],
    relatedProducts: [
      'valvulas-bola',
      'valvulas-compuerta',
      'valvulas-control',
      'valvulas-seguridad',
      'valvulas-solenoides',
      'actuadores',
      'actuadores-auto-contenidos',
      'paneles-de-control',
      'instrumentacion',
    ],
    relatedServices: ['automatizacion', 'ingenieria', 'soporte-in-house'],
  },
  {
    slug: 'aceites',
    name: {
      es: 'Aceites',
      en: 'Oils Processing',
    },
    description: {
      es: 'Soluciones especializadas para la industria de procesamiento de aceites. Válvulas y sistemas de control para el manejo de fluidos viscosos a altas temperaturas.',
      en: 'Specialized solutions for the oils processing industry. Valves and control systems for handling viscous fluids at high temperatures.',
    },
    longDescription: {
      es: 'IPSA provee válvulas, actuadores y sistemas de control específicamente seleccionados para las necesidades de la industria de procesamiento de aceites. Nuestro enfoque se centra en la selección de materiales adecuados para temperaturas elevadas y fluidos viscosos, así como en sistemas de control de precisión que permiten regular con exactitud los parámetros críticos del proceso.',
      en: 'IPSA provides valves, actuators, and control systems specifically selected for the needs of the oils processing industry. Our focus is on selecting appropriate materials for elevated temperatures and viscous fluids, as well as precision control systems that allow exact regulation of critical process parameters.',
    },
    icon: 'FlaskConical',
    image: '/images/industries/aceites.jpg',
    segments: {
      es: [
        'Procesamiento de aceites vegetales',
        'Aceites lubricantes industriales',
        'Aceites especializados y derivados',
      ],
      en: [
        'Vegetable oil processing',
        'Industrial lubricating oils',
        'Specialized oils and derivatives',
      ],
    },
    challenges: [
      {
        title: {
          es: 'Altas temperaturas de proceso',
          en: 'High process temperatures',
        },
        description: {
          es: 'Los procesos de refinación y tratamiento de aceites operan a temperaturas elevadas que requieren materiales con alta resistencia térmica y sellos especiales.',
          en: 'Oil refining and treatment processes operate at elevated temperatures requiring materials with high thermal resistance and special seals.',
        },
      },
      {
        title: {
          es: 'Fluidos viscosos',
          en: 'Viscous fluids',
        },
        description: {
          es: 'El manejo de aceites de alta viscosidad genera retos en el dimensionamiento de válvulas, selección de actuadores y configuración de sistemas de control.',
          en: 'Handling high-viscosity oils creates challenges in valve sizing, actuator selection, and control system configuration.',
        },
      },
    ],
    solutions: [
      {
        title: {
          es: 'Materiales especializados',
          en: 'Specialized materials',
        },
        description: {
          es: 'Selección de aceros aleados, empaques de grafito expandido y sellos de PTFE reforzado para servicio a altas temperaturas. Tratamientos térmicos especiales y recubrimientos anti-desgaste.',
          en: 'Selection of alloy steels, expanded graphite packing, and reinforced PTFE seals for high-temperature service. Special heat treatments and anti-wear coatings.',
        },
      },
      {
        title: {
          es: 'Sistemas de control de precisión',
          en: 'Precision control systems',
        },
        description: {
          es: 'Válvulas de control con posicionadores digitales de alta resolución, instrumentación inteligente y comunicación HART/Fieldbus para control preciso de flujo y temperatura.',
          en: 'Control valves with high-resolution digital positioners, smart instrumentation, and HART/Fieldbus communication for precise flow and temperature control.',
        },
      },
    ],
    relatedProducts: [
      'valvulas-bola',
      'valvulas-control',
      'valvulas-solenoides',
      'actuadores',
      'instrumentacion',
    ],
    relatedServices: ['automatizacion', 'ingenieria', 'soporte-in-house'],
  },
  {
    slug: 'gas',
    name: {
      es: 'Gas',
      en: 'Gas Processing & Distribution',
    },
    description: {
      es: 'Soluciones para procesamiento, transporte y distribución de gas natural. Válvulas con sello hermético, baja emisión fugitiva y capacidad criogénica.',
      en: 'Solutions for natural gas processing, transportation, and distribution. Valves with tight shutoff, low fugitive emissions, and cryogenic capability.',
    },
    longDescription: {
      es: 'IPSA provee soluciones completas para la cadena de valor del gas natural, desde plantas de procesamiento hasta redes de distribución. Nuestras válvulas y sistemas de control están diseñados para garantizar un sello hermético, minimizar las emisiones fugitivas conforme a ISO 15848 y operar en condiciones criogénicas. Ofrecemos configuraciones de doble bloqueo y purga (DBB) para máxima seguridad en aplicaciones de gas.',
      en: 'IPSA provides complete solutions for the natural gas value chain, from processing plants to distribution networks. Our valves and control systems are designed to ensure tight shutoff, minimize fugitive emissions per ISO 15848, and operate in cryogenic conditions. We offer double block and bleed (DBB) configurations for maximum safety in gas applications.',
    },
    icon: 'Flame',
    image: '/images/industries/gas.jpg',
    segments: {
      es: [
        'Procesamiento de gas natural',
        'Transporte por gasoductos',
        'Distribución de gas',
        'Plantas de GNL (Gas Natural Licuado)',
      ],
      en: [
        'Natural gas processing',
        'Pipeline transportation',
        'Gas distribution',
        'LNG (Liquefied Natural Gas) plants',
      ],
    },
    challenges: [
      {
        title: {
          es: 'Sello hermético y emisiones fugitivas',
          en: 'Tight shutoff and fugitive emissions',
        },
        description: {
          es: 'Las regulaciones ambientales cada vez más estrictas exigen válvulas con niveles de fuga extremadamente bajos y certificación de emisiones fugitivas.',
          en: 'Increasingly strict environmental regulations demand valves with extremely low leakage levels and fugitive emissions certification.',
        },
      },
      {
        title: {
          es: 'Condiciones criogénicas',
          en: 'Cryogenic conditions',
        },
        description: {
          es: 'Las plantas de GNL y los procesos de fraccionamiento operan a temperaturas tan bajas como -196 grados C, requiriendo materiales y diseños especiales.',
          en: 'LNG plants and fractionation processes operate at temperatures as low as -196 degrees C, requiring special materials and designs.',
        },
      },
      {
        title: {
          es: 'Seguridad en el transporte',
          en: 'Transportation safety',
        },
        description: {
          es: 'Los gasoductos de alta presión requieren válvulas con doble barrera de sellado y capacidad de bloqueo y purga para aislamiento seguro durante mantenimiento.',
          en: 'High-pressure pipelines require valves with double sealing barriers and block and bleed capability for safe isolation during maintenance.',
        },
      },
    ],
    solutions: [
      {
        title: {
          es: 'Certificación ISO 15848',
          en: 'ISO 15848 Certification',
        },
        description: {
          es: 'Válvulas con certificación ISO 15848 de emisiones fugitivas, empaque vivo de grafito expandido y diseño de sello avanzado para máxima hermeticidad.',
          en: 'Valves with ISO 15848 fugitive emissions certification, live-loaded expanded graphite packing, and advanced seal design for maximum tightness.',
        },
      },
      {
        title: {
          es: 'Válvulas criogénicas',
          en: 'Cryogenic valves',
        },
        description: {
          es: 'Válvulas de bola y compuerta con extensión de vástago, materiales austeníticos y pruebas criogénicas conforme a BS 6364 y MSS SP-134.',
          en: 'Ball and gate valves with stem extensions, austenitic materials, and cryogenic testing per BS 6364 and MSS SP-134.',
        },
      },
      {
        title: {
          es: 'Configuraciones DBB',
          en: 'DBB configurations',
        },
        description: {
          es: 'Válvulas de doble bloqueo y purga (DBB) que proporcionan doble barrera de aislamiento con capacidad de verificación de sellos a través de la cavidad central.',
          en: 'Double block and bleed (DBB) valves providing double isolation barrier with seal verification capability through the center cavity.',
        },
      },
    ],
    relatedProducts: [
      'valvulas-bola',
      'valvulas-compuerta',
      'valvulas-control',
      'valvulas-seguridad',
      'valvulas-solenoides',
      'actuadores',
      'actuadores-auto-contenidos',
      'paneles-de-control',
      'instrumentacion',
    ],
    relatedServices: ['automatizacion', 'ingenieria', 'soporte-in-house'],
  },
];
