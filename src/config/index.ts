import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Iron Man — Genius, Billionaire, Playboy, Philanthropist",
  author: "Tony Stark",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/tony-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
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
    name: "Tony Stark",
    specialty: "Genius, Billionaire, Playboy, Philanthropist",
    summary:
      "An inventor and billionaire industrialist who is the CEO of Stark Industries. I am a founding member of the Avengers.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Stark Industries",
      position: "CEO",
      startDate: "Jan 2000",
      endDate: "Present",
      summary: [
        "Revolutionized the tech industry with cutting-edge inventions and innovations.",
        "Developed the Iron Man suit, a powerful exoskeleton that grants superhuman abilities.",
        "Led Stark Industries to become a leader in clean energy solutions.",
      ],
    },
    {
      company: "Avengers",
      position: "Founding Member",
      startDate: "May 2012",
      endDate: "Present",
      summary: [
        "Played a key role in defending Earth from various global threats.",
        "Collaborated with other superheroes to form a powerful team.",
        "Utilized advanced technology and strategic thinking to overcome challenges.",
      ],
    },
  ],
  projects: [
    {
      name: "Iron Man Suit",
      summary: "A powerful exoskeleton that grants superhuman abilities.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/ironman-suit.png",
    },
    {
      name: "Arc Reactor",
      summary: "A clean energy source that powers the Iron Man suit.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/arc-reactor.png",
    },
    {
      name: "JARVIS",
      summary: "An advanced AI system that assists Tony Stark in various tasks.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/jarvis.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Tony Stark, also known as Iron Man. I am a genius inventor and billionaire industrialist with a passion for technology and innovation. As the CEO of Stark Industries, I have revolutionized the tech industry with my cutting-edge inventions and clean energy solutions.

      As Iron Man, I have dedicated my life to protecting the world from various threats and ensuring the safety of humanity. My journey has been filled with challenges and triumphs, and I continue to push the boundaries of what’s possible with my inventions and strategic thinking.
    `,
    image: "/tony-big.jpg",
  },
};

// #5755ff
