import type { Metadata } from "next";
import { Montagu_Slab, Gantari } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import "../globals.css";

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
  return {
    title: {
      default: t("title"),
      template: `%s | IPSA`,
    },
    description: t("description"),
    metadataBase: new URL("https://ipsacv.com.mx"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "IPSA - Ingenieria de Partes",
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
    },
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

  return (
    <html lang={locale} className={`${montaguSlab.variable} ${gantari.variable}`}>
      <body className="font-body antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
