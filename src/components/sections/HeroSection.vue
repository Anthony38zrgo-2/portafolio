<script setup>
/** HERO: Título minimal + panel iconográfico de servicios (más iconos que texto). */
import {
  MessageCircle,
  Layout,
  ShoppingBag,
  Rocket,
  ShieldCheck,
} from "lucide-vue-next";
import developerIllustration from "@/assets/developer-illustration.png";
import { siteConfig } from "@/config/site.config";

const serviceIcons = [Layout, ShoppingBag, Rocket, ShieldCheck];
</script>

<template>
  <section
    id="top"
    class="hero-section section-space"
    aria-labelledby="hero-title"
  >
    <div class="page-container hero-container-centered">
      <!-- Encabezado Centrado Superior -->
      <div class="hero-header-centered">
        <p class="eyebrow">{{ siteConfig.hero.eyebrow }}</p>
        <h1 id="hero-title" class="display-title hero-title-centered">
          {{ siteConfig.hero.title }}
        </h1>
        <p v-if="siteConfig.hero.subtitle" class="hero-subtitle">
          {{ siteConfig.hero.subtitle }}
        </p>
      </div>

      <!-- Fila Inferior: 2 Columnas Balanceadas y Centradas -->
      <div class="hero-bottom-grid">
        <!-- Columna Izquierda: Ilustración -->
        <div class="hero-illustration-col">
          <div class="hero-illustration-frame">
            <img
              :src="developerIllustration"
              alt="Ilustración de Anthony Morales creando páginas web y catálogos"
              class="hero-developer-img"
              width="584"
              height="404"
              loading="eager"
            />
            <div class="hero-illustration-glow" aria-hidden="true" />
          </div>
        </div>

        <!-- Columna Derecha: Panel Minimalista sin exceso de bordes -->
        <aside class="hero-services-panel" aria-label="Servicios">
          <h2 class="hero-services-title">Servicios</h2>

          <ul
            class="hero-services-grid"
            role="list"
            aria-label="Lista de servicios"
          >
            <li
              v-for="(item, index) in siteConfig.benefits.items"
              :key="item.title"
              class="hero-service-tile"
            >
              <component
                :is="serviceIcons[index % serviceIcons.length]"
                class="size-6 text-aero-cyan"
                aria-hidden="true"
              />
              <span class="hero-service-name">{{
                item.shortLabel || item.title
              }}</span>
            </li>
          </ul>

          <a
            :href="siteConfig.benefits.ctaUrl || siteConfig.contact.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-services-button"
            :title="siteConfig.benefits.ctaLabel"
          >
            <MessageCircle class="size-4" aria-hidden="true" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </aside>
      </div>
    </div>
  </section>
</template>
