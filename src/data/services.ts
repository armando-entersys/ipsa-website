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
      es: 'Automatizacion de Valvulas',
      en: 'Valve Automation',
    },
    description: {
      es: 'Paquetes completos de valvula + actuador + accesorios, sistemas ESD, paneles de control y puesta en marcha.',
      en: 'Complete valve + actuator + accessories packages, ESD systems, control panels, and commissioning.',
    },
    longDescription: {
      es: 'IPSA ofrece soluciones integrales de automatizacion de valvulas que incluyen el dimensionamiento, seleccion, ensamble y prueba de paquetes completos de valvula con actuador y accesorios. Disenamos y fabricamos paneles de control personalizados, sistemas de paro de emergencia (ESD) y realizamos la puesta en marcha en sitio para garantizar el correcto funcionamiento de cada sistema.',
      en: 'IPSA offers comprehensive valve automation solutions including sizing, selection, assembly, and testing of complete valve packages with actuator and accessories. We design and manufacture custom control panels, emergency shutdown (ESD) systems, and perform on-site commissioning to ensure correct operation of each system.',
    },
    icon: 'Settings',
    image: '/images/services/automatizacion.jpg',
    capabilities: {
      es: [
        'Paquetes completos valvula + actuador + accesorios',
        'Sistemas de paro de emergencia (ESD)',
        'Paneles de control neumaticos y electrohidraulicos',
        'Dimensionamiento y seleccion de actuadores',
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
          es: 'Analisis de Requerimientos',
          en: 'Requirement Analysis',
        },
        description: {
          es: 'Revision detallada de las especificaciones del proyecto, condiciones de operacion, normas aplicables y requerimientos del cliente.',
          en: 'Detailed review of project specifications, operating conditions, applicable standards, and client requirements.',
        },
      },
      {
        order: 2,
        name: {
          es: 'Diseno de Ingenieria',
          en: 'Engineering Design',
        },
        description: {
          es: 'Dimensionamiento de valvulas y actuadores, seleccion de materiales, diseno de paneles de control y elaboracion de planos de arreglo general.',
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
          es: 'Adquisicion de equipos con los mejores fabricantes internacionales, ensamble de paquetes y preparacion de documentacion tecnica.',
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
          es: 'Pruebas funcionales, pruebas hidrostaticas, pruebas de torque, pruebas de fugas y verificacion de tiempos de operacion.',
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
          es: 'Instalacion en sitio, ajustes finales, pruebas de aceptacion en campo y capacitacion al personal de operacion y mantenimiento.',
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
      es: 'Ingenieria y Proyectos',
      en: 'Engineering & Projects',
    },
    description: {
      es: 'Ingenieria detallada, ingenieria basica y conceptual, procura, construccion y administracion de proyectos EPC.',
      en: 'Detailed engineering, basic and conceptual engineering, procurement, construction, and EPC project management.',
    },
    longDescription: {
      es: 'IPSA cuenta con un equipo de ingenieros especializados en el diseno y ejecucion de proyectos para la industria del petroleo y gas. Ofrecemos servicios de ingenieria basica, conceptual y de detalle, asi como administracion integral de proyectos bajo la modalidad EPC (Engineering, Procurement and Construction). Nuestro enfoque se basa en la optimizacion de costos, cumplimiento de plazos y adherencia a los mas altos estandares de calidad y seguridad.',
      en: 'IPSA has a team of engineers specialized in the design and execution of projects for the oil and gas industry. We offer basic, conceptual, and detailed engineering services, as well as comprehensive EPC (Engineering, Procurement and Construction) project management. Our approach is based on cost optimization, schedule compliance, and adherence to the highest quality and safety standards.',
    },
    icon: 'PenTool',
    image: '/images/services/ingenieria.jpg',
    capabilities: {
      es: [
        'Ingenieria basica y conceptual',
        'Ingenieria de detalle',
        'Procura de equipos y materiales',
        'Construccion y montaje',
        'Administracion de proyectos EPC',
        'Estudios de factibilidad',
        'Diseno de sistemas de tuberia y accesorios',
        'Analisis de esfuerzos en tuberias',
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
          es: 'Ingenieria Conceptual',
          en: 'Conceptual Engineering',
        },
        description: {
          es: 'Definicion del alcance del proyecto, estudios de factibilidad, estimacion de costos y elaboracion de cronogramas preliminares.',
          en: 'Project scope definition, feasibility studies, cost estimation, and preparation of preliminary schedules.',
        },
      },
      {
        order: 2,
        name: {
          es: 'Ingenieria Basica',
          en: 'Basic Engineering',
        },
        description: {
          es: 'Desarrollo de diagramas de flujo de proceso (PFD), diagramas de tuberia e instrumentacion (P&ID), especificaciones tecnicas y hojas de datos.',
          en: 'Development of process flow diagrams (PFD), piping and instrumentation diagrams (P&ID), technical specifications, and data sheets.',
        },
      },
      {
        order: 3,
        name: {
          es: 'Ingenieria de Detalle',
          en: 'Detailed Engineering',
        },
        description: {
          es: 'Elaboracion de planos constructivos, isometricos de tuberia, listas de materiales, procedimientos de construccion y planes de calidad.',
          en: 'Preparation of construction drawings, piping isometrics, bills of materials, construction procedures, and quality plans.',
        },
      },
      {
        order: 4,
        name: {
          es: 'Procura y Construccion',
          en: 'Procurement & Construction',
        },
        description: {
          es: 'Gestion de compras, expediting, inspeccion en fabrica, construccion en sitio y supervision de montaje.',
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
          es: 'Pruebas de aceptacion, entrega de documentacion as-built, capacitacion y cierre administrativo del proyecto.',
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
      es: 'Reparacion de valvulas, pruebas hidrostaticas, pruebas de torque, inspeccion NDE, inventario 24/7 ($5M+ USD) y capacitacion.',
      en: 'Valve repair, hydrostatic testing, torque testing, NDE inspection, 24/7 inventory ($5M+ USD), and training.',
    },
    longDescription: {
      es: 'IPSA cuenta con talleres propios equipados con la mas alta tecnologia para la reparacion, mantenimiento y prueba de valvulas y actuadores. Nuestros servicios de inspeccion no destructiva (NDE) incluyen ultrasonido (UT), particulas magneticas (MT), liquidos penetrantes (PT) e identificacion positiva de materiales (PMI). Mantenemos un inventario permanente de mas de $5 millones de dolares en valvulas, actuadores, accesorios y refacciones con disponibilidad 24/7 para responder a las necesidades urgentes de nuestros clientes.',
      en: 'IPSA has its own workshops equipped with the latest technology for valve and actuator repair, maintenance, and testing. Our non-destructive examination (NDE) services include ultrasonic testing (UT), magnetic particle testing (MT), liquid penetrant testing (PT), and positive material identification (PMI). We maintain a permanent inventory of over $5 million USD in valves, actuators, accessories, and spare parts with 24/7 availability to respond to our clients\' urgent needs.',
    },
    icon: 'Hammer',
    image: '/images/services/soporte-in-house.jpg',
    capabilities: {
      es: [
        'Reparacion y mantenimiento de valvulas',
        'Pruebas hidrostaticas',
        'Pruebas de torque',
        'Inspeccion por ultrasonido (UT)',
        'Inspeccion por particulas magneticas (MT)',
        'Inspeccion por liquidos penetrantes (PT)',
        'Identificacion positiva de materiales (PMI)',
        'Inventario permanente 24/7 ($5M+ USD)',
        'Capacitacion y entrenamiento tecnico',
        'Servicio de emergencia y respuesta rapida',
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
          es: 'Recepcion e Inspeccion',
          en: 'Reception & Inspection',
        },
        description: {
          es: 'Recepcion del equipo, inspeccion visual inicial, documentacion fotografica y evaluacion del estado general.',
          en: 'Equipment reception, initial visual inspection, photographic documentation, and general condition assessment.',
        },
      },
      {
        order: 2,
        name: {
          es: 'Diagnostico',
          en: 'Diagnosis',
        },
        description: {
          es: 'Desensamble, inspeccion dimensional, pruebas NDE, identificacion de partes danadas y elaboracion de informe tecnico.',
          en: 'Disassembly, dimensional inspection, NDE testing, identification of damaged parts, and technical report preparation.',
        },
      },
      {
        order: 3,
        name: {
          es: 'Reparacion',
          en: 'Repair',
        },
        description: {
          es: 'Maquinado, lapeado de asientos, reemplazo de sellos y empaques, cambio de partes danadas y reensamble.',
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
          es: 'Pruebas hidrostaticas de cuerpo y asiento, pruebas funcionales, pruebas de torque y verificacion de cumplimiento con especificaciones.',
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
          es: 'Preparacion de documentacion final, certificados de prueba, empaque protector y envio al cliente.',
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
