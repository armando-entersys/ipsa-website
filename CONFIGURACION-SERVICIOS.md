# Configuración de Servicios Externos — IPSA Web

Guía paso a paso para configurar los servicios que el sitio necesita.
Todos se configuran mediante variables de entorno en el servidor.

---

## 1. Resend (Formulario de Contacto)

El formulario de `/contacto` envía emails a través de **Resend**.
Gratis: 3,000 emails/mes, 100/día.

### Paso 1 — Crear cuenta

1. Ir a https://resend.com/signup
2. Registrarse con email (puede ser ventas.mexico@ipsa-cv.com.mx)
3. Confirmar email

### Paso 2 — Obtener API Key

1. Ir a https://resend.com/api-keys
2. Click **"Create API Key"**
3. Nombre: `ipsa-web-production`
4. Permission: **Sending access**
5. Domain: **All domains** (por ahora)
6. Copiar la key — empieza con `re_`

### Paso 3 — (Opcional) Verificar dominio propio

Sin esto, los emails se envían desde `onboarding@resend.dev`.
Con dominio verificado, se envían desde `contacto@ipsacv.com.mx`.

1. Ir a https://resend.com/domains
2. Click **"Add Domain"** → escribir `ipsacv.com.mx`
3. Resend muestra **3 registros DNS** que debes agregar:
   - 1 registro **MX** (para recibir)
   - 1 registro **TXT** (SPF)
   - 1 registro **CNAME** (DKIM)
4. Agregar estos registros en tu proveedor de DNS
5. Esperar verificación (5 min a 48 hrs)
6. Una vez verificado, cambiar `RESEND_FROM` a:
   ```
   RESEND_FROM=IPSA Web <contacto@ipsacv.com.mx>
   ```

### Variables de entorno

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=ventas.mexico@ipsa-cv.com.mx
RESEND_FROM=IPSA Web <onboarding@resend.dev>
```

---

## 2. Google Analytics 4 (Tracking de CTAs)

GA4 trackea automáticamente todas las interacciones del sitio.
El código ya está integrado — solo falta el Measurement ID.

### Paso 1 — Crear cuenta GA4

1. Ir a https://analytics.google.com
2. Click **"Empezar a medir"**
3. Nombre de cuenta: `IPSA`
4. Nombre de propiedad: `IPSA Web`
5. Zona horaria: **(GMT-6) Ciudad de México**
6. Moneda: **Peso mexicano (MXN)**

### Paso 2 — Crear Data Stream

1. En la propiedad recién creada → **Admin** → **Data Streams**
2. Click **"Web"**
3. URL del sitio: `https://ipsacv.com.mx` (dominio final)
4. Nombre: `IPSA Web`
5. Click **"Create stream"**
6. Copiar el **Measurement ID** (formato: `G-XXXXXXXXXX`)

### Paso 3 — Configurar eventos recomendados

En **Admin → Data Streams → (tu stream) → Enhanced measurement**, verificar que estén activos:
- Page views ✓
- Scrolls ✓
- Outbound clicks ✓
- Site search ✓
- Form interactions ✓

### Eventos personalizados ya integrados

El sitio ya envía estos eventos automáticamente:

| Evento | Cuándo se dispara | Parámetros |
|--------|-------------------|------------|
| `cta_click` | Click en cualquier botón/link a `/contacto` | `cta_name`, `cta_location`, `cta_type` |
| `contact` (phone) | Click en link de teléfono | `method`, `phone_number`, `page` |
| `contact` (email) | Click en link de email | `method`, `email_address`, `page` |
| `contact` (whatsapp) | Click en botón de WhatsApp | `method`, `page` |
| `navigation` | Click en links a productos/servicios | `destination`, `source` |
| `generate_lead` | Envío exitoso del formulario | `form_name`, `industry`, `query_type` |

### Para ver reportes

- **Tiempo real:** Reports → Realtime
- **Eventos:** Reports → Engagement → Events
- **Conversiones:** Admin → Events → marcar `generate_lead` como conversión
- **CTAs por página:** Explore → crear reporte con dimensión `cta_location`

### Variable de entorno

```bash
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 3. Google Search Console (SEO / Indexación)

Para que Google indexe el sitio. **Actualmente hay 0 páginas indexadas.**

### Paso 1 — Agregar propiedad

1. Ir a https://search.google.com/search-console
2. Click **"Add property"**
3. Elegir **"URL prefix"**
4. Escribir: `https://ipsacv.com.mx` (o `https://ipsa.scram2k.com` si aún no migran)

