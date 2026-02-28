import type { MetadataRoute } from 'next';
import { categoryList, getAllSubtypes } from '@/data/products';
import { industries } from '@/data/industries';
import { services } from '@/data/services';
import { suppliers } from '@/data/suppliers';

const BASE = 'https://ipsacv.com.mx';
const LOCALES = ['es', 'en'] as const;

function entry(path: string, priority = 0.7, changeFrequency: 'weekly' | 'monthly' = 'monthly'): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    const p = `/${locale}`;

    // Static pages
    urls.push(entry(p, 1.0, 'weekly'));
    urls.push(entry(`${p}/productos`, 0.9, 'weekly'));
    urls.push(entry(`${p}/servicios`, 0.9, 'weekly'));
    urls.push(entry(`${p}/industrias`, 0.9, 'weekly'));
    urls.push(entry(`${p}/proveedores`, 0.9, 'weekly'));
    urls.push(entry(`${p}/nosotros`, 0.8));
    urls.push(entry(`${p}/nosotros/alianzas`, 0.6));
    urls.push(entry(`${p}/nosotros/historia`, 0.6));
    urls.push(entry(`${p}/contacto`, 0.8));
    urls.push(entry(`${p}/catalogo`, 0.7));

    // Product categories
    for (const cat of categoryList) {
      urls.push(entry(`${p}/productos/${cat.slug}`, 0.8, 'weekly'));
    }

    // Product subtypes
    for (const st of getAllSubtypes()) {
      urls.push(entry(`${p}/productos/${st.categorySlug}/${st.slug}`, 0.7));
    }

    // Industries
    for (const ind of industries) {
      urls.push(entry(`${p}/industrias/${ind.slug}`, 0.8));
    }

    // Services
    for (const svc of services) {
      urls.push(entry(`${p}/servicios/${svc.slug}`, 0.8));
    }

    // Suppliers
    for (const sup of suppliers) {
      urls.push(entry(`${p}/proveedores/${sup.slug}`, 0.8));
    }
  }

  return urls;
}
