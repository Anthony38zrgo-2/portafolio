<script setup>
/** HEADER: identidad y navegación sencilla para clientes. */
import { computed } from "vue";
import { MessageCircle, FileText } from "lucide-vue-next";
import { siteConfig } from "@/config/site.config";
import { getFirstContentHref, isSectionEnabled } from "@/config/sections";

const navigation = computed(() =>
  [
    { section: "catalog", label: "Trabajos", href: "#catalog" },
    { section: "benefits", label: "Servicios", href: "#benefits" },
    { section: "contact", label: "Contacto", href: "#contact" },
  ].filter(({ section }) => isSectionEnabled(section)),
);
const homeHref = computed(() => getFirstContentHref());
</script>

<template>
  <header class="site-header">
    <div class="page-container header-inner">
      <a class="brand" :href="homeHref" :aria-label="`Ir al inicio de ${siteConfig.brand.name}`">
        <span class="brand-mark">{{ siteConfig.brand.shortName }}</span>
        <span class="brand-text">
          <strong>{{ siteConfig.brand.name }}</strong>
          <small class="brand-role">Páginas Web & Catálogos</small>
        </span>
      </a>
      <nav aria-label="Navegación principal" class="nav-links">
        <a v-for="item in navigation" :key="item.section" :href="item.href">
          {{ item.label }}
        </a>
        <a
          v-if="siteConfig.hero.cvAction"
          :href="siteConfig.hero.cvAction.href"
          target="_blank"
          rel="noopener noreferrer"
          class="header-cv-link"
          download
        >
          <FileText class="size-3.5" aria-hidden="true" />
          <span>{{ siteConfig.hero.cvAction.label }}</span>
        </a>
        <a
          v-if="siteConfig.contact.url"
          :href="siteConfig.contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="header-cta-button"
        >
          <MessageCircle class="size-4" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </div>
  </header>
</template>