### Paso 2 — Verificar con meta tag

1. Elegir método **"HTML tag"**
2. Google da un código tipo: `<meta name="google-site-verification" content="XXXXXX" />`
3. Copiar solo el valor del `content` (la cadena `XXXXXX`)
4. Eso es tu `GOOGLE_SITE_VERIFICATION`

### Paso 3 — Enviar sitemap

1. Una vez verificado, ir a **Sitemaps** en el menú lateral
2. Escribir: `sitemap.xml`
3. Click **"Submit"**
4. El sitemap del sitio lista las 24+ páginas en ES e EN

### Paso 4 — Solicitar indexación

1. En la barra superior, pegar la URL principal: `https://ipsacv.com.mx/es`
2. Click **"Request indexing"**
3. Repetir con las páginas más importantes:
   - `/es/productos`
   - `/es/servicios`
   - `/es/industrias`
   - `/es/contacto`
   - `/es/nosotros`

### Variable de entorno

```bash
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxx
```

---

## 4. Bing Webmaster Tools (Opcional)

Indexación en Bing/DuckDuckGo.

### Paso 1

1. Ir a https://www.bing.com/webmasters
2. Iniciar sesión con cuenta Microsoft
3. Click **"Add site manually"**
4. URL: `https://ipsacv.com.mx`

### Paso 2 — Verificar

1. Elegir **"HTML Meta Tag"**
2. Copiar el valor del `content`

### Paso 3 — Importar de Google

Alternativamente, si ya tienes GSC configurado:
1. Click **"Import from Google Search Console"**
2. Conectar cuenta de Google
3. Se importa todo automáticamente

### Variable de entorno

```bash
BING_SITE_VERIFICATION=xxxxxxxxxxxxxxxx
```

---

## Cómo aplicar las variables en el servidor

### Opción A — Archivo .env (recomendado)

```bash
# Conectarse al servidor
gcloud compute ssh prod-server --zone=us-central1-c

# Editar el archivo .env
cd /srv/IPSA/Website
nano .env
```

Contenido del archivo `.env`:

```bash
GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxx
BING_SITE_VERIFICATION=xxxxxxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=ventas.mexico@ipsa-cv.com.mx
RESEND_FROM=IPSA Web <onboarding@resend.dev>
```

Guardar y reconstruir:

```bash
docker compose up -d --build --force-recreate
```

### Opción B — Desde tu máquina local

```bash
# Crear el .env remotamente en un solo comando
gcloud compute ssh prod-server --zone=us-central1-c --command="cat > /srv/IPSA/Website/.env << 'EOF'
GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxx
BING_SITE_VERIFICATION=xxxxxxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=ventas.mexico@ipsa-cv.com.mx
RESEND_FROM=IPSA Web <onboarding@resend.dev>
EOF"

# Reconstruir
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && docker compose up -d --build --force-recreate"
```

### Verificar que las variables se cargaron

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker exec ipsa-web printenv | grep -E 'GA_|GOOGLE_|BING_|RESEND_|CONTACT_'"
```

---

## Orden sugerido de configuración

| # | Servicio | Prioridad | Tiempo estimado |
|---|----------|-----------|-----------------|
| 1 | **Resend** | Alta — el formulario no envía emails sin esto | 5 min |
| 2 | **GA4** | Alta — sin esto no hay datos de tracking | 10 min |
| 3 | **Google Search Console** | Alta — sin esto Google no indexa el sitio | 10 min |
| 4 | **Verificar dominio en Resend** | Media — emails desde tu dominio propio | 15 min + espera DNS |
| 5 | **Bing Webmaster** | Baja — opcional, se puede importar de GSC | 5 min |

---

## Nota sobre la migración a ipsacv.com.mx

Cuando se migre al dominio final:

1. Actualizar el DNS de `ipsacv.com.mx` para apuntar al servidor GCP
2. Agregar regla de Traefik para el nuevo dominio en `docker-compose.yml`:
   ```yaml
   - "traefik.http.routers.ipsa-web.rule=Host(`ipsacv.com.mx`) || Host(`www.ipsacv.com.mx`)"
   ```
3. Crear nueva propiedad en GSC para `ipsacv.com.mx`
4. Actualizar Data Stream en GA4 con el nuevo dominio
5. El sitemap ya apunta a `ipsacv.com.mx` — verificar que resuelve correctamente
