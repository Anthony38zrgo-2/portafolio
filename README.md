# Portafolio Web - Anthony Morales

Portafolio web interactivo (Single Page Application - SPA) desarrollado con **Vue 3**, **Vite**, **Tailwind CSS 4** y **JavaScript**, diseñado para presentar proyectos web, experiencia profesional y servicios de desarrollo de software freelance.

## Secciones Principales (SPA)

1. **Header**: Identidad y navegación rápida (`#catalog`, `#benefits`, enlace a CV y WhatsApp).
2. **Resumen de CV + Proyectos**: Síntesis profesional, stack tecnológico, descarga de CV en PDF y showcase interactivo de los 6 proyectos desplegados en GitHub Pages.
3. **Servicios de Creación de Páginas Web**: Oferta de valor para landing pages, catálogos con pedidos a WhatsApp, sistemas a medida y soporte técnico con botón de cotización directa.
4. **Footer**: Datos de contacto, redes (LinkedIn, GitHub), ubicación y derechos de autor.
5. **Botón Flotante**: Acceso inmediato a WhatsApp (`+51 964163543`).

## Inicio Rápido

```sh
npm install
npm run dev
```

## Verificación

```sh
npm run check          # Lint (ESLint), Pruebas (Vitest) y Build (Vite)
npm run build:github   # Build para GitHub Pages
npm run build:sites    # Build para Cloudflare Workers / Sites
```


No es necesario editar `App.vue` para activar u ocultar secciones existentes.

## Comandos

```sh
npm run dev            # Desarrollo local
npm run check          # Lint, prueba y build general
npm run build:github   # Build con ruta base de GitHub Pages
npm run build:sites    # Build compatible con OpenAI Sites
npm run deploy         # Publica dist en la rama gh-pages
```

Para GitHub Pages, define `VITE_GITHUB_REPOSITORY` en `.env` cuando el nombre local sea diferente al repositorio. En GitHub Actions, el nombre se obtiene automáticamente de `GITHUB_REPOSITORY`.

El workflow `.github/workflows/deploy-pages.yml` verifica y publica cada cambio enviado a `main`. En la configuración del repositorio selecciona **GitHub Actions** como fuente de Pages.

Para OpenAI Sites, `.openai/hosting.json` comienza vacío. Sites añadirá el `project_id` cuando se cree la publicación; no copies el identificador de otro proyecto.

## Uso como repositorio plantilla de GitHub

1. Publica esta carpeta en un repositorio nuevo.
2. En GitHub abre **Settings**.
3. Activa **Template repository**.
4. En proyectos futuros usa **Use this template**.

La copia local también funciona duplicando la carpeta, retirando su historial Git si corresponde y cambiando el campo `name` de `package.json`.

Consulta `docs/COMPONENTS.md` para conocer el contrato de cada bloque.
