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
    "/fabricantes": {
      es: "/fabricantes",
      en: "/manufacturers",
    },
    "/fabricantes/[slug]": {
      es: "/fabricantes/[slug]",
      en: "/manufacturers/[slug]",
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
