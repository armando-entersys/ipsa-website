export interface SupplierCertification {
  name: string;
  description?: { es: string; en: string };
}

export interface Supplier {
  slug: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  country: string;
  logo: string;
  image: string;
  website?: string;
  products: { es: string[]; en: string[] };
  certifications: SupplierCertification[];
  relatedProducts: string[];
}

export const suppliers: Supplier[] = [
  {
    slug: 'dhv',
    name: {
      es: 'DHV Valve Group',
      en: 'DHV Valve Group',
    },
    description: {
      es: 'Fabricante internacional de válvulas de bola trunnion mounted, válvulas de compuerta y válvulas de bola flotante con fundición propia de 26,500 m2.',
      en: 'International manufacturer of trunnion mounted ball valves, gate valves, and floating ball valves with own foundry of 26,500 m2.',
    },
    longDescription: {
      es: 'DHV Valve Group es un fabricante internacional de válvulas de alta calidad que cuenta con su propia fundición de 26,500 m2 con una capacidad de producción de 8,000 toneladas por año. Esta integración vertical permite un control total sobre la calidad del material desde la materia prima hasta el producto terminado. DHV produce válvulas de bola trunnion mounted, válvulas de compuerta tipo slab y wedge, y válvulas de bola flotante para las aplicaciones más exigentes en la industria del petróleo y gas. Sus productos cumplen con las certificaciones más estrictas de la industria incluyendo API Q1, API 6D, API 6A, normas ISO y NORSOK M-650, así como certificación SIL III para aplicaciones de seguridad.',
      en: 'DHV Valve Group is an international high-quality valve manufacturer that has its own foundry of 26,500 m2 with a production capacity of 8,000 tons per year. This vertical integration allows total control over material quality from raw material to finished product. DHV produces trunnion mounted ball valves, slab and wedge gate valves, and floating ball valves for the most demanding applications in the oil and gas industry. Their products comply with the industry\'s most stringent certifications including API Q1, API 6D, API 6A, ISO standards, and NORSOK M-650, as well as SIL III certification for safety applications.',
    },
    country: 'International',
    logo: '/images/suppliers/dhv-logo.png',
    image: '/images/suppliers/dhv.jpg',
    products: {
      es: [
        'Válvulas de bola trunnion mounted',
        'Válvulas de compuerta (slab y wedge)',
        'Válvulas de bola flotante',
        'Válvulas forjadas',
      ],
      en: [
        'Trunnion mounted ball valves',
        'Gate valves (slab and wedge)',
        'Floating ball valves',
        'Forged valves',
      ],
    },
    certifications: [
      { name: 'API Q1' },
      { name: 'API 6D' },
      { name: 'API 6A' },
      {
        name: 'ISO 9001',
        description: {
          es: 'Sistema de gestión de calidad',
          en: 'Quality management system',
        },
      },
      {
        name: 'ISO 14001',
        description: {
          es: 'Sistema de gestión ambiental',
          en: 'Environmental management system',
        },
      },
      {
        name: 'ISO 45001',
        description: {
          es: 'Sistema de gestión de seguridad y salud en el trabajo',
          en: 'Occupational health and safety management system',
        },
      },
      {
        name: 'NORSOK M-650',
        description: {
          es: 'Cualificación de fabricantes de válvulas especiales',
          en: 'Qualification of special valve manufacturers',
        },
      },
      {
        name: 'SIL III',
        description: {
          es: 'Nivel de integridad de seguridad III',
          en: 'Safety Integrity Level III',
        },
      },
    ],
    relatedProducts: ['valvulas-bola', 'valvulas-compuerta'],
  },
  {
    slug: 'della-foglia',
    name: {
      es: 'Della Foglia',
      en: 'Della Foglia',
    },
    description: {
      es: 'Fabricante italiano de válvulas de bola desde 1962. Especialistas en válvulas de 1/2" a 64", incluyendo subsea, criogénicas y alta presión hasta 15,000 psi.',
      en: 'Italian ball valve manufacturer since 1962. Specialists in valves from 1/2" to 64", including subsea, cryogenic, and high pressure up to 15,000 psi.',
    },
    longDescription: {
      es: 'Della Foglia es un fabricante italiano de válvulas de bola fundado en 1962 con una larga tradición de excelencia en ingeniería y manufactura. La empresa se especializa en válvulas de bola de 1/2" a 64" en una amplia gama de configuraciones incluyendo flotante, trunnion mounted, top entry, subsea y criogénicas. Della Foglia es reconocida por su capacidad de fabricar válvulas de alta presión hasta 15,000 psi para aplicaciones de boca de pozo y producción. Sus productos están aprobados por los principales operadores internacionales incluyendo Shell, BP, Petrobras y PEMEX, lo que demuestra la confiabilidad y calidad de sus productos en las aplicaciones más críticas del mundo.',
      en: 'Della Foglia is an Italian ball valve manufacturer founded in 1962 with a long tradition of engineering and manufacturing excellence. The company specializes in ball valves from 1/2" to 64" in a wide range of configurations including floating, trunnion mounted, top entry, subsea, and cryogenic. Della Foglia is recognized for its ability to manufacture high-pressure valves up to 15,000 psi for wellhead and production applications. Their products are approved by major international operators including Shell, BP, Petrobras, and PEMEX, demonstrating the reliability and quality of their products in the world\'s most critical applications.',
    },
    country: 'Italy',
    logo: '/images/suppliers/della-foglia-logo.png',
    image: '/images/suppliers/della-foglia.jpg',
    products: {
      es: [
        'Válvulasde bola flotante (1/2" - 64")',
        'Válvulasde bola trunnion mounted',
        'Válvulasde bola top entry',
        'Válvulassubsea',
        'Válvulascriogénicas',
        'Válvulasde alta presión (hasta 15,000 psi)',
      ],
      en: [
        'Floating ball valves (1/2" - 64")',
        'Trunnion mounted ball valves',
        'Top entry ball valves',
        'Subsea valves',
        'Cryogenic valves',
        'High pressure valves (up to 15,000 psi)',
      ],
    },
    certifications: [
      { name: 'API 6D' },
      { name: 'API 6A' },
      {
        name: 'API 6DSS',
        description: {
          es: 'Válvulassubsea',
          en: 'Subsea valves',
        },
      },
      {
        name: 'ISO 9001',
        description: {
          es: 'Sistema de gestión de calidad',
          en: 'Quality management system',
        },
      },
      {
        name: 'Approved by Shell',
        description: {
          es: 'Aprobado por Shell para suministro global',
          en: 'Approved by Shell for global supply',
        },
      },
      {
        name: 'Approved by BP',
        description: {
          es: 'Aprobado por BP para suministro global',
          en: 'Approved by BP for global supply',
        },
      },
      {
        name: 'Approved by Petrobras',
        description: {
          es: 'Aprobado por Petrobras',
          en: 'Approved by Petrobras',
        },
      },
      {
        name: 'Approved by PEMEX',
        description: {
          es: 'Aprobado por PEMEX',
          en: 'Approved by PEMEX',
        },
      },
    ],
    relatedProducts: ['valvulas-bola'],
  },
  {
    slug: 'perar',
    name: {
      es: 'Perar',
      en: 'Perar',
    },
    description: {
      es: 'Fabricante italiano de válvulas de bola trunnion mounted con cuerpo soldado, tamaños de 2" a 48", clases ANSI 150 a 2500.',
      en: 'Italian manufacturer of trunnion mounted ball valves with welded body, sizes from 2" to 48", ANSI class 150 to 2500.',
    },
    longDescription: {
      es: 'Perar es un fabricante italiano especializado en la producción de válvulas de bola trunnion mounted de cuerpo soldado. Sus válvulas se fabrican en tamaños de 2" a 48" y clases de presión ANSI 150 a 2500, cubriendo un amplio rango de aplicaciones en la industria del petróleo y gas. La tecnología de cuerpo soldado de Perar ofrece ventajas significativas en términos de integridad estructural, reducción de peso y eliminación de potenciales puntos de fuga en las juntas del cuerpo. Cada válvula se fabrica bajo estrictos controles de calidad y se somete a pruebas completas en fábrica antes de su envío.',
      en: 'Perar is an Italian manufacturer specialized in the production of trunnion mounted ball valves with welded body. Their valves are manufactured in sizes from 2" to 48" and pressure classes ANSI 150 to 2500, covering a wide range of applications in the oil and gas industry. Perar\'s welded body technology offers significant advantages in terms of structural integrity, weight reduction, and elimination of potential leak points at body joints. Each valve is manufactured under strict quality controls and undergoes complete factory testing before shipment.',
    },
    country: 'Italy',
    logo: '/images/suppliers/perar-logo.png',
    image: '/images/suppliers/perar.jpg',
    products: {
      es: [
        'Válvulasde bola trunnion mounted',
        'Válvulasde cuerpo soldado',
        'Tamaños de 2" a 48"',
        'Clases ANSI 150 a 2500',
      ],
      en: [
        'Trunnion mounted ball valves',
        'Welded body valves',
        'Sizes from 2" to 48"',
        'ANSI class 150 to 2500',
      ],
    },
    certifications: [
      { name: 'API 6D' },
      {
        name: 'ISO 9001',
        description: {
          es: 'Sistema de gestión de calidad',
          en: 'Quality management system',
        },
      },
    ],
    relatedProducts: ['valvulas-bola'],
  },
  {
    slug: 'versa',
    name: {
      es: 'Versa Valves',
      en: 'Versa Valves',
    },
    description: {
      es: 'Fabricante estadounidense de válvulas solenoides, control direccional neumático e hidráulico, y válvulas montaje NAMUR.',
      en: 'American manufacturer of solenoid valves, pneumatic and hydraulic directional control, and NAMUR mount valves.',
    },
    longDescription: {
      es: 'Versa Valves es un fabricante estadounidense líder en válvulas solenoides y de control direccional para aplicaciones industriales. Su línea de productos incluye válvulas solenoides para control direccional neumático, válvulas de control direccional hidráulico y válvulas de montaje NAMUR diseñadas específicamente para la integración directa con actuadores. Los productos de Versa son reconocidos por su confiabilidad, larga vida útil y capacidad de operar en ambientes peligrosos. Sus válvulas cuentan con certificaciones para áreas clasificadas y son ampliamente utilizadas en la industria del petróleo, gas y petroquímica para el control de actuadores y sistemas de automatización.',
      en: 'Versa Valves is a leading American manufacturer of solenoid and directional control valves for industrial applications. Their product line includes solenoid valves for pneumatic directional control, hydraulic directional control valves, and NAMUR mount valves specifically designed for direct integration with actuators. Versa products are recognized for their reliability, long service life, and ability to operate in hazardous environments. Their valves carry certifications for classified areas and are widely used in the oil, gas, and petrochemical industry for actuator control and automation systems.',
    },
    country: 'USA',
    logo: '/images/suppliers/versa-logo.png',
    image: '/images/suppliers/versa.jpg',
    products: {
      es: [
        'Válvulassolenoides',
        'Control direccional neumático',
        'Control direccional hidráulico',
        'Válvulasmontaje NAMUR',
      ],
      en: [
        'Solenoid valves',
        'Pneumatic directional control',
        'Hydraulic directional control',
        'NAMUR mount valves',
      ],
    },
    certifications: [
      {
        name: 'ATEX',
        description: {
          es: 'Certificación para ambientes explosivos',
          en: 'Certification for explosive atmospheres',
        },
      },
      {
        name: 'UL Listed',
        description: {
          es: 'Certificación de seguridad UL',
          en: 'UL safety certification',
        },
      },
      {
        name: 'CSA',
        description: {
          es: 'Certificación CSA para áreas clasificadas',
          en: 'CSA certification for classified areas',
        },
      },
    ],
    relatedProducts: ['valvulas-solenoides'],
  },
];
