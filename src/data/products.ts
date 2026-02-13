// ---------------------------------------------------------------------------
// products.ts - Complete product hierarchy data for IPSA
// ---------------------------------------------------------------------------

// --- Types -----------------------------------------------------------------

export interface SubType {
  slug: string;
  es: { name: string; desc: string };
  en: { name: string; desc: string };
  manufacturers: string[];
  image: string;
  sizes?: string;
  pressureClasses?: string;
  standards?: string[];
}

export interface ProductCategory {
  slug: string;
  es: { name: string; desc: string };
  en: { name: string; desc: string };
  image: string;
  sizes: string;
  pressureClasses: string;
  standards: string[];
  suppliers: string[];
  industries: string[];
  services: string[];
  subtypes: SubType[];
}

// --- Manufacturers ---------------------------------------------------------

export const manufacturers: Record<
  string,
  { name: string; slug: string; image: string; logo: string; country: string; website: string }
> = {
  dhv: {
    name: "DHV Valve Group",
    slug: "dhv",
    image: "/images/products/dhv-trunnion-2pc.jpg",
    logo: "/images/logos/dhv.svg",
    country: "International",
    website: "https://www.dhvindustries.com",
  },
  "della-foglia": {
    name: "Della Foglia",
    slug: "della-foglia",
    image: "/images/products/df-trunnion-automated.jpg",
    logo: "/images/logos/della-foglia.svg",
    country: "Italia",
    website: "https://www.dellafoglia.it",
  },
  perar: {
    name: "Perar",
    slug: "perar",
    image: "/images/products/df-trunnion-wb-coated.jpg",
    logo: "/images/logos/perar.svg",
    country: "Italia",
    website: "https://www.pfrvalves.com",
  },
  versa: {
    name: "Versa Valves",
    slug: "versa",
    image: "/images/products/versa-e4-solenoid.png",
    logo: "/images/logos/versa.svg",
    country: "USA",
    website: "https://www.versaproducts.com",
  },
  consolidated: {
    name: "Consolidated (Emerson)",
    slug: "",
    image: "",
    logo: "/images/logos/consolidated.svg",
    country: "USA",
    website: "https://www.emerson.com",
  },
  masoneilan: {
    name: "Masoneilan (Baker Hughes)",
    slug: "",
    image: "",
    logo: "/images/logos/bakerhughes.svg",
    country: "USA",
    website: "https://www.bakerhughes.com",
  },
  yokogawa: {
    name: "Yokogawa",
    slug: "",
    image: "",
    logo: "/images/logos/yokogawa.svg",
    country: "Japan",
    website: "https://www.yokogawa.com",
  },
  emerson: {
    name: "Emerson / Bettis / Shafer",
    slug: "",
    image: "",
    logo: "/images/logos/emerson.svg",
    country: "USA",
    website: "https://www.emerson.com",
  },
};

// --- Product Categories (keyed by slug) ------------------------------------

