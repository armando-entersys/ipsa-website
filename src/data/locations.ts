export interface Location {
  slug: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  type: 'headquarters' | 'office' | 'warehouse' | 'workshop';
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  coordinates?: { lat: number; lng: number };
  facilities: { es: string[]; en: string[] };
  isHeadquarters: boolean;
}

export const locations: Location[] = [
  {
    slug: 'ciudad-de-mexico',
    name: {
      es: 'Ciudad de México (Oficina Central)',
      en: 'Mexico City (Headquarters)',
    },
    description: {
      es: 'Oficinas centrales de IPSA con áreas de ingeniería, ventas, administración y almacén principal.',
      en: 'IPSA headquarters with engineering, sales, administration, and main warehouse areas.',
    },
    type: 'headquarters',
    address: 'Convento de Actopan No. 33, Col. Jardines de Santa Monica',
    city: 'Tlalnepantla',
    state: 'Estado de México',
    country: 'México',
    postalCode: '54050',
    phone: '+52 55 5397 3703',
    coordinates: { lat: 19.5406, lng: -99.2119 },
    facilities: {
      es: [
        'Oficinas de ingeniería y ventas',
        'Almacén principal',
        'Taller de ensamble y pruebas',
        'Sala de capacitación',
        'Administración corporativa',
      ],
      en: [
        'Engineering and sales offices',
        'Main warehouse',
        'Assembly and testing workshop',
        'Training room',
        'Corporate administration',
      ],
    },
    isHeadquarters: true,
  },
  {
    slug: 'cd-del-carmen',
    name: {
      es: 'Cd. del Carmen, Campeche',
      en: 'Ciudad del Carmen, Campeche',
    },
    description: {
      es: 'Centro de distribución con CAD (Centro de Almacenamiento y Distribución) y almacén para soporte a operaciones offshore en la Sonda de Campeche.',
      en: 'Distribution center with CAD (Storage and Distribution Center) and warehouse for offshore operations support in the Bay of Campeche.',
    },
    type: 'warehouse',
    address: 'Cd. del Carmen',
    city: 'Ciudad del Carmen',
    state: 'Campeche',
    country: 'México',
    coordinates: { lat: 18.6513, lng: -91.8245 },
    facilities: {
      es: [
        'Centro de Almacenamiento y Distribución (CAD)',
        'Almacén de válvulas y actuadores',
        'Oficina de ventas y soporte técnico',
        'Logística para operaciones offshore',
      ],
      en: [
        'Storage and Distribution Center (CAD)',
        'Valve and actuator warehouse',
        'Sales and technical support office',
        'Logistics for offshore operations',
      ],
    },
    isHeadquarters: false,
  },
  {
    slug: 'paraiso',
    name: {
      es: 'Paraíso, Tabasco',
      en: 'Paraiso, Tabasco',
    },
    description: {
      es: 'Taller de maquinado y almacén con capacidad de reparación de válvulas, pruebas hidrostáticas y soporte técnico para la región sureste.',
      en: 'Machine shop and warehouse with valve repair capability, hydrostatic testing, and technical support for the southeast region.',
    },
    type: 'workshop',
    address: 'Paraíso',
    city: 'Paraíso',
    state: 'Tabasco',
    country: 'México',
    coordinates: { lat: 18.3968, lng: -93.2152 },
    facilities: {
      es: [
        'Taller de maquinado',
        'Banco de pruebas hidrostáticas',
        'Almacén de refacciones',
        'Área de reparación de válvulas',
        'Soporte técnico en campo',
      ],
      en: [
        'Machine shop',
        'Hydrostatic test bench',
        'Spare parts warehouse',
        'Valve repair area',
        'Field technical support',
      ],
    },
    isHeadquarters: false,
  },
  {
    slug: 'houston',
    name: {
      es: 'Houston, Texas',
      en: 'Houston, Texas',
    },
    description: {
      es: 'Oficina de ventas internacionales en Houston, Texas, para atención al mercado norteamericano y coordinación con fabricantes internacionales.',
      en: 'International sales office in Houston, Texas, serving the North American market and coordinating with international manufacturers.',
    },
    type: 'office',
    address: '1601 Peach Leaf St',
    city: 'Houston',
    state: 'TX',
    country: 'USA',
    postalCode: '77039',
    coordinates: { lat: 29.8631, lng: -95.3342 },
    facilities: {
      es: [
        'Oficina de ventas internacionales',
        'Coordinación con fabricantes',
        'Soporte logístico para importaciones',
        'Atención a clientes norteamericanos',
      ],
      en: [
        'International sales office',
        'Manufacturer coordination',
        'Import logistics support',
        'North American client service',
      ],
    },
    isHeadquarters: false,
  },
  {
    slug: 'villahermosa',
    name: {
      es: 'Villahermosa, Tabasco',
      en: 'Villahermosa, Tabasco',
    },
    description: {
      es: 'Oficina de ventas y soporte técnico para la región sureste de México, con atención directa a clientes en la zona petrolera de Tabasco.',
      en: 'Sales and technical support office for the southeast region of Mexico, providing direct service to clients in the Tabasco oil zone.',
    },
    type: 'office',
    address: 'Villahermosa',
    city: 'Villahermosa',
    state: 'Tabasco',
    country: 'México',
    coordinates: { lat: 17.9892, lng: -92.9475 },
    facilities: {
      es: [
        'Oficina de ventas',
        'Soporte técnico regional',
        'Atención a clientes de la zona petrolera',
      ],
      en: [
        'Sales office',
        'Regional technical support',
        'Oil zone client service',
      ],
    },
    isHeadquarters: false,
  },
  {
    slug: 'tampico',
    name: {
      es: 'Tampico, Tamaulipas',
      en: 'Tampico, Tamaulipas',
    },
    description: {
      es: 'Oficina de ventas para la región noreste de México, con atención a refinerías, plantas petroquímicas y terminales marítimas.',
      en: 'Sales office for the northeast region of Mexico, serving refineries, petrochemical plants, and maritime terminals.',
    },
    type: 'office',
    address: 'Tampico',
    city: 'Tampico',
    state: 'Tamaulipas',
    country: 'México',
    coordinates: { lat: 22.2331, lng: -97.8611 },
    facilities: {
      es: [
        'Oficina de ventas',
        'Soporte técnico regional',
        'Atención a refinerías y plantas petroquímicas',
      ],
      en: [
        'Sales office',
        'Regional technical support',
        'Refinery and petrochemical plant service',
      ],
    },
    isHeadquarters: false,
  },
];
