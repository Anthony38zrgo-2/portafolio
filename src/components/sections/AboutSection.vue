<script setup>
/** NOSOTROS: presenta evidencia, historia o propósito del negocio. */
import { siteConfig } from "@/config/site.config";
import VisualPlaceholder from "@/components/ui/VisualPlaceholder.vue";
</script>

<template>
  <section id="about" class="section-space section-muted" aria-labelledby="about-title">
    <div class="page-container split-grid split-grid-reverse">
      <VisualPlaceholder :label="siteConfig.about.visualLabel" aspect-ratio="4 / 5" />
      <div>
        <p class="eyebrow">{{ siteConfig.about.eyebrow }}</p>
        <h2 id="about-title" class="section-title">{{ siteConfig.about.title }}</h2>
        <p class="lead">{{ siteConfig.about.description }}</p>
      </div>
    </div>
  </section>
</template>
