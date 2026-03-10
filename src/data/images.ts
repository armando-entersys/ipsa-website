import { blurDataURLs } from "./blur-placeholders";

/**
 * Optimized local images for fast loading.
 * Hero images: 1400x600, q70. Section images: 1200x800, q70.
 */

export const stockImages = {
  // Hero / banners
  hero: "/images/heroes/industries-hero.jpg",
  heroAlt: "/images/heroes/products-stock-hero.webp",

  // Inner page heroes
  productsHero: "/images/heroes/products-stock-hero.webp",
  servicesHero: "/images/heroes/services-hero.jpg",
  industriesHero: "/images/heroes/industries-hero.jpg",
  suppliersHero: "/images/heroes/suppliers-hero.jpg",
  aboutHero: "/images/heroes/about-hero-new.jpg",
  contactHero: "/images/heroes/contact-hero.webp",
  catalogHero: "/images/heroes/products-stock-hero.webp",

  // Industries
  oilGas: "/images/heroes/oil-gas.jpg",
  gas: "/images/heroes/gas.jpg",
  oils: "/images/heroes/oils.jpg",

  // Services
  automation: "/images/heroes/df-actuator-test.jpg",
  engineering: "/images/heroes/df-cnc-machining.jpg",
  workshop: "/images/products/ipsa-pneumatic-panel.jpg",

  // Products
  valves: "/images/heroes/df-trunnion-valves-row.jpg",
  industrial: "/images/products/ipsa-ingenieria-valvulas.webp",

  // About / team
  team: "/images/heroes/ipsa-servicio.webp",
  office: "/images/heroes/df-facility-exterior.jpg",

  // Contact
  contact: "/images/heroes/contact-hero.jpg",
} as const;

/** Get blur placeholder for a stockImages path */
export function getBlur(src: string): string {
  const filename = src.split("/").pop()?.replace(/\.(jpg|jpeg|png|webp|svg)$/, "") || "";
  return blurDataURLs[filename] || blurDataURLs["industries-hero"];
}
