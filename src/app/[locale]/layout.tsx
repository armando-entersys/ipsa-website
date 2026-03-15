import type { Metadata } from "next";
import { Montagu_Slab, Gantari } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieBanner from "@/components/layout/CookieBanner";
import AnalyticsTracker from "@/components/layout/AnalyticsTracker";
import "../globals.css";

const SITE_URL = process.env.SITE_URL || "https://ipsa.scram2k.com";

const montaguSlab = Montagu_Slab({
  subsets: ["latin"],
  variable: "--font-heading-loaded",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const gantari = Gantari({
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const ogImage = `${SITE_URL}/og-image.jpg`;
  return {
    title: {
      default: t("title"),
      template: `%s | IPSA`,
    },
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    keywords: locale === "es"
      ? ["Válvulas API 6DSS México", "Control direccional Versa", "Válvulas de bola Trunnion servicio severo", "Ingeniería de procesos industriales SIL 3", "Distribuidor autorizado Perar y Della Foglia"]
      : ["API 6DSS Valves Mexico", "Versa directional control", "Trunnion ball valves severe service", "Industrial process engineering SIL 3", "Authorized Perar Della Foglia distributor"],
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "IPSA - Ingeniería de Partes",
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
      url: `${SITE_URL}/${locale}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "IPSA - Válvulas, Actuadores y Automatización Industrial",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
      },
    },
    ...(process.env.GOOGLE_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION
      ? {
          verification: {
            ...(process.env.GOOGLE_SITE_VERIFICATION && { google: process.env.GOOGLE_SITE_VERIFICATION }),
            ...(process.env.BING_SITE_VERIFICATION && { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }),
          },
        }
      : {}),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "IPSA - Ingeniería de Partes S.A. de C.V.",
        alternateName: "IPSA",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logos/ipsa-logo.svg`,
        description: locale === "es"
          ? "Más de 38 años suministrando válvulas, actuadores y servicios de automatización para la industria en México."
          : "Over 38 years supplying valves, actuators, and automation services for industry in Mexico.",
        foundingDate: "1986",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Convento de Actopan No. 33, Col. Jardines de Santa Monica",
          addressLocality: "Tlalnepantla",
          addressRegion: "Estado de México",
          postalCode: "54050",
          addressCountry: "MX",
        },
        telephone: "+52 55 5397 3703",
        email: "ventas.mexico@ipsa-cv.com.mx",
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+52 55 5397 3703",
          contactType: "sales",
          areaServed: ["MX", "US"],
          availableLanguage: ["Spanish", "English"],
        },
        naics: "332911",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 20,
          maxValue: 100,
        },
        knowsAbout: [
          "Industrial Valves",
          "Trunnion Ball Valves",
          "Gate Valves",
          "Globe Valves",
          "Check Valves",
          "Safety Relief Valves",
          "Solenoid Valves",
          "Control Valves",
          "Hydraulic Actuators",
          "Process Automation",
          "PLC SCADA Integration",
          "SIL 3 Functional Safety",
          "API 6D Certification",
          "API 6DSS Subsea Valves",
          "ASME Standards",
          "Valve Sizing Engineering",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "Industrial Valves", description: "Trunnion ball, gate, globe, check, safety and control valves certified to API and ASME standards" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "Hydraulic Actuators", description: "Scotch-yoke hydraulic actuators for quarter-turn valve automation" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Industrial Automation", description: "PLC/SCADA integration, control panel design, and legacy system migration" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Process Engineering", description: "Detailed engineering, EPC project management, and regulatory compliance" },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "IPSA - Ingeniería de Partes",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: locale === "es" ? "es-MX" : "en-US",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "IPSA - Ingeniería de Partes S.A. de C.V.",
        image: `${SITE_URL}/images/heroes/products-hero.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Convento de Actopan No. 33, Col. Jardines de Santa Monica",
          addressLocality: "Tlalnepantla",
          addressRegion: "Estado de México",
          postalCode: "54050",
          addressCountry: "MX",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.5406,
          longitude: -99.2119,
        },
        telephone: "+52 55 5397 3703",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        priceRange: "$$$$",
        areaServed: {
          "@type": "Country",
          name: "Mexico",
        },
      },
    ],
  };

  return (
    <html lang={locale} className={`${montaguSlab.variable} ${gantari.variable}`}>
      <GoogleTagManager gtmId="GTM-WL6RXLS3" />
      <body className="font-body antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WL6RXLS3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CookieBanner />
          <AnalyticsTracker />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
