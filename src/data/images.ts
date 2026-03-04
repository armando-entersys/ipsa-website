import { blurDataURLs } from "./blur-placeholders";

/**
 * Optimized local images for fast loading.
 * Hero images: 1400x600, q70. Section images: 1200x800, q70.
 */

export const stockImages = {
  // Hero / banners
  hero: "/images/heroes/industries-hero.jpg",
  heroAlt: "/images/heroes/products-hero.jpg",

  // Inner page heroes
  productsHero: "/images/heroes/products-hero.jpg",
  servicesHero: "/images/heroes/services-hero.jpg",
  industriesHero: "/images/heroes/industries-hero.jpg",
  suppliersHero: "/images/heroes/suppliers-hero.jpg",
  aboutHero: "/images/heroes/about-hero.jpg",
  contactHero: "/images/heroes/contact-hero.jpg",
  catalogHero: "/images/heroes/products-hero.jpg",

  // Industries
  oilGas: "/images/heroes/oil-gas.jpg",
  gas: "/images/heroes/gas.jpg",
  oils: "/images/heroes/oils.jpg",

  // Services
  automation: "/images/heroes/automation-hero.jpg",
  engineering: "/images/heroes/engineering-hero.jpg",
  workshop: "/images/products/ipsa-tablero-1.jpg",

  // Products
  valves: "/images/products/df-factory-valves.jpg",
  industrial: "/images/heroes/df-facility.jpg",

  // About / team
  team: "/images/heroes/about-hero.jpg",
  office: "/images/heroes/df-facility.jpg",

  // Contact
  contact: "/images/heroes/contact-hero.jpg",
} as const;

/** Get blur placeholder for a stockImages path */
export function getBlur(src: string): string {
  const filename = src.split("/").pop()?.replace(".jpg", "") || "";
  return blurDataURLs[filename] || blurDataURLs["industries-hero"];
}
