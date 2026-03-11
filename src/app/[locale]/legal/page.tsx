import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Aviso Legal' : 'Legal Notice',
    description: isEs
      ? 'Aviso de privacidad, términos y condiciones y política de cookies de IPSA.'
      : 'Privacy notice, terms and conditions, and cookie policy of IPSA.',
  };
}

/* ── Shared styles ─────────────────────────────────── */
const sectionCls = 'mb-16 last:mb-0';
const h2Cls = 'font-heading text-2xl md:text-3xl font-semibold text-navy mb-6';
const h3Cls = 'font-heading text-lg md:text-xl font-semibold text-gray-800 mt-8 mb-3';
const pCls = 'text-gray-600 leading-relaxed mb-4';
const ulCls = 'list-disc list-inside text-gray-600 leading-relaxed mb-4 space-y-1 ml-2';

export default function LegalPage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <h1
            className="font-heading text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}
          >
            {isEs ? 'Aviso Legal' : 'Legal Notice'}
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            {isEs
              ? 'Aviso de privacidad, términos y condiciones de uso, y política de cookies.'
              : 'Privacy notice, terms and conditions of use, and cookie policy.'}
          </p>
          {/* Anchor nav */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { id: 'privacidad', es: 'Aviso de Privacidad', en: 'Privacy Notice' },
              { id: 'terminos', es: 'Términos y Condiciones', en: 'Terms & Conditions' },
              { id: 'cookies', es: 'Política de Cookies', en: 'Cookie Policy' },
            ].map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80 hover:bg-white/10 transition-colors"
              >
                {isEs ? s.es : s.en}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-10">

          {/* ═══ 1. AVISO DE PRIVACIDAD ═══════════════════ */}
          <div id="privacidad" className={sectionCls}>
            <h2 className={h2Cls}>
              {isEs ? 'Aviso de Privacidad' : 'Privacy Notice'}
            </h2>

            <p className={pCls}>
              {isEs
                ? 'En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, Ingeniería de Partes S.A. de C.V. (en adelante "IPSA"), con domicilio en Calle 19 No. 210, Col. Salitral, CP 24130, Cd. del Carmen, Campeche, México, hace de su conocimiento lo siguiente:'
                : 'In compliance with the Federal Law for the Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations, Ingeniería de Partes S.A. de C.V. (hereinafter "IPSA"), with address at Calle 19 No. 210, Col. Salitral, CP 24130, Cd. del Carmen, Campeche, Mexico, informs you of the following:'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '1. Responsable del tratamiento' : '1. Data Controller'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'IPSA es responsable del tratamiento de sus datos personales. Para cualquier consulta relacionada con la protección de sus datos, puede contactarnos a través del correo electrónico: ventas.mexico@ipsa-cv.com.mx o al teléfono +52 938 138 0550.'
                : 'IPSA is the data controller responsible for your personal data. For any inquiry related to data protection, you may contact us at: ventas.mexico@ipsa-cv.com.mx or call +52 938 138 0550.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '2. Datos personales recabados' : '2. Personal Data Collected'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'A través de nuestro sitio web y formularios de contacto, podemos recabar los siguientes datos personales:'
                : 'Through our website and contact forms, we may collect the following personal data:'}
            </p>
            <ul className={ulCls}>
              {(isEs
                ? ['Nombre completo', 'Empresa u organización', 'Correo electrónico corporativo', 'Número telefónico', 'Industria o sector', 'Mensaje o consulta']
                : ['Full name', 'Company or organization', 'Corporate email', 'Phone number', 'Industry or sector', 'Message or inquiry']
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className={h3Cls}>
              {isEs ? '3. Finalidades del tratamiento' : '3. Purpose of Processing'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'Sus datos personales serán utilizados para las siguientes finalidades:'
                : 'Your personal data will be used for the following purposes:'}
            </p>
            <ul className={ulCls}>
              {(isEs
                ? [
                    'Atender sus solicitudes de información, cotización o soporte técnico',
                    'Dar seguimiento comercial a proyectos y consultas',
                    'Enviar información sobre productos, servicios y novedades de IPSA',
                    'Cumplir con obligaciones legales y contractuales',
                  ]
                : [
                    'Respond to your requests for information, quotes, or technical support',
                    'Follow up on commercial projects and inquiries',
                    'Send information about IPSA products, services, and updates',
                    'Comply with legal and contractual obligations',
                  ]
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className={h3Cls}>
              {isEs ? '4. Derechos ARCO' : '4. ARCO Rights'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, envíe su solicitud a ventas.mexico@ipsa-cv.com.mx indicando su nombre, los datos que desea ejercer y una descripción de su solicitud. Responderemos en un plazo máximo de 20 días hábiles.'
                : 'You have the right to Access, Rectify, Cancel, or Oppose the processing of your personal data (ARCO rights). To exercise these rights, send your request to ventas.mexico@ipsa-cv.com.mx indicating your name, the rights you wish to exercise, and a description of your request. We will respond within a maximum of 20 business days.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '5. Transferencia de datos' : '5. Data Transfer'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'IPSA no transferirá sus datos personales a terceros sin su consentimiento, salvo en los casos previstos por la LFPDPPP y su Reglamento.'
                : 'IPSA will not transfer your personal data to third parties without your consent, except as provided by the LFPDPPP and its Regulations.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '6. Modificaciones al aviso' : '6. Changes to this Notice'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'IPSA se reserva el derecho de modificar el presente Aviso de Privacidad. Cualquier cambio será publicado en esta misma página.'
                : 'IPSA reserves the right to modify this Privacy Notice. Any changes will be published on this same page.'}
            </p>
          </div>

          {/* ═══ 2. TÉRMINOS Y CONDICIONES ════════════════ */}
          <div id="terminos" className={sectionCls}>
            <h2 className={h2Cls}>
              {isEs ? 'Términos y Condiciones' : 'Terms & Conditions'}
            </h2>

            <h3 className={h3Cls}>
              {isEs ? '1. Uso del sitio' : '1. Site Usage'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'El acceso y uso de este sitio web (ipsacv.com.mx) implica la aceptación de estos términos y condiciones. IPSA se reserva el derecho de modificarlos en cualquier momento sin previo aviso.'
                : 'Access to and use of this website (ipsacv.com.mx) implies acceptance of these terms and conditions. IPSA reserves the right to modify them at any time without prior notice.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '2. Propiedad intelectual' : '2. Intellectual Property'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos, diseños y software, es propiedad de Ingeniería de Partes S.A. de C.V. o de sus respectivos titulares y está protegido por las leyes de propiedad intelectual aplicables. Las marcas de terceros (DHV, Della Foglia, Perar, Versa, Masoneilan, Consolidated) son propiedad de sus respectivos fabricantes.'
                : 'All content on this website, including texts, images, logos, designs, and software, is the property of Ingeniería de Partes S.A. de C.V. or their respective owners and is protected by applicable intellectual property laws. Third-party brands (DHV, Della Foglia, Perar, Versa, Masoneilan, Consolidated) are property of their respective manufacturers.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '3. Información de productos' : '3. Product Information'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'La información sobre productos, especificaciones técnicas y disponibilidad presentada en este sitio es de carácter informativo y puede estar sujeta a cambios sin previo aviso. Para información actualizada sobre stock y especificaciones, contacte a nuestro equipo de ventas.'
                : 'Product information, technical specifications, and availability presented on this site are for informational purposes and may be subject to change without notice. For current stock and specification information, contact our sales team.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '4. Limitación de responsabilidad' : '4. Limitation of Liability'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'IPSA no será responsable por daños directos o indirectos derivados del uso de este sitio web. La información aquí contenida no constituye una oferta comercial vinculante. Las cotizaciones formales serán emitidas por nuestro equipo comercial de manera directa.'
                : 'IPSA shall not be liable for direct or indirect damages arising from the use of this website. The information contained herein does not constitute a binding commercial offer. Formal quotes will be issued directly by our sales team.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '5. Legislación aplicable' : '5. Applicable Law'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se someterá a la jurisdicción de los tribunales competentes de Ciudad del Carmen, Campeche.'
                : 'These terms are governed by the laws of the United Mexican States. Any dispute shall be submitted to the jurisdiction of the competent courts of Ciudad del Carmen, Campeche.'}
            </p>
          </div>

          {/* ═══ 3. POLÍTICA DE COOKIES ═══════════════════ */}
          <div id="cookies" className={sectionCls}>
            <h2 className={h2Cls}>
              {isEs ? 'Política de Cookies' : 'Cookie Policy'}
            </h2>

            <h3 className={h3Cls}>
              {isEs ? '1. ¿Qué son las cookies?' : '1. What are Cookies?'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo para recordar información sobre su visita, como su idioma preferido y otras configuraciones.'
                : 'Cookies are small text files that websites store on your device to remember information about your visit, such as your preferred language and other settings.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '2. Cookies que utilizamos' : '2. Cookies We Use'}
            </h3>
            <p className={pCls}>
              {isEs ? 'Este sitio utiliza los siguientes tipos de cookies:' : 'This site uses the following types of cookies:'}
            </p>
            <ul className={ulCls}>
              {(isEs
                ? [
                    'Cookies esenciales: necesarias para el funcionamiento del sitio (preferencia de idioma, sesión de navegación)',
                    'Cookies de consentimiento: registran su aceptación del uso de cookies',
                    'Cookies de análisis (Google Analytics): nos ayudan a entender cómo se utiliza el sitio para mejorarlo',
                  ]
                : [
                    'Essential cookies: necessary for the site to function (language preference, browsing session)',
                    'Consent cookies: record your acceptance of cookie usage',
                    'Analytics cookies (Google Analytics): help us understand how the site is used to improve it',
                  ]
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className={h3Cls}>
              {isEs ? '3. Control de cookies' : '3. Cookie Control'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'Puede configurar su navegador para rechazar cookies o eliminar las existentes en cualquier momento. Tenga en cuenta que al desactivar las cookies, algunas funcionalidades del sitio podrían verse afectadas.'
                : 'You can configure your browser to reject cookies or delete existing ones at any time. Please note that disabling cookies may affect some site functionality.'}
            </p>

            <h3 className={h3Cls}>
              {isEs ? '4. Contacto' : '4. Contact'}
            </h3>
            <p className={pCls}>
              {isEs
                ? 'Si tiene alguna pregunta sobre nuestra política de cookies o el tratamiento de sus datos, puede contactarnos en ventas.mexico@ipsa-cv.com.mx.'
                : 'If you have any questions about our cookie policy or the processing of your data, you can contact us at ventas.mexico@ipsa-cv.com.mx.'}
            </p>
          </div>

          {/* Last updated */}
          <p className="text-sm text-gray-400 border-t border-gray-100 pt-8">
            {isEs
              ? 'Última actualización: Marzo 2026'
              : 'Last updated: March 2026'}
          </p>
        </div>
      </section>
    </>
  );
}
