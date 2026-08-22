# Secciones y componentes

## Sistema de secciones

`src/config/site.config.js` contiene `enabledSections`. `App.vue` consulta esa lista antes de renderizar cada bloque. Los ids permitidos y la relación entre anclas y secciones viven en `src/config/sections.js`; agregar una sección nueva requiere registrarla allí y añadirla al arreglo `contentSections` de `App.vue`.

Los enlaces internos del Hero desaparecen automáticamente si su destino está desactivado. El enlace de marca del Header apunta a la primera sección de contenido disponible.

## Layout

- `AppHeader.vue`: identidad y navegación. Sus enlaces se filtran según las secciones activas.
- `AppFooter.vue`: descripción, año, texto legal y ubicación.

## Secciones

- `HeroSection.vue`: propuesta principal y dos llamadas a la acción.
- `CatalogSection.vue`: recorre `catalog.json`; sirve para productos, servicios, planes o propiedades.
- `AboutSection.vue`: historia, propósito o evidencia de confianza.
- `BenefitsSection.vue`: lista de tres o más pasos, ventajas o condiciones.
- `ContactSection.vue`: CTA final hacia WhatsApp, correo, agenda o formulario externo.

## UI

- `VisualPlaceholder.vue`: reserva espacio visual sin imágenes. Recibe `label` y `aspectRatio`. Debe conservar un nombre accesible si se reemplaza.
- `FloatingContact.vue`: acceso persistente al enlace configurado en `siteConfig.contact.url`. Se oculta retirando `floating-contact` de `enabledSections`.

## Datos y estilos

- `catalog.json`: un objeto por elemento. `id` debe ser único; `badge` puede quedar vacío.
- `theme.css`: tokens globales de marca.
- `components.css`: composición común y responsive. Evita convertirlo en un archivo de estilos específicos del contenido.

## Contrato para nuevas secciones

Cada nueva sección debe tener un id HTML estable, `aria-labelledby`, configuración separada del marcado, comentarios breves de propósito y al menos una prueba si introduce interacción.
