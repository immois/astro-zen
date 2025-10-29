import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nicha Wilanan - Full Stack Developer & Data Scientist",
  author: "Nicha Wilanan",
  description:
    "Software Engineer specialized in large scale applications and data science.",
  lang: "en",
  siteLogo: "/ike_small_profile.jpg",
  navLinks: [
    { text: "Articles", href: "#articles" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nicha-wilanan/" },
    { text: "Github", href: "https://github.com/ikenichaa" },
    { text: "Medium", href: "https://medium.com/@nicha.wilanan" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nicha Wilanan",
    specialty: "Full Stack Developer",
    summary:
      "A developer from Thailand, based in Newcastle upon Tyne, UK. I build full-stack web applications and data-driven solutions that bridge technology with real user needs.",
    email: "nicha.wilanan@gmail.com",
  },
  experience: [
    {
      company: "National Innovation Center for Data (Newcastle University)",
      position: "AI Trainee",
      startDate: "Sep 2025",
      endDate: "Now",
      summary: [
        "Participate in the Data Innovation Bootcamp to generate ideas and present the LLM-powered demo for Ways to Wellness to address health inequality problems by automatically summarising patient notes.",
        "Research and implement machine learning models on large-scale time series for the e-commerce client, reducing promotional costs by identifying customers most likely to respond to targeted discount vouchers.",
        "Developed and presented a demo on LLM fine-tuning, showcasing potential business use cases and practical implementation strategies to clients.",
      ],
    },
    {
      company: "LINE Company (Thailand)",
      position: "Software Engineer",
      startDate: "April 2021",
      endDate: "July 2024",
      summary: [
        "Developed an all-in-one marketing tools platform for Thailand e-commerce using TypeScript and Vue for clients.",
        "Developed and maintained a RESTful API using Golang on many microservices. Most of the APIs interacted with MongoDB and MySQL",
        "Designed the system architectures with speed and scalability in mind to allow the system to handle thousands of requests simultaneously.",
        "Captured millions of end-users’ actions daily using data pipeline coding in Python, utilising Apache Spark, Apache Kafka, Dagster, and Apache Iceberg.",
      ],
    },
    {
      company: "Finnomena",
      position: "Full Stack Developer",
      startDate: "Oct 2020",
      endDate: "April 2021",
      summary: [
        "Constructed a web application for internal users to manage the buying and selling of funds.",
        "Made and maintained a RESTful API using Golang to support funds management features.",
        "Develop and maintain the PHP legacy code, which stores core financial logic.",
        "Use complex SQL to query information from multiple relational database tables.",
      ],
    },
  ],
  projects: [
    {
      name: "Meditation App",
      summary: "A meditation timer app to help users focus and relax.",
      linkPreview: "https://benevolent-hotteok-84e8ef.netlify.app/",
      linkSource: "https://github.com/ikenichaa/meditation-timer",
      image: "/meditation.png",
    },
  ],
  articles: [
    {
      name: "NICD: Data Innovation Bootcamp",
      summary:
        "An in-depth overview of my experience and learnings from the Data Science Bootcamp at the National Innovation Center for Data, Newcastle University.",
      image: "/catalyst.jpg",
      linkSource:
        "https://medium.com/@nicha.wilanan/data-innovation-bootcamp-69dd20a3cc08",
    },
    {
      name: "Mastering Git Basics",
      summary:
        "This article aims to make notes and share the concepts and commands that I believe are important and are frequently used.",
      image: "/git.svg",
      linkSource:
        "https://medium.com/@nicha.wilanan/mastering-git-basics-frequently-used-commands-and-key-concepts-b4f6ce3d2e86",
    },
  ],
  about: {
    description: `
    I’m passionate about creating thoughtful, intuitive experiences — whether that’s crafting clean code, uncovering insights through data, or capturing everyday beauty through my lens. 
    Here, you’ll find my projects, articles where I share what I learn, and little glimpses of the world that inspires me.
    `,
    image: "/ike_big_profile.jpg",
  },
};

// #5755ff
