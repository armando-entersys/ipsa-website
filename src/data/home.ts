// ---------------------------------------------------------------------------
// home.ts – Home page copy per UX Writing specs (Feb 2026)
// Archivo: Inicio/IPSA _ Inicio.docx
// Arquetipo: El Guardián
// ---------------------------------------------------------------------------

export interface PainPointCard {
  key: string;
  title: { es: string; en: string };
  body: { es: string; en: string };
  icon: string;
}

export interface ProductPASBlock {
  title: { es: string; en: string };
  pas: { es: string; en: string };
  image: string;
}

export const homeData = {
  // SECCION 1: Hero Section
  hero: {
    h1: {
      es: 'Asegure la continuidad de sus procesos críticos con el mayor stock de componentes certificados en México.',
      en: 'Ensure the continuity of your critical processes with the largest stock of certified components in Mexico.',
    },
    h2: {
      es: 'No permita que los tiempos de entrega globales detengan su operación. Disponibilidad inmediata de válvulas de alta especificación bajo las normas API, ASME y SIL 3.',
      en: 'Don\'t let global lead times stop your operation. Immediate availability of high-specification valves under API, ASME, and SIL 3 standards.',
    },
    cta: {
      es: 'Consultar Inventario en Almacén',
      en: 'Check Warehouse Inventory',
    },
    ctaLink: '/productos',
    certBadges: ['API 6D', 'API 6A', 'ASME', 'SIL 3'],
  },

  // SECCION 2: Pain Points & Solution
  painPoints: {
    h2: {
      es: 'Soluciones reales para una industria que no puede detenerse.',
      en: 'Real solutions for an industry that cannot stop.',
    },
    cards: [
      {
        key: 'continuidad',
        title: { es: 'Respuesta Inmediata', en: 'Immediate Response' },
        body: {
          es: 'Reducimos los meses de espera en componentes críticos a solo semanas de logística nacional.',
          en: 'We reduce months of waiting for critical components to just weeks of national logistics.',
        },
        icon: 'Clock',
      },
      {
        key: 'seguridad',
        title: { es: 'Respaldo Normativo', en: 'Regulatory Backing' },
        body: {
          es: 'Suministramos tecnología de fabricantes globales aprobados por los operadores de energía más exigentes del mundo.',
          en: 'We supply technology from global manufacturers approved by the world\'s most demanding energy operators.',
        },
        icon: 'ShieldCheck',
      },
      {
        key: 'logistica',
        title: { es: 'Ubicación Estratégica', en: 'Strategic Location' },
        body: {
          es: 'Gestión comercial acelerada desde nuestro centro de distribución para minimizar su tiempo de inactividad.',
          en: 'Accelerated commercial management from our distribution center to minimize your downtime.',
        },
        icon: 'MapPin',
      },
    ] as PainPointCard[],
  },

  // SECCION 3: Marcas Representadas
  brands: {
    h3: {
      es: 'Tecnología de origen certificada por las marcas líderes a nivel mundial.',
      en: 'Origin-certified technology from the world\'s leading brands.',
    },
    logos: ['perar', 'versa', 'della-foglia', 'dhv', 'masoneilan'],
  },

  // SECCION 4: Soluciones por Producto (PAS)
  productPAS: {
    blocks: [
      {
        title: {
          es: 'Válvulas de Alta Especificación',
          en: 'High-Specification Valves',
        },
        pas: {
          es: '¿Proyectos en pausa por plazos de fabricación europea? Cada día de inactividad compromete sus metas de producción. Ofrecemos disponibilidad de válvulas Trunnion listas para su instalación.',
          en: 'Projects on hold due to European manufacturing timelines? Every day of downtime compromises your production goals. We offer Trunnion valves available and ready for installation.',
        },
        image: '/images/home/valvulas-alta-spec.jpg',
      },
      {
        title: {
          es: 'Control y Automatización',
          en: 'Control & Automation',
        },
        pas: {
          es: 'El reemplazo urgente en ambientes corrosivos requiere máxima fiabilidad. No arriesgue su seguridad con componentes genéricos. Acceda al stock permanente de control direccional líder en confiabilidad operativa.',
          en: 'Urgent replacement in corrosive environments requires maximum reliability. Don\'t risk your safety with generic components. Access the permanent stock of directional control leading in operational reliability.',
        },
        image: '/images/home/control-automatizacion.jpg',
      },
    ] as ProductPASBlock[],
  },

  // SECCION 5: Sobre nosotros
  about: {
    h2: {
      es: 'Nuestra misión es proteger la integridad de su infraestructura.',
      en: 'Our mission is to protect the integrity of your infrastructure.',
    },
    body: {
      es: 'En IPSA, la excelencia reside en la selección de lo que ponemos a su disposición. Actuamos como el filtro de calidad y el seguro logístico que el mercado mexicano requiere. No solo entregamos válvulas; entregamos la tranquilidad de saber que su planta cuenta con el respaldo de las normativas internacionales más estrictas.',
      en: 'At IPSA, excellence resides in the selection of what we put at your disposal. We act as the quality filter and logistical insurance that the Mexican market requires. We don\'t just deliver valves; we deliver the peace of mind of knowing your plant has the backing of the most stringent international standards.',
    },
    counters: [
      { key: 'almacen', value: '2,500', suffix: 'm²', label: { es: 'de inventario disponible', en: 'of available inventory' } },
      { key: 'marcas', value: '6', suffix: '+', label: { es: 'representaciones exclusivas', en: 'exclusive representations' } },
      { key: 'experiencia', value: '38', suffix: '+', label: { es: 'años de experiencia', en: 'years of experience' } },
    ],
  },

  // SECCION 6: CTA Final
  ctaFinal: {
    h2: {
      es: '¿Listo para asegurar su suministro? Consulte disponibilidad técnica ahora.',
      en: 'Ready to secure your supply? Check technical availability now.',
    },
    cta: {
      es: 'Hablar con un Especialista',
      en: 'Talk to a Specialist',
    },
    ctaLink: '/contacto',
  },
};
