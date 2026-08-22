<script setup>
/** CATÁLOGO: Portfolio Aero Glass minimal — grid 3 columnas. */
import { ExternalLink, Github } from "lucide-vue-next";
import catalog from "@/data/catalog.json";
import { siteConfig } from "@/config/site.config";
import VisualPlaceholder from "@/components/ui/VisualPlaceholder.vue";
</script>

<template>
  <section
    id="catalog"
    class="section-space catalog-section"
    aria-labelledby="catalog-title"
  >
    <div class="page-container">
      <div class="section-header">
        <p class="eyebrow">{{ siteConfig.catalog.eyebrow }}</p>
        <h2 id="catalog-title" class="section-title">
          {{ siteConfig.catalog.title }}
        </h2>
        <p class="section-intro">{{ siteConfig.catalog.description }}</p>
      </div>

      <div v-if="catalog.length" class="catalog-grid">
        <article
          v-for="item in catalog"
          :key="item.id"
          class="catalog-card project-card"
        >
          <div class="card-visual-wrapper">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="`Captura de pantalla de ${item.name}`"
              class="card-img"
              width="800"
              height="450"
              loading="lazy"
            />
            <VisualPlaceholder
              v-else
              :label="item.name"
              aspect-ratio="16 / 9"
            />
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="category-badge">{{ item.category }}</span>
              <span v-if="item.badge" class="status-badge">{{
                item.badge
              }}</span>
            </div>
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-description">{{ item.description }}</p>

            <div v-if="item.tags?.length" class="card-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag-pill">{{
                tag
              }}</span>
            </div>

            <div class="card-actions">
              <a
                v-if="item.demoUrl"
                :href="item.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="button button-primary button-sm flex-1 justify-center"
                :aria-label="`Probar sitio web de ${item.name}`"
              >
                <span>Ver página</span>
                <ExternalLink class="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>
      <p v-else class="empty-state">{{ siteConfig.catalog.emptyMessage }}</p>
    </div>
  </section>
</template>
