// ---------------------------------------------------------------------------
// suppliers.ts – Restructured per UX Writing specs (Feb 2026)
// 5 priority brands + complementary portfolio
// ---------------------------------------------------------------------------

export interface SupplierCertification {
  name: string;
  description?: { es: string; en: string };
}

export interface SupplierPAS {
  h2: { es: string; en: string };
  problema: { es: string; en: string };
  agitacion: { es: string; en: string };
  solucion: { es: string; en: string };
  ctaInterconnect: { es: string; en: string };
  ctaInterconnectLink: string;
}

export interface SupplierProductCategory {
  title: { es: string; en: string };
  uso: { es: string; en: string };
  industrias: string[];
  cta: { es: string; en: string };
  ctaLink: string;
}

export interface SupplierNavCircular {
  label: { es: string; en: string };
  description: { es: string; en: string };
  link: string;
}

export interface Supplier {
  slug: string;
  name: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  country: string;
  logo: string;
  image: string;
  website?: string;
  products: { es: string[]; en: string[] };
  certifications: SupplierCertification[];
  heroBadges?: string[]; // subset of certifications to highlight in hero
  relatedProducts: string[];
  isPriority: boolean;
  // UX Writing fields
  heroH1: { es: string; en: string };
  heroH2: { es: string; en: string };
  ctaPrimary: { es: string; en: string };
  ctaSecondary: { es: string; en: string };
  productCategories: SupplierProductCategory[];
  pas: SupplierPAS;
  navCircular: SupplierNavCircular[];
  inHouse: {
    h2: { es: string; en: string };
    body: { es: string; en: string };
    cta: { es: string; en: string };
  };
  ctaFinal: {
    h2: { es: string; en: string };
    subtexto: { es: string; en: string };
    cta: { es: string; en: string };
  };
}

// ---------------------------------------------------------------------------
// Hub-level copy (Marcas General page)
// ---------------------------------------------------------------------------
export const marcasHub = {
  heroH1: {
    es: 'Tecnología de clase mundial para la integridad de sus procesos.',
    en: 'World-class technology for the integrity of your processes.',
  },
  heroH2: {
    es: 'Seleccionamos rigurosamente a los fabricantes líderes que cumplen con las normativas internacionales más estrictas. Ingeniería probada, disponible hoy en nuestro inventario nacional.',
    en: 'We rigorously select the leading manufacturers that comply with the most stringent international standards. Proven engineering, available today in our national inventory.',
  },
  ctaHero: {
    es: 'Consultar Disponibilidad de Stock',
    en: 'Check Stock Availability',
  },
  complementaryH3: {
    es: 'Soluciones integrales: Alianzas que fortalecen su operación.',
    en: 'Comprehensive solutions: Partnerships that strengthen your operation.',
  },
  complementaryBody: {
    es: 'Complementamos nuestra oferta con fabricantes especializados que aseguran la protección y el alivio de presión en cada etapa de su proceso.',
    en: 'We complement our offering with specialized manufacturers that ensure protection and pressure relief at every stage of your process.',
  },
  complementaryBrands: ['Consolidated', 'Hudson', 'Maepsa', 'Certus'],
  diferencialH2: {
    es: 'Más que un distribuidor, somos su aliado técnico oficial.',
    en: 'More than a distributor, we are your official technical partner.',
  },
  diferencialBody: {
    es: 'Al adquirir marcas a través de IPSA, usted obtiene el respaldo de garantía directa de fábrica, soporte in-house para la selección de materiales y el compromiso de disponibilidad en nuestro almacén central.',
    en: 'When acquiring brands through IPSA, you get direct factory warranty support, in-house support for material selection, and the commitment of availability in our central warehouse.',
  },
  ctaFinalH2: {
    es: '¿Requiere una marca o especificación técnica en particular?',
    en: 'Need a specific brand or technical specification?',
  },
  ctaFinalSubtexto: {
    es: 'Nuestros especialistas en asistencia internacional localizan y suministran el componente exacto para su proyecto.',
    en: 'Our international assistance specialists locate and supply the exact component for your project.',
  },
  ctaFinal: {
    es: 'Contactar a Ingeniería',
    en: 'Contact Engineering',
  },
};

