import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jay Halani — Android and Flutter Developer",
  author: "Jay Halani",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/jayhalani-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    {
      text: "Resume",
      href: "https://drive.google.com/file/d/1GpnRepxEiKeHa_Nfmla3xvOn4XjOajG7/view?usp=sharing",
      target: "_blank",
      rel: "noopener noreferrer"
    },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jay Halani",
    specialty: "Android and Flutter Developer",
    summary:
      "Senior Android and Flutter Developer with 7+ years of experience building high-performance, cross-platform apps with clean architecture and responsive design.",
    email: "jayhalani.work@gmail.com",
  },
  experience: [
    {
      company: "Techabbot",
      position: "Sr. Anroid & Flutter Developer",
      startDate: "Apr 2023",
      endDate: "May 2025",
      summary: [
        "Led the end-to-end development of multiple Flutter apps with optimized performance and smooth user experience.",
        "Migrated legacy Android apps to Flutter, enhancing cross-platform support and reducing maintenance efforts.",
        "Collaborated with cross-functional teams to deliver customized app solutions for warehouse management, logistics, and smart key synchronization.",
        "Sole decision-maker on tech stack, architecture, and component strategy; established code review practices and mentored a growing frontend team.",
        "Translated product ideas into clean, performant, and extensible UI solutions in collaboration with design, product, and backend teams.",
      ],
    },
    {
      company: "Hyperlink Infosystem",
      position: "Sr. Android Developer",
      startDate: "Nov 2021",
      endDate: "Jan 2023",
      summary: [
        "Developed Android apps focusing on clean architecture (MVVM) and API integrations.",
        "Built scalable features including Google Maps, location tracking, social feeds, and custom workflows.",
        "Ensured app stability and crash resilience by leveraging Firebase Crashlytics.",
        "Worked closely with UI/UX to translate wireframes into highly functional, user-centric interfaces."
      ],
    },
    {
      company: "Arvaan Technolab",
      position: "Sr. Android Developer",
      startDate: "Oct 2019",
      endDate: "Nov 2021",
      summary: [
        "Developed Android apps for health tracking, order management, and logistics with a focus on clean UI and offline-first capabilities.",
        "Implemented local storage solutions using SQLite and Room, and followed modular architecture practices.",
        "Contributed to all stages of the app lifecycle — from requirements to deployment and maintenance."
      ],
    },
    {
      company: "MyCom",
      position: "Android Developer",
      startDate: "Oct 2017",
      endDate: "Aug 2018",
      summary: [
        "Assisted in Android app development, focusing on UI design, basic architecture, and code optimization.",
        "Prepared tech stacks and architectural guidelines for new projects.",
        "Supported product lifecycle from requirement gathering to deployment and bug-fixes."
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Jay Halani — a Senior Android and Flutter Developer with over 7 years of experience building fast, scalable, and intuitive mobile apps. 
      I specialize in crafting seamless cross-platform experiences using Android (Kotlin/Java) and Flutter. 
      My work blends performance, usability, and clean architecture — from robust mobile backends to pixel-perfect, responsive UIs. 
      I’m passionate about turning ideas into reliable, high-impact digital products that deliver real value and scale beautifully across devices.
    `,
    image: "/jayhalani-big.png",
  },
};

// #5755ff
