export interface ProcessStep {
  order: number;
  name: { es: string; en: string };
  description: { es: string; en: string };
}

export interface Service {
  slug: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  icon: string;
  image: string;
  capabilities: { es: string[]; en: string[] };
  processSteps: ProcessStep[];
  relatedProducts: string[];
  relatedIndustries: string[];
}

export const services: Service[] = [
  {
    slug: 'automatizacion',
    name: {
      es: 'Automatización de Válvulas',
      en: 'Valve Automation',
    },
    description: {
      es: 'Paquetes completos de válvula + actuador + accesorios, sistemas ESD, paneles de control y puesta en marcha.',
      en: 'Complete valve + actuator + accessories packages, ESD systems, control panels, and commissioning.',
    },
    longDescription: {
      es: 'IPSA ofrece soluciones integrales de automatización de válvulas que incluyen el dimensionamiento, selección, ensamble y prueba de paquetes completos de válvula con actuador y accesorios. Diseñamos y fabricamos paneles de control personalizados, sistemas de paro de emergencia (ESD) y realizamos la puesta en marcha en sitio para garantizar el correcto funcionamiento de cada sistema.',
      en: 'IPSA offers comprehensive valve automation solutions including sizing, selection, assembly, and testing of complete valve packages with actuator and accessories. We design and manufacture custom control panels, emergency shutdown (ESD) systems, and perform on-site commissioning to ensure correct operation of each system.',
    },
    icon: 'Settings',
    image: '/images/services/automatizacion.jpg',
    capabilities: {
      es: [
        'Paquetes completos válvula + actuador + accesorios',
        'Sistemas de paro de emergencia (ESD)',
        'Paneles de control neumáticos y electrohidráulicos',
        'Dimensionamiento y selección de actuadores',
        'Ensamble y pruebas en taller',
        'Puesta en marcha en sitio',
        'Sistemas de control SCADA y DCS',
      ],
      en: [
        'Complete valve + actuator + accessories packages',
        'Emergency shutdown (ESD) systems',
        'Pneumatic and electrohydraulic control panels',
        'Actuator sizing and selection',
        'Workshop assembly and testing',
        'On-site commissioning',
        'SCADA and DCS control systems',
      ],
    },
    processSteps: [
      {
        order: 1,
        name: {
          es: 'Análisis de Requerimientos',
          en: 'Requirement Analysis',
        },
        description: {
          es: 'Revisión detallada de las especificaciones del proyecto, condiciones de operación, normas aplicables y requerimientos del cliente.',
          en: 'Detailed review of project specifications, operating conditions, applicable standards, and client requirements.',
        },
      },
      {
        order: 2,
        name: {
          es: 'Diseño de Ingeniería',
          en: 'Engineering Design',
        },
        description: {
          es: 'Dimensionamiento de válvulas y actuadores, selección de materiales, diseño de paneles de control y elaboración de planos de arreglo general.',
          en: 'Valve and actuator sizing, material selection, control panel design, and preparation of general arrangement drawings.',
        },
      },
      {
        order: 3,
        name: {
          es: 'Procura y Ensamble',
          en: 'Procurement & Assembly',
        },
        description: {
          es: 'Adquisición de equipos con los mejores fabricantes internacionales, ensamble de paquetes y preparación de documentación técnica.',
          en: 'Equipment procurement from the best international manufacturers, package assembly, and preparation of technical documentation.',
        },
      },
      {
        order: 4,
        name: {
          es: 'Pruebas',
          en: 'Testing',
        },
        description: {
          es: 'Pruebas funcionales, pruebas hidrostáticas, pruebas de torque, pruebas de fugas y verificación de tiempos de operación.',
          en: 'Functional tests, hydrostatic tests, torque tests, leak tests, and operation time verification.',
        },
      },
      {
        order: 5,
        name: {
          es: 'Puesta en Marcha',
          en: 'Commissioning',
        },
        description: {
          es: 'Instalación en sitio, ajustes finales, pruebas de aceptación en campo y capacitación al personal de operación y mantenimiento.',
          en: 'On-site installation, final adjustments, field acceptance tests, and training for operations and maintenance personnel.',
        },
      },
    ],
    relatedProducts: [
      'valvulas-bola',
      'valvulas-compuerta',
      'valvulas-control',
      'valvulas-solenoides',
      'actuadores',
      'actuadores-auto-contenidos',
      'paneles-de-control',
      'instrumentacion',
    ],
    relatedIndustries: ['petroleras', 'aceites', 'gas'],
  },
  {
    slug: 'ingenieria',
    name: {
      es: 'Ingeniería y Proyectos',
      en: 'Engineering & Projects',
    },
    description: {
      es: 'Ingeniería detallada, ingeniería básica y conceptual, procura, construcción y administración de proyectos EPC.',
      en: 'Detailed engineering, basic and conceptual engineering, procurement, construction, and EPC project management.',
    },
    longDescription: {
      es: 'IPSA cuenta con un equipo de ingenieros especializados en el diseño y ejecución de proyectos para la industria del petróleo y gas. Ofrecemos servicios de ingeniería básica, conceptual y de detalle, así como administración integral de proyectos bajo la modalidad EPC (Engineering, Procurement and Construction). Nuestro enfoque se basa en la optimización de costos, cumplimiento de plazos y adherencia a los más altos estándares de calidad y seguridad.',
      en: 'IPSA has a team of engineers specialized in the design and execution of projects for the oil and gas industry. We offer basic, conceptual, and detailed engineering services, as well as comprehensive EPC (Engineering, Procurement and Construction) project management. Our approach is based on cost optimization, schedule compliance, and adherence to the highest quality and safety standards.',
    },
    icon: 'PenTool',
    image: '/images/services/ingenieria.jpg',
    capabilities: {
      es: [
        'Ingeniería básica y conceptual',
        'Ingeniería de detalle',
        'Procura de equipos y materiales',
        'Construcción y montaje',
        'Administración de proyectos EPC',
        'Estudios de factibilidad',
        'Diseño de sistemas de tubería y accesorios',
        'Análisis de esfuerzos en tuberías',
      ],
      en: [
        'Basic and conceptual engineering',
        'Detailed engineering',
        'Equipment and material procurement',
        'Construction and installation',
        'EPC project management',
        'Feasibility studies',
        'Piping and accessories system design',
        'Pipe stress analysis',
      ],
    },
    processSteps: [
      {
        order: 1,
        name: {
          es: 'Ingeniería Conceptual',
          en: 'Conceptual Engineering',
        },
        description: {
          es: 'Definición del alcance del proyecto, estudios de factibilidad, estimación de costos y elaboración de cronogramas preliminares.',
          en: 'Project scope definition, feasibility studies, cost estimation, and preparation of preliminary schedules.',
        },
      },
      {
        order: 2,
        name: {
          es: 'Ingeniería Básica',
          en: 'Basic Engineering',
        },
        description: {
          es: 'Desarrollo de diagramas de flujo de proceso (PFD), diagramas de tubería e instrumentación (P&ID), especificaciones técnicas y hojas de datos.',
          en: 'Development of process flow diagrams (PFD), piping and instrumentation diagrams (P&ID), technical specifications, and data sheets.',
        },
      },
      {
        order: 3,
        name: {
          es: 'Ingeniería de Detalle',
          en: 'Detailed Engineering',
        },
        description: {
          es: 'Elaboración de planos constructivos, isométricos de tubería, listas de materiales, procedimientos de construcción y planes de calidad.',
          en: 'Preparation of construction drawings, piping isometrics, bills of materials, construction procedures, and quality plans.',
        },
      },
      {
        order: 4,
        name: {
          es: 'Procura y Construcción',
          en: 'Procurement & Construction',
        },
        description: {
          es: 'Gestión de compras, expediting, inspección en fábrica, construcción en sitio y supervisión de montaje.',
          en: 'Purchasing management, expediting, factory inspection, site construction, and installation supervision.',
        },
      },
      {
        order: 5,
        name: {
          es: 'Entrega y Cierre',
          en: 'Delivery & Closeout',
        },
        description: {
          es: 'Pruebas de aceptación, entrega de documentación as-built, capacitación y cierre administrativo del proyecto.',
          en: 'Acceptance tests, as-built documentation delivery, training, and project administrative closeout.',
        },
      },
    ],
    relatedProducts: [
      'valvulas-bola',
      'valvulas-compuerta',
      'valvulas-control',
      'valvulas-seguridad',
      'actuadores',
      'actuadores-auto-contenidos',
      'paneles-de-control',
      'instrumentacion',
    ],
    relatedIndustries: ['petroleras', 'aceites', 'gas'],
  },
  {
    slug: 'soporte-in-house',
    name: {
      es: 'Soporte In-House',
      en: 'In-House Support',
    },
    description: {
      es: 'Reparación de válvulas, pruebas hidrostáticas, pruebas de torque, inspección NDE, inventario 24/7 ($5M+ USD) y capacitación.',
      en: 'Valve repair, hydrostatic testing, torque testing, NDE inspection, 24/7 inventory ($5M+ USD), and training.',
    },
    longDescription: {
      es: 'IPSA cuenta con talleres propios equipados con la más alta tecnología para la reparación, mantenimiento y prueba de válvulas y actuadores. Nuestros servicios de inspección no destructiva (NDE) incluyen ultrasonido (UT), partículas magnéticas (MT), líquidos penetrantes (PT) e identificación positiva de materiales (PMI). Mantenemos un inventario permanente de más de $5 millones de dólares en válvulas, actuadores, accesorios y refacciones con disponibilidad 24/7 para responder a las necesidades urgentes de nuestros clientes.',
      en: 'IPSA has its own workshops equipped with the latest technology for valve and actuator repair, maintenance, and testing. Our non-destructive examination (NDE) services include ultrasonic testing (UT), magnetic particle testing (MT), liquid penetrant testing (PT), and positive material identification (PMI). We maintain a permanent inventory of over $5 million USD in valves, actuators, accessories, and spare parts with 24/7 availability to respond to our clients\' urgent needs.',
    },
    icon: 'Hammer',
    image: '/images/services/soporte-in-house.jpg',
    capabilities: {
      es: [
        'Reparación y mantenimiento de válvulas',
        'Pruebas hidrostáticas',
        'Pruebas de torque',
        'Inspección por ultrasonido (UT)',
        'Inspección por partículas magnéticas (MT)',
        'Inspección por líquidos penetrantes (PT)',
        'Identificación positiva de materiales (PMI)',
        'Inventario permanente 24/7 ($5M+ USD)',
        'Capacitación y entrenamiento técnico',
        'Servicio de emergencia y respuesta rápida',
      ],
      en: [
        'Valve repair and maintenance',
        'Hydrostatic testing',
        'Torque testing',
        'Ultrasonic testing (UT)',
        'Magnetic particle testing (MT)',
        'Liquid penetrant testing (PT)',
        'Positive material identification (PMI)',
        '24/7 permanent inventory ($5M+ USD)',
        'Technical training and education',
        'Emergency service and rapid response',
      ],
    },
    processSteps: [
      {
        order: 1,
        name: {
          es: 'Recepción e Inspección',
          en: 'Reception & Inspection',
        },
        description: {
          es: 'Recepción del equipo, inspección visual inicial, documentación fotográfica y evaluación del estado general.',
          en: 'Equipment reception, initial visual inspection, photographic documentation, and general condition assessment.',
        },
      },
      {
        order: 2,
        name: {
          es: 'Diagnóstico',
          en: 'Diagnosis',
        },
        description: {
          es: 'Desensamble, inspección dimensional, pruebas NDE, identificación de partes dañadas y elaboración de informe técnico.',
          en: 'Disassembly, dimensional inspection, NDE testing, identification of damaged parts, and technical report preparation.',
        },
      },
      {
        order: 3,
        name: {
          es: 'Reparación',
          en: 'Repair',
        },
        description: {
          es: 'Maquinado, lapeado de asientos, reemplazo de sellos y empaques, cambio de partes dañadas y reensamble.',
          en: 'Machining, seat lapping, seal and gasket replacement, damaged part replacement, and reassembly.',
        },
      },
      {
        order: 4,
        name: {
          es: 'Pruebas Finales',
          en: 'Final Testing',
        },
        description: {
          es: 'Pruebas hidrostáticas de cuerpo y asiento, pruebas funcionales, pruebas de torque y verificación de cumplimiento con especificaciones.',
          en: 'Body and seat hydrostatic tests, functional tests, torque tests, and verification of compliance with specifications.',
        },
      },
      {
        order: 5,
        name: {
          es: 'Entrega',
          en: 'Delivery',
        },
        description: {
          es: 'Preparación de documentación final, certificados de prueba, empaque protector y envío al cliente.',
          en: 'Final documentation preparation, test certificates, protective packaging, and shipment to client.',
        },
      },
    ],
    relatedProducts: [
      'valvulas-bola',
      'valvulas-compuerta',
      'valvulas-seguridad',
      'accesorios-refacciones',
    ],
    relatedIndustries: ['petroleras', 'aceites', 'gas'],
  },
];
