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

export interface BenefitStatement {
  text: { es: string; en: string };
  icon: string;
}

export const homeData = {
  // SECCION 1: Hero Section
  hero: {
    h1: {
      es: 'El mayor stock de válvulas de bola de cuerpo soldado y equipos relacionados en México.',
      en: 'The largest stock of welded body ball valves and related equipment in Mexico.',
    },
    h2: {
      es: 'Disponibilidad inmediata de válvulas de alta especificación bajo normas API, ASME y SIL 3.',
      en: 'Immediate availability of high-specification valves under API, ASME, and SIL 3 standards.',
    },
    cta: {
      es: 'Consultar Inventario',
      en: 'Check Inventory',
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
      es: 'Tecnología certificada por las marcas líderes del mundo.',
      en: 'Certified technology from the world\'s leading brands.',
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
        image: '/images/products/ipsa-productos-stock.webp',
      },
      {
        title: {
          es: 'Control y Automatización',
          en: 'Control & Automation',
        },
        pas: {
          es: 'El reemplazo urgente en ambientes corrosivos requiere máxima fiabilidad. No arriesgue su seguridad con componentes genéricos. Acceda al stock permanente de equipos e instrumentos de fabricantes líderes y especializados para diversos procesos, asegurando y manteniendo la confiabilidad operativa que requiere.',
          en: 'Urgent replacement in corrosive environments requires maximum reliability. Don\'t risk your safety with generic components. Access the permanent stock of equipment and instruments from leading specialized manufacturers for diverse processes, ensuring and maintaining the operational reliability you require.',
        },
        image: '/images/heroes/services-hero.jpg',
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
      es: 'Actuamos como el filtro de calidad y el seguro logístico que el mercado mexicano requiere. No solo entregamos válvulas; entregamos la tranquilidad del respaldo normativo internacional.',
      en: 'We act as the quality filter and logistical insurance the Mexican market requires. We don\'t just deliver valves; we deliver the peace of mind of international regulatory backing.',
    },
    benefits: [
      {
        text: {
          es: 'Duerma tranquilo sabiendo que sus procesos cumplen con SIL 3 y API 6D.',
          en: 'Rest easy knowing your processes comply with SIL 3 and API 6D.',
        },
        icon: 'ShieldCheck',
      },
      {
        text: {
          es: 'Extienda la vida útil de su infraestructura con materiales diseñados para servicio severo.',
          en: 'Extend the lifespan of your infrastructure with materials designed for severe service.',
        },
        icon: 'Wrench',
      },
    ] as BenefitStatement[],
    counters: [
      { key: 'almacen', value: '2,500', suffix: 'm²', label: { es: 'de inventario disponible', en: 'of available inventory' } },
      { key: 'marcas', value: '6', suffix: '+', label: { es: 'representaciones exclusivas', en: 'exclusive representations' } },
      { key: 'experiencia', value: '38', suffix: '+', label: { es: 'años de experiencia', en: 'years of experience' } },
      { key: 'aliados', value: '55', suffix: '+', label: { es: 'años de experiencia de nuestros aliados', en: 'years of experience from our allies' } },
    ],
  },

  // SECCION 6: CTA Final
  ctaFinal: {
    h2: {
      es: '¿Listo para asegurar su suministro?',
      en: 'Ready to secure your supply?',
    },
    subtext: {
      es: 'Consulte disponibilidad y especificaciones técnicas.',
      en: 'Check availability and technical specifications.',
    },
    cta: {
      es: 'Configurar Solución',
      en: 'Configure Solution',
    },
    ctaSecondary: {
      es: 'Hablar con un Especialista',
      en: 'Talk to a Specialist',
    },
    ctaLink: '/contacto',
  },
};
