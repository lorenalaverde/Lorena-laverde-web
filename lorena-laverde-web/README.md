# Lorena Laverde · Firma Consultora — Sitio Web

Sitio web oficial de [lorenalaverde.com](https://lorenalaverde.com): consultoría empresarial para pymes y emprendedores LATAM (Método Rentable™) y desarrollo para mujeres (Método ACCIÓN™).

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build). Deploy automático: **GitHub → Netlify**.

## Estructura

```
/
├── index.html              ← Página principal (consultoría)
├── 404.html                ← Página de error
├── metodo/
│   └── metodo-accion.html  ← Página Método ACCIÓN™
├── css/
│   ├── style.css           ← Estilos base
│   └── responsive.css      ← Media queries (móvil/tablet)
├── js/
│   └── main.js             ← Formulario de la guía + interacciones
├── images/                 ← Fotos (optimizadas, <250 KB c/u)
├── downloads/              ← PDFs descargables (lead magnets)
├── assets/                 ← Favicon, logos, íconos
├── netlify.toml            ← Redirects, headers de seguridad y caché
├── robots.txt · sitemap.xml
└── README.md · LICENSE · .gitignore
```

## Cómo ver el sitio en local

Doble clic en `index.html`, o para un servidor local:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Cómo publicar cambios (deploy automático)

Cada `push` a la rama `main` publica automáticamente en Netlify. No se suben archivos a mano.

```bash
git add .
git commit -m "Descripción breve del cambio"
git push
```

En 30–60 segundos el cambio está en producción. El estado del deploy se ve en el panel de Netlify → Deploys.

## Cómo modificar contenido

| Quiero cambiar…            | Archivo                                    |
|----------------------------|--------------------------------------------|
| Textos y precios (home)    | `index.html`                               |
| Textos página ACCIÓN™      | `metodo/metodo-accion.html`                |
| Colores, tipografía        | `css/style.css` (variables en `:root`)     |
| Comportamiento móvil       | `css/responsive.css`                       |
| Formulario de la guía      | `js/main.js`                               |

**Regla de precios:** los precios viven en `index.html` (tarjetas de servicios) y en `metodo/metodo-accion.html` (sección "Trabajar conmigo"). Si cambias uno, cambia el otro. Un solo precio por producto en todo el ecosistema.

## Cómo agregar una página nueva

1. Crea la carpeta y archivo: `/blog/mi-articulo.html` (usa `index.html` como plantilla base)
2. Enlázala desde el menú de `index.html`
3. Agrégala a `sitemap.xml` (copia un bloque `<url>` y ajusta)
4. `git add . && git commit && git push`

## Cómo agregar imágenes

1. Optimiza antes de subir: máx. 1200px de ancho, formato JPG, <250 KB
2. Guárdala en `/images/` con nombre descriptivo en minúsculas: `foto-taller-2026.jpg`
3. Referénciala: `<img src="images/foto-taller-2026.jpg" alt="descripción" loading="lazy">`
4. Desde `/metodo/` la ruta es `../images/…`

## Cómo agregar PDFs

1. Guárdalo en `/downloads/`
2. Enlázalo: `<a href="downloads/nombre.pdf" download>…</a>`
3. Opcional: crea un link corto en `netlify.toml` (ver el ejemplo de `/guia`)

## URLs y redirects activos

- `/guia` → PDF de las 5 señales (link corto para redes)
- `/metodo` y `/metodo-accion` → página del Método ACCIÓN™
- Las URLs antiguas (`/metodo-accion.html`) redirigen con 301 (SEO preservado)

## Servicios conectados

| Servicio  | Función                | Dónde se configura            |
|-----------|------------------------|-------------------------------|
| Netlify   | Hosting + deploy + DNS | app.netlify.com               |
| Formspree | Captura de leads       | formspree.io (form `mqevjedk`)|
| Stripe    | Pago sesión $199       | Payment Link en `index.html`  |

## Roadmap de escalabilidad (arquitectura preparada)

| Fase | Módulo | Implementación prevista |
|------|--------|--------------------------|
| 1 | Blog SEO | `/blog/` — HTML estático o Eleventy |
| 2 | Reservas | Cal.com embebido post-pago Stripe |
| 3 | Email marketing | Migrar Formspree → MailerLite |
| 4 | Cursos / Método Rentable™ | Subdominio `cursos.lorenalaverde.com` (Hotmart/Podia) |
| 5 | Área privada / CRM / Chat IA | Evaluar cuando haya >50 clientes activos |

**Principio:** no agregar infraestructura antes de que exista la demanda que la justifique.

---
© 2026 Lorena Laverde. Código y contenido propietarios — ver LICENSE.
