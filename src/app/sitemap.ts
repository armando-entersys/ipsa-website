import type { MetadataRoute } from 'next';
import { categoryList, getAllSubtypes } from '@/data/products';
import { industries } from '@/data/industries';
import { services } from '@/data/services';
import { suppliers } from '@/data/suppliers';

const BASE = 'https://ipsacv.com.mx';

/**
 * Path mapping: ES path segment → EN path segment.
 * Slugs (dynamic params) remain the same in both languages.
 */
const PATH_ES_TO_EN: Record<string, string> = {
  productos: 'products',
  servicios: 'services',
  industrias: 'industries',
  fabricantes: 'manufacturers',
  nosotros: 'about',
  contacto: 'contact',
  catalogo: 'catalog',
  alianzas: 'alliances',
  historia: 'history',
};

/** Convert an ES-locale path to its EN equivalent, translating known segments. */
function toEnPath(esPath: string): string {
  return esPath
    .split('/')
    .map((segment) => PATH_ES_TO_EN[segment] ?? segment)
    .join('/');
}

/** Build a sitemap entry with hreflang alternates for ES and EN. */
function entry(
  esPath: string,
  priority = 0.7,
  changeFrequency: 'weekly' | 'monthly' = 'monthly',
): MetadataRoute.Sitemap[number] {
  const enPath = toEnPath(esPath);

  return {
    url: `${BASE}/es${esPath}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: `${BASE}/es${esPath}`,
        en: `${BASE}/en${enPath}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // ── Static pages ─────────────────────────────────────────────────
  urls.push(entry('', 1.0, 'weekly'));                        // Home
  urls.push(entry('/productos', 0.9, 'weekly'));
  urls.push(entry('/servicios', 0.9, 'weekly'));
  urls.push(entry('/industrias', 0.9, 'weekly'));
  urls.push(entry('/fabricantes', 0.9, 'weekly'));
  urls.push(entry('/nosotros', 0.8));
  urls.push(entry('/nosotros/alianzas', 0.6));
  urls.push(entry('/nosotros/historia', 0.6));
  urls.push(entry('/contacto', 0.8));
  urls.push(entry('/catalogo', 0.7));

  // ── Product categories ───────────────────────────────────────────
  for (const cat of categoryList) {
    urls.push(entry(`/productos/${cat.slug}`, 0.8, 'weekly'));
  }

  // ── Product subtypes ─────────────────────────────────────────────
  for (const st of getAllSubtypes()) {
    urls.push(entry(`/productos/${st.categorySlug}/${st.slug}`, 0.7));
  }

  // ── Industries ───────────────────────────────────────────────────
  for (const ind of industries) {
    urls.push(entry(`/industrias/${ind.slug}`, 0.8));
  }

  // ── Services ─────────────────────────────────────────────────────
  for (const svc of services) {
    urls.push(entry(`/servicios/${svc.slug}`, 0.8));
  }

  // ── Suppliers ────────────────────────────────────────────────────
  for (const sup of suppliers) {
    urls.push(entry(`/fabricantes/${sup.slug}`, 0.8));
  }

  return urls;
}
