/**
 * CENTRO DE PERSONALIZACIÓN
 * Configuración del portafolio orientada a clientes comerciales.
 */
export const siteConfig = {
  brand: {
    name: "Anthony Morales",
    shortName: "AM",
    tagline: "Diseño & Creación de Páginas Web",
    description:
      "Diseño y desarrollo de páginas web modernas, catálogos digitales y tiendas online para negocios, emprendedores y marcas que quieren vender más por internet.",
  },

  // Valores válidos: header, hero, catalog, about, benefits, contact, footer, floating-contact.
  // Portafolio minimal Aero: hero (con resumen de servicios) + catálogo dedicado.
  enabledSections: [
    "hero",
    "catalog",
    "footer",
    "floating-contact",
  ],

  hero: {
    eyebrow: "Páginas Web & Catálogos",
    title: "Tu negocio en internet, moderno y listo para vender",
    subtitle: "Anthony Morales · Diseñador & Desarrollador Web",
    description:
      "Creo sitios web y catálogos interactivos con conexión directa a WhatsApp para negocios que buscan aumentar sus ventas.",
    primaryAction: {
      label: "Cotizar por WhatsApp",
      href: "https://wa.me/51964163543?text=Hola%20Anthony,%20deseo%20cotizar%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.",
    },
    secondaryAction: { label: "Ver Trabajos", href: "#catalog" },
    cvAction: { label: "Descargar CV (PDF)", href: "/CV-Anthony-Morales.pdf" },
    visualLabel: "Servicios en Resumen — Aero Glass Minimal",
  },

  catalog: {
    eyebrow: "Trabajos Realizados",
    title: "Páginas Web Creadas para Negocios",
    description:
      "Explora algunos de los sitios web y catálogos interactivos desarrollados para diferentes rubros comerciales. Haz clic en 'Ver Página Web' para probarlos en vivo.",
    emptyMessage: "No hay proyectos cargados actualmente.",
  },

  about: {
    eyebrow: "Sobre Mí",
    title: "Creando soluciones digitales prácticas para negocios",
    description:
      "Profesional en Ingeniería de Sistemas e Informática dedicado a ayudar a empresas y profesionales a digitalizarse con páginas web efectivas y seguras.",
    visualLabel: "Anthony Morales · Perfil",
  },

  benefits: {
    eyebrow: "¿Cómo te puedo ayudar?",
    title: "Servicios de Creación de Páginas Web",
    description:
      "Todo lo que tu negocio necesita para destacar en internet, captar clientes y cerrar ventas directamente por WhatsApp.",
    ctaLabel: "Cotizar mi página por WhatsApp",
    ctaUrl: "https://wa.me/51964163543?text=Hola%20Anthony,%20quiero%20cotizar%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.",
    items: [
      {
        title: "Páginas Web para tu Negocio",
        shortLabel: "Páginas Web",
        description:
          "Sitios modernos y veloces para posicionar tu marca, transmitir confianza y captar nuevos clientes.",
      },
      {
        title: "Catálogos con Pedidos a WhatsApp",
        shortLabel: "Catálogos",
        description:
          "Muestra tus productos con fotos, precios y pedidos directos al chat sin pagar comisiones por venta.",
      },
      {
        title: "Páginas de Aterrizaje (Landing Pages)",
        shortLabel: "Landing Pages",
        description:
          "Páginas de alto impacto diseñadas para maximizar conversiones y ventas en tus campañas de publicidad.",
      },
      {
        title: "Puesta en Marcha & Asesoría Total",
        shortLabel: "Puesta en Marcha",
        description:
          "Gestión integral: dominio, publicación en internet, optimización y soporte sin enredos técnicos.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto Directo",
    title: "¿Quieres una página web para tu negocio? ¡Hablemos!",
    description:
      "Escríbeme por WhatsApp, cuéntame tu idea y te enviaré una propuesta personalizada y sin compromiso.",
    label: "Conversar por WhatsApp",
    url: "https://wa.me/51964163543?text=Hola%20Anthony,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20cotizar%20una%20p%C3%A1gina%20web.",
    phone: "+51 964163543",
    email: "zrgo38@hotmail.com",
    linkedin: "https://www.linkedin.com/in/bill-anthony-moraleses-cahuancama-62278b1b2/",
    github: "https://github.com/Anthony38zrgo-2",
    note: "Atención personalizada · Respuesta rápida por WhatsApp.",
  },

  footer: {
    legal: "Anthony Morales. Todos los derechos reservados.",
    location: "Lima · Perú",
  },
};

