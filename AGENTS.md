# Guía para Codex

## Objetivo del repositorio

Esta es una plantilla Vue multipropósito para catálogos de productos o servicios. Debe poder personalizarse sin rehacer su arquitectura y conservar un build funcional durante todo el trabajo.

## Orden de lectura obligatorio

1. Lee `README.md` y `docs/COMPONENTS.md`.
2. Personaliza `src/config/site.config.js`.
3. Sustituye los elementos de `src/data/catalog.json`.
4. Ajusta tokens visuales en `src/styles/theme.css`.
5. Modifica componentes solamente cuando el pedido requiera una composición o interacción diferente.

## Reglas de personalización

- Activa o desactiva bloques únicamente mediante `enabledSections`; no elimines condicionales de `App.vue`.
- Los ids válidos están declarados en `src/config/sections.js`.
- Si el usuario no entrega contenido suficiente, usa placeholders coherentes con su rubro y mantenlos claramente identificables. No inventes teléfonos, precios, certificaciones, testimonios, direcciones ni cifras como si fueran reales.
- Mantén los datos repetibles fuera de los componentes. El catálogo pertenece a `src/data/catalog.json`.
- Reemplaza `VisualPlaceholder.vue` por imágenes reales solo cuando estén disponibles o se soliciten.
- Conserva HTML semántico, navegación por teclado, textos alternativos y contraste legible.
- No agregues dependencias de producción sin que la funcionalidad lo justifique.
- Mantén comentarios y documentación en español; conserva nombres técnicos de archivos y componentes en inglés.

## Verificación obligatoria

Después de cambiar código ejecuta:

```sh
npm run check
```

Si modificas despliegue, ejecuta además el build correspondiente:

```sh
npm run build:github
npm run build:sites
```

## Criterios de finalización

- Solo aparecen las secciones solicitadas.
- No quedan datos falsos presentados como reales.
- La página funciona desde 320 px y en escritorio.
- Lint, prueba básica y build terminan correctamente.
- `README.md` refleja cualquier nueva configuración o componente estructural.

## Code Review Rules

- Señala secciones renderizadas que no estén en `enabledSections`.
- Señala contenido comercial inventado que no esté marcado como placeholder.
- Señala datos de catálogo escritos directamente dentro de una tarjeta Vue.
- Señala enlaces externos con `target="_blank"` que no incluyan `rel="noopener noreferrer"`.
