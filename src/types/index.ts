export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
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

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