export const productCategories: Record<string, ProductCategory> = {
  // =========================================================================
  // 1. BALL VALVES
  // =========================================================================
  "valvulas-bola": {
    slug: "valvulas-bola",
    es: {
      name: "Valvulas de Bola",
      desc: "Valvulas de bola de alta calidad para aplicaciones criticas en la industria del petroleo, gas y petroquimica. Disponibles en configuraciones flotante, trunnion mounted, fully welded, top entry, doble bloqueo y purga, criogenicas, alta presion y subsea.",
    },
    en: {
      name: "Ball Valves",
      desc: "High-quality ball valves for critical applications in the oil, gas, and petrochemical industries. Available in floating, trunnion mounted, fully welded, top entry, double block & bleed, cryogenic, high-pressure, and subsea configurations.",
    },
    image: "/images/products/dhv-trunnion-2pc.jpg",
    sizes: '1/2" a 64"',
    pressureClasses: "ANSI 150-2500",
    standards: [
      "API 6D",
      "API 6A",
      "API 6DSS",
      "API 607",
      "API 6FA",
      "NACE MR0175",
      "ISO 15848",
      "ISO 10497",
    ],
    suppliers: ["dhv", "della-foglia", "perar"],
    industries: ["petroleras", "gas", "petroquimica", "energia", "mineria"],
    services: ["automatizacion", "ingenieria", "soporte-in-house"],
    subtypes: [
      {
        slug: "floating",
        es: {
          name: "Valvulas de Bola Flotante",
          desc: "Valvulas de bola flotante donde la bola se desplaza ligeramente hacia el asiento aguas abajo por efecto de la presion del fluido, proporcionando un sello confiable. Ideales para aplicaciones de baja a media presion en diametros reducidos.",
        },
        en: {
          name: "Floating Ball Valves",
          desc: "Floating ball valves where the ball shifts slightly toward the downstream seat under fluid pressure, providing a reliable seal. Ideal for low to medium pressure applications in smaller diameters.",
        },
        manufacturers: ["dhv", "della-foglia"],
        image: "/images/products/dhv-floater.jpg",
        sizes: '1/2" to 12"',
        pressureClasses: "ANSI 150-600",
      },
      {
        slug: "trunnion",
        es: {
          name: "Valvulas de Bola Trunnion Mounted",
          desc: "Valvulas de bola con montaje trunnion donde la bola esta soportada por un eje superior e inferior, reduciendo el torque de operacion y permitiendo diametros y presiones mayores. Construccion robusta para servicio severo en refinacion, gas natural y produccion offshore.",
        },
        en: {
          name: "Trunnion Mounted Ball Valves",
          desc: "Trunnion mounted ball valves where the ball is supported by upper and lower shafts, reducing operating torque and enabling larger diameters and higher pressures. Robust construction for severe service in refining, natural gas, and offshore production.",
        },
        manufacturers: ["dhv", "della-foglia", "perar"],
        image: "/images/products/dhv-trunnion-2pc.jpg",
        sizes: '2" to 64"',
        pressureClasses: "ANSI 150-2500",
      },
      {
        slug: "fully-welded",
        es: {
          name: "Valvulas de Bola Fully Welded Body",
          desc: "Valvulas de bola con cuerpo totalmente soldado que elimina posibles puntos de fuga en la envolvente. Disenadas para lineas de transmision de gas, oleoductos y aplicaciones donde la integridad del sello externo es critica. Construccion compacta y ligera.",
        },
        en: {
          name: "Fully Welded Body Ball Valves",
          desc: "Ball valves with a fully welded body that eliminates potential leak points on the pressure envelope. Designed for gas transmission lines, pipelines, and applications where external seal integrity is critical. Compact and lightweight construction.",
        },
        manufacturers: ["della-foglia", "perar"],
        image: "/images/products/df-trunnion-wb.jpg",
        sizes: '2" to 48"',
        pressureClasses: "ANSI 150-900",
      },
      {
        slug: "top-entry",
        es: {
          name: "Valvulas de Bola Top Entry",
          desc: "Valvulas de bola con acceso superior que permiten el mantenimiento en linea sin desmontar la valvula de la tuberia. Reducen significativamente los tiempos de paro y los costos de mantenimiento en instalaciones donde la continuidad operativa es prioritaria.",
        },
        en: {
          name: "Top Entry Ball Valves",
          desc: "Top entry ball valves that allow in-line maintenance without removing the valve from the pipeline. Significantly reduce downtime and maintenance costs in installations where operational continuity is a priority.",
        },
        manufacturers: ["della-foglia"],
        image: "/images/products/df-trunnion-coated.jpg",
        sizes: '2" to 42"',
      },
      {
        slug: "dbb",
        es: {
          name: "Valvulas de Doble Bloqueo y Purga (DBB)",
          desc: "Valvulas de doble bloqueo y purga que proporcionan doble aislamiento positivo y una cavidad intermedia con venteo, permitiendo verificar la integridad de cada sello. Esenciales para operaciones de mantenimiento seguro y aislamiento de lineas.",
        },
        en: {
          name: "Double Block & Bleed Valves (DBB)",
          desc: "Double block and bleed valves providing dual positive isolation with an intermediate cavity and bleed port, allowing verification of each seal's integrity. Essential for safe maintenance operations and line isolation.",
        },
        manufacturers: ["dhv", "della-foglia"],
        image: "/images/products/dhv-trunnion-dbb.jpg",
        sizes: '2" to 36"',
      },
      {
        slug: "criogenicas",
        es: {
          name: "Valvulas de Bola Criogenicas",
          desc: "Valvulas de bola disenadas para servicio criogenico en aplicaciones de GNL, etileno y gases licuados. Incorporan extension de vastago para proteger los sellos y empaques de las temperaturas extremadamente bajas, cumpliendo con los requisitos de BS 6364.",
        },
        en: {
          name: "Cryogenic Ball Valves",
          desc: "Ball valves designed for cryogenic service in LNG, ethylene, and liquefied gas applications. Feature stem extensions to protect seals and packing from extremely low temperatures, meeting BS 6364 requirements.",
        },
        manufacturers: ["della-foglia"],
        image: "/images/products/df-trunnion-wb-coated.jpg",
        sizes: '2" to 36"',
      },
      {
        slug: "alta-presion",
        es: {
          name: "Valvulas de Bola de Alta Presion",
          desc: "Valvulas de bola disenadas para operar a presiones extremadamente altas, hasta 15,000 psi. Fabricadas con materiales de alta resistencia y tolerancias estrictas para servicio en pozos de alta presion, inyeccion de agua y aplicaciones de fracturamiento hidraulico.",
        },
        en: {
          name: "High Pressure Ball Valves",
          desc: "Ball valves designed to operate at extremely high pressures, up to 15,000 psi. Manufactured with high-strength materials and tight tolerances for service in high-pressure wells, water injection, and hydraulic fracturing applications.",
        },
        manufacturers: ["della-foglia"],
        image: "/images/products/df-product-2.jpg",
      },
      {
        slug: "subsea",
        es: {
          name: "Valvulas de Bola Subsea",
          desc: "Valvulas de bola disenadas para instalacion y operacion en el fondo marino conforme a API 6DSS. Construidas para resistir la presion externa del agua, ambientes corrosivos y las demandas de operacion remota mediante ROV. Criticas para arboles de navidad submarinos y manifolds.",
        },
        en: {
          name: "Subsea Ball Valves",
          desc: "Ball valves designed for installation and operation on the seabed per API 6DSS. Built to withstand external water pressure, corrosive environments, and the demands of remote ROV operation. Critical for subsea trees and manifolds.",
        },
        manufacturers: ["della-foglia"],
        image: "/images/products/df-product-3.jpg",
        standards: ["API 6DSS"],
      },
    ],
  },

  // =========================================================================
  // 2. GATE VALVES
  // =========================================================================
  "valvulas-compuerta": {
    slug: "valvulas-compuerta",
    es: {
      name: "Valvulas de Compuerta",
      desc: "Valvulas de compuerta disenadas para servicio on/off en lineas de proceso. Ideales para aplicaciones que requieren flujo sin obstruccion y cierre hermetico en refinacion, petroquimica y transmision de hidrocarburos.",
    },
    en: {
      name: "Gate Valves",
      desc: "Gate valves designed for on/off service in process lines. Ideal for applications requiring unobstructed flow and tight shutoff in refining, petrochemical, and hydrocarbon transmission.",
    },
    image: "/images/products/dhv-gate-valve.png",
    sizes: '2" a 48"',
    pressureClasses: "ANSI 150-2500",
    standards: ["API 600", "API 602", "API 6D", "NACE MR0175"],
    suppliers: ["dhv"],
    industries: ["petroleras", "gas", "petroquimica", "energia"],
    services: ["automatizacion", "ingenieria", "soporte-in-house"],
    subtypes: [
      {
        slug: "wedge",
        es: {
          name: "Valvulas de Compuerta de Cuna",
          desc: "Valvulas de compuerta con obturador tipo cuna (wedge) que proporciona un sello bidireccional confiable. Disponibles en cuna solida, flexible y dividida para adaptarse a diversas condiciones de servicio, incluyendo alta temperatura y presion.",
        },
        en: {
          name: "Wedge Gate Valves",
          desc: "Gate valves with a wedge-type disc providing reliable bidirectional sealing. Available in solid, flexible, and split wedge designs to suit various service conditions, including high temperature and pressure.",
        },
        manufacturers: ["dhv"],
        image: "/images/products/dhv-gate-valve.png",
      },
      {
        slug: "slab-gate",
        es: {
          name: "Valvulas de Compuerta Slab Gate",
          desc: "Valvulas de compuerta con obturador plano (slab gate) disenadas para servicio en oleoductos y gasoductos. El diseno de placa plana minimiza la acumulacion de solidos en la cavidad y proporciona un cierre metalico confiable.",
        },
        en: {
          name: "Slab Gate Valves",
          desc: "Gate valves with a flat slab gate designed for pipeline service in oil and gas transmission. The flat plate design minimizes solids accumulation in the cavity and provides reliable metal-to-metal sealing.",
        },
        manufacturers: ["dhv"],
        image: "/images/products/dhv-gates.jpg",
      },
      {
        slug: "conduit",
        es: {
          name: "Valvulas de Compuerta Conduit",
          desc: "Valvulas de compuerta tipo conduit con paso completo que permite el paso de herramientas de limpieza (pigs) a traves de la valvula. Esenciales para lineas de transmision donde se requiere piggability y minima caida de presion.",
        },
        en: {
          name: "Conduit Gate Valves",
          desc: "Conduit gate valves with full bore that allows the passage of cleaning tools (pigs) through the valve. Essential for transmission lines where piggability and minimal pressure drop are required.",
        },
        manufacturers: ["dhv"],
        image: "/images/products/dhv-gates.jpg",
      },
      {
        slug: "forjadas",
        es: {
          name: "Valvulas de Compuerta Forjadas (API 602)",
          desc: "Valvulas de compuerta de cuerpo forjado conforme a API 602 para diametros pequenos y altas presiones. Su construccion forjada proporciona mayor resistencia mecanica y son ideales para instrumentacion, tomas de muestra y lineas auxiliares.",
        },
        en: {
          name: "Forged Gate Valves (API 602)",
          desc: "Forged body gate valves per API 602 for small diameters and high pressures. Their forged construction provides superior mechanical strength and they are ideal for instrumentation, sample points, and auxiliary lines.",
        },
        manufacturers: ["dhv"],
        image: "/images/products/dhv-forged.png",
        standards: ["API 602"],
      },
    ],
  },

  // =========================================================================
  // 3. CONTROL VALVES
  // =========================================================================
  "valvulas-control": {
    slug: "valvulas-control",
    es: {
      name: "Valvulas de Control",
      desc: "Valvulas de control para regulacion precisa de flujo, presion y temperatura en procesos industriales. Incluyen soluciones globo, rotativas, mariposa y anti-surge para proteccion de compresores y turbomaquinaria.",
    },
    en: {
      name: "Control Valves",
      desc: "Control valves for precise regulation of flow, pressure, and temperature in industrial processes. Include globe, rotary, butterfly, and anti-surge solutions for compressor and turbomachinery protection.",
    },
    image: "/images/products/df-trunnion-coated.jpg",
    sizes: '1" a 36"',
    pressureClasses: "ANSI 150-2500",
    standards: ["ISA", "IEC 61511", "IEC 61508", "API 553"],
    suppliers: [],
    industries: ["petroleras", "aceites", "gas", "petroquimica", "energia"],
    services: ["automatizacion", "ingenieria"],
    subtypes: [
      {
        slug: "globe",
        es: {
          name: "Valvulas de Control Globo",
          desc: "Valvulas de control tipo globo que ofrecen una regulacion precisa del flujo mediante un obturador lineal. Disponibles en configuraciones de cuerpo recto, angular y de tres vias para una amplia gama de aplicaciones de proceso, incluyendo servicio con cavitacion y alta caida de presion.",
        },
        en: {
          name: "Globe Control Valves",
          desc: "Globe-type control valves offering precise flow regulation through a linear plug. Available in straight-body, angle, and three-way configurations for a wide range of process applications, including cavitation and high pressure-drop service.",
        },
        manufacturers: ["masoneilan"],
        image: "/images/products/df-trunnion-coated.jpg",
      },
      {
        slug: "rotary",
        es: {
          name: "Valvulas de Control Rotativas",
          desc: "Valvulas de control rotativas de cuarto de vuelta que combinan alta capacidad de flujo con un diseno compacto. Ideales para aplicaciones con fluidos viscosos, lodos o donde se requiere alta rangeabilidad con minima caida de presion.",
        },
        en: {
          name: "Rotary Control Valves",
          desc: "Quarter-turn rotary control valves combining high flow capacity with a compact design. Ideal for applications with viscous fluids, slurries, or where high rangeability with minimal pressure drop is required.",
        },
        manufacturers: ["masoneilan"],
        image: "/images/products/df-trunnion-coated.jpg",
      },
      {
        slug: "butterfly",
        es: {
          name: "Valvulas de Control Mariposa",
          desc: "Valvulas de control tipo mariposa de alto rendimiento para regulacion de flujo en grandes diametros. Ofrecen excelente relacion capacidad-tamano y son ampliamente utilizadas en servicios de utilidades, agua de enfriamiento y procesos de baja presion.",
        },
        en: {
          name: "Butterfly Control Valves",
          desc: "High-performance butterfly control valves for flow regulation in large diameters. Offer excellent capacity-to-size ratio and are widely used in utilities, cooling water, and low-pressure process services.",
        },
        manufacturers: ["masoneilan"],
        image: "/images/products/df-trunnion-coated.jpg",
      },
      {
        slug: "anti-surge",
        es: {
          name: "Valvulas Anti-Surge",
          desc: "Valvulas anti-surge de respuesta rapida disenadas para proteccion de compresores centrifugos y axiales. Proporcionan tiempos de apertura extremadamente cortos para evitar el fenomeno de surge, protegiendo la turbomaquinaria critica de danos catastroficos.",
        },
        en: {
          name: "Anti-Surge Valves",
          desc: "Fast-response anti-surge valves designed for protection of centrifugal and axial compressors. Provide extremely short opening times to prevent surge, protecting critical turbomachinery from catastrophic damage.",
        },
        manufacturers: ["masoneilan"],
        image: "/images/products/df-trunnion-coated.jpg",
      },
    ],
  },

  // =========================================================================
  // 4. ACTUATORS
  // =========================================================================
  actuadores: {
    slug: "actuadores",
    es: {
      name: "Actuadores",
      desc: "Actuadores neumaticos, electricos e hidraulicos para la automatizacion de valvulas en la industria del petroleo, gas y petroquimica. Incluyen actuadores auto-contenidos para ubicaciones remotas sin suministro de energia.",
    },
    en: {
      name: "Actuators",
      desc: "Pneumatic, electric, and hydraulic actuators for valve automation in the oil, gas, and petrochemical industries. Include self-contained actuators for remote locations without power supply.",
    },
    image: "/images/products/df-trunnion-automated.jpg",
    sizes: "Torques desde 100 Nm hasta 2,000,000 Nm",
    pressureClasses: "",
    standards: ["ISO 5211", "NAMUR", "API 6D", "SIL"],
    suppliers: [],
    industries: ["petroleras", "aceites", "gas", "petroquimica", "energia"],
    services: ["automatizacion", "ingenieria"],
    subtypes: [
      {
        slug: "neumaticos-rack-pinion",
        es: {
          name: "Actuadores Neumaticos Rack & Pinion",
          desc: "Actuadores neumaticos de cremallera y pinon para valvulas de cuarto de vuelta. Proporcionan operacion rapida y confiable con torques de salida consistentes. Disenados para valvulas de bola, mariposa y obturador, con opciones de simple y doble efecto.",
        },
        en: {
          name: "Pneumatic Rack & Pinion Actuators",
          desc: "Pneumatic rack and pinion actuators for quarter-turn valves. Provide fast and reliable operation with consistent output torques. Designed for ball, butterfly, and plug valves, with single and double acting options.",
        },
        manufacturers: ["emerson"],
        image: "/images/products/df-trunnion-automated.jpg",
      },
      {
        slug: "neumaticos-scotch-yoke",
        es: {
          name: "Actuadores Neumaticos Scotch Yoke",
          desc: "Actuadores neumaticos de yugo escoces que generan alto torque al inicio y fin de carrera, ideales para valvulas de gran tamano y alta presion. Su mecanismo proporciona ventaja mecanica donde mas se necesita, en la apertura y cierre de la valvula.",
        },
        en: {
          name: "Pneumatic Scotch Yoke Actuators",
          desc: "Pneumatic scotch yoke actuators generating high torque at the start and end of stroke, ideal for large-size and high-pressure valves. Their mechanism provides mechanical advantage where it is most needed, at valve opening and closing.",
        },
        manufacturers: ["emerson"],
        image: "/images/products/df-trunnion-automated.jpg",
      },
      {
        slug: "electricos",
        es: {
          name: "Actuadores Electricos",
          desc: "Actuadores electricos multivuelta y de cuarto de vuelta para aplicaciones donde se requiere control preciso de posicion y no se dispone de suministro de aire. Incorporan proteccion por torque y limite de carrera, con interfaces para sistemas de control distribuido.",
        },
        en: {
          name: "Electric Actuators",
          desc: "Multi-turn and quarter-turn electric actuators for applications requiring precise position control where air supply is not available. Feature torque and travel limit protection, with interfaces for distributed control systems.",
        },
        manufacturers: ["emerson"],
        image: "/images/products/df-trunnion-automated.jpg",
      },
      {
        slug: "hidraulicos",
        es: {
          name: "Actuadores Hidraulicos",
          desc: "Actuadores hidraulicos de alto empuje para valvulas de gran tamano y servicio severo. Capaces de generar fuerzas extremadamente altas en un paquete compacto, ideales para valvulas de compuerta, valvulas de bola de gran diametro y aplicaciones subsea.",
        },
        en: {
          name: "Hydraulic Actuators",
          desc: "High-thrust hydraulic actuators for large valves and severe service. Capable of generating extremely high forces in a compact package, ideal for gate valves, large-diameter ball valves, and subsea applications.",
        },
        manufacturers: ["emerson"],
        image: "/images/products/df-trunnion-automated.jpg",
      },
      {
        slug: "auto-contenidos",
        es: {
          name: "Actuadores Auto-Contenidos",
          desc: "Actuadores auto-contenidos que operan sin fuente de energia externa. Utilizan gas de la linea o acumuladores hidraulicos para operar de forma autonoma. Ideales para ubicaciones remotas como plataformas offshore, wellheads y estaciones de bombeo, con opciones de energia solar y eolica.",
        },
        en: {
          name: "Self-Contained Actuators",
          desc: "Self-contained actuators that operate without an external power source. Use line gas or hydraulic accumulators for autonomous operation. Ideal for remote locations such as offshore platforms, wellheads, and pumping stations, with solar and wind power options.",
        },
        manufacturers: [],
        image: "/images/products/df-trunnion-automated.jpg",
      },
    ],
  },

  // =========================================================================
  // 5. SAFETY RELIEF VALVES
  // =========================================================================
  "valvulas-seguridad": {
    slug: "valvulas-seguridad",
    es: {
      name: "Valvulas de Seguridad y Alivio",
      desc: "Valvulas de seguridad y alivio para proteccion contra sobrepresion en recipientes, tanques y sistemas de proceso. Disenadas y fabricadas bajo los mas estrictos codigos internacionales para garantizar la seguridad del personal y las instalaciones.",
    },
    en: {
      name: "Safety Relief Valves",
      desc: "Safety and relief valves for overpressure protection in vessels, tanks, and process systems. Designed and manufactured under the most stringent international codes to ensure personnel and facility safety.",
    },
    image: "/images/products/valvulas-seguridad.jpg",
    sizes: '1" a 12"',
    pressureClasses: "ANSI 150-2500",
    standards: ["API 526", "API 527", "ASME VIII", "API 520"],
    suppliers: [],
    industries: ["petroleras", "gas", "petroquimica", "energia"],
    services: ["ingenieria", "soporte-in-house"],
    subtypes: [
      {
        slug: "convencionales",
        es: {
          name: "Valvulas de Seguridad Convencionales",
          desc: "Valvulas de seguridad convencionales de accion directa con resorte. La solucion mas comun y economica para proteccion contra sobrepresion en recipientes a presion. El punto de ajuste se establece mediante la compresion del resorte y se ven afectadas por la contrapresion variable.",
        },
        en: {
          name: "Conventional Safety Valves",
          desc: "Conventional direct-acting spring-loaded safety valves. The most common and economical solution for overpressure protection in pressure vessels. The set point is established by spring compression and performance is affected by variable backpressure.",
        },
        manufacturers: ["consolidated"],
        image: "/images/products/valvulas-seguridad.jpg",
      },
      {
        slug: "balanceadas",
        es: {
          name: "Valvulas de Seguridad Balanceadas",
          desc: "Valvulas de seguridad con fuelle balanceado que compensan el efecto de la contrapresion variable sobre el punto de ajuste. Esenciales cuando la valvula descarga a un cabezal comun donde la contrapresion puede fluctuar significativamente durante eventos de alivio simultaneo.",
        },
        en: {
          name: "Balanced Safety Valves",
          desc: "Balanced bellows safety valves that compensate for the effect of variable backpressure on the set point. Essential when the valve discharges to a common header where backpressure may fluctuate significantly during simultaneous relief events.",
        },
        manufacturers: ["consolidated"],
        image: "/images/products/valvulas-seguridad.jpg",
      },
      {
        slug: "pilot-operated",
        es: {
          name: "Valvulas de Seguridad Pilotadas",
          desc: "Valvulas de seguridad operadas por piloto que utilizan la presion del sistema para mantener la valvula cerrada. Proporcionan un sello hermetico hasta el 98% del punto de ajuste y no se ven afectadas por la contrapresion. Ideales para aplicaciones de gas y servicios con alta presion de operacion.",
        },
        en: {
          name: "Pilot-Operated Safety Valves",
          desc: "Pilot-operated safety valves that use system pressure to keep the valve closed. Provide a tight seal up to 98% of the set point and are unaffected by backpressure. Ideal for gas applications and services with high operating pressure.",
        },
        manufacturers: ["consolidated"],
        image: "/images/products/valvulas-seguridad.jpg",
      },
    ],
  },

  // =========================================================================
  // 6. SOLENOID VALVES
  // =========================================================================
  "valvulas-solenoides": {
    slug: "valvulas-solenoides",
    es: {
      name: "Valvulas Solenoides",
      desc: "Valvulas solenoides para control direccional neumatico e hidraulico. Disenadas para ambientes peligrosos y criticos con certificaciones ATEX, SIL, NAMUR y CSA. Amplia gama de configuraciones para montaje en linea, manifold y directamente sobre actuadores.",
    },
    en: {
      name: "Solenoid Valves",
      desc: "Solenoid valves for pneumatic and hydraulic directional control. Designed for hazardous and critical environments with ATEX, SIL, NAMUR, and CSA certifications. Wide range of configurations for in-line, manifold, and direct actuator mounting.",
    },
    image: "/images/products/versa-e4-solenoid.png",
    sizes: '1/4" a 2"',
    pressureClasses: "Hasta 6,000 psi",
    standards: ["ATEX", "SIL", "NAMUR", "CSA"],
    suppliers: ["versa"],
    industries: ["petroleras", "aceites", "gas", "petroquimica", "energia"],
    services: ["automatizacion"],
    subtypes: [
      {
        slug: "neumatico",
        es: {
          name: "Valvulas Solenoides Neumaticas",
          desc: "Valvulas solenoides para control direccional neumatico de actuadores y cilindros. Disponibles en configuraciones 3/2, 4/2, 5/2 y 5/3 vias con voltajes de bobina estandar. Disenadas para operacion confiable en ambientes industriales y areas clasificadas.",
        },
        en: {
          name: "Pneumatic Solenoid Valves",
          desc: "Solenoid valves for pneumatic directional control of actuators and cylinders. Available in 3/2, 4/2, 5/2, and 5/3 way configurations with standard coil voltages. Designed for reliable operation in industrial environments and classified areas.",
        },
        manufacturers: ["versa"],
        image: "/images/products/versa-e4-solenoid.png",
      },
      {
        slug: "hidraulico",
        es: {
          name: "Valvulas Solenoides Hidraulicas",
          desc: "Valvulas solenoides para control direccional hidraulico de alta presion. Construidas en materiales resistentes a la corrosion y disenadas para operar con fluidos hidraulicos, agua y otros medios. Ideales para sistemas hidraulicos de actuacion de valvulas.",
        },
        en: {
          name: "Hydraulic Solenoid Valves",
          desc: "Solenoid valves for high-pressure hydraulic directional control. Built from corrosion-resistant materials and designed to operate with hydraulic fluids, water, and other media. Ideal for valve actuation hydraulic systems.",
        },
        manufacturers: ["versa"],
        image: "/images/products/versa-vmap.webp",
      },
      {
        slug: "namur",
        es: {
          name: "Valvulas Solenoides NAMUR",
          desc: "Valvulas solenoides con interfaz NAMUR para montaje directo sobre actuadores neumaticos. Eliminan la necesidad de tuberia entre la solenoide y el actuador, reduciendo puntos de fuga y simplificando la instalacion. Certificadas ATEX para areas clasificadas.",
        },
        en: {
          name: "NAMUR Solenoid Valves",
          desc: "Solenoid valves with NAMUR interface for direct mounting on pneumatic actuators. Eliminate the need for tubing between the solenoid and actuator, reducing leak points and simplifying installation. ATEX certified for classified areas.",
        },
        manufacturers: ["versa"],
        image: "/images/products/versa-namur.webp",
      },
      {
        slug: "inoxidable",
        es: {
          name: "Valvulas Solenoides en Acero Inoxidable",
          desc: "Valvulas solenoides fabricadas completamente en acero inoxidable para ambientes altamente corrosivos, plataformas offshore y aplicaciones sanitarias. Resistentes a la niebla salina, quimicos agresivos y condiciones ambientales extremas.",
        },
        en: {
          name: "Stainless Steel Solenoid Valves",
          desc: "Solenoid valves manufactured entirely in stainless steel for highly corrosive environments, offshore platforms, and sanitary applications. Resistant to salt spray, aggressive chemicals, and extreme environmental conditions.",
        },
        manufacturers: ["versa"],
        image: "/images/products/versa-csg.webp",
      },
    ],
  },

  // =========================================================================
  // 7. CONTROL PANELS
  // =========================================================================
  "paneles-de-control": {
    slug: "paneles-de-control",
    es: {
      name: "Paneles de Control",
      desc: "Paneles de control disenados y fabricados a la medida por IPSA para sistemas de automatizacion de valvulas, ESD y control de procesos. Soluciones neumaticas, electrohidraulicas y de regulacion de gas, construidos bajo estrictos estandares de calidad.",
    },
    en: {
      name: "Control Panels",
      desc: "Control panels custom-designed and manufactured by IPSA for valve automation, ESD, and process control systems. Pneumatic, electrohydraulic, and gas regulation solutions, built under strict quality standards.",
    },
    image: "/images/products/ipsa-tablero-1.jpg",
    sizes: "A medida / Custom",
    pressureClasses: "",
    standards: ["IEC 61508", "IEC 61511", "NFPA 70"],
    suppliers: [],
    industries: ["petroleras", "gas", "petroquimica", "energia"],
    services: ["automatizacion", "ingenieria"],
    subtypes: [
      {
        slug: "neumaticos",
        es: {
          name: "Paneles de Control Neumaticos",
          desc: "Paneles de control neumatico disenados por IPSA para la automatizacion de valvulas. Incluyen valvulas solenoides, reguladores de presion, manometros, filtros y toda la logica neumatica necesaria para el control seguro y confiable de actuadores neumaticos.",
        },
        en: {
          name: "Pneumatic Control Panels",
          desc: "Pneumatic control panels designed by IPSA for valve automation. Include solenoid valves, pressure regulators, gauges, filters, and all pneumatic logic required for safe and reliable control of pneumatic actuators.",
        },
        manufacturers: [],
        image: "/images/products/ipsa-tablero-1.jpg",
      },
      {
        slug: "esd",
        es: {
          name: "Paneles ESD (Paro de Emergencia)",
          desc: "Paneles de paro de emergencia (ESD) disenados conforme a IEC 61508/61511 para la proteccion de instalaciones criticas. Incorporan logica de seguridad redundante, diagnosticos en linea y comunicacion con sistemas de control para garantizar la respuesta inmediata ante condiciones anormales.",
        },
        en: {
          name: "ESD Panels (Emergency Shutdown)",
          desc: "Emergency shutdown (ESD) panels designed per IEC 61508/61511 for protection of critical installations. Feature redundant safety logic, online diagnostics, and control system communication to ensure immediate response to abnormal conditions.",
        },
        manufacturers: [],
        image: "/images/products/ipsa-tablero-2.jpg",
      },
      {
        slug: "regulacion-gas",
        es: {
          name: "Paneles de Regulacion de Gas",
          desc: "Paneles de regulacion de gas para suministro de gas combustible, gas de instrumentos y gas de sello. Disenados para reducir y regular la presion de gas de forma segura con redundancia, instrumentacion y proteccion contra sobrepresion.",
        },
        en: {
          name: "Gas Regulation Panels",
          desc: "Gas regulation panels for fuel gas, instrument gas, and seal gas supply. Designed to safely reduce and regulate gas pressure with redundancy, instrumentation, and overpressure protection.",
        },
        manufacturers: [],
        image: "/images/products/ipsa-tablero-3.jpg",
      },
    ],
  },

  // =========================================================================
  // 8. INSTRUMENTATION
  // =========================================================================
  instrumentacion: {
    slug: "instrumentacion",
    es: {
      name: "Instrumentacion",
      desc: "Instrumentacion industrial para medicion y control de procesos. Transmisores de presion y temperatura, sistemas de control distribuido (DCS) y sistemas instrumentados de seguridad (SIS) de Yokogawa para la maxima confiabilidad operativa.",
    },
    en: {
      name: "Instrumentation",
      desc: "Industrial instrumentation for process measurement and control. Pressure and temperature transmitters, distributed control systems (DCS), and safety instrumented systems (SIS) from Yokogawa for maximum operational reliability.",
    },
    image: "/images/products/ipsa-control-panel-1.jpg",
    sizes: "",
    pressureClasses: "",
    standards: ["IEC 61508", "IEC 61511", "ISA 84"],
    suppliers: [],
    industries: ["petroleras", "aceites", "gas", "petroquimica", "energia"],
    services: ["automatizacion", "ingenieria"],
    subtypes: [
      {
        slug: "transmisores",
        es: {
          name: "Transmisores de Proceso",
          desc: "Transmisores de presion, temperatura, nivel y flujo para medicion precisa de variables de proceso. Tecnologia de ultima generacion con diagnosticos avanzados, comunicacion HART, Foundation Fieldbus y Profibus para integracion con cualquier sistema de control.",
        },
        en: {
          name: "Process Transmitters",
          desc: "Pressure, temperature, level, and flow transmitters for precise process variable measurement. State-of-the-art technology with advanced diagnostics, HART, Foundation Fieldbus, and Profibus communication for integration with any control system.",
        },
        manufacturers: ["yokogawa"],
        image: "/images/products/ipsa-control-panel-1.jpg",
      },
      {
        slug: "dcs",
        es: {
          name: "Sistemas de Control Distribuido (DCS)",
          desc: "Sistemas de control distribuido Yokogawa para la operacion integrada de plantas de proceso. Plataformas CENTUM VP y ProSafe-RS que proporcionan control, monitoreo y optimizacion de procesos con la mas alta disponibilidad y seguridad cibernetica.",
        },
        en: {
          name: "Distributed Control Systems (DCS)",
          desc: "Yokogawa distributed control systems for integrated plant operation. CENTUM VP and ProSafe-RS platforms providing process control, monitoring, and optimization with the highest availability and cybersecurity.",
        },
        manufacturers: ["yokogawa"],
        image: "/images/products/ipsa-control-panel-1.jpg",
      },
      {
        slug: "sis",
        es: {
          name: "Sistemas Instrumentados de Seguridad (SIS)",
          desc: "Sistemas instrumentados de seguridad certificados SIL conforme a IEC 61508/61511 para la proteccion de plantas de proceso. Incluyen controladores de seguridad, sensores y elementos finales integrados en una arquitectura de seguridad funcional completa.",
        },
        en: {
          name: "Safety Instrumented Systems (SIS)",
          desc: "SIL-certified safety instrumented systems per IEC 61508/61511 for process plant protection. Include safety controllers, sensors, and final elements integrated in a complete functional safety architecture.",
        },
        manufacturers: ["yokogawa"],
        image: "/images/products/ipsa-control-panel-1.jpg",
      },
    ],
  },

  // =========================================================================
  // 9. ACCESSORIES & SPARE PARTS
  // =========================================================================
  "accesorios-refacciones": {
    slug: "accesorios-refacciones",
    es: {
      name: "Accesorios y Refacciones",
      desc: "Accesorios y refacciones para valvulas y actuadores. Filtros reguladores, posicionadores, cajas de interruptores de limite y partes de repuesto originales para mantener sus equipos en optimas condiciones de operacion.",
    },
    en: {
      name: "Accessories & Spare Parts",
      desc: "Accessories and spare parts for valves and actuators. Filter regulators, positioners, limit switch boxes, and original replacement parts to keep your equipment in optimal operating condition.",
    },
    image: "/images/products/versa-namur.webp",
    sizes: "",
    pressureClasses: "",
    standards: [],
    suppliers: [],
    industries: ["petroleras", "aceites", "gas", "petroquimica", "energia", "mineria"],
    services: ["soporte-in-house"],
    subtypes: [
      {
        slug: "filtros-reguladores",
        es: {
          name: "Filtros Reguladores",
          desc: "Filtros reguladores de aire para suministro limpio y a presion constante hacia actuadores neumaticos y posicionadores. Eliminan particulas y humedad del aire de instrumentos, protegiendo los componentes neumaticos y asegurando operacion confiable.",
        },
        en: {
          name: "Filter Regulators",
          desc: "Air filter regulators for clean, constant-pressure supply to pneumatic actuators and positioners. Remove particles and moisture from instrument air, protecting pneumatic components and ensuring reliable operation.",
        },
        manufacturers: [],
        image: "/images/products/versa-namur.webp",
      },
      {
        slug: "posicionadores",
        es: {
          name: "Posicionadores",
          desc: "Posicionadores electroneumaticos e inteligentes para valvulas de control. Reciben la senal de control (4-20 mA o digital) y ajustan la presion de aire al actuador para posicionar la valvula con precision. Incluyen diagnosticos avanzados para mantenimiento predictivo.",
        },
        en: {
          name: "Positioners",
          desc: "Electro-pneumatic and smart positioners for control valves. Receive the control signal (4-20 mA or digital) and adjust air pressure to the actuator to precisely position the valve. Include advanced diagnostics for predictive maintenance.",
        },
        manufacturers: [],
        image: "/images/products/versa-namur.webp",
      },
      {
        slug: "switch-boxes",
        es: {
          name: "Cajas de Interruptores de Limite",
          desc: "Cajas de interruptores de limite (switch boxes) para indicacion de posicion abierto/cerrado de valvulas. Montaje conforme a NAMUR/VDI/VDE 3845 con interruptores mecanicos, sensores inductivos y transmisores de posicion continua. Certificaciones para areas clasificadas.",
        },
        en: {
          name: "Limit Switch Boxes",
          desc: "Limit switch boxes for open/closed valve position indication. NAMUR/VDI/VDE 3845 compliant mounting with mechanical switches, inductive sensors, and continuous position transmitters. Certified for classified areas.",
        },
        manufacturers: [],
        image: "/images/products/versa-namur.webp",
      },
      {
        slug: "refacciones",
        es: {
          name: "Refacciones y Partes de Repuesto",
          desc: "Partes de repuesto originales para valvulas, actuadores y accesorios. Incluyen kits de sellos, asientos, empaques, resortes, diafragmas y todos los componentes consumibles necesarios para el mantenimiento preventivo y correctivo de sus equipos.",
        },
        en: {
          name: "Spare Parts & Replacement Parts",
          desc: "Original spare parts for valves, actuators, and accessories. Include seal kits, seats, packing, springs, diaphragms, and all consumable components needed for preventive and corrective maintenance of your equipment.",
        },
        manufacturers: [],
        image: "/images/products/versa-namur.webp",
      },
    ],
  },
};

// --- Convenience exports ---------------------------------------------------

/** Flat array of all product categories */
export const categoryList: ProductCategory[] = Object.values(productCategories);

/** Returns a flat array of all subtypes enriched with parent category info */
export function getAllSubtypes(): Array<
  SubType & { categorySlug: string; categoryName: { es: string; en: string } }
> {
  const result: Array<
    SubType & { categorySlug: string; categoryName: { es: string; en: string } }
  > = [];

  for (const category of categoryList) {
    for (const subtype of category.subtypes) {
      result.push({
        ...subtype,
        categorySlug: category.slug,
        categoryName: {
          es: category.es.name,
          en: category.en.name,
        },
      });
    }
  }

  return result;
}
