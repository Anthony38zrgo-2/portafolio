<script setup>
/** FOOTER: cierre, datos de contacto, enlaces y derechos de autor. */
import { MessageCircle, Mail, MapPin, ExternalLink, FileText } from "lucide-vue-next";
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <footer class="site-footer">
    <div class="page-container footer-grid">
      <div class="footer-brand-block">
        <div class="footer-brand">
          <span class="brand-mark">{{ siteConfig.brand.shortName }}</span>
          <strong>{{ siteConfig.brand.name }}</strong>
        </div>
        <p class="footer-desc">{{ siteConfig.brand.description }}</p>
      </div>

      <div class="footer-contact-block">
        <h4 class="footer-col-title">Contacto Directo</h4>
        <ul class="footer-links-list">
          <li>
            <a
              :href="siteConfig.contact.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link-highlight flex items-center gap-2"
            >
              <MessageCircle class="size-4" aria-hidden="true" />
              <span>WhatsApp: {{ siteConfig.contact.phone }}</span>
            </a>
          </li>
          <li>
            <a :href="`mailto:${siteConfig.contact.email}`" class="flex items-center gap-2">
              <Mail class="size-4 text-white/60" aria-hidden="true" />
              <span>{{ siteConfig.contact.email }}</span>
            </a>
          </li>
          <li class="flex items-center gap-2 text-white/70">
            <MapPin class="size-4 text-white/60" aria-hidden="true" />
            <span>{{ siteConfig.footer.location }}</span>
          </li>
        </ul>
      </div>

      <div class="footer-links-block">
        <h4 class="footer-col-title">Enlaces & Perfiles</h4>
        <ul class="footer-links-list">
          <li v-if="siteConfig.contact.linkedin">
            <a
              :href="siteConfig.contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink class="size-3 text-white/50" aria-hidden="true" />
            </a>
          </li>
          <li v-if="siteConfig.contact.github">
            <a
              :href="siteConfig.contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <ExternalLink class="size-3 text-white/50" aria-hidden="true" />
            </a>
          </li>
          <li v-if="siteConfig.hero.cvAction">
            <a
              :href="siteConfig.hero.cvAction.href"
              target="_blank"
              rel="noopener noreferrer"
              download
              class="flex items-center gap-1.5"
            >
              <FileText class="size-3.5 text-white/60" aria-hidden="true" />
              <span>Descargar CV (PDF)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="page-container footer-bottom">
      <p>© {{ new Date().getFullYear() }} {{ siteConfig.footer.legal }}</p>
      <p class="footer-built">Desarrollado con Vue 3 & Tailwind CSS</p>
    </div>
  </footer>
</template>


