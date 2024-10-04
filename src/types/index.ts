export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
