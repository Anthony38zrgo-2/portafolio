<script setup>
/** SERVICIOS: Presentación de servicios de creación de páginas web y cotizaciones. */
import { Layout, ShoppingBag, Rocket, ShieldCheck, MessageCircle } from "lucide-vue-next";
import { siteConfig } from "@/config/site.config";

const serviceIcons = [Layout, ShoppingBag, Rocket, ShieldCheck];
</script>

<template>
  <section id="benefits" class="section-space services-section" aria-labelledby="benefits-title">
    <div class="page-container">
      <div class="section-header">
        <p class="eyebrow">{{ siteConfig.benefits.eyebrow }}</p>
        <h2 id="benefits-title" class="section-title">{{ siteConfig.benefits.title }}</h2>
        <p v-if="siteConfig.benefits.description" class="section-intro">
          {{ siteConfig.benefits.description }}
        </p>
      </div>

      <div class="services-grid">
        <article v-for="(item, index) in siteConfig.benefits.items" :key="item.title" class="service-card">
          <div class="service-card-header">
            <div class="service-icon-box">
              <component :is="serviceIcons[index % serviceIcons.length]" class="size-5 text-brand" aria-hidden="true" />
            </div>
            <span class="service-index">{{ String(index + 1).padStart(2, "0") }}</span>
          </div>
          <h3 class="service-title">{{ item.title }}</h3>
          <p class="service-description">{{ item.description }}</p>
        </article>
      </div>

      <!-- Banner de Cotización Inmediata -->
      <div class="services-cta-banner">
        <div class="cta-banner-content">
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>
            Platícame sobre tu negocio o requerimiento y obtén una cotización clara, tiempos estimados y asesoría directa.
          </p>
        </div>
        <a
          :href="siteConfig.benefits.ctaUrl || siteConfig.contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="button button-whatsapp"
        >
          <MessageCircle class="size-5" aria-hidden="true" />
          <span>Cotizar por WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
</template>


