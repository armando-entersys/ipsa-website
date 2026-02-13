import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { stockImages } from "@/data/images";

const serviceData: Record<string, {
  es: { name: string; desc: string; capabilities: string[]; steps: { title: string; desc: string }[] };
  en: { name: string; desc: string; capabilities: string[]; steps: { title: string; desc: string }[] };
}> = {
  automatizacion: {
    es: {
      name: "Automatizacion de valvulas y procesos",
      desc: "Disenamos, construimos y comisionamos paquetes completos de automatizacion para valvulas de proceso. Desde la seleccion del actuador hasta el comisionamiento en sitio, ofrecemos una solucion llave en mano.",
      capabilities: ["Paquetes completos valvula + actuador + accesorios", "Sistemas ESD (Emergency Shutdown)", "Paneles de control neumaticos y electrohidraulicos", "Seleccion de actuadores (neumaticos, electricos, hidraulicos)", "Integracion con sistemas de control (DCS, SIS, SCADA)", "Comisionamiento y puesta en marcha en sitio", "Soporte post-venta y servicio 24/7"],
      steps: [
        { title: "Analisis de requerimientos", desc: "Revisamos especificaciones, P&IDs y condiciones de operacion de tu proyecto." },
        { title: "Ingenieria de diseno", desc: "Seleccionamos actuadores, accesorios y disenamos el paquete completo." },
        { title: "Procura y ensamble", desc: "Adquirimos componentes y ensamblamos en nuestras instalaciones." },
        { title: "Pruebas", desc: "Pruebas funcionales, de torque e hidrostaticas antes de entrega." },
        { title: "Comisionamiento", desc: "Instalacion y puesta en marcha en sitio con nuestro equipo tecnico." },
      ],
    },
    en: {
      name: "Valve and process automation",
      desc: "We design, build and commission complete automation packages for process valves. From actuator selection to on-site commissioning, we offer a turnkey solution.",
      capabilities: ["Complete valve + actuator + accessories packages", "ESD (Emergency Shutdown) systems", "Pneumatic and electrohydraulic control panels", "Actuator selection (pneumatic, electric, hydraulic)", "Integration with control systems (DCS, SIS, SCADA)", "On-site commissioning and startup", "Post-sale support and 24/7 service"],
      steps: [
        { title: "Requirements analysis", desc: "We review specifications, P&IDs and operating conditions of your project." },
        { title: "Design engineering", desc: "We select actuators, accessories and design the complete package." },
        { title: "Procurement and assembly", desc: "We source components and assemble in our facilities." },
        { title: "Testing", desc: "Functional, torque and hydrostatic testing before delivery." },
        { title: "Commissioning", desc: "On-site installation and startup with our technical team." },
      ],
    },
  },
  ingenieria: {
    es: {
      name: "Ingenieria y proyectos EPC",
      desc: "Como grupo integrado IPSA + MAEPSA + Certus, ofrecemos capacidad EPC completa para proyectos industriales. Desde la ingenieria conceptual hasta la entrega de instalaciones funcionando.",
      capabilities: ["Ingenieria conceptual y basica", "Ingenieria de detalle", "Procura de equipos y materiales", "Construccion de instalaciones industriales", "Gestion integral de proyectos", "Supervision y control de calidad", "Entrega y puesta en marcha"],
      steps: [
        { title: "Ingenieria conceptual", desc: "Definimos el alcance, alternativas y viabilidad del proyecto." },
        { title: "Ingenieria basica", desc: "Desarrollamos el diseno preliminar y especificaciones generales." },
        { title: "Ingenieria de detalle", desc: "Generamos planos, especificaciones y documentos para construccion." },
        { title: "Procura", desc: "Adquirimos todos los equipos y materiales segun especificacion." },
        { title: "Construccion y entrega", desc: "Construimos, probamos y entregamos la instalacion operando." },
      ],
    },
    en: {
      name: "Engineering and EPC projects",
      desc: "As an integrated group IPSA + MAEPSA + Certus, we offer full EPC capability for industrial projects. From conceptual engineering to delivery of operating facilities.",
      capabilities: ["Conceptual and basic engineering", "Detailed engineering", "Equipment and materials procurement", "Industrial facility construction", "Integral project management", "Supervision and quality control", "Delivery and commissioning"],
      steps: [
        { title: "Conceptual engineering", desc: "We define scope, alternatives and project feasibility." },
        { title: "Basic engineering", desc: "We develop preliminary design and general specifications." },
        { title: "Detailed engineering", desc: "We generate drawings, specs and construction documents." },
        { title: "Procurement", desc: "We source all equipment and materials per specification." },
        { title: "Construction and delivery", desc: "We build, test and deliver the operating facility." },
      ],
    },
  },
  "soporte-in-house": {
    es: {
      name: "Centro de Automatizacion y Distribucion (CAD)",
      desc: "Nuestro CAD en Cd. del Carmen, Campeche ofrece servicios de reparacion, pruebas, inspeccion y mantenimiento de equipos. Con inventario valorado en mas de $5M USD disponible 24/7.",
      capabilities: ["Reparacion de valvulas de control y seguridad (MARC)", "Pruebas hidrostaticas y neumaticas", "Pruebas de torque", "Inspeccion NDE: ultrasonido, particulas magneticas, liquidos penetrantes, PMI", "Almacen 24/7 con inventario de +$5M USD", "Reparacion de enfriadores y aspas de ventilador", "Reparacion de unidades de potencia hidraulica (HPU)", "Entrenamiento tecnico especializado"],
      steps: [
        { title: "Diagnostico", desc: "Evaluamos el equipo y determinamos el alcance de la reparacion." },
        { title: "Propuesta", desc: "Presentamos propuesta tecnica y economica con tiempos de entrega." },
        { title: "Reparacion/Servicio", desc: "Ejecutamos el trabajo con personal certificado en nuestras instalaciones." },
        { title: "Pruebas", desc: "Verificamos el equipo con pruebas segun norma aplicable." },
        { title: "Entrega", desc: "Entregamos el equipo con documentacion completa y certificados." },
      ],
    },
    en: {
      name: "Automation and Distribution Center (CAD)",
      desc: "Our CAD in Cd. del Carmen, Campeche offers equipment repair, testing, inspection and maintenance services. With inventory valued at over $5M USD available 24/7.",
      capabilities: ["Control and safety valve repair (MARC)", "Hydrostatic and pneumatic testing", "Torque testing", "NDE inspection: ultrasonic, magnetic particle, liquid penetrant, PMI", "24/7 warehouse with $5M+ USD inventory", "Cooler and fan blade repair", "Hydraulic power unit (HPU) repair", "Specialized technical training"],
      steps: [
        { title: "Diagnosis", desc: "We evaluate the equipment and determine repair scope." },
        { title: "Proposal", desc: "We present a technical and economic proposal with delivery times." },
        { title: "Repair/Service", desc: "We execute the work with certified personnel at our facilities." },
        { title: "Testing", desc: "We verify equipment with tests per applicable standard." },
        { title: "Delivery", desc: "We deliver equipment with complete documentation and certificates." },
      ],
    },
  },
};

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const service = serviceData[slug];
  if (!service) notFound();

  const l = locale as "es" | "en";
  const prefix = `/${locale}`;
  const data = service[l];

  return (
    <>
      {/* ═══ HERO with background image ═══════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "55vh" }}>
        <Image
          src={stockImages.servicesHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-alt/90 via-navy-alt/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center" style={{ minHeight: "55vh" }}>
          <div className="max-w-3xl py-20 lg:py-28">
            <nav className="text-sm text-white/60 hero-subtitle mb-6">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <Link href={`${prefix}/servicios`} className="hover:text-white transition-colors">
                {locale === "es" ? "Servicios" : "Services"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{data.name}</span>
            </nav>
            <h1
              className="font-heading text-white leading-tight mb-6 hero-text-strong"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600 }}
            >
              {data.name}
            </h1>
            <p className="text-white/85 hero-subtitle max-w-2xl leading-relaxed" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              {data.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE OFFER ════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                {locale === "es" ? "Capacidades" : "Capabilities"}
              </p>
              <h2 className="font-heading text-gray-900 mb-8" style={{ fontSize: "2rem", fontWeight: 600 }}>
                {locale === "es" ? "Que ofrecemos" : "What we offer"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {data.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA card */}
              <div
                className="bg-navy-deep p-7 rounded-2xl shadow-card"
              >
                <h3 className="font-heading font-semibold text-gold-light mb-2" style={{ fontSize: "1.15rem" }}>
                  {locale === "es" ? "Comienza tu proyecto" : "Start your project"}
                </h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  {locale === "es"
                    ? "Nuestros ingenieros te ayudan a encontrar la solucion correcta."
                    : "Our engineers help you find the right solution."}
                </p>
                <Link
                  href={`${prefix}/contacto`}
                  className="block w-full text-center px-6 py-3 bg-gold text-white font-medium rounded-xl btn-lift hover:bg-gold-dark transition-colors mb-3"
                >
                  {locale === "es" ? "Solicitar asesoria" : "Request advisory"}
                </Link>
                <a
                  href="tel:+525553973703"
                  className="flex items-center justify-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Phone size={14} /> +52 55 5397 3703
                </a>
              </div>

              {/* Other services */}
              <div
                className="p-7 rounded-2xl bg-surface-alt shadow-card"
              >
                <h3 className="font-heading font-semibold text-gray-900 mb-4" style={{ fontSize: "1.05rem" }}>
                  {locale === "es" ? "Otros servicios" : "Other services"}
                </h3>
                <div className="space-y-1">
                  {Object.entries(serviceData)
                    .filter(([key]) => key !== slug)
                    .map(([key, s]) => (
                      <Link
                        key={key}
                        href={`${prefix}/servicios/${key}`}
                        className="flex items-center gap-2 py-2.5 text-sm text-gray-600 hover:text-gold transition-colors duration-300"
                        style={{ borderBottom: "1px solid var(--color-border-soft, #edf0f3)" }}
                      >
                        <ArrowRight size={13} className="text-gold shrink-0" />
                        <span>{s[l].name}</span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR PROCESS - Timeline ═══════════════════ */}
      <section className="py-20 lg:py-24 bg-surface-alt">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Metodologia" : "Methodology"}
            </p>
            <h2 className="font-heading text-gray-900" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es" ? "Nuestro proceso" : "Our process"}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical gold accent line */}
              <div
                className="absolute left-6 top-6 bottom-6 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, #bb9034, #e7bd58, #bb9034)" }}
              />

              <div className="space-y-0">
                {data.steps.map((step, i) => (
                  <div key={i} className="relative flex gap-6 md:gap-8 group">
                    {/* Number circle */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-navy-alt border-[3px] border-gold"
                      >
                        <span className="text-white font-heading font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 pb-8"
                      style={{ borderBottom: i < data.steps.length - 1 ? "1px solid var(--color-border-soft, #edf0f3)" : "none" }}
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-card">
                        <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA with background image ═════════ */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <Image
          src={stockImages.industrial}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-white mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es" ? "Listo para comenzar?" : "Ready to get started?"}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {locale === "es"
                ? "Nuestro equipo de ingenieros esta listo para ayudarte a encontrar la solucion correcta para tu proyecto."
                : "Our engineering team is ready to help you find the right solution for your project."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded-xl btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {locale === "es" ? "Solicitar asesoria" : "Request advisory"}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="tel:+525553973703"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl btn-lift hover:bg-white/20"
              >
                <Phone size={16} />
                +52 55 5397 3703
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