// ---------------------------------------------------------------------------
// Suppliers (5 priority + expandable)
// ---------------------------------------------------------------------------
export const suppliers: Supplier[] = [
  // =========================================================================
  // 1. PERAR
  // =========================================================================
  {
    slug: 'perar',
    name: { es: 'Perar', en: 'Perar' },
    tagline: { es: 'High Performance Valves', en: 'High Performance Valves' },
    description: {
      es: 'Fabricante italiano de válvulas de bola trunnion mounted con cuerpo soldado, tamaños de 2" a 48", clases ANSI 150 a 2500.',
      en: 'Italian manufacturer of trunnion mounted ball valves with welded body, sizes from 2" to 48", ANSI class 150 to 2500.',
    },
    longDescription: {
      es: 'Perar es un fabricante italiano especializado en la producción de válvulas de bola trunnion mounted de cuerpo soldado. Sus válvulas se fabrican en tamaños de 2" a 48" y clases de presión ANSI 150 a 2500, cubriendo un amplio rango de aplicaciones en la industria del petróleo y gas.',
      en: 'Perar is an Italian manufacturer specialized in the production of trunnion mounted ball valves with welded body. Their valves are manufactured in sizes from 2" to 48" and pressure classes ANSI 150 to 2500.',
    },
    country: 'Italy',
    website: 'https://perar.net',
    logo: '/images/logos/perar-official.png',
    image: '/images/heroes/perar-hero.jpg',
    products: {
      es: ['Válvulas de bola trunnion mounted', 'Válvulas de cuerpo soldado', 'Tamaños de 2" a 48"', 'Clases ANSI 150 a 2500'],
      en: ['Trunnion mounted ball valves', 'Welded body valves', 'Sizes from 2" to 48"', 'ANSI class 150 to 2500'],
    },
    certifications: [
      { name: 'API 6D' },
      { name: 'API 6A' },
      { name: 'API 6DSS' },
      { name: 'ISO 9001', description: { es: 'Sistema de gestión de calidad', en: 'Quality management system' } },
      { name: 'SIL 3', description: { es: 'Nivel de integridad de seguridad III', en: 'Safety Integrity Level III' } },
    ],
    heroBadges: ['API 6D', 'API 6A', 'API 6DSS'],
    relatedProducts: ['valvulas-bola-trunnion-atornillado', 'valvulas-bola-trunnion-soldado'],
    isPriority: true,
    heroH1: { es: 'Perar: El estándar global en válvulas de bola para servicios severos.', en: 'Perar: The global standard in ball valves for severe service.' },
    heroH2: {
      es: 'Tecnología de vanguardia certificada para resistir las condiciones más extremas de presión y corrosión. Soluciones probadas en aplicaciones Subsea y Midstream con disponibilidad técnica inmediata.',
      en: 'Cutting-edge technology certified to withstand the most extreme pressure and corrosion conditions. Proven solutions for Subsea and Midstream applications with immediate technical availability.',
    },
    ctaPrimary: { es: 'Consultar Inventario Perar API 6D', en: 'Check Perar API 6D Inventory' },
    ctaSecondary: { es: 'Solicitar Ingeniería de Aplicación', en: 'Request Application Engineering' },
    productCategories: [
      {
        title: { es: 'Válvulas de Bola Trunnion (Cuerpo Atornillado y Soldado)', en: 'Trunnion Ball Valves (Bolted and Welded Body)' },
        uso: { es: 'Aislamiento crítico en ductos de transporte y estaciones de compresión. Diseñadas para un mantenimiento sencillo y una vida útil prolongada.', en: 'Critical isolation in transportation pipelines and compression stations. Designed for easy maintenance and extended service life.' },
        industrias: ['oil-gas', 'energetico'],
        cta: { es: 'Ver Ficha Técnica Trunnion', en: 'View Trunnion Data Sheet' },
        ctaLink: '/productos/valvulas-bola-trunnion-atornillado',
      },
      {
        title: { es: 'Soluciones Subsea (API 6DSS)', en: 'Subsea Solutions (API 6DSS)' },
        uso: { es: 'Ingeniería especializada para el lecho marino. Válvulas diseñadas para operar bajo presiones hidrostáticas extremas durante décadas.', en: 'Specialized engineering for the seabed. Valves designed to operate under extreme hydrostatic pressures for decades.' },
        industrias: ['oil-gas'],
        cta: { es: 'Explorar Capacidades Subsea', en: 'Explore Subsea Capabilities' },
        ctaLink: '/productos/valvulas-bola-trunnion-atornillado',
      },
      {
        title: { es: 'Válvulas para Servicios Severos (Alta Temp / Corrosión)', en: 'Severe Service Valves (High Temp / Corrosion)' },
        uso: { es: 'Configuraciones con Inconel, Duplex para fluidos amargos y temperaturas extremas.', en: 'Configurations with Inconel, Duplex for sour fluids and extreme temperatures.' },
        industrias: ['oil-gas', 'privado'],
        cta: { es: 'Ver Materiales Especiales', en: 'View Special Materials' },
        ctaLink: '/productos/valvulas-bola-trunnion-atornillado',
      },
    ],
    pas: {
      h2: { es: 'Blindamos su infraestructura contra fallas catastróficas.', en: 'We shield your infrastructure against catastrophic failures.' },
      problema: { es: 'En aplicaciones de alta presión, una filtración mínima o un retraso en la entrega de 40 semanas compromete la seguridad y la viabilidad del proyecto.', en: 'In high-pressure applications, a minimal leak or a 40-week delivery delay compromises project safety and viability.' },
      agitacion: { es: 'Los entornos con presencia de arenas o agentes corrosivos degradan rápidamente los equipos estándar, provocando paros no programados millonarios.', en: 'Environments with sand or corrosive agents rapidly degrade standard equipment, causing multimillion-dollar unplanned shutdowns.' },
      solucion: { es: 'IPSA suministra tecnología Perar con stock estratégico en México, asegurando que cada componente cumpla con las pruebas de fuego y presión más rigurosas del mundo.', en: 'IPSA supplies Perar technology with strategic stock in Mexico, ensuring every component passes the world\'s most rigorous fire and pressure tests.' },
      ctaInterconnect: { es: 'Asegure la selección correcta de materiales con nuestra División de Ingeniería', en: 'Ensure correct material selection with our Engineering Division' },
      ctaInterconnectLink: '/servicios/automatizacion',
    },
    navCircular: [
      { label: { es: 'Soberanía en Ductos', en: 'Pipeline Sovereignty' }, description: { es: 'Cumplimiento total API 6D para transporte nacional de hidrocarburos.', en: 'Full API 6D compliance for national hydrocarbon transport.' }, link: '/industrias/oil-gas' },
      { label: { es: 'Seguridad Funcional', en: 'Functional Safety' }, description: { es: 'Válvulas preparadas para integración con sistemas de seguridad SIL 3.', en: 'Valves prepared for SIL 3 safety system integration.' }, link: '/servicios/automatizacion' },
      { label: { es: 'Presencia en Campo', en: 'Field Presence' }, description: { es: 'Soporte técnico residente para instalación y puesta en marcha.', en: 'Resident technical support for installation and commissioning.' }, link: '/nosotros' },
    ],
    inHouse: {
      h2: { es: 'Ingeniería de detalle en sitio.', en: 'On-site detailed engineering.' },
      body: { es: 'No solo somos distribuidores; somos un brazo técnico de Perar en México. Nuestros especialistas le acompañan desde el dimensionamiento y la selección de internos (trim) hasta el mantenimiento post-venta.', en: 'We\'re not just distributors; we\'re Perar\'s technical arm in Mexico. Our specialists accompany you from sizing and trim selection to post-sale maintenance.' },
      cta: { es: 'Hablar con un Especialista en Válvulas Trunnion', en: 'Talk to a Trunnion Valve Specialist' },
    },
    ctaFinal: {
      h2: { es: '¿Busca la máxima seguridad para su proyecto de alta presión?', en: 'Looking for maximum safety for your high-pressure project?' },
      subtexto: { es: 'Consulte con nuestros ingenieros disponibilidad técnica y tiempos de entrega optimizados.', en: 'Consult with our engineers on technical availability and optimized delivery times.' },
      cta: { es: 'Solicitar Cotización Perar', en: 'Request Perar Quote' },
    },
  },

  // =========================================================================
  // 2. DELLA FOGLIA
  // =========================================================================
  {
    slug: 'della-foglia',
    name: { es: 'Della Foglia', en: 'Della Foglia' },
    tagline: { es: 'Extreme Service Solutions', en: 'Extreme Service Solutions' },
    description: {
      es: 'Fabricante italiano de válvulas de bola desde 1962. Especialistas en válvulas de 1/2" a 64", incluyendo subsea, criogénicas y alta presión hasta 15,000 psi.',
      en: 'Italian ball valve manufacturer since 1962. Specialists in valves from 1/2" to 64", including subsea, cryogenic, and high pressure up to 15,000 psi.',
    },
    longDescription: {
      es: 'Della Foglia es un fabricante italiano de válvulas de bola fundado en 1962 con una larga tradición de excelencia en ingeniería y manufactura.',
      en: 'Della Foglia is an Italian ball valve manufacturer founded in 1962 with a long tradition of engineering and manufacturing excellence.',
    },
    country: 'Italy',
    website: 'https://www.dellafoglia.it',
    logo: '/images/logos/della-foglia-official.svg',
    image: '/images/heroes/df-factory-warehouse.jpg',
    products: {
      es: ['Válvulas de bola flotante (1/2" - 64")', 'Válvulas de bola trunnion mounted', 'Válvulas de bola top entry', 'Válvulas subsea', 'Válvulas criogénicas', 'Válvulas de alta presión (hasta 15,000 psi)'],
      en: ['Floating ball valves (1/2" - 64")', 'Trunnion mounted ball valves', 'Top entry ball valves', 'Subsea valves', 'Cryogenic valves', 'High pressure valves (up to 15,000 psi)'],
    },
    certifications: [
      { name: 'API 6D' },
      { name: 'API 6A' },
      { name: 'API 6DSS', description: { es: 'Válvulas subsea', en: 'Subsea valves' } },
      { name: 'ISO 9001', description: { es: 'Sistema de gestión de calidad', en: 'Quality management system' } },
    ],
    heroBadges: ['Especialistas en Hidrógeno y Servicios Severos'],
    relatedProducts: ['valvulas-bola-trunnion-atornillado', 'valvulas-bola-flotante'],
    isPriority: true,
    heroH1: { es: 'Della Foglia: Soluciones avanzadas para los procesos industriales más exigentes.', en: 'Della Foglia: Advanced solutions for the most demanding industrial processes.' },
    heroH2: {
      es: 'Líder mundial en válvulas de bola de alta especificación. Ingeniería diseñada para soportar temperaturas extremas y fluidos críticos, garantizando la integridad total de su planta.',
      en: 'World leader in high-specification ball valves. Engineering designed to withstand extreme temperatures and critical fluids, guaranteeing total integrity of your plant.',
    },
    ctaPrimary: { es: 'Ver Catálogo Della Foglia', en: 'View Della Foglia Catalog' },
    ctaSecondary: { es: 'Solicitar Asesoría para Procesos Críticos', en: 'Request Advice for Critical Processes' },
    productCategories: [
      {
        title: { es: 'Válvulas de Bola con Asientos Metálicos', en: 'Metal Seated Ball Valves' },
        uso: { es: 'Diseñadas para servicios abrasivos y temperaturas que exceden los límites de los sellos blandos convencionales.', en: 'Designed for abrasive services and temperatures exceeding the limits of conventional soft seals.' },
        industrias: ['energetico'],
        cta: { es: 'Ver Detalles Técnicos', en: 'View Technical Details' },
        ctaLink: '/productos/valvulas-bola-trunnion-atornillado',
      },
      {
        title: { es: 'Válvulas para Hidrógeno y Descarbonización', en: 'Hydrogen & Decarbonization Valves' },
        uso: { es: 'Ingeniería de sellado avanzada para el manejo de moléculas de hidrógeno, asegurando cero fugas en la nueva frontera energética.', en: 'Advanced sealing engineering for handling hydrogen molecules, ensuring zero leaks in the new energy frontier.' },
        industrias: ['energetico'],
        cta: { es: 'Explorar Soluciones de Hidrógeno', en: 'Explore Hydrogen Solutions' },
        ctaLink: '/productos/valvulas-bola-flotante',
      },
      {
        title: { es: 'Válvulas de Bola de Entrada Superior (Top Entry)', en: 'Top Entry Ball Valves' },
        uso: { es: 'Ideales para instalaciones donde el mantenimiento en línea es crítico para evitar paros prolongados.', en: 'Ideal for installations where in-line maintenance is critical to avoid prolonged shutdowns.' },
        industrias: ['oil-gas'],
        cta: { es: 'Ver Ventajas de Mantenimiento', en: 'View Maintenance Advantages' },
        ctaLink: '/productos/valvulas-bola-flotante',
      },
    ],
    pas: {
      h2: { es: 'Protegemos su inversión en la transición hacia nuevas energías.', en: 'We protect your investment in the transition to new energies.' },
      problema: { es: 'Los procesos de descarbonización y el manejo de hidrógeno presentan riesgos de fragilización y fugas que las válvulas estándar no pueden gestionar.', en: 'Decarbonization processes and hydrogen handling present embrittlement and leak risks that standard valves cannot manage.' },
      agitacion: { es: 'Un error en la selección de materiales en procesos térmicos o de hidrógeno puede comprometer no solo la rentabilidad, sino la seguridad estructural de la planta.', en: 'A material selection error in thermal or hydrogen processes can compromise not only profitability, but the structural safety of the plant.' },
      solucion: { es: 'IPSA suministra tecnología Della Foglia, probada en los laboratorios más exigentes del mundo para garantizar un rendimiento impecable en servicios severos.', en: 'IPSA supplies Della Foglia technology, tested in the world\'s most demanding laboratories to guarantee impeccable performance in severe service.' },
      ctaInterconnect: { es: 'Asegure su cumplimiento normativo con nuestra División de Ingeniería', en: 'Ensure your regulatory compliance with our Engineering Division' },
      ctaInterconnectLink: '/servicios/automatizacion',
    },
    navCircular: [
      { label: { es: 'Energía de Próxima Generación', en: 'Next-Gen Energy' }, description: { es: 'Válvulas listas para la economía del hidrógeno.', en: 'Valves ready for the hydrogen economy.' }, link: '/industrias/energetico' },
      { label: { es: 'Procesos Químicos Agresivos', en: 'Aggressive Chemical Processes' }, description: { es: 'Resistencia superior a corrosión y abrasión.', en: 'Superior resistance to corrosion and abrasion.' }, link: '/industrias/privado' },
      { label: { es: 'Infraestructura Estratégica', en: 'Strategic Infrastructure' }, description: { es: 'Aislamiento de alta integridad para ductos.', en: 'High-integrity isolation for pipelines.' }, link: '/industrias/oil-gas' },
    ],
    inHouse: {
      h2: { es: 'Soporte In-House para aplicaciones de alta temperatura.', en: 'In-House Support for high-temperature applications.' },
      body: { es: 'La complejidad de los productos Della Foglia requiere una selección precisa. Nuestros ingenieros residentes colaboran con usted para definir las aleaciones y configuraciones de asientos que su proceso específico demanda.', en: 'The complexity of Della Foglia products requires precise selection. Our resident engineers collaborate with you to define the alloys and seat configurations your specific process demands.' },
      cta: { es: 'Hablar con un Especialista en Procesos Críticos', en: 'Talk to a Critical Process Specialist' },
    },
    ctaFinal: {
      h2: { es: '¿Tiene un desafío técnico que requiere ingeniería de clase mundial?', en: 'Have a technical challenge that requires world-class engineering?' },
      subtexto: { es: 'Consulte con nuestro equipo técnico disponibilidad y opciones de configuración Della Foglia.', en: 'Consult with our technical team on Della Foglia availability and configuration options.' },
      cta: { es: 'Solicitar Cotización Della Foglia', en: 'Request Della Foglia Quote' },
    },
  },

  // =========================================================================
  // 3. DHV VALVE GROUP
  // =========================================================================
  {
    slug: 'dhv',
    name: { es: 'DHV Valve Group', en: 'DHV Valve Group' },
    tagline: { es: 'Reliability & Versatility', en: 'Reliability & Versatility' },
    description: {
      es: 'Fabricante internacional de válvulas de compuerta, globo y retención con fundición propia de 26,500 m². El estándar en infraestructura de ductos y refinerías.',
      en: 'International manufacturer of gate, globe, and check valves with own foundry of 26,500 m². The standard in pipeline and refinery infrastructure.',
    },
    longDescription: {
      es: 'DHV Valve Group es un fabricante internacional de válvulas de alta calidad que cuenta con su propia fundición de 26,500 m² con una capacidad de producción de 8,000 toneladas por año.',
      en: 'DHV Valve Group is an international high-quality valve manufacturer with its own foundry of 26,500 m² with a production capacity of 8,000 tons per year.',
    },
    country: 'International',
    website: 'https://www.dhvindustries.com',
    logo: '/images/logos/dhv-official.png',
    image: '/images/products/dhv-slab-gates-factory.jpg',
    products: {
      es: ['Válvulas de compuerta (slab y wedge)', 'Válvulas de globo', 'Válvulas de retención (check)', 'Válvulas de bola flotante'],
      en: ['Gate valves (slab and wedge)', 'Globe valves', 'Check valves', 'Floating ball valves'],
    },
    certifications: [
      { name: 'API Q1' },
      { name: 'API 600' },
      { name: 'API 6D' },
      { name: 'ISO 9001', description: { es: 'Sistema de gestión de calidad', en: 'Quality management system' } },
      { name: 'NORSOK M-650', description: { es: 'Cualificación de fabricantes', en: 'Manufacturer qualification' } },
    ],
    heroBadges: ['Certificación API 600 y 6D — Listas para Envío'],
    relatedProducts: ['valvulas-compuerta', 'valvulas-globo', 'valvulas-check', 'valvulas-bola-flotante'],
    isPriority: true,
    heroH1: { es: 'DHV Valve Group: La columna vertebral de su integridad operativa.', en: 'DHV Valve Group: The backbone of your operational integrity.' },
    heroH2: {
      es: 'Válvulas de diseño superior bajo los estándares API y ASME. Disponibilidad masiva en México para proyectos de infraestructura, ductos y paros de planta programados.',
      en: 'Superior design valves under API and ASME standards. Massive availability in Mexico for infrastructure projects, pipelines, and planned plant shutdowns.',
    },
    ctaPrimary: { es: 'Ver Stock de Válvulas DHV', en: 'View DHV Valve Stock' },
    ctaSecondary: { es: 'Solicitar Soporte In-House para Reemplazos', en: 'Request In-House Support for Replacements' },
    productCategories: [
      {
        title: { es: 'Válvulas de Compuerta (Gate Valves)', en: 'Gate Valves' },
        uso: { es: 'Aislamiento principal en refinerías y ductos. Diseñadas para un flujo total con mínima caída de presión.', en: 'Primary isolation in refineries and pipelines. Designed for full flow with minimum pressure drop.' },
        industrias: ['oil-gas', 'energetico'],
        cta: { es: 'Ver Especificaciones de Compuerta', en: 'View Gate Valve Specs' },
        ctaLink: '/productos/valvulas-compuerta',
      },
      {
        title: { es: 'Válvulas de Globo (Globe Valves)', en: 'Globe Valves' },
        uso: { es: 'Regulación y estrangulación de flujo en servicios críticos de vapor y líquidos.', en: 'Flow regulation and throttling in critical steam and liquid services.' },
        industrias: ['energetico', 'privado'],
        cta: { es: 'Ver Especificaciones de Globo', en: 'View Globe Valve Specs' },
        ctaLink: '/productos/valvulas-globo',
      },
      {
        title: { es: 'Válvulas de Retención (Check Valves)', en: 'Check Valves' },
        uso: { es: 'El "comodín" de seguridad que previene el reflujo en sistemas de bombeo y estaciones de compresión.', en: 'The safety "wildcard" that prevents backflow in pumping systems and compression stations.' },
        industrias: ['oil-gas', 'privado'],
        cta: { es: 'Ver Especificaciones de Retención', en: 'View Check Valve Specs' },
        ctaLink: '/productos/valvulas-check',
      },
    ],
    pas: {
      h2: { es: 'Evite riesgos en sus paros de planta con suministro certificado.', en: 'Avoid risks in your plant shutdowns with certified supply.' },
      problema: { es: 'Los paros programados suelen enfrentar retrasos por falta de válvulas "comodín" que cumplan con los estándares ASME B16.34.', en: 'Planned shutdowns often face delays due to lack of "wildcard" valves that comply with ASME B16.34 standards.' },
      agitacion: { es: 'Instalar componentes sin respaldo técnico o de origen dudoso puede comprometer la integridad de la planta tras el arranque.', en: 'Installing components without technical backing or of dubious origin can compromise plant integrity after startup.' },
      solucion: { es: 'IPSA mantiene un inventario permanente de DHV Valve Group, asegurando que cada válvula instalada cuente con trazabilidad total y respaldo de fábrica.', en: 'IPSA maintains permanent DHV Valve Group inventory, ensuring every installed valve has full traceability and factory support.' },
      ctaInterconnect: { es: 'Optimice su gestión de activos con nuestra División de Ingeniería', en: 'Optimize your asset management with our Engineering Division' },
      ctaInterconnectLink: '/servicios/automatizacion',
    },
    navCircular: [
      { label: { es: 'Para Refinerías', en: 'For Refineries' }, description: { es: 'Cumplimiento estricto de API 600 para condiciones de alta temperatura.', en: 'Strict API 600 compliance for high-temperature conditions.' }, link: '/industrias/oil-gas' },
      { label: { es: 'Para Ciclo Combinado', en: 'For Combined Cycle' }, description: { es: 'Diseño ASME para sistemas de vapor y enfriamiento.', en: 'ASME design for steam and cooling systems.' }, link: '/industrias/energetico' },
      { label: { es: 'Para Tratamiento de Aguas', en: 'For Water Treatment' }, description: { es: 'Válvulas de bola flotante y check para procesos industriales generales.', en: 'Floating ball and check valves for general industrial processes.' }, link: '/industrias/privado' },
    ],
    inHouse: {
      h2: { es: 'Consultoría en sitio para la selección de materiales.', en: 'On-site consultancy for material selection.' },
      body: { es: 'No solo suministramos el equipo. Nuestros ingenieros residentes le ayudan a dimensionar la válvula DHV exacta según sus condiciones de presión y fluido, garantizando una vida útil prolongada.', en: 'We don\'t just supply the equipment. Our resident engineers help you size the exact DHV valve for your pressure and fluid conditions, ensuring extended service life.' },
      cta: { es: 'Hablar con un Especialista en Campo', en: 'Talk to a Field Specialist' },
    },
    ctaFinal: {
      h2: { es: '¿Listo para asegurar su inventario de válvulas DHV?', en: 'Ready to secure your DHV valve inventory?' },
      subtexto: { es: 'Consulte hoy mismo disponibilidad para envío nacional inmediato.', en: 'Check today for immediate national shipping availability.' },
      cta: { es: 'Solicitar Cotización DHV', en: 'Request DHV Quote' },
    },
  },

  // =========================================================================
  // 4. VERSA
  // =========================================================================
  {
    slug: 'versa',
    name: { es: 'Versa Valves', en: 'Versa Valves' },
    tagline: { es: 'Precision Control', en: 'Precision Control' },
    description: {
      es: 'Fabricante estadounidense de válvulas solenoides, control direccional neumático e hidráulico, y válvulas montaje NAMUR.',
      en: 'American manufacturer of solenoid valves, pneumatic and hydraulic directional control, and NAMUR mount valves.',
    },
    longDescription: {
      es: 'Versa Valves es un fabricante estadounidense líder en válvulas solenoides y de control direccional para aplicaciones industriales.',
      en: 'Versa Valves is a leading American manufacturer of solenoid and directional control valves for industrial applications.',
    },
    country: 'USA',
    website: 'https://www.versa-valves.com',
    logo: '/images/logos/versa-official.png',
    image: '/images/products/versa-product-family.webp',
    products: {
      es: ['Válvulas solenoides', 'Control direccional neumático', 'Control direccional hidráulico', 'Válvulas montaje NAMUR'],
      en: ['Solenoid valves', 'Pneumatic directional control', 'Hydraulic directional control', 'NAMUR mount valves'],
    },
    certifications: [
      { name: 'SIL 3', description: { es: 'Seguridad funcional', en: 'Functional safety' } },
      { name: 'ATEX', description: { es: 'Ambientes explosivos', en: 'Explosive atmospheres' } },
      { name: 'UL Listed', description: { es: 'Certificación de seguridad UL', en: 'UL safety certification' } },
      { name: 'CSA', description: { es: 'Áreas clasificadas', en: 'Classified areas' } },
    ],
    heroBadges: ['Certificación SIL 3 — Listas para entrega inmediata'],
    relatedProducts: ['valvulas-neumaticas-solenoides', 'valvulas-automatizadas'],
    isPriority: true,
    heroH1: { es: 'Versa Valves: Excelencia en control neumático para condiciones críticas.', en: 'Versa Valves: Excellence in pneumatic control for critical conditions.' },
    heroH2: {
      es: 'Válvulas de control direccional de alto rendimiento. Diseñadas para operar sin fallas en ambientes corrosivos, garantizando la seguridad funcional de sus procesos automatizados.',
      en: 'High-performance directional control valves. Designed to operate without failures in corrosive environments, guaranteeing the functional safety of your automated processes.',
    },
    ctaPrimary: { es: 'Consultar Stock de Solenoides Versa', en: 'Check Versa Solenoid Stock' },
    ctaSecondary: { es: 'Solicitar Ingeniería de Automatización', en: 'Request Automation Engineering' },
    productCategories: [
      {
        title: { es: 'Válvulas Solenoide de la Serie V', en: 'Series V Solenoid Valves' },
        uso: { es: 'El estándar de la industria para el control de actuadores. Disponibles en configuraciones de 3 y 4 vías para aplicaciones exigentes.', en: 'The industry standard for actuator control. Available in 3 and 4-way configurations for demanding applications.' },
        industrias: ['oil-gas', 'energetico'],
        cta: { es: 'Ver Ficha Técnica Serie V', en: 'View Series V Data Sheet' },
        ctaLink: '/productos/valvulas-neumaticas-solenoides',
      },
      {
        title: { es: 'Válvulas Piloto y de Control Direccional', en: 'Pilot & Directional Control Valves' },
        uso: { es: 'Control neumático e hidráulico de alta velocidad con reset manual o automático para sistemas de seguridad.', en: 'High-speed pneumatic and hydraulic control with manual or automatic reset for safety systems.' },
        industrias: ['energetico', 'privado'],
        cta: { es: 'Explorar Válvulas Piloto', en: 'Explore Pilot Valves' },
        ctaLink: '/productos/valvulas-neumaticas-solenoides',
      },
      {
        title: { es: 'Paquetes de Aire Modular (MAP)', en: 'Modular Air Packages (MAP)' },
        uso: { es: 'Estaciones de control compactas que integran filtros, reguladores y válvulas en un solo bloque, simplificando la instalación en sitio.', en: 'Compact control stations that integrate filters, regulators, and valves in a single block, simplifying on-site installation.' },
        industrias: ['privado'],
        cta: { es: 'Ver Sistemas Modulares', en: 'View Modular Systems' },
        ctaLink: '/productos/valvulas-neumaticas-solenoides',
      },
    ],
    pas: {
      h2: { es: 'Blindamos su seguridad funcional con componentes de alta confiabilidad.', en: 'We shield your functional safety with high-reliability components.' },
      problema: { es: 'El uso de componentes de automatización de baja calidad en ambientes corrosivos provoca paros inesperados y compromete los protocolos de seguridad.', en: 'Using low-quality automation components in corrosive environments causes unexpected shutdowns and compromises safety protocols.' },
      agitacion: { es: 'Una válvula solenoide que se bloquea en una zona de riesgo puede impedir un cierre de emergencia, derivando en consecuencias catastróficas.', en: 'A solenoid valve that jams in a risk zone can prevent an emergency shutdown, leading to catastrophic consequences.' },
      solucion: { es: 'IPSA integra válvulas Versa con certificación SIL 3, ofreciendo el respaldo de una marca líder que garantiza la ejecución de cada comando, siempre.', en: 'IPSA integrates Versa valves with SIL 3 certification, offering the backing of a leading brand that guarantees the execution of every command, always.' },
      ctaInterconnect: { es: 'Conozca cómo nuestra División de Automatización integra estos componentes en sus tableros de control', en: 'Learn how our Automation Division integrates these components into your control panels' },
      ctaInterconnectLink: '/servicios/automatizacion',
    },
    navCircular: [
      { label: { es: 'Zonas Clasificadas', en: 'Classified Areas' }, description: { es: 'Solenoides a prueba de explosión para refinerías y plataformas.', en: 'Explosion-proof solenoids for refineries and platforms.' }, link: '/industrias/oil-gas' },
      { label: { es: 'Control de Turbinas', en: 'Turbine Control' }, description: { es: 'Pilotos de alta velocidad para la regulación de plantas eléctricas.', en: 'High-speed pilots for power plant regulation.' }, link: '/industrias/energetico' },
      { label: { es: 'Automatización General', en: 'General Automation' }, description: { es: 'Control neumático eficiente para líneas de producción continua.', en: 'Efficient pneumatic control for continuous production lines.' }, link: '/industrias/privado' },
    ],
    inHouse: {
      h2: { es: 'Ingeniería de Aplicación Versa en sus instalaciones.', en: 'Versa Application Engineering at your facilities.' },
      body: { es: 'No solo suministramos el solenoide. Nuestros especialistas in-house le ayudan a diseñar la arquitectura de control neumático más eficiente, asegurando la compatibilidad total con sus actuadores.', en: 'We don\'t just supply the solenoid. Our in-house specialists help you design the most efficient pneumatic control architecture, ensuring total compatibility with your actuators.' },
      cta: { es: 'Hablar con un Especialista en Automatización', en: 'Talk to an Automation Specialist' },
    },
    ctaFinal: {
      h2: { es: '¿Requiere automatizar un proceso crítico con tecnología Versa?', en: 'Need to automate a critical process with Versa technology?' },
      subtexto: { es: 'Consulte nuestro stock permanente y obtenga asesoría técnica inmediata.', en: 'Check our permanent stock and get immediate technical advice.' },
      cta: { es: 'Solicitar Cotización de Soluciones Versa', en: 'Request Versa Solutions Quote' },
    },
  },

  // =========================================================================
  // 5. MASONEILAN (NEW - promoted to priority per UX Writing)
  // =========================================================================
  {
    slug: 'masoneilan',
    name: { es: 'Masoneilan', en: 'Masoneilan' },
    tagline: { es: 'Process Control & Regulation', en: 'Process Control & Regulation' },
    description: {
      es: 'Referencia mundial en válvulas de control e instrumentación inteligente para la estabilidad de flujos en procesos industriales.',
      en: 'World reference in control valves and intelligent instrumentation for flow stability in industrial processes.',
    },
    longDescription: {
      es: 'Masoneilan (Baker Hughes) es el referente mundial en válvulas de control de procesos e instrumentación inteligente. Sus posicionadores digitales y válvulas de control son la columna vertebral de la automatización en plantas de generación, refinerías y procesos químicos.',
      en: 'Masoneilan (Baker Hughes) is the world reference in process control valves and intelligent instrumentation. Their digital positioners and control valves are the backbone of automation in power plants, refineries, and chemical processes.',
    },
    country: 'USA',
    website: 'https://valves.bakerhughes.com/masoneilan',
    logo: '/images/logos/bakerhughes.webp',
    image: '/images/heroes/masoneilan-hero.jpg',
    products: {
      es: ['Válvulas de control tipo globo', 'Válvulas de control rotativas', 'Posicionadores inteligentes', 'Reguladores de presión'],
      en: ['Globe-type control valves', 'Rotary control valves', 'Smart positioners', 'Pressure regulators'],
    },
    certifications: [
      { name: 'IEC 61511', description: { es: 'Seguridad funcional de procesos', en: 'Process functional safety' } },
      { name: 'ASME B16.34' },
      { name: 'SIL 3', description: { es: 'Nivel de integridad de seguridad III', en: 'Safety Integrity Level III' } },
      { name: 'ISA 75.01', description: { es: 'Dimensionamiento de válvulas de control', en: 'Control valve sizing' } },
    ],
    heroBadges: ['Más de 140 años de innovación en control de procesos'],
    relatedProducts: ['valvulas-control', 'valvulas-automatizadas'],
    isPriority: true,
    heroH1: { es: 'Masoneilan: Precisión absoluta en el control de sus procesos.', en: 'Masoneilan: Absolute precision in your process control.' },
    heroH2: {
      es: 'Instrumentación inteligente y posicionadores de última generación que estabilizan las variables críticas de su planta. La tecnología que convierte datos en decisiones operativas.',
      en: 'Intelligent instrumentation and state-of-the-art positioners that stabilize the critical variables of your plant. The technology that converts data into operational decisions.',
    },
    ctaPrimary: { es: 'Ver Catálogo Masoneilan', en: 'View Masoneilan Catalog' },
    ctaSecondary: { es: 'Solicitar Diagnóstico de Control', en: 'Request Control Diagnosis' },
    productCategories: [
      {
        title: { es: 'Válvulas de Control Tipo Globo', en: 'Globe-Type Control Valves' },
        uso: { es: 'Regulación precisa de flujo, presión y temperatura en servicios de vapor, líquidos y gases de proceso. Incluye la icónica serie 41005 guiada por jaula con más de 100 años de trayectoria comprobada.', en: 'Precise flow, pressure, and temperature regulation in steam, liquid, and process gas services. Includes the iconic cage-guided 41005 series with over 100 years of proven track record.' },
        industrias: ['energetico', 'oil-gas'],
        cta: { es: 'Ver Especificaciones de Control', en: 'View Control Valve Specs' },
        ctaLink: '/productos/valvulas-control',
      },
      {
        title: { es: 'Posicionadores Inteligentes', en: 'Smart Positioners' },
        uso: { es: 'Diagnóstico en tiempo real y ajuste automático para maximizar la eficiencia del lazo de control. Tecnología de detección de posición sin contacto y certificación SIL 3 para sistemas de parada de emergencia.', en: 'Real-time diagnostics and automatic adjustment to maximize control loop efficiency. Non-contact position sensing technology and SIL 3 certification for emergency shutdown systems.' },
        industrias: ['energetico', 'privado'],
        cta: { es: 'Explorar Instrumentación', en: 'Explore Instrumentation' },
        ctaLink: '/productos/valvulas-control',
      },
      {
        title: { es: 'Reguladores de Presión', en: 'Pressure Regulators' },
        uso: { es: 'Estabilización autónoma de líneas de vapor y gases industriales en plantas de manufactura. Soluciones autocontenidas que no requieren alimentación externa.', en: 'Autonomous stabilization of steam and industrial gas lines in manufacturing plants. Self-contained solutions requiring no external power supply.' },
        industrias: ['privado'],
        cta: { es: 'Ver Reguladores', en: 'View Regulators' },
        ctaLink: '/productos/valvulas-control',
      },
    ],
    pas: {
      h2: { es: 'Estabilidad garantizada en sus variables críticas de proceso.', en: 'Guaranteed stability in your critical process variables.' },
      problema: { es: 'La falta de precisión en el control de flujo y temperatura genera inestabilidad en los ciclos de vapor y reduce el ROI de sus turbinas. Sin diagnóstico predictivo, los problemas se detectan cuando ya es demasiado tarde.', en: 'Lack of precision in flow and temperature control generates instability in steam cycles and reduces your turbine ROI. Without predictive diagnostics, problems are detected when it is already too late.' },
      agitacion: { es: 'Un posicionador desajustado o una válvula de control desgastada puede derivar en variabilidad del producto, desperdicio energético y paros de emergencia que cuestan millones en producción perdida.', en: 'A misadjusted positioner or worn control valve can lead to product variability, energy waste, and emergency shutdowns that cost millions in lost production.' },
      solucion: { es: 'IPSA integra tecnología Masoneilan con soporte de automatización residente, asegurando que cada lazo de control opere en su punto óptimo. Nuestro acceso directo a piezas OEM y el software de diagnóstico ValVue garantizan una respuesta inmediata.', en: 'IPSA integrates Masoneilan technology with resident automation support, ensuring every control loop operates at its optimal point. Our direct access to OEM parts and ValVue diagnostic software guarantee an immediate response.' },
      ctaInterconnect: { es: 'Conozca nuestra División de Automatización para diagnóstico en tiempo real', en: 'Learn about our Automation Division for real-time diagnostics' },
      ctaInterconnectLink: '/servicios/automatizacion',
    },
    navCircular: [
      { label: { es: 'Generación de Energía', en: 'Power Generation' }, description: { es: 'Control preciso de vapor y turbinas. Bypass, acondicionamiento y agua de alimentación de calderas.', en: 'Precise steam and turbine control. Bypass, conditioning, and boiler feedwater.' }, link: '/industrias/energetico' },
      { label: { es: 'Oil & Gas', en: 'Oil & Gas' }, description: { es: 'Regulación en estaciones de bombeo, procesamiento de hidrocarburos y plataformas offshore.', en: 'Regulation at pumping stations, hydrocarbon processing, and offshore platforms.' }, link: '/industrias/oil-gas' },
      { label: { es: 'Manufactura', en: 'Manufacturing' }, description: { es: 'Estabilización de procesos industriales, pulpa y papel, y líneas de producción continua.', en: 'Industrial process stabilization, pulp and paper, and continuous production lines.' }, link: '/industrias/privado' },
    ],
    inHouse: {
      h2: { es: 'Diagnóstico y calibración en sitio.', en: 'On-site diagnostics and calibration.' },
      body: { es: 'Nuestros especialistas en automatización realizan diagnósticos predictivos de sus válvulas de control Masoneilan directamente en su planta, maximizando el tiempo entre mantenimientos. Con acceso al software ValVue y piezas OEM originales, restauramos el rendimiento de fábrica sin tiempos de espera.', en: 'Our automation specialists perform predictive diagnostics on your Masoneilan control valves directly at your plant, maximizing time between maintenance. With access to ValVue software and original OEM parts, we restore factory performance with no waiting time.' },
      cta: { es: 'Hablar con un Especialista en Control', en: 'Talk to a Control Specialist' },
    },
    ctaFinal: {
      h2: { es: '¿Busca maximizar la estabilidad de sus procesos de control?', en: 'Looking to maximize the stability of your control processes?' },
      subtexto: { es: 'Consulte con nuestros ingenieros de automatización y obtenga un plan de optimización personalizado.', en: 'Consult with our automation engineers and get a personalized optimization plan.' },
      cta: { es: 'Solicitar Cotización Masoneilan', en: 'Request Masoneilan Quote' },
    },
  },
];
