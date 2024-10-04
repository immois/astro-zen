export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
