<script setup>
/**
 * PLACEHOLDER VISUAL
 * Mantiene el layout sin usar imágenes. Codex puede reemplazarlo por <img>,
 * video o una composición CSS, conservando aspectRatio y texto alternativo.
 */
defineProps({
  label: { type: String, required: true },
  aspectRatio: { type: String, default: "4 / 3" },
});
</script>

<template>
  <div
    class="visual-placeholder"
    :style="{ aspectRatio }"
    role="img"
    :aria-label="label"
  >
    <span>{{ label }}</span>
  </div>
</template>
