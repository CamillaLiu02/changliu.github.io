export interface ProjectFrontmatter {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  shortDescription: string;
  role: string;
  tools: string[];
  heroImage: string;
  cardImage?: string;
  galleryImages?: string[];
  links?: {
    caseStudy?: string;
    github?: string;
    demo?: string;
    figma?: string;
  };
  featured?: boolean;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
  readingTime: string;
}

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}
