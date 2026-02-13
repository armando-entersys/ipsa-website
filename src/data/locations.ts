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
      es: 'Ciudad de Mexico (Oficina Central)',
      en: 'Mexico City (Headquarters)',
    },
    description: {
      es: 'Oficinas centrales de IPSA con areas de ingenieria, ventas, administracion y almacen principal.',
      en: 'IPSA headquarters with engineering, sales, administration, and main warehouse areas.',
    },
    type: 'headquarters',
    address: 'Convento de Actopan No. 33, Col. Jardines de Santa Monica',
    city: 'Tlalnepantla',
    state: 'Estado de Mexico',
    country: 'Mexico',
    postalCode: '54050',
    phone: '+52 55 5397 3703',
    coordinates: { lat: 19.5406, lng: -99.2119 },
    facilities: {
      es: [
        'Oficinas de ingenieria y ventas',
        'Almacen principal',
        'Taller de ensamble y pruebas',
        'Sala de capacitacion',
        'Administracion corporativa',
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
      es: 'Centro de distribucion con CAD (Centro de Almacenamiento y Distribucion) y almacen para soporte a operaciones offshore en la Sonda de Campeche.',
      en: 'Distribution center with CAD (Storage and Distribution Center) and warehouse for offshore operations support in the Bay of Campeche.',
    },
    type: 'warehouse',
    address: 'Cd. del Carmen',
    city: 'Ciudad del Carmen',
    state: 'Campeche',
    country: 'Mexico',
    coordinates: { lat: 18.6513, lng: -91.8245 },
    facilities: {
      es: [
        'Centro de Almacenamiento y Distribucion (CAD)',
        'Almacen de valvulas y actuadores',
        'Oficina de ventas y soporte tecnico',
        'Logistica para operaciones offshore',
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
      es: 'Paraiso, Tabasco',
      en: 'Paraiso, Tabasco',
    },
    description: {
      es: 'Taller de maquinado y almacen con capacidad de reparacion de valvulas, pruebas hidrostaticas y soporte tecnico para la region sureste.',
      en: 'Machine shop and warehouse with valve repair capability, hydrostatic testing, and technical support for the southeast region.',
    },
    type: 'workshop',
    address: 'Paraiso',
    city: 'Paraiso',
    state: 'Tabasco',
    country: 'Mexico',
    coordinates: { lat: 18.3968, lng: -93.2152 },
    facilities: {
      es: [
        'Taller de maquinado',
        'Banco de pruebas hidrostaticas',
        'Almacen de refacciones',
        'Area de reparacion de valvulas',
        'Soporte tecnico en campo',
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
      es: 'Oficina de ventas internacionales en Houston, Texas, para atencion al mercado norteamericano y coordinacion con fabricantes internacionales.',
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
        'Coordinacion con fabricantes',
        'Soporte logistico para importaciones',
        'Atencion a clientes norteamericanos',
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
      es: 'Oficina de ventas y soporte tecnico para la region sureste de Mexico, con atencion directa a clientes en la zona petrolera de Tabasco.',
      en: 'Sales and technical support office for the southeast region of Mexico, providing direct service to clients in the Tabasco oil zone.',
    },
    type: 'office',
    address: 'Villahermosa',
    city: 'Villahermosa',
    state: 'Tabasco',
    country: 'Mexico',
    coordinates: { lat: 17.9892, lng: -92.9475 },
    facilities: {
      es: [
        'Oficina de ventas',
        'Soporte tecnico regional',
        'Atencion a clientes de la zona petrolera',
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
      es: 'Oficina de ventas para la region noreste de Mexico, con atencion a refineries, plantas petroquimicas y terminales maritimas.',
      en: 'Sales office for the northeast region of Mexico, serving refineries, petrochemical plants, and maritime terminals.',
    },
    type: 'office',
    address: 'Tampico',
    city: 'Tampico',
    state: 'Tamaulipas',
    country: 'Mexico',
    coordinates: { lat: 22.2331, lng: -97.8611 },
    facilities: {
      es: [
        'Oficina de ventas',
        'Soporte tecnico regional',
        'Atencion a refineries y plantas petroquimicas',
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
