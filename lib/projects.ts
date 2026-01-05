import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Project, ProjectFrontmatter } from '@/types/project';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const readTime = readingTime(content);

      return {
        frontmatter: {
          ...data,
          slug,
        } as ProjectFrontmatter,
        content,
        readingTime: readTime.text,
      };
    });

  return allProjectsData.sort((a, b) => {
    if (new Date(a.frontmatter.date) < new Date(b.frontmatter.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const readTime = readingTime(content);

    return {
      frontmatter: {
        ...data,
        slug,
      } as ProjectFrontmatter,
      content,
      readingTime: readTime.text,
    };
  } catch (error) {
    return undefined;
  }
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.frontmatter.featured);
}

export function getAllTags(): string[] {
  const allProjects = getAllProjects();
  const tags = new Set<string>();
  
  allProjects.forEach((project) => {
    project.frontmatter.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}
