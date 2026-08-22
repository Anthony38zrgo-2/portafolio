import { siteConfig } from "./site.config";

export const SECTION_IDS = Object.freeze([
  "header",
  "hero",
  "catalog",
  "about",
  "benefits",
  "contact",
  "footer",
  "floating-contact",
]);

export function isSectionEnabled(id, config = siteConfig) {
  return config.enabledSections.includes(id);
}

export function getUnknownSectionIds(config = siteConfig) {
  return config.enabledSections.filter((id) => !SECTION_IDS.includes(id));
}

const anchorSections = Object.freeze({
  "#top": "hero",
  "#catalog": "catalog",
  "#about": "about",
  "#benefits": "benefits",
  "#contact": "contact",
});

export function isConfiguredLinkAvailable(href, config = siteConfig) {
  if (!href?.startsWith("#")) return true;
  const sectionId = anchorSections[href];
  return !sectionId || isSectionEnabled(sectionId, config);
}

export function getFirstContentHref(config = siteConfig) {
  const firstId = ["hero", "catalog", "about", "benefits", "contact"].find(
    (id) => isSectionEnabled(id, config),
  );
  return firstId ? Object.keys(anchorSections).find((href) => anchorSections[href] === firstId) : "#";
}
