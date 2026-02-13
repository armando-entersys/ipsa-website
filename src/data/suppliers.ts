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
      es: 'Fabricante internacional de valvulas de bola trunnion mounted, valvulas de compuerta y valvulas de bola flotante con fundicion propia de 26,500 m2.',
      en: 'International manufacturer of trunnion mounted ball valves, gate valves, and floating ball valves with own foundry of 26,500 m2.',
    },
    longDescription: {
      es: 'DHV Valve Group es un fabricante internacional de valvulas de alta calidad que cuenta con su propia fundicion de 26,500 m2 con una capacidad de produccion de 8,000 toneladas por ano. Esta integracion vertical permite un control total sobre la calidad del material desde la materia prima hasta el producto terminado. DHV produce valvulas de bola trunnion mounted, valvulas de compuerta tipo slab y wedge, y valvulas de bola flotante para las aplicaciones mas exigentes en la industria del petroleo y gas. Sus productos cumplen con las certificaciones mas estrictas de la industria incluyendo API Q1, API 6D, API 6A, normas ISO y NORSOK M-650, asi como certificacion SIL III para aplicaciones de seguridad.',
      en: 'DHV Valve Group is an international high-quality valve manufacturer that has its own foundry of 26,500 m2 with a production capacity of 8,000 tons per year. This vertical integration allows total control over material quality from raw material to finished product. DHV produces trunnion mounted ball valves, slab and wedge gate valves, and floating ball valves for the most demanding applications in the oil and gas industry. Their products comply with the industry\'s most stringent certifications including API Q1, API 6D, API 6A, ISO standards, and NORSOK M-650, as well as SIL III certification for safety applications.',
    },
    country: 'International',
    logo: '/images/suppliers/dhv-logo.png',
    image: '/images/suppliers/dhv.jpg',
    products: {
      es: [
        'Valvulas de bola trunnion mounted',
        'Valvulas de compuerta (slab y wedge)',
        'Valvulas de bola flotante',
        'Valvulas forjadas',
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
          es: 'Sistema de gestion de calidad',
          en: 'Quality management system',
        },
      },
      {
        name: 'ISO 14001',
        description: {
          es: 'Sistema de gestion ambiental',
          en: 'Environmental management system',
        },
      },
      {
        name: 'ISO 45001',
        description: {
          es: 'Sistema de gestion de seguridad y salud en el trabajo',
          en: 'Occupational health and safety management system',
        },
      },
      {
        name: 'NORSOK M-650',
        description: {
          es: 'Cualificacion de fabricantes de valvulas especiales',
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
      es: 'Fabricante italiano de valvulas de bola desde 1962. Especialistas en valvulas de 1/2" a 64", incluyendo subsea, criogenicas y alta presion hasta 15,000 psi.',
      en: 'Italian ball valve manufacturer since 1962. Specialists in valves from 1/2" to 64", including subsea, cryogenic, and high pressure up to 15,000 psi.',
    },
    longDescription: {
      es: 'Della Foglia es un fabricante italiano de valvulas de bola fundado en 1962 con una larga tradicion de excelencia en ingenieria y manufactura. La empresa se especializa en valvulas de bola de 1/2" a 64" en una amplia gama de configuraciones incluyendo flotante, trunnion mounted, top entry, subsea y criogenicas. Della Foglia es reconocida por su capacidad de fabricar valvulas de alta presion hasta 15,000 psi para aplicaciones de boca de pozo y produccion. Sus productos estan aprobados por los principales operadores internacionales incluyendo Shell, BP, Petrobras y PEMEX, lo que demuestra la confiabilidad y calidad de sus productos en las aplicaciones mas criticas del mundo.',
      en: 'Della Foglia is an Italian ball valve manufacturer founded in 1962 with a long tradition of engineering and manufacturing excellence. The company specializes in ball valves from 1/2" to 64" in a wide range of configurations including floating, trunnion mounted, top entry, subsea, and cryogenic. Della Foglia is recognized for its ability to manufacture high-pressure valves up to 15,000 psi for wellhead and production applications. Their products are approved by major international operators including Shell, BP, Petrobras, and PEMEX, demonstrating the reliability and quality of their products in the world\'s most critical applications.',
    },
    country: 'Italy',
    logo: '/images/suppliers/della-foglia-logo.png',
    image: '/images/suppliers/della-foglia.jpg',
    products: {
      es: [
        'Valvulas de bola flotante (1/2" - 64")',
        'Valvulas de bola trunnion mounted',
        'Valvulas de bola top entry',
        'Valvulas subsea',
        'Valvulas criogenicas',
        'Valvulas de alta presion (hasta 15,000 psi)',
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
          es: 'Valvulas subsea',
          en: 'Subsea valves',
        },
      },
      {
        name: 'ISO 9001',
        description: {
          es: 'Sistema de gestion de calidad',
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
      es: 'Fabricante italiano de valvulas de bola trunnion mounted con cuerpo soldado, tamanos de 2" a 48", clases ANSI 150 a 2500.',
      en: 'Italian manufacturer of trunnion mounted ball valves with welded body, sizes from 2" to 48", ANSI class 150 to 2500.',
    },
    longDescription: {
      es: 'Perar es un fabricante italiano especializado en la produccion de valvulas de bola trunnion mounted de cuerpo soldado. Sus valvulas se fabrican en tamanos de 2" a 48" y clases de presion ANSI 150 a 2500, cubriendo un amplio rango de aplicaciones en la industria del petroleo y gas. La tecnologia de cuerpo soldado de Perar ofrece ventajas significativas en terminos de integridad estructural, reduccion de peso y eliminacion de potenciales puntos de fuga en las juntas del cuerpo. Cada valvula se fabrica bajo estrictos controles de calidad y se somete a pruebas completas en fabrica antes de su envio.',
      en: 'Perar is an Italian manufacturer specialized in the production of trunnion mounted ball valves with welded body. Their valves are manufactured in sizes from 2" to 48" and pressure classes ANSI 150 to 2500, covering a wide range of applications in the oil and gas industry. Perar\'s welded body technology offers significant advantages in terms of structural integrity, weight reduction, and elimination of potential leak points at body joints. Each valve is manufactured under strict quality controls and undergoes complete factory testing before shipment.',
    },
    country: 'Italy',
    logo: '/images/suppliers/perar-logo.png',
    image: '/images/suppliers/perar.jpg',
    products: {
      es: [
        'Valvulas de bola trunnion mounted',
        'Valvulas de cuerpo soldado',
        'Tamanos de 2" a 48"',
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
          es: 'Sistema de gestion de calidad',
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
      es: 'Fabricante estadounidense de valvulas solenoides, control direccional neumatico e hidraulico, y valvulas montaje NAMUR.',
      en: 'American manufacturer of solenoid valves, pneumatic and hydraulic directional control, and NAMUR mount valves.',
    },
    longDescription: {
      es: 'Versa Valves es un fabricante estadounidense lider en valvulas solenoides y de control direccional para aplicaciones industriales. Su linea de productos incluye valvulas solenoides para control direccional neumatico, valvulas de control direccional hidraulico y valvulas de montaje NAMUR disenadas especificamente para la integracion directa con actuadores. Los productos de Versa son reconocidos por su confiabilidad, larga vida util y capacidad de operar en ambientes peligrosos. Sus valvulas cuentan con certificaciones para areas clasificadas y son ampliamente utilizadas en la industria del petroleo, gas y petroquimica para el control de actuadores y sistemas de automatizacion.',
      en: 'Versa Valves is a leading American manufacturer of solenoid and directional control valves for industrial applications. Their product line includes solenoid valves for pneumatic directional control, hydraulic directional control valves, and NAMUR mount valves specifically designed for direct integration with actuators. Versa products are recognized for their reliability, long service life, and ability to operate in hazardous environments. Their valves carry certifications for classified areas and are widely used in the oil, gas, and petrochemical industry for actuator control and automation systems.',
    },
    country: 'USA',
    logo: '/images/suppliers/versa-logo.png',
    image: '/images/suppliers/versa.jpg',
    products: {
      es: [
        'Valvulas solenoides',
        'Control direccional neumatico',
        'Control direccional hidraulico',
        'Valvulas montaje NAMUR',
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
          es: 'Certificacion para ambientes explosivos',
          en: 'Certification for explosive atmospheres',
        },
      },
      {
        name: 'UL Listed',
        description: {
          es: 'Certificacion de seguridad UL',
          en: 'UL safety certification',
        },
      },
      {
        name: 'CSA',
        description: {
          es: 'Certificacion CSA para areas clasificadas',
          en: 'CSA certification for classified areas',
        },
      },
    ],
    relatedProducts: ['valvulas-solenoides'],
  },
];
