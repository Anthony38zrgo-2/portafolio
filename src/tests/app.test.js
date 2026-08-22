import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import App from "@/App.vue";
import {
  getFirstContentHref,
  getUnknownSectionIds,
  isConfiguredLinkAvailable,
  isSectionEnabled,
} from "@/config/sections";

describe("plantilla configurable", () => {
  it("renderiza las secciones habilitadas sin ids desconocidos", () => {
    const wrapper = mount(App);

    expect(getUnknownSectionIds()).toEqual([]);
    expect(wrapper.find("#catalog").exists()).toBe(isSectionEnabled("catalog"));
    expect(wrapper.find("#about").exists()).toBe(isSectionEnabled("about"));
    expect(wrapper.find("#benefits").exists()).toBe(isSectionEnabled("benefits"));
    expect(wrapper.find("#contact").exists()).toBe(isSectionEnabled("contact"));
  });

  it("evita enlaces hacia secciones desactivadas", () => {
    const minimalConfig = {
      enabledSections: ["header", "hero", "catalog", "footer"],
    };

    expect(isConfiguredLinkAvailable("#catalog", minimalConfig)).toBe(true);
    expect(isConfiguredLinkAvailable("#contact", minimalConfig)).toBe(false);
    expect(getFirstContentHref(minimalConfig)).toBe("#top");
  });
});
