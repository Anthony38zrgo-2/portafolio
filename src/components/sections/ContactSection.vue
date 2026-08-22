<script setup>
/** CONTACTO: CTA final; admite WhatsApp, formulario externo, correo o agenda. */
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="contact" class="contact-section section-space" aria-labelledby="contact-title">
    <div class="page-container contact-inner">
      <p class="eyebrow">{{ siteConfig.contact.eyebrow }}</p>
      <h2 id="contact-title" class="section-title">{{ siteConfig.contact.title }}</h2>
      <p>{{ siteConfig.contact.description }}</p>
      <a class="button button-light" :href="siteConfig.contact.url" target="_blank" rel="noopener noreferrer">
        {{ siteConfig.contact.label }}
      </a>
      <small>{{ siteConfig.contact.note }}</small>
    </div>
  </section>
</template>
