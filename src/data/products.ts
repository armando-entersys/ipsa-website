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
      name: "Válvulas de Bola",
      desc: "Válvulas de bola de alta calidad para aplicaciones críticas en la industria del petróleo, gas y petroquímica. Disponibles en configuraciones flotante, trunnion mounted, fully welded, top entry, doble bloqueo y purga, criogénicas, alta presión y subsea.",
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
          name: "Válvulas de Bola Flotante",
          desc: "Válvulas de bola flotante donde la bola se desplaza ligeramente hacia el asiento aguas abajo por efecto de la presión del fluido, proporcionando un sello confiable. Ideales para aplicaciones de baja a media presión en diámetros reducidos.",
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
          name: "Válvulas de Bola Trunnion Mounted",
          desc: "Válvulas de bola con montaje trunnion donde la bola está soportada por un eje superior e inferior, reduciendo el torque de operación y permitiendo diámetros y presiones mayores. Construcción robusta para servicio severo en refinación, gas natural y producción offshore.",
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
          name: "Válvulas de Bola Fully Welded Body",
          desc: "Válvulas de bola con cuerpo totalmente soldado que elimina posibles puntos de fuga en la envolvente. Diseñadas para líneas de transmisión de gas, oleoductos y aplicaciones donde la integridad del sello externo es crítica. Construcción compacta y ligera.",
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
          name: "Válvulas de Bola Top Entry",
          desc: "Válvulas de bola con acceso superior que permiten el mantenimiento en línea sin desmontar la válvula de la tubería. Reducen significativamente los tiempos de paro y los costos de mantenimiento en instalaciones donde la continuidad operativa es prioritaria.",
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
          name: "Válvulas de Doble Bloqueo y Purga (DBB)",
          desc: "Válvulas de doble bloqueo y purga que proporcionan doble aislamiento positivo y una cavidad intermedia con venteo, permitiendo verificar la integridad de cada sello. Esenciales para operaciones de mantenimiento seguro y aislamiento de líneas.",
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
          name: "Válvulas de Bola Criogénicas",
          desc: "Válvulas de bola diseñadas para servicio criogénico en aplicaciones de GNL, etileno y gases licuados. Incorporan extensión de vástago para proteger los sellos y empaques de las temperaturas extremadamente bajas, cumpliendo con los requisitos de BS 6364.",
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
          name: "Válvulas de Bola de Alta Presión",
          desc: "Válvulas de bola diseñadas para operar a presiones extremadamente altas, hasta 15,000 psi. Fabricadas con materiales de alta resistencia y tolerancias estrictas para servicio en pozos de alta presión, inyección de agua y aplicaciones de fracturamiento hidráulico.",
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
          name: "Válvulas de Bola Subsea",
          desc: "Válvulas de bola diseñadas para instalación y operación en el fondo marino conforme a API 6DSS. Construidas para resistir la presión externa del agua, ambientes corrosivos y las demandas de operación remota mediante ROV. Críticas para árboles de navidad submarinos y manifolds.",
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
      name: "Válvulas de Compuerta",
      desc: "Válvulas de compuerta diseñadas para servicio on/off en líneas de proceso. Ideales para aplicaciones que requieren flujo sin obstrucción y cierre hermético en refinación, petroquímica y transmisión de hidrocarburos.",
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
          name: "Válvulas de Compuerta de Cuña",
          desc: "Válvulas de compuerta con obturador tipo cuña (wedge) que proporciona un sello bidireccional confiable. Disponibles en cuña sólida, flexible y dividida para adaptarse a diversas condiciones de servicio, incluyendo alta temperatura y presión.",
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
          name: "Válvulas de Compuerta Slab Gate",
          desc: "Válvulas de compuerta con obturador plano (slab gate) diseñadas para servicio en oleoductos y gasoductos. El diseño de placa plana minimiza la acumulación de sólidos en la cavidad y proporciona un cierre metálico confiable.",
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
          name: "Válvulas de Compuerta Conduit",
          desc: "Válvulas de compuerta tipo conduit con paso completo que permite el paso de herramientas de limpieza (pigs) a través de la válvula. Esenciales para líneas de transmisión donde se requiere piggability y mínima caída de presión.",
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
          name: "Válvulas de Compuerta Forjadas (API 602)",
          desc: "Válvulas de compuerta de cuerpo forjado conforme a API 602 para diámetros pequeños y altas presiones. Su construcción forjada proporciona mayor resistencia mecánica y son ideales para instrumentación, tomas de muestra y líneas auxiliares.",
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
      name: "Válvulas de Control",
      desc: "Válvulas de control para regulación precisa de flujo, presión y temperatura en procesos industriales. Incluyen soluciones globo, rotativas, mariposa y anti-surge para protección de compresores y turbomaquinaria.",
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
          name: "Válvulas de Control Globo",
          desc: "Válvulas de control tipo globo que ofrecen una regulación precisa del flujo mediante un obturador lineal. Disponibles en configuraciones de cuerpo recto, angular y de tres vías para una amplia gama de aplicaciones de proceso, incluyendo servicio con cavitación y alta caída de presión.",
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
          name: "Válvulas de Control Rotativas",
          desc: "Válvulas de control rotativas de cuarto de vuelta que combinan alta capacidad de flujo con un diseño compacto. Ideales para aplicaciones con fluidos viscosos, lodos o donde se requiere alta rangeabilidad con mínima caída de presión.",
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
          name: "Válvulas de Control Mariposa",
          desc: "Válvulas de control tipo mariposa de alto rendimiento para regulación de flujo en grandes diámetros. Ofrecen excelente relación capacidad-tamaño y son ampliamente utilizadas en servicios de utilidades, agua de enfriamiento y procesos de baja presión.",
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
          name: "Válvulas Anti-Surge",
          desc: "Válvulas anti-surge de respuesta rápida diseñadas para protección de compresores centrífugos y axiales. Proporcionan tiempos de apertura extremadamente cortos para evitar el fenómeno de surge, protegiendo la turbomaquinaria crítica de daños catastróficos.",
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
      desc: "Actuadores neumáticos, eléctricos e hidráulicos para la automatización de válvulas en la industria del petróleo, gas y petroquímica. Incluyen actuadores auto-contenidos para ubicaciones remotas sin suministro de energía.",
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
          name: "Actuadores Neumáticos Rack & Pinion",
          desc: "Actuadores neumáticos de cremallera y piñón para válvulas de cuarto de vuelta. Proporcionan operación rápida y confiable con torques de salida consistentes. Diseñados para válvulas de bola, mariposa y obturador, con opciones de simple y doble efecto.",
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
          name: "Actuadores Neumáticos Scotch Yoke",
          desc: "Actuadores neumáticos de yugo escocés que generan alto torque al inicio y fin de carrera, ideales para válvulas de gran tamaño y alta presión. Su mecanismo proporciona ventaja mecánica donde más se necesita, en la apertura y cierre de la válvula.",
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
          name: "Actuadores Eléctricos",
          desc: "Actuadores eléctricos multivuelta y de cuarto de vuelta para aplicaciones donde se requiere control preciso de posición y no se dispone de suministro de aire. Incorporan protección por torque y límite de carrera, con interfaces para sistemas de control distribuido.",
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
          name: "Actuadores Hidráulicos",
          desc: "Actuadores hidráulicos de alto empuje para válvulas de gran tamaño y servicio severo. Capaces de generar fuerzas extremadamente altas en un paquete compacto, ideales para válvulas de compuerta, válvulas de bola de gran diámetro y aplicaciones subsea.",
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
          desc: "Actuadores auto-contenidos que operan sin fuente de energía externa. Utilizan gas de la línea o acumuladores hidráulicos para operar de forma autónoma. Ideales para ubicaciones remotas como plataformas offshore, wellheads y estaciones de bombeo, con opciones de energía solar y eólica.",
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
      name: "Válvulas de Seguridad y Alivio",
      desc: "Válvulas de seguridad y alivio para protección contra sobrepresión en recipientes, tanques y sistemas de proceso. Diseñadas y fabricadas bajo los más estrictos códigos internacionales para garantizar la seguridad del personal y las instalaciones.",
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
          name: "Válvulas de Seguridad Convencionales",
          desc: "Válvulas de seguridad convencionales de acción directa con resorte. La solución más común y económica para protección contra sobrepresión en recipientes a presión. El punto de ajuste se establece mediante la compresión del resorte y se ven afectadas por la contrapresión variable.",
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
          name: "Válvulas de Seguridad Balanceadas",
          desc: "Válvulas de seguridad con fuelle balanceado que compensan el efecto de la contrapresión variable sobre el punto de ajuste. Esenciales cuando la válvula descarga a un cabezal común donde la contrapresión puede fluctuar significativamente durante eventos de alivio simultáneo.",
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
          name: "Válvulas de Seguridad Pilotadas",
          desc: "Válvulas de seguridad operadas por piloto que utilizan la presión del sistema para mantener la válvula cerrada. Proporcionan un sello hermético hasta el 98% del punto de ajuste y no se ven afectadas por la contrapresión. Ideales para aplicaciones de gas y servicios con alta presión de operación.",
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
      name: "Válvulas Solenoides",
      desc: "Válvulas solenoides para control direccional neumático e hidráulico. Diseñadas para ambientes peligrosos y críticos con certificaciones ATEX, SIL, NAMUR y CSA. Amplia gama de configuraciones para montaje en línea, manifold y directamente sobre actuadores.",
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
          name: "Válvulas Solenoides Neumáticas",
          desc: "Válvulas solenoides para control direccional neumático de actuadores y cilindros. Disponibles en configuraciones 3/2, 4/2, 5/2 y 5/3 vías con voltajes de bobina estándar. Diseñadas para operación confiable en ambientes industriales y áreas clasificadas.",
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
          name: "Válvulas Solenoides Hidráulicas",
          desc: "Válvulas solenoides para control direccional hidráulico de alta presión. Construidas en materiales resistentes a la corrosión y diseñadas para operar con fluidos hidráulicos, agua y otros medios. Ideales para sistemas hidráulicos de actuación de válvulas.",
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
          name: "Válvulas Solenoides NAMUR",
          desc: "Válvulas solenoides con interfaz NAMUR para montaje directo sobre actuadores neumáticos. Eliminan la necesidad de tubería entre la solenoide y el actuador, reduciendo puntos de fuga y simplificando la instalación. Certificadas ATEX para áreas clasificadas.",
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
          name: "Válvulas Solenoides en Acero Inoxidable",
          desc: "Válvulas solenoides fabricadas completamente en acero inoxidable para ambientes altamente corrosivos, plataformas offshore y aplicaciones sanitarias. Resistentes a la niebla salina, químicos agresivos y condiciones ambientales extremas.",
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
      desc: "Paneles de control diseñados y fabricados a la medida por IPSA para sistemas de automatización de válvulas, ESD y control de procesos. Soluciones neumáticas, electrohidráulicas y de regulación de gas, construidos bajo estrictos estándares de calidad.",
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
          name: "Paneles de Control Neumáticos",
          desc: "Paneles de control neumático diseñados por IPSA para la automatización de válvulas. Incluyen válvulas solenoides, reguladores de presión, manómetros, filtros y toda la lógica neumática necesaria para el control seguro y confiable de actuadores neumáticos.",
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
          desc: "Paneles de paro de emergencia (ESD) diseñados conforme a IEC 61508/61511 para la protección de instalaciones críticas. Incorporan lógica de seguridad redundante, diagnósticos en línea y comunicación con sistemas de control para garantizar la respuesta inmediata ante condiciones anormales.",
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
          name: "Paneles de Regulación de Gas",
          desc: "Paneles de regulación de gas para suministro de gas combustible, gas de instrumentos y gas de sello. Diseñados para reducir y regular la presión de gas de forma segura con redundancia, instrumentación y protección contra sobrepresión.",
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
      name: "Instrumentación",
      desc: "Instrumentación industrial para medición y control de procesos. Transmisores de presión y temperatura, sistemas de control distribuido (DCS) y sistemas instrumentados de seguridad (SIS) de Yokogawa para la máxima confiabilidad operativa.",
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
          desc: "Transmisores de presión, temperatura, nivel y flujo para medición precisa de variables de proceso. Tecnología de última generación con diagnósticos avanzados, comunicación HART, Foundation Fieldbus y Profibus para integración con cualquier sistema de control.",
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
          desc: "Sistemas de control distribuido Yokogawa para la operación integrada de plantas de proceso. Plataformas CENTUM VP y ProSafe-RS que proporcionan control, monitoreo y optimización de procesos con la más alta disponibilidad y seguridad cibernética.",
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
          desc: "Sistemas instrumentados de seguridad certificados SIL conforme a IEC 61508/61511 para la protección de plantas de proceso. Incluyen controladores de seguridad, sensores y elementos finales integrados en una arquitectura de seguridad funcional completa.",
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
      desc: "Accesorios y refacciones para válvulas y actuadores. Filtros reguladores, posicionadores, cajas de interruptores de límite y partes de repuesto originales para mantener sus equipos en óptimas condiciones de operación.",
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
          desc: "Filtros reguladores de aire para suministro limpio y a presión constante hacia actuadores neumáticos y posicionadores. Eliminan partículas y humedad del aire de instrumentos, protegiendo los componentes neumáticos y asegurando operación confiable.",
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
          desc: "Posicionadores electroneumáticos e inteligentes para válvulas de control. Reciben la señal de control (4-20 mA o digital) y ajustan la presión de aire al actuador para posicionar la válvula con precisión. Incluyen diagnósticos avanzados para mantenimiento predictivo.",
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
          name: "Cajas de Interruptores de Límite",
          desc: "Cajas de interruptores de límite (switch boxes) para indicación de posición abierto/cerrado de válvulas. Montaje conforme a NAMUR/VDI/VDE 3845 con interruptores mecánicos, sensores inductivos y transmisores de posición continua. Certificaciones para áreas clasificadas.",
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
          desc: "Partes de repuesto originales para válvulas, actuadores y accesorios. Incluyen kits de sellos, asientos, empaques, resortes, diafragmas y todos los componentes consumibles necesarios para el mantenimiento preventivo y correctivo de sus equipos.",
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
