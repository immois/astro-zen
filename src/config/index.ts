import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alejandro Múnez — Mobile & Web Developer",
  description: "",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alejandro Múnez",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "example@email.com",
  },
};
