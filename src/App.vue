<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import CatalogSection from "@/components/sections/CatalogSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import BenefitsSection from "@/components/sections/BenefitsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import FloatingContact from "@/components/ui/FloatingContact.vue";
import { getUnknownSectionIds, isSectionEnabled } from "@/config/sections";

const contentSections = [
  { id: "hero", component: HeroSection },
  { id: "catalog", component: CatalogSection },
  { id: "about", component: AboutSection },
  { id: "benefits", component: BenefitsSection },
  { id: "contact", component: ContactSection },
];

const unknownSections = getUnknownSectionIds();
if (unknownSections.length) {
  console.warn(`Secciones desconocidas: ${unknownSections.join(", ")}`);
}
</script>

<template>
  <div class="page-shell">
    <!-- CODEX: la visibilidad depende solo de enabledSections. -->
    <AppHeader v-if="isSectionEnabled('header')" />

    <main>
      <template v-for="section in contentSections" :key="section.id">
        <component :is="section.component" v-if="isSectionEnabled(section.id)" />
      </template>
    </main>

    <AppFooter v-if="isSectionEnabled('footer')" />
    <FloatingContact v-if="isSectionEnabled('floating-contact')" />
  </div>
</template>
