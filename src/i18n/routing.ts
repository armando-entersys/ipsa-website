import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  pathnames: {
    "/": "/",
    "/productos": {
      es: "/productos",
      en: "/products",
    },
    "/productos/[slug]": {
      es: "/productos/[slug]",
      en: "/products/[slug]",
    },
    "/servicios": {
      es: "/servicios",
      en: "/services",
    },
    "/servicios/[slug]": {
      es: "/servicios/[slug]",
      en: "/services/[slug]",
    },
    "/industrias": {
      es: "/industrias",
      en: "/industries",
    },
    "/industrias/[slug]": {
      es: "/industrias/[slug]",
      en: "/industries/[slug]",
    },
    "/proveedores": {
      es: "/proveedores",
      en: "/suppliers",
    },
    "/proveedores/[slug]": {
      es: "/proveedores/[slug]",
      en: "/suppliers/[slug]",
    },
    "/nosotros": {
      es: "/nosotros",
      en: "/about",
    },
    "/nosotros/alianzas": {
      es: "/nosotros/alianzas",
      en: "/about/alliances",
    },
    "/nosotros/historia": {
      es: "/nosotros/historia",
      en: "/about/history",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
    "/catalogo": {
      es: "/catalogo",
      en: "/catalog",
    },
  },
});
